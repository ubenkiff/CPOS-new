'use client'
import { useEffect, useState, useMemo, useRef } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { supabase } from '../../../supabase'
import { canAccessProject, PUBLIC_VIEWONLY_PROJECT_ID } from '../../../../lib/access'
import * as XLSX from 'xlsx'
import { useTheme } from '../../../../lib/theme'
import ThemeSelector from '../../../../components/ThemeSelector'
import { parseXERToSow, parseMSPXmlToSow, parseCSVToSow, ParsedSowItem } from '../../../../lib/schedulerParser'

// ── Types ────────────────────────────────────────────────────────────────────

type Project = {
  projectid: string; project_name: string; project_code: string
  client_name: string; location: string; status: string
  start_date: string; end_date: string; budget: number; currency: string
}

type SowItem = {
  sow_id: string
  projectid: string
  sow_number: string
  hierarchy_level: number
  scope_l1?: string
  item_l2?: string
  sub_item_l3?: string
  particulars?: string
  assigned_to?: string
  // Schedule
  baseline_start?: string; baseline_days?: number; baseline_end?: string
  planned_start?: string;  planned_days?: number;  planned_end?: string
  actual_start?: string;   actual_days?: number;   actual_end?: string
  percent_complete?: number
  schedule_variance?: number
  // BOQ
  unit?: string; quantity?: number; waste_pct?: number
  net_qty?: number; unit_rate?: number; boq_amount?: number
  // Cost
  estimated_cost?: number; actual_cost?: number
  cost_variance?: number; cost_var_pct?: number
  // Resources
  plant?: string; site_equipment?: string; manpower?: string
  // Status
  risk_level?: string; status?: string
  dep_on?: string; dep_type?: string
  is_critical_path?: boolean; notes?: string
  parent_id?: string
  created_at?: string
}

// ── Constants ────────────────────────────────────────────────────────────────

const STATUS_OPTS = ['Not Started', 'In Progress', 'Complete', 'On Hold', 'Delayed']
const RISK_OPTS   = ['Low', 'Medium', 'High', 'Critical']
const DEP_OPTS    = ['FS', 'SF', 'SS', 'FF']
const UNIT_OPTS   = ['m', 'm²', 'm³', 'No', 'kg', 'L', 'hr', 'sum', 'ton']

const statusColor: Record<string, { bg: string; text: string }> = {
  'Complete':    { bg: '#052e16', text: '#4ade80' },
  'In Progress': { bg: '#2d1f05', text: '#f59e0b' },
  'Not Started': { bg: '#161b22', text: '#6e7681' },
  'On Hold':     { bg: '#1c1917', text: '#78716c' },
  'Delayed':     { bg: '#2d0f0f', text: '#f87171' },
}
const riskColor: Record<string, string> = {
  Low: '#4ade80', Medium: '#f59e0b', High: '#f87171', Critical: '#c084fc',
}
const projectStatusColor: Record<string, { bg: string; text: string; dot: string }> = {
  Active:    { bg: '#052e16', text: '#4ade80', dot: '#4ade80' },
  Planning:  { bg: '#1e1b4b', text: '#818cf8', dot: '#818cf8' },
  'On Hold': { bg: '#2d1f05', text: '#f59e0b', dot: '#f59e0b' },
  Closed:    { bg: '#1c1917', text: '#78716c', dot: '#78716c' },
}

// ── Empty form ───────────────────────────────────────────────────────────────

