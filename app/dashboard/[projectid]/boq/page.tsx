'use client'
import { useEffect, useState } from 'react'
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
  // canonical sow_items column names
  scope_l1?: string
  item_l2?: string
  sub_item_l3?: string
  particulars?: string
  unit?: string
  quantity?: number
  waste_pct?: number
  net_qty?: number
  unit_rate?: number
  estimated_cost?: number
  actual_cost?: number
  cost_variance?: number
  status?: string
  risk_level?: string
  assigned_to?: string
}

type Project = {
  projectid: string
  project_name: string
  project_code: string
  currency: string
  budget: number
}

type Section = {
  sow_id: string
  sow_number: string
  description: string
  items: SowItem[]
  subsections: SubSection[]
  total_estimated: number
  total_actual: number
  total_variance: number
  item_count: number
}

type SubSection = {
  sow_id: string
  sow_number: string
  description: string
  items: SowItem[]
  total_estimated: number
  total_actual: number
}

export default function BOQModule() {
  const params = useParams()
  const router = useRouter()
  const { theme, setTheme, isDark } = useTheme()
  const projectid = params?.projectid as string

  const isPublicViewOnly = projectid === PUBLIC_VIEWONLY_PROJECT_ID

  const [project, setProject] = useState<Project | null>(null)
  const [sections, setSections] = useState<Section[]>([])
  const [loading, setLoading] = useState(true)
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())
  const [expandedSubsections, setExpandedSubsections] = useState<Set<string>>(new Set())
  const [view, setView] = useState<'summary' | 'detail' | 'comparison'>('detail')
  const [filterSection, setFilterSection] = useState<string>('all')

  useEffect(() => {
    if (!projectid) return
    if (isPublicViewOnly) {
      fetchProject(); fetchBOQ()
      return
    }
    checkSessionAndLoad()
  }, [projectid])

  async function checkSessionAndLoad() {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push(`/login?next=${encodeURIComponent(`/dashboard/${projectid}/boq`)}`)
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

    fetchProject(); fetchBOQ()
  }

  async function fetchProject() {
    const { data } = await supabase
      .from('projects')
      .select('projectid,project_name,project_code,currency,budget,user_id')
      .eq('projectid', projectid).single()
    if (data) setProject(data)
  }

  async function fetchBOQ() {
    setLoading(true)
    const { data } = await fetchAllRows<SowItem>((from, to) =>
      supabase.from('sow_items').select('*').eq('projectid', projectid).order('sow_number').range(from, to)
    )
    if (!data || data.length === 0) { setLoading(false); return }

    // Build section tree
    const l1 = data.filter((r: SowItem) => r.hierarchy_level === 1)
    const l2 = data.filter((r: SowItem) => r.hierarchy_level === 2)
    const l3 = data.filter((r: SowItem) => r.hierarchy_level === 3)

    const built: Section[] = l1.map((s: SowItem) => {
      const l1Prefix = s.sow_number + '.'
      const subsections: SubSection[] = l2
        .filter((i: SowItem) => i.sow_number.startsWith(l1Prefix) && i.sow_number.split('.').length === 2)
        .map((sub: SowItem) => {
          const subPrefix = sub.sow_number + '.'
          const items = l3.filter((it: SowItem) =>
            it.sow_number.startsWith(subPrefix) &&
            (it.unit_rate || it.quantity || it.estimated_cost)
          )
          const total_estimated = items.reduce((sum: number, it: SowItem) => sum + (it.estimated_cost || calcEstimated(it) || 0), 0)
          const total_actual    = items.reduce((sum: number, it: SowItem) => sum + (it.actual_cost || 0), 0)
          return {
            sow_id: sub.sow_id, sow_number: sub.sow_number,
            description: sub.item_l2 || sub.sow_number,
            items, total_estimated, total_actual,
          }
        })

      // L3 items directly under L1 (no L2 parent in the number)
      const directItems = l3.filter((it: SowItem) => {
        const parts = it.sow_number.split('.')
        return parts.length === 3 && parts[0] === s.sow_number && !l2.find((l: SowItem) => it.sow_number.startsWith(l.sow_number + '.'))
          && (it.unit_rate || it.quantity || it.estimated_cost)
      })

      const allItems = subsections.flatMap(sub => sub.items).concat(directItems)
      const total_estimated = allItems.reduce((sum: number, it: SowItem) => sum + (it.estimated_cost || calcEstimated(it) || 0), 0)
      const total_actual    = allItems.reduce((sum: number, it: SowItem) => sum + (it.actual_cost || 0), 0)
      const total_variance  = total_actual - total_estimated

      return {
        sow_id: s.sow_id, sow_number: s.sow_number,
        description: s.scope_l1 || s.sow_number,
        items: directItems, subsections,
        total_estimated, total_actual, total_variance,
        item_count: allItems.length,
      }
    })

    setSections(built)
    setExpandedSections(new Set(built.map(s => s.sow_id)))
    setLoading(false)
  }

  function calcEstimated(item: SowItem): number {
    if (!item.quantity || !item.unit_rate) return 0
    const netQty = item.quantity * (1 + (item.waste_pct || 0) / 100)
    return netQty * item.unit_rate
  }

  function fmt(n: number): string {
    if (!project) return n.toLocaleString(undefined, { maximumFractionDigits: 0 })
    return `${project.currency} ${n.toLocaleString(undefined, { maximumFractionDigits: 0 })}`
  }

  function fmtNum(n: number | undefined): string {
    if (n === undefined || n === null) return '—'
    return n.toLocaleString(undefined, { maximumFractionDigits: 3 })
  }

  const grandTotal = sections.reduce((s, sec) => s + sec.total_estimated, 0)
  const grandActual = sections.reduce((s, sec) => s + sec.total_actual, 0)
  const grandVariance = grandActual - grandTotal
  const boqVsBudget = project?.budget ? Math.round((grandTotal / project.budget) * 100) : 0

  const filteredSections = filterSection === 'all' ? sections : sections.filter(s => s.sow_id === filterSection)

  // ── STYLES ──────────────────────────────────────────────────
  const darkCol = isDark ? '#c9d1d9' : '#1e293b'
  const lightBg = isDark ? '#0a0c0e' : '#F8FAFC'
  const hText = isDark ? '#e6edf3' : '#0f172a'
  const cardBg = isDark ? '#0d1117' : '#ffffff'
  const borderCol = isDark ? '#21262d' : '#cbd5e1'
  const subBorder = isDark ? '#161b22' : '#f1f5f9'
  const subText = isDark ? '#484f58' : '#64748b'
  const backColor = isDark ? '#8b949e' : '#475569'
  const backBorder = isDark ? '#30363d' : '#cbd5e1'

  const p = { 
    fontFamily: 'monospace', 
    background: lightBg, 
    minHeight: '100vh', 
    color: darkCol,
    transition: 'all 0.3s',
    backgroundImage: isDark
      ? 'linear-gradient(rgba(96,165,250,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.025) 1px, transparent 1px)'
      : 'linear-gradient(rgba(0,0,0,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.015) 1px, transparent 1px)',
    backgroundSize: '32px 32px'
  }
  const card = { background: cardBg, border: `1px solid ${borderCol}`, borderRadius: 8, padding: 18 }
  const tabSt = (t: string) => ({ padding: '10px 18px', cursor: 'pointer' as const, fontSize: 12, fontWeight: 600, background: 'none', border: 'none', borderBottom: `2px solid ${view === t ? '#f59e0b' : 'transparent'}`, color: view === t ? '#f59e0b' : subText })

  return (
    <div className="boq-wrap" style={p}>

      <style>{`
        @media (max-width: 640px) {
          .boq-header { padding: 12px 12px !important; flex-wrap: wrap !important; gap: 10px !important; }
          .boq-header-left { flex-wrap: wrap !important; gap: 10px !important; }
          .boq-header-right { width: 100% !important; justify-content: flex-start !important; flex-wrap: wrap !important; gap: 10px !important; }
          .boq-kpis { grid-template-columns: 1fr !important; }
          .boq-tabs { padding: 0 12px !important; flex-wrap: wrap !important; gap: 8px !important; }
          .boq-body { padding: 12px !important; }
          .boq-table { overflow-x: auto !important; }
          .boq-cols { min-width: 860px !important; }
          .boq-row { min-width: 860px !important; }
        }
      `}</style>

      {/* HEADER */}
      <div className="boq-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 32px', borderBottom: '1px solid ' + borderCol, background: cardBg }}>
        <div className="boq-header-left" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <button onClick={() => router.back()} style={{ background: 'transparent', border: '1px solid ' + backBorder, borderRadius: 6, color: backColor, cursor: 'pointer', fontWeight: 700, fontSize: 12, padding: '6px 12px', fontFamily: 'monospace' }}>← Back</button>
          <div>
            <div style={{ fontSize: 11, color: subText }}>{project?.project_code} · Bill of Quantities</div>
            <div style={{ fontSize: 18, fontWeight: 800, color: hText, fontFamily: 'sans-serif' }}>{project?.project_name}</div>
          </div>
        </div>
        <div className="boq-header-right" style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          <ThemeSelector theme={theme} setTheme={setTheme} compact />
          {grandTotal > 0 && <span style={{ fontSize: 13, color: '#f59e0b', fontFamily: 'monospace', fontWeight: 700 }}>{fmt(grandTotal)}</span>}
          <span style={{ fontSize: 11, color: subText }}>{sections.reduce((s, sec) => s + sec.item_count, 0)} line items</span>
        </div>
      </div>

      {/* KPI STRIP */}
      {!loading && grandTotal > 0 && (
        <div className="boq-kpis" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 1, borderBottom: '1px solid ' + borderCol, background: borderCol }}>
          {[
            { label: 'BOQ VALUE', val: fmt(grandTotal), color: '#f59e0b' },
            { label: 'ACTUAL COST', val: fmt(grandActual), color: grandActual > grandTotal ? '#f87171' : '#4ade80' },
            { label: 'VARIANCE', val: (grandVariance > 0 ? '+' : '') + fmt(grandVariance), color: grandVariance > 0 ? '#f87171' : '#4ade80' },
            { label: 'BOQ vs BUDGET', val: `${boqVsBudget}%`, color: boqVsBudget > 100 ? '#f87171' : '#60a5fa' },
            { label: 'SECTIONS', val: String(sections.length), color: '#c084fc' },
          ].map(k => (
            <div key={k.label} style={{ background: cardBg, padding: '12px 20px', textAlign: 'center' as const }}>
              <div style={{ fontSize: 9, color: subText, letterSpacing: '0.08em', marginBottom: 4 }}>{k.label}</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: k.color, fontFamily: 'monospace' }}>{k.val}</div>
            </div>
          ))}
        </div>
      )}

      {/* VIEW TABS + FILTER */}
      <div className="boq-tabs" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 32px', borderBottom: '1px solid #21262d', background: '#0d1117' }}>
        <div style={{ display: 'flex' }}>
          {(['detail', 'summary', 'comparison'] as const).map(t => (
            <button key={t} style={tabSt(t)} onClick={() => setView(t)}>
              {t === 'detail' ? 'Full BOQ' : t === 'summary' ? 'Section Summary' : 'Cost Comparison'}
            </button>
          ))}
        </div>
        {sections.length > 1 && (
          <select
            value={filterSection}
            onChange={e => setFilterSection(e.target.value)}
            style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 6, color: '#c9d1d9', fontFamily: 'monospace', fontSize: 11, padding: '5px 10px', outline: 'none' }}
          >
            <option value="all">All sections</option>
            {sections.map(s => <option key={s.sow_id} value={s.sow_id}>{s.sow_number} — {s.description}</option>)}
          </select>
        )}
      </div>

      <div className="boq-body" style={{ padding: '24px 32px' }}>
        {loading && <p style={{ color: '#484f58' }}>Loading BOQ data...</p>}

        {!loading && sections.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 0', color: '#484f58' }}>
            <p style={{ fontSize: 14, marginBottom: 8 }}>No BOQ data yet.</p>
            <p style={{ fontSize: 12, marginBottom: 20 }}>Import the CPOS Master Template with unit rates and quantities, or add SOW items manually with BOQ fields filled in.</p>
            <button onClick={() => router.push(`/dashboard/${projectid}/sow`)}
              style={{ background: '#f59e0b', border: 'none', borderRadius: 6, color: '#0a0c0e', cursor: 'pointer', fontWeight: 700, fontSize: 12, padding: '10px 20px', fontFamily: 'monospace' }}>
              Go to SOW Module →
            </button>
          </div>
        )}

        {/* ── FULL BOQ VIEW ── */}
        {!loading && sections.length > 0 && view === 'detail' && (
          <div className="boq-table">
            {/* Column headers */}
            <div className="boq-cols" style={{ display: 'grid', gridTemplateColumns: '70px 1fr 55px 75px 60px 75px 95px 100px 100px', gap: 8, padding: '6px 12px', borderBottom: '1px solid #21262d', marginBottom: 4 }}>
              {['NO.','DESCRIPTION','UNIT','QTY','WASTE%','NET QTY','UNIT RATE','EST. COST','ACTUAL COST'].map((h,i) => (
                <span key={h} style={{ fontSize: 9, color: '#484f58', letterSpacing: '0.06em', textAlign: i > 1 ? 'right' as const : 'left' as const, display: 'block' }}>{h}</span>
              ))}
            </div>

            {filteredSections.map(section => (
              <div key={section.sow_id} style={{ marginBottom: 4 }}>
                {/* L1 Section header */}
                <div
                  className="boq-cols"
                  style={{ display: 'grid', gridTemplateColumns: '70px 1fr 55px 75px 60px 75px 95px 100px 100px', gap: 8, padding: '10px 12px', background: '#161b22', cursor: 'pointer', borderRadius: 6, marginBottom: 2 }}
                  onClick={() => {
                    setExpandedSections(prev => { const n = new Set(prev); n.has(section.sow_id) ? n.delete(section.sow_id) : n.add(section.sow_id); return n })
                  }}
                >
                  <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#f59e0b' }}>{section.sow_number}</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#e6edf3', textTransform: 'uppercase' as const }}>
                    {expandedSections.has(section.sow_id) ? '▼ ' : '▶ '}{section.description}
                  </span>
                  <span /><span /><span /><span />
                  <span />
                  <span style={{ fontSize: 11, color: '#f59e0b', fontFamily: 'monospace', textAlign: 'right' as const }}>{section.total_estimated > 0 ? fmt(section.total_estimated) : ''}</span>
                  <span style={{ fontSize: 11, color: section.total_actual > 0 ? '#4ade80' : '#484f58', fontFamily: 'monospace', textAlign: 'right' as const }}>{section.total_actual > 0 ? fmt(section.total_actual) : ''}</span>
                </div>

                {expandedSections.has(section.sow_id) && (
                  <div style={{ marginLeft: 0 }}>
                    {/* Subsections */}
                    {section.subsections.map(sub => (
                      <div key={sub.sow_id}>
                        {/* L2 subsection header */}
                        <div
                          className="boq-cols"
                          style={{ display: 'grid', gridTemplateColumns: '70px 1fr 55px 75px 60px 75px 95px 100px 100px', gap: 8, padding: '8px 12px', background: '#0d1117', cursor: sub.items.length > 0 ? 'pointer' : 'default', borderBottom: '1px solid #21262d' }}
                          onClick={() => {
                            if (sub.items.length > 0) {
                              setExpandedSubsections(prev => { const n = new Set(prev); n.has(sub.sow_id) ? n.delete(sub.sow_id) : n.add(sub.sow_id); return n })
                            }
                          }}
                        >
                          <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#4ade80' }}>{sub.sow_number}</span>
                          <span style={{ fontSize: 12, fontWeight: 600, color: '#c9d1d9' }}>
                            {sub.items.length > 0 ? (expandedSubsections.has(sub.sow_id) ? '▼ ' : '▶ ') : '  '}{sub.description}
                            {sub.items.length > 0 && <span style={{ fontSize: 10, color: '#484f58', marginLeft: 8 }}>({sub.items.length} items)</span>}
                          </span>
                          <span /><span /><span /><span /><span />
                          <span style={{ fontSize: 11, color: '#f59e0b', fontFamily: 'monospace', textAlign: 'right' as const }}>{sub.total_estimated > 0 ? fmt(sub.total_estimated) : ''}</span>
                          <span style={{ fontSize: 11, color: sub.total_actual > 0 ? '#4ade80' : '#484f58', fontFamily: 'monospace', textAlign: 'right' as const }}>{sub.total_actual > 0 ? fmt(sub.total_actual) : ''}</span>
                        </div>

                        {/* L3 line items */}
                        {(expandedSubsections.has(sub.sow_id) || sub.items.length <= 3) && sub.items.map(item => (
                          <BOQRow key={item.sow_id} item={item} fmt={fmt} fmtNum={fmtNum} calcEstimated={calcEstimated} indent={0} />
                        ))}
                      </div>
                    ))}

                    {/* Direct L3 items under L1 */}
                    {section.items.map(item => (
                      <BOQRow key={item.sow_id} item={item} fmt={fmt} fmtNum={fmtNum} calcEstimated={calcEstimated} indent={0} />
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Grand total */}
            <div className="boq-cols" style={{ display: 'grid', gridTemplateColumns: '70px 1fr 55px 75px 60px 75px 95px 100px 100px', gap: 8, padding: '12px 12px', borderTop: '2px solid #30363d', marginTop: 8 }}>
              <span />
              <span style={{ fontSize: 12, fontWeight: 700, color: '#e6edf3', letterSpacing: '0.06em' }}>GRAND TOTAL</span>
              <span /><span /><span /><span /><span />
              <span style={{ fontSize: 13, fontWeight: 700, color: '#f59e0b', fontFamily: 'monospace', textAlign: 'right' as const }}>{fmt(grandTotal)}</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: grandActual > 0 ? '#4ade80' : '#484f58', fontFamily: 'monospace', textAlign: 'right' as const }}>{grandActual > 0 ? fmt(grandActual) : '—'}</span>
            </div>
          </div>
        )}

        {/* ── SECTION SUMMARY VIEW ── */}
        {!loading && sections.length > 0 && view === 'summary' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 80px 130px 130px 100px', gap: 8, padding: '6px 12px', borderBottom: '1px solid #21262d', marginBottom: 8 }}>
              {['NO.','SECTION','ITEMS','EST. VALUE','ACTUAL COST','% OF TOTAL'].map(h => (
                <span key={h} style={{ fontSize: 9, color: '#484f58', letterSpacing: '0.06em' }}>{h}</span>
              ))}
            </div>
            {sections.map(section => {
              const pct = grandTotal > 0 ? (section.total_estimated / grandTotal) * 100 : 0
              return (
                <div key={section.sow_id} style={{ display: 'grid', gridTemplateColumns: '60px 1fr 80px 130px 130px 100px', gap: 8, padding: '10px 12px', borderBottom: '1px solid #21262d', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#f59e0b' }}>{section.sow_number}</span>
                  <div>
                    <div style={{ fontSize: 12, color: '#e6edf3', fontWeight: 600 }}>{section.description}</div>
                    <div style={{ marginTop: 4, height: 3, background: '#21262d', borderRadius: 2, width: '80%' }}>
                      <div style={{ height: 3, width: `${pct}%`, background: '#f59e0b', borderRadius: 2 }} />
                    </div>
                  </div>
                  <span style={{ fontSize: 11, color: '#484f58' }}>{section.item_count}</span>
                  <span style={{ fontSize: 12, color: '#f59e0b', fontFamily: 'monospace' }}>{section.total_estimated > 0 ? fmt(section.total_estimated) : '—'}</span>
                  <span style={{ fontSize: 12, color: section.total_actual > 0 ? '#4ade80' : '#484f58', fontFamily: 'monospace' }}>{section.total_actual > 0 ? fmt(section.total_actual) : '—'}</span>
                  <span style={{ fontSize: 11, color: '#c9d1d9', fontFamily: 'monospace' }}>{pct.toFixed(1)}%</span>
                </div>
              )
            })}
            {/* Total */}
            <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 80px 130px 130px 100px', gap: 8, padding: '12px', borderTop: '2px solid #30363d', marginTop: 8 }}>
              <span /><span style={{ fontSize: 12, fontWeight: 700, color: '#e6edf3' }}>TOTAL</span>
              <span style={{ fontSize: 12, color: '#484f58' }}>{sections.reduce((s, sec) => s + sec.item_count, 0)}</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: '#f59e0b', fontFamily: 'monospace' }}>{fmt(grandTotal)}</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: grandActual > 0 ? '#4ade80' : '#484f58', fontFamily: 'monospace' }}>{grandActual > 0 ? fmt(grandActual) : '—'}</span>
              <span style={{ fontSize: 11, color: '#c9d1d9' }}>100%</span>
            </div>
          </div>
        )}

        {/* ── COST COMPARISON VIEW ── */}
        {!loading && sections.length > 0 && view === 'comparison' && (
          <div>
            <div style={{ marginBottom: 20 }}>
              {/* Budget vs BOQ bar */}
              {project?.budget && (
                <div style={{ ...card, marginBottom: 16 }}>
                  <div style={{ fontSize: 11, color: '#484f58', letterSpacing: '0.08em', marginBottom: 10 }}>BOQ VALUE vs CONTRACT BUDGET</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontSize: 12, color: '#c9d1d9' }}>{fmt(grandTotal)} BOQ</span>
                    <span style={{ fontSize: 12, color: '#484f58' }}>{fmt(project.budget)} budget</span>
                  </div>
                  <div style={{ height: 12, background: '#21262d', borderRadius: 6, overflow: 'hidden', position: 'relative' as const }}>
                    <div style={{ height: '100%', width: `${Math.min(100, boqVsBudget)}%`, background: boqVsBudget > 100 ? '#f87171' : '#f59e0b', borderRadius: 6, transition: 'width 0.6s ease' }} />
                  </div>
                  <div style={{ fontSize: 11, color: boqVsBudget > 100 ? '#f87171' : '#4ade80', marginTop: 6 }}>
                    {boqVsBudget > 100 ? `⚠ BOQ exceeds budget by ${boqVsBudget - 100}%` : `BOQ is ${boqVsBudget}% of contract budget`}
                  </div>
                </div>
              )}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 130px 130px 130px 90px', gap: 8, padding: '6px 12px', borderBottom: '1px solid #21262d', marginBottom: 4 }}>
              {['NO.','SECTION','EST. VALUE','ACTUAL COST','VARIANCE','VAR %'].map(h => (
                <span key={h} style={{ fontSize: 9, color: '#484f58', letterSpacing: '0.06em' }}>{h}</span>
              ))}
            </div>

            {sections.map(section => {
              const variance = section.total_actual - section.total_estimated
              const varPct = section.total_estimated > 0 ? (variance / section.total_estimated) * 100 : 0
              return (
                <div key={section.sow_id} style={{ display: 'grid', gridTemplateColumns: '60px 1fr 130px 130px 130px 90px', gap: 8, padding: '10px 12px', borderBottom: '1px solid #21262d', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#f59e0b' }}>{section.sow_number}</span>
                  <span style={{ fontSize: 12, color: '#e6edf3', fontWeight: 600 }}>{section.description}</span>
                  <span style={{ fontSize: 12, color: '#f59e0b', fontFamily: 'monospace' }}>{section.total_estimated > 0 ? fmt(section.total_estimated) : '—'}</span>
                  <span style={{ fontSize: 12, color: section.total_actual > 0 ? '#4ade80' : '#484f58', fontFamily: 'monospace' }}>{section.total_actual > 0 ? fmt(section.total_actual) : '—'}</span>
                  <span style={{ fontSize: 12, color: variance > 0 ? '#f87171' : variance < 0 ? '#4ade80' : '#484f58', fontFamily: 'monospace' }}>
                    {section.total_actual > 0 ? (variance > 0 ? '+' : '') + fmt(variance) : '—'}
                  </span>
                  <span style={{ fontSize: 11, color: varPct > 0 ? '#f87171' : varPct < 0 ? '#4ade80' : '#484f58', fontFamily: 'monospace' }}>
                    {section.total_actual > 0 ? (varPct > 0 ? '+' : '') + varPct.toFixed(1) + '%' : '—'}
                  </span>
                </div>
              )
            })}

            <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 130px 130px 130px 90px', gap: 8, padding: '12px', borderTop: '2px solid #30363d', marginTop: 8 }}>
              <span /><span style={{ fontSize: 12, fontWeight: 700, color: '#e6edf3' }}>TOTAL</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: '#f59e0b', fontFamily: 'monospace' }}>{fmt(grandTotal)}</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: grandActual > 0 ? '#4ade80' : '#484f58', fontFamily: 'monospace' }}>{grandActual > 0 ? fmt(grandActual) : '—'}</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: grandVariance > 0 ? '#f87171' : '#4ade80', fontFamily: 'monospace' }}>{grandActual > 0 ? (grandVariance > 0 ? '+' : '') + fmt(grandVariance) : '—'}</span>
              <span style={{ fontSize: 11, color: grandVariance > 0 ? '#f87171' : '#4ade80', fontFamily: 'monospace' }}>{grandActual > 0 && grandTotal > 0 ? (grandVariance > 0 ? '+' : '') + ((grandVariance / grandTotal) * 100).toFixed(1) + '%' : '—'}</span>
            </div>
          </div>
        )}

        {/* Footer */}
        {!loading && (
          <div style={{ marginTop: 24, paddingTop: 12, borderTop: '1px solid #21262d', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ fontSize: 10, color: '#30363d' }}>CPOS · {project?.project_code} · BOQ Module</div>
            <div style={{ fontSize: 10, color: '#30363d' }}>{new Date().toLocaleDateString()}</div>
          </div>
        )}
      </div>
    </div>
  )
}

