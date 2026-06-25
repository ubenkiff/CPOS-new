'use client'
import { useEffect, useState, useRef } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { supabase } from '../../../supabase'
import { canAccessProject, PUBLIC_VIEWONLY_PROJECT_ID } from '../../../../lib/access'
import { fetchAllRows } from '../../../../lib/supabasePaginate'
import { useTheme } from '../../../../lib/theme'
import ThemeSelector from '../../../../components/ThemeSelector'

type SowItem = {
  sow_id: string
  sow_number: string
  hierarchy_level: number
  parent_id: string | null
  scope_l1?: string
  item_l2?: string
  sub_item_l3?: string
  particulars?: string
  baseline_start?: string
  baseline_days?: number
  baseline_end?: string
  planned_start?: string
  planned_days?: number
  planned_end?: string
  actual_start?: string
  actual_days?: number
  actual_end?: string
  percent_complete?: number
  status?: string
  risk_level?: string
  assigned_to?: string
  is_critical_path?: boolean
  estimated_cost?: number
}

type Project = {
  projectid: string
  project_name: string
  project_code: string
  currency: string
  start_date: string
  end_date: string
  status: string
}

const STATUS_COLORS: Record<string, string> = {
  'Not Started': '#484f58',
  'In Progress': '#f59e0b',
  'Complete':    '#4ade80',
  'On Hold':     '#818cf8',
  'Delayed':     '#f87171',
}

function addDays(dateStr: string, days: number): string {
  const d = new Date(dateStr)
  d.setDate(d.getDate() + days)
  return d.toISOString().split('T')[0]
}

function daysBetween(a: string, b: string): number {
  return Math.round((new Date(b).getTime() - new Date(a).getTime()) / 86400000)
}

function resolveEnd(item: SowItem, field: 'baseline' | 'planned' | 'actual'): string | undefined {
  if (field === 'baseline') {
    if (item.baseline_end) return item.baseline_end
    if (item.baseline_start && item.baseline_days) return addDays(item.baseline_start, item.baseline_days)
  }
  if (field === 'planned') {
    if (item.planned_end) return item.planned_end
    if (item.planned_start && item.planned_days) return addDays(item.planned_start, item.planned_days)
  }
  if (field === 'actual') return item.actual_end
  return undefined
}

function getItemLabel(item: SowItem): string {
  if (item.hierarchy_level === 1) return item.scope_l1 || item.sow_number
  if (item.hierarchy_level === 2) return item.item_l2 || item.sow_number
  return item.sub_item_l3 || item.particulars || item.sow_number
}

function getChildrenByPrefix(items: SowItem[], parent: SowItem, childLevel: number): SowItem[] {
  const prefix = `${parent.sow_number}.`
  return items.filter((item) => {
    if (item.hierarchy_level !== childLevel) return false
    if (!item.sow_number.startsWith(prefix)) return false
    return item.sow_number.split('.').length === childLevel
  })
}

