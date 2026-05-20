import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import Stripe from 'stripe'
import { createServerClient } from '@supabase/ssr'

export async function POST(request: NextRequest) {
  try {
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY
    const pro10PriceId = process.env.STRIPE_PRO_PRICE_ID
    const pro29PriceId = process.env.STRIPE_PRO_29_PRICE_ID

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!stripeSecretKey || !pro10PriceId) {
      return NextResponse.json(
        {
          ok: false,
          error: 'Missing Stripe env vars. Required: STRIPE_SECRET_KEY, STRIPE_PRO_PRICE_ID',
        },
        { status: 400 }
      )
    }

    if (!supabaseUrl || !supabaseAnon) {
      return NextResponse.json(
        {
          ok: false,
          error: 'Missing Supabase env vars. Required: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY',
        },
        { status: 400 }
      )
    }

    const { tier, priceTier } = (await request.json().catch(() => ({}))) as {
      tier?: 'pro'
      priceTier?: '10' | '29'
    }
    if (tier && tier !== 'pro') {
      return NextResponse.json({ ok: false, error: 'Only pro tier is supported' }, { status: 400 })
    }

    const supabaseAuth = createServerClient(supabaseUrl, supabaseAnon, {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll() {
          // no cookie mutations
        },
      },
    })

    const {
      data: { user },
    } = await supabaseAuth.auth.getUser()

    if (!user) {
      return NextResponse.json({ ok: false, error: 'Not authenticated' }, { status: 401 })
    }

    const origin =
      process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '')

    if (!origin) {
      return NextResponse.json(
        {
          ok: false,
          error: 'Missing site URL. Set NEXT_PUBLIC_SITE_URL (recommended) or VERCEL_URL must be present.',
        },
        { status: 400 }
      )
    }

    const stripe = new Stripe(stripeSecretKey, { apiVersion: '2024-06-20' })

    const selectedPriceTier = priceTier === '29' ? '29' : '10'
    const selectedPriceId = selectedPriceTier === '29' ? pro29PriceId : pro10PriceId

    if (!selectedPriceId) {
      return NextResponse.json(
        {
          ok: false,
          error:
            selectedPriceTier === '29'
              ? 'Missing Stripe env var. Required for this tier: STRIPE_PRO_29_PRICE_ID'
              : 'Missing Stripe env var. Required: STRIPE_PRO_PRICE_ID',
        },
        { status: 400 }
      )
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card', 'paypal'],
      line_items: [{ price: selectedPriceId, quantity: 1 }],
      success_url: `${origin}/pricing?success=1`,
      cancel_url: `${origin}/pricing?canceled=1`,
      customer_email: user.email ?? undefined,
      metadata: {
        user_id: user.id,
        tier: 'pro',
      },
      ...(selectedPriceTier === '29'
        ? {
            subscription_data: {
              trial_period_days: 180,
            },
          }
        : null),
    })

    return NextResponse.json({ ok: true, url: session.url })
  } catch (error) {
    console.error('[Stripe Checkout Error]', error)
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : 'Unknown Stripe error' },
      { status: 500 }
    )
  }
}
