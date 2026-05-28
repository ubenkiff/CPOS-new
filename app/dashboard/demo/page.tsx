'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useTheme } from '../../../lib/theme'
import ThemeSelector from '../../../components/ThemeSelector'

type Project = {
  projectid: string
  project_name: string
  project_code: string
  client_name: string
  location: string
  status: string
  budget: number
  currency: string
}

const statusColors: Record<string, { bg: string; text: string; bgLight: string; textLight: string }> = {
  Active: { bg: '#052e16', text: '#4ade80', bgLight: '#d1fae5', textLight: '#065f46' },
  Planning: { bg: '#1e1b4b', text: '#818cf8', bgLight: '#e0e7ff', textLight: '#3730a3' },
  'On Hold': { bg: '#2d1f05', text: '#f59e0b', bgLight: '#fef3c7', textLight: '#92400e' },
  Closed: { bg: '#1c1917', text: '#78716c', bgLight: '#f5f5f4', textLight: '#57534e' },
}

const PUBLIC_VIEWONLY_PROJECT_ID = 'e03418fd-0ef2-4080-90c6-f18009bb12d1'

export default function DemoBrowsePage() {
  const router = useRouter()
  const { theme, setTheme, isDark } = useTheme()
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [hint, setHint] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    async function load() {
      try {
        const res = await fetch('/api/demo-projects')
        const json = await res.json()
        if (cancelled) return
        setProjects(json.projects || [])
        if (!json.configured && json.message) setHint(json.message)
        if (json.error) setHint(json.error)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [])

  // Theme variable bindings
  const bg = isDark ? '#0a0c0e' : '#f8fafc'
  const textCol = isDark ? '#c9d1d9' : '#1e293b'
  const borderCol = isDark ? '#21262d' : '#cbd5e1'
  const cardBg = isDark ? '#0d1117' : '#ffffff'
  const hText = isDark ? '#e6edf3' : '#0f172a'
  const subText = isDark ? '#8b949e' : '#57606a'
  const minText = isDark ? '#484f58' : '#8c95a0'
  const bgLines = isDark
    ? 'linear-gradient(rgba(96,165,250,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.025) 1px, transparent 1px)'
    : 'linear-gradient(rgba(148,163,184,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.035) 1px, transparent 1px)'

  return (
    <div
      style={{
        fontFamily: "'DM Mono', 'Courier New', monospace",
        background: bg,
        minHeight: '100vh',
        padding: '40px',
        color: textCol,
        backgroundImage: bgLines,
        backgroundSize: '32px 32px',
        transition: 'all 0.3s ease',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .project-card {
          background: ${cardBg}; border: 1px solid ${borderCol}; border-radius: 10px;
          padding: 22px; cursor: pointer; transition: all 0.2s;
        }
        .project-card:hover {
          border-color: #f59e0b; transform: translateY(-2px);
          box-shadow: ${isDark ? '0 8px 24px rgba(245,158,11,0.08)' : '0 8px 24px rgba(245,158,11,0.06)'};
        }
        .tag { display: inline-flex; align-items: center; gap: 5px; padding: 3px 8px; border-radius: 4px; font-size: 11px; font-weight: 500; }
        .btn-outline { background: transparent; border: 1px solid ${isDark ? '#30363d' : '#cbd5e1'}; border-radius: 6px; color: ${isDark ? '#8b949e' : '#24292f'}; padding: 8px 14px; font-weight: 600; cursor: pointer; font-family: inherit; font-size: 12px; }
        .btn-outline:hover { border-color: #f59e0b; color: #f59e0b; }
      `}</style>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: 24,
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <div
              style={{
                width: 32,
                height: 32,
                background: '#f59e0b',
                borderRadius: 6,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="16" height="16" fill="none" stroke="#0a0c0e" strokeWidth="2.5" viewBox="0 0 24 24">
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
              </svg>
            </div>
            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: 20,
                color: hText,
                letterSpacing: '0.06em',
              }}
            >
              CPOS
            </span>
          </div>
          <h1
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: 26,
              color: hText,
              letterSpacing: '0.02em',
            }}
          >
            SAMPLE PROJECTS
          </h1>
          <p style={{ color: subText, fontSize: 12, marginTop: 6, maxWidth: 520 }}>
            Live data from your database — browse without signing in. Sign in to open a project and edit.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <ThemeSelector compact={true} />
          <button type="button" className="btn-outline" onClick={() => router.push('/login')}>
            Sign in
          </button>
          <button
            type="button"
            className="btn-outline"
            onClick={() => router.push('/register')}
            style={{ borderColor: '#f59e0b33', color: '#f59e0b' }}
          >
            Create account
          </button>
        </div>
      </div>

      <div
        style={{
          background: isDark ? '#0d1117' : '#ffffff',
          border: '1px solid ' + borderCol,
          borderRadius: 8,
          padding: '14px 18px',
          marginBottom: 28,
          fontSize: 12,
          color: subText,
          transition: 'all 0.3s ease',
        }}
      >
        <span style={{ color: '#f59e0b', fontWeight: 600 }}>Tip:</span> Click a project, then sign in — you’ll be sent back to that project after login.
      </div>

      <div
        style={{
          background: isDark ? '#0d1117' : '#ffffff',
          border: '1px solid ' + borderCol,
          borderRadius: 8,
          padding: '14px 18px',
          marginBottom: 28,
          fontSize: 12,
          color: subText,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          flexWrap: 'wrap',
          transition: 'all 0.3s ease',
        }}
      >
        <div>
          <div style={{ fontSize: 10, color: minText, letterSpacing: '0.08em', fontWeight: 800, marginBottom: 6 }}>
            INVESTOR BRIEFING
          </div>
          <div style={{ color: textCol, fontSize: 12, lineHeight: 1.6 }}>
            Want the full CPOS story — modules, costs, revenue model, and roadmap?
          </div>
        </div>
        <Link
          href="/pitch"
          style={{
            background: isDark ? '#161b22' : '#f1f5f9',
            border: '1px solid ' + (isDark ? '#30363d' : '#cbd5e1'),
            borderRadius: 6,
            color: '#f59e0b',
            padding: '8px 14px',
            fontWeight: 800,
            fontSize: 12,
            textDecoration: 'none',
            letterSpacing: '0.04em',
            transition: 'all 0.3s ease',
          }}
        >
          View Pitch →
        </Link>
      </div>

      {loading && (
        <div style={{ textAlign: 'center', padding: '60px', color: minText, fontSize: 13 }}>
          Loading projects…
        </div>
      )}

      {!loading && hint && projects.length === 0 && (
        <div
          style={{
            background: isDark ? '#1a1508' : '#fffbeb',
            border: '1px solid #f59e0b33',
            borderRadius: 8,
            padding: 20,
            fontSize: 13,
            color: textCol,
            marginBottom: 24,
          }}
        >
          {hint}
        </div>
      )}

      {!loading && projects.length === 0 && !hint && (
        <div style={{ textAlign: 'center', padding: '60px', color: minText }}>
          <p style={{ marginBottom: 12 }}>No projects found in the database yet.</p>
          <Link href="/register" style={{ color: '#f59e0b', fontSize: 13 }}>
            Create an account →
          </Link>
        </div>
      )}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 16,
        }}
      >
        {projects.map((project) => {
          const sc = statusColors[project.status] || statusColors['Planning']
          const next = `/dashboard/${project.projectid}`
          const isPublicSolar = project.projectid === PUBLIC_VIEWONLY_PROJECT_ID
          const tagBg = isDark ? sc.bg : sc.bgLight
          const tagTxt = isDark ? sc.text : sc.textLight
          return (
            <div
              key={project.projectid}
              className="project-card"
              role="button"
              tabIndex={0}
              style={
                isPublicSolar
                  ? { 
                      borderColor: '#f59e0b66', 
                      background: isDark ? '#1a120a' : '#fffbeb' 
                    }
                  : undefined
              }
              onClick={() => {
                // Only the Solar Power Plant project is public (view-only).
                if (isPublicSolar) router.push(next)
                else router.push(`/login?next=${encodeURIComponent(next)}`)
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ')
                  if (isPublicSolar) router.push(next)
                  else router.push(`/login?next=${encodeURIComponent(next)}`)
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: 12,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: 14,
                    color: '#f59e0b',
                    letterSpacing: '0.05em',
                  }}
                >
                  {project.project_code}
                </span>
                <div className="tag" style={{ background: tagBg, color: tagTxt }}>
                  {project.status}
                </div>
              </div>
              <h2
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: 17,
                  color: hText,
                  marginBottom: 12,
                  lineHeight: 1.3,
                }}
              >
                {project.project_name}
              </h2>
              <div
                style={{
                  borderTop: '1px solid ' + (isDark ? '#161b22' : '#f1f5f9'),
                  paddingTop: 12,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 5,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 10, color: minText, letterSpacing: '0.06em' }}>CLIENT</span>
                  <span style={{ fontSize: 11, color: textCol }}>{project.client_name || '—'}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 10, color: minText, letterSpacing: '0.06em' }}>LOCATION</span>
                  <span style={{ fontSize: 11, color: textCol }}>{project.location || '—'}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 10, color: minText, letterSpacing: '0.06em' }}>BUDGET</span>
                  <span style={{ fontSize: 11, color: '#4ade80', fontWeight: 500 }}>
                    {project.currency} {Number(project.budget).toLocaleString()}
                  </span>
                </div>
              </div>
              <div
                style={{
                  marginTop: 14,
                  fontSize: 10,
                  color: '#f59e0b',
                  textAlign: 'right',
                  letterSpacing: '0.06em',
                }}
              >
                {isPublicSolar ? 'OPEN PUBLIC VIEW →' : 'SIGN IN TO OPEN →'}
              </div>
            </div>
          )
        })}
      </div>

      <div
        style={{
          marginTop: 36,
          paddingTop: 16,
          borderTop: '1px solid ' + borderCol,
          textAlign: 'center',
        }}
      >
        <Link href="/login" style={{ fontSize: 12, color: subText }}>
          ← Back to sign in
        </Link>
      </div>
    </div>
  )
}