export default function GanttModule() {
  const params = useParams()
  const router = useRouter()
  const { theme, setTheme, isDark } = useTheme()
  const projectid = params?.projectid as string
  const ganttRef = useRef<HTMLDivElement>(null)

  const isPublicViewOnly = projectid === PUBLIC_VIEWONLY_PROJECT_ID

  const [project, setProject] = useState<Project | null>(null)
  const [allItems, setAllItems] = useState<SowItem[]>([])
  const [loading, setLoading] = useState(true)
  const [zoom, setZoom] = useState<'month' | 'week' | 'quarter'>('month')
  const [showBaseline, setShowBaseline] = useState(true)
  const [showPlanned, setShowPlanned] = useState(true)
  const [showActual, setShowActual] = useState(true)
  const [showCriticalOnly, setShowCriticalOnly] = useState(false)
  const [collapsedL1, setCollapsedL1] = useState<Set<string>>(new Set())
  const [today] = useState(new Date().toISOString().split('T')[0])

  useEffect(() => {
    if (!projectid) return
    if (isPublicViewOnly) {
      fetchProject(); fetchItems()
      return
    }
    checkSessionAndLoad()
  }, [projectid])

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

    fetchProject(); fetchItems()
  }

  async function fetchProject() {
    const { data } = await supabase.from('projects').select('projectid,project_name,project_code,currency,start_date,end_date,status,user_id').eq('projectid', projectid).single()
    if (data) setProject(data)
  }

  async function fetchItems() {
    setLoading(true)
    const { data } = await fetchAllRows<SowItem>((from, to) =>
      supabase.from('sow_items').select('*').eq('projectid', projectid).order('sow_number').range(from, to)
    )
    setAllItems(data || [])
    setLoading(false)
  }

  if (loading || !project) return (
    <div style={{ background: '#0a0c0e', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace', color: '#484f58' }}>
      {loading ? 'Loading Gantt...' : 'Project not found'}
    </div>
  )

  // ── DATE RANGE ───────────────────────────────────────────────
  const l3Items = allItems.filter(r => r.hierarchy_level === 3)
  const l2Items = allItems.filter(r => r.hierarchy_level === 2)
  const l1Items = allItems.filter(r => r.hierarchy_level === 1)

  const hasSchedule = l3Items.filter(r => r.baseline_start || r.planned_start)

  // Compute project date range from all items
  const allStarts = hasSchedule.map(r => r.baseline_start || r.planned_start || project.start_date).filter(Boolean) as string[]
  const allEnds   = hasSchedule.map(r => resolveEnd(r, 'baseline') || resolveEnd(r, 'planned') || project.end_date).filter(Boolean) as string[]

  const rangeStart = allStarts.length > 0 ? allStarts.sort()[0] : project.start_date
  const rangeEnd   = allEnds.length > 0   ? allEnds.sort().reverse()[0] : project.end_date
  const totalDays  = Math.max(1, daysBetween(rangeStart, rangeEnd))

  // ── COLUMN WIDTH per zoom ────────────────────────────────────
  const COL_W = zoom === 'week' ? 32 : zoom === 'month' ? 24 : 14  // px per day

  function pct(dateStr: string): number {
    return Math.max(0, Math.min(100, (daysBetween(rangeStart, dateStr) / totalDays) * 100))
  }

  function barStyle(startDate: string | undefined, endDate: string | undefined, color: string, height: number, top: number, opacity = 1) {
    if (!startDate || !endDate) return null
    const left = pct(startDate)
    const width = Math.max(0.3, pct(endDate) - left)
    return { position: 'absolute' as const, left: `${left}%`, width: `${width}%`, height, top, background: color, opacity, borderRadius: 2 }
  }

  // ── GENERATE TIME HEADER ─────────────────────────────────────
  function generateHeaders() {
    const months: { label: string; days: number; start: string }[] = []
    const cur = new Date(rangeStart)
    const end = new Date(rangeEnd)
    while (cur <= end) {
      const monthStart = cur.toISOString().split('T')[0]
      const daysInMonth = new Date(cur.getFullYear(), cur.getMonth() + 1, 0).getDate()
      const remaining = Math.ceil((end.getTime() - cur.getTime()) / 86400000) + 1
      const days = Math.min(daysInMonth - cur.getDate() + 1, remaining)
      months.push({
        label: cur.toLocaleDateString('en-ZA', { month: 'short', year: '2-digit' }),
        days,
        start: monthStart,
      })
      cur.setMonth(cur.getMonth() + 1)
      cur.setDate(1)
    }
    return months
  }

  const headers = generateHeaders()
  const ganttWidth = totalDays * COL_W

  // ── VISIBLE ROWS ─────────────────────────────────────────────
  type GanttRow = { item: SowItem; level: number }
  const rows: GanttRow[] = []

  l1Items.forEach(l1 => {
    rows.push({ item: l1, level: 1 })
    if (!collapsedL1.has(l1.sow_id)) {
      const subs = getChildrenByPrefix(l2Items, l1, 2)
      subs.forEach(l2 => {
        rows.push({ item: l2, level: 2 })
        const tasks = getChildrenByPrefix(l3Items, l2, 3).filter((l3) => l3.baseline_start || l3.planned_start)
        const filtered = showCriticalOnly ? tasks.filter(t => t.is_critical_path) : tasks
        filtered.forEach(l3 => rows.push({ item: l3, level: 3 }))
      })
    }
  })

  // ── SUMMARY STATS ────────────────────────────────────────────
  const totalTasks = l3Items.length
  const withSchedule = l3Items.filter(r => r.baseline_start || r.planned_start).length
  const complete = l3Items.filter(r => r.status === 'Complete').length
  const delayed = l3Items.filter(r => r.status === 'Delayed' || (r.baseline_end && today > r.baseline_end && r.status !== 'Complete')).length
  const critical = l3Items.filter(r => r.is_critical_path).length

  const ROW_H = 36
  const LABEL_W = 280

  const hBg = isDark ? '#0d1117' : '#ffffff'
  const panelBg = isDark ? '#0a0c0e' : '#f8fafc'
  const borderCol = isDark ? '#21262d' : '#e2e8f0'
  const gridCol = isDark ? '#161b22' : '#f1f5f9'
  const textNormal = isDark ? '#c9d1d9' : '#334155'
  const textMuted = isDark ? '#484f58' : '#64748b'
  const textHeader = isDark ? '#e6edf3' : '#0f172a'

  return (
    <div className="gantt-wrap" style={{ fontFamily: 'monospace', background: panelBg, minHeight: '100vh', color: textNormal }}>

      <style>{`
        @media (max-width: 640px) {
          .gantt-header { padding: 12px 12px !important; flex-wrap: wrap !important; gap: 10px !important; }
          .gantt-header-left { flex-wrap: wrap !important; gap: 10px !important; }
          .gantt-header-right { width: 100% !important; justify-content: flex-start !important; flex-wrap: wrap !important; gap: 8px !important; }
          .gantt-kpis { grid-template-columns: 1fr !important; }
          .gantt-scroll { max-height: none !important; }
          .gantt-left { width: 220px !important; }
        }
      `}</style>

      {/* HEADER */}
      <div className="gantt-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 28px', borderBottom: '1px solid ' + borderCol, background: hBg }}>
        <div className="gantt-header-left" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <button onClick={() => router.back()} style={{ background: 'transparent', border: '1px solid ' + (isDark ? '#30363d' : '#cbd5e1'), borderRadius: 6, color: isDark ? '#8b949e' : '#475569', cursor: 'pointer', fontWeight: 700, fontSize: 13, padding: '5px 12px', fontFamily: 'monospace' }}>← Back</button>
          <div>
            <div style={{ fontSize: 11, color: textMuted }}>{project.project_code} · Gantt Chart</div>
            <div style={{ fontSize: 16, fontWeight: 800, color: textHeader, fontFamily: 'sans-serif' }}>{project.project_name}</div>
          </div>
        </div>
        <div className="gantt-header-right" style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <ThemeSelector compact />
          {/* Zoom */}
          <div style={{ display: 'flex', gap: 2, background: isDark ? '#161b22' : '#f1f5f9', borderRadius: 6, padding: 2, border: '1px solid ' + (isDark ? '#30363d' : '#cbd5e1') }}>
            {(['quarter','month','week'] as const).map(z => (
              <button key={z} onClick={() => setZoom(z)} style={{ padding: '4px 10px', borderRadius: 4, border: 'none', background: zoom === z ? '#f59e0b' : 'transparent', color: zoom === z ? (isDark ? '#0a0c0e' : '#ffffff') : textMuted, cursor: 'pointer', fontSize: 11, fontWeight: 700, fontFamily: 'monospace' }}>
                {z.charAt(0).toUpperCase() + z.slice(1)}
              </button>
            ))}
          </div>
          {/* Toggles */}
          {[
            { label: 'Baseline', val: showBaseline, set: setShowBaseline, color: isDark ? '#484f58' : '#4c525a' },
            { label: 'Planned', val: showPlanned, set: setShowPlanned, color: isDark ? '#60a5fa' : '#2563eb' },
            { label: 'Actual', val: showActual, set: setShowActual, color: isDark ? '#4ade80' : '#16a34a' },
            { label: 'CP Only', val: showCriticalOnly, set: setShowCriticalOnly, color: isDark ? '#f87171' : '#dc2626' },
          ].map(t => (
            <button key={t.label} onClick={() => t.set(!t.val)} style={{ padding: '4px 10px', borderRadius: 6, border: `1px solid ${t.val ? t.color : (isDark ? '#30363d' : '#cbd5e1')}`, background: t.val ? t.color + '22' : 'transparent', color: t.val ? t.color : textMuted, cursor: 'pointer', fontSize: 11, fontWeight: 600, fontFamily: 'monospace' }}>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* KPI STRIP */}
      <div className="gantt-kpis" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 1, background: borderCol, borderBottom: '1px solid ' + borderCol }}>
        {[
          { label: 'TOTAL TASKS', val: totalTasks, color: textNormal },
          { label: 'SCHEDULED', val: withSchedule, color: isDark ? '#60a5fa' : '#2563eb' },
          { label: 'COMPLETE', val: complete, color: isDark ? '#4ade80' : '#16a34a' },
          { label: 'DELAYED', val: delayed, color: delayed > 0 ? (isDark ? '#f87171' : '#dc2626') : textMuted },
          { label: 'CRITICAL PATH', val: critical, color: isDark ? '#f87171' : '#dc2626' },
        ].map(k => (
          <div key={k.label} style={{ background: hBg, padding: '10px 20px', textAlign: 'center' as const }}>
            <div style={{ fontSize: 9, color: textMuted, letterSpacing: '0.08em', marginBottom: 4 }}>{k.label}</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: k.color }}>{k.val}</div>
          </div>
        ))}
      </div>

      {/* NO SCHEDULE STATE */}
      {hasSchedule.length === 0 && (
        <div style={{ textAlign: 'center', padding: '80px 0', color: textMuted }}>
          <p style={{ fontSize: 14, marginBottom: 8 }}>No schedule data found.</p>
          <p style={{ fontSize: 12, marginBottom: 20 }}>Import the CPOS Master Template with baseline or planned dates to populate the Gantt.</p>
          <button onClick={() => router.push(`/dashboard/${projectid}/sow`)} style={{ background: '#f59e0b', border: 'none', borderRadius: 6, color: '#0a0c0e', cursor: 'pointer', fontWeight: 700, fontSize: 12, padding: '10px 20px', fontFamily: 'monospace' }}>
            Go to SOW Module →
          </button>
        </div>
      )}

      {/* GANTT CHART */}
      {hasSchedule.length > 0 && (
        <div className="gantt-scroll" style={{ overflow: 'auto', maxHeight: 'calc(100vh - 180px)' }}>
          <div style={{ display: 'flex', minWidth: LABEL_W + ganttWidth + 40 }}>

            {/* LEFT PANEL — labels (sticky) */}
            <div className="gantt-left" style={{ width: LABEL_W, flexShrink: 0, borderRight: '1px solid ' + borderCol, position: 'sticky', left: 0, background: panelBg, zIndex: 10 }}>
              {/* Header spacer */}
              <div style={{ height: 44, background: hBg, borderBottom: '1px solid ' + borderCol, display: 'flex', alignItems: 'center', padding: '0 12px' }}>
                <span style={{ fontSize: 9, color: textMuted, letterSpacing: '0.08em' }}>TASK / ACTIVITY</span>
              </div>
              {rows.map(({ item, level }, i) => {
                const isL1 = level === 1
                const isL2 = level === 2
                const bg = isL1 ? (isDark ? '#161b22' : '#f1f5f9') : isL2 ? (isDark ? '#0d1117' : '#f8fafc') : 'transparent'
                const textColor = isL1 ? textHeader : isL2 ? textNormal : (isDark ? '#8b949e' : '#475569')
                const indent = isL1 ? 8 : isL2 ? 20 : 32

                return (
                  <div
                    key={item.sow_id + i}
                    style={{ height: ROW_H, display: 'flex', alignItems: 'center', padding: `0 8px 0 ${indent}px`, background: bg, borderBottom: '1px solid ' + gridCol, cursor: isL1 ? 'pointer' : 'default', gap: 6 }}
                    onClick={() => isL1 && setCollapsedL1(prev => { const n = new Set(prev); n.has(item.sow_id) ? n.delete(item.sow_id) : n.add(item.sow_id); return n })}
                  >
                    {isL1 && <span style={{ fontSize: 9, color: textMuted, width: 10 }}>{collapsedL1.has(item.sow_id) ? '▶' : '▼'}</span>}
                    <div style={{ overflow: 'hidden', flex: 1 }}>
                      <div style={{ fontSize: isL1 ? 11 : 10, fontWeight: isL1 ? 700 : isL2 ? 600 : 400, color: textColor, textTransform: isL1 ? 'uppercase' as const : 'none' as const, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {item.is_critical_path && <span style={{ color: '#f87171', marginRight: 4 }}>●</span>}
                        {getItemLabel(item)}
                      </div>
                      {level === 3 && (
                        <div style={{ fontSize: 9, color: textMuted, display: 'flex', gap: 6, marginTop: 1 }}>
                          <span style={{ fontFamily: 'monospace', color: '#f59e0b' }}>{item.sow_number}</span>
                          {item.status && <span style={{ color: STATUS_COLORS[item.status] }}>{item.status}</span>}
                          {item.assigned_to && <span>{item.assigned_to}</span>}
                        </div>
                      )}
                    </div>
                    {level === 3 && typeof item.percent_complete === 'number' && (
                      <div style={{ width: 28, textAlign: 'right' as const, fontSize: 9, color: textMuted, flexShrink: 0 }}>{item.percent_complete}%</div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* RIGHT PANEL — Gantt bars */}
            <div style={{ flex: 1, overflowX: 'auto' }} ref={ganttRef}>
              <div style={{ width: ganttWidth, minWidth: ganttWidth }}>

                {/* Month headers */}
                <div style={{ height: 22, display: 'flex', background: hBg, borderBottom: '1px solid ' + borderCol, position: 'sticky', top: 0, zIndex: 5 }}>
                  {headers.map((h, i) => (
                    <div key={i} style={{ width: h.days * COL_W, flexShrink: 0, borderRight: '1px solid ' + borderCol, display: 'flex', alignItems: 'center', padding: '0 6px', overflow: 'hidden' }}>
                      <span style={{ fontSize: 10, color: isDark ? '#8b949e' : '#475569', fontWeight: 600, whiteSpace: 'nowrap' as const }}>{h.label}</span>
                    </div>
                  ))}
                </div>

                {/* Day header row */}
                <div style={{ height: 22, display: 'flex', background: hBg, borderBottom: '1px solid ' + borderCol, position: 'sticky', top: 22, zIndex: 5 }}>
                  {zoom !== 'quarter' && Array.from({ length: totalDays }).map((_, d) => {
                    const date = addDays(rangeStart, d)
                    const dayNum = new Date(date).getDate()
                    const isMonday = new Date(date).getDay() === 1
                    const isSunday = new Date(date).getDay() === 0
                    if (zoom === 'month' && dayNum !== 1 && dayNum !== 8 && dayNum !== 15 && dayNum !== 22) return <div key={d} style={{ width: COL_W, flexShrink: 0 }} />
                    return (
                      <div key={d} style={{ width: COL_W, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: dayNum === 1 ? '1px solid ' + (isDark ? '#30363d' : '#cbd5e1') : 'none' }}>
                        <span style={{ fontSize: 8, color: isSunday ? '#f87171' : textMuted }}>{dayNum}</span>
                      </div>
                    )
                  })}
                </div>

                {/* Today line + rows */}
                <div style={{ position: 'relative' }}>
                  {/* Today vertical line */}
                  {today >= rangeStart && today <= rangeEnd && (
                    <div style={{ position: 'absolute', left: `${pct(today)}%`, top: 0, bottom: 0, width: 1, background: '#f59e0b', opacity: 0.6, zIndex: 4, pointerEvents: 'none' }} />
                  )}

                  {/* Grid columns */}
                  {headers.map((h, i) => (
                    <div key={i} style={{ position: 'absolute', left: `${pct(h.start)}%`, top: 0, bottom: 0, width: h.days * COL_W, borderRight: '1px solid ' + gridCol, pointerEvents: 'none' }} />
                  ))}

                  {/* Gantt rows */}
                  {rows.map(({ item, level }, i) => {
                    const isL1 = level === 1
                    const isL2 = level === 2
                    const bg = isL1 ? (isDark ? '#161b22' : '#f1f5f9') : isL2 ? (isDark ? '#0d1117' : '#f8fafc') : 'transparent'
                    const baseStart = item.baseline_start
                    const baseEnd   = resolveEnd(item, 'baseline')
                    const planStart = item.planned_start
                    const planEnd   = resolveEnd(item, 'planned')
                    const actStart  = item.actual_start
                    const actEnd    = resolveEnd(item, 'actual') || (item.actual_start && item.percent_complete === 100 ? item.actual_start : undefined)
                    const pctDone   = item.percent_complete || 0
                    const isCritical = item.is_critical_path
                    const barColor  = isCritical ? '#f87171' : level === 1 ? '#534AB7' : level === 2 ? '#378ADD' : (isDark ? '#60a5fa' : '#2563eb')

                    return (
                      <div key={item.sow_id + i} style={{ height: ROW_H, position: 'relative', borderBottom: '1px solid ' + gridCol, background: bg }}>

                        {/* BASELINE BAR — gray, thin, behind */}
                        {showBaseline && baseStart && baseEnd && level === 3 && (
                          <div style={{ ...barStyle(baseStart, baseEnd, '#484f58', 4, ROW_H / 2 - 2), opacity: 0.5 }} />
                        )}

                        {/* L1/L2 BASELINE rollup bar */}
                        {showBaseline && baseStart && baseEnd && level !== 3 && (
                          <div style={{ ...barStyle(baseStart, baseEnd, '#484f58', 8, ROW_H / 2 - 4), opacity: 0.4, borderRadius: 0 }} />
                        )}

                        {/* PLANNED BAR — colored, main bar */}
                        {showPlanned && planStart && planEnd && level === 3 && (
                          <div style={{ position: 'absolute', left: `${pct(planStart)}%`, width: `${Math.max(0.3, pct(planEnd) - pct(planStart))}%`, height: 14, top: ROW_H / 2 - 7, background: barColor + '33', border: `1px solid ${barColor}66`, borderRadius: 2 }}>
                            <div style={{ height: '100%', width: `${pctDone}%`, background: barColor, borderRadius: '2px 0 0 2px', opacity: 0.9 }} />
                            {pctDone > 25 && (
                              <div style={{ position: 'absolute', left: 4, top: 1, fontSize: 8, color: '#0a0c0e', fontWeight: 700 }}>{pctDone}%</div>
                            )}
                          </div>
                        )}

                        {/* L1/L2 summary bar (planned) */}
                        {showPlanned && planStart && planEnd && level !== 3 && (
                          <div style={{ position: 'absolute', left: `${pct(planStart)}%`, width: `${Math.max(0.3, pct(planEnd) - pct(planStart))}%`, height: 10, top: ROW_H / 2 - 5, background: barColor + '44', borderRadius: 2 }} />
                        )}

                        {/* ACTUAL marker / bar */}
                        {showActual && actStart && level === 3 && (
                          actEnd ? (
                            <div style={{ position: 'absolute', left: `${pct(actStart)}%`, width: `${Math.max(0.3, pct(actEnd) - pct(actStart))}%`, height: 4, top: ROW_H - 8, background: '#4ade80', borderRadius: 2, opacity: 0.8 }} />
                          ) : (
                            <div style={{ position: 'absolute', left: `${pct(actStart)}%`, width: 2, height: 14, top: ROW_H / 2 - 7, background: '#4ade80', borderRadius: 1 }} />
                          )
                        )}

                        {/* Milestone diamond for zero-day tasks */}
                        {level === 3 && baseStart && baseEnd && daysBetween(baseStart, baseEnd) === 0 && (
                          <div style={{ position: 'absolute', left: `calc(${pct(baseStart)}% - 6px)`, top: ROW_H / 2 - 6, width: 12, height: 12, background: isCritical ? '#f87171' : '#f59e0b', transform: 'rotate(45deg)', borderRadius: 2 }} />
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LEGEND */}
      {hasSchedule.length > 0 && (
        <div style={{ display: 'flex', gap: 20, padding: '10px 28px', borderTop: '1px solid #21262d', background: '#0d1117', flexWrap: 'wrap' }}>
          {[
            { color: '#484f58', label: 'Baseline (contract)', height: 4 },
            { color: '#60a5fa', label: 'Planned progress', height: 14 },
            { color: '#4ade80', label: 'Actual', height: 4 },
            { color: '#f87171', label: 'Critical path', height: 14 },
            { color: '#f59e0b', label: 'Today', height: 14 },
          ].map(l => (
            <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 24, height: l.height, background: l.color, borderRadius: 2, opacity: 0.8 }} />
              <span style={{ fontSize: 10, color: '#6e7681' }}>{l.label}</span>
            </div>
          ))}
          <div style={{ marginLeft: 'auto', fontSize: 10, color: '#484f58' }}>
            {rangeStart} → {rangeEnd} · {totalDays} days
          </div>
        </div>
      )}
    </div>
  )
}
