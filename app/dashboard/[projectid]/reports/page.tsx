'use client'
import { useEffect, useMemo, useState, useRef } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { supabase } from '../../../supabase'
import { canAccessProject, PUBLIC_VIEWONLY_PROJECT_ID } from '../../../../lib/access'
import { useTheme } from '../../../../lib/theme'
import ThemeSelector from '../../../../components/ThemeSelector'
import GanttPaginatedLayout from '../../../../components/gantt/GanttPaginatedLayout'
import { computeScheduleRange } from '../../../../lib/gantt/dates'
import { buildGanttRows } from '../../../../lib/gantt/rows'
import { splitTimelineIntoPages } from '../../../../lib/gantt/timePages'
import { GANTT_VIEW_MODES, type GanttViewMode } from '../../../../lib/gantt/types'

type Project = {
  projectid: string; project_name: string; project_code: string
  client_name: string; client_contact: string; location: string
  description: string; status: string; start_date: string
  end_date: string; budget: number; currency: string; created_at: string
}
type SowItem = {
  sow_id: string; sow_number: string; hierarchy_level: number
  scope_l1?: string; item_l2?: string; sub_item_l3?: string; particulars?: string
  status?: string; risk_level?: string; assigned_to?: string
  percent_complete?: number; is_critical_path?: boolean
  baseline_start?: string; baseline_end?: string; baseline_days?: number
  planned_start?: string; planned_end?: string; planned_days?: number
  actual_start?: string; actual_end?: string
  estimated_cost?: number; actual_cost?: number; unit?: string
  quantity?: number; waste_pct?: number; unit_rate?: number; boq_amount?: number
  net_qty?: number; cost_variance?: number; schedule_variance?: number
  plant?: string; site_equipment?: string; manpower?: string
  parent_id?: string | null
}
type CostEntry = {
  cost_id: string; cost_date: string; description: string
  category: string; amount: number; supplier?: string; is_approved: boolean
}

type ReportType = 'pm' | 'client' | 'engineer' | 'qs' | 'site' | 'weekly' | 'monthly' | 'cost' | 'schedule' | 'risk' | 'resource' | 'gantt'

const REPORT_META: Record<ReportType, { label: string; audience: string; color: string; desc: string }> = {
  pm:       { label: 'PM Report',       audience: 'Project Manager',  color: '#7F77DD', desc: 'Full project overview: schedule, budget, risks, progress' },
  client:   { label: 'Client Report',   audience: 'Client / Owner',   color: '#60a5fa', desc: 'High-level: completion %, spend, key milestones, delays' },
  engineer: { label: 'Engineer Report', audience: 'Site Engineer',    color: '#4ade80', desc: 'Tasks, critical path, schedule variance, upcoming activities' },
  qs:       { label: 'QS Report',       audience: 'Quantity Surveyor', color: '#f59e0b', desc: 'BOQ, cost breakdown, budget vs actual, earned value' },
  site:     { label: 'Site Report',     audience: 'Site Manager',     color: '#f87171', desc: 'Daily tasks, resources, in-progress items, status updates' },
  weekly:   { label: 'Weekly Progress', audience: 'All Stakeholders', color: '#34d399', desc: 'Weekly summary: progress by section, schedule status, cost this week' },
  monthly:  { label: 'Monthly Report',  audience: 'Senior Management', color: '#a78bfa', desc: 'Monthly KPIs: cost burn, BOQ vs actual, milestones, forecast' },
  cost:     { label: 'Cost Report',     audience: 'Finance / QS',     color: '#fbbf24', desc: 'Detailed cost entries, category breakdown, budget variance' },
  schedule: { label: 'Schedule Report', audience: 'Project Controls', color: '#38bdf8', desc: 'Baseline vs planned vs actual for all work items' },
  risk:     { label: 'Risk Report',     audience: 'Project Manager',  color: '#fb923c', desc: 'All high/critical risk items with status and assignment' },
  resource: { label: 'Resource Report', audience: 'Site Manager',     color: '#e879f9', desc: 'Manpower, plant and equipment allocation by work item' },
  gantt:    { label: 'Gantt Chart',     audience: 'All Stakeholders', color: '#a855f7', desc: 'Visual project schedule with timeline, dependencies, and milestones' },
}

function fmt(n: number, currency: string): string {
  if (n >= 1000000) return `${currency} ${(n / 1000000).toFixed(2)}M`
  if (n >= 1000)    return `${currency} ${(n / 1000).toFixed(1)}K`
  return `${currency} ${n.toLocaleString(undefined, { maximumFractionDigits: 0 })}`
}

function daysBetween(a: string, b: string): number {
  return Math.round((new Date(b).getTime() - new Date(a).getTime()) / 86400000)
}

