'use client'
import { useState, useEffect } from 'react'
import { supabase } from '../../supabase'
import { useRouter } from 'next/navigation'

function isAdminEmail(email: string | null | undefined): boolean {
  const envAdmin = process.env.NEXT_PUBLIC_ADMIN_EMAIL?.trim().toLowerCase()
  if (!envAdmin || !email) return false
  return email.trim().toLowerCase() === envAdmin
}

function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

function generateProjectCode(name: string) {
  if (!name || name.trim().length < 2) return ''
  const words = name.trim().toUpperCase().split(/\s+/)
  const initials = words.slice(0, 3).map((w: string) => w.replace(/[^A-Z]/g, '').slice(0, 2)).join('')
  const year = new Date().getFullYear()
  const rand = String(Math.floor(Math.random() * 900) + 100)
  return `${initials}-${year}-${rand}`
}

export default function NewProject() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [codeManual, setCodeManual] = useState(false)
  const [form, setForm] = useState({
    projectid: '',
    project_name: '',
    project_code: '',
    client_name: '',
    client_contact: '',
    location: '',
    description: '',
    status: 'Planning',
    start_date: '',
    end_date: '',
    budget: '',
    currency: 'ZAR',
  })
  useEffect(() => {
    setForm(f => ({ ...f, projectid: generateUUID() }))
  }, [])
  useEffect(() => {
    if (!codeManual && form.project_name.length > 3) {
      setForm((f) => ({ ...f, project_code: generateProjectCode(form.project_name) }))
    }
  }, [form.project_name, codeManual])

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (name === 'project_code') setCodeManual(true)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.project_name || !form.project_code || !form.client_name) {
      setError('Project name, code and client are required.')
      return
    }

    setLoading(true)
    setError('')

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      setError('You must be signed in to create a project.')
      setLoading(false)
      return
    }

    const { error: profileUpsertError } = await supabase.from('users').upsert([
      {
        userid: user.id,
        email: user.email,
      },
    ])

    if (profileUpsertError) {
      setError(profileUpsertError.message)
      setLoading(false)
      return
    }

    const plan = ((user.user_metadata?.plan as string | undefined) ?? 'free').toLowerCase()
    const isEnterprise = plan === 'enterprise'
    const isPro = plan === 'pro' || isEnterprise
    const isAdmin = plan === 'admin' || isAdminEmail(user.email)

    if (!isAdmin && !isEnterprise) {
      const { count, error: countErr } = await supabase
        .from('projects')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', user.id)

      if (countErr) {
        setError(countErr.message)
        setLoading(false)
        return
      }

      const ownedCount = count ?? 0
      if (!isPro && ownedCount >= 1) {
        router.push(
          `/pricing?message=${encodeURIComponent(
            "You've used your free project. Upgrade to Pro to create up to 5 projects."
          )}`
        )
        setLoading(false)
        return
      }

      if (isPro && ownedCount >= 5) {
        router.push(
          `/pricing?message=${encodeURIComponent(
            "You've reached the Pro limit (5 active projects). Upgrade to Enterprise for unlimited projects."
          )}`
        )
        setLoading(false)
        return
      }
    }

    const { error: insertError } = await supabase.from('projects').insert([{
      projectid: form.projectid,
      user_id: user.id,
      userid: user.id,
      project_name: form.project_name,
      project_code: form.project_code,
      client_name: form.client_name,
      client_contact: form.client_contact,
      location: form.location,
      description: form.description,
      status: form.status,
      start_date: form.start_date || null,
      end_date: form.end_date || null,
      budget: form.budget ? Number(form.budget) : 0,
      currency: form.currency,
    }])

    if (insertError) {
      setError(insertError.message)
      setLoading(false)
      return
    }

    // Auto-create dashboard_metrics row
    await supabase.from('dashboard_metrics').insert([{ projectid: form.projectid }])

    router.push('/dashboard')
  }

  const inputStyle = { width: '100%', background: '#0d1117', border: '1px solid #21262d', borderRadius: '6px', color: '#c9d1d9', fontFamily: 'monospace', fontSize: '13px', padding: '10px 12px', outline: 'none' }
  const labelStyle = { display: 'block', fontSize: '10px', color: '#484f58', letterSpacing: '0.08em', marginBottom: '6px' }

  return (
    <div style={{ fontFamily: 'monospace', background: '#0a0c0e', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 16px' }}>
      <div style={{ width: '100%', maxWidth: '520px' }}>
        <style>{`
          @media (max-width: 640px) {
            .np-form { padding: 18px !important; }
            .np-grid-2 { grid-template-columns: 1fr !important; }
            .np-grid-currency { grid-template-columns: 1fr !important; }
            .np-actions { flex-direction: column !important; align-items: stretch !important; gap: 12px !important; }
            .np-actions a { text-align: center !important; }
          }
        `}</style>
        <h1 style={{ fontFamily: 'sans-serif', fontWeight: 800, fontSize: '24px', color: '#e6edf3', marginBottom: '4px' }}>New Project</h1>
        <p style={{ color: '#484f58', fontSize: '12px', marginBottom: '28px' }}>CPOS · Construction Project Operating System</p>

        <form onSubmit={handleSubmit} className="np-form" style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: '10px', padding: '28px' }}>

          {/* UUID */}
          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>PROJECT ID (AUTO-GENERATED)</label>
            <div style={{ ...inputStyle, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#6e7681', fontSize: '11px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{form.projectid}</span>
              <button type="button" onClick={() => setForm(f => ({ ...f, projectid: generateUUID() }))}
                style={{ background: 'none', border: '1px solid #30363d', borderRadius: '4px', color: '#6e7681', cursor: 'pointer', padding: '3px 8px', fontSize: '11px', whiteSpace: 'nowrap', marginLeft: '8px' }}>
                ↺ New
              </button>
            </div>
          </div>

          {/* Project Name */}
          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>PROJECT NAME *</label>
            <input name="project_name" value={form.project_name} onChange={handleChange} placeholder="e.g. Harbor Bridge Rehabilitation" style={inputStyle} />
          </div>

          {/* Project Code */}
          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>PROJECT CODE *</label>
            <input name="project_code" value={form.project_code} onChange={handleChange} placeholder="e.g. HBR-2024-001" style={inputStyle} />
          </div>

          {/* Client */}
          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>CLIENT NAME *</label>
            <input name="client_name" value={form.client_name} onChange={handleChange} placeholder="e.g. City Infrastructure Dept." style={inputStyle} />
          </div>

          {/* Contact + Location */}
          <div className="np-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
            <div>
              <label style={labelStyle}>CLIENT CONTACT</label>
              <input name="client_contact" value={form.client_contact} onChange={handleChange} placeholder="Email or phone" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>LOCATION</label>
              <input name="location" value={form.location} onChange={handleChange} placeholder="e.g. Cape Town, ZA" style={inputStyle} />
            </div>
          </div>

          {/* Dates */}
          <div className="np-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
            <div>
              <label style={labelStyle}>START DATE</label>
              <input type="date" name="start_date" value={form.start_date} onChange={handleChange} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>END DATE</label>
              <input type="date" name="end_date" value={form.end_date} onChange={handleChange} style={inputStyle} />
            </div>
          </div>

          {/* Currency + Budget */}
          <div className="np-grid-currency" style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '12px', marginBottom: '16px' }}>
            <div>
              <label style={labelStyle}>CURRENCY</label>
              <select name="currency" value={form.currency} onChange={handleChange} style={inputStyle}>
                {['ZAR','USD','EUR','GBP','AED'].map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label style={labelStyle}>BUDGET / CONTRACT VALUE</label>
              <input type="number" name="budget" value={form.budget} onChange={handleChange} placeholder="e.g. 4200000" style={inputStyle} />
            </div>
          </div>

          {/* Status */}
          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>STATUS</label>
            <select name="status" value={form.status} onChange={handleChange} style={inputStyle}>
              {['Planning','Active','On Hold','Closed'].map(s => <option key={s}>{s}</option>)}
            </select>
          </div>

          {/* Description */}
          <div style={{ marginBottom: '24px' }}>
            <label style={labelStyle}>DESCRIPTION</label>
            <textarea name="description" value={form.description} onChange={handleChange} placeholder="Brief scope of works..." style={{ ...inputStyle, minHeight: '72px', resize: 'vertical' }} />
          </div>

          {error && <p style={{ color: '#f87171', fontSize: '12px', marginBottom: '16px' }}>{error}</p>}

          <div className="np-actions" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <a href="/dashboard" style={{ color: '#6e7681', fontSize: '12px', textDecoration: 'none' }}>← Back to Dashboard</a>
            <button type="submit" disabled={loading}
              style={{ background: '#f59e0b', border: 'none', borderRadius: '6px', color: '#0a0c0e', cursor: 'pointer', fontWeight: 700, fontSize: '13px', padding: '10px 24px' }}>
              {loading ? 'Creating...' : 'Create Project ✓'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}