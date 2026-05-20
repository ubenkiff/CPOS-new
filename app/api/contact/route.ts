import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

type ContactBody = {
  name?: string
  email?: string
  subject?: string
  message?: string
}

function safeText(v: unknown): string {
  return String(v ?? '').trim()
}

function isEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactBody

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
        { ok: false, error: 'Missing RESEND_API_KEY env var.' },
        { status: 500 }
      )
    }

    if (!adminEmail) {
      return NextResponse.json(
        { ok: false, error: 'Missing ADMIN_EMAIL env var.' },
        { status: 500 }
      )
    }

    const name = safeText(body.name)
    const email = safeText(body.email)
    const subject = safeText(body.subject)
    const message = safeText(body.message)

    if (!name || !email || !isEmail(email) || !subject || !message) {
      return NextResponse.json({ ok: false, error: 'Invalid payload.' }, { status: 400 })
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

    const { data: row, error: insertErr } = await supabaseAdmin
      .from('contact_messages')
      .insert([
        {
          user_id: user?.id || null,
          name,
          email,
          subject,
          message,
          status: 'new',
        },
      ])
      .select('id')
      .single()

    if (insertErr || !row) {
      return NextResponse.json({ ok: false, error: insertErr?.message || 'Failed to save message' }, { status: 500 })
    }

    const resend = new Resend(resendKey)

    const emailRes = await resend.emails.send({
      from: 'CPOS <onboarding@resend.dev>',
      to: [adminEmail],
      subject: `🔔 CPOS Alert — New Contact Message: ${subject} — ${name}`,
      text: [
        'New CPOS contact message:',
        '',
        `From: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        '',
        message,
        '',
        `User ID: ${user?.id || 'anon'}`,
        `Message ID: ${row.id}`,
      ].join('\n'),
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