function emptyForm(): Partial<SowItem> {
  return {
    sow_number: '', hierarchy_level: 3,
    scope_l1: '', item_l2: '', sub_item_l3: '', particulars: '', assigned_to: '',
    baseline_start: '', baseline_days: undefined, planned_start: '', planned_days: undefined,
    actual_start: '', actual_days: undefined, percent_complete: 0,
    unit: 'm²', quantity: undefined, waste_pct: 0, unit_rate: undefined,
    estimated_cost: undefined, actual_cost: undefined,
    plant: '', site_equipment: '', manpower: '',
    risk_level: 'Low', status: 'Not Started',
    dep_on: '', dep_type: 'FS', is_critical_path: false, notes: '',
  }
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function addDays(dateStr: string, days: number): string {
  if (!dateStr || !days) return ''
  const d = new Date(dateStr)
  d.setDate(d.getDate() + days)
  return d.toISOString().split('T')[0]
}

function fmt(n: number, currency: string) {
  if (n >= 1_000_000) return `${currency} ${(n / 1_000_000).toFixed(2)}M`
  if (n >= 1_000)     return `${currency} ${(n / 1_000).toFixed(0)}K`
  return `${currency} ${n.toLocaleString()}`
}

function normalizeSowStatus(raw: unknown): string | undefined {
  const s = String(raw ?? '').trim()
  if (!s) return undefined
  const v = s.toLowerCase()
  if (v === 'complete' || v === 'completed' || v === 'done' || v === 'finished') return 'Complete'
  if (v.includes('progress') || v === 'started' || v === 'ongoing') return 'In Progress'
  if (v.includes('hold') || v.includes('paused')) return 'On Hold'
  if (v.includes('delay') || v.includes('behind') || v.includes('late') || v.includes('overdue') || v.includes('block') || v.includes('waiting')) return 'Delayed'
  if (v.includes('not started') || v === 'open' || v === 'todo' || v === 'new') return 'Not Started'
  return STATUS_OPTS.find(opt => opt.toLowerCase() === v) ?? undefined
}

function normalizeRisk(raw: unknown): string | undefined {
  const s = String(raw ?? '').trim()
  if (!s) return undefined
  const v = s.toLowerCase()
  if (v.startsWith('low')) return 'Low'
  if (v.startsWith('med')) return 'Medium'
  if (v.startsWith('high')) return 'High'
  if (v.startsWith('crit')) return 'Critical'
  return RISK_OPTS.find(opt => opt.toLowerCase() === v) ?? undefined
}

function normalizeDepType(raw: unknown): string | undefined {
  const s = String(raw ?? '').trim()
  if (!s) return undefined
  const v = s.toUpperCase()
  return DEP_OPTS.includes(v) ? v : undefined
}

// ── Main Component ───────────────────────────────────────────────────────────

export default function SowPage() {
  const params   = useParams()
  const router   = useRouter()
  const { theme, setTheme, isDark } = useTheme()
  const projectid = params.projectid as string

  const importInputRef = useRef<HTMLInputElement>(null)

  const isPublicViewOnly = projectid === PUBLIC_VIEWONLY_PROJECT_ID

  const [project,  setProject]  = useState<Project | null>(null)
  const [items,    setItems]    = useState<SowItem[]>([])
  const [loading,  setLoading]  = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editItem, setEditItem] = useState<SowItem | null>(null)
  const [form,     setForm]     = useState<Partial<SowItem>>(emptyForm())
  const [saving,   setSaving]   = useState(false)
  const [error,    setError]    = useState('')
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({})
  const [filterStatus, setFilterStatus] = useState<string>('All')
  const [filterRisk,   setFilterRisk]   = useState<string>('All')
  const [activeSection, setActiveSection] = useState(0)
  const [importing, setImporting] = useState(false)
  const [importMsg, setImportMsg] = useState('')

  // ── Primavera & MS Project integration state hooks ────────────────────────
  const [showIntegration, setShowIntegration] = useState(false)
  const [integrationFile, setIntegrationFile] = useState<File | null>(null)
  const [integrationMode, setIntegrationMode] = useState<'auto' | 'xer' | 'msp' | 'csv'>('auto')
  const [parsedItems, setParsedItems] = useState<ParsedSowItem[]>([])
  const [integrationError, setIntegrationError] = useState('')
  const [integrationLogs, setIntegrationLogs] = useState<string[]>([])

  function getRowHeaders(ws: XLSX.WorkSheet, rowIndex: number, range: XLSX.Range): Set<string> {
    const headers = new Set<string>()
    for (let c = range.s.c; c <= range.e.c; c++) {
      const addr = XLSX.utils.encode_cell({ r: rowIndex, c })
      const cell = ws[addr]
      const v = cell?.v
      if (typeof v === 'string') {
        const s = v.trim()
        if (s) headers.add(s)
      }
    }
    return headers
  }

  async function handleFileSelected(file: File) {
    setIntegrationFile(file)
    setIntegrationError('')
    const logs = [`Loading file: ${file.name} (${(file.size / 1024).toFixed(1)} KB)...`]
    setIntegrationLogs(logs)
    setParsedItems([])

    try {
      const extension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase()
      
      let mode = integrationMode
      if (mode === 'auto') {
        if (extension === '.xer') mode = 'xer'
        else if (extension === '.xml') mode = 'msp'
        else if (extension === '.csv' || extension === '.xlsx' || extension === '.xlsm' || extension === '.xls') mode = 'csv'
        else {
          throw new Error('Unsupported file extension. Please select .xer, .xml, .csv, or .xlsx')
        }
        logs.push(`Auto-detected format: ${mode.toUpperCase()}`)
      }

      if (mode === 'xer') {
        const text = await file.text()
        logs.push('Parsing Primavera P6 XER table records...')
        const res = parseXERToSow(text)
        logs.push(`Successfully parsed ${res.length} hierarchical and activity lines!`)
        setParsedItems(res)
      } else if (mode === 'msp') {
        const text = await file.text()
        logs.push('Parsing Microsoft Project XML hierarchy schema...')
        const res = parseMSPXmlToSow(text)
        logs.push(`Successfully parsed ${res.length} scheduled activity entries!`)
        setParsedItems(res)
      } else {
        logs.push('Reading spreadsheet file contents...')
        if (extension === '.csv') {
          const text = await file.text()
          const wb = XLSX.read(text, { type: 'string' })
          const wsName = wb.SheetNames[0]
          const ws = wb.Sheets[wsName]
          const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(ws, { defval: '' })
          logs.push(`Read ${rows.length} records. Extracting schema...`)
          
          const headerSet = new Set(Object.keys(rows[0] || {}))
          const res = parseCSVToSow(rows, headerSet)
          logs.push(`Successfully mapped ${res.length} SOW activity blocks!`)
          setParsedItems(res)
        } else {
          const ab = await file.arrayBuffer()
          const wb = XLSX.read(ab, { type: 'array' })
          const sheetName = wb.SheetNames.find(n => n.trim().toLowerCase() === 'master sow') || wb.SheetNames[0]
          logs.push(`Loading worksheet: "${sheetName}"`)
          const ws = wb.Sheets[sheetName]
          
          let rangeStart = 0
          let headers: string[] = []
          
          const ref = ws['!ref']
          if (ref) {
            const decRange = XLSX.utils.decode_range(ref)
            const row0Headers = getRowHeaders(ws, 0, decRange)
            const row3Headers = getRowHeaders(ws, 3, decRange)
            if (row3Headers.has('SOW #') || row3Headers.has('Serial')) {
              rangeStart = 3
              headers = Array.from(row3Headers)
              logs.push('Auto-detected starting headers on Row 4.')
            } else {
              headers = Array.from(row0Headers)
              logs.push('Auto-detected starting headers on Row 1.')
            }
          }
          
          const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(ws, {
            range: rangeStart,
            defval: '',
          })
          
          const res = parseCSVToSow(rows, new Set(headers))
          logs.push(`Successfully mapped ${res.length} hierarchical schedulers!`)
          setParsedItems(res)
        }
      }
      setIntegrationLogs([...logs])
    } catch (e) {
      setIntegrationError(e instanceof Error ? e.message : 'Error experienced parsing scheduling file.')
      logs.push(`PARSER ERROR: ${e instanceof Error ? e.message : 'Error experienced parsing file.'}`)
      setIntegrationLogs([...logs])
    }
  }

  async function handleImportIntegration() {
    if (parsedItems.length === 0) return
    if (isPublicViewOnly) {
      setIntegrationError('This is a public read-only demo project. Import is disabled.')
      return
    }
    
    setIntegrationError('')
    setImporting(true)
    setImportMsg('Deploying integration schedule to database...')
    const logs = [...integrationLogs, 'Purging existing scheduling items...']
    setIntegrationLogs(logs)

    try {
      const { error: delErr } = await supabase.from('sow_items').delete().eq('projectid', projectid)
      if (delErr) throw new Error(delErr.message)

      logs.push(`Writing ${parsedItems.length} parsed items to database...`)
      setIntegrationLogs([...logs])
      
      const BATCH = 250
      for (let i = 0; i < parsedItems.length; i += BATCH) {
        const slice = parsedItems.slice(i, i + BATCH)
        const payload = slice.map(item => ({
          ...item,
          projectid
        }))
        const { error: insErr } = await supabase.from('sow_items').insert(payload)
        if (insErr) throw new Error(insErr.message)
        
        logs.push(`Wrote database entities ${Math.min(parsedItems.length, i + BATCH)} / ${parsedItems.length}...`)
        setIntegrationLogs([...logs])
      }

      logs.push('Integration successfully deployed!')
      setIntegrationLogs([...logs])
      setImportMsg('')
      setShowIntegration(false)
      setParsedItems([])
      setIntegrationFile(null)
      await load()
    } catch (e) {
      setIntegrationError(e instanceof Error ? e.message : 'Database insertion failed.')
      setImportMsg('')
      logs.push(`DB ERROR: ${e instanceof Error ? e.message : 'Database insertion failed.'}`)
      setIntegrationLogs([...logs])
    } finally {
      setImporting(false)
    }
  }

  // ── Derived form values ──────────────────────────────────────────────────
  const netQty    = (form.quantity || 0) * (1 + (form.waste_pct || 0) / 100)
  const boqAmount = netQty * (form.unit_rate || 0)
  const costVar   = (form.estimated_cost || 0) - (form.actual_cost || 0)
  const costVarPct = form.estimated_cost ? (costVar / form.estimated_cost) * 100 : 0
  const baselineEnd = addDays(form.baseline_start || '', form.baseline_days || 0)
  const plannedEnd  = addDays(form.planned_start  || '', form.planned_days  || 0)
  const actualEnd   = addDays(form.actual_start   || '', form.actual_days   || 0)
  const schedVar = (form.baseline_days && form.planned_days)
    ? (form.planned_days - form.baseline_days)
    : 0

  // ── Data fetching ────────────────────────────────────────────────────────
  useEffect(() => { if (projectid) load() }, [projectid])

  async function load() {
    setLoading(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user && !isPublicViewOnly) {
      router.push(`/login?next=/dashboard/${projectid}/sow`)
      return
    }

    const [pRes, sRes] = await Promise.all([
      supabase.from('projects').select('*').eq('projectid', projectid).single(),
      supabase.from('sow_items').select('*').eq('projectid', projectid).order('sow_number'),
    ])

    if (user && pRes.data) {
      const canAccess = canAccessProject({
        user,
        projectid,
        projectOwnerId: (pRes.data as any).user_id,
      })
      if (!canAccess) {
        router.push('/pricing')
        return
      }
    }

    if (pRes.data) setProject(pRes.data)
    if (sRes.data) setItems(sRes.data)
    setLoading(false)
  }

  // ── Summary stats ────────────────────────────────────────────────────────
  const l3 = useMemo(() => items.filter(i => i.hierarchy_level === 3), [items])
  const totalBoq      = useMemo(() => l3.reduce((s, i) => s + (i.boq_amount || 0), 0), [l3])
  const totalEstCost  = useMemo(() => l3.reduce((s, i) => s + (i.estimated_cost || 0), 0), [l3])
  const totalActCost  = useMemo(() => l3.reduce((s, i) => s + (i.actual_cost || 0), 0), [l3])
  const criticalCount = useMemo(() => l3.filter(i => i.is_critical_path).length, [l3])
  const statusCounts  = useMemo(() => {
    const c: Record<string, number> = {}
    l3.forEach(i => { const s = i.status || 'Not Started'; c[s] = (c[s] || 0) + 1 })
    return c
  }, [l3])
  const avgProgress = useMemo(() => l3.length ? Math.round(l3.reduce((s, i) => s + (i.percent_complete || 0), 0) / l3.length) : 0, [l3])

  // ── Tree structure ───────────────────────────────────────────────────────
  const l1Items = useMemo(() => items.filter(i => i.hierarchy_level === 1), [items])
  const l2Items = useMemo(() => items.filter(i => i.hierarchy_level === 2), [items])

  function getL2ForL1(l1: SowItem) {
    const prefix = l1.sow_number + '.'
    return l2Items.filter(i => i.sow_number.startsWith(prefix) && i.sow_number.split('.').length === 2)
  }
  function getL3ForL2(l2: SowItem) {
    const prefix = l2.sow_number + '.'
    return l3.filter(i => {
      if (!i.sow_number.startsWith(prefix)) return false
      if (filterStatus !== 'All' && i.status !== filterStatus) return false
      if (filterRisk   !== 'All' && i.risk_level !== filterRisk) return false
      return true
    })
  }

  // ── Form helpers ─────────────────────────────────────────────────────────
  function openNew() {
    if (isPublicViewOnly) {
      setError('This is a public read-only demo project. Editing is disabled.')
      return
    }
    setEditItem(null)
    setForm(emptyForm())
    setActiveSection(0)
    setError('')
    setShowForm(true)
  }
  function openEdit(item: SowItem) {
    if (isPublicViewOnly) {
      setError('This is a public read-only demo project. Editing is disabled.')
      return
    }
    setEditItem(item)
    setForm({ ...item })
    setActiveSection(0)
    setError('')
    setShowForm(true)
  }
  function closeForm() { setShowForm(false); setEditItem(null); setError('') }

  function setF(patch: Partial<SowItem>) { setForm(f => ({ ...f, ...patch })) }

  function parseExcelDate(v: unknown): string | undefined {
    if (v === null || v === undefined || v === '') return undefined
    if (typeof v === 'string') {
      const trimmed = v.trim()
      if (!trimmed) return undefined
      const d = new Date(trimmed)
      if (!isNaN(d.getTime())) return d.toISOString().split('T')[0]
      return undefined
    }
    if (typeof v === 'number') {
      const d = XLSX.SSF.parse_date_code(v)
      if (!d) return undefined
      const dt = new Date(Date.UTC(d.y, d.m - 1, d.d))
      return dt.toISOString().split('T')[0]
    }
    return undefined
  }

  function num(v: unknown): number | undefined {
    if (v === null || v === undefined || v === '') return undefined
    const n = typeof v === 'number' ? v : Number(String(v).replace(/,/g, ''))
    return Number.isFinite(n) ? n : undefined
  }

  function pct(v: unknown): number | undefined {
    const n = num(typeof v === 'string' ? v.replace(/%/g, '') : v)
    if (n === undefined) return undefined
    const normalized = n > 0 && n <= 1 ? n * 100 : n
    return Math.max(0, Math.min(100, normalized))
  }

  function pick(r: Record<string, unknown>, keys: string[]): unknown {
    for (const k of keys) {
      const v = r[k]
      if (v !== undefined && v !== null && v !== '') return v
    }
    return undefined
  }

  function getHeaderSet(ws: XLSX.WorkSheet): Set<string> {
    const range = ws['!ref'] ? XLSX.utils.decode_range(ws['!ref']) : null
    const headers = new Set<string>()
    if (!range) return headers

    const headerRow = 3
    for (let c = range.s.c; c <= range.e.c; c++) {
      const addr = XLSX.utils.encode_cell({ r: headerRow, c })
      const cell = (ws as any)[addr]
      const v = cell?.v
      if (typeof v === 'string') {
        const s = v.trim()
        if (s) headers.add(s)
      }
    }
    return headers
  }

  function resolveHeader(headers: Set<string>, keys: string[]): string | undefined {
    return keys.find(k => headers.has(k))
  }

  function validateTemplateHeaders(headers: Set<string>): string[] {
    const missing: string[] = []

    const requiredGroups: Array<{ label: string; keys: string[] }> = [
      { label: 'SOW number (Serial / SOW #)', keys: ['Serial', 'SOW #'] },
      { label: 'Scope (Scope / Scope (L1))', keys: ['Scope', 'Scope (L1)'] },
      { label: 'Item (Item / Item (L2))', keys: ['Item', 'Item (L2)'] },
      { label: 'Sub Item (Sub Item / Sub Item (L3))', keys: ['Sub Item', 'Sub Item (L3)'] },
    ]

    for (const g of requiredGroups) {
      if (!resolveHeader(headers, g.keys)) missing.push(g.label)
    }

    return missing
  }

  async function handleImportTemplate(file: File) {
    if (isPublicViewOnly) {
      setError('This is a public read-only demo project. Import is disabled.')
      return
    }
    setError('')
    setImportMsg('Reading Excel...')
    setImporting(true)

    try {
      const ab = await file.arrayBuffer()
      const wb = XLSX.read(ab, { type: 'array' })
      const sheetName = wb.SheetNames.find(n => n.trim().toLowerCase() === 'master sow')
      if (!sheetName) {
        throw new Error('Sheet "MASTER SOW" not found in the workbook.')
      }
      const ws = wb.Sheets[sheetName]

      const headerSet = getHeaderSet(ws)
      const missing = validateTemplateHeaders(headerSet)
      if (missing.length) {
        const found = Array.from(headerSet).slice(0, 40).join(', ')
        throw new Error(`Template headers not recognized. Missing: ${missing.join(' | ')}. Found headers: ${found}`)
      }

      const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(ws, {
        range: 3,
        defval: '',
      })

      const mapped: Partial<SowItem>[] = rows
        .map((r) => {
          const sowNumber = String(pick(r, ['Serial', 'SOW #']) ?? '').trim()
          if (!sowNumber) return null
          if (sowNumber.toUpperCase() === 'TOTALS') return null

          const scope = String(pick(r, ['Scope', 'Scope (L1)']) ?? '').trim()
          const item = String(pick(r, ['Item', 'Item (L2)']) ?? '').trim()
          const subItem = String(pick(r, ['Sub Item', 'Sub Item (L3)']) ?? '').trim()
          const particulars = String(pick(r, ['Particulars', 'Particulars / Spec']) ?? '').trim()

          const hierarchyLevel = sowNumber.split('.').length as 1 | 2 | 3
          const hl: 1 | 2 | 3 = hierarchyLevel >= 3 ? 3 : hierarchyLevel === 2 ? 2 : 1

          const plannedStart = parseExcelDate(pick(r, ['Planned Start']))
          const plannedDays = num(pick(r, ['Planned Days']))
          const plannedEnd = parseExcelDate(pick(r, ['Planned Completion', 'Planned End']))
          const baselineStart = parseExcelDate(pick(r, ['Baseline Start']))
          const baselineDays = num(pick(r, ['Baseline Days']))
          const baselineEnd = parseExcelDate(pick(r, ['Baseline Completion', 'Baseline End']))
          const actualStart = parseExcelDate(pick(r, ['Actual Start']))
          const actualEnd = parseExcelDate(pick(r, ['Actual Completion', 'Actual End']))
          const actualDays = num(pick(r, ['Actual Days Taken', 'Actual Days']))

          const pctComplete = pct(pick(r, ['% Complete']))
          const critical = String(pick(r, ['Critical Path']) ?? '').trim().toLowerCase()

          const unit = String(pick(r, ['Unit']) ?? '').trim()
          const quantity = num(pick(r, ['Quantity']))
          const wastePct = num(pick(r, ['Waste %']))
          const unitRate = num(pick(r, ['Unit Rate']))
          const netQty = num(pick(r, ['Net Qty']))
          const boqAmount = num(pick(r, ['BOQ Amount']))

          const estCost = num(pick(r, ['Estimated Cost', 'Est. Cost']))
          const actCost = num(pick(r, ['Actual Cost']))
          const schedVar = num(pick(r, ['Variance (Planned vs. Baseline)', 'Schedule Var (d)']))
          const costVar = num(pick(r, ['Cost Variance']))

          const payload: Partial<SowItem> = {
            projectid,
            sow_number: sowNumber,
            hierarchy_level: hl,
            scope_l1: scope || undefined,
            item_l2: item || undefined,
            sub_item_l3: subItem || undefined,
            particulars: particulars || undefined,
            assigned_to: String(pick(r, ['Assigned To']) ?? '').trim() || undefined,
            planned_start: plannedStart,
            planned_days: plannedDays,
            planned_end: plannedEnd,
            baseline_start: baselineStart,
            baseline_days: baselineDays,
            baseline_end: baselineEnd,
            actual_start: actualStart,
            actual_days: actualDays,
            actual_end: actualEnd,
            percent_complete: pctComplete,
            schedule_variance: schedVar,
            is_critical_path: critical === 'yes' || critical === 'true' || critical === '1',
            unit: unit || undefined,
            quantity,
            waste_pct: wastePct,
            net_qty: netQty,
            unit_rate: unitRate,
            boq_amount: boqAmount,
            estimated_cost: estCost,
            actual_cost: actCost,
            cost_variance: costVar,
            risk_level: normalizeRisk(pick(r, ['Risk Level'])),
            status: normalizeSowStatus(pick(r, ['Status'])) ?? 'Not Started',
            dep_on: String(pick(r, ['Dependent On', 'Dep. On (SOW#)']) ?? '').trim() || undefined,
            dep_type: normalizeDepType(pick(r, ['Dependency Type', 'Dep. Type'])) ?? 'FS',
            notes: String(pick(r, ['Notes']) ?? '').trim() || undefined,
            plant: String(pick(r, ['Plant']) ?? '').trim() || undefined,
            site_equipment: String(pick(r, ['Site Equipment', 'Site Equip.']) ?? '').trim() || undefined,
            manpower: String(pick(r, ['Manpower', 'Resources']) ?? '').trim() || undefined,
          }

          Object.keys(payload).forEach(k => {
            if ((payload as any)[k] === '' || (payload as any)[k] === null || (payload as any)[k] === undefined) {
              delete (payload as any)[k]
            }
          })

          return payload
        })
        .filter(Boolean) as Partial<SowItem>[]

      if (mapped.length === 0) {
        throw new Error('No valid SOW rows found. Ensure the template uses the MASTER SOW sheet and contains a Serial column.')
      }

      setImportMsg('Clearing existing SOW items...')
      const { error: delErr } = await supabase.from('sow_items').delete().eq('projectid', projectid)
      if (delErr) throw new Error(delErr.message)

      setImportMsg(`Importing ${mapped.length} rows...`)

      const BATCH = 250
      for (let i = 0; i < mapped.length; i += BATCH) {
        const slice = mapped.slice(i, i + BATCH)
        const { error: insErr } = await supabase.from('sow_items').insert(slice)
        if (insErr) throw new Error(insErr.message)
        setImportMsg(`Imported ${Math.min(mapped.length, i + BATCH)} / ${mapped.length}...`)
      }

      setImportMsg('Import complete. Refreshing...')
      await load()
      setImportMsg('')
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Import failed')
    } finally {
      setImporting(false)
    }
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault()
    if (isPublicViewOnly) {
      setError('This is a public read-only demo project. Editing is disabled.')
      return
    }
    if (!form.sow_number) { setError('SOW Number is required.'); return }
    if (!form.hierarchy_level) { setError('Hierarchy level is required.'); return }
    setSaving(true); setError('')

    const payload: Partial<SowItem> = {
      ...form,
      projectid,
      net_qty:      form.hierarchy_level === 3 ? netQty    : undefined,
      boq_amount:   form.hierarchy_level === 3 ? boqAmount : undefined,
      cost_variance: form.hierarchy_level === 3 ? costVar   : undefined,
      cost_var_pct:  form.hierarchy_level === 3 ? costVarPct : undefined,
      baseline_end:  baselineEnd || undefined,
      planned_end:   plannedEnd  || undefined,
      actual_end:    actualEnd   || undefined,
      schedule_variance: schedVar || undefined,
    }
    // Remove undefined keys
    Object.keys(payload).forEach(k => { if ((payload as any)[k] === undefined) delete (payload as any)[k] })

    let err
    if (editItem) {
      const { error: e } = await supabase.from('sow_items').update(payload).eq('sow_id', editItem.sow_id)
      err = e
    } else {
      const { error: e } = await supabase.from('sow_items').insert([payload])
      err = e
    }
    if (err) { setError(err.message); setSaving(false); return }
    setSaving(false); closeForm(); load()
  }

  async function handleDelete(item: SowItem) {
    if (!confirm(`Delete SOW ${item.sow_number}? This cannot be undone.`)) return
    await supabase.from('sow_items').delete().eq('sow_id', item.sow_id)
    load()
  }

  function toggleCollapse(key: string) {
    setCollapsed(c => ({ ...c, [key]: !c[key] }))
  }

  // ── Loading / not found ──────────────────────────────────────────────────
  if (loading) return (
    <div style={{ background: isDark ? '#0a0c0e' : '#F8FAFC', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace', color: isDark ? '#484f58' : '#64748b', fontSize: 13 }}>
      Loading SOW...
    </div>
  )
  if (!project) return (
    <div style={{ background: isDark ? '#0a0c0e' : '#F8FAFC', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace', color: '#f87171', fontSize: 13 }}>
      Project not found. <a href="/dashboard" style={{ color: '#f59e0b', marginLeft: 8 }}>← Back</a>
    </div>
  )

  const sc = projectStatusColor[project.status] || projectStatusColor['Planning']
  const hText = isDark ? '#e6edf3' : '#0f172a'
  const textCol = isDark ? '#c9d1d9' : '#1e293b'
  const subText = isDark ? '#484f58' : '#64748b'
  const accentBorder = isDark ? '#161b22' : '#cbd5e1'

  return (
    <div style={{ fontFamily: "'DM Mono','Courier New',monospace", background: isDark ? '#0a0c0e' : '#F8FAFC', minHeight: '100vh', color: isDark ? '#c9d1d9' : '#1e293b', backgroundImage: isDark ? 'linear-gradient(rgba(96,165,250,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(96,165,250,0.025) 1px,transparent 1px)' : 'linear-gradient(rgba(0,0,0,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.015) 1px,transparent 1px)', backgroundSize: '32px 32px' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Barlow+Condensed:wght@500;700;800&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        .card{background:${isDark ? '#0d1117' : '#ffffff'};border:1px solid ${isDark ? '#21262d' : '#cbd5e1'};border-radius:8px;padding:18px;}
        .tag{display:inline-flex;align-items:center;gap:5px;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:500;}
        .btn{padding:7px 14px;border-radius:6px;border:1px solid ${isDark ? '#30363d' : '#cbd5e1'};background:${isDark ? '#161b22' : '#ffffff'};color:${isDark ? '#c9d1d9' : '#475569'};cursor:pointer;font-family:inherit;font-size:12px;transition:all 0.15s;}
        .btn:hover{border-color:#f59e0b;color:#f59e0b;}
        .btn-primary{background:#f59e0b;border-color:#f59e0b;color:#0a0c0e;font-weight:700;}
        .btn-primary:hover{background:#fbbf24;color:#0a0c0e;}
        .btn-danger{border-color:#f8717133;color:#f87171;}
        .btn-danger:hover{border-color:#f87171;background:#2d0f0f;}
        .fi{width:100%;background:${isDark ? '#0a0c0e' : '#ffffff'};border:1px solid ${isDark ? '#21262d' : '#cbd5e1'};border-radius:5px;color:${isDark ? '#c9d1d9' : '#1e293b'};font-family:inherit;font-size:12px;padding:8px 10px;outline:none;transition:border-color 0.15s;}
        .fi:focus{border-color:#f59e0b;}
        .fi option{background:${isDark ? '#0d1117' : '#ffffff'};}
        .fi::placeholder{color:${isDark ? '#484f58' : '#94a3b8'};}
        .sow-l1{background:${isDark ? '#0d1117' : '#ffffff'};border:1px solid ${isDark ? '#21262d' : '#cbd5e1'};border-radius:8px;margin-bottom:10px;overflow:hidden;}
        .sow-l1-header{padding:12px 16px;display:flex;align-items:center;gap:10px;cursor:pointer;user-select:none;}
        .sow-l1-header:hover{background:${isDark ? '#161b22' : '#f8fafc'};}
        .sow-l2{border-top:1px solid ${isDark ? '#161b22' : '#e2e8f0'};padding:0 0 0 24px;}
        .sow-l2-header{padding:10px 16px;display:flex;align-items:center;gap:10px;cursor:pointer;user-select:none;border-bottom:1px solid ${isDark ? '#161b22' : '#e2e8f0'};}
        .sow-l2-header:hover{background:${isDark ? '#0d1117' : '#f1f5f9'};}
        .sow-l3-row{display:grid;grid-template-columns:90px 1fr 80px 80px 90px 90px 80px 60px 80px;gap:8px;align-items:center;padding:9px 16px;border-bottom:1px solid ${isDark ? '#0d1117' : '#f1f5f9'};font-size:11px;}
        .sow-l3-row:hover{background:${isDark ? '#0d1117' : '#f8fafc'};}
        .sow-l3-row:last-child{border-bottom:none;}
        .section-tab{padding:8px 14px;cursor:pointer;font-size:11px;font-weight:600;letter-spacing:0.05em;border-bottom:2px solid transparent;transition:all 0.15s;color:#6e7681;white-space:nowrap;}
        .section-tab.active{color:#f59e0b;border-bottom-color:#f59e0b;}
        .section-tab:hover{color:${isDark ? '#c9d1d9' : '#1e293b'};}
        .calc-field{background:${isDark ? '#0a0c0e' : '#f1f5f9'};border:1px solid ${isDark ? '#161b22' : '#cbd5e1'};border-radius:5px;color:#f59e0b;font-family:inherit;font-size:12px;padding:8px 10px;}
        .form-label{font-size:10px;color:${isDark ? '#484f58' : '#64748b'};letter-spacing:0.06em;margin-bottom:5px;}
        .form-row{display:grid;gap:12px;margin-bottom:14px;}
        @keyframes slideIn{from{transform:translateX(100%);opacity:0;}to{transform:translateX(0);opacity:1;}}
        .slide-in{animation:slideIn 0.2s ease forwards;}
        @keyframes fadeIn{from{opacity:0;transform:translateY(4px);}to{opacity:1;transform:translateY(0);}}
        .fade-in{animation:fadeIn 0.2s ease forwards;}
        .progress-bar{height:4px;background:${isDark ? '#161b22' : '#e2e8f0'};border-radius:2px;overflow:hidden;}
        .progress-fill{height:100%;border-radius:2px;transition:width 0.4s ease;}
        ::-webkit-scrollbar{width:6px;height:6px;}
        ::-webkit-scrollbar-track{background:${isDark ? '#0a0c0e' : '#f1f5f9'};}
        ::-webkit-scrollbar-thumb{background:${isDark ? '#21262d' : '#94a3b8'};border-radius:3px;}

        @media (max-width: 640px) {
          .sow-topbar { padding: 0 12px !important; height: auto !important; padding-top: 10px !important; padding-bottom: 10px !important; flex-wrap: wrap !important; gap: 10px !important; }
          .sow-topbar-left { flex-wrap: wrap !important; gap: 10px !important; }
          .sow-topbar-right { width: 100% !important; justify-content: flex-start !important; flex-wrap: wrap !important; }
          .sow-kpis { padding: 12px !important; gap: 14px !important; }
          .sow-status { padding: 10px 12px !important; }
          .sow-content { padding: 12px !important; padding-right: 12px !important; overflow-x: auto !important; }
          .sow-cols { min-width: 860px !important; }
          .sow-l3-row { min-width: 860px !important; }
          .sow-form { width: 100vw !important; max-width: 100vw !important; }
        }
      `}</style>

      {/* ── TOP BAR ── */}
      <div className="sow-topbar" style={{ background: isDark ? '#0d1117' : '#ffffff', borderBottom: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1'), padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56, position: 'sticky', top: 0, zIndex: 20 }}>
        <div className="sow-topbar-left" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <button className="btn" onClick={() => router.push(`/dashboard/${projectid}`)} style={{ fontSize: '11px', padding: '5px 10px' }}>← Dashboard</button>
          <div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 18, color: isDark ? '#e6edf3' : '#0f172a' }}>{project.project_name}</div>
            <div style={{ fontSize: 11, color: isDark ? '#484f58' : '#64748b' }}>{project.project_code} · Scope of Work</div>
          </div>
          <div className="tag" style={{ background: sc.bg, color: sc.text }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: sc.dot }} />{project.status}
          </div>
          {isPublicViewOnly && (
            <div className="tag" style={{ background: '#2d1f05', color: '#f59e0b' }}>
              READ-ONLY DEMO
            </div>
          )}
        </div>
        <div className="sow-topbar-right" style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <ThemeSelector compact />
          <a href={`/dashboard/${projectid}/boq`} style={{ padding: '5px 12px', fontSize: 11, fontWeight: 700, color: '#BA7517', background: isDark ? '#161b22' : '#fff3cd', border: '1px solid ' + (isDark ? '#30363d' : '#ffe18a'), borderRadius: '6px', textDecoration: 'none' }}>BOQ</a>
          <a href={`/dashboard/${projectid}/gantt`} style={{ padding: '5px 12px', fontSize: 11, fontWeight: 700, color: isDark ? '#4ade80' : '#15803d', background: isDark ? '#161b22' : '#dcfce7', border: '1px solid ' + (isDark ? '#30363d' : '#bbf7d0'), borderRadius: '6px', textDecoration: 'none' }}>Gantt</a>
          <button
            className="btn"
            onClick={() => {
              if (isPublicViewOnly) {
                setError('This is a public read-only demo project. Integration is disabled.')
                return
              }
              setShowIntegration(true)
            }}
            disabled={isPublicViewOnly || importing}
            style={{ fontSize: '12px', opacity: isPublicViewOnly || importing ? 0.5 : 1, border: '1px solid #BA7517', color: '#BA7517', cursor: isPublicViewOnly || importing ? 'not-allowed' : 'pointer' }}
          >
            📊 Scheduler Integration (P6 / MSP / CSV)
          </button>
          <button
            className="btn btn-primary"
            onClick={openNew}
            disabled={isPublicViewOnly}
            style={{ fontSize: '12px', opacity: isPublicViewOnly ? 0.5 : 1, cursor: isPublicViewOnly ? 'not-allowed' : 'pointer' }}
          >
            + Add SOW Item
          </button>
          <input
            ref={importInputRef}
            type="file"
            accept=".xlsx,.xlsm,.xls,.csv"
            style={{ display: 'none' }}
            onChange={(e) => {
              const f = e.target.files?.[0]
              e.currentTarget.value = ''
              if (!f) return
              void handleImportTemplate(f)
            }}
          />
        </div>
      </div>

      {importMsg && (
        <div style={{ padding: '10px 24px', borderBottom: '1px solid #161b22', color: '#f59e0b', fontSize: 11 }}>
          {importMsg}
        </div>
      )}

      {/* ── SUMMARY KPI BAR ── */}
      <div className="sow-kpis" style={{ background: '#0d1117', borderBottom: '1px solid #21262d', padding: '14px 24px', display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
        {[
          { label: 'TOTAL BOQ',    value: fmt(totalBoq, project.currency),     color: '#f59e0b' },
          { label: 'EST. COST',    value: fmt(totalEstCost, project.currency),  color: '#60a5fa' },
          { label: 'ACTUAL COST', value: fmt(totalActCost, project.currency),  color: '#4ade80' },
          { label: 'AVG PROGRESS', value: `${avgProgress}%`,                   color: '#c084fc' },
          { label: 'CRITICAL PATH', value: `${criticalCount} items`,           color: '#f87171' },
          { label: 'LINE ITEMS',   value: `${l3.length}`,                      color: '#6e7681' },
        ].map(k => (
          <div key={k.label} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span style={{ fontSize: 9, color: '#484f58', letterSpacing: '0.1em' }}>{k.label}</span>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 18, color: k.color }}>{k.value}</span>
          </div>
        ))}
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 8, alignItems: 'center' }}>
          <select className="fi" value={filterStatus} onChange={e => setFilterStatus(e.target.value)} style={{ width: 130, fontSize: 11 }}>
            <option value="All">All Statuses</option>
            {STATUS_OPTS.map(s => <option key={s}>{s}</option>)}
          </select>
          <select className="fi" value={filterRisk} onChange={e => setFilterRisk(e.target.value)} style={{ width: 120, fontSize: 11 }}>
            <option value="All">All Risks</option>
            {RISK_OPTS.map(r => <option key={r}>{r}</option>)}
          </select>
        </div>
      </div>

      {/* ── STATUS PILLS ── */}
      <div className="sow-status" style={{ padding: '10px 24px', display: 'flex', gap: 8, flexWrap: 'wrap', borderBottom: '1px solid ' + accentBorder }}>
        {Object.entries(statusCounts).map(([s, n]) => {
          const c = statusColor[s] || { bg: isDark ? '#161b22' : '#f1f5f9', text: isDark ? '#6e7681' : '#64748b' }
          return <span key={s} className="tag" style={{ background: isDark ? c.bg : '#f1f5f9', color: isDark ? c.text : '#475569', border: isDark ? 'none' : '1px solid #cbd5e1' }}>{s} · {n}</span>
        })}
        {l3.length === 0 && <span style={{ fontSize: 11, color: subText }}>No line items yet — click + Add SOW Item to start.</span>}
      </div>

      {/* ── MAIN CONTENT ── */}
      <div style={{ padding: 24, paddingRight: showForm ? 520 : 24, transition: 'padding-right 0.2s ease' }} className="fade-in sow-content">

        {/* Column headers */}
        {l3.length > 0 && (
          <div className="sow-cols" style={{ display: 'grid', gridTemplateColumns: '90px 1fr 80px 80px 90px 90px 80px 60px 80px', gap: 8, padding: '6px 16px', marginBottom: 4 }}>
            {['SOW #','DESCRIPTION','STATUS','RISK','PLANNED','ACTUAL','% DONE','CP',''].map(h => (
              <span key={h} style={{ fontSize: 9, color: subText, letterSpacing: '0.08em' }}>{h}</span>
            ))}
          </div>
        )}

        {/* L1 → L2 → L3 tree */}
        {l1Items.length === 0 && l3.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 0', color: '#484f58' }}>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 22, marginBottom: 8 }}>NO SOW ITEMS YET</div>
            <div style={{ fontSize: 12, marginBottom: 20 }}>Start by adding an L1 scope section, then L2 groups, then L3 line items.</div>
            <button className="btn btn-primary" onClick={openNew}>+ Add First Item</button>
          </div>
        )}

        {l1Items.map(l1 => {
          const l2s = getL2ForL1(l1)
          const isL1Collapsed = collapsed[l1.sow_id]
          const l1L3s = l3.filter(i => i.sow_number.startsWith(l1.sow_number + '.'))
          const l1Progress = l1L3s.length ? Math.round(l1L3s.reduce((s, i) => s + (i.percent_complete || 0), 0) / l1L3s.length) : 0
          const l1Boq = l1L3s.reduce((s, i) => s + (i.boq_amount || 0), 0)

          return (
            <div key={l1.sow_id} className="sow-l1">
              {/* L1 Header */}
              <div className="sow-l1-header" onClick={() => toggleCollapse(l1.sow_id)}>
                <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 13, color: '#f59e0b', minWidth: 40 }}>{l1.sow_number}</span>
                <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 15, color: hText, flex: 1 }}>{l1.scope_l1}</span>
                <span style={{ fontSize: 10, color: subText }}>{l1L3s.length} items</span>
                {l1Boq > 0 && <span style={{ fontSize: 11, color: '#f59e0b' }}>{fmt(l1Boq, project.currency)}</span>}
                <div style={{ width: 80 }}>
                  <div className="progress-bar"><div className="progress-fill" style={{ width: `${l1Progress}%`, background: l1Progress === 100 ? '#4ade80' : '#f59e0b' }} /></div>
                  <span style={{ fontSize: 9, color: subText }}>{l1Progress}%</span>
                </div>
                <button className="btn" onClick={e => { e.stopPropagation(); openEdit(l1) }} style={{ fontSize: 10, padding: '3px 8px' }}>Edit</button>
                <button className="btn btn-danger" onClick={e => { e.stopPropagation(); handleDelete(l1) }} style={{ fontSize: 10, padding: '3px 8px' }}>✕</button>
                <span style={{ color: subText, fontSize: 12 }}>{isL1Collapsed ? '▶' : '▼'}</span>
              </div>

              {/* L2 groups */}
              {!isL1Collapsed && (
                <div className="sow-l2">
                  {l2s.map(l2 => {
                    const l3rows = getL3ForL2(l2)
                    const isL2Collapsed = collapsed[l2.sow_id]
                    const l2Progress = l3rows.length ? Math.round(l3rows.reduce((s, i) => s + (i.percent_complete || 0), 0) / l3rows.length) : 0
                    const l2Boq = l3rows.reduce((s, i) => s + (i.boq_amount || 0), 0)

                    return (
                      <div key={l2.sow_id}>
                        <div className="sow-l2-header" onClick={() => toggleCollapse(l2.sow_id)}>
                          <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 600, fontSize: 12, color: isDark ? '#60a5fa' : '#2563eb', minWidth: 50 }}>{l2.sow_number}</span>
                          <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 600, fontSize: 13, color: textCol, flex: 1 }}>{l2.item_l2}</span>
                          <span style={{ fontSize: 10, color: subText }}>{l3rows.length} items</span>
                          {l2Boq > 0 && <span style={{ fontSize: 11, color: isDark ? '#60a5fa' : '#2563eb' }}>{fmt(l2Boq, project.currency)}</span>}
                          <div style={{ width: 60 }}>
                            <div className="progress-bar"><div className="progress-fill" style={{ width: `${l2Progress}%`, background: isDark ? '#60a5fa' : '#2563eb' }} /></div>
                          </div>
                          <button className="btn" onClick={e => { e.stopPropagation(); openEdit(l2) }} style={{ fontSize: 10, padding: '3px 8px' }}>Edit</button>
                          <button className="btn btn-danger" onClick={e => { e.stopPropagation(); handleDelete(l2) }} style={{ fontSize: 10, padding: '3px 8px' }}>✕</button>
                          <span style={{ color: subText, fontSize: 12 }}>{isL2Collapsed ? '▶' : '▼'}</span>
                        </div>

                        {/* L3 rows */}
                        {!isL2Collapsed && l3rows.map(row => {
                          const sc2 = statusColor[row.status || 'Not Started'] || { bg: '#161b22', text: '#6e7681' }
                          const rc  = riskColor[row.risk_level || 'Low'] || '#6e7681'
                          const pct = row.percent_complete || 0
                          return (
                            <div key={row.sow_id} className="sow-l3-row">
                              <span style={{ color: isDark ? '#6e7681' : '#64748b', fontSize: 10 }}>{row.sow_number}</span>
                              <div>
                                <div style={{ color: textCol, fontSize: 11, marginBottom: 3 }}>{row.sub_item_l3}</div>
                                {row.particulars && <div style={{ color: subText, fontSize: 10, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 220 }}>{row.particulars}</div>}
                                <div className="progress-bar" style={{ marginTop: 4, width: '80%' }}>
                                  <div className="progress-fill" style={{ width: `${pct}%`, background: pct === 100 ? '#4ade80' : pct > 50 ? '#f59e0b' : isDark ? '#60a5fa' : '#2563eb' }} />
                                </div>
                              </div>
                              <span className="tag" style={{ background: isDark ? sc2.bg : '#f1f5f9', color: isDark ? sc2.text : '#475569', border: isDark ? 'none' : '1px solid #cbd5e1', fontSize: 10 }}>{row.status || 'Not Started'}</span>
                              <span style={{ color: rc, fontSize: 10 }}>{row.risk_level || '—'}</span>
                              <span style={{ color: isDark ? '#6e7681' : '#64748b', fontSize: 10 }}>{row.planned_start || '—'}</span>
                              <span style={{ color: isDark ? '#6e7681' : '#64748b', fontSize: 10 }}>{row.actual_start || '—'}</span>
                              <span style={{ color: pct === 100 ? '#4ade80' : textCol, fontWeight: 600 }}>{pct}%</span>
                              <span style={{ color: row.is_critical_path ? '#f87171' : subText, fontSize: 10 }}>{row.is_critical_path ? '⚑ YES' : 'No'}</span>
                              <div style={{ display: 'flex', gap: 4 }}>
                                <button className="btn" onClick={() => openEdit(row)} style={{ fontSize: 10, padding: '3px 7px' }}>Edit</button>
                                <button className="btn btn-danger" onClick={() => handleDelete(row)} style={{ fontSize: 10, padding: '3px 7px' }}>✕</button>
                              </div>
                            </div>
                          )
                        })}
                        {!isL2Collapsed && l3rows.length === 0 && (
                          <div style={{ padding: '12px 16px', fontSize: 11, color: '#484f58' }}>No L3 items under this group.</div>
                        )}
                      </div>
                    )
                  })}
                  {l2s.length === 0 && (
                    <div style={{ padding: '12px 16px', fontSize: 11, color: subText }}>No L2 groups under this section.</div>
                  )}
                </div>
              )}
            </div>
          )
        })}

        {/* Orphan L3 items (no L1/L2 parent) */}
        {l3.filter(i => {
          const parts = i.sow_number.split('.')
          if (parts.length < 3) return false
          const l1Num = parts[0]
          return !l1Items.find(l => l.sow_number === l1Num)
        }).map(row => {
          const sc2 = statusColor[row.status || 'Not Started'] || { bg: '#161b22', text: '#6e7681' }
          const rc  = riskColor[row.risk_level || 'Low'] || '#6e7681'
          const pct = row.percent_complete || 0
          return (
            <div key={row.sow_id} className="sow-l3-row" style={{ background: isDark ? '#0d1117' : '#ffffff', borderRadius: 6, marginBottom: 4, border: '1px solid ' + (isDark ? 'transparent' : '#cbd5e1') }}>
              <span style={{ color: isDark ? '#6e7681' : '#64748b', fontSize: 10 }}>{row.sow_number}</span>
              <div>
                <div style={{ color: textCol, fontSize: 11 }}>{row.sub_item_l3 || row.particulars}</div>
                <div className="progress-bar" style={{ marginTop: 4, width: '80%' }}>
                  <div className="progress-fill" style={{ width: `${pct}%`, background: isDark ? '#60a5fa' : '#2563eb' }} />
                </div>
              </div>
              <span className="tag" style={{ background: isDark ? sc2.bg : '#f1f5f9', color: isDark ? sc2.text : '#475569', border: isDark ? 'none' : '1px solid #cbd5e1', fontSize: 10 }}>{row.status || 'Not Started'}</span>
              <span style={{ color: rc, fontSize: 10 }}>{row.risk_level || '—'}</span>
              <span style={{ color: isDark ? '#6e7681' : '#64748b', fontSize: 10 }}>{row.planned_start || '—'}</span>
              <span style={{ color: isDark ? '#6e7681' : '#64748b', fontSize: 10 }}>{row.actual_start || '—'}</span>
              <span style={{ color: textCol, fontWeight: 600 }}>{pct}%</span>
              <span style={{ color: row.is_critical_path ? '#f87171' : subText, fontSize: 10 }}>{row.is_critical_path ? '⚑' : '—'}</span>
              <div style={{ display: 'flex', gap: 4 }}>
                <button className="btn" onClick={() => openEdit(row)} style={{ fontSize: 10, padding: '3px 7px' }}>Edit</button>
                <button className="btn btn-danger" onClick={() => handleDelete(row)} style={{ fontSize: 10, padding: '3px 7px' }}>✕</button>
              </div>
            </div>
          )
        })}
      </div>

      {/* ── SLIDE-IN FORM PANEL ── */}
      {showForm && (
        <div className="slide-in sow-form" style={{ position: 'fixed', top: 0, right: 0, width: 500, height: '100vh', background: isDark ? '#0d1117' : '#ffffff', borderLeft: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1'), zIndex: 30, display: 'flex', flexDirection: 'column', overflowY: 'auto', color: textCol }}>
          {/* Form header */}
          <div style={{ padding: '16px 20px', borderBottom: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1'), display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, background: isDark ? '#0d1117' : '#ffffff', zIndex: 1 }}>
            <div>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 16, color: hText }}>
                {editItem ? `EDIT SOW ${editItem.sow_number}` : 'NEW SOW ITEM'}
              </div>
              <div style={{ fontSize: 10, color: subText, marginTop: 2 }}>
                {form.hierarchy_level === 1 ? 'L1 — Scope Section' : form.hierarchy_level === 2 ? 'L2 — Item Group' : 'L3 — Line Item'}
              </div>
            </div>
            <button className="btn" onClick={closeForm} style={{ fontSize: 12, padding: '5px 10px' }}>✕ Close</button>
          </div>

          {/* Section tabs */}
          <div style={{ display: 'flex', borderBottom: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1'), overflowX: 'auto', background: isDark ? '#0a0c0e' : '#f8fafc' }}>
            {['① Identity', '② Schedule', '③ BOQ', '④ Cost', '⑤ Resources', '⑥ Status'].map((s, i) => (
              <div key={i} className={`section-tab ${activeSection === i ? 'active' : ''}`} onClick={() => setActiveSection(i)}>{s}</div>
            ))}
          </div>

          <form onSubmit={handleSave} style={{ flex: 1, padding: 20 }}>

            {/* ① IDENTITY */}
            {activeSection === 0 && (
              <div className="fade-in">
                <div className="form-row" style={{ gridTemplateColumns: '1fr 1fr' }}>
                  <div>
                    <div className="form-label">SOW NUMBER ★</div>
                    <input className="fi" placeholder="e.g. 1 / 1.1 / 1.1.1" value={form.sow_number || ''} onChange={e => setF({ sow_number: e.target.value })} required />
                  </div>
                  <div>
                    <div className="form-label">HIERARCHY LEVEL ★</div>
                    <select className="fi" value={form.hierarchy_level || 3} onChange={e => setF({ hierarchy_level: Number(e.target.value) })}>
                      <option value={1}>L1 — Scope Section</option>
                      <option value={2}>L2 — Item Group</option>
                      <option value={3}>L3 — Line Item</option>
                    </select>
                  </div>
                </div>

                {(form.hierarchy_level === 1 || form.hierarchy_level === 2 || form.hierarchy_level === 3) && (
                  <div className="form-row" style={{ gridTemplateColumns: '1fr' }}>
                    <div>
                      <div className="form-label">SCOPE — L1 {form.hierarchy_level === 1 ? '★' : ''}</div>
                      <input className="fi" placeholder="e.g. SUBSTRUCTURE" value={form.scope_l1 || ''} onChange={e => setF({ scope_l1: e.target.value })} />
                    </div>
                  </div>
                )}
                {(form.hierarchy_level === 2 || form.hierarchy_level === 3) && (
                  <div className="form-row" style={{ gridTemplateColumns: '1fr' }}>
                    <div>
                      <div className="form-label">ITEM — L2 {form.hierarchy_level === 2 ? '★' : ''}</div>
                      <input className="fi" placeholder="e.g. Excavation & Compaction" value={form.item_l2 || ''} onChange={e => setF({ item_l2: e.target.value })} />
                    </div>
                  </div>
                )}
                {form.hierarchy_level === 3 && (
                  <div className="form-row" style={{ gridTemplateColumns: '1fr' }}>
                    <div>
                      <div className="form-label">SUB ITEM — L3 ★</div>
                      <input className="fi" placeholder="e.g. Survey and Marking" value={form.sub_item_l3 || ''} onChange={e => setF({ sub_item_l3: e.target.value })} />
                    </div>
                  </div>
                )}

                <div className="form-row" style={{ gridTemplateColumns: '1fr' }}>
                  <div>
                    <div className="form-label">PARTICULARS / SPECIFICATION</div>
                    <textarea className="fi" rows={3} placeholder="e.g. 10cm thick PC floor slab; Total Station required" value={form.particulars || ''} onChange={e => setF({ particulars: e.target.value })} style={{ resize: 'vertical' }} />
                  </div>
                </div>

                <div className="form-row" style={{ gridTemplateColumns: '1fr' }}>
                  <div>
                    <div className="form-label">ASSIGNED TO</div>
                    <input className="fi" placeholder="e.g. Engineer_Site" value={form.assigned_to || ''} onChange={e => setF({ assigned_to: e.target.value })} />
                  </div>
                </div>
              </div>
            )}

            {/* ② SCHEDULE */}
            {activeSection === 1 && (
              <div className="fade-in">
                {/* Baseline */}
                <div style={{ fontSize: 11, color: '#60a5fa', letterSpacing: '0.06em', marginBottom: 10 }}>BASELINE</div>
                <div className="form-row" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
                  <div>
                    <div className="form-label">START DATE</div>
                    <input type="date" className="fi" value={form.baseline_start || ''} onChange={e => setF({ baseline_start: e.target.value })} />
                  </div>
                  <div>
                    <div className="form-label">DAYS</div>
                    <input type="number" className="fi" min={0} placeholder="0" value={form.baseline_days ?? ''} onChange={e => setF({ baseline_days: Number(e.target.value) })} />
                  </div>
                  <div>
                    <div className="form-label">END DATE (auto)</div>
                    <div className="calc-field">{baselineEnd || '—'}</div>
                  </div>
                </div>

                {/* Planned */}
                <div style={{ fontSize: 11, color: '#f59e0b', letterSpacing: '0.06em', marginBottom: 10, marginTop: 4 }}>PLANNED</div>
                <div className="form-row" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
                  <div>
                    <div className="form-label">START DATE</div>
                    <input type="date" className="fi" value={form.planned_start || ''} onChange={e => setF({ planned_start: e.target.value })} />
                  </div>
                  <div>
                    <div className="form-label">DAYS</div>
                    <input type="number" className="fi" min={0} placeholder="0" value={form.planned_days ?? ''} onChange={e => setF({ planned_days: Number(e.target.value) })} />
                  </div>
                  <div>
                    <div className="form-label">END DATE (auto)</div>
                    <div className="calc-field">{plannedEnd || '—'}</div>
                  </div>
                </div>

                {/* Actual */}
                <div style={{ fontSize: 11, color: '#4ade80', letterSpacing: '0.06em', marginBottom: 10, marginTop: 4 }}>ACTUAL</div>
                <div className="form-row" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
                  <div>
                    <div className="form-label">START DATE</div>
                    <input type="date" className="fi" value={form.actual_start || ''} onChange={e => setF({ actual_start: e.target.value })} />
                  </div>
                  <div>
                    <div className="form-label">DAYS</div>
                    <input type="number" className="fi" min={0} placeholder="0" value={form.actual_days ?? ''} onChange={e => setF({ actual_days: Number(e.target.value) })} />
                  </div>
                  <div>
                    <div className="form-label">END DATE (auto)</div>
                    <div className="calc-field">{actualEnd || '—'}</div>
                  </div>
                </div>

                <div className="form-row" style={{ gridTemplateColumns: '1fr 1fr' }}>
                  <div>
                    <div className="form-label">% COMPLETE (0–100)</div>
                    <input type="number" className="fi" min={0} max={100} placeholder="0" value={form.percent_complete ?? ''} onChange={e => setF({ percent_complete: Number(e.target.value) })} />
                  </div>
                  <div>
                    <div className="form-label">SCHEDULE VARIANCE (days, auto)</div>
                    <div className="calc-field" style={{ color: schedVar > 0 ? '#f87171' : schedVar < 0 ? '#4ade80' : '#f59e0b' }}>
                      {schedVar > 0 ? `+${schedVar} (late)` : schedVar < 0 ? `${schedVar} (early)` : '0'}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ③ BOQ */}
            {activeSection === 2 && (
              <div className="fade-in">
                <div style={{ fontSize: 11, color: '#484f58', marginBottom: 14 }}>BOQ fields apply to L3 line items only.</div>
                <div className="form-row" style={{ gridTemplateColumns: '1fr 1fr' }}>
                  <div>
                    <div className="form-label">UNIT</div>
                    <select className="fi" value={form.unit || 'm²'} onChange={e => setF({ unit: e.target.value })}>
                      {UNIT_OPTS.map(u => <option key={u}>{u}</option>)}
                    </select>
                  </div>
                  <div>
                    <div className="form-label">QUANTITY</div>
                    <input type="number" className="fi" min={0} step="any" placeholder="0" value={form.quantity ?? ''} onChange={e => setF({ quantity: Number(e.target.value) })} />
                  </div>
                </div>
                <div className="form-row" style={{ gridTemplateColumns: '1fr 1fr' }}>
                  <div>
                    <div className="form-label">WASTE % (e.g. 5 for 5%)</div>
                    <input type="number" className="fi" min={0} step="any" placeholder="0" value={form.waste_pct ?? ''} onChange={e => setF({ waste_pct: Number(e.target.value) })} />
                  </div>
                  <div>
                    <div className="form-label">NET QUANTITY (auto)</div>
                    <div className="calc-field">{netQty > 0 ? netQty.toFixed(3) : '—'}</div>
                  </div>
                </div>
                <div className="form-row" style={{ gridTemplateColumns: '1fr 1fr' }}>
                  <div>
                    <div className="form-label">UNIT RATE (per net unit)</div>
                    <input type="number" className="fi" min={0} step="any" placeholder="0.00" value={form.unit_rate ?? ''} onChange={e => setF({ unit_rate: Number(e.target.value) })} />
                  </div>
                  <div>
                    <div className="form-label">BOQ AMOUNT (auto)</div>
                    <div className="calc-field">{boqAmount > 0 ? `${project.currency} ${boqAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}` : '—'}</div>
                  </div>
                </div>
              </div>
            )}

            {/* ④ COST */}
            {activeSection === 3 && (
              <div className="fade-in">
                <div className="form-row" style={{ gridTemplateColumns: '1fr 1fr' }}>
                  <div>
                    <div className="form-label">ESTIMATED COST ({project.currency})</div>
                    <input type="number" className="fi" min={0} step="any" placeholder="0.00" value={form.estimated_cost ?? ''} onChange={e => setF({ estimated_cost: Number(e.target.value) })} />
                  </div>
                  <div>
                    <div className="form-label">ACTUAL COST ({project.currency})</div>
                    <input type="number" className="fi" min={0} step="any" placeholder="0.00" value={form.actual_cost ?? ''} onChange={e => setF({ actual_cost: Number(e.target.value) })} />
                  </div>
                </div>
                <div className="form-row" style={{ gridTemplateColumns: '1fr 1fr' }}>
                  <div>
                    <div className="form-label">COST VARIANCE (auto)</div>
                    <div className="calc-field" style={{ color: costVar >= 0 ? '#4ade80' : '#f87171' }}>
                      {form.estimated_cost ? `${project.currency} ${costVar.toLocaleString(undefined, { maximumFractionDigits: 2 })}` : '—'}
                    </div>
                  </div>
                  <div>
                    <div className="form-label">COST VAR % (auto)</div>
                    <div className="calc-field" style={{ color: costVarPct >= 0 ? '#4ade80' : '#f87171' }}>
                      {form.estimated_cost ? `${costVarPct.toFixed(1)}%` : '—'}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ⑤ RESOURCES */}
            {activeSection === 4 && (
              <div className="fade-in">
                <div className="form-row" style={{ gridTemplateColumns: '1fr' }}>
                  <div>
                    <div className="form-label">PLANT</div>
                    <input className="fi" placeholder="e.g. Crane, Excavator, Mixer" value={form.plant || ''} onChange={e => setF({ plant: e.target.value })} />
                  </div>
                </div>
                <div className="form-row" style={{ gridTemplateColumns: '1fr' }}>
                  <div>
                    <div className="form-label">SITE EQUIPMENT</div>
                    <input className="fi" placeholder="e.g. Bar Bending Machine, Total Station" value={form.site_equipment || ''} onChange={e => setF({ site_equipment: e.target.value })} />
                  </div>
                </div>
                <div className="form-row" style={{ gridTemplateColumns: '1fr' }}>
                  <div>
                    <div className="form-label">MANPOWER</div>
                    <input className="fi" placeholder="e.g. Engineer x1, Mason x3, Casual x5" value={form.manpower || ''} onChange={e => setF({ manpower: e.target.value })} />
                  </div>
                </div>
              </div>
            )}

            {/* ⑥ STATUS & RISK */}
            {activeSection === 5 && (
              <div className="fade-in">
                <div className="form-row" style={{ gridTemplateColumns: '1fr 1fr' }}>
                  <div>
                    <div className="form-label">RISK LEVEL ★</div>
                    <select className="fi" value={form.risk_level || 'Low'} onChange={e => setF({ risk_level: e.target.value })}>
                      {RISK_OPTS.map(r => <option key={r}>{r}</option>)}
                    </select>
                  </div>
                  <div>
                    <div className="form-label">STATUS ★</div>
                    <select className="fi" value={form.status || 'Not Started'} onChange={e => setF({ status: e.target.value })}>
                      {STATUS_OPTS.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div className="form-row" style={{ gridTemplateColumns: '1fr 1fr' }}>
                  <div>
                    <div className="form-label">DEPENDS ON (SOW #)</div>
                    <input className="fi" placeholder="e.g. 1.1.1" value={form.dep_on || ''} onChange={e => setF({ dep_on: e.target.value })} />
                  </div>
                  <div>
                    <div className="form-label">DEPENDENCY TYPE</div>
                    <select className="fi" value={form.dep_type || 'FS'} onChange={e => setF({ dep_type: e.target.value })}>
                      {DEP_OPTS.map(d => <option key={d}>{d}</option>)}
                    </select>
                  </div>
                </div>
                <div className="form-row" style={{ gridTemplateColumns: '1fr 1fr' }}>
                  <div>
                    <div className="form-label">CRITICAL PATH</div>
                    <select className="fi" value={form.is_critical_path ? 'Yes' : 'No'} onChange={e => setF({ is_critical_path: e.target.value === 'Yes' })}>
                      <option>No</option>
                      <option>Yes</option>
                    </select>
                  </div>
                  <div />
                </div>
                <div className="form-row" style={{ gridTemplateColumns: '1fr' }}>
                  <div>
                    <div className="form-label">NOTES / REMARKS</div>
                    <textarea className="fi" rows={3} placeholder="Any notes or remarks..." value={form.notes || ''} onChange={e => setF({ notes: e.target.value })} style={{ resize: 'vertical' }} />
                  </div>
                </div>
              </div>
            )}

            {/* Error */}
            {error && <div style={{ color: '#f87171', fontSize: 11, marginBottom: 12, padding: '8px 12px', background: isDark ? '#2d0f0f' : '#fee2e2', border: `1px solid ${isDark ? 'transparent' : '#f87171'}`, borderRadius: 5 }}>{error}</div>}

            {/* Form footer */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, paddingTop: 16, borderTop: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1') }}>
              <div style={{ display: 'flex', gap: 6 }}>
                {activeSection > 0 && <button type="button" className="btn" onClick={() => setActiveSection(s => s - 1)}>← Back</button>}
                {activeSection < 5 && <button type="button" className="btn" onClick={() => setActiveSection(s => s + 1)}>Next →</button>}
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button type="button" className="btn" onClick={closeForm}>Cancel</button>
                <button type="submit" className="btn btn-primary" disabled={saving}>
                  {saving ? 'Saving...' : editItem ? '✓ Update Item' : '✓ Save Item'}
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* Overlay when form is open */}
      {showForm && (
        <div onClick={closeForm} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 29 }} />
      )}

      {/* ── PRIMAVERA & MS PROJECT INTEGRATION CENTER MODAL ── */}
      {showIntegration && (
        <div className="fade-in" style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
          {/* Backdrop */}
          <div onClick={() => !importing && setShowIntegration(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(3px)' }} />
          
          {/* Modal Container */}
          <div className="card" style={{ position: 'relative', width: '100%', maxWidth: 900, maxHeight: '90vh', background: isDark ? '#0d1117' : '#ffffff', border: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1'), borderRadius: '12px', display: 'flex', flexDirection: 'column', overflow: 'hidden', zIndex: 1, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
            
            {/* Header */}
            <div style={{ padding: '18px 24px', borderBottom: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1'), display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
              <div>
                <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 20, fontWeight: 700, color: hText, letterSpacing: '0.05em' }}>
                  📊 PRIMAVERA & MS PROJECT INTEGRATION CENTER
                </h3>
                <p style={{ fontSize: 11, color: subText, marginTop: 4 }}>
                  Natively ingest and parse industrial scheduler files to control CPOS Gantt, Cost, and Resource sheets.
                </p>
              </div>
              <button 
                className="btn" 
                onClick={() => setShowIntegration(false)}
                disabled={importing}
                style={{ fontSize: 12, padding: '6px 12px' }}
              >
                ✕ Close
              </button>
            </div>

            {/* Scrollable Content */}
            <div style={{ flex: 1, overflowY: 'auto', padding: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>
              
              {/* File Selector & Settings */}
              <div style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 1fr) 1.5fr', gap: 18 }}>
                
                {/* File Dropzone */}
                <div 
                  style={{ 
                    border: '2px dashed ' + (integrationFile ? '#f59e0b' : (isDark ? '#30363d' : '#cbd5e1')), 
                    background: isDark ? '#0a0c0e' : '#f8fafc',
                    borderRadius: 8, 
                    padding: '24px 16px', 
                    textAlign: 'center', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s',
                  }}
                  onClick={() => document.getElementById('integration-file-picker')?.click()}
                >
                  <span style={{ fontSize: 24, marginBottom: 8 }}>📁</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: textCol }}>
                    {integrationFile ? integrationFile.name : 'Choose or Drop File'}
                  </span>
                  <span style={{ fontSize: 10, color: subText, marginTop: 6 }}>
                    Supports Primavera P6 (.xer), MS Project (.xml), Excel (.xlsx), & standard CSV
                  </span>
                  
                  <input 
                    id="integration-file-picker"
                    type="file"
                    accept=".xer,.xml,.xlsx,.xlsm,.xls,.csv"
                    style={{ display: 'none' }}
                    onChange={(e) => {
                      const f = e.target.files?.[0]
                      if (f) handleFileSelected(f)
                    }}
                  />
                </div>

                {/* Import Type Configuration */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div className="form-label" style={{ fontWeight: 600, fontSize: 11, letterSpacing: '0.04em' }}>1. SELECT INGESTION INTERFACE</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                    {[
                      { id: 'auto', label: '⚡ Auto-Detect File', desc: 'Auto-scrapes tables & layout' },
                      { id: 'xer', label: '🌅 Primavera P6 (.xer)', desc: 'Tabbed native database records' },
                      { id: 'msp', label: '📊 MS Project (.xml)', desc: 'Full xml outlining attributes' },
                      { id: 'csv', label: '📄 SOW CSV / Excel', desc: 'Row header matches' },
                    ].map(opt => (
                      <label 
                        key={opt.id}
                        style={{ 
                          border: '1px solid ' + (integrationMode === opt.id ? '#f59e0b' : (isDark ? '#21262d' : '#e2e8f0')),
                          background: integrationMode === opt.id ? (isDark ? '#1a1510' : '#fff9f0') : (isDark ? '#0d1117' : '#ffffff'),
                          borderRadius: 6,
                          padding: '10px 12px',
                          cursor: 'pointer',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 2,
                          transition: 'all 0.15s'
                        }}
                        onClick={() => {
                          setIntegrationMode(opt.id as any)
                          if (integrationFile) {
                            setTimeout(() => {
                              void handleFileSelected(integrationFile)
                            }, 50)
                          }
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 700, color: integrationMode === opt.id ? '#f59e0b' : textCol }}>
                          <input 
                            type="radio" 
                            name="int-mode" 
                            checked={integrationMode === opt.id} 
                            onChange={() => {}}
                            style={{ accentColor: '#f59e0b' }}
                          />
                          {opt.label}
                        </div>
                        <span style={{ fontSize: 9, color: subText, marginLeft: 18 }}>{opt.desc}</span>
                      </label>
                    ))}
                  </div>
                </div>

              </div>

              {/* Terminal Logs Block */}
              {integrationLogs.length > 0 && (
                <div style={{ background: '#07090e', border: '1px solid #161b22', borderRadius: 6, padding: '12px 16px', fontFamily: "'DM Mono', monospace" }}>
                  <div style={{ fontSize: 9, color: '#484f58', borderBottom: '1px solid #161b22', paddingBottom: 6, marginBottom: 8, display: 'flex', justifyContent: 'space-between' }}>
                    <span>🖥️ PARSE LOGS & INTEGRITY DIAGNOSTICS</span>
                    <span style={{ color: '#4ade80' }}>● ACTIVE</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4, maxHeight: 110, overflowY: 'auto', fontSize: 11, color: '#c9d1d9' }}>
                    {integrationLogs.map((log, idx) => (
                      <div key={idx} style={{ display: 'flex', gap: 8 }}>
                        <span style={{ color: '#484f58' }}>[{idx + 1}]</span>
                        <span style={{ color: log.startsWith('PARSER ERROR') || log.startsWith('DB ERROR') ? '#f87171' : (log.startsWith('Successfully') || log.includes('deployed') ? '#4ade80' : '#c9d1d9') }}>{log}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Error Alert Box */}
              {integrationError && (
                <div style={{ color: '#f87171', background: isDark ? '#2d0f0f' : '#fee2e2', border: '1px solid transparent', borderRadius: 6, padding: '12px 16px', fontSize: 11 }}>
                  <strong>⚠️ Parse Error Alert:</strong> {integrationError}
                </div>
              )}

              {/* Parsed Items Preview Grid */}
              {parsedItems.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="form-label" style={{ fontWeight: 600, fontSize: 11, letterSpacing: '0.04em' }}>
                      2. SOW SCHEDULE MERGE PREVIEW ({parsedItems.length} lines detected)
                    </span>
                    <span style={{ fontSize: 10, color: '#4ade80' }}>✔ Structured Hierarchy & Dates Checked</span>
                  </div>

                  <div style={{ border: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1'), borderRadius: 8, maxHeight: 220, overflowY: 'auto', background: isDark ? '#0d1117' : '#ffffff' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 11 }}>
                      <thead style={{ background: isDark ? '#161b22' : '#f8fafc', borderBottom: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1'), position: 'sticky', top: 0, zIndex: 1, color: hText }}>
                        <tr>
                          <th style={{ padding: '8px 12px' }}>SOW #</th>
                          <th style={{ padding: '8px 12px' }}>Scope Detail / Task Item</th>
                          <th style={{ padding: '8px 12px' }}>Dates (Planned)</th>
                          <th style={{ padding: '8px 12px' }}>Days</th>
                          <th style={{ padding: '8px 12px' }}>% Done</th>
                          <th style={{ padding: '8px 12px' }}>Primary Dep.</th>
                          <th style={{ padding: '8px 12px' }}>CP</th>
                        </tr>
                      </thead>
                      <tbody>
                        {parsedItems.map((item, index) => {
                          const isHeader = item.hierarchy_level < 3
                          const textIndent = (item.hierarchy_level - 1) * 16
                          return (
                            <tr 
                              key={index} 
                              style={{ 
                                borderBottom: '1px solid ' + (isDark ? '#161b22' : '#f1f5f9'),
                                background: isHeader ? (isDark ? '#161b2255' : '#f8fafc') : 'transparent',
                                color: isHeader ? '#f59e0b' : textCol,
                                fontWeight: isHeader ? 600 : 'normal'
                              }}
                            >
                              <td style={{ padding: '8px 12px', fontFamily: 'monospace', color: isHeader ? '#f59e0b' : subText }}>
                                {item.sow_number}
                              </td>
                              <td style={{ padding: '8px 12px', paddingLeft: 12 + textIndent }}>
                                {item.hierarchy_level === 1 ? item.scope_l1 : item.hierarchy_level === 2 ? item.item_l2 : item.sub_item_l3}
                              </td>
                              <td style={{ padding: '8px 12px', color: subText }}>
                                {item.planned_start ? `${item.planned_start} to ${item.planned_end}` : '—'}
                              </td>
                              <td style={{ padding: '8px 12px' }}>
                                {item.planned_days ? `${item.planned_days} d` : '—'}
                              </td>
                              <td style={{ padding: '8px 12px', color: item.percent_complete === 100 ? '#4ade80' : textCol }}>
                                {item.percent_complete ?? 0}%
                              </td>
                              <td style={{ padding: '8px 12px', fontFamily: 'monospace', color: '#60a5fa' }}>
                                {item.dep_on ? `${item.dep_on} (${item.dep_type})` : '—'}
                              </td>
                              <td style={{ padding: '8px 12px', color: item.is_critical_path ? '#f87171' : subText }}>
                                {item.is_critical_path ? '🚩 YES' : '—'}
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>

                  <div style={{ background: isDark ? '#1a1010' : '#fef2f2', border: '1px solid ' + (isDark ? '#2d1515' : '#fecaca'), padding: '12px 16px', borderRadius: 8, display: 'flex', gap: 12, alignItems: 'center' }}>
                    <span style={{ fontSize: 18 }}>⚠️</span>
                    <div style={{ fontSize: 10, color: isDark ? '#f87171' : '#991b1b', lineHeight: '1.4' }}>
                      <strong>Critical Sync Alert:</strong> Harmonizing will release all existing items on scope structures, cost estimates, BOQ values, and current Gantt charts for this project ID in your persistent database. Use with precision.
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Footer Buttons */}
            <div style={{ padding: '14px 24px', borderTop: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1'), display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', background: isDark ? '#0a0c0e' : '#f8fafc' }}>
              <span style={{ fontSize: 10, color: subText }}>
                {parsedItems.length > 0 ? `✔ ${parsedItems.length} elements mapped` : 'Please upload a scheduling file to proceed'}
              </span>
              <div style={{ display: 'flex', gap: 8 }}>
                <button 
                  className="btn" 
                  onClick={() => {
                    setShowIntegration(false)
                    setParsedItems([])
                    setIntegrationFile(null)
                  }}
                  disabled={importing}
                >
                  Cancel
                </button>
                <button 
                  className="btn btn-primary"
                  style={{ background: '#f59e0b', borderColor: '#f59e0b', fontWeight: 700 }}
                  onClick={handleImportIntegration}
                  disabled={parsedItems.length === 0 || importing}
                >
                  {importing ? 'Processing sync...' : '🚀 Synchronize Schedule & Overwrite SOW'}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  )
}
