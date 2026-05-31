'use client'

import { useState } from 'react'
import { supabase } from '../supabase'
import { useRouter } from 'next/navigation'

export default function UpdatePassword() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setMessage('')

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      setLoading(false)
      return
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: password
      })

      if (error) throw error

      setMessage('Password updated successfully!')
      setTimeout(() => {
        router.push('/login')
      }, 2000)
    } catch (error: any) {
      setError(error.message || 'Failed to update password')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: '#0a0c0e',
      fontFamily: "'DM Mono', 'Courier New', monospace"
    }}>
      <div style={{ 
        width: '100%', 
        maxWidth: '400px', 
        padding: '40px',
        background: '#0d1117',
        border: '1px solid #21262d',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
      }}>
        <h1 style={{ 
          color: '#e6edf3', 
          marginBottom: '8px',
          fontSize: '24px',
          fontWeight: '700',
          fontFamily: "'Barlow Condensed', sans-serif"
        }}>
          Update Password
        </h1>
        <p style={{ 
          color: '#8b949e', 
          marginBottom: '32px',
          fontSize: '14px'
        }}>
          Enter your new password below
        </p>

        {message && (
          <div style={{ 
            background: '#052e16', 
            color: '#4ade80', 
            padding: '12px', 
            borderRadius: '6px', 
            marginBottom: '20px',
            fontSize: '13px'
          }}>
            {message}
          </div>
        )}

        {error && (
          <div style={{ 
            background: '#2d0f0f', 
            color: '#f87171', 
            padding: '12px', 
            borderRadius: '6px', 
            marginBottom: '20px',
            fontSize: '13px'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleUpdatePassword}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ 
              display: 'block', 
              color: '#c9d1d9', 
              marginBottom: '8px',
              fontSize: '13px',
              fontWeight: '500'
            }}>
              New Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              style={{
                width: '100%',
                padding: '12px',
                background: '#0a0c0e',
                border: '1px solid #21262d',
                borderRadius: '6px',
                color: '#e6edf3',
                fontSize: '14px',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ 
              display: 'block', 
              color: '#c9d1d9', 
              marginBottom: '8px',
              fontSize: '13px',
              fontWeight: '500'
            }}>
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="••••••••"
              style={{
                width: '100%',
                padding: '12px',
                background: '#0a0c0e',
                border: '1px solid #21262d',
                borderRadius: '6px',
                color: '#e6edf3',
                fontSize: '14px',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '12px',
              background: loading ? '#30363d' : '#f59e0b',
              border: 'none',
              borderRadius: '6px',
              color: loading ? '#8b949e' : '#0a0c0e',
              fontSize: '14px',
              fontWeight: '700',
              cursor: loading ? 'not-allowed' : 'pointer',
              fontFamily: 'inherit'
            }}
          >
            {loading ? 'Updating...' : 'Update Password'}
          </button>
        </form>

        <div style={{ 
          marginTop: '24px', 
          textAlign: 'center',
          fontSize: '13px'
        }}>
          <button
            onClick={() => router.push('/login')}
            style={{
              background: 'none',
              border: 'none',
              color: '#8b949e',
              cursor: 'pointer',
              fontSize: '13px',
              fontFamily: 'inherit'
            }}
          >
            ← Back to Login
          </button>
        </div>
      </div>
    </div>
  )
}
