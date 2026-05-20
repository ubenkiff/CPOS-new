import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { createClient } from '@supabase/supabase-js'

type StkPushBody = {
  phone: string
  amount: number
  projectCode?: string
  accountReference?: string
  transactionDesc?: string
  tier?: 'pro' | 'enterprise'
}

function normalizePhone(input: string): string {
  const raw = input.replace(/\s+/g, '').replace(/^\+/, '')
  if (raw.startsWith('254')) return raw
  if (raw.startsWith('0')) return `254${raw.slice(1)}`
  return raw
}

function toTimestamp(date = new Date()): string {
  const pad = (n: number) => String(n).padStart(2, '0')
  return [
    date.getFullYear(),
    pad(date.getMonth() + 1),
    pad(date.getDate()),
    pad(date.getHours()),
    pad(date.getMinutes()),
    pad(date.getSeconds()),
  ].join('')
}

async function getAccessToken(baseUrl: string, key: string, secret: string): Promise<string> {
  const auth = Buffer.from(`${key}:${secret}`).toString('base64')
  const res = await fetch(`${baseUrl}/oauth/v1/generate?grant_type=client_credentials`, {
    headers: { Authorization: `Basic ${auth}` },
    cache: 'no-store',
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`OAuth failed (${res.status}): ${text}`)
  }

  const json = (await res.json()) as { access_token?: string }
  if (!json.access_token) throw new Error('OAuth token missing in response')
  return json.access_token
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as StkPushBody

    const baseUrl = process.env.MPESA_BASE_URL || 'https://sandbox.safaricom.co.ke'
    const consumerKey = process.env.MPESA_CONSUMER_KEY
    const consumerSecret = process.env.MPESA_CONSUMER_SECRET
    const shortcode = process.env.MPESA_SHORTCODE
    const passkey = process.env.MPESA_PASSKEY
    const callbackUrl = process.env.MPESA_CALLBACK_URL
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!consumerKey || !consumerSecret || !shortcode || !passkey || !callbackUrl) {
      return NextResponse.json(
        {
          ok: false,
          error:
            'Missing M-Pesa env vars. Required: MPESA_CONSUMER_KEY, MPESA_CONSUMER_SECRET, MPESA_SHORTCODE, MPESA_PASSKEY, MPESA_CALLBACK_URL',
        },
        { status: 400 }
      )
    }

    if (!supabaseUrl || !supabaseAnon || !serviceKey) {
      return NextResponse.json(
        {
          ok: false,
          error:
            'Missing Supabase env vars. Required: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY',
        },
        { status: 400 }
      )
    }

    if (!body?.phone || !body?.amount) {
      return NextResponse.json({ ok: false, error: 'phone and amount are required' }, { status: 400 })
    }

    const amount = Number(body.amount)
    if (!Number.isFinite(amount) || amount <= 0) {
      return NextResponse.json({ ok: false, error: 'amount must be a positive number' }, { status: 400 })
    }

    const phone = normalizePhone(body.phone)
    if (!/^254\d{9}$/.test(phone)) {
      return NextResponse.json(
        { ok: false, error: 'phone must be in Kenyan format, e.g. 0712345678 or 254712345678' },
        { status: 400 }
      )
    }

    const supabaseAuth = createServerClient(supabaseUrl, supabaseAnon, {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(_cookiesToSet) {
          // No cookie mutations needed for this endpoint.
        },
      },
    })

    const {
      data: { user },
    } = await supabaseAuth.auth.getUser()

    if (!user) {
      return NextResponse.json({ ok: false, error: 'Not authenticated' }, { status: 401 })
    }

    const supabaseAdmin = createClient(supabaseUrl, serviceKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    })

    const tier = body.tier || (body.accountReference?.toLowerCase().includes('ent') ? 'enterprise' : 'pro')
    const { data: checkoutRow, error: insertErr } = await supabaseAdmin
      .from('mpesa_checkout_requests')
      .insert([
        {
          user_id: user.id,
          tier,
          amount: Math.round(amount),
          phone,
          status: 'pending',
        },
      ])
      .select('id')
      .single()

    if (insertErr || !checkoutRow) {
      return NextResponse.json({ ok: false, error: insertErr?.message || 'Failed to create checkout request' }, { status: 500 })
    }

    const token = await getAccessToken(baseUrl, consumerKey, consumerSecret)
    const timestamp = toTimestamp()
    const password = Buffer.from(`${shortcode}${passkey}${timestamp}`).toString('base64')

    const payload = {
      BusinessShortCode: shortcode,
      Password: password,
      Timestamp: timestamp,
      TransactionType: 'CustomerPayBillOnline',
      Amount: Math.round(amount),
      PartyA: phone,
      PartyB: shortcode,
      PhoneNumber: phone,
      CallBackURL: callbackUrl,
      AccountReference: body.accountReference || body.projectCode || 'CPOS',
      TransactionDesc: body.transactionDesc || 'CPOS project payment',
    }

    const stkRes = await fetch(`${baseUrl}/mpesa/stkpush/v1/processrequest`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      cache: 'no-store',
    })

    const stkJson = await stkRes.json()

    if (!stkRes.ok) {
      return NextResponse.json(
        { ok: false, error: 'STK push request failed', details: stkJson },
        { status: 502 }
      )
    }

    const merchantRequestId = stkJson?.MerchantRequestID as string | undefined
    const checkoutRequestId = stkJson?.CheckoutRequestID as string | undefined
    if (checkoutRequestId) {
      await supabaseAdmin
        .from('mpesa_checkout_requests')
        .update({
          merchant_request_id: merchantRequestId || null,
          checkout_request_id: checkoutRequestId,
          updated_at: new Date().toISOString(),
        })
        .eq('id', checkoutRow.id)
    }

    return NextResponse.json({
      ok: true,
      message:
        'STK Push sent. Check the phone for M-Pesa prompt and complete payment. Confirm result from callback/status.',
      data: stkJson,
      checkoutRequestId,
    })
  } catch (error) {
    console.error('[API Error]', error)
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : 'Unknown M-Pesa error' },
      { status: 500 }
    )
  }
}
