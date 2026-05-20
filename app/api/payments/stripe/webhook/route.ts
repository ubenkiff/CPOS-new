import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: Request) {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!stripeSecretKey || !webhookSecret) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Missing Stripe env vars. Required: STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET',
      },
      { status: 400 }
    )
  }

  if (!supabaseUrl || !serviceKey) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Missing Supabase env vars. Required: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY',
      },
      { status: 400 }
    )
  }

  try {
    const stripe = new Stripe(stripeSecretKey, { apiVersion: '2024-06-20' })

    const sig = request.headers.get('stripe-signature')
    if (!sig) {
      return NextResponse.json({ ok: false, error: 'Missing stripe-signature header' }, { status: 400 })
    }

    const rawBody = await request.text()
    const event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret)

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session
      const userId = (session.metadata?.user_id as string | undefined) || undefined
      const tier = (session.metadata?.tier as string | undefined) || undefined

      if (userId && tier === 'pro') {
        const supabaseAdmin = createClient(supabaseUrl, serviceKey, {
          auth: { persistSession: false, autoRefreshToken: false },
        })

        await supabaseAdmin.auth.admin.updateUserById(userId, {
          user_metadata: {
            plan: 'pro',
            stripe_customer_id: session.customer ?? null,
          },
        })
      }
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('[Stripe Webhook Error]', error)
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : 'Unknown webhook error' },
      { status: 400 }
    )
  }
}
