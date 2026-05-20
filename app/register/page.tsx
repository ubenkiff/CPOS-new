'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../supabase'

export default function RegisterPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [fullName, setFullName] = useState('')
  const [company, setCompany] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault()
    if (password !== confirm) { setError('Passwords do not match.'); return }
    if (password.length < 8) { setError('Password must be at least 8 characters.'); return }
    setLoading(true); setError('')

    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName, company },
      },
    })

    if (signUpError) { setError(signUpError.message); setLoading(false); return }

    // Insert into users table
    if (data.user) {
      await supabase.from('users').upsert([{
        userid: data.user.id,
        email: data.user.email,
        full_name: fullName,
        role: 'user',
      }])
    }

    setLoading(false)
    router.push(`/login?registered=1&email=${encodeURIComponent(email)}`)
  }

  const input = {
    width: '100%', background: '#0d1117', border: '1px solid #21262d',
    borderRadius: '6px', color: '#c9d1d9', fontFamily: 'inherit',
    fontSize: '13px', padding: '11px 14px', outline: 'none',
    transition: 'border-color 0.15s',
  } as React.CSSProperties

  return (
    <div style={{
      fontFamily: "'DM Mono','Courier New',monospace",
      background: '#0a0c0e', minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 16px',
      backgroundImage: 'linear-gradient(rgba(96,165,250,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(96,165,250,0.025) 1px,transparent 1px)',
      backgroundSize: '32px 32px',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Barlow+Condensed:wght@700;800&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        input:focus{border-color:#f59e0b!important;box-shadow:0 0 0 3px rgba(245,158,11,0.08);}
        .btn-primary{background:#f59e0b;border:none;border-radius:6px;color:#0a0c0e;width:100%;padding:12px;font-family:inherit;font-size:13px;font-weight:700;cursor:pointer;letter-spacing:0.05em;transition:background 0.15s;}
        .btn-primary:hover{background:#fbbf24;}
        .btn-primary:disabled{background:#484f58;cursor:not-allowed;}
        a{color:#f59e0b;text-decoration:none;font-size:12px;}
        a:hover{text-decoration:underline;}
      `}</style>

      <div style={{ width: '100%', maxWidth: 420, padding: '0 16px' }}>

        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <div style={{ width: 36, height: 36, background: '#f59e0b', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="18" height="18" fill="none" stroke="#0a0c0e" strokeWidth="2.5" viewBox="0 0 24 24">
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5"/>
                <line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="8.5" x2="22" y2="8.5"/>
              </svg>
            </div>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 22, color: '#e6edf3', letterSpacing: '0.06em' }}>CPOS</span>
          </div>
          <div style={{ fontSize: 11, color: '#484f58', letterSpacing: '0.1em' }}>CONSTRUCTION PROJECT OPERATING SYSTEM</div>
        </div>

        <div style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: 10, padding: '32px 28px' }}>

          <>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 20, color: '#e6edf3', letterSpacing: '0.03em', marginBottom: 4 }}>CREATE ACCOUNT</div>
            <div style={{ fontSize: 11, color: '#484f58', marginBottom: 24 }}>Start managing construction projects today</div>

              <form onSubmit={handleRegister}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 14 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 10, color: '#484f58', letterSpacing: '0.08em', marginBottom: 6 }}>FULL NAME *</label>
                    <input value={fullName} onChange={e => setFullName(e.target.value)} placeholder="John Smith" required style={input} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 10, color: '#484f58', letterSpacing: '0.08em', marginBottom: 6 }}>COMPANY</label>
                    <input value={company} onChange={e => setCompany(e.target.value)} placeholder="Acme Construction" style={input} />
                  </div>
                </div>

                <div style={{ marginBottom: 14 }}>
                  <label style={{ display: 'block', fontSize: 10, color: '#484f58', letterSpacing: '0.08em', marginBottom: 6 }}>EMAIL ADDRESS *</label>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required style={input} />
                </div>

                <div style={{ marginBottom: 14 }}>
                  <label style={{ display: 'block', fontSize: 10, color: '#484f58', letterSpacing: '0.08em', marginBottom: 6 }}>PASSWORD * (min 8 characters)</label>
                  <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" required style={input} />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: 'block', fontSize: 10, color: '#484f58', letterSpacing: '0.08em', marginBottom: 6 }}>CONFIRM PASSWORD *</label>
                  <input type="password" value={confirm} onChange={e => setConfirm(e.target.value)} placeholder="••••••••" required style={input} />
                </div>

                {/* Terms */}
                <div style={{ fontSize: 11, color: '#484f58', marginBottom: 16, lineHeight: 1.6 }}>
                  By creating an account you agree to our{' '}
                  <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.
                </div>

                {error && (
                  <div style={{ background: '#1a0a0a', border: '1px solid #f8717133', borderRadius: 6, padding: '10px 14px', fontSize: 12, color: '#f87171', marginBottom: 16 }}>
                    {error}
                  </div>
                )}

                <button type="submit" className="btn-primary" disabled={loading}>
                  {loading ? 'Creating account...' : 'CREATE ACCOUNT →'}
                </button>
              </form>

            <div style={{ textAlign: 'center', marginTop: 20, fontSize: 12, color: '#484f58' }}>
              Already have an account? <a href="/login">Sign in</a>
            </div>
          </>
        </div>

        <div style={{ textAlign: 'center', marginTop: 20, fontSize: 10, color: '#30363d', letterSpacing: '0.08em' }}>
          CPOS v1.0 · YOUR DATA IS ENCRYPTED AND PRIVATE
        </div>
      </div>
    </div>
  )
}
