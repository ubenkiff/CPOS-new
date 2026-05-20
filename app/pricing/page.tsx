'use client'

import { Suspense, useMemo, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { supabase } from '../supabase'

type Tier = {
  key: 'free' | 'pro'
  title: string
  price: string
  description: string
  bullets: string[]
  cta?: string
}

const TIERS: Tier[] = [
  {
    key: 'free',
    title: 'FREE',
    price: '$0',
    description: 'Try CPOS with 1 full-feature project (plus the public demo).',
    bullets: [
      '1 free project — full features',
      'SOW, BOQ, Gantt, Reports, Documents',
      'Browse all sample project teasers',
      'Hire a Remote PM',
    ],
  },
  {
    key: 'pro',
    title: 'PRO',
    price: 'Pro',
    description: 'For contractors managing real projects end-to-end.',
    bullets: ['Up to 5 active projects', 'Everything in Free', 'Priority support'],
  },
]

function PricingPageInner() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [loadingTier, setLoadingTier] = useState<'10' | '29' | null>(null)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const selectedTier = useMemo(() => {
    const t = (searchParams.get('tier') || 'pro').toLowerCase()
    if (t === 'free') return 'free'
    return 'pro'
  }, [searchParams])

  async function startStripeCheckout(priceTier: '10' | '29') {
    setError('')
    setMessage('')
    setLoadingTier(priceTier)

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push(`/login?next=${encodeURIComponent('/pricing')}`)
      setLoadingTier(null)
      return
    }

    try {
      const res = await fetch('/api/payments/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tier: 'pro',
          priceTier,
        }),
      })

      const json = await res.json()
      if (!res.ok || !json?.ok || !json?.url) {
        setError(json?.error || 'Failed to start Stripe checkout')
        setLoadingTier(null)
        return
      }

      window.location.href = json.url as string
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Unknown payment error')
      setLoadingTier(null)
    }
  }

  return (
    <div
      className="pricing-wrap"
      style={{
        fontFamily: "'DM Mono', 'Courier New', monospace",
        background: '#0a0c0e',
        minHeight: '100vh',
        color: '#c9d1d9',
        padding: '40px 24px',
        backgroundImage:
          'linear-gradient(rgba(96,165,250,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.025) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Barlow+Condensed:wght@500;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .btn { background: #161b22; border: 1px solid #30363d; border-radius: 6px; color: #c9d1d9; padding: 10px 14px; font-weight: 700; cursor: pointer; font-family: inherit; font-size: 12px; }
        .btn:hover { border-color: #f59e0b; color: #f59e0b; }
        .btn-primary { background: #f59e0b; border-color: #f59e0b; color: #0a0c0e; }
        .btn-primary:hover { background: #fbbf24; color: #0a0c0e; }
        .card { background: #0d1117; border: 1px solid #21262d; border-radius: 10px; padding: 22px; }
        .input { width: 100%; background: #0a0c0e; border: 1px solid #21262d; border-radius: 6px; color: #c9d1d9; padding: 10px 12px; font-family: inherit; font-size: 12px; outline: none; }
        .input:focus { border-color: #f59e0b; }

        @media (max-width: 640px) {
          .pricing-wrap { padding: 18px 12px !important; }
          .pricing-header { flex-direction: column !important; align-items: stretch !important; }
          .pricing-actions { width: 100% !important; }
          .pricing-actions .btn { width: 100% !important; }
          .tier-grid { grid-template-columns: 1fr !important; }
          .card { padding: 18px !important; }
        }
      `}</style>

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="pricing-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, flexWrap: 'wrap', marginBottom: 24 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
              <div style={{ width: 32, height: 32, background: '#f59e0b', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" fill="none" stroke="#0a0c0e" strokeWidth="2.5" viewBox="0 0 24 24">
                  <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
                </svg>
              </div>
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 20, color: '#e6edf3', letterSpacing: '0.06em' }}>CPOS</span>
            </div>
            <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 30, color: '#e6edf3', letterSpacing: '0.02em' }}>PRICING</h1>
            <p style={{ color: '#484f58', fontSize: 12, marginTop: 4 }}>
              Upgrade to unlock full project access.
            </p>
          </div>
          <div className="pricing-actions" style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <button className="btn" onClick={() => router.push('/dashboard')}>← Back to Dashboard</button>
          </div>
        </div>

        <div className="tier-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14 }}>
          {TIERS.map((tier) => {
            const highlight = tier.key === selectedTier
            return (
              <div
                key={tier.key}
                className="card"
                style={{
                  borderColor: highlight ? '#f59e0b' : '#21262d',
                  boxShadow: highlight ? '0 8px 24px rgba(245,158,11,0.08)' : 'none',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 18, color: '#e6edf3', letterSpacing: '0.06em' }}>{tier.title}</div>
                  <div style={{ color: '#f59e0b', fontWeight: 800, fontSize: 14 }}>{tier.price}</div>
                </div>

                <div style={{ fontSize: 12, color: '#6e7681', lineHeight: 1.6, marginBottom: 14 }}>{tier.description}</div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
                  {tier.bullets.map((b) => (
                    <div key={b} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: 12, color: '#c9d1d9' }}>
                      <span style={{ color: '#4ade80' }}>✓</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                {tier.key === 'free' && (
                  <button className="btn" onClick={() => router.push('/dashboard/demo')} style={{ width: '100%' }}>
                    View Demo Project
                  </button>
                )}

                {tier.key === 'pro' && (
                  <div>
                    <button
                      className="btn btn-primary"
                      disabled={loadingTier !== null}
                      onClick={() => startStripeCheckout('10')}
                      style={{ width: '100%', marginBottom: 10 }}
                    >
                      {loadingTier === '10' ? 'Redirecting to Stripe...' : 'Subscribe — $10/month'}
                    </button>

                    <button
                      className="btn"
                      disabled={loadingTier !== null}
                      onClick={() => startStripeCheckout('29')}
                      style={{ width: '100%' }}
                    >
                      {loadingTier === '29' ? 'Redirecting to Stripe...' : 'Subscribe — $29/month (6 months free)'}
                    </button>

                    <div style={{ marginTop: 14, paddingTop: 14, borderTop: '1px solid #21262d' }}>
                      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/320px-PayPal.svg.png"
                          alt="PayPal"
                          style={{ height: 22 }}
                        />
                      </div>
                      <div style={{ textAlign: 'center', lineHeight: 1.4 }}>
                        <a
                          href="https://paypal.me/UddiBenkiff"
                          target="_blank"
                          rel="noreferrer"
                          style={{ fontSize: 12, color: '#003087', fontWeight: 700, textDecoration: 'none' }}
                        >
                          PayPal — Send payment to paypal.me/UddiBenkiff
                        </a>
                      </div>
                      <div style={{ marginTop: 6, fontSize: 11, color: '#6e7681', textAlign: 'center', lineHeight: 1.4 }}>
                        Send payment then contact us to activate your plan
                      </div>
                    </div>

                    <div style={{ marginTop: 14, paddingTop: 14, borderTop: '1px solid #21262d' }}>
                      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
                        <img
                          src="/mpesa.svg"
                          alt="M-Pesa"
                          style={{ height: 26 }}
                        />
                      </div>
                      <div style={{ fontSize: 12, color: '#4ade80', fontWeight: 700, textAlign: 'center', lineHeight: 1.4 }}>
                        M-Pesa — Send Money to +254-716747291 Uddi Awinda
                      </div>
                      <div style={{ marginTop: 6, fontSize: 11, color: '#6e7681', textAlign: 'center', lineHeight: 1.4 }}>
                        Send payment then contact us to activate your plan
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {(message || error) && (
          <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: '1fr', gap: 12 }}>
            <div className="card" style={{ padding: 18 }}>
              <div style={{ fontSize: 11, color: '#484f58', letterSpacing: '0.08em', marginBottom: 10 }}>PAYMENT STATUS</div>

              {message && (
                <div style={{ background: '#0a1a0a', border: '1px solid #4ade8033', padding: '10px 12px', borderRadius: 8, color: '#4ade80', fontSize: 12 }}>
                  {message}
                </div>
              )}
              {error && (
                <div style={{ background: '#1a0a0a', border: '1px solid #f8717133', padding: '10px 12px', borderRadius: 8, color: '#f87171', fontSize: 12 }}>
                  {error}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function PricingPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', background: '#0a0c0e' }} />}> 
      <PricingPageInner />
    </Suspense>
  )
}
