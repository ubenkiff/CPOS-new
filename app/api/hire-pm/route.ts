import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

type HirePmBody = {
  project_name?: string
  project_type?: string
  location?: string
  description?: string
  budget?: number
  currency?: string
  start_date?: string
  duration?: string
  procurement_stage?: string
  client_name?: string
  company?: string | null
  email?: string
  phone?: string
  referral_source?: string
}

function safeText(v: unknown): string {
  return String(v ?? '').trim()
}

function normalizePhone(input: unknown): string {
  const raw = safeText(input).replace(/\s+/g, '').replace(/^\+/, '')
  if (raw.startsWith('254')) return raw
  if (raw.startsWith('0')) return `254${raw.slice(1)}`
  return raw
}

function isEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as HirePmBody

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
    const resendKey = process.env.RESEND_API_KEY
    const adminEmail = process.env.ADMIN_EMAIL

    if (!supabaseUrl || !supabaseAnon || !serviceKey) {
      return NextResponse.json(
        {
          ok: false,
          error:
            'Missing Supabase env vars. Required: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY',
        },
        { status: 500 }
      )
    }

    if (!resendKey) {
      return NextResponse.json(
        {
          ok: false,
          error: 'Missing RESEND_API_KEY env var. Add it to .env.local and Vercel env vars.',
        },
        { status: 500 }
      )
    }

    if (!adminEmail) {
      return NextResponse.json(
        {
          ok: false,
          error: 'Missing ADMIN_EMAIL env var. Add it to .env.local and Vercel env vars.',
        },
        { status: 500 }
      )
    }

    const project_name = safeText(body.project_name)
    const project_type = safeText(body.project_type)
    const location = safeText(body.location)
    const description = safeText(body.description)
    const currency = safeText(body.currency)
    const start_date = safeText(body.start_date)
    const duration = safeText(body.duration)
    const procurement_stage = safeText(body.procurement_stage)
    const client_name = safeText(body.client_name)
    const company = safeText(body.company ?? '')
    const email = safeText(body.email ?? '')
    const phone = normalizePhone(body.phone ?? '')
    const referral_source = safeText(body.referral_source ?? '')

    const budget = Number(body.budget)

    if (!project_name || !project_type || !location || !description) {
      return NextResponse.json({ ok: false, error: 'Missing required project fields.' }, { status: 400 })
    }

    if (!currency || !Number.isFinite(budget) || budget <= 0 || !start_date || !duration || !procurement_stage) {
      return NextResponse.json({ ok: false, error: 'Missing required budget/timeline fields.' }, { status: 400 })
    }

    if (!client_name || !email || !isEmail(email) || !phone || !/^254\d{9}$/.test(phone) || !referral_source) {
      return NextResponse.json({ ok: false, error: 'Missing or invalid client fields.' }, { status: 400 })
    }

    const supabaseAuth = createServerClient(supabaseUrl, supabaseAnon, {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(_cookiesToSet) {
          // No cookie mutations needed.
        },
      },
    })

    const {
      data: { user },
    } = await supabaseAuth.auth.getUser()

    const supabaseAdmin = createClient(supabaseUrl, serviceKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    })

    const insertPayload = {
      user_id: user?.id || null,
      project_name,
      project_type,
      location,
      description,
      budget,
      currency,
      start_date: start_date || null,
      duration,
      procurement_stage,
      client_name,
      company: company || null,
      email,
      phone,
      referral_source,
    }

    const { data: row, error: insertErr } = await supabaseAdmin
      .from('pm_requests')
      .insert([insertPayload])
      .select('id, created_at')
      .single()

    if (insertErr || !row) {
      return NextResponse.json({ ok: false, error: insertErr?.message || 'Failed to save request' }, { status: 500 })
    }

    const resend = new Resend(resendKey)

    const subject = `🔔 CPOS Alert — New PM Request — ${project_name}`

    const lines = [
      'New project request received on CPOS:',
      '',
      `Project: ${project_name}`,
      `Type: ${project_type}`,
      `Location: ${location}`,
      `Budget: ${currency} ${budget}`,
      `Start Date: ${start_date}`,
      `Duration: ${duration}`,
      `Stage: ${procurement_stage}`,
      '',
      `Client: ${client_name}`,
      `Company: ${company || '—'}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Source: ${referral_source}`,
      '',
      'View in Supabase:',
      'https://supabase.com/dashboard/project/jjoiosvpchabcrbtzaaq',
      '',
      `Request ID: ${row.id}`,
    ]

    const emailRes = await resend.emails.send({
      from: 'CPOS <onboarding@resend.dev>',
      to: [adminEmail],
      subject,
      text: lines.join('\n'),
    })

    if ((emailRes as any)?.error) {
      return NextResponse.json(
        { ok: false, error: (emailRes as any).error?.message || 'Email send failed' },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true, id: row.id })
  } catch (error) {
    console.error('[API Error]', error)
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : 'Invalid request' },
      { status: 400 }
    )
  }
}
