export default function NotFound() {
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
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>404</div>
        <h2 style={{ color: '#f59e0b', marginBottom: '12px' }}>404 — Page not found</h2>
        <p style={{ color: '#888888', marginBottom: '24px', fontSize: '14px' }}>
          The page you’re looking for doesn’t exist.
        </p>
        <a
          href="/dashboard"
          style={{
            color: '#f59e0b',
            fontSize: '14px',
            textDecoration: 'none',
          }}
        >
          ← Back to Dashboard
        </a>
      </div>
    </div>
  )
}
