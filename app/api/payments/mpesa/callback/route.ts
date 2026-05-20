import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

type MpesaCallback = {
  Body?: {
    stkCallback?: {
      MerchantRequestID?: string
      CheckoutRequestID?: string
      ResultCode?: number
      ResultDesc?: string
      CallbackMetadata?: {
        Item?: Array<{ Name?: string; Value?: string | number }>
      }
    }
  }
}

function normalizePhone(input: string): string {
  const raw = input.replace(/\s+/g, '').replace(/^\+/, '')
  if (raw.startsWith('254')) return raw
  if (raw.startsWith('0')) return `254${raw.slice(1)}`
  return raw
}

function extractPhoneFromCallback(payload: MpesaCallback): string | null {
  const items = payload?.Body?.stkCallback?.CallbackMetadata?.Item || []
  const candidates = ['PhoneNumber', 'MSISDN', 'phone', 'phoneNumber']
  for (const name of candidates) {
    const hit = items.find((i) => (i?.Name || '').toLowerCase() === name.toLowerCase())
    const value = hit?.Value
    if (typeof value === 'string' || typeof value === 'number') {
      const phone = normalizePhone(String(value))
      if (/^254\d{9}$/.test(phone)) return phone
    }
  }
  return null
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as MpesaCallback

    const checkoutRequestId = payload?.Body?.stkCallback?.CheckoutRequestID
    const merchantRequestId = payload?.Body?.stkCallback?.MerchantRequestID
    const resultCode = payload?.Body?.stkCallback?.ResultCode
    const resultDesc = payload?.Body?.stkCallback?.ResultDesc

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !serviceKey) {
      console.log('M-Pesa callback missing Supabase env vars')
      return NextResponse.json({ ok: true })
    }

    if (!checkoutRequestId) {
      console.log('M-Pesa callback missing CheckoutRequestID:', JSON.stringify(payload))
      return NextResponse.json({ ok: true })
    }

    const supabaseAdmin = createClient(supabaseUrl, serviceKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    })

    const status = resultCode === 0 ? 'success' : 'failed'

    const { data: row, error: findErr } = await supabaseAdmin
      .from('mpesa_checkout_requests')
      .select('id, user_id, tier, phone')
      .eq('checkout_request_id', checkoutRequestId)
      .maybeSingle()

    if (findErr) {
      console.log('M-Pesa callback DB lookup error:', findErr.message)
      return NextResponse.json({ ok: true })
    }

    if (!row) {
      console.log('M-Pesa callback: no matching checkout request for', checkoutRequestId)
      return NextResponse.json({ ok: true })
    }

    await supabaseAdmin
      .from('mpesa_checkout_requests')
      .update({
        status,
        merchant_request_id: merchantRequestId || null,
        result_code: typeof resultCode === 'number' ? resultCode : null,
        result_desc: resultDesc || null,
        raw_callback: payload as any,
        updated_at: new Date().toISOString(),
      })
      .eq('id', row.id)

    if (status === 'success') {
      const canonicalPhone = row.phone || extractPhoneFromCallback(payload)
      const plan = row.tier === 'enterprise' ? 'enterprise' : 'pro'

      const { error: adminErr } = await supabaseAdmin.auth.admin.updateUserById(row.user_id, {
        user_metadata: {
          ...(canonicalPhone ? { phone: canonicalPhone } : null),
          plan,
        },
      })

      if (adminErr) {
        console.log('M-Pesa callback: auth admin updateUserById error:', adminErr.message)
      }
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('[API Error]', error)
    return NextResponse.json(
      { ok: true, error: error instanceof Error ? error.message : 'Invalid callback payload' },
      { status: 200 }
    )
  }
}
