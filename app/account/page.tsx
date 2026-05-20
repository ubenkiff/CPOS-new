'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../supabase'

export default function AccountPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState({ full_name: '', company: '', role: 'user' })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')
  const [activeTab, setActiveTab] = useState<'profile' | 'security' | 'subscription'>('profile')

  // Password change
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [pwMessage, setPwMessage] = useState('')

  const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL || ''

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/login'); return }
      setUser(user)
      // Load profile
      const { data } = await supabase.from('users').select('*').eq('userid', user.id).single()
      if (data) setProfile({ full_name: data.full_name || '', company: data.company || '', role: data.role || 'user' })
      setLoading(false)
    }
    load()
  }, [])

  async function handleSaveProfile(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    await supabase.from('users').upsert([{
      userid: user.id,
      email: user.email,
      full_name: profile.full_name,
      company: profile.company,
      role: profile.role,
    }])
    setMessage('Profile updated successfully.')
    setSaving(false)
    setTimeout(() => setMessage(''), 3000)
  }

  async function handleChangePassword(e: React.FormEvent) {
    e.preventDefault()
    if (newPassword !== confirmPassword) { setPwMessage('Passwords do not match.'); return }
    if (newPassword.length < 8) { setPwMessage('Password must be at least 8 characters.'); return }
    const { error } = await supabase.auth.updateUser({ password: newPassword })
    if (error) { setPwMessage(error.message); return }
    setPwMessage('Password updated successfully.')
    setNewPassword(''); setConfirmPassword(''); setCurrentPassword('')
    setTimeout(() => setPwMessage(''), 3000)
  }

  async function handleSignOut() {
    await supabase.auth.signOut()
    router.push('/login')
  }

  if (loading) return (
    <div style={{ background: '#0a0c0e', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace', color: '#484f58', fontSize: 13 }}>
      Loading account...
    </div>
  )

  const isAdmin = !!ADMIN_EMAIL && user?.email === ADMIN_EMAIL
  const inputStyle = { width: '100%', background: '#0a0c0e', border: '1px solid #21262d', borderRadius: '6px', color: '#c9d1d9', fontFamily: 'inherit', fontSize: '13px', padding: '10px 12px', outline: 'none' } as React.CSSProperties

  return (
    <div style={{ fontFamily: "'DM Mono','Courier New',monospace", background: '#0a0c0e', minHeight: '100vh', color: '#c9d1d9' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Barlow+Condensed:wght@700;800&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        input:focus{border-color:#f59e0b!important;}
        .tab{padding:8px 16px;cursor:pointer;font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:600;letter-spacing:0.05em;border-bottom:2px solid transparent;transition:all 0.15s;color:#6e7681;}
        .tab.active{color:#f59e0b;border-bottom-color:#f59e0b;}
        .btn{padding:8px 16px;border-radius:6px;border:1px solid #30363d;background:#161b22;color:#c9d1d9;cursor:pointer;font-family:inherit;font-size:12px;transition:all 0.15s;}
        .btn:hover{border-color:#f59e0b;color:#f59e0b;}
        .btn-primary{background:#f59e0b;border:none;border-radius:6px;color:#0a0c0e;padding:10px 20px;font-family:inherit;font-size:12px;font-weight:700;cursor:pointer;transition:background 0.15s;}
        .btn-primary:hover{background:#fbbf24;}
        .btn-danger{background:#1a0a0a;border:1px solid #f8717133;border-radius:6px;color:#f87171;padding:8px 16px;font-family:inherit;font-size:12px;cursor:pointer;transition:all 0.15s;}
        .btn-danger:hover{background:#f87171;color:#0a0c0e;}
        .card{background:#0d1117;border:1px solid #21262d;border-radius:8px;padding:20px;}
      `}</style>

      {/* TOP BAR */}
      <div style={{ background: '#0d1117', borderBottom: '1px solid #21262d', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <button className="btn" onClick={() => router.push('/dashboard')} style={{ fontSize: '11px', padding: '5px 10px' }}>← Dashboard</button>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 16, color: '#e6edf3' }}>ACCOUNT SETTINGS</div>
          {isAdmin && <span style={{ background: '#f59e0b', color: '#0a0c0e', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 4, letterSpacing: '0.08em' }}>ADMIN</span>}
        </div>
        <button className="btn-danger" onClick={handleSignOut} style={{ fontSize: '11px' }}>Sign Out</button>
      </div>

      {/* TABS */}
      <div style={{ background: '#0d1117', borderBottom: '1px solid #21262d', padding: '0 24px', display: 'flex', gap: 4 }}>
        {(['profile', 'security', 'subscription'] as const).map(tab => (
          <div key={tab} className={`tab ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>
            {tab.toUpperCase()}
          </div>
        ))}
      </div>

      <div style={{ maxWidth: 640, margin: '32px auto', padding: '0 24px' }}>

        {/* ── PROFILE TAB ── */}
        {activeTab === 'profile' && (
          <div className="card">
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 15, color: '#e6edf3', marginBottom: 4 }}>PROFILE INFORMATION</div>
            <div style={{ fontSize: 11, color: '#484f58', marginBottom: 20 }}>{user?.email}</div>

            <form onSubmit={handleSaveProfile}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 10, color: '#484f58', letterSpacing: '0.08em', marginBottom: 6 }}>FULL NAME</label>
                  <input value={profile.full_name} onChange={e => setProfile(p => ({ ...p, full_name: e.target.value }))} placeholder="John Smith" style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 10, color: '#484f58', letterSpacing: '0.08em', marginBottom: 6 }}>COMPANY</label>
                  <input value={profile.company} onChange={e => setProfile(p => ({ ...p, company: e.target.value }))} placeholder="Acme Construction" style={inputStyle} />
                </div>
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', fontSize: 10, color: '#484f58', letterSpacing: '0.08em', marginBottom: 6 }}>EMAIL ADDRESS</label>
                <input value={user?.email} disabled style={{ ...inputStyle, opacity: 0.5, cursor: 'not-allowed' }} />
                <div style={{ fontSize: 10, color: '#30363d', marginTop: 4 }}>Email cannot be changed here. Contact support.</div>
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', fontSize: 10, color: '#484f58', letterSpacing: '0.08em', marginBottom: 6 }}>ACCOUNT ROLE</label>
                <div style={{ padding: '10px 12px', background: '#0a0c0e', border: '1px solid #21262d', borderRadius: 6, fontSize: 12, color: isAdmin ? '#f59e0b' : '#c9d1d9' }}>
                  {isAdmin ? '⚡ Administrator — Full system access' : '👤 User — Standard access'}
                </div>
              </div>

              {message && <div style={{ color: '#4ade80', fontSize: 12, marginBottom: 14 }}>{message}</div>}
              <button type="submit" className="btn-primary" disabled={saving}>{saving ? 'Saving...' : 'Save Profile'}</button>
            </form>
          </div>
        )}

        {/* ── SECURITY TAB ── */}
        {activeTab === 'security' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="card">
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 15, color: '#e6edf3', marginBottom: 4 }}>CHANGE PASSWORD</div>
              <div style={{ fontSize: 11, color: '#484f58', marginBottom: 20 }}>Choose a strong password with at least 8 characters</div>

              <form onSubmit={handleChangePassword}>
                <div style={{ marginBottom: 14 }}>
                  <label style={{ display: 'block', fontSize: 10, color: '#484f58', letterSpacing: '0.08em', marginBottom: 6 }}>NEW PASSWORD</label>
                  <input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} placeholder="••••••••" style={inputStyle} />
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: 'block', fontSize: 10, color: '#484f58', letterSpacing: '0.08em', marginBottom: 6 }}>CONFIRM NEW PASSWORD</label>
                  <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="••••••••" style={inputStyle} />
                </div>
                {pwMessage && <div style={{ fontSize: 12, color: pwMessage.includes('success') ? '#4ade80' : '#f87171', marginBottom: 14 }}>{pwMessage}</div>}
                <button type="submit" className="btn-primary">Update Password</button>
              </form>
            </div>

            <div className="card">
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 15, color: '#e6edf3', marginBottom: 4 }}>TWO-FACTOR AUTHENTICATION</div>
              <div style={{ fontSize: 11, color: '#484f58', marginBottom: 16 }}>Add an extra layer of security to your account</div>
              <div style={{ background: '#0a0c0e', border: '1px solid #21262d', borderRadius: 6, padding: '14px 16px', fontSize: 12, color: '#6e7681', marginBottom: 16 }}>
                2FA via authenticator app (Google Authenticator, Authy) — <span style={{ color: '#f59e0b' }}>Coming soon</span>
              </div>
              <div style={{ fontSize: 11, color: '#484f58' }}>
                2FA will be available in the next update. You will receive an email notification when it's ready.
              </div>
            </div>

            <div className="card" style={{ border: '1px solid #f8717122' }}>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 15, color: '#f87171', marginBottom: 4 }}>DANGER ZONE</div>
              <div style={{ fontSize: 11, color: '#484f58', marginBottom: 16 }}>Permanently delete your account and all associated data</div>
              <button className="btn-danger">Delete Account</button>
            </div>
          </div>
        )}

        {/* ── SUBSCRIPTION TAB ── */}
        {activeTab === 'subscription' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="card">
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 15, color: '#e6edf3', marginBottom: 4 }}>CURRENT PLAN</div>
              <div style={{ fontSize: 11, color: '#484f58', marginBottom: 20 }}>Manage your subscription and billing</div>

              <div style={{ background: '#0a0c0e', border: '1px solid #f59e0b33', borderRadius: 8, padding: '16px 18px', marginBottom: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 18, color: '#f59e0b' }}>FREE PLAN</div>
                    <div style={{ fontSize: 11, color: '#484f58', marginTop: 2 }}>1 active project · Basic dashboard only</div>
                  </div>
                  <div style={{ fontSize: 20, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, color: '#e6edf3' }}>$0/mo</div>
                </div>
              </div>

              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 13, color: '#e6edf3', letterSpacing: '0.06em', marginBottom: 12 }}>UPGRADE YOUR PROJECT</div>
              {[
                { name: 'STARTER', price: '$10', desc: 'Per project · SOW + BOQ access', color: '#60a5fa' },
                { name: 'PROFESSIONAL', price: '$29/mo', desc: 'Per project · Full features — Gantt, Reports, Docs', color: '#c084fc' },
                { name: 'ENTERPRISE', price: '$100/mo', desc: 'Unlimited projects · All features + priority support', color: '#f59e0b' },
              ].map(plan => (
                <div key={plan.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 16px', background: '#0a0c0e', border: `1px solid ${plan.color}22`, borderRadius: 8, marginBottom: 10 }}>
                  <div>
                    <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 14, color: plan.color }}>{plan.name}</div>
                    <div style={{ fontSize: 11, color: '#484f58', marginTop: 2 }}>{plan.desc}</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 18, color: plan.color }}>{plan.price}</span>
                    <button
                      className="btn"
                      style={{ fontSize: 11, borderColor: plan.color, color: plan.color }}
                      onClick={() => router.push('/payments')}
                    >
                      Pay with M-Pesa
                    </button>
                  </div>
                </div>
              ))}

              <div style={{ fontSize: 11, color: '#484f58', marginTop: 12, textAlign: 'center' }}>
                Payment processing coming soon · Contact <span style={{ color: '#f59e0b' }}>{ADMIN_EMAIL || 'support'}</span> to upgrade
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
