'use client'
import { useState, useEffect, useRef } from 'react'
import { supabase } from '../app/supabase'
import { useRouter } from 'next/navigation'
import { useTheme } from '../lib/theme'

type Project = {
  projectid: string
  project_name: string
  project_code: string
  client_name: string
  client_contact?: string
  location?: string
  description?: string
  status: string
  start_date?: string
  end_date?: string
  budget?: number
  currency?: string
}

type Tab = 'project' | 'account' | 'danger'

interface Props {
  project: Project
  onClose: () => void
  onProjectUpdated: (updated: Project) => void
  onProjectDeleted: () => void
}

const STATUS_OPTS = ['Planning', 'Active', 'On Hold', 'Closed']
const CURRENCY_OPTS = ['KES', 'ZAR', 'USD', 'EUR', 'GBP', 'AED']

export default function ProjectSettingsPanel({ project, onClose, onProjectUpdated, onProjectDeleted }: Props) {
  const router = useRouter()
  const { isDark } = useTheme()
  const panelRef = useRef<HTMLDivElement>(null)

  const [tab, setTab] = useState<Tab>('project')
  const [form, setForm] = useState<Project>({ ...project })
  const [saving, setSaving] = useState(false)
  const [saveMsg, setSaveMsg] = useState('')
  const [saveErr, setSaveErr] = useState('')

  // Account state
  const [user, setUser] = useState<any>(null)
  const [profileForm, setProfileForm] = useState({ full_name: '', company: '' })
  const [savingProfile, setSavingProfile] = useState(false)
  const [profileMsg, setProfileMsg] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [pwMsg, setPwMsg] = useState('')

  // Danger state
  const [deleteConfirmText, setDeleteConfirmText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [deleteErr, setDeleteErr] = useState('')

  // Load user profile on mount
  useEffect(() => {
    async function loadUser() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      setUser(user)
      const { data } = await supabase.from('users').select('full_name,company').eq('userid', user.id).maybeSingle()
      if (data) setProfileForm({ full_name: data.full_name || '', company: data.company || '' })
    }
    loadUser()
  }, [])

  // Close on backdrop click
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  async function handleSaveProject(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true); setSaveErr(''); setSaveMsg('')
    const payload = {
      project_name: form.project_name,
      project_code: form.project_code,
      client_name: form.client_name,
      client_contact: form.client_contact || null,
      location: form.location || null,
      description: form.description || null,
      status: form.status,
      start_date: form.start_date || null,
      end_date: form.end_date || null,
      budget: form.budget ? Number(form.budget) : 0,
      currency: form.currency || 'USD',
    }
    const { error } = await supabase.from('projects').update(payload).eq('projectid', project.projectid)
    if (error) { setSaveErr(error.message); setSaving(false); return }
    setSaveMsg('Project updated successfully.')
    setSaving(false)
    onProjectUpdated({ ...form, ...payload })
    setTimeout(() => setSaveMsg(''), 3000)
  }

  async function handleSaveProfile(e: React.FormEvent) {
    e.preventDefault()
    if (!user) return
    setSavingProfile(true); setProfileMsg('')
    await supabase.from('users').upsert([{
      userid: user.id,
      email: user.email,
      full_name: profileForm.full_name,
      company: profileForm.company,
    }])
    setProfileMsg('Profile saved.')
    setSavingProfile(false)
    setTimeout(() => setProfileMsg(''), 3000)
  }

  async function handleChangePassword(e: React.FormEvent) {
    e.preventDefault()
    if (newPassword !== confirmPassword) { setPwMsg('Passwords do not match.'); return }
    if (newPassword.length < 8) { setPwMsg('Minimum 8 characters required.'); return }
    const { error } = await supabase.auth.updateUser({ password: newPassword })
    if (error) { setPwMsg(error.message); return }
    setPwMsg('Password updated.')
    setNewPassword(''); setConfirmPassword('')
    setTimeout(() => setPwMsg(''), 3000)
  }

  async function handleDeleteProject() {
    if (deleteConfirmText !== project.project_name) {
      setDeleteErr('Project name does not match.')
      return
    }
    setDeleting(true); setDeleteErr('')
    try {
      // Get the current session token to pass to the server route
      const { data: { session } } = await supabase.auth.getSession()
      const token = session?.access_token || ''

      const res = await fetch('/api/projects/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({ projectid: project.projectid }),
      })

      const json = await res.json()
      if (!res.ok) {
        setDeleteErr(json.error || 'Delete failed.')
        setDeleting(false)
        return
      }
      onProjectDeleted()
    } catch (err: any) {
      setDeleteErr(err.message || 'Unexpected error.')
      setDeleting(false)
    }
  }

  const bg = isDark ? '#0d1117' : '#ffffff'
  const border = isDark ? '#21262d' : '#e2e8f0'
  const text = isDark ? '#c9d1d9' : '#1e293b'
  const subtext = isDark ? '#484f58' : '#64748b'
  const inputBg = isDark ? '#0a0c0e' : '#f8fafc'
  const hText = isDark ? '#e6edf3' : '#0f172a'

  const fi: React.CSSProperties = {
    width: '100%', background: inputBg, border: `1px solid ${border}`,
    borderRadius: 6, color: text, fontFamily: 'inherit', fontSize: 12,
    padding: '8px 10px', outline: 'none'
  }
  const label: React.CSSProperties = {
    display: 'block', fontSize: 10, color: subtext,
    letterSpacing: '0.08em', marginBottom: 5
  }

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)',
          zIndex: 998, backdropFilter: 'blur(2px)'
        }}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        style={{
          position: 'fixed', top: 0, right: 0, bottom: 0,
          width: '100%', maxWidth: 480,
          background: bg, borderLeft: `1px solid ${border}`,
          zIndex: 999, display: 'flex', flexDirection: 'column',
          fontFamily: "'DM Mono','Courier New',monospace",
          boxShadow: '-20px 0 60px rgba(0,0,0,0.4)',
          animation: 'slideInRight 0.22s ease forwards',
        }}
      >
        <style>{`
          @keyframes slideInRight { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
          .sp-fi:focus { border-color: #f59e0b !important; }
          .sp-tab { padding: 10px 16px; cursor: pointer; font-size: 11px; font-weight: 700; letter-spacing: 0.06em; border-bottom: 2px solid transparent; transition: all 0.15s; color: #6e7681; white-space: nowrap; }
          .sp-tab.active { color: #f59e0b; border-bottom-color: #f59e0b; }
          .sp-tab:hover:not(.active) { color: ${hText}; }
          .sp-btn { padding: 7px 14px; border-radius: 6px; border: 1px solid ${border}; background: ${isDark ? '#161b22' : '#f1f5f9'}; color: ${text}; cursor: pointer; font-family: inherit; font-size: 11px; transition: all 0.15s; }
          .sp-btn:hover { border-color: #f59e0b; color: #f59e0b; }
          .sp-btn-primary { background: #f59e0b; border: none; border-radius: 6px; color: #0a0c0e; padding: 9px 18px; font-family: inherit; font-size: 12px; font-weight: 700; cursor: pointer; transition: background 0.15s; }
          .sp-btn-primary:hover { background: #fbbf24; }
          .sp-btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }
          .sp-btn-danger { background: ${isDark ? '#1a0a0a' : '#fef2f2'}; border: 1px solid #f8717144; border-radius: 6px; color: #f87171; padding: 9px 18px; font-family: inherit; font-size: 12px; font-weight: 700; cursor: pointer; transition: all 0.15s; }
          .sp-btn-danger:hover:not(:disabled) { background: #f87171; color: #0a0c0e; }
          .sp-btn-danger:disabled { opacity: 0.4; cursor: not-allowed; }
          .sp-card { background: ${isDark ? '#0a0c0e' : '#f8fafc'}; border: 1px solid ${border}; border-radius: 8px; padding: 16px; margin-bottom: 14px; }
          .sp-row { display: grid; gap: 12px; margin-bottom: 12px; }
        `}</style>

        {/* Header */}
        <div style={{ background: isDark ? '#0d1117' : '#ffffff', borderBottom: `1px solid ${border}`, padding: '0 20px', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 16 }}>⚙</span>
            <div>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 15, color: hText }}>PROJECT SETTINGS</div>
              <div style={{ fontSize: 10, color: subtext }}>{project.project_code}</div>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'transparent', border: 'none', color: subtext, cursor: 'pointer', fontSize: 18, lineHeight: 1, padding: 4 }}
          >
            ✕
          </button>
        </div>

        {/* Tabs */}
        <div style={{ borderBottom: `1px solid ${border}`, display: 'flex', flexShrink: 0 }}>
          {(['project', 'account', 'danger'] as Tab[]).map(t => (
            <div
              key={t}
              className={`sp-tab${tab === t ? ' active' : ''}`}
              onClick={() => setTab(t)}
            >
              {t === 'project' ? '📋 PROJECT' : t === 'account' ? '👤 ACCOUNT' : '🗑 DANGER ZONE'}
            </div>
          ))}
        </div>

        {/* Body */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>

          {/* ── PROJECT TAB ── */}
          {tab === 'project' && (
            <form onSubmit={handleSaveProject}>
              <div className="sp-card">
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 13, color: hText, letterSpacing: '0.06em', marginBottom: 14 }}>GENERAL INFORMATION</div>

                <div className="sp-row" style={{ gridTemplateColumns: '1fr' }}>
                  <div>
                    <label style={label}>PROJECT NAME *</label>
                    <input className="sp-fi" style={fi} value={form.project_name} onChange={e => setForm(f => ({ ...f, project_name: e.target.value }))} />
                  </div>
                </div>

                <div className="sp-row" style={{ gridTemplateColumns: '1fr 1fr' }}>
                  <div>
                    <label style={label}>PROJECT CODE *</label>
                    <input className="sp-fi" style={fi} value={form.project_code} onChange={e => setForm(f => ({ ...f, project_code: e.target.value }))} />
                  </div>
                  <div>
                    <label style={label}>STATUS</label>
                    <select className="sp-fi" style={{ ...fi, cursor: 'pointer' }} value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value }))}>
                      {STATUS_OPTS.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div className="sp-row" style={{ gridTemplateColumns: '1fr' }}>
                  <div>
                    <label style={label}>CLIENT NAME *</label>
                    <input className="sp-fi" style={fi} value={form.client_name} onChange={e => setForm(f => ({ ...f, client_name: e.target.value }))} />
                  </div>
                </div>

                <div className="sp-row" style={{ gridTemplateColumns: '1fr 1fr' }}>
                  <div>
                    <label style={label}>CLIENT CONTACT</label>
                    <input className="sp-fi" style={fi} value={form.client_contact || ''} onChange={e => setForm(f => ({ ...f, client_contact: e.target.value }))} placeholder="Email or phone" />
                  </div>
                  <div>
                    <label style={label}>LOCATION</label>
                    <input className="sp-fi" style={fi} value={form.location || ''} onChange={e => setForm(f => ({ ...f, location: e.target.value }))} placeholder="City, Country" />
                  </div>
                </div>
              </div>

              <div className="sp-card">
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 13, color: hText, letterSpacing: '0.06em', marginBottom: 14 }}>SCHEDULE & BUDGET</div>

                <div className="sp-row" style={{ gridTemplateColumns: '1fr 1fr' }}>
                  <div>
                    <label style={label}>START DATE</label>
                    <input className="sp-fi" type="date" style={fi} value={form.start_date || ''} onChange={e => setForm(f => ({ ...f, start_date: e.target.value }))} />
                  </div>
                  <div>
                    <label style={label}>END DATE</label>
                    <input className="sp-fi" type="date" style={fi} value={form.end_date || ''} onChange={e => setForm(f => ({ ...f, end_date: e.target.value }))} />
                  </div>
                </div>

                <div className="sp-row" style={{ gridTemplateColumns: '90px 1fr' }}>
                  <div>
                    <label style={label}>CURRENCY</label>
                    <select className="sp-fi" style={{ ...fi, cursor: 'pointer' }} value={form.currency || 'USD'} onChange={e => setForm(f => ({ ...f, currency: e.target.value }))}>
                      {CURRENCY_OPTS.map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={label}>CONTRACT VALUE</label>
                    <input className="sp-fi" type="number" style={fi} value={form.budget || ''} onChange={e => setForm(f => ({ ...f, budget: Number(e.target.value) }))} placeholder="0" />
                  </div>
                </div>

                <div>
                  <label style={label}>DESCRIPTION</label>
                  <textarea className="sp-fi" style={{ ...fi, minHeight: 72, resize: 'vertical' }} value={form.description || ''} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} placeholder="Brief scope of works..." />
                </div>
              </div>

              {saveErr && <div style={{ color: '#f87171', fontSize: 12, marginBottom: 12 }}>{saveErr}</div>}
              {saveMsg && <div style={{ color: '#4ade80', fontSize: 12, marginBottom: 12 }}>{saveMsg}</div>}

              <button type="submit" className="sp-btn-primary" disabled={saving} style={{ width: '100%' }}>
                {saving ? 'Saving...' : '✓ Save Project Changes'}
              </button>
            </form>
          )}

          {/* ── ACCOUNT TAB ── */}
          {tab === 'account' && (
            <div>
              <div className="sp-card">
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 13, color: hText, letterSpacing: '0.06em', marginBottom: 4 }}>PROFILE</div>
                <div style={{ fontSize: 11, color: subtext, marginBottom: 14 }}>{user?.email}</div>

                <form onSubmit={handleSaveProfile}>
                  <div className="sp-row" style={{ gridTemplateColumns: '1fr 1fr' }}>
                    <div>
                      <label style={label}>FULL NAME</label>
                      <input className="sp-fi" style={fi} value={profileForm.full_name} onChange={e => setProfileForm(p => ({ ...p, full_name: e.target.value }))} placeholder="John Smith" />
                    </div>
                    <div>
                      <label style={label}>COMPANY</label>
                      <input className="sp-fi" style={fi} value={profileForm.company} onChange={e => setProfileForm(p => ({ ...p, company: e.target.value }))} placeholder="Acme Corp" />
                    </div>
                  </div>
                  {profileMsg && <div style={{ color: '#4ade80', fontSize: 11, marginBottom: 10 }}>{profileMsg}</div>}
                  <button type="submit" className="sp-btn-primary" disabled={savingProfile}>
                    {savingProfile ? 'Saving...' : 'Save Profile'}
                  </button>
                </form>
              </div>

              <div className="sp-card">
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 13, color: hText, letterSpacing: '0.06em', marginBottom: 14 }}>CHANGE PASSWORD</div>

                <form onSubmit={handleChangePassword}>
                  <div className="sp-row" style={{ gridTemplateColumns: '1fr', marginBottom: 10 }}>
                    <div>
                      <label style={label}>NEW PASSWORD</label>
                      <input className="sp-fi" type="password" style={fi} value={newPassword} onChange={e => setNewPassword(e.target.value)} placeholder="••••••••" />
                    </div>
                    <div>
                      <label style={label}>CONFIRM PASSWORD</label>
                      <input className="sp-fi" type="password" style={fi} value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="••••••••" />
                    </div>
                  </div>
                  {pwMsg && <div style={{ fontSize: 11, color: pwMsg.includes('updated') ? '#4ade80' : '#f87171', marginBottom: 10 }}>{pwMsg}</div>}
                  <button type="submit" className="sp-btn">Update Password</button>
                </form>
              </div>

              <button
                onClick={() => router.push('/account')}
                className="sp-btn"
                style={{ width: '100%', marginTop: 4 }}
              >
                ↗ Full Account Settings
              </button>
            </div>
          )}

          {/* ── DANGER ZONE TAB ── */}
          {tab === 'danger' && (
            <div>
              <div className="sp-card" style={{ border: `1px solid ${isDark ? '#f8717133' : '#fecaca'}` }}>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 13, color: '#f87171', letterSpacing: '0.06em', marginBottom: 8 }}>⚠ DELETE PROJECT</div>
                <div style={{ fontSize: 11, color: subtext, marginBottom: 16, lineHeight: 1.6 }}>
                  This will permanently delete <strong style={{ color: text }}>{project.project_name}</strong> and all associated data including SOW items, BOQ, cost entries, tasks, and documents. This action <strong style={{ color: '#f87171' }}>cannot be undone</strong>.
                </div>

                <div style={{ background: isDark ? '#0a0c0e' : '#fff5f5', border: `1px solid ${isDark ? '#2d1515' : '#fecaca'}`, borderRadius: 6, padding: '12px 14px', marginBottom: 16 }}>
                  <div style={{ fontSize: 10, color: '#f87171', letterSpacing: '0.06em', marginBottom: 6 }}>DATA THAT WILL BE DELETED</div>
                  {['SOW / Scope Items', 'Bill of Quantities', 'Cost Entries', 'Tasks', 'Documents & Drawings'].map(item => (
                    <div key={item} style={{ fontSize: 11, color: subtext, display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3 }}>
                      <span style={{ color: '#f87171', fontSize: 9 }}>✕</span> {item}
                    </div>
                  ))}
                </div>

                <div style={{ marginBottom: 14 }}>
                  <label style={{ ...label, color: '#f87171' }}>
                    TYPE PROJECT NAME TO CONFIRM: <span style={{ color: text }}>{project.project_name}</span>
                  </label>
                  <input
                    className="sp-fi"
                    style={{ ...fi, borderColor: deleteConfirmText === project.project_name ? '#f87171' : border }}
                    value={deleteConfirmText}
                    onChange={e => setDeleteConfirmText(e.target.value)}
                    placeholder={`Type "${project.project_name}" to confirm`}
                  />
                </div>

                {deleteErr && <div style={{ color: '#f87171', fontSize: 11, marginBottom: 12 }}>{deleteErr}</div>}

                <button
                  className="sp-btn-danger"
                  disabled={deleteConfirmText !== project.project_name || deleting}
                  onClick={handleDeleteProject}
                  style={{ width: '100%' }}
                >
                  {deleting ? 'Deleting...' : '🗑 Permanently Delete Project'}
                </button>
              </div>

              <div className="sp-card" style={{ border: `1px solid ${isDark ? '#f8717133' : '#fecaca'}` }}>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 13, color: '#f87171', letterSpacing: '0.06em', marginBottom: 8 }}>DELETE ACCOUNT</div>
                <div style={{ fontSize: 11, color: subtext, marginBottom: 14, lineHeight: 1.6 }}>
                  Permanently delete your account and all projects. For account deletion, contact support.
                </div>
                <button
                  className="sp-btn"
                  onClick={() => router.push('/account')}
                  style={{ fontSize: 11 }}
                >
                  Manage Account →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
