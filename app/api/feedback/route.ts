import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

type FeedbackBody = {
  rating?: number
  liked?: string
  improvements?: string
  features_used?: string[]
  nps_score?: number
  comments?: string
}

function safeText(v: unknown): string {
  return String(v ?? '').trim()
}

function clamp(n: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, n))
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as FeedbackBody

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
      return NextResponse.json({ ok: false, error: 'Missing RESEND_API_KEY env var.' }, { status: 500 })
    }

    if (!adminEmail) {
      return NextResponse.json({ ok: false, error: 'Missing ADMIN_EMAIL env var.' }, { status: 500 })
    }

    const rating = Number(body.rating)
    const liked = safeText(body.liked)
    const improvements = safeText(body.improvements)
    const features_used = Array.isArray(body.features_used) ? body.features_used.map(safeText).filter(Boolean) : []
    const nps_score = clamp(Number(body.nps_score), 0, 10)
    const comments = safeText(body.comments)

    if (!Number.isFinite(rating) || rating < 1 || rating > 5) {
      return NextResponse.json({ ok: false, error: 'rating must be 1-5' }, { status: 400 })
    }

    if (!liked || !improvements || features_used.length === 0) {
      return NextResponse.json({ ok: false, error: 'Missing required fields.' }, { status: 400 })
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
      .from('feedback')
      .insert([
        {
          user_id: user?.id || null,
          rating,
          liked,
          improvements,
          features_used,
          nps_score,
          comments: comments || null,
        },
      ])
      .select('id')
      .single()

    if (insertErr || !row) {
      return NextResponse.json({ ok: false, error: insertErr?.message || 'Failed to save feedback' }, { status: 500 })
    }

    const resend = new Resend(resendKey)

    const emailRes = await resend.emails.send({
      from: 'CPOS <onboarding@resend.dev>',
      to: [adminEmail],
      subject: `⭐ New Feedback — ${rating}/5 — NPS ${nps_score}`,
      text: [
        'New CPOS feedback received:',
        '',
        `Rating: ${rating}/5`,
        `NPS: ${nps_score}/10`,
        `Features used: ${features_used.join(', ')}`,
        '',
        'Liked:',
        liked,
        '',
        'Improvements:',
        improvements,
        '',
        comments ? `Other comments:\n${comments}\n` : '',
        `User ID: ${user?.id || 'anon'}`,
        `Feedback ID: ${row.id}`,
      ].filter(Boolean).join('\n'),
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
