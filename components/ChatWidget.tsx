'use client'

import { useEffect, useMemo, useState } from 'react'
import { supabase } from '../app/supabase'

type TabKey = 'faq' | 'contact' | 'feedback'

type ContactSubject =
  | 'General Enquiry'
  | 'Technical Support'
  | 'Billing / Payments'
  | 'Hire a PM'
  | 'Partnership'
  | 'Other'

type ContactFormState = {
  name: string
  email: string
  subject: ContactSubject
  message: string
}

type FeedbackFormState = {
  rating: number
  liked: string
  improvements: string
  features_used: string[]
  nps_score: number
  comments: string
}

const FEATURES = ['SOW', 'BOQ', 'Gantt', 'Reports', 'Documents', 'Hire PM', 'Dashboard'] as const

function safeText(v: unknown): string {
  return String(v ?? '').trim()
}

function clamp(n: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, n))
}

function StarRow({ value, onChange }: { value: number; onChange: (next: number) => void }) {
  return (
    <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
      {[1, 2, 3, 4, 5].map((i) => {
        const active = i <= value
        return (
          <button
            key={i}
            type="button"
            onClick={() => onChange(i)}
            aria-label={`${i} star`}
            style={{
              width: 28,
              height: 28,
              borderRadius: 8,
              border: `1px solid ${active ? '#f59e0b88' : '#30363d'}`,
              background: active ? '#1a120a' : '#0a0c0e',
              color: active ? '#f59e0b' : '#6e7681',
              cursor: 'pointer',
              fontSize: 14,
              lineHeight: '26px',
              fontWeight: 800,
              fontFamily: 'inherit',
            }}
          >
            ★
          </button>
        )
      })}
      <div style={{ marginLeft: 8, fontSize: 11, color: '#6e7681' }}>{value}/5</div>
    </div>
  )
}

function Chip({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        borderRadius: 999,
        padding: '6px 10px',
        border: `1px solid ${active ? '#10b98188' : '#30363d'}`,
        background: active ? '#071a14' : '#0a0c0e',
        color: active ? '#34d399' : '#8b949e',
        cursor: 'pointer',
        fontSize: 11,
        fontWeight: 800,
        letterSpacing: '0.04em',
        fontFamily: 'inherit',
      }}
    >
      {label}
    </button>
  )
}

function FaqItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string
  a: string
  open: boolean
  onToggle: () => void
}) {
  return (
    <div
      style={{
        background: '#0a0c0e',
        border: '1px solid #21262d',
        borderRadius: 10,
        padding: 12,
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        style={{
          width: '100%',
          textAlign: 'left',
          background: 'transparent',
          border: 'none',
          color: '#e6edf3',
          cursor: 'pointer',
          fontFamily: 'inherit',
          fontWeight: 900,
          letterSpacing: '0.02em',
          fontSize: 12,
          lineHeight: 1.5,
          display: 'flex',
          justifyContent: 'space-between',
          gap: 10,
        }}
      >
        <span>{q}</span>
        <span style={{ color: '#6e7681', fontWeight: 900 }}>{open ? '−' : '+'}</span>
      </button>

      {open && (
        <div style={{ marginTop: 10, fontSize: 12, color: '#c9d1d9', lineHeight: 1.7 }}>
          {a.split('\n').map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [tab, setTab] = useState<TabKey>('faq')
  const [authed, setAuthed] = useState(false)

  const [contact, setContact] = useState<ContactFormState>({
    name: '',
    email: '',
    subject: 'General Enquiry',
    message: '',
  })
  const [contactLoading, setContactLoading] = useState(false)
  const [contactDone, setContactDone] = useState(false)
  const [contactError, setContactError] = useState('')

  const [feedback, setFeedback] = useState<FeedbackFormState>({
    rating: 0,
    liked: '',
    improvements: '',
    features_used: [],
    nps_score: 8,
    comments: '',
  })
  const [feedbackLoading, setFeedbackLoading] = useState(false)
  const [feedbackDone, setFeedbackDone] = useState(false)
  const [feedbackError, setFeedbackError] = useState('')

  const [faqOpen, setFaqOpen] = useState<string>('What is CPOS?')

  useEffect(() => {
    let cancelled = false

    // Listen to token refresh failure events globally
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event) => {
      if ((event as any) === 'TOKEN_REFRESH_FAILED') {
        console.warn('Refresh token failed/expired handled by ChatWidget, clearing local state')
        try {
          await supabase.auth.signOut({ scope: 'local' })
        } catch (_) {}
        if (!cancelled) setAuthed(false)
      }
    })

    async function loadUser() {
      try {
        const { data, error } = await supabase.auth.getUser()
        if (error) {
          console.warn('User load error in ChatWidget, checking if local cleanup is needed:', error)
          if (error.status === 400 || error.status === 429 || error.message?.includes('Refresh Token')) {
            console.warn('Automatically clearing local invalid auth session in ChatWidget')
            await supabase.auth.signOut({ scope: 'local' })
          }
          if (cancelled) return
          setAuthed(false)
          return
        }
        if (cancelled) return
        const user = data?.user
        if (!user) {
          setAuthed(false)
          return
        }

        setAuthed(true)
        const fullName = safeText((user.user_metadata as any)?.full_name)
        const email = safeText(user.email)

        setContact((c) => ({
          ...c,
          name: c.name || fullName,
          email: c.email || email,
        }))
      } catch (err) {
        console.error('Failed to resolve auth session inside ChatWidget:', err)
      }
    }

    loadUser()
    return () => {
      cancelled = true
      subscription?.unsubscribe()
    }
  }, [])

  const faq = useMemo(
    () => [
      {
        q: 'What is CPOS?',
        a: `CPOS is a Construction Project Operating System built for the AEC industry. It helps project managers track scope, costs, schedules, and documents end-to-end.`,
      },
      {
        q: 'How do I import my project data?',
        a: `Go to your project → SOW module → Upload your CPOS Master Template (.xlsx). Download the template from the SOW module if you don't have it.`,
      },
      {
        q: 'What is the Pro plan?',
        a: `Pro gives you up to 5 active projects with full edit access to all modules for $29/month (KES 3,727). Pay via M-Pesa on the pricing page.`,
      },
      {
        q: 'How do I hire a Remote PM?',
        a: `Click "Hire Remote PM" on your dashboard, fill in your project details, and submit. Uddi Benkiff will be in touch within 24 hours.`,
      },
      {
        q: 'Is my data secure?',
        a: `Yes. All data is stored in Supabase with row-level security. Only you can see your own projects.`,
      },
      {
        q: 'How do I export reports?',
        a: `Go to your project → Reports → select report type → click Export PDF. Your browser will open the print dialog.`,
      },
      {
        q: "I can't find my answer here.",
        a: `Click the Contact Us tab to send us a message directly.`,
      },
    ],
    []
  )

  const panelStyle: React.CSSProperties = {
    position: 'fixed',
    right: 24,
    bottom: 24,
    width: 320,
    height: 480,
    borderRadius: 14,
    background: '#0d1117',
    border: '1px solid #21262d',
    boxShadow: '0 18px 40px rgba(0,0,0,0.55)',
    overflow: 'hidden',
    transform: open ? 'translateY(0px)' : 'translateY(16px)',
    opacity: open ? 1 : 0,
    pointerEvents: open ? 'auto' : 'none',
    transition: 'all 180ms ease',
    zIndex: 9999,
    fontFamily: "'DM Mono','Courier New',monospace",
    color: '#c9d1d9',
    display: 'flex',
    flexDirection: 'column',
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: '#0a0c0e',
    border: '1px solid #21262d',
    borderRadius: 8,
    color: '#c9d1d9',
    fontFamily: 'inherit',
    fontSize: 12,
    padding: '10px 12px',
    outline: 'none',
  }

  const labelStyle: React.CSSProperties = {
    fontSize: 10,
    color: '#484f58',
    letterSpacing: '0.08em',
    marginBottom: 6,
    display: 'block',
  }

  async function submitContact() {
    setContactDone(false)
    setContactError('')
    setContactLoading(true)
    try {
      const payload = {
        name: safeText(contact.name),
        email: safeText(contact.email),
        subject: contact.subject,
        message: safeText(contact.message),
      }

      if (!payload.name || !payload.email || !payload.subject || !payload.message) {
        setContactError('Please fill in all fields.')
        return
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json()
      if (!res.ok || !json?.ok) {
        setContactError(json?.error || 'Failed to send message.')
        return
      }

      setContactDone(true)
      setContact((c) => ({ ...c, message: '' }))
    } catch (e) {
      setContactError(e instanceof Error ? e.message : 'Unknown error')
    } finally {
      setContactLoading(false)
    }
  }

  async function submitFeedback() {
    setFeedbackDone(false)
    setFeedbackError('')
    setFeedbackLoading(true)
    try {
      const payload = {
        rating: feedback.rating,
        liked: safeText(feedback.liked),
        improvements: safeText(feedback.improvements),
        features_used: feedback.features_used,
        nps_score: clamp(Number(feedback.nps_score), 0, 10),
        comments: safeText(feedback.comments),
      }

      if (!payload.rating) {
        setFeedbackError('Please select a rating (1–5).')
        return
      }
      if (!payload.liked || !payload.improvements || !payload.features_used.length) {
        setFeedbackError('Please complete the required feedback fields.')
        return
      }

      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json()
      if (!res.ok || !json?.ok) {
        setFeedbackError(json?.error || 'Failed to submit feedback.')
        return
      }

      setFeedbackDone(true)
    } catch (e) {
      setFeedbackError(e instanceof Error ? e.message : 'Unknown error')
    } finally {
      setFeedbackLoading(false)
    }
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Barlow+Condensed:wght@700;800&display=swap');
        @keyframes cposPulse {
          0% { box-shadow: 0 0 0 0 rgba(245,158,11,0.35); }
          70% { box-shadow: 0 0 0 14px rgba(245,158,11,0.0); }
          100% { box-shadow: 0 0 0 0 rgba(245,158,11,0.0); }
        }
        .cpos-chat-fab {
          width: 56px; height: 56px; border-radius: 999px;
          background: #f59e0b; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 10px 24px rgba(0,0,0,0.45);
          animation: cposPulse 2.4s infinite;
          transition: transform 0.15s ease, background 0.15s ease;
          font-family: 'DM Mono', monospace;
        }
        .cpos-chat-fab:hover { transform: translateY(-2px); background: #fbbf24; }
        .cpos-chat-fab:active { transform: translateY(0px); }

        .cpos-tab {
          flex: 1;
          border: 1px solid #30363d;
          background: transparent;
          color: #8b949e;
          padding: 8px 10px;
          border-radius: 10px;
          cursor: pointer;
          font-weight: 900;
          letter-spacing: 0.04em;
          font-size: 11px;
          font-family: inherit;
        }
        .cpos-tab.active {
          background: #1a120a;
          border-color: #f59e0b55;
          color: #f59e0b;
        }

        .cpos-btn-amber {
          background: #f59e0b;
          border: none;
          border-radius: 10px;
          color: #0a0c0e;
          padding: 10px 12px;
          font-weight: 900;
          letter-spacing: 0.05em;
          cursor: pointer;
          font-family: inherit;
          font-size: 12px;
          width: 100%;
        }
        .cpos-btn-amber:hover { background: #fbbf24; }
        .cpos-btn-amber:disabled { background: #484f58; cursor: not-allowed; }

        input:focus, textarea:focus, select:focus {
          border-color: #f59e0b !important;
          box-shadow: 0 0 0 3px rgba(245,158,11,0.10);
        }
      `}</style>

      <div style={{ position: 'fixed', right: 24, bottom: 24, zIndex: 10000 }}>
        <button
          type="button"
          className="cpos-chat-fab"
          aria-label={open ? 'Close chat' : 'Open chat'}
          onClick={() => setOpen((v) => !v)}
          style={{ animationPlayState: open ? 'paused' : 'running' }}
        >
          <span style={{ fontSize: 20, fontWeight: 900, color: '#0a0c0e' }}>💬</span>
        </button>
      </div>

      <div style={panelStyle} role="dialog" aria-label="CPOS Support chat panel">
        <div
          style={{
            padding: '12px 12px',
            borderBottom: '1px solid #21262d',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
            background: '#0b0f14',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                background: '#f59e0b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="14" height="14" fill="none" stroke="#0a0c0e" strokeWidth="2.5" viewBox="0 0 24 24">
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
              </svg>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                }}
              >
                CPOS Support
              </div>
              <div style={{ fontSize: 10, color: '#6e7681', marginTop: 2 }}>
                Typically replies within 24 hours
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close chat"
            style={{
              background: 'transparent',
              border: '1px solid #30363d',
              borderRadius: 10,
              color: '#8b949e',
              cursor: 'pointer',
              width: 32,
              height: 32,
              fontWeight: 900,
              fontFamily: 'inherit',
            }}
          >
            ×
          </button>
        </div>

        <div style={{ padding: 12, borderBottom: '1px solid #21262d', background: '#0d1117' }}>
          <div style={{ display: 'flex', gap: 8 }}>
            <button
              type="button"
              className={`cpos-tab ${tab === 'faq' ? 'active' : ''}`}
              onClick={() => setTab('faq')}
            >
              FAQ
            </button>
            <button
              type="button"
              className={`cpos-tab ${tab === 'contact' ? 'active' : ''}`}
              onClick={() => setTab('contact')}
            >
              Contact Us
            </button>
            <button
              type="button"
              className={`cpos-tab ${tab === 'feedback' ? 'active' : ''}`}
              onClick={() => setTab('feedback')}
            >
              Feedback
            </button>
          </div>
        </div>

        <div style={{ padding: 12, overflow: 'auto', flex: 1 }}>
          {tab === 'faq' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {faq.map((item) => (
                <FaqItem
                  key={item.q}
                  q={item.q}
                  a={item.a}
                  open={faqOpen === item.q}
                  onToggle={() => setFaqOpen((cur) => (cur === item.q ? '' : item.q))}
                />
              ))}
            </div>
          )}

          {tab === 'contact' && (
            <div>
              {!authed && (
                <div
                  style={{
                    background: '#1a1508',
                    border: '1px solid #f59e0b33',
                    borderRadius: 10,
                    padding: 12,
                    fontSize: 11,
                    color: '#c9d1d9',
                    lineHeight: 1.6,
                    marginBottom: 12,
                  }}
                >
                  Tip: Create an account for faster support and better tracking.
                </div>
              )}

              <div style={{ display: 'grid', gap: 10 }}>
                <div>
                  <label style={labelStyle}>NAME</label>
                  <input
                    value={contact.name}
                    onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
                    placeholder="Your name"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>EMAIL</label>
                  <input
                    value={contact.email}
                    onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
                    placeholder="you@example.com"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>SUBJECT</label>
                  <select
                    value={contact.subject}
                    onChange={(e) =>
                      setContact((c) => ({ ...c, subject: e.target.value as ContactSubject }))
                    }
                    style={inputStyle}
                  >
                    {[
                      'General Enquiry',
                      'Technical Support',
                      'Billing / Payments',
                      'Hire a PM',
                      'Partnership',
                      'Other',
                    ].map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>MESSAGE</label>
                  <textarea
                    value={contact.message}
                    onChange={(e) => setContact((c) => ({ ...c, message: e.target.value }))}
                    placeholder="How can we help?"
                    rows={4}
                    style={{ ...inputStyle, resize: 'vertical' }}
                  />
                </div>

                {contactError && (
                  <div
                    style={{
                      background: '#1a0a0a',
                      border: '1px solid #f8717133',
                      borderRadius: 10,
                      padding: 10,
                      fontSize: 11,
                      color: '#f87171',
                      lineHeight: 1.6,
                    }}
                  >
                    {contactError}
                  </div>
                )}

                {contactDone && (
                  <div
                    style={{
                      background: '#071a14',
                      border: '1px solid #10b98133',
                      borderRadius: 10,
                      padding: 10,
                      fontSize: 11,
                      color: '#34d399',
                      lineHeight: 1.6,
                    }}
                  >
                    Message sent! We'll be in touch soon. ✅
                  </div>
                )}

                <button
                  type="button"
                  className="cpos-btn-amber"
                  disabled={contactLoading}
                  onClick={submitContact}
                >
                  {contactLoading ? 'SENDING...' : 'Send Message'}
                </button>
              </div>
            </div>
          )}

          {tab === 'feedback' && (
            <div style={{ display: 'grid', gap: 12 }}>
              <div>
                <label style={labelStyle}>OVERALL RATING *</label>
                <StarRow value={feedback.rating} onChange={(n) => setFeedback((f) => ({ ...f, rating: n }))} />
              </div>

              <div>
                <label style={labelStyle}>WHAT DO YOU LIKE MOST? *</label>
                <textarea
                  value={feedback.liked}
                  onChange={(e) => setFeedback((f) => ({ ...f, liked: e.target.value }))}
                  rows={3}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  placeholder="Tell us what’s working well..."
                />
              </div>

              <div>
                <label style={labelStyle}>WHAT COULD BE IMPROVED? *</label>
                <textarea
                  value={feedback.improvements}
                  onChange={(e) => setFeedback((f) => ({ ...f, improvements: e.target.value }))}
                  rows={3}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  placeholder="What should we fix or improve?"
                />
              </div>

              <div>
                <label style={labelStyle}>WHICH FEATURES DO YOU USE MOST? *</label>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {FEATURES.map((label) => {
                    const active = feedback.features_used.includes(label)
                    return (
                      <Chip
                        key={label}
                        label={label}
                        active={active}
                        onClick={() =>
                          setFeedback((f) => ({
                            ...f,
                            features_used: active
                              ? f.features_used.filter((x) => x !== label)
                              : [...f.features_used, label],
                          }))
                        }
                      />
                    )
                  })}
                </div>
              </div>

              <div>
                <label style={labelStyle}>HOW LIKELY ARE YOU TO RECOMMEND CPOS? (NPS 0–10)</label>
                <input
                  type="range"
                  min={0}
                  max={10}
                  value={feedback.nps_score}
                  onChange={(e) => setFeedback((f) => ({ ...f, nps_score: Number(e.target.value) }))}
                  style={{ width: '100%' }}
                />
                <div style={{ fontSize: 11, color: '#6e7681', marginTop: 6 }}>NPS: {feedback.nps_score}/10</div>
              </div>

              <div>
                <label style={labelStyle}>ANY OTHER COMMENTS? (OPTIONAL)</label>
                <textarea
                  value={feedback.comments}
                  onChange={(e) => setFeedback((f) => ({ ...f, comments: e.target.value }))}
                  rows={2}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  placeholder="Optional..."
                />
              </div>

              {feedbackError && (
                <div
                  style={{
                    background: '#1a0a0a',
                    border: '1px solid #f8717133',
                    borderRadius: 10,
                    padding: 10,
                    fontSize: 11,
                    color: '#f87171',
                    lineHeight: 1.6,
                  }}
                >
                  {feedbackError}
                </div>
              )}

              {feedbackDone && (
                <div
                  style={{
                    background: '#071a14',
                    border: '1px solid #10b98133',
                    borderRadius: 10,
                    padding: 10,
                    fontSize: 11,
                    color: '#34d399',
                    lineHeight: 1.6,
                  }}
                >
                  Thank you for your feedback! 🙏 ✅
                </div>
              )}

              <button
                type="button"
                className="cpos-btn-amber"
                disabled={feedbackLoading}
                onClick={submitFeedback}
              >
                {feedbackLoading ? 'SUBMITTING...' : 'Submit Feedback'}
              </button>
            </div>
          )}
        </div>

        <div style={{ padding: 10, borderTop: '1px solid #21262d', background: '#0b0f14' }}>
          <div style={{ fontSize: 10, color: '#484f58', letterSpacing: '0.06em', textAlign: 'center' }}>
            CPOS SUPPORT · {authed ? 'SIGNED IN' : 'GUEST'}
          </div>
        </div>
      </div>
    </>
  )
}
