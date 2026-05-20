'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function PaymentsPage() {
  const router = useRouter()
  const [phone, setPhone] = useState('')
  const [amount, setAmount] = useState('10')
  const [projectCode, setProjectCode] = useState('CPOS-BETA')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<string>('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setResult('')
    try {
      const res = await fetch('/api/payments/mpesa/stk-push', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone,
          amount: Number(amount),
          projectCode,
          accountReference: projectCode,
          transactionDesc: `CPOS ${projectCode}`,
        }),
      })
      const json = await res.json()
      setResult(JSON.stringify(json, null, 2))
    } catch (error) {
      setResult(error instanceof Error ? error.message : 'Unknown payment error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      style={{
        fontFamily: "'DM Mono', 'Courier New', monospace",
        background: '#0a0c0e',
        minHeight: '100vh',
        color: '#c9d1d9',
        padding: 24,
      }}
    >
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <h1 style={{ fontSize: 22, color: '#e6edf3' }}>M-Pesa STK Payments (Beta)</h1>
          <button
            onClick={() => router.push('/dashboard')}
            style={{ background: 'transparent', border: '1px solid #30363d', borderRadius: 6, color: '#8b949e', padding: '8px 12px', cursor: 'pointer' }}
          >
            Back to Dashboard
          </button>
        </div>

        <div style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: 10, padding: 20 }}>
          <div style={{ fontSize: 12, color: '#6e7681', marginBottom: 14 }}>
            Use this page to trigger a sandbox STK push while we finalize billing UX.
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <label style={{ fontSize: 12 }}>
                Phone (Kenya)
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="0712345678"
                  required
                  style={{ width: '100%', marginTop: 6, background: '#0a0c0e', border: '1px solid #30363d', borderRadius: 6, color: '#c9d1d9', padding: '10px 12px' }}
                />
              </label>
              <label style={{ fontSize: 12 }}>
                Amount (KES)
                <input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  type="number"
                  min="1"
                  required
                  style={{ width: '100%', marginTop: 6, background: '#0a0c0e', border: '1px solid #30363d', borderRadius: 6, color: '#c9d1d9', padding: '10px 12px' }}
                />
              </label>
            </div>

            <label style={{ fontSize: 12, display: 'block', marginTop: 12 }}>
              Project / Account Reference
              <input
                value={projectCode}
                onChange={(e) => setProjectCode(e.target.value)}
                placeholder="CPOS-BETA"
                style={{ width: '100%', marginTop: 6, background: '#0a0c0e', border: '1px solid #30363d', borderRadius: 6, color: '#c9d1d9', padding: '10px 12px' }}
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              style={{ marginTop: 16, background: '#f59e0b', border: 'none', borderRadius: 6, color: '#0a0c0e', padding: '10px 16px', cursor: 'pointer', fontWeight: 700 }}
            >
              {loading ? 'Sending STK...' : 'Send STK Push'}
            </button>
          </form>
        </div>

        <div style={{ marginTop: 16, background: '#0d1117', border: '1px solid #21262d', borderRadius: 10, padding: 16 }}>
          <div style={{ fontSize: 12, color: '#6e7681', marginBottom: 8 }}>Response</div>
          <pre style={{ whiteSpace: 'pre-wrap', fontSize: 11, color: '#c9d1d9' }}>{result || 'No request sent yet.'}</pre>
        </div>
      </div>
    </div>
  )
}
