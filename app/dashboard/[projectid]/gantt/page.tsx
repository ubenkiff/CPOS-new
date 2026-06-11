'use client'
import { useEffect, useMemo, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { supabase } from '../../../supabase'
import { canAccessProject, PUBLIC_VIEWONLY_PROJECT_ID } from '../../../../lib/access'
import { useTheme } from '../../../../lib/theme'
import ThemeSelector from '../../../../components/ThemeSelector'
import GanttPaginatedLayout from '../../../../components/gantt/GanttPaginatedLayout'
import { computeScheduleRange } from '../../../../lib/gantt/dates'
import { buildGanttRows } from '../../../../lib/gantt/rows'
import { splitTimelineIntoPages } from '../../../../lib/gantt/timePages'
import { GANTT_VIEW_MODES, type GanttSowItem, type GanttViewMode } from '../../../../lib/gantt/types'

type Project = {
  projectid: string
  project_name: string
  project_code: string
  currency: string
  start_date: string
  end_date: string
  status: string
}

export default function GanttModule() {
  const params = useParams()
  const router = useRouter()
  const { isDark } = useTheme()
  const projectid = params?.projectid as string

  const isPublicViewOnly = projectid === PUBLIC_VIEWONLY_PROJECT_ID

  const [project, setProject] = useState<Project | null>(null)
  const [allItems, setAllItems] = useState<GanttSowItem[]>([])
  const [loading, setLoading] = useState(true)
  const [viewMode, setViewMode] = useState<GanttViewMode>('month')
  const [pageIndex, setPageIndex] = useState(0)
  const [showBaseline, setShowBaseline] = useState(true)
  const [showPlanned, setShowPlanned] = useState(true)
  const [showActual, setShowActual] = useState(true)
  const [showCriticalOnly, setShowCriticalOnly] = useState(false)
  const [collapsedL1, setCollapsedL1] = useState<Set<string>>(new Set())
  const [today] = useState(new Date().toISOString().split('T')[0])

  useEffect(() => {
    if (!projectid) return
    if (isPublicViewOnly) {
      fetchProject()
      fetchItems()
      return
    }
    checkSessionAndLoad()
  }, [projectid])

  useEffect(() => {
    setPageIndex(0)
  }, [viewMode, projectid])

  async function checkSessionAndLoad() {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push(`/login?next=${encodeURIComponent(`/dashboard/${projectid}/gantt`)}`)
      return
    }

    const { data: ownerRow, error: ownerErr } = await supabase
      .from('projects')
      .select('user_id')
      .eq('projectid', projectid)
      .maybeSingle()

    if (ownerErr) {
      router.push('/pricing')
      return
    }

    const canAccess = canAccessProject({
      user,
      projectid,
      projectOwnerId: ownerRow?.user_id,
    })
    if (!canAccess) {
      router.push('/pricing')
      return
    }

    fetchProject()
    fetchItems()
  }

  async function fetchProject() {
    const { data } = await supabase
      .from('projects')
      .select('projectid,project_name,project_code,currency,start_date,end_date,status,user_id')
      .eq('projectid', projectid)
      .single()
    if (data) setProject(data)
  }

  async function fetchItems() {
    setLoading(true)
    const { data } = await supabase.from('sow_items').select('*').eq('projectid', projectid).order('sow_number')
    setAllItems(data || [])
    setLoading(false)
  }

  const schedule = useMemo(() => {
    if (!project) return null
    return computeScheduleRange({
      items: allItems,
      projectStart: project.start_date,
      projectEnd: project.end_date,
    })
  }, [allItems, project])

  const timePages = useMemo(() => {
    if (!schedule) return []
    return splitTimelineIntoPages(schedule.rangeStart, schedule.rangeEnd, viewMode)
  }, [schedule, viewMode])

  const rows = useMemo(
    () =>
      buildGanttRows({
        items: allItems,
        collapsedL1,
        showCriticalOnly,
      }),
    [allItems, collapsedL1, showCriticalOnly]
  )

  const l3Items = useMemo(() => allItems.filter((r) => Number(r.hierarchy_level) === 3), [allItems])

  if (loading || !project || !schedule) {
    return (
      <div style={{ background: '#0a0c0e', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace', color: '#484f58' }}>
        {loading ? 'Loading Gantt...' : 'Project not found'}
      </div>
    )
  }

  const { rangeStart, rangeEnd, totalDays, hasSchedule } = schedule
  const totalTasks = l3Items.length
  const withSchedule = l3Items.filter((r) => r.baseline_start || r.planned_start).length
  const complete = l3Items.filter((r) => r.status === 'Complete').length
  const delayed = l3Items.filter(
    (r) => r.status === 'Delayed' || (r.baseline_end && today > r.baseline_end && r.status !== 'Complete')
  ).length
  const critical = l3Items.filter((r) => r.is_critical_path).length

  const hBg = isDark ? '#0d1117' : '#ffffff'
  const panelBg = isDark ? '#0a0c0e' : '#f8fafc'
  const borderCol = isDark ? '#21262d' : '#e2e8f0'
  const textNormal = isDark ? '#c9d1d9' : '#334155'
  const textMuted = isDark ? '#484f58' : '#64748b'
  const textHeader = isDark ? '#e6edf3' : '#0f172a'

  const panelTheme = { isDark, hBg, panelBg, borderCol, gridCol: isDark ? '#161b22' : '#f1f5f9', textNormal, textMuted, textHeader }
  const toggles = { showBaseline, showPlanned, showActual }
  const safePageIndex = Math.min(pageIndex, Math.max(0, timePages.length - 1))

  function toggleL1(sowId: string) {
    setCollapsedL1((prev) => {
      const n = new Set(prev)
      if (n.has(sowId)) n.delete(sowId)
      else n.add(sowId)
      return n
    })
  }

  function handlePrint() {
    document.documentElement.classList.add('gantt-print-active')
    window.print()
    window.setTimeout(() => document.documentElement.classList.remove('gantt-print-active'), 500)
  }

  return (
    <div className="gantt-wrap" style={{ fontFamily: 'monospace', background: panelBg, minHeight: '100vh', color: textNormal }}>
      <style>{`
        @media (max-width: 640px) {
          .gantt-header { padding: 12px 12px !important; flex-wrap: wrap !important; gap: 10px !important; }
          .gantt-header-left { flex-wrap: wrap !important; gap: 10px !important; }
          .gantt-header-right { width: 100% !important; justify-content: flex-start !important; flex-wrap: wrap !important; gap: 8px !important; }
          .gantt-kpis { grid-template-columns: 1fr !important; }
          .gantt-scroll { max-height: none !important; }
        }
        .gantt-print-only { display: none; }
        @media print {
          html.gantt-print-active,
          html.gantt-print-active body {
            height: auto !important;
            overflow: visible !important;
            background: white !important;
          }
          html.gantt-print-active body * {
            visibility: hidden;
          }
          html.gantt-print-active .gantt-print-only,
          html.gantt-print-active .gantt-print-only * {
            visibility: visible;
          }
          html.gantt-print-active .gantt-print-only {
            display: block !important;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          html.gantt-print-active .gantt-no-print {
            display: none !important;
          }
          html.gantt-print-active .gantt-print-page {
            page: gantt-page;
            break-after: page;
            page-break-after: always;
            page-break-inside: avoid;
            overflow: hidden;
          }
          html.gantt-print-active .gantt-print-page:last-child {
            break-after: auto;
            page-break-after: auto;
          }
          html.gantt-print-active .gantt-chart-panel {
            width: 100% !important;
          }
          html.gantt-print-active .gantt-table-wrap {
            overflow: hidden !important;
          }
          @page gantt-page {
            margin: 10mm;
            size: A3 landscape;
          }
        }
      `}</style>

      <div className="gantt-header gantt-no-print" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 28px', borderBottom: `1px solid ${borderCol}`, background: hBg }}>
        <div className="gantt-header-left" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <button onClick={() => router.back()} style={{ background: 'transparent', border: `1px solid ${isDark ? '#30363d' : '#cbd5e1'}`, borderRadius: 6, color: isDark ? '#8b949e' : '#475569', cursor: 'pointer', fontWeight: 700, fontSize: 13, padding: '5px 12px', fontFamily: 'monospace' }}>← Back</button>
          <div>
            <div style={{ fontSize: 11, color: textMuted }}>{project.project_code} · Gantt Chart</div>
            <div style={{ fontSize: 16, fontWeight: 800, color: textHeader, fontFamily: 'sans-serif' }}>{project.project_name}</div>
          </div>
        </div>
        <div className="gantt-header-right" style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
          <ThemeSelector compact />
          <div style={{ display: 'flex', gap: 2, background: isDark ? '#161b22' : '#f1f5f9', borderRadius: 6, padding: 2, border: `1px solid ${isDark ? '#30363d' : '#cbd5e1'}`, flexWrap: 'wrap' }}>
            {GANTT_VIEW_MODES.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => setViewMode(value)}
                style={{
                  padding: '4px 8px',
                  borderRadius: 4,
                  border: 'none',
                  background: viewMode === value ? '#f59e0b' : 'transparent',
                  color: viewMode === value ? (isDark ? '#0a0c0e' : '#ffffff') : textMuted,
                  cursor: 'pointer',
                  fontSize: 10,
                  fontWeight: 700,
                  fontFamily: 'monospace',
                }}
              >
                {label}
              </button>
            ))}
          </div>
          {[
            { label: 'Baseline', val: showBaseline, set: setShowBaseline, color: isDark ? '#484f58' : '#4c525a' },
            { label: 'Planned', val: showPlanned, set: setShowPlanned, color: isDark ? '#60a5fa' : '#2563eb' },
            { label: 'Actual', val: showActual, set: setShowActual, color: isDark ? '#4ade80' : '#16a34a' },
            { label: 'CP Only', val: showCriticalOnly, set: setShowCriticalOnly, color: isDark ? '#f87171' : '#dc2626' },
          ].map((t) => (
            <button
              key={t.label}
              onClick={() => t.set(!t.val)}
              style={{
                padding: '4px 10px',
                borderRadius: 6,
                border: `1px solid ${t.val ? t.color : isDark ? '#30363d' : '#cbd5e1'}`,
                background: t.val ? t.color + '22' : 'transparent',
                color: t.val ? t.color : textMuted,
                cursor: 'pointer',
                fontSize: 11,
                fontWeight: 600,
                fontFamily: 'monospace',
              }}
            >
              {t.label}
            </button>
          ))}
          <button
            onClick={handlePrint}
            style={{ background: '#f59e0b', border: 'none', borderRadius: 6, color: '#0a0c0e', cursor: 'pointer', fontWeight: 700, fontSize: 11, padding: '6px 14px', fontFamily: 'monospace' }}
          >
            Print / PDF
          </button>
        </div>
      </div>

      <div className="gantt-kpis gantt-no-print" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 1, background: borderCol, borderBottom: `1px solid ${borderCol}` }}>
        {[
          { label: 'TOTAL TASKS', val: totalTasks, color: textNormal },
          { label: 'SCHEDULED', val: withSchedule, color: isDark ? '#60a5fa' : '#2563eb' },
          { label: 'COMPLETE', val: complete, color: isDark ? '#4ade80' : '#16a34a' },
          { label: 'DELAYED', val: delayed, color: delayed > 0 ? (isDark ? '#f87171' : '#dc2626') : textMuted },
          { label: 'CRITICAL PATH', val: critical, color: isDark ? '#f87171' : '#dc2626' },
        ].map((k) => (
          <div key={k.label} style={{ background: hBg, padding: '10px 20px', textAlign: 'center' }}>
            <div style={{ fontSize: 9, color: textMuted, letterSpacing: '0.08em', marginBottom: 4 }}>{k.label}</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: k.color }}>{k.val}</div>
          </div>
        ))}
      </div>

      {hasSchedule.length === 0 && (
        <div style={{ textAlign: 'center', padding: '80px 0', color: textMuted }}>
          <p style={{ fontSize: 14, marginBottom: 8 }}>No schedule data found.</p>
          <p style={{ fontSize: 12, marginBottom: 20 }}>Import the CPOS Master Template with baseline or planned dates to populate the Gantt.</p>
          <button onClick={() => router.push(`/dashboard/${projectid}/sow`)} style={{ background: '#f59e0b', border: 'none', borderRadius: 6, color: '#0a0c0e', cursor: 'pointer', fontWeight: 700, fontSize: 12, padding: '10px 20px', fontFamily: 'monospace' }}>
            Go to SOW Module →
          </button>
        </div>
      )}

      {hasSchedule.length > 0 && (
        <>
          <div className="gantt-no-print gantt-scroll" style={{ overflow: 'auto', maxHeight: 'calc(100vh - 180px)', borderBottom: `1px solid ${borderCol}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 28px', background: hBg, borderBottom: `1px solid ${borderCol}` }}>
              <div style={{ fontSize: 11, color: textMuted }}>
                Timeline pages in <strong style={{ color: '#f59e0b' }}>{GANTT_VIEW_MODES.find((m) => m.value === viewMode)?.label}</strong> mode
              </div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <button
                  disabled={safePageIndex <= 0}
                  onClick={() => setPageIndex((p) => Math.max(0, p - 1))}
                  style={{ padding: '4px 10px', borderRadius: 6, border: `1px solid ${borderCol}`, background: 'transparent', color: textNormal, cursor: safePageIndex <= 0 ? 'not-allowed' : 'pointer', opacity: safePageIndex <= 0 ? 0.4 : 1, fontFamily: 'monospace', fontSize: 11 }}
                >
                  ← Prev
                </button>
                <span style={{ fontSize: 11, color: textMuted, minWidth: 120, textAlign: 'center' }}>
                  Page {safePageIndex + 1} / {timePages.length}
                </span>
                <button
                  disabled={safePageIndex >= timePages.length - 1}
                  onClick={() => setPageIndex((p) => Math.min(timePages.length - 1, p + 1))}
                  style={{ padding: '4px 10px', borderRadius: 6, border: `1px solid ${borderCol}`, background: 'transparent', color: textNormal, cursor: safePageIndex >= timePages.length - 1 ? 'not-allowed' : 'pointer', opacity: safePageIndex >= timePages.length - 1 ? 0.4 : 1, fontFamily: 'monospace', fontSize: 11 }}
                >
                  Next →
                </button>
              </div>
            </div>
            <GanttPaginatedLayout
              variant="screen"
              windows={timePages}
              pageIndex={safePageIndex}
              viewMode={viewMode}
              rows={rows}
              theme={panelTheme}
              toggles={toggles}
              today={today}
              collapsedL1={collapsedL1}
              onToggleL1={toggleL1}
            />
          </div>

          <div className="gantt-print-only" aria-hidden="true">
            <div style={{ padding: '12px 16px 6px', fontFamily: 'sans-serif' }}>
              <div style={{ fontSize: 16, fontWeight: 800, color: '#0f172a' }}>{project.project_name}</div>
              <div style={{ fontSize: 10, color: '#64748b' }}>
                {project.project_code} · Gantt · {GANTT_VIEW_MODES.find((m) => m.value === viewMode)?.label} · {rangeStart} → {rangeEnd}
              </div>
            </div>
            <GanttPaginatedLayout
              variant="print"
              windows={timePages}
              viewMode={viewMode}
              rows={rows}
              theme={{ ...panelTheme, isDark: false, hBg: '#ffffff', panelBg: '#ffffff', borderCol: '#e2e8f0', gridCol: '#f1f5f9', textNormal: '#334155', textMuted: '#64748b', textHeader: '#0f172a' }}
              toggles={toggles}
              today={today}
            />
          </div>
        </>
      )}

      {hasSchedule.length > 0 && (
        <div className="gantt-no-print" style={{ display: 'flex', gap: 20, padding: '10px 28px', borderTop: `1px solid ${borderCol}`, background: hBg, flexWrap: 'wrap' }}>
          {[
            { color: '#484f58', label: 'Baseline (contract)', height: 4 },
            { color: '#60a5fa', label: 'Planned progress', height: 14 },
            { color: '#4ade80', label: 'Actual', height: 4 },
            { color: '#f87171', label: 'Critical path', height: 14 },
            { color: '#f59e0b', label: 'Today', height: 14 },
          ].map((l) => (
            <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 24, height: l.height, background: l.color, borderRadius: 2, opacity: 0.8 }} />
              <span style={{ fontSize: 10, color: textMuted }}>{l.label}</span>
            </div>
          ))}
          <div style={{ marginLeft: 'auto', fontSize: 10, color: textMuted }}>
            {rangeStart} → {rangeEnd} · {totalDays} days · {timePages.length} pages
          </div>
        </div>
      )}
    </div>
  )
}