// ── BOQ ROW COMPONENT ────────────────────────────────────────
function BOQRow({ item, fmt, fmtNum, calcEstimated, indent }: {
  item: SowItem
  fmt: (n: number) => string
  fmtNum: (n: number | undefined) => string
  calcEstimated: (item: SowItem) => number
  indent: number
}) {
  const est = item.estimated_cost || calcEstimated(item)
  const netQty = item.net_qty ?? (item.quantity ? item.quantity * (1 + (item.waste_pct || 0) / 100) : undefined)
  const variance = item.actual_cost && est ? item.actual_cost - est : null

  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '70px 1fr 55px 75px 60px 75px 95px 100px 100px',
      gap: 8, padding: '6px 12px',
      borderBottom: '1px solid #161b22',
      background: 'transparent',
    }}>
      <span style={{ fontFamily: 'monospace', fontSize: 10, color: '#484f58' }}>{item.sow_number}</span>
      <div>
        <div style={{ fontSize: 11, color: '#8b949e' }}>{item.sub_item_l3 || item.particulars}</div>
        {item.particulars && item.sub_item_l3 && <div style={{ fontSize: 10, color: '#484f58', marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const, maxWidth: 300 }}>{item.particulars}</div>}
      </div>
      <span style={{ fontSize: 11, color: '#c9d1d9', fontFamily: 'monospace' }}>{item.unit || '—'}</span>
      <span style={{ fontSize: 11, color: '#c9d1d9', fontFamily: 'monospace', textAlign: 'right' as const }}>{fmtNum(item.quantity)}</span>
      <span style={{ fontSize: 11, color: item.waste_pct ? '#f59e0b' : '#484f58', fontFamily: 'monospace', textAlign: 'right' as const }}>{item.waste_pct ? item.waste_pct + '%' : '—'}</span>
      <span style={{ fontSize: 11, color: '#c9d1d9', fontFamily: 'monospace', textAlign: 'right' as const }}>{fmtNum(netQty)}</span>
      <span style={{ fontSize: 11, color: '#c9d1d9', fontFamily: 'monospace', textAlign: 'right' as const }}>{item.unit_rate ? fmtNum(item.unit_rate) : '—'}</span>
      <span style={{ fontSize: 11, color: est > 0 ? '#f59e0b' : '#484f58', fontFamily: 'monospace', textAlign: 'right' as const, fontWeight: est > 0 ? 600 : 400 }}>{est > 0 ? fmt(est) : '—'}</span>
      <span style={{ fontSize: 11, color: item.actual_cost ? (variance && variance > 0 ? '#f87171' : '#4ade80') : '#484f58', fontFamily: 'monospace', textAlign: 'right' as const }}>{item.actual_cost ? fmt(item.actual_cost) : '—'}</span>
    </div>
  )
}
