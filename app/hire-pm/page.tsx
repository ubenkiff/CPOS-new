'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../supabase'

type ProjectTypeOption =
  | 'Residential Building'
  | 'Commercial Building'
  | 'Infrastructure / Roads'
  | 'Industrial / Energy'
  | 'Renovation / Fit-Out'
  | 'Other'

type CurrencyOption = 'USD' | 'KES' | 'ZAR' | 'EUR' | 'GBP'

type DurationOption =
  | 'Less than 1 month'
  | '1–3 months'
  | '3–6 months'
  | '6–12 months'
  | 'Over 1 year'

type ProcurementStageOption =
  | 'Concept / Feasibility'
  | 'Design Stage'
  | 'Tendering'
  | 'Construction'
  | 'Commissioning'

type ReferralSourceOption = 'Referral' | 'LinkedIn' | 'Google' | 'Other'

type FormState = {
  project_name: string
  project_type: ProjectTypeOption | ''
  project_type_other: string
  location: string
  description: string
  budget: string
  currency: CurrencyOption
  start_date: string
  duration: DurationOption | ''
  procurement_stage: ProcurementStageOption | ''
  client_name: string
  company: string
  email: string
  phone: string
  referral_source: ReferralSourceOption | ''
  referral_source_other: string
  consent: boolean
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: '#0d1117',
  border: '1px solid #21262d',
  borderRadius: '6px',
  color: '#c9d1d9',
  fontFamily: 'inherit',
  fontSize: '13px',
  padding: '11px 14px',
  outline: 'none',
  transition: 'border-color 0.15s',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 10,
  color: '#484f58',
  letterSpacing: '0.08em',
  marginBottom: 6,
}

function normalizePhone(input: string): string {
  const raw = input.replace(/\s+/g, '').replace(/^\+/, '')
  if (raw.startsWith('254')) return raw
  if (raw.startsWith('0')) return `254${raw.slice(1)}`
  return raw
}

function formatMoney(currency: string, value: string): string {
  const n = Number(value)
  if (!Number.isFinite(n)) return `${currency} ${value}`
  return `${currency} ${n.toLocaleString()}`
}

function safeText(v: unknown): string {
  return String(v ?? '').trim()
}