export default function ReportsModule() {
  const params = useParams()
  const router = useRouter()
  const { theme, setTheme, isDark } = useTheme()
  const projectid = params?.projectid as string
  const printRef = useRef<HTMLDivElement>(null)

  const isPublicViewOnly = projectid === PUBLIC_VIEWONLY_PROJECT_ID

  const [project, setProject] = useState<Project | null>(null)
  const [sowItems, setSowItems] = useState<SowItem[]>([])
  const [costs, setCosts] = useState<CostEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [activeReport, setActiveReport] = useState<ReportType>('pm')
  const [reportDate] = useState(new Date().toLocaleDateString('en-ZA', { day: '2-digit', month: 'long', year: 'numeric' }))

  useEffect(() => {
    if (!projectid) return
    if (isPublicViewOnly) {
      fetchAll()
      return
    }
    checkSessionAndLoad()
  }, [projectid])

  async function checkSessionAndLoad() {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push(`/login?next=${encodeURIComponent(`/dashboard/${projectid}/reports`)}`)
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

    fetchAll()
  }

  async function fetchAll() {
    setLoading(true)
    const [pRes, sowRes, costRes] = await Promise.all([
      supabase.from('projects').select('*').eq('projectid', projectid).single(),
      supabase.from('sow_items').select('*').eq('projectid', projectid).order('sow_number'),
      supabase.from('cost_entries').select('*').eq('projectid', projectid).order('cost_date', { ascending: false }),
    ])
    if (pRes.data) setProject(pRes.data)
    if (sowRes.data) setSowItems(sowRes.data)
    if (costRes.data) setCosts(costRes.data)
    setLoading(false)
  }

  function handlePrint() {
    if (activeReport === 'gantt') {
      document.documentElement.classList.add('gantt-print-active')
    }
    window.print()
    window.setTimeout(() => document.documentElement.classList.remove('gantt-print-active'), 500)
  }

  if (loading || !project) return (
    <div style={{ background: '#0a0c0e', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace', color: '#484f58' }}>
      {loading ? 'Loading reports...' : 'Project not found'}
    </div>
  )

  // ”€”€ COMPUTED DATA ”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€
  const l3 = sowItems.filter(r => r.hierarchy_level === 3)
  const l1 = sowItems.filter(r => r.hierarchy_level === 1)

  const totalTasks = l3.length
  const complete   = l3.filter(r => r.status === 'Complete').length
  const inProgress = l3.filter(r => r.status === 'In Progress').length
  const delayed    = l3.filter(r => r.status === 'Delayed').length
  const notStarted = l3.filter(r => r.status === 'Not Started' || !r.status).length
  const critical   = l3.filter(r => r.is_critical_path).length
  const overallPct = totalTasks > 0 ? Math.round((complete / totalTasks) * 100) : 0

  const totalBoq    = l3.reduce((s, r) => s + (r.boq_amount || r.estimated_cost || (r.quantity && r.unit_rate ? r.quantity * (1 + (r.waste_pct || 0) / 100) * r.unit_rate : 0)), 0)
  const totalSpent  = costs.reduce((s, c) => s + Number(c.amount), 0)
  const remaining   = project.budget - totalSpent
  const spentPct    = project.budget > 0 ? Math.round((totalSpent / project.budget) * 100) : 0
  const isOver      = totalSpent > project.budget
  const today       = new Date().toISOString().split('T')[0]
  const projectDays = daysBetween(project.start_date, project.end_date)
  const elapsed     = daysBetween(project.start_date, today)
  const timeElapsedPct = project.start_date ? Math.min(100, Math.round((elapsed / projectDays) * 100)) : 0
  const isDelayed   = today > project.end_date
  const daysLate    = isDelayed ? daysBetween(project.end_date, today) : 0
  const highRisk    = l3.filter(r => r.risk_level === 'High' || r.risk_level === 'Critical')
  const CATEGORIES  = ['Labour', 'Materials', 'Plant', 'Subcontractor', 'Overhead', 'Other']
  const byCategory  = CATEGORIES.map(cat => ({ cat, total: costs.filter(c => c.category === cat).reduce((s, c) => s + Number(c.amount), 0) })).filter(c => c.total > 0)
  const earnedValue = totalBoq > 0 ? (overallPct / 100) * totalBoq : 0
  const cpi         = totalSpent > 0 ? earnedValue / totalSpent : 1
  const upcoming    = l3.filter(r => r.planned_start && r.planned_start >= today && r.status !== 'Complete').slice(0, 8)
  const inProgressItems = l3.filter(r => r.status === 'In Progress')

  const meta = REPORT_META[activeReport]
  const accentColor = meta.color

  // ”€”€ SHARED STYLES ”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€
  const hBg = isDark ? '#0d1117' : '#ffffff'
  const panelBg = isDark ? '#0a0c0e' : '#f8fafc'
  const borderCol = isDark ? '#21262d' : '#cbd5e1'
  const gridCol = isDark ? '#161b22' : '#f1f5f9'
  const textNormal = isDark ? '#c9d1d9' : '#334155'
  const textMuted = isDark ? '#484f58' : '#64748b'
  const textHeader = isDark ? '#e6edf3' : '#0f172a'

  const S = {
    section: { marginBottom: 24 },
    sectionTitle: { fontSize: 11, fontWeight: 700, color: accentColor, letterSpacing: '0.08em', marginBottom: 12, paddingBottom: 6, borderBottom: `1px solid ${accentColor}44` },
    card: { background: hBg, border: '1px solid ' + borderCol, borderRadius: 8, padding: 16 },
    grid2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 },
    grid3: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 16 },
    grid4: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 12, marginBottom: 16 },
    kpiCard: (color: string) => ({ background: hBg, border: '1px solid ' + borderCol, borderRadius: 8, padding: '14px 16px' }),
    kpiLabel: { fontSize: 9, color: textMuted, letterSpacing: '0.08em', marginBottom: 6 },
    kpiValue: (color: string) => ({ fontSize: 22, fontWeight: 700, color, fontFamily: 'monospace' }),
    kpiSub: { fontSize: 10, color: isDark ? '#6e7681' : '#475569', marginTop: 4 },
    row: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 0', borderBottom: '1px solid ' + gridCol, fontSize: 11 },
    rowLabel: { color: textMuted },
    rowVal: { color: textNormal, fontFamily: 'monospace' as const },
    bar: (pct: number, color: string) => (
      <div style={{ height: 6, background: isDark ? '#21262d' : '#e2e8f0', borderRadius: 3, marginTop: 6 }}>
        <div style={{ height: 6, width: `${Math.min(100, pct)}%`, background: color, borderRadius: 3 }} />
      </div>
    ),
    badge: (color: string, text: string) => (
      <span style={{ fontSize: 10, padding: '2px 7px', borderRadius: 4, background: color + '22', color, border: `1px solid ${color}44` }}>{text}</span>
    ),
    table: { width: '100%', borderCollapse: 'collapse' as const, fontSize: 11 },
    th: { padding: '6px 8px', textAlign: 'left' as const, fontSize: 9, color: textMuted, letterSpacing: '0.06em', borderBottom: '1px solid ' + borderCol },
    td: { padding: '6px 8px', borderBottom: '1px solid ' + gridCol, color: textNormal },
  }

  // ”€”€ REPORT HEADER ”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€
  function ReportHeader() {
    return (
      <div style={{ marginBottom: 24, paddingBottom: 0, borderBottom: 'none' }}>
        <div style={{ background: '#0d1117', border: '1px solid #f59e0b33', borderRadius: 8, padding: '14px 20px', marginBottom: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 36, height: 36, background: '#f59e0b', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 18, color: '#0a0c0e', fontFamily: 'sans-serif' }}>C</div>
              <div>
                <div style={{ fontFamily: 'sans-serif', fontWeight: 900, fontSize: 16, color: '#f59e0b', letterSpacing: '0.05em' }}>CPOS</div>
                <div style={{ fontSize: 8, color: '#484f58', letterSpacing: '0.12em' }}>CONSTRUCTION PROJECT OS</div>
              </div>
            </div>
            <div style={{ width: 1, height: 36, background: '#21262d' }} />
            <div>
              <div style={{ fontSize: 9, color: accentColor, letterSpacing: '0.12em', fontWeight: 700, marginBottom: 2 }}>{meta.label.toUpperCase()}</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: '#e6edf3', fontFamily: 'sans-serif', lineHeight: 1.1 }}>{project!.project_name}</div>
              <div style={{ fontSize: 10, color: '#484f58', marginTop: 2 }}>{project!.project_code}  {project!.location}</div>
            </div>
          </div>
          <div style={{ textAlign: 'right' as const, borderLeft: '1px solid #21262d', paddingLeft: 16 }}>
            <div style={{ fontSize: 9, color: '#484f58', letterSpacing: '0.08em' }}>PREPARED FOR</div>
            <div style={{ fontSize: 13, color: '#c9d1d9', fontWeight: 700, marginBottom: 4 }}>{meta.audience}</div>
            <div style={{ fontSize: 10, color: '#484f58' }}>Report date: <span style={{ color: '#c9d1d9' }}>{reportDate}</span></div>
            <div style={{ fontSize: 10, color: '#484f58' }}>Client: <span style={{ color: '#c9d1d9' }}>{project!.client_name}</span></div>
            <div style={{ fontSize: 10, color: '#484f58' }}>Status: <span style={{ color: accentColor }}>{project!.status}</span></div>
          </div>
        </div>
        <div style={{ height: 2, background: 'linear-gradient(90deg, #f59e0b, ' + accentColor + ', transparent)', borderRadius: 1, marginBottom: 20 }} />
      </div>
    )
  }

  


  function PMReport() {
    const highRiskItems = l3.filter(i => i.risk_level === 'High' || i.risk_level === 'Critical' || i.risk_level === 'Very High')
    const criticalPathItems = l3.filter(i => i.is_critical_path === true)
    const upcomingPM = l3.filter(i => i.planned_start && new Date(i.planned_start) <= new Date(Date.now() + 14*86400000) && new Date(i.planned_start) >= new Date() && i.status !== 'Complete')
    const localEstCost = l3.reduce((s, i) => s + (i.estimated_cost || 0), 0)
    const spentPctPM = localEstCost > 0 ? (totalSpent / localEstCost) * 100 : 0
    return (
      <div>
        <ReportHeader />
        <div style={S.grid4}>
          {[
            { label: 'OVERALL COMPLETION', val: `${overallPct.toFixed(0)}%`, sub: `${complete} of ${l3.length} tasks done`, color: overallPct >= 100 ? '#4ade80' : accentColor },
            { label: 'BUDGET USED', val: `${spentPctPM.toFixed(0)}%`, sub: `${fmt(totalSpent, project!.currency)} of ${fmt(localEstCost, project!.currency)}`, color: isOver ? '#f87171' : '#4ade80' },
            { label: 'SCHEDULE STATUS', val: isDelayed ? 'DELAYED' : 'ON TRACK', sub: isDelayed ? `${daysLate} days behind` : `${timeElapsedPct.toFixed(0)}% elapsed`, color: isDelayed ? '#f87171' : '#4ade80' },
            { label: 'HIGH/CRITICAL RISKS', val: String(highRiskItems.length), sub: 'Require immediate action', color: highRiskItems.length > 0 ? '#f87171' : '#4ade80' },
          ].map(k => (
            <div key={k.label} style={S.kpiCard(k.color)}>
              <div style={S.kpiLabel}>{k.label}</div>
              <div style={S.kpiValue(k.color)}>{k.val}</div>
              <div style={S.kpiSub}>{k.sub}</div>
            </div>
          ))}
        </div>
        <div style={S.section}>
          <div style={S.sectionTitle}>PROGRESS BY SECTION (L1)</div>
          <div style={S.card}>
            {l1.map(section => {
              const items = l3.filter(i => i.scope_l1 === section.scope_l1)
              const pct = items.length ? items.reduce((s, i) => s + (i.percent_complete || 0), 0) / items.length : 0
              const done = items.filter(i => i.status === 'Complete').length
              return (
                <div key={section.sow_number} style={{ marginBottom: 12 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, marginBottom: 4 }}>
                    <span style={{ color: '#c9d1d9', fontWeight: 600 }}>{section.scope_l1 || section.sow_number}</span>
                    <span style={{ fontFamily: 'monospace', color: accentColor }}>{pct.toFixed(0)}% ({done}/{items.length})</span>
                  </div>
                  {S.bar(pct, pct === 100 ? '#4ade80' : accentColor)}
                </div>
              )
            })}
          </div>
        </div>
        <div style={S.grid2}>
          <div style={S.card}>
            <div style={S.sectionTitle}>BUDGET STATUS</div>
            {[
              { label: 'Contract Value', val: fmt(project!.budget, project!.currency) },
              { label: 'Total Spent', val: fmt(totalSpent, project!.currency) },
              { label: 'Remaining', val: fmt(project!.budget - totalSpent, project!.currency) },
              { label: 'BOQ Value', val: fmt(totalBoq, project!.currency) },
            ].map(r => <div key={r.label} style={S.row}><span style={S.rowLabel}>{r.label}</span><span style={S.rowVal}>{r.val}</span></div>)}
          </div>
          <div style={S.card}>
            <div style={S.sectionTitle}>RISK REGISTER (HIGH / CRITICAL)</div>
            {highRiskItems.length === 0
              ? <div style={{ fontSize: 11, color: '#4ade80' }}>No high or critical risks identified.</div>
              : highRiskItems.slice(0, 6).map(i => (
                  <div key={i.sow_number} style={S.row}>
                    <span style={{ ...S.rowLabel, maxWidth: 220, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const }}>{i.sub_item_l3 || i.particulars || i.sow_number}</span>
                    {S.badge(i.risk_level === 'Critical' ? '#c084fc' : '#f87171', i.risk_level || 'High')}
                  </div>
                ))
            }
          </div>
        </div>
        <div style={S.section}>
          <div style={S.sectionTitle}>CRITICAL PATH ACTIVITIES</div>
          <div style={S.card}>
            {criticalPathItems.length === 0
              ? <div style={{ fontSize: 11, color: '#484f58' }}>No critical path items defined.</div>
              : <table style={S.table}>
                  <thead><tr>{['SOW #','ACTIVITY','BASELINE END','PLANNED END','STATUS','%'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
                  <tbody>
                    {criticalPathItems.map(i => (
                      <tr key={i.sow_number}>
                        <td style={{ ...S.td, fontFamily: 'monospace', color: '#f59e0b' }}>{i.sow_number}</td>
                        <td style={{ ...S.td, maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const }}>{i.sub_item_l3 || i.particulars || i.sow_number}</td>
                        <td style={{ ...S.td, fontFamily: 'monospace', color: '#484f58' }}>{i.baseline_end || '—'}</td>
                        <td style={{ ...S.td, fontFamily: 'monospace', color: i.planned_end !== i.baseline_end ? '#f59e0b' : '#c9d1d9' }}>{i.planned_end || '—'}</td>
                        <td style={S.td}>{S.badge(i.status === 'Complete' ? '#4ade80' : i.status === 'Delayed' ? '#f87171' : '#f59e0b', i.status || 'Not Started')}</td>
                        <td style={{ ...S.td, fontFamily: 'monospace' }}>{i.percent_complete || 0}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
            }
          </div>
        </div>
        <div style={S.section}>
          <div style={S.sectionTitle}>UPCOMING ACTIVITIES — NEXT 2 WEEKS</div>
          <div style={S.card}>
            {upcomingPM.length === 0
              ? <div style={{ fontSize: 11, color: '#484f58' }}>No activities planned in the next 2 weeks.</div>
              : <table style={S.table}>
                  <thead><tr>{['ACTIVITY','PLANNED START','ASSIGNED TO','RISK'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
                  <tbody>
                    {upcomingPM.map(i => (
                      <tr key={i.sow_number}>
                        <td style={{ ...S.td, maxWidth: 220 }}>{i.sub_item_l3 || i.particulars || i.sow_number}</td>
                        <td style={{ ...S.td, fontFamily: 'monospace' }}>{i.planned_start}</td>
                        <td style={{ ...S.td, color: '#484f58' }}>{i.assigned_to || '—'}</td>
                        <td style={S.td}>{i.risk_level ? S.badge(i.risk_level === 'High' || i.risk_level === 'Critical' ? '#f87171' : '#f59e0b', i.risk_level) : '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
            }
          </div>
        </div>
      </div>
    )
  }


  function ClientReport() {
    const completedItems = l3.filter(i => i.status === 'Complete')
    const totalDuration = daysBetween(project!.start_date, project!.end_date)
    const elapsedDays = daysBetween(project!.start_date, today)
    const spentPctC = project!.budget > 0 ? (totalSpent / project!.budget) * 100 : 0
    return (
      <div>
        <ReportHeader />
        <div style={S.grid3}>
          {[
            { label: 'OVERALL COMPLETION', val: `${overallPct.toFixed(0)}%`, sub: `${completedItems.length} of ${l3.length} deliverables`, color: accentColor },
            { label: 'CONTRACT VALUE', val: fmt(project!.budget, project!.currency), sub: 'Original contract sum', color: accentColor },
            { label: 'SCHEDULE STATUS', val: isDelayed ? `${daysLate} Days Behind` : 'On Schedule', sub: `Duration: ${totalDuration} days`, color: isDelayed ? '#f87171' : '#4ade80' },
          ].map(k => (
            <div key={k.label} style={S.kpiCard(k.color)}>
              <div style={S.kpiLabel}>{k.label}</div>
              <div style={S.kpiValue(k.color)}>{k.val}</div>
              <div style={S.kpiSub}>{k.sub}</div>
            </div>
          ))}
        </div>
        <div style={S.card}>
          <div style={S.sectionTitle}>FINANCIAL SUMMARY</div>
          {[
            { label: 'Contract Value', val: fmt(project!.budget, project!.currency) },
            { label: 'Expenditure to Date', val: `${fmt(totalSpent, project!.currency)} (${spentPctC.toFixed(0)}%)` },
            { label: 'Balance Remaining', val: fmt(project!.budget - totalSpent, project!.currency) },
          ].map(r => (
            <div key={r.label} style={S.row}>
              <span style={S.rowLabel}>{r.label}</span>
              <span style={S.rowVal}>{r.val}</span>
            </div>
          ))}
          <div style={{ marginTop: 10 }}>{S.bar(spentPctC, isOver ? '#f87171' : accentColor)}</div>
          <div style={{ fontSize: 10, color: '#484f58', textAlign: 'right' as const, marginTop: 4 }}>Budget Utilisation</div>
        </div>
        <div style={S.section}>
          <div style={S.sectionTitle}>SECTION COMPLETION STATUS</div>
          {l1.map(section => {
            const items = l3.filter(i => i.scope_l1 === section.scope_l1)
            const pct = items.length ? items.reduce((s, i) => s + (i.percent_complete || 0), 0) / items.length : 0
            return (
              <div key={section.sow_number} style={{ marginBottom: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, marginBottom: 4 }}>
                  <span style={{ color: '#c9d1d9', fontWeight: 600 }}>{section.scope_l1 || section.sow_number}</span>
                  <span style={{ fontFamily: 'monospace', color: accentColor }}>{pct.toFixed(0)}%</span>
                </div>
                {S.bar(pct, pct === 100 ? '#4ade80' : accentColor)}
              </div>
            )
          })}
        </div>
        <div style={S.grid2}>
          <div style={S.card}>
            <div style={S.sectionTitle}>PROJECT TIMELINE</div>
            {[
              { label: 'Start Date', val: project!.start_date },
              { label: 'End Date', val: project!.end_date },
              { label: 'Duration', val: `${totalDuration} days` },
              { label: 'Elapsed', val: `${elapsedDays} days (${timeElapsedPct.toFixed(0)}%)` },
            ].map(r => (
              <div key={r.label} style={S.row}>
                <span style={S.rowLabel}>{r.label}</span>
                <span style={S.rowVal}>{r.val}</span>
              </div>
            ))}
            <div style={{ marginTop: 10 }}>{S.bar(timeElapsedPct, accentColor)}</div>
          </div>
          <div style={S.card}>
            <div style={S.sectionTitle}>KEY MILESTONES</div>
            <div style={{ fontSize: 11, color: '#4ade80', fontWeight: 600, marginBottom: 6 }}>Completed</div>
            {completedItems.slice(0, 3).map(i => (
              <div key={i.sow_number} style={{ fontSize: 11, color: '#484f58', marginBottom: 4 }}>✓ {i.sub_item_l3 || i.particulars || i.sow_number}</div>
            ))}
            {completedItems.length === 0 && <div style={{ fontSize: 11, color: '#484f58' }}>No completed items yet.</div>}
            <div style={{ fontSize: 11, color: '#f59e0b', fontWeight: 600, marginTop: 12, marginBottom: 6 }}>In Progress</div>
            {l3.filter(i => i.status === 'In Progress' && (i.percent_complete || 0) < 50).slice(0, 3).map(i => (
              <div key={i.sow_number} style={{ fontSize: 11, color: '#484f58', marginBottom: 4 }}>→ {i.sub_item_l3 || i.particulars || i.sow_number}</div>
            ))}
          </div>
        </div>
      </div>
    )
  }



  function EngineerReport() {
    const criticalItems = l3.filter(i => i.is_critical_path === true)
    const delayedItems = l3.filter(i => i.schedule_variance && i.schedule_variance < 0)
    const upcomingEng = l3.filter(i => i.planned_start && new Date(i.planned_start) >= new Date() && new Date(i.planned_start) <= new Date(Date.now() + 7*86400000))
    const inProgressItemsList = l3.filter(i => i.status === 'In Progress')
    return (
      <div>
        <ReportHeader />
        <div style={S.grid4}>
          {[
            { label: 'TOTAL ACTIVITIES', val: String(l3.length), sub: 'All work packages', color: accentColor },
            { label: 'IN PROGRESS', val: String(inProgress), sub: `${inProgressItemsList.length} active tasks`, color: '#f59e0b' },
            { label: 'CRITICAL PATH', val: String(criticalItems.length), sub: 'Driving project end date', color: '#f87171' },
            { label: 'DELAYED', val: String(delayedItems.length), sub: isDelayed ? `${daysLate} days behind` : 'On schedule', color: delayedItems.length > 0 ? '#f87171' : '#4ade80' },
          ].map(k => (
            <div key={k.label} style={S.kpiCard(k.color)}>
              <div style={S.kpiLabel}>{k.label}</div>
              <div style={S.kpiValue(k.color)}>{k.val}</div>
              <div style={S.kpiSub}>{k.sub}</div>
            </div>
          ))}
        </div>
        <div style={S.section}>
          <div style={S.sectionTitle}>CRITICAL PATH ACTIVITIES</div>
          <div style={S.card}>
            {criticalItems.length === 0
              ? <div style={{ fontSize: 11, color: '#484f58' }}>No critical path items defined.</div>
              : <table style={S.table}>
                  <thead><tr>{['SOW #','ACTIVITY','BL DAYS','PL DAYS','STATUS','%'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
                  <tbody>
                    {criticalItems.map(i => (
                      <tr key={i.sow_number}>
                        <td style={{ ...S.td, fontFamily: 'monospace', color: '#f59e0b' }}>{i.sow_number}</td>
                        <td style={{ ...S.td, maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const }}>{i.sub_item_l3 || i.particulars || i.sow_number}</td>
                        <td style={{ ...S.td, fontFamily: 'monospace' }}>{i.baseline_days || '—'}</td>
                        <td style={{ ...S.td, fontFamily: 'monospace', color: (i.planned_days || 0) > (i.baseline_days || 0) ? '#f87171' : '#c9d1d9' }}>{i.planned_days || '—'}</td>
                        <td style={S.td}>{S.badge(i.status === 'Complete' ? '#4ade80' : i.status === 'Delayed' ? '#f87171' : '#f59e0b', i.status || 'Not Started')}</td>
                        <td style={{ ...S.td, fontFamily: 'monospace' }}>{i.percent_complete || 0}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
            }
          </div>
        </div>
        <div style={S.section}>
          <div style={S.sectionTitle}>UPCOMING ACTIVITIES — NEXT 7 DAYS</div>
          <div style={S.card}>
            {upcomingEng.length === 0
              ? <div style={{ fontSize: 11, color: '#484f58' }}>No activities planned in the next 7 days.</div>
              : <table style={S.table}>
                  <thead><tr>{['SOW #','ACTIVITY','PLANNED START','PLANNED END','CRITICAL PATH'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
                  <tbody>
                    {upcomingEng.map(i => (
                      <tr key={i.sow_number}>
                        <td style={{ ...S.td, fontFamily: 'monospace', color: '#f59e0b' }}>{i.sow_number}</td>
                        <td style={{ ...S.td, maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const }}>{i.sub_item_l3 || i.particulars || i.sow_number}</td>
                        <td style={{ ...S.td, fontFamily: 'monospace' }}>{i.planned_start}</td>
                        <td style={{ ...S.td, fontFamily: 'monospace' }}>{i.planned_end || '—'}</td>
                        <td style={S.td}>{i.is_critical_path ? S.badge('#f87171', 'CP') : '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
            }
          </div>
        </div>
        <div style={S.section}>
          <div style={S.sectionTitle}>SCHEDULE VARIANCE — PLANNED vs BASELINE</div>
          <div style={S.card}>
            {l3.filter(i => i.baseline_days && i.planned_days && i.baseline_days !== i.planned_days).length === 0
              ? <div style={{ fontSize: 11, color: '#4ade80' }}>No schedule variance detected.</div>
              : <table style={S.table}>
                  <thead><tr>{['SOW #','ACTIVITY','BL DAYS','PL DAYS','VARIANCE','STATUS'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
                  <tbody>
                    {l3.filter(i => i.baseline_days && i.planned_days && i.baseline_days !== i.planned_days).slice(0, 10).map(i => {
                      const v = (i.planned_days || 0) - (i.baseline_days || 0)
                      return (
                        <tr key={i.sow_number}>
                          <td style={{ ...S.td, fontFamily: 'monospace', color: '#f59e0b' }}>{i.sow_number}</td>
                          <td style={{ ...S.td, maxWidth: 180, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const }}>{i.sub_item_l3 || i.particulars || i.sow_number}</td>
                          <td style={{ ...S.td, fontFamily: 'monospace' }}>{i.baseline_days}</td>
                          <td style={{ ...S.td, fontFamily: 'monospace' }}>{i.planned_days}</td>
                          <td style={{ ...S.td, fontFamily: 'monospace', fontWeight: 700, color: v > 0 ? '#f87171' : '#4ade80' }}>{v > 0 ? `+${v}d` : `${v}d`}</td>
                          <td style={S.td}>{S.badge(i.status === 'Complete' ? '#4ade80' : i.status === 'Delayed' ? '#f87171' : '#484f58', i.status || 'Not Started')}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
            }
          </div>
        </div>
        <div style={S.section}>
          <div style={S.sectionTitle}>IN-PROGRESS ITEMS</div>
          <div style={S.card}>
            {inProgressItemsList.length === 0
              ? <div style={{ fontSize: 11, color: '#484f58' }}>No active work packages.</div>
              : inProgressItemsList.map(i => (
                  <div key={i.sow_number} style={{ marginBottom: 12 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, marginBottom: 4 }}>
                      <span style={{ color: '#c9d1d9', maxWidth: 300, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const }}>{i.sub_item_l3 || i.particulars || i.sow_number}</span>
                      <span style={{ fontFamily: 'monospace', color: accentColor }}>{i.percent_complete || 0}%</span>
                    </div>
                    {S.bar(i.percent_complete || 0, accentColor)}
                  </div>
                ))
            }
          </div>
        </div>
      </div>
    )
  }


  function QSReport() {
    return (
      <div>
        <ReportHeader />
        <div style={S.section}>
          <div style={S.sectionTitle}>FINANCIAL SUMMARY</div>
          <div style={S.grid4}>
            {[
              { label: 'CONTRACT VALUE', val: fmt(project!.budget, project!.currency), color: '#f59e0b' },
              { label: 'BOQ VALUE', val: fmt(totalBoq, project!.currency), color: '#c084fc' },
              { label: 'ACTUAL SPEND', val: fmt(totalSpent, project!.currency), color: isOver ? '#f87171' : '#4ade80' },
              { label: 'EARNED VALUE', val: fmt(earnedValue, project!.currency), color: '#60a5fa' },
            ].map(k => (
              <div key={k.label} style={S.kpiCard(k.color)}>
                <div style={S.kpiLabel}>{k.label}</div>
                <div style={S.kpiValue(k.color)}>{k.val}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={S.section}>
          <div style={S.sectionTitle}>EARNED VALUE ANALYSIS</div>
          <div style={S.grid2}>
            <div style={S.card}>
              {[
                { label: 'Budget at Completion (BAC)', val: fmt(project!.budget, project!.currency) },
                { label: 'Earned Value (EV)', val: fmt(earnedValue, project!.currency) },
                { label: 'Actual Cost (AC)', val: fmt(totalSpent, project!.currency) },
                { label: 'Cost Variance (CV)', val: fmt(earnedValue - totalSpent, project!.currency) },
                { label: 'Cost Performance Index (CPI)', val: cpi.toFixed(2) },
              ].map(r => <div key={r.label} style={S.row}><span style={S.rowLabel}>{r.label}</span><span style={{ ...S.rowVal, color: r.label.includes('CPI') ? (cpi >= 1 ? '#4ade80' : '#f87171') : '#c9d1d9' }}>{r.val}</span></div>)}
            </div>
            <div style={S.card}>
              <div style={S.kpiLabel}>SPEND BY CATEGORY</div>
              {byCategory.length === 0 && <div style={{ fontSize: 11, color: '#484f58' }}>No cost entries yet.</div>}
              {byCategory.map(({ cat, total }) => {
                const pctOfTotal = totalSpent > 0 ? Math.round((total / totalSpent) * 100) : 0
                return (
                  <div key={cat} style={{ marginBottom: 8 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, marginBottom: 3 }}>
                      <span style={{ color: '#c9d1d9' }}>{cat}</span>
                      <span style={{ fontFamily: 'monospace', color: '#f59e0b' }}>{fmt(total, project!.currency)} ({pctOfTotal}%)</span>
                    </div>
                    {S.bar(pctOfTotal, accentColor)}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        {/* BOQ by section */}
        <div style={S.section}>
          <div style={S.sectionTitle}>BOQ SUMMARY BY SECTION</div>
          <div style={S.card}>
            <table style={S.table}>
              <thead><tr>
                <th style={S.th}>SECTION</th><th style={S.th}>ITEMS</th><th style={S.th}>BOQ VALUE</th><th style={S.th}>ACTUAL</th><th style={S.th}>VARIANCE</th><th style={S.th}>% OF TOTAL</th>
              </tr></thead>
              <tbody>
                {l1.map(sec => {
                  const secItems = l3.filter(t => t.sow_number.startsWith(sec.sow_number + '.'))
                  const secBoq   = secItems.reduce((s, r) => s + (r.estimated_cost || 0), 0)
                  const secAct   = secItems.reduce((s, r) => s + (r.actual_cost || 0), 0)
                  const secVar   = secAct - secBoq
                  const secPct   = totalBoq > 0 ? ((secBoq / totalBoq) * 100).toFixed(1) : '0'
                  return (
                    <tr key={sec.sow_id}>
                      <td style={{ ...S.td, fontWeight: 600, color: '#e6edf3' }}>{(sec.scope_l1 || sec.sow_number)}</td>
                      <td style={{ ...S.td, fontFamily: 'monospace' }}>{secItems.length}</td>
                      <td style={{ ...S.td, fontFamily: 'monospace', color: '#f59e0b' }}>{secBoq > 0 ? fmt(secBoq, project!.currency) : '€”'}</td>
                      <td style={{ ...S.td, fontFamily: 'monospace', color: '#4ade80' }}>{secAct > 0 ? fmt(secAct, project!.currency) : '€”'}</td>
                      <td style={{ ...S.td, fontFamily: 'monospace', color: secVar > 0 ? '#f87171' : '#4ade80' }}>{secAct > 0 ? (secVar > 0 ? '+' : '') + fmt(secVar, project!.currency) : '€”'}</td>
                      <td style={{ ...S.td, fontFamily: 'monospace' }}>{secPct}%</td>
                    </tr>
                  )
                })}
              </tbody>
              <tfoot>
                <tr style={{ borderTop: '2px solid #30363d' }}>
                  <td style={{ ...S.td, fontWeight: 700, color: '#e6edf3' }}>TOTAL</td>
                  <td style={{ ...S.td, fontFamily: 'monospace', fontWeight: 700 }}>{l3.length}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace', fontWeight: 700, color: '#f59e0b' }}>{fmt(totalBoq, project!.currency)}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace', fontWeight: 700, color: '#4ade80' }}>{totalSpent > 0 ? fmt(totalSpent, project!.currency) : '€”'}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace', fontWeight: 700, color: totalSpent - totalBoq > 0 ? '#f87171' : '#4ade80' }}>{totalSpent > 0 ? (totalSpent > totalBoq ? '+' : '') + fmt(totalSpent - totalBoq, project!.currency) : '€”'}</td>
                  <td style={{ ...S.td, fontFamily: 'monospace', fontWeight: 700 }}>100%</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        {/* Recent cost entries */}
        {costs.length > 0 && (
          <div style={S.section}>
            <div style={S.sectionTitle}>RECENT COST ENTRIES</div>
            <div style={S.card}>
              <table style={S.table}>
                <thead><tr>
                  <th style={S.th}>DATE</th><th style={S.th}>DESCRIPTION</th><th style={S.th}>CATEGORY</th><th style={S.th}>SUPPLIER</th><th style={S.th}>AMOUNT</th><th style={S.th}>STATUS</th>
                </tr></thead>
                <tbody>
                  {costs.slice(0, 15).map(c => (
                    <tr key={c.cost_id}>
                      <td style={{ ...S.td, fontFamily: 'monospace', color: '#484f58' }}>{c.cost_date}</td>
                      <td style={S.td}>{c.description}</td>
                      <td style={S.td}><span style={{ fontSize: 10, color: '#f59e0b' }}>{c.category}</span></td>
                      <td style={{ ...S.td, color: '#484f58' }}>{c.supplier || '€”'}</td>
                      <td style={{ ...S.td, fontFamily: 'monospace', color: '#f59e0b' }}>{fmt(Number(c.amount), project!.currency)}</td>
                      <td style={S.td}>{S.badge(c.is_approved ? '#4ade80' : '#484f58', c.is_approved ? 'Approved' : 'Pending')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    )
  }

  // ”€”€ SITE REPORT ”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€
  function SiteReport() {
    return (
      <div>
        <ReportHeader />
        <div style={S.section}>
          <div style={S.sectionTitle}>SITE STATUS €” {reportDate}</div>
          <div style={S.grid4}>
            {[
              { label: 'IN PROGRESS', val: inProgress, color: '#f59e0b' },
              { label: 'COMPLETE TODAY', val: complete, color: '#4ade80' },
              { label: 'NOT STARTED', val: notStarted, color: '#484f58' },
              { label: 'DELAYED', val: delayed, color: delayed > 0 ? '#f87171' : '#484f58' },
            ].map(k => (
              <div key={k.label} style={S.kpiCard(k.color)}>
                <div style={S.kpiLabel}>{k.label}</div>
                <div style={S.kpiValue(k.color)}>{k.val}</div>
              </div>
            ))}
          </div>
        </div>
        {/* In progress tasks */}
        <div style={S.section}>
          <div style={S.sectionTitle}>WORK IN PROGRESS</div>
          <div style={S.card}>
            {inProgressItems.length === 0 && <div style={{ fontSize: 11, color: '#484f58' }}>No tasks currently in progress.</div>}
            <table style={S.table}>
              {inProgressItems.length > 0 && <thead><tr>
                <th style={S.th}>SOW #</th><th style={S.th}>ACTIVITY</th><th style={S.th}>ASSIGNED TO</th><th style={S.th}>START</th><th style={S.th}>DAYS</th><th style={S.th}>PROGRESS</th><th style={S.th}>RISK</th>
              </tr></thead>}
              <tbody>
                {inProgressItems.map(r => (
                  <tr key={r.sow_id}>
                    <td style={{ ...S.td, fontFamily: 'monospace', color: '#f59e0b' }}>{r.sow_number}</td>
                    <td style={{ ...S.td, maxWidth: 180 }}>{(r.sub_item_l3 || r.particulars || r.sow_number)}</td>
                    <td style={{ ...S.td, color: '#484f58' }}>{r.assigned_to || '€”'}</td>
                    <td style={{ ...S.td, fontFamily: 'monospace', color: '#484f58' }}>{r.actual_start || r.planned_start || '€”'}</td>
                    <td style={{ ...S.td, fontFamily: 'monospace' }}>{r.planned_days || r.baseline_days || '€”'}</td>
                    <td style={S.td}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <div style={{ width: 60, height: 4, background: '#21262d', borderRadius: 2 }}>
                          <div style={{ height: 4, width: `${r.percent_complete || 0}%`, background: '#f59e0b', borderRadius: 2 }} />
                        </div>
                        <span style={{ fontSize: 10, color: '#484f58' }}>{r.percent_complete || 0}%</span>
                      </div>
                    </td>
                    <td style={S.td}>{r.risk_level ? S.badge(r.risk_level === 'High' || r.risk_level === 'Critical' ? '#f87171' : '#f59e0b', r.risk_level) : '€”'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Upcoming */}
        {upcoming.length > 0 && (
          <div style={S.section}>
            <div style={S.sectionTitle}>UPCOMING ACTIVITIES</div>
            <div style={S.card}>
              <table style={S.table}>
                <thead><tr>
                  <th style={S.th}>SOW #</th><th style={S.th}>ACTIVITY</th><th style={S.th}>PLANNED START</th><th style={S.th}>ASSIGNED</th><th style={S.th}>DAYS</th>
                </tr></thead>
                <tbody>
                  {upcoming.map(r => (
                    <tr key={r.sow_id}>
                      <td style={{ ...S.td, fontFamily: 'monospace', color: '#f59e0b' }}>{r.sow_number}</td>
                      <td style={S.td}>{(r.sub_item_l3 || r.particulars || r.sow_number)}</td>
                      <td style={{ ...S.td, fontFamily: 'monospace' }}>{r.planned_start}</td>
                      <td style={{ ...S.td, color: '#484f58' }}>{r.assigned_to || '€”'}</td>
                      <td style={{ ...S.td, fontFamily: 'monospace' }}>{r.planned_days || '€”'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {/* Resource summary from SOW */}
        <div style={S.section}>
          <div style={S.sectionTitle}>OVERALL PROGRESS BY SECTION</div>
          {l1.map(sec => {
            const secTasks = l3.filter(t => t.sow_number.startsWith(sec.sow_number + '.'))
            const secDone  = secTasks.filter(t => t.status === 'Complete').length
            const secIP    = secTasks.filter(t => t.status === 'In Progress').length
            const secPct   = secTasks.length > 0 ? Math.round((secDone / secTasks.length) * 100) : 0
            return (
              <div key={sec.sow_id} style={{ ...S.card, marginBottom: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: '#e6edf3' }}>{(sec.scope_l1 || sec.sow_number)}</span>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    {secIP > 0 && S.badge('#f59e0b', `${secIP} active`)}
                    <span style={{ fontSize: 12, color: secPct === 100 ? '#4ade80' : accentColor, fontFamily: 'monospace', fontWeight: 700 }}>{secPct}%</span>
                  </div>
                </div>
                {S.bar(secPct, secPct === 100 ? '#4ade80' : accentColor)}
                <div style={{ fontSize: 10, color: '#484f58', marginTop: 4 }}>{secDone} complete · {secTasks.length - secDone} remaining</div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  // ”€”€ WEEKLY PROGRESS REPORT ”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€

  function WeeklyReport() {
    const completedThisWeek = l3.filter(i => i.status === 'Complete' && i.actual_end && new Date(i.actual_end) >= new Date(Date.now() - 7*86400000))
    const startedThisWeek = l3.filter(i => i.status === 'In Progress' && i.actual_start && new Date(i.actual_start) >= new Date(Date.now() - 7*86400000))
    const nextWeekUpcoming = l3.filter(i => i.status === 'Not Started' && i.planned_start && new Date(i.planned_start) <= new Date(Date.now() + 14*86400000) && new Date(i.planned_start) >= new Date())
    return (
      <div>
        <ReportHeader />
        <div style={S.grid4}>
          {[
            { label: 'OVERALL COMPLETION', val: `${overallPct.toFixed(0)}%`, sub: `${complete} of ${l3.length} tasks`, color: accentColor },
            { label: 'COMPLETED THIS WEEK', val: String(completedThisWeek.length), sub: 'Achieved', color: '#4ade80' },
            { label: 'STARTED THIS WEEK', val: String(startedThisWeek.length), sub: 'New work fronts', color: '#f59e0b' },
            { label: 'IN PROGRESS', val: String(inProgress), sub: 'Ongoing', color: '#f87171' },
          ].map(k => (
            <div key={k.label} style={S.kpiCard(k.color)}>
              <div style={S.kpiLabel}>{k.label}</div>
              <div style={S.kpiValue(k.color)}>{k.val}</div>
              <div style={S.kpiSub}>{k.sub}</div>
            </div>
          ))}
        </div>
        <div style={S.section}>
          <div style={S.sectionTitle}>PROGRESS BY SECTION</div>
          <div style={S.card}>
            <table style={S.table}>
              <thead><tr>{['SECTION','TOTAL','DONE','IN PROGRESS','PROGRESS'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {l1.map(section => {
                  const items = l3.filter(i => i.scope_l1 === section.scope_l1)
                  const done = items.filter(i => i.status === 'Complete').length
                  const inProg = items.filter(i => i.status === 'In Progress').length
                  const pct = items.length ? items.reduce((s, i) => s + (i.percent_complete || 0), 0) / items.length : 0
                  return (
                    <tr key={section.sow_number}>
                      <td style={{ ...S.td, fontWeight: 600, color: '#e6edf3' }}>{section.scope_l1 || section.sow_number}</td>
                      <td style={{ ...S.td, fontFamily: 'monospace' }}>{items.length}</td>
                      <td style={{ ...S.td, fontFamily: 'monospace', color: '#4ade80' }}>{done}</td>
                      <td style={{ ...S.td, fontFamily: 'monospace', color: '#f59e0b' }}>{inProg}</td>
                      <td style={S.td}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <div style={{ width: 80, height: 6, background: '#21262d', borderRadius: 3 }}>
                            <div style={{ height: 6, width: `${pct}%`, background: pct === 100 ? '#4ade80' : accentColor, borderRadius: 3 }} />
                          </div>
                          <span style={{ fontSize: 10, color: '#484f58' }}>{pct.toFixed(0)}%</span>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div style={S.grid2}>
          <div style={S.card}>
            <div style={S.sectionTitle}>COMPLETED THIS WEEK</div>
            {completedThisWeek.length === 0
              ? <div style={{ fontSize: 11, color: '#484f58' }}>No tasks completed this week.</div>
              : completedThisWeek.map(i => (
                  <div key={i.sow_number} style={S.row}>
                    <span style={{ ...S.rowLabel, maxWidth: 220, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const }}>{i.sub_item_l3 || i.particulars || i.sow_number}</span>
                    {S.badge('#4ade80', 'Done')}
                  </div>
                ))
            }
          </div>
          <div style={S.card}>
            <div style={S.sectionTitle}>NEXT WEEK — UPCOMING</div>
            {nextWeekUpcoming.length === 0
              ? <div style={{ fontSize: 11, color: '#484f58' }}>No upcoming activities.</div>
              : nextWeekUpcoming.slice(0, 6).map(i => (
                  <div key={i.sow_number} style={S.row}>
                    <span style={{ ...S.rowLabel, maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const }}>{i.sub_item_l3 || i.particulars || i.sow_number}</span>
                    <span style={{ ...S.rowVal, fontFamily: 'monospace' }}>{i.planned_start}</span>
                  </div>
                ))
            }
          </div>
        </div>
      </div>
    )
  }



  function MonthlyReport() {
    const cutoff = new Date(Date.now() - 30*86400000)
    const costsThisMonth = costs.filter(c => new Date(c.cost_date) >= cutoff)
    const spentThisMonth = costsThisMonth.reduce((s,c) => s + Number(c.amount), 0)
    const byCatMonth: Record<string,number> = {}
    costsThisMonth.forEach(c => { byCatMonth[c.category] = (byCatMonth[c.category]||0) + Number(c.amount) })
    const spentPctM = project!.budget > 0 ? (totalSpent / project!.budget) * 100 : 0
    const cpiM = totalSpent > 0 ? earnedValue / totalSpent : 1
    return (
      <div>
        <ReportHeader />
        <div style={S.grid4}>
          {[
            { label: 'COMPLETION %', val: `${overallPct.toFixed(0)}%`, sub: 'Physical progress', color: accentColor },
            { label: 'SPENT THIS MONTH', val: fmt(spentThisMonth, project!.currency), sub: 'Period cost', color: '#f59e0b' },
            { label: 'TOTAL SPENT TO DATE', val: fmt(totalSpent, project!.currency), sub: `${spentPctM.toFixed(0)}% of contract`, color: isOver ? '#f87171' : '#4ade80' },
            { label: 'REMAINING BUDGET', val: fmt(project!.budget - totalSpent, project!.currency), sub: 'To complete', color: isOver ? '#f87171' : '#60a5fa' },
          ].map(k => (
            <div key={k.label} style={S.kpiCard(k.color)}>
              <div style={S.kpiLabel}>{k.label}</div>
              <div style={S.kpiValue(k.color)}>{k.val}</div>
              <div style={S.kpiSub}>{k.sub}</div>
            </div>
          ))}
        </div>
        <div style={S.grid2}>
          <div style={S.card}>
            <div style={S.sectionTitle}>FINANCIAL PERFORMANCE</div>
            {[
              { label: 'Contract Value (BAC)', val: fmt(project!.budget, project!.currency) },
              { label: 'BOQ Value', val: fmt(totalBoq, project!.currency) },
              { label: 'Total Spent (AC)', val: fmt(totalSpent, project!.currency) },
              { label: 'Spent This Month', val: fmt(spentThisMonth, project!.currency) },
              { label: 'Earned Value (EV)', val: fmt(earnedValue, project!.currency) },
              { label: 'CPI', val: cpiM.toFixed(2) },
            ].map(r => (
              <div key={r.label} style={S.row}>
                <span style={S.rowLabel}>{r.label}</span>
                <span style={S.rowVal}>{r.val}</span>
              </div>
            ))}
          </div>
          <div style={S.card}>
            <div style={S.sectionTitle}>BUDGET UTILISATION</div>
            {S.bar(spentPctM, isOver ? '#f87171' : accentColor)}
            <div style={{ fontSize: 10, color: '#484f58', textAlign: 'right' as const, marginTop: 4 }}>{spentPctM.toFixed(0)}% of contract spent</div>
            <div style={{ marginTop: 16 }}>
              <div style={S.sectionTitle}>MONTHLY SPEND BY CATEGORY</div>
              {Object.keys(byCatMonth).length === 0 && <div style={{ fontSize: 11, color: '#484f58' }}>No cost entries this month.</div>}
              {Object.entries(byCatMonth).map(([k, v]) => (
                <div key={k} style={S.row}>
                  <span style={S.rowLabel}>{k}</span>
                  <span style={S.rowVal}>{fmt(v, project!.currency)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={S.section}>
          <div style={S.sectionTitle}>SECTION MILESTONE STATUS</div>
          <div style={S.card}>
            <table style={S.table}>
              <thead><tr>{['SECTION','BOQ VALUE','% COMPLETE','EARNED VALUE','STATUS'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr></thead>
              <tbody>
                {l1.map(section => {
                  const items = l3.filter(i => i.scope_l1 === section.scope_l1)
                  const boqSum = items.reduce((s,i) => s + (i.boq_amount||0), 0)
                  const pct = items.length ? items.reduce((s,i) => s + (i.percent_complete||0), 0) / items.length : 0
                  const ev = boqSum * (pct/100)
                  const st = pct >= 95 ? 'Complete' : pct > 0 ? 'In Progress' : 'Not Started'
                  return (
                    <tr key={section.sow_number}>
                      <td style={{ ...S.td, fontWeight: 600, color: '#e6edf3' }}>{section.scope_l1 || section.sow_number}</td>
                      <td style={{ ...S.td, fontFamily: 'monospace', color: '#f59e0b' }}>{boqSum > 0 ? fmt(boqSum, project!.currency) : '—'}</td>
                      <td style={{ ...S.td, fontFamily: 'monospace' }}>{pct.toFixed(0)}%</td>
                      <td style={{ ...S.td, fontFamily: 'monospace', color: '#4ade80' }}>{ev > 0 ? fmt(ev, project!.currency) : '—'}</td>
                      <td style={S.td}>{S.badge(st === 'Complete' ? '#4ade80' : st === 'In Progress' ? '#f59e0b' : '#484f58', st)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }


  function CostReport() {
    const cvrRows = l1.map(section => {
      const items = l3.filter(i => i.scope_l1 === section.scope_l1)
      const rb  = items.reduce((s, i) => s + (i.estimated_cost || 0), 0)
      const ctd = items.reduce((s, i) => s + (i.actual_cost || 0), 0)
      const pct = items.length ? items.reduce((s, i) => s + (i.percent_complete || 0), 0) / items.length : 0
      const ftc = pct > 0 ? (ctd / (pct / 100)) * (1 - pct / 100) : rb
      const efc = ctd + ftc
      const variance = rb - efc
      const varPct = rb ? Math.abs(variance) / rb * 100 : 0
      let status: 'green' | 'amber' | 'red' = 'green'
      if (variance < 0 && varPct < 5) status = 'amber'
      else if (variance < 0 && varPct >= 5) status = 'red'
      return { section: section.scope_l1 || section.sow_number, rb, ctd, pct, ftc, efc, variance, status, varPct }
    })
    const totalRB  = cvrRows.reduce((s, r) => s + r.rb, 0)
    const totalCTD = cvrRows.reduce((s, r) => s + r.ctd, 0)
    const totalEFC = cvrRows.reduce((s, r) => s + r.efc, 0)
    const totalVariance = totalRB - totalEFC
    const overrunPct = totalRB ? Math.abs(totalVariance) / totalRB * 100 : 0
    const isOverrun = totalVariance < 0
    const bannerColor = !isOverrun ? '#4ade80' : overrunPct < 5 ? '#f59e0b' : '#f87171'
    const cv = earnedValue - totalSpent
    const cpiVal = totalSpent === 0 ? 1 : earnedValue / totalSpent
    const localEstCost = l3.reduce((s, i) => s + (i.estimated_cost || 0), 0)
    const spiVal = localEstCost === 0 ? 1 : earnedValue / (localEstCost * (overallPct / 100) || 1)
    const statusColor2 = (s: string) => s === 'green' ? '#4ade80' : s === 'amber' ? '#f59e0b' : '#f87171'
    const statusLabel  = (s: string) => s === 'green' ? 'On Track' : s === 'amber' ? 'Warning' : 'Critical'
    return (
      <div>
        <ReportHeader />
        {/* Variance Banner */}
        <div style={{ background: bannerColor + '18', border: `2px solid ${bannerColor}`, borderRadius: 10, padding: '18px 24px', marginBottom: 24, textAlign: 'center' as const }}>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: 28, color: bannerColor, letterSpacing: '0.04em' }}>
            PROJECT IS {overrunPct.toFixed(1)}% {isOverrun ? 'OVER' : 'UNDER'} BUDGET
          </div>
          <div style={{ fontSize: 13, color: '#6e7681', marginTop: 4 }}>
            Total Variance: {fmt(Math.abs(totalVariance), project!.currency)} {isOverrun ? '(Overspend)' : '(Saving)'}
          </div>
        </div>
        {/* CVR Table */}
        <div style={S.section}>
          <div style={S.sectionTitle}>COST VALUE RECONCILIATION (CVR) — BY SECTION</div>
          <div style={S.card}>
            <div style={{ overflowX: 'auto' as const }}>
              <table style={S.table}>
                <thead>
                  <tr>
                    {['WORK PACKAGE','REV. BUDGET (RB)','COST TO DATE (CTD)','% COMPLETE','FORECAST TO COMPLETE (FTC)','EST. FINAL COST (EFC)','VARIANCE (RB-EFC)','STATUS'].map(h => (
                      <th key={h} style={S.th}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {cvrRows.map(r => (
                    <tr key={r.section}>
                      <td style={{ ...S.td, fontWeight: 600, color: '#e6edf3' }}>{r.section}</td>
                      <td style={{ ...S.td, fontFamily: 'monospace' }}>{fmt(r.rb, project!.currency)}</td>
                      <td style={{ ...S.td, fontFamily: 'monospace' }}>{fmt(r.ctd, project!.currency)}</td>
                      <td style={{ ...S.td, fontFamily: 'monospace' }}>{r.pct.toFixed(0)}%</td>
                      <td style={{ ...S.td, fontFamily: 'monospace' }}>{fmt(r.ftc, project!.currency)}</td>
                      <td style={{ ...S.td, fontFamily: 'monospace', fontWeight: 600 }}>{fmt(r.efc, project!.currency)}</td>
                      <td style={{ ...S.td, fontFamily: 'monospace', fontWeight: 700, color: r.variance >= 0 ? '#4ade80' : '#f87171' }}>
                        {r.variance >= 0 ? '+' : ''}{fmt(r.variance, project!.currency)}
                      </td>
                      <td style={S.td}>{S.badge(statusColor2(r.status), statusLabel(r.status))}</td>
                    </tr>
                  ))}
                  <tr style={{ borderTop: '2px solid #30363d' }}>
                    <td style={{ ...S.td, fontWeight: 700, color: '#e6edf3' }}>TOTAL</td>
                    <td style={{ ...S.td, fontFamily: 'monospace', fontWeight: 700 }}>{fmt(totalRB, project!.currency)}</td>
                    <td style={{ ...S.td, fontFamily: 'monospace', fontWeight: 700 }}>{fmt(totalCTD, project!.currency)}</td>
                    <td style={{ ...S.td }}>—</td>
                    <td style={{ ...S.td, fontFamily: 'monospace', fontWeight: 700 }}>{fmt(totalEFC - totalCTD, project!.currency)}</td>
                    <td style={{ ...S.td, fontFamily: 'monospace', fontWeight: 700 }}>{fmt(totalEFC, project!.currency)}</td>
                    <td style={{ ...S.td, fontFamily: 'monospace', fontWeight: 700, color: totalVariance >= 0 ? '#4ade80' : '#f87171' }}>
                      {totalVariance >= 0 ? '+' : ''}{fmt(totalVariance, project!.currency)}
                    </td>
                    <td style={S.td} />
                  </tr>
                </tbody>
              </table>
            </div>
            <div style={{ fontSize: 10, color: '#484f58', marginTop: 8 }}>
              Note: Variation Orders (VO) column will be available when variation orders are logged. RB = Original Budget (no VOs yet).
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 8, flexWrap: 'wrap' as const }}>
              {S.badge('#4ade80', 'Green: On/Below Budget')}
              {S.badge('#f59e0b', 'Amber: Warning <5% Over')}
              {S.badge('#f87171', 'Red: Critical >5% Over')}
            </div>
          </div>
        </div>
        {/* EV Analysis + Spend by Category */}
        <div style={S.grid2}>
          <div style={S.card}>
            <div style={S.sectionTitle}>EARNED VALUE ANALYSIS</div>
            {[
              { label: 'BAC (Budget at Completion)', val: fmt(project!.budget, project!.currency), color: '#f59e0b' },
              { label: 'EV (Earned Value)',          val: fmt(earnedValue, project!.currency),     color: '#60a5fa' },
              { label: 'AC (Actual Cost)',           val: fmt(totalSpent, project!.currency),      color: '#c9d1d9' },
              { label: 'CV (Cost Variance)',         val: fmt(cv, project!.currency),              color: cv >= 0 ? '#4ade80' : '#f87171' },
              { label: 'CPI',                        val: cpiVal.toFixed(2),                       color: cpiVal >= 1 ? '#4ade80' : '#f87171' },
              { label: 'SPI',                        val: isFinite(spiVal) ? spiVal.toFixed(2) : '—', color: spiVal >= 1 ? '#4ade80' : '#f87171' },
            ].map(r => (
              <div key={r.label} style={S.row}>
                <span style={S.rowLabel}>{r.label}</span>
                <span style={{ ...S.rowVal, color: r.color }}>{r.val}</span>
              </div>
            ))}
          </div>
          <div style={S.card}>
            <div style={S.sectionTitle}>SPEND BY CATEGORY</div>
            {byCategory.length === 0 && <div style={{ fontSize: 11, color: '#484f58' }}>No cost entries yet.</div>}
            {byCategory.map(({ cat, total }) => {
              const pctOfTotal = totalSpent > 0 ? Math.round((total / totalSpent) * 100) : 0
              return (
                <div key={cat} style={{ marginBottom: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, marginBottom: 3 }}>
                    <span style={{ color: '#c9d1d9' }}>{cat}</span>
                    <span style={{ fontFamily: 'monospace', color: '#f59e0b' }}>{fmt(total, project!.currency)} ({pctOfTotal}%)</span>
                  </div>
                  {S.bar(pctOfTotal, accentColor)}
                </div>
              )
            })}
          </div>
        </div>
        {/* Cost Breakdown by Work Package */}
        <div style={S.section}>
          <div style={S.sectionTitle}>COST BREAKDOWN BY WORK PACKAGE (EFC)</div>
          {cvrRows.filter(r => r.efc > 0).map(r => {
            const pctOfTotal = totalEFC > 0 ? (r.efc / totalEFC) * 100 : 0
            return (
              <div key={r.section} style={{ ...S.card, marginBottom: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: '#e6edf3' }}>{r.section}</span>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <span style={{ fontSize: 10, fontFamily: 'monospace', color: '#f59e0b' }}>{fmt(r.efc, project!.currency)}</span>
                    <span style={{ fontSize: 10, color: '#484f58' }}>{pctOfTotal.toFixed(0)}% of total</span>
                    <span style={{ fontSize: 11, fontWeight: 700, color: r.variance >= 0 ? '#4ade80' : '#f87171' }}>
                      {r.variance >= 0 ? '▼ ' : '▲ '}{fmt(Math.abs(r.variance), project!.currency)}
                    </span>
                  </div>
                </div>
                {S.bar(pctOfTotal, accentColor)}
              </div>
            )
          })}
        </div>
        {/* Placeholder cards */}
        <div style={S.grid2}>
          <div style={S.card}>
            <div style={S.sectionTitle}>S-CURVE (COST VS TIME)</div>
            <div style={{ textAlign: 'center' as const, padding: '32px 0', color: '#484f58', fontSize: 12 }}>
              S-Curve will be available when monthly cost data is recorded
            </div>
          </div>
          <div style={S.card}>
            <div style={S.sectionTitle}>COMMITTED COSTS</div>
            <div style={{ textAlign: 'center' as const, padding: '32px 0', color: '#484f58', fontSize: 12 }}>
              Outstanding commitments will be available when POs are logged
            </div>
          </div>
        </div>
        {/* All cost entries */}
        {costs.length > 0 && (
          <div style={S.section}>
            <div style={S.sectionTitle}>ALL COST ENTRIES</div>
            <div style={S.card}>
              <div style={{ overflowX: 'auto' as const }}>
                <table style={S.table}>
                  <thead>
                    <tr>
                      {['DATE','DESCRIPTION','CATEGORY','SUPPLIER','REF','AMOUNT','STATUS'].map(h => (
                        <th key={h} style={S.th}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {costs.map(c => (
                      <tr key={c.cost_id}>
                        <td style={{ ...S.td, fontFamily: 'monospace', color: '#484f58' }}>{c.cost_date}</td>
                        <td style={S.td}>{c.description}</td>
                        <td style={S.td}><span style={{ fontSize: 10, color: '#f59e0b' }}>{c.category}</span></td>
                        <td style={{ ...S.td, color: '#484f58' }}>{c.supplier || '—'}</td>
                        <td style={{ ...S.td, color: '#484f58', fontFamily: 'monospace' }}>{(c as any).invoice_ref || '—'}</td>
                        <td style={{ ...S.td, fontFamily: 'monospace', color: '#f59e0b', fontWeight: 600 }}>{fmt(Number(c.amount), project!.currency)}</td>
                        <td style={S.td}>{S.badge(c.is_approved ? '#4ade80' : '#484f58', c.is_approved ? 'Approved' : 'Pending')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }


  function ScheduleReport() {
    const delayedItems = l3.filter(i => i.schedule_variance && i.schedule_variance < 0)
    const lateItems = l3.filter(i => i.planned_days && i.baseline_days && i.planned_days > i.baseline_days)
    return (
      <div>
        <ReportHeader />
        <div style={S.grid4}>
          {[
            { label: 'TOTAL ACTIVITIES', val: String(l3.length), sub: 'All work packages', color: accentColor },
            { label: 'COMPLETE', val: String(complete), sub: 'Finished', color: '#4ade80' },
            { label: 'IN PROGRESS', val: String(inProgress), sub: 'Active', color: '#f59e0b' },
            { label: 'DELAYED', val: String(delayedItems.length), sub: isDelayed ? `${daysLate} days behind` : 'On schedule', color: delayedItems.length > 0 ? '#f87171' : '#4ade80' },
          ].map(k => (
            <div key={k.label} style={S.kpiCard(k.color)}>
              <div style={S.kpiLabel}>{k.label}</div>
              <div style={S.kpiValue(k.color)}>{k.val}</div>
              <div style={S.kpiSub}>{k.sub}</div>
            </div>
          ))}
        </div>
        <div style={S.section}>
          <div style={S.sectionTitle}>FULL SCHEDULE — BASELINE vs PLANNED vs ACTUAL</div>
          <div style={S.card}>
            <div style={{ overflowX: 'auto' as const }}>
              <table style={S.table}>
                <thead>
                  <tr>{['SOW #','ACTIVITY','BL START','BL DAYS','PL START','PL DAYS','ACT START','STATUS','%'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr>
                </thead>
                <tbody>
                  {l3.map(i => {
                    const isLate = i.planned_days && i.baseline_days && i.planned_days > i.baseline_days
                    return (
                      <tr key={i.sow_number} style={{ background: isLate ? '#f8717110' : 'transparent' }}>
                        <td style={{ ...S.td, fontFamily: 'monospace', color: '#f59e0b' }}>{i.sow_number}</td>
                        <td style={{ ...S.td, maxWidth: 180, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const }}>{i.sub_item_l3 || i.particulars || i.sow_number}</td>
                        <td style={{ ...S.td, fontFamily: 'monospace', color: '#484f58' }}>{i.baseline_start || '—'}</td>
                        <td style={{ ...S.td, fontFamily: 'monospace' }}>{i.baseline_days || '—'}</td>
                        <td style={{ ...S.td, fontFamily: 'monospace', color: isLate ? '#f87171' : '#c9d1d9' }}>{i.planned_start || '—'}</td>
                        <td style={{ ...S.td, fontFamily: 'monospace', color: isLate ? '#f87171' : '#c9d1d9', fontWeight: isLate ? 700 : 400 }}>{i.planned_days || '—'}</td>
                        <td style={{ ...S.td, fontFamily: 'monospace', color: '#4ade80' }}>{i.actual_start || '—'}</td>
                        <td style={S.td}>{S.badge(i.status === 'Complete' ? '#4ade80' : i.status === 'Delayed' ? '#f87171' : i.status === 'In Progress' ? '#f59e0b' : '#484f58', i.status || 'Not Started')}</td>
                        <td style={{ ...S.td, fontFamily: 'monospace' }}>{i.percent_complete || 0}%</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            {lateItems.length > 0 && <div style={{ fontSize: 10, color: '#f87171', marginTop: 8 }}>{lateItems.length} activities have planned duration exceeding baseline — highlighted in red.</div>}
          </div>
        </div>
      </div>
    )
  }



  function RiskReport() {
    const critical = l3.filter(i => i.risk_level === 'Critical')
    const veryHigh = l3.filter(i => i.risk_level === 'Very High')
    const high     = l3.filter(i => i.risk_level === 'High')
    const medium   = l3.filter(i => i.risk_level === 'Medium')
    const allRisks = [...critical, ...veryHigh, ...high, ...medium]
    const riskColor2 = (r: string) => r === 'Critical' ? '#c084fc' : r === 'Very High' ? '#f87171' : r === 'High' ? '#f59e0b' : '#60a5fa'
    return (
      <div>
        <ReportHeader />
        <div style={S.grid4}>
          {[
            { label: 'CRITICAL', val: String(critical.length), sub: 'Immediate action', color: '#c084fc' },
            { label: 'VERY HIGH', val: String(veryHigh.length), sub: 'Urgent mitigation', color: '#f87171' },
            { label: 'HIGH', val: String(high.length), sub: 'Monitor closely', color: '#f59e0b' },
            { label: 'MEDIUM', val: String(medium.length), sub: 'Routine monitoring', color: '#60a5fa' },
          ].map(k => (
            <div key={k.label} style={S.kpiCard(k.color)}>
              <div style={S.kpiLabel}>{k.label}</div>
              <div style={S.kpiValue(k.color)}>{k.val}</div>
              <div style={S.kpiSub}>{k.sub}</div>
            </div>
          ))}
        </div>
        {allRisks.length === 0
          ? <div style={{ ...S.card, textAlign: 'center' as const, color: '#4ade80', fontSize: 13, padding: 32 }}>
              ✓ No risks above Low level. Project risk status is healthy.
            </div>
          : (
            <div style={S.section}>
              <div style={S.sectionTitle}>RISK REGISTER (ISO 31000)</div>
              <div style={S.card}>
                <div style={{ overflowX: 'auto' as const }}>
                  <table style={S.table}>
                    <thead>
                      <tr>{['SOW #','ACTIVITY','RISK LEVEL','STATUS','ASSIGNED TO','PLANNED START','CRITICAL PATH'].map(h => <th key={h} style={S.th}>{h}</th>)}</tr>
                    </thead>
                    <tbody>
                      {allRisks.map(i => (
                        <tr key={i.sow_number}>
                          <td style={{ ...S.td, fontFamily: 'monospace', color: '#f59e0b' }}>{i.sow_number}</td>
                          <td style={{ ...S.td, maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const }}>{i.sub_item_l3 || i.particulars || i.sow_number}</td>
                          <td style={S.td}>{S.badge(riskColor2(i.risk_level || ''), i.risk_level || '—')}</td>
                          <td style={S.td}>{S.badge(i.status === 'Complete' ? '#4ade80' : i.status === 'Delayed' ? '#f87171' : '#484f58', i.status || 'Not Started')}</td>
                          <td style={{ ...S.td, color: '#484f58' }}>{i.assigned_to || '—'}</td>
                          <td style={{ ...S.td, fontFamily: 'monospace', color: '#484f58' }}>{i.planned_start || '—'}</td>
                          <td style={S.td}>{i.is_critical_path ? S.badge('#f87171', 'CP') : '—'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )
        }
      </div>
    )
  }


  function ResourceReport() {
    const withResources = l3.filter(r => r.plant || r.site_equipment || r.manpower)
    const assignees = [...new Set(l3.filter(r => r.assigned_to).map(r => r.assigned_to!))]
    return (
      <div>
        <ReportHeader />
        <div style={S.section}>
          <div style={S.sectionTitle}>RESOURCE SUMMARY</div>
          <div style={S.grid3}>
            {[
              { label: 'TOTAL ASSIGNED TASKS', val: l3.filter(r => r.assigned_to).length, color: '#c9d1d9' },
              { label: 'UNIQUE ASSIGNEES', val: assignees.length, color: '#60a5fa' },
              { label: 'TASKS WITH RESOURCES', val: withResources.length, color: '#f59e0b' },
            ].map(k => (
              <div key={k.label} style={S.kpiCard(k.color)}>
                <div style={S.kpiLabel}>{k.label}</div>
                <div style={S.kpiValue(k.color)}>{k.val}</div>
              </div>
            ))}
          </div>
        </div>
        {assignees.length > 0 && (
          <div style={S.section}>
            <div style={S.sectionTitle}>WORKLOAD BY ASSIGNEE</div>
            <div style={S.card}>
              <table style={S.table}>
                <thead><tr><th style={S.th}>ASSIGNEE</th><th style={S.th}>TOTAL TASKS</th><th style={S.th}>IN PROGRESS</th><th style={S.th}>COMPLETE</th><th style={S.th}>DELAYED</th></tr></thead>
                <tbody>
                  {assignees.map(a => {
                    const aTasks = l3.filter(r => r.assigned_to === a)
                    return (
                      <tr key={a}>
                        <td style={{ ...S.td, fontWeight: 600, color: '#e6edf3' }}>{a}</td>
                        <td style={{ ...S.td, fontFamily: 'monospace' }}>{aTasks.length}</td>
                        <td style={{ ...S.td, fontFamily: 'monospace', color: '#f59e0b' }}>{aTasks.filter(t => t.status === 'In Progress').length}</td>
                        <td style={{ ...S.td, fontFamily: 'monospace', color: '#4ade80' }}>{aTasks.filter(t => t.status === 'Complete').length}</td>
                        <td style={{ ...S.td, fontFamily: 'monospace', color: '#f87171' }}>{aTasks.filter(t => t.status === 'Delayed').length}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {withResources.length > 0 && (
          <div style={S.section}>
            <div style={S.sectionTitle}>PLANT, EQUIPMENT & MANPOWER ALLOCATION</div>
            <div style={S.card}>
              <table style={S.table}>
                <thead><tr><th style={S.th}>SOW #</th><th style={S.th}>ACTIVITY</th><th style={S.th}>PLANT</th><th style={S.th}>SITE EQUIP.</th><th style={S.th}>MANPOWER</th><th style={S.th}>STATUS</th></tr></thead>
                <tbody>
                  {withResources.map(r => (
                    <tr key={r.sow_id}>
                      <td style={{ ...S.td, fontFamily: 'monospace', color: '#f59e0b' }}>{r.sow_number}</td>
                      <td style={{ ...S.td, maxWidth: 160 }}>{r.sub_item_l3 || r.particulars || r.sow_number}</td>
                      <td style={{ ...S.td, fontSize: 10, color: '#484f58' }}>{r.plant || '—'}</td>
                      <td style={{ ...S.td, fontSize: 10, color: '#484f58' }}>{r.site_equipment || '—'}</td>
                      <td style={{ ...S.td, fontSize: 10, color: '#484f58' }}>{r.manpower || '—'}</td>
                      <td style={S.td}>{S.badge(r.status === 'Complete' ? '#4ade80' : r.status === 'In Progress' ? '#f59e0b' : '#484f58', r.status || 'Not Started')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    )
  }

  function GanttReport() {
    const [viewMode, setViewMode] = useState<GanttViewMode>('month')
    const [pageIndex, setPageIndex] = useState(0)
    const [today] = useState(new Date().toISOString().split('T')[0])

    const schedule = useMemo(
      () =>
        computeScheduleRange({
          items: sowItems,
          projectStart: project.start_date,
          projectEnd: project.end_date,
        }),
      [sowItems, project.start_date, project.end_date]
    )

    const timePages = useMemo(
      () => splitTimelineIntoPages(schedule.rangeStart, schedule.rangeEnd, viewMode),
      [schedule.rangeStart, schedule.rangeEnd, viewMode]
    )

    const rows = useMemo(() => buildGanttRows({ items: sowItems }), [sowItems])

    const panelTheme = {
      isDark: false,
      hBg: '#f9fafb',
      panelBg: '#ffffff',
      borderCol: '#e5e7eb',
      gridCol: '#f3f4f6',
      textNormal: '#374151',
      textMuted: '#6b7280',
      textHeader: '#111827',
    }

    const toggles = { showBaseline: true, showPlanned: true, showActual: false }
    const safePageIndex = Math.min(pageIndex, Math.max(0, timePages.length - 1))
    const l3Items = sowItems.filter((r) => r.hierarchy_level === 3)

    return (
      <div style={{ padding: '10px', fontSize: 10 }}>
        <div className="report-no-print">
          <ReportHeader />
          <div style={{ marginBottom: 10, display: 'flex', gap: 30, fontSize: 9, flexWrap: 'wrap' }}>
            <div><strong>Project Period:</strong> {project.start_date} → {project.end_date}</div>
            <div><strong>Chart Period:</strong> {schedule.rangeStart} → {schedule.rangeEnd}</div>
            <div><strong>Total Days:</strong> {schedule.totalDays}</div>
            <div><strong>Total Tasks:</strong> {l3Items.length}</div>
            <div><strong>Pages:</strong> {timePages.length}</div>
          </div>
          <div style={{ marginBottom: 10, display: 'flex', gap: 8, alignItems: 'center', fontSize: 9, flexWrap: 'wrap' }}>
            <strong>View Mode:</strong>
            {GANTT_VIEW_MODES.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => {
                  setViewMode(value)
                  setPageIndex(0)
                }}
                style={{
                  padding: '4px 8px',
                  fontSize: 8,
                  fontWeight: 600,
                  background: viewMode === value ? '#a855f7' : '#f3f4f6',
                  color: viewMode === value ? '#ffffff' : '#374151',
                  border: '1px solid #e5e7eb',
                  borderRadius: 4,
                  cursor: 'pointer',
                }}
              >
                {label}
              </button>
            ))}
            <span style={{ marginLeft: 8, color: '#6b7280' }}>|</span>
            <button
              disabled={safePageIndex <= 0}
              onClick={() => setPageIndex((p) => Math.max(0, p - 1))}
              style={{ padding: '4px 8px', fontSize: 8, border: '1px solid #e5e7eb', borderRadius: 4, cursor: safePageIndex <= 0 ? 'not-allowed' : 'pointer', opacity: safePageIndex <= 0 ? 0.4 : 1 }}
            >
              ← Prev
            </button>
            <span style={{ fontSize: 8, color: '#6b7280' }}>Page {safePageIndex + 1} / {timePages.length}</span>
            <button
              disabled={safePageIndex >= timePages.length - 1}
              onClick={() => setPageIndex((p) => Math.min(timePages.length - 1, p + 1))}
              style={{ padding: '4px 8px', fontSize: 8, border: '1px solid #e5e7eb', borderRadius: 4, cursor: safePageIndex >= timePages.length - 1 ? 'not-allowed' : 'pointer', opacity: safePageIndex >= timePages.length - 1 ? 0.4 : 1 }}
            >
              Next →
            </button>
          </div>
          {schedule.hasSchedule.length === 0 ? (
            <div style={{ padding: 40, textAlign: 'center', color: '#6b7280' }}>No schedule data available</div>
          ) : (
            <div style={{ border: '1px solid #e5e7eb', overflow: 'auto' }}>
              <GanttPaginatedLayout
                variant="screen"
                windows={timePages}
                pageIndex={safePageIndex}
                viewMode={viewMode}
                rows={rows}
                theme={panelTheme}
                toggles={toggles}
                today={today}
                rowH={24}
                labelW={200}
                compact
              />
            </div>
          )}
        </div>
        {schedule.hasSchedule.length > 0 && (
          <div className="gantt-print-only" aria-hidden="true">
            <div style={{ padding: '8px 0 6px', fontFamily: 'sans-serif' }}>
              <div style={{ fontSize: 14, fontWeight: 800, color: '#111827' }}>{project.project_name}</div>
              <div style={{ fontSize: 9, color: '#6b7280' }}>
                {project.project_code} · Gantt Report · {GANTT_VIEW_MODES.find((m) => m.value === viewMode)?.label}
              </div>
            </div>
            <GanttPaginatedLayout
              variant="print"
              windows={timePages}
              viewMode={viewMode}
              rows={rows}
              theme={panelTheme}
              toggles={toggles}
              today={today}
            />
          </div>
        )}
      </div>
    )
  }

  function renderReport() {
    switch (activeReport) {
      case 'pm':       return <PMReport />
      case 'client':   return <ClientReport />
      case 'engineer': return <EngineerReport />
      case 'qs':       return <QSReport />
      case 'site':     return <SiteReport />
      case 'weekly':   return <WeeklyReport />
      case 'monthly':  return <MonthlyReport />
      case 'cost':     return <CostReport />
      case 'schedule': return <ScheduleReport />
      case 'risk':     return <RiskReport />
      case 'resource': return <ResourceReport />
      case 'gantt':    return <GanttReport />
    }
  }

  return (
    <div style={{ fontFamily: 'monospace', background: panelBg, minHeight: '100vh', color: textNormal }} data-report-type={activeReport}>
      <style>{`
        .report-doc {
          background: white !important;
          color: #111827 !important;
        }
        .report-doc [style*="background: rgb(13, 17, 23)"],
        .report-doc [style*="background:rgb(13, 17, 23)"],
        .report-doc [style*="background: rgb(10, 12, 14)"],
        .report-doc [style*="background:rgb(10, 12, 14)"],
        .report-doc [style*="background:#0d1117"],
        .report-doc [style*="background: #0d1117"],
        .report-doc [style*="background:#0a0c0e"],
        .report-doc [style*="background: #0a0c0e"] {
          background: white !important;
          box-shadow: none !important;
        }
        .report-doc [style*="color: rgb(201, 209, 217)"],
        .report-doc [style*="color:rgb(201, 209, 217)"],
        .report-doc [style*="color: rgb(230, 237, 243)"],
        .report-doc [style*="color:rgb(230, 237, 243)"],
        .report-doc [style*="color:#c9d1d9"],
        .report-doc [style*="color: #c9d1d9"],
        .report-doc [style*="color:#e6edf3"],
        .report-doc [style*="color: #e6edf3"] {
          color: #111827 !important;
        }
        .report-doc [style*="border-color: rgb(33, 38, 45)"],
        .report-doc [style*="border-color:rgb(33, 38, 45)"],
        .report-doc [style*="border-bottom: 1px solid rgb(22, 27, 34)"],
        .report-doc [style*="border-bottom:1px solid rgb(22, 27, 34)"],
        .report-doc [style*="border-top: 1px solid rgb(33, 38, 45)"],
        .report-doc [style*="border-top:1px solid rgb(33, 38, 45)"],
        .report-doc [style*="border:#21262d"],
        .report-doc [style*="border: 1px solid #21262d"],
        .report-doc [style*="borderBottom: '1px solid #21262d'"],
        .report-doc [style*="borderBottom: 1px solid #21262d"],
        .report-doc [style*="borderTop: '1px solid #21262d'"],
        .report-doc [style*="borderTop: 1px solid #21262d"] {
          border-color: #d1d5db !important;
        }
        @media print {
          .no-print,
          .report-no-print { display: none !important; }
          html.gantt-print-active body * { visibility: hidden; }
          html.gantt-print-active .gantt-print-only,
          html.gantt-print-active .gantt-print-only * { visibility: visible; }
          html.gantt-print-active .gantt-print-only {
            display: block !important;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          html, body { background: white !important; height: auto !important; overflow: visible !important; }
          body { color: black !important; }
          .print-area { background: white !important; color: black !important; padding: 20px; }
          .report-doc,
          .report-doc * {
            box-shadow: none !important;
          }
          [data-report-type="gantt"] .print-area {
            padding: 0 !important;
          }
          [data-report-type="gantt"] .report-doc {
            max-width: none !important;
            padding: 0 !important;
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
          @page gantt-page {
            margin: 10mm;
            size: A3 landscape;
          }
          @page { margin: 12mm; size: A4; }
        }
        .gantt-print-only { display: none; }
      `}</style>

      {/* HEADER */}
      <div className="no-print" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 28px', borderBottom: '1px solid ' + borderCol, background: hBg }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <button onClick={() => router.back()} style={{ background: 'transparent', border: '1px solid ' + (isDark ? '#30363d' : '#cbd5e1'), borderRadius: 6, color: isDark ? '#8b949e' : '#475569', cursor: 'pointer', fontWeight: 700, fontSize: 12, padding: '5px 12px', fontFamily: 'monospace' }}>← Back</button>
          <div>
            <div style={{ fontSize: 11, color: textMuted }}>{project.project_code} · Reports</div>
            <div style={{ fontSize: 16, fontWeight: 800, color: textHeader, fontFamily: 'sans-serif' }}>{project.project_name}</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <ThemeSelector compact />
          <button onClick={handlePrint} style={{ background: '#f59e0b', border: 'none', borderRadius: 6, color: '#0a0c0e', cursor: 'pointer', fontWeight: 700, fontSize: 12, padding: '8px 18px', fontFamily: 'monospace' }}>
            Export PDF
          </button>
        </div>
      </div>

      {/* REPORT SELECTOR */}
      <div className="no-print" style={{ display: 'flex', gap: 0, borderBottom: '1px solid ' + borderCol, padding: '0 28px', background: hBg, overflowX: 'auto' }}>
        {(Object.entries(REPORT_META) as [ReportType, typeof REPORT_META[ReportType]][]).map(([key, m]) => (
          <button key={key} onClick={() => setActiveReport(key)} style={{
            padding: '12px 18px', cursor: 'pointer', fontSize: 12, fontWeight: 600, background: 'none', border: 'none',
            borderBottom: `2px solid ${activeReport === key ? m.color : 'transparent'}`,
            color: activeReport === key ? m.color : textMuted, whiteSpace: 'nowrap' as const,
          }}>
            {m.label}
          </button>
        ))}
      </div>

      {/* REPORT DESC */}
      <div className="no-print" style={{ padding: '10px 28px', borderBottom: '1px solid ' + borderCol, background: hBg, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: 11, color: textMuted }}>{meta.desc}</div>
        <div style={{ fontSize: 11, color: textMuted }}>For: <span style={{ color: meta.color }}>{meta.audience}</span></div>
      </div>

      {/* REPORT CONTENT */}
      <div className="report-doc print-area" ref={printRef} style={{ padding: '28px 32px', maxWidth: 1100, margin: '0 auto', background: 'white', color: '#111827' }}>
        {renderReport()}
        <div style={{ marginTop: 32, paddingTop: 12, borderTop: '2px solid #f59e0b33', display: 'flex', justifyContent: 'space-between', fontSize: 10, color: '#6b7280', background: 'white', borderRadius: '0 0 8px 8px', padding: '10px 16px' }}>
          <span>CPOS  Construction Project Operating System  {project.project_code}</span>
          <span>Generated: {reportDate}</span>
        </div>
      </div>
    </div>
  )
}


