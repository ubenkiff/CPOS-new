'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0a0a0a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        fontFamily: 'monospace',
      }}
    >
      <div
        style={{
          border: '1px solid #f59e0b',
          padding: '40px',
          borderRadius: '8px',
          textAlign: 'center',
          maxWidth: '500px',
        }}
      >
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>⚠️</div>
        <h2 style={{ color: '#f59e0b', marginBottom: '12px' }}>Something went wrong</h2>
        <p style={{ color: '#888888', marginBottom: '24px', fontSize: '14px' }}>
          {error?.message || 'An unexpected error occurred'}
        </p>
        <button
          onClick={reset}
          style={{
            background: '#f59e0b',
            color: '#0a0a0a',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
            marginRight: '12px',
          }}
        >
          Try Again
        </button>
        <a
          href="/dashboard"
          style={{
            color: '#f59e0b',
            fontSize: '14px',
          }}
        >
          ← Back to Dashboard
        </a>
      </div>
    </div>
  )
}