export default function HirePmPage() {
  const router = useRouter()
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>('')
  const [success, setSuccess] = useState(false)
  const [userEmailLocked, setUserEmailLocked] = useState(false)
  const [isAuthed, setIsAuthed] = useState(false)

  const [form, setForm] = useState<FormState>({
    project_name: '',
    project_type: '',
    project_type_other: '',
    location: '',
    description: '',
    budget: '',
    currency: 'USD',
    start_date: '',
    duration: '',
    procurement_stage: '',
    client_name: '',
    company: '',
    email: '',
    phone: '',
    referral_source: '',
    referral_source_other: '',
    consent: false,
  })

  useEffect(() => {
    let cancelled = false
    async function loadUser() {
      const { data } = await supabase.auth.getUser()
      if (cancelled) return
      const user = data?.user
      if (!user) {
        setIsAuthed(false)
        return
      }

      setIsAuthed(true)
      const email = safeText(user.email)
      const fullName = safeText((user.user_metadata as any)?.full_name)
      const company = safeText((user.user_metadata as any)?.company)

      setForm((f) => ({
        ...f,
        email: f.email || email,
        client_name: f.client_name || fullName,
        company: f.company || company,
      }))

      if (email) setUserEmailLocked(true)
    }

    loadUser()
    return () => {
      cancelled = true
    }
  }, [])

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  const progress = useMemo(() => {
    const index = step - 1
    return {
      label: `Step ${step} of 4`,
      index,
      segments: [0, 1, 2, 3].map((i) => ({
        active: i <= index,
      })),
    }
  }, [step])

  function validateStep(s: 1 | 2 | 3 | 4): string {
    if (s === 1) {
      if (!form.project_name.trim()) return 'Project name is required.'
      if (!form.project_type) return 'Project type is required.'
      if (form.project_type === 'Other' && !form.project_type_other.trim()) {
        return 'Please specify the project type.'
      }
      if (!form.location.trim()) return 'Project location is required.'
      if (!form.description.trim()) return 'Project description is required.'
    }

    if (s === 2) {
      const b = Number(form.budget)
      if (!form.currency) return 'Currency is required.'
      if (!Number.isFinite(b) || b <= 0) return 'Estimated budget must be a positive number.'
      if (!form.start_date) return 'Project start date is required.'
      if (!form.duration) return 'Estimated duration is required.'
      if (!form.procurement_stage) return 'Procurement stage is required.'
    }

    if (s === 3) {
      if (!form.client_name.trim()) return 'Full name is required.'
      if (!form.email.trim()) return 'Email is required.'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) return 'Email format is invalid.'
      if (!form.phone.trim()) return 'Phone number is required.'
      const normalized = normalizePhone(form.phone)
      if (!/^254\d{9}$/.test(normalized)) return 'Phone must be in format 2547XXXXXXXX (or 07XXXXXXXX).' 
      if (!form.referral_source) return 'Referral source is required.'
      if (form.referral_source === 'Other' && !form.referral_source_other.trim()) {
        return 'Please specify how you heard about us.'
      }
    }

    if (s === 4) {
      if (!form.consent) return 'You must agree to be contacted to submit this request.'
    }

    return ''
  }

  function next() {
    const msg = validateStep(step)
    if (msg) {
      setError(msg)
      return
    }
    setError('')
    setStep((s) => (s === 4 ? 4 : ((s + 1) as any)))
  }

  function back() {
    setError('')
    setStep((s) => (s === 1 ? 1 : ((s - 1) as any)))
  }

  async function submit() {
    const msg = validateStep(4)
    if (msg) {
      setError(msg)
      return
    }

    setLoading(true)
    setError('')
    try {
      const payload = {
        project_name: form.project_name.trim(),
        project_type: form.project_type === 'Other' ? `Other: ${form.project_type_other.trim()}` : form.project_type,
        location: form.location.trim(),
        description: form.description.trim(),
        budget: Number(form.budget),
        currency: form.currency,
        start_date: form.start_date,
        duration: form.duration,
        procurement_stage: form.procurement_stage,
        client_name: form.client_name.trim(),
        company: form.company.trim() || null,
        email: form.email.trim(),
        phone: normalizePhone(form.phone),
        referral_source:
          form.referral_source === 'Other'
            ? `Other: ${form.referral_source_other.trim()}`
            : form.referral_source,
      }

      const res = await fetch('/api/hire-pm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const json = await res.json()
      if (!res.ok || !json?.ok) {
        setError(json?.error || 'Failed to submit request.')
        return
      }

      setSuccess(true)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div
        style={{
          fontFamily: "'DM Mono','Courier New',monospace",
          background: '#0a0c0e',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 16px',
          backgroundImage:
            'linear-gradient(rgba(96,165,250,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(96,165,250,0.025) 1px,transparent 1px)',
          backgroundSize: '32px 32px',
          color: '#c9d1d9',
        }}
      >
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Barlow+Condensed:wght@700;800&display=swap');
          *{box-sizing:border-box;margin:0;padding:0;}
          .btn-primary{background:#f59e0b;border:none;border-radius:6px;color:#0a0c0e;padding:12px 16px;font-family:inherit;font-size:13px;font-weight:800;cursor:pointer;letter-spacing:0.05em;transition:background 0.15s;}
          .btn-primary:hover{background:#fbbf24;}
          .btn-outline{background:transparent;border:1px solid #30363d;border-radius:6px;color:#8b949e;padding:10px 14px;font-weight:700;cursor:pointer;font-family:inherit;font-size:12px;}
          .btn-outline:hover{border-color:#f59e0b;color:#f59e0b;}
        `}</style>

        <div style={{ width: '100%', maxWidth: 520 }}>
          <div style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: 10, padding: 28 }}>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 24, letterSpacing: '0.03em' }}>
              Request Submitted! ✅
            </div>
            <div style={{ marginTop: 10, fontSize: 12, color: '#6e7681', lineHeight: 1.7 }}>
              Uddi Benkiff will be in touch within 24 hours.
            </div>

            <div style={{ marginTop: 22, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <button type="button" className="btn-primary" onClick={() => router.push('/dashboard')}>
                ← Back to Dashboard
              </button>
              {!isAuthed && (
                <button
                  type="button"
                  className="btn-outline"
                  onClick={() => router.push('/register')}
                >
                  Create account
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  const review = {
    projectType:
      form.project_type === 'Other'
        ? `Other: ${form.project_type_other.trim()}`
        : form.project_type,
    referral:
      form.referral_source === 'Other'
        ? `Other: ${form.referral_source_other.trim()}`
        : form.referral_source,
    budgetText: formatMoney(form.currency, form.budget),
    phoneText: normalizePhone(form.phone),
  }

  return (
    <div
      style={{
        fontFamily: "'DM Mono','Courier New',monospace",
        background: '#0a0c0e',
        minHeight: '100vh',
        padding: '40px 16px',
        color: '#c9d1d9',
        backgroundImage:
          'linear-gradient(rgba(96,165,250,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(96,165,250,0.025) 1px,transparent 1px)',
        backgroundSize: '32px 32px',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Barlow+Condensed:wght@700;800&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        input:focus, textarea:focus, select:focus{border-color:#10b981!important;box-shadow:0 0 0 3px rgba(16,185,129,0.10);}
        .btn-outline{background:transparent;border:1px solid #30363d;border-radius:6px;color:#8b949e;padding:10px 14px;font-weight:700;cursor:pointer;font-family:inherit;font-size:12px;}
        .btn-outline:hover{border-color:#10b981;color:#10b981;}
        .btn-next{background:#10b981;border:none;border-radius:6px;color:#0a0c0e;padding:10px 16px;font-family:inherit;font-size:12px;font-weight:900;cursor:pointer;letter-spacing:0.06em;}
        .btn-next:hover{background:#34d399;}
        .btn-next:disabled{background:#484f58;cursor:not-allowed;}
        .btn-back{background:transparent;border:1px solid #30363d;border-radius:6px;color:#8b949e;padding:10px 14px;font-weight:700;cursor:pointer;font-family:inherit;font-size:12px;}
        .btn-back:hover{border-color:#f59e0b;color:#f59e0b;}
        .btn-submit{background:#f59e0b;border:none;border-radius:6px;color:#0a0c0e;padding:12px 16px;font-family:inherit;font-size:13px;font-weight:900;cursor:pointer;letter-spacing:0.06em;width:100%;}
        .btn-submit:hover{background:#fbbf24;}
        .btn-submit:disabled{background:#484f58;cursor:not-allowed;}
        a{color:#10b981;text-decoration:none;}
        a:hover{text-decoration:underline;}
      `}</style>

      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  background: '#10b981',
                  borderRadius: 6,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="16" height="16" fill="none" stroke="#0a0c0e" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M12 2l10 6v8l-10 6L2 16V8l10-6z" />
                  <path d="M12 7v10" />
                  <path d="M7 12h10" />
                </svg>
              </div>
              <span
                style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontWeight: 800,
                  fontSize: 20,
                  color: '#e6edf3',
                  letterSpacing: '0.06em',
                }}
              >
                HIRE REMOTE PM
              </span>
            </div>
            <div style={{ fontSize: 12, color: '#6e7681', lineHeight: 1.6, maxWidth: 520 }}>
              Request a remote project manager. Uddi responds within 24 hours.
            </div>
          </div>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button type="button" className="btn-outline" onClick={() => router.push('/dashboard')}>
              ← Dashboard
            </button>
            {!isAuthed && (
              <button type="button" className="btn-outline" onClick={() => router.push('/register')}>
                Create account
              </button>
            )}
          </div>
        </div>

        <div style={{ marginTop: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <div style={{ fontSize: 11, color: '#484f58', letterSpacing: '0.08em' }}>{progress.label}</div>
          <div style={{ display: 'flex', gap: 6 }}>
            {progress.segments.map((seg, i) => (
              <div
                key={i}
                style={{
                  width: 56,
                  height: 5,
                  borderRadius: 10,
                  background: seg.active ? '#10b981' : '#21262d',
                }}
              />
            ))}
          </div>
        </div>

        <div style={{ marginTop: 18, background: '#0d1117', border: '1px solid #21262d', borderRadius: 10, padding: 28 }}>
          {step !== 4 && (
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 20, letterSpacing: '0.03em', marginBottom: 4 }}>
              {step === 1 && 'PROJECT IDENTITY'}
              {step === 2 && 'BUDGET & TIMELINE'}
              {step === 3 && 'CLIENT DETAILS'}
            </div>
          )}

          {step === 1 && (
            <>
              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>PROJECT NAME *</label>
                <input
                  value={form.project_name}
                  onChange={(e) => set('project_name', e.target.value)}
                  placeholder="e.g. Solar Plant Expansion"
                  style={inputStyle}
                />
              </div>

              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>PROJECT TYPE *</label>
                <select
                  value={form.project_type}
                  onChange={(e) => set('project_type', e.target.value as any)}
                  style={inputStyle}
                >
                  <option value="">Select...</option>
                  {[
                    'Residential Building',
                    'Commercial Building',
                    'Infrastructure / Roads',
                    'Industrial / Energy',
                    'Renovation / Fit-Out',
                    'Other',
                  ].map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>

              {form.project_type === 'Other' && (
                <div style={{ marginBottom: 16 }}>
                  <label style={labelStyle}>PROJECT TYPE (OTHER) *</label>
                  <input
                    value={form.project_type_other}
                    onChange={(e) => set('project_type_other', e.target.value)}
                    placeholder="Describe project type"
                    style={inputStyle}
                  />
                </div>
              )}

              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>PROJECT LOCATION *</label>
                <input
                  value={form.location}
                  onChange={(e) => set('location', e.target.value)}
                  placeholder="City, Country"
                  style={inputStyle}
                />
              </div>

              <div style={{ marginBottom: 0 }}>
                <label style={labelStyle}>PROJECT DESCRIPTION *</label>
                <textarea
                  value={form.description}
                  onChange={(e) => set('description', e.target.value)}
                  placeholder="Brief scope of works..."
                  style={{ ...inputStyle, minHeight: 100, resize: 'vertical' }}
                />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 12, marginBottom: 16 }}>
                <div>
                  <label style={labelStyle}>CURRENCY *</label>
                  <select
                    value={form.currency}
                    onChange={(e) => set('currency', e.target.value as any)}
                    style={inputStyle}
                  >
                    {['USD', 'KES', 'ZAR', 'EUR', 'GBP'].map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>ESTIMATED BUDGET *</label>
                  <input
                    type="number"
                    value={form.budget}
                    onChange={(e) => set('budget', e.target.value)}
                    placeholder="e.g. 250000"
                    style={inputStyle}
                  />
                </div>
              </div>

              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>PROJECT START DATE *</label>
                <input
                  type="date"
                  value={form.start_date}
                  onChange={(e) => set('start_date', e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>ESTIMATED DURATION *</label>
                <select
                  value={form.duration}
                  onChange={(e) => set('duration', e.target.value as any)}
                  style={inputStyle}
                >
                  <option value="">Select...</option>
                  {[
                    'Less than 1 month',
                    '1–3 months',
                    '3–6 months',
                    '6–12 months',
                    'Over 1 year',
                  ].map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ marginBottom: 0 }}>
                <label style={labelStyle}>PROCUREMENT STAGE *</label>
                <select
                  value={form.procurement_stage}
                  onChange={(e) => set('procurement_stage', e.target.value as any)}
                  style={inputStyle}
                >
                  <option value="">Select...</option>
                  {[
                    'Concept / Feasibility',
                    'Design Stage',
                    'Tendering',
                    'Construction',
                    'Commissioning',
                  ].map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              {!isAuthed && (
                <div
                  style={{
                    background: '#071a14',
                    border: '1px solid #10b98133',
                    borderRadius: 8,
                    padding: '12px 14px',
                    fontSize: 12,
                    color: '#c9d1d9',
                    marginBottom: 16,
                    lineHeight: 1.7,
                  }}
                >
                  For the best experience, <a href="/register">create an account</a> before submitting.
                  You can still send this request without an account.
                </div>
              )}

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
                <div>
                  <label style={labelStyle}>FULL NAME *</label>
                  <input
                    value={form.client_name}
                    onChange={(e) => set('client_name', e.target.value)}
                    placeholder="Full name"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>COMPANY / ORGANISATION</label>
                  <input
                    value={form.company}
                    onChange={(e) => set('company', e.target.value)}
                    placeholder="Company"
                    style={inputStyle}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
                <div>
                  <label style={labelStyle}>EMAIL *</label>
                  <input
                    type="email"
                    value={form.email}
                    readOnly={userEmailLocked}
                    onChange={(e) => set('email', e.target.value)}
                    placeholder="you@example.com"
                    style={{ ...inputStyle, opacity: userEmailLocked ? 0.85 : 1 }}
                  />
                  {userEmailLocked && (
                    <div style={{ fontSize: 10, color: '#484f58', marginTop: 6, letterSpacing: '0.06em' }}>
                      Linked to your account.
                    </div>
                  )}
                </div>
                <div>
                  <label style={labelStyle}>PHONE NUMBER *</label>
                  <input
                    value={form.phone}
                    onChange={(e) => set('phone', e.target.value)}
                    placeholder="2547XXXXXXXX"
                    style={inputStyle}
                  />
                </div>
              </div>

              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>HOW DID YOU HEAR ABOUT US? *</label>
                <select
                  value={form.referral_source}
                  onChange={(e) => set('referral_source', e.target.value as any)}
                  style={inputStyle}
                >
                  <option value="">Select...</option>
                  {['Referral', 'LinkedIn', 'Google', 'Other'].map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>

              {form.referral_source === 'Other' && (
                <div style={{ marginBottom: 0 }}>
                  <label style={labelStyle}>SOURCE (OTHER) *</label>
                  <input
                    value={form.referral_source_other}
                    onChange={(e) => set('referral_source_other', e.target.value)}
                    placeholder="Where did you hear about us?"
                    style={inputStyle}
                  />
                </div>
              )}
            </>
          )}

          {step === 4 && (
            <>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 20, letterSpacing: '0.03em' }}>
                REVIEW & SUBMIT
              </div>
              <div style={{ fontSize: 11, color: '#484f58', marginTop: 4, marginBottom: 16 }}>
                Confirm your details below.
              </div>

              <div style={{ border: '1px solid #161b22', borderRadius: 8, padding: 14, marginBottom: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
                  <div style={{ fontSize: 10, color: '#6e7681', letterSpacing: '0.08em' }}>PROJECT IDENTITY</div>
                  <button type="button" className="btn-outline" onClick={() => setStep(1)}>
                    Edit
                  </button>
                </div>
                <div style={{ fontSize: 12, color: '#c9d1d9', lineHeight: 1.8 }}>
                  <div><span style={{ color: '#6e7681' }}>Project:</span> {form.project_name || '—'}</div>
                  <div><span style={{ color: '#6e7681' }}>Type:</span> {review.projectType || '—'}</div>
                  <div><span style={{ color: '#6e7681' }}>Location:</span> {form.location || '—'}</div>
                  <div><span style={{ color: '#6e7681' }}>Description:</span> {form.description || '—'}</div>
                </div>
              </div>

              <div style={{ border: '1px solid #161b22', borderRadius: 8, padding: 14, marginBottom: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
                  <div style={{ fontSize: 10, color: '#6e7681', letterSpacing: '0.08em' }}>BUDGET & TIMELINE</div>
                  <button type="button" className="btn-outline" onClick={() => setStep(2)}>
                    Edit
                  </button>
                </div>
                <div style={{ fontSize: 12, color: '#c9d1d9', lineHeight: 1.8 }}>
                  <div><span style={{ color: '#6e7681' }}>Budget:</span> {review.budgetText || '—'}</div>
                  <div><span style={{ color: '#6e7681' }}>Start Date:</span> {form.start_date || '—'}</div>
                  <div><span style={{ color: '#6e7681' }}>Duration:</span> {form.duration || '—'}</div>
                  <div><span style={{ color: '#6e7681' }}>Stage:</span> {form.procurement_stage || '—'}</div>
                </div>
              </div>

              <div style={{ border: '1px solid #161b22', borderRadius: 8, padding: 14, marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
                  <div style={{ fontSize: 10, color: '#6e7681', letterSpacing: '0.08em' }}>CLIENT DETAILS</div>
                  <button type="button" className="btn-outline" onClick={() => setStep(3)}>
                    Edit
                  </button>
                </div>
                <div style={{ fontSize: 12, color: '#c9d1d9', lineHeight: 1.8 }}>
                  <div><span style={{ color: '#6e7681' }}>Client:</span> {form.client_name || '—'}</div>
                  <div><span style={{ color: '#6e7681' }}>Company:</span> {form.company || '—'}</div>
                  <div><span style={{ color: '#6e7681' }}>Email:</span> {form.email || '—'}</div>
                  <div><span style={{ color: '#6e7681' }}>Phone:</span> {review.phoneText || '—'}</div>
                  <div><span style={{ color: '#6e7681' }}>Source:</span> {review.referral || '—'}</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 12 }}>
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => set('consent', e.target.checked)}
                  style={{ marginTop: 3 }}
                />
                <div style={{ fontSize: 12, color: '#c9d1d9', lineHeight: 1.6 }}>
                  I agree to be contacted by the CPOS team regarding this project request
                </div>
              </div>

              {error && (
                <div style={{ background: '#1a0a0a', border: '1px solid #f8717133', borderRadius: 6, padding: '10px 14px', fontSize: 12, color: '#f87171', marginBottom: 12 }}>
                  {error}
                </div>
              )}

              <button type="button" className="btn-submit" disabled={loading} onClick={submit}>
                {loading ? 'SUBMITTING...' : 'SUBMIT REQUEST →'}
              </button>
            </>
          )}

          {step !== 4 && error && (
            <div style={{ background: '#1a0a0a', border: '1px solid #f8717133', borderRadius: 6, padding: '10px 14px', fontSize: 12, color: '#f87171', marginTop: 16 }}>
              {error}
            </div>
          )}

          {step !== 4 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10, marginTop: 20 }}>
              <button type="button" className="btn-back" disabled={step === 1} onClick={back}>
                ← Back
              </button>
              <button type="button" className="btn-next" onClick={next}>
                {step === 3 ? 'REVIEW →' : 'NEXT →'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
