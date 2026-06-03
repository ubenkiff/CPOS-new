'use client'
import { useEffect, useState, useRef } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { supabase } from '../../supabase'
import { canAccessProject, PUBLIC_VIEWONLY_PROJECT_ID } from '../../../lib/access'
import * as XLSX from 'xlsx'
import { 
  ArrowLeft, LayoutDashboard, Calendar, CheckSquare, 
  DollarSign, FileText, Download, Upload, AlertCircle, 
  ChevronRight, MoreVertical, Plus, Clock, Shield,
  BarChart3, Users, Filter, Search, Trash2, Edit2, Settings
} from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import Link from 'next/link'
import { useTheme } from '../../../lib/theme'
import ThemeSelector from '../../../components/ThemeSelector'

type Project = {
  projectid: string; project_name: string; project_code: string
  client_name: string; client_contact: string; location: string
  description: string; status: string; start_date: string
  end_date: string; budget: number; currency: string; created_at: string
}
type Metrics = {
  open_tasks: number; completed_tasks: number
  pending_orders: number; revenue_earned: number; overall_progress: number
}
type TimelineItem = {
  id: string; activity_name: string; phase: string
  planned_start: string; planned_end: string; progress: number; sort_order: number
}
type Task = {
  task_id: string; title: string; priority: string
  status: string; due_date: string; assigned_to: string
}
type SowTask = {
  sow_id: string; sow_number: string; description: string
  planned_start?: string; planned_end?: string; planned_days?: number
  baseline_start?: string; baseline_end?: string; baseline_days?: number
  actual_start?: string; actual_end?: string; actual_days?: number
  percent_complete?: number; status?: string; risk_level?: string
  assigned_to?: string; is_critical_path?: boolean
  estimated_cost?: number; actual_cost?: number; parent_id?: string
}
type CostEntry = {
  cost_id: string; cost_date: string; description: string
  category: string; supplier: string; invoice_ref: string
  amount: number; is_approved: boolean
}

const CATEGORIES = ['Labour', 'Materials', 'Plant', 'Subcontractor', 'Overhead', 'Other']
const STATUS_OPTIONS = ['Active', 'Planning', 'On Hold', 'Closed']
const PRIORITY_OPTIONS = ['Critical', 'High', 'Medium', 'Low']

const statusColors: Record<string, { bg: string; text: string; dot: string; ring: string }> = {
  Active:    { bg: 'bg-emerald-50', text: 'text-emerald-700', dot: 'bg-emerald-500', ring: 'ring-emerald-600/20' },
  Planning:  { bg: 'bg-indigo-50', text: 'text-indigo-700', dot: 'bg-indigo-500', ring: 'ring-indigo-600/20' },
  'On Hold': { bg: 'bg-amber-50', text: 'text-amber-700', dot: 'bg-amber-500', ring: 'ring-amber-600/20' },
  Closed:    { bg: 'bg-slate-50', text: 'text-slate-600', dot: 'bg-slate-400', ring: 'ring-slate-600/20' },
}

const getStatusColors = (status: string, isDark: boolean) => {
  if (isDark) {
    const darks: Record<string, { bg: string; text: string; dot: string; ring: string }> = {
      Active:    { bg: 'bg-emerald-950/40', text: 'text-emerald-400', dot: 'bg-emerald-400', ring: 'ring-emerald-500/20' },
      Planning:  { bg: 'bg-indigo-950/40', text: 'text-indigo-400', dot: 'bg-indigo-400', ring: 'ring-indigo-500/20' },
      'On Hold': { bg: 'bg-amber-950/40', text: 'text-amber-400', dot: 'bg-amber-400', ring: 'ring-amber-500/30' },
      Closed:    { bg: 'bg-zinc-900', text: 'text-zinc-400', dot: 'bg-zinc-400', ring: 'ring-zinc-850' },
    }
    return darks[status] || darks['Planning']
  }
  return statusColors[status] || statusColors['Planning']
}

function fmt(n: number, currency: string) {
  if (n >= 1000000) return `${currency} ${(n / 1000000).toFixed(2)}M`
  if (n >= 1000) return `${currency} ${(n / 1000).toFixed(0)}K`
  return `${currency} ${n.toLocaleString()}`
}

function daysBetween(a: string, b: string) {
  return Math.round((new Date(b).getTime() - new Date(a).getTime()) / 86400000)
}

const emptyCostForm = { 
  description: '', 
  category: 'Materials', 
  supplier: '', 
  invoice_ref: '', 
  amount: '', 
  cost_date: new Date().toISOString().split('T')[0] 
}

export default function ProjectDetail() {
  const params = useParams()
  const router = useRouter()
  const { theme, setTheme, isDark } = useTheme()
  const projectid = params.projectid as string
  const isPublicSolar = projectid === PUBLIC_VIEWONLY_PROJECT_ID

  const [project, setProject] = useState<Project | null>(null)
  const [metrics, setMetrics] = useState<Metrics | null>(null)
  const [timeline, setTimeline] = useState<TimelineItem[]>([])
  const [tasks, setTasks] = useState<Task[]>([])
  const [sowTasks, setSowTasks] = useState<SowTask[]>([])
  const [costs, setCosts] = useState<CostEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'overview' | 'timeline' | 'tasks' | 'costs'>('overview')
  const [showCostForm, setShowCostForm] = useState(false)
  const [costForm, setCostForm] = useState({ ...emptyCostForm })
  const [savingCost, setSavingCost] = useState(false)
  const [costError, setCostError] = useState('')

  const templateInputRef = useRef<HTMLInputElement>(null)
  const [templateImporting, setTemplateImporting] = useState(false)
  const [templateImportMsg, setTemplateImportMsg] = useState('')
  const [templateImportError, setTemplateImportError] = useState('')
  const [templateDownloading, setTemplateDownloading] = useState(false)
  const [showExportMenu, setShowExportMenu] = useState(false)

  useEffect(() => {
    if (!projectid) return
    if (isPublicSolar) {
      fetchAll()
    } else {
      checkSessionAndLoad()
    }
  }, [projectid])

  async function checkSessionAndLoad() {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push(`/login?next=${encodeURIComponent(`/dashboard/${projectid}`)}`)
      return
    }

    const { data: pRow, error: pErr } = await supabase
      .from('projects')
      .select('projectid,user_id')
      .eq('projectid', projectid)
      .maybeSingle()

    if (pErr || !pRow) {
      router.push('/dashboard')
      return
    }

    const canAccess = canAccessProject({
      user,
      projectid,
      projectOwnerId: pRow?.user_id,
    })
    if (!canAccess) {
      router.push('/pricing')
      return
    }

    fetchAll()
  }

  async function fetchAll() {
    setLoading(true)
    const [pRes, mRes, tRes, taskRes, costRes, sowRes] = await Promise.all([
      supabase.from('projects').select('*').eq('projectid', projectid).maybeSingle(),
      supabase.from('dashboard_metrics').select('*').eq('projectid', projectid).single(),
      supabase.from('project_timeline').select('*').eq('projectid', projectid).order('sort_order'),
      supabase.from('tasks').select('*').eq('projectid', projectid).order('due_date'),
      supabase.from('cost_entries').select('*').eq('projectid', projectid).order('cost_date', { ascending: false }),
      supabase.from('sow_items').select('*').eq('projectid', projectid).eq('hierarchy_level', 3).order('sow_number'),
    ])
    if (pRes.data) setProject(pRes.data)
    if (mRes.data) setMetrics(mRes.data)
    if (tRes.data) setTimeline(tRes.data)
    if (taskRes.data) setTasks(taskRes.data)
    if (costRes.data) setCosts(costRes.data)
    if (sowRes.data) setSowTasks(sowRes.data)
    setLoading(false)
  }

  async function handleAddCost(e: React.FormEvent) {
    e.preventDefault()
    if (isPublicSolar) {
      setCostError('Read-only demo mode.')
      return
    }
    if (!costForm.description || !costForm.amount) {
      setCostError('Description and amount are required.')
      return
    }
    setSavingCost(true)
    setCostError('')
    const { error } = await supabase.from('cost_entries').insert([{
      projectid,
      cost_date: costForm.cost_date,
      description: costForm.description,
      category: costForm.category,
      supplier: costForm.supplier || null,
      invoice_ref: costForm.invoice_ref || null,
      amount: Number(costForm.amount),
      is_approved: false,
    }])
    if (error) {
      setCostError(error.message)
      setSavingCost(false)
      return
    }
    setCostForm({ ...emptyCostForm })
    setShowCostForm(false)
    setSavingCost(false)
    fetchAll()
  }

  // Excel template upload functions
  function parseExcelDate(v: unknown): string | undefined {
    if (v === null || v === undefined || v === '') return undefined
    
    if (typeof v === 'string') {
      const trimmed = v.trim()
      if (!trimmed) return undefined
      
      // Try parsing as a date string
      const d = new Date(trimmed)
      if (!isNaN(d.getTime())) {
        const iso = d.toISOString().split('T')[0]
        console.log(`[Date Parse] String "${trimmed}" -> ${iso}`)
        return iso
      }
      
      // Try Excel serial number as string
      const numVal = parseFloat(trimmed)
      if (!isNaN(numVal)) {
        const excelDate = XLSX.SSF.parse_date_code(numVal)
        if (excelDate) {
          const dt = new Date(Date.UTC(excelDate.y, excelDate.m - 1, excelDate.d))
          const iso = dt.toISOString().split('T')[0]
          console.log(`[Date Parse] Excel serial "${numVal}" -> ${iso}`)
          return iso
        }
      }
      
      console.warn(`[Date Parse] Failed to parse string date: "${trimmed}"`)
      return undefined
    }
    
    if (typeof v === 'number') {
      const d = XLSX.SSF.parse_date_code(v)
      if (!d) {
        console.warn(`[Date Parse] Failed to parse Excel serial date: ${v}`)
        return undefined
      }
      const dt = new Date(Date.UTC(d.y, d.m - 1, d.d))
      const iso = dt.toISOString().split('T')[0]
      console.log(`[Date Parse] Excel serial ${v} -> ${iso}`)
      return iso
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

  function mapSowStatusToTaskStatus(sowStatus: string): string {
    const s = sowStatus.toLowerCase()
    if (s.includes('complet')) return 'Done'
    if (s.includes('progress')) return 'In Progress'
    if (s.includes('delay') || s.includes('blocked') || s.includes('waiting')) return 'Blocked'
    return 'Open'
  }

  function normalizeSowStatus(raw: unknown): string {
    const s = String(raw ?? '').trim()
    if (!s) return 'Not Started'
    const v = s.toLowerCase()
    if (v === 'complete' || v === 'completed' || v === 'done' || v === 'finished') return 'Complete'
    if (v.includes('progress') || v === 'started' || v === 'ongoing') return 'In Progress'
    if (v.includes('hold') || v.includes('paused')) return 'On Hold'
    if (v.includes('delay') || v.includes('behind') || v.includes('late') || v.includes('overdue') || v.includes('block') || v.includes('waiting')) return 'Delayed'
    if (v.includes('not started') || v === 'open' || v === 'todo' || v === 'new') return 'Not Started'
    const allowed = ['Not Started', 'In Progress', 'Complete', 'On Hold', 'Delayed']
    return allowed.find(opt => opt.toLowerCase() === v) ?? 'Not Started'
  }

  function normalizeRisk(raw: unknown): string | undefined {
    const s = String(raw ?? '').trim()
    if (!s) return undefined
    const v = s.toLowerCase()
    if (v.startsWith('low')) return 'Low'
    if (v.startsWith('med')) return 'Medium'
    if (v.startsWith('high')) return 'High'
    if (v.startsWith('crit')) return 'Critical'
    const allowed = ['Low', 'Medium', 'High', 'Critical']
    return allowed.find(opt => opt.toLowerCase() === v) ?? undefined
  }

  function normalizeDepType(raw: unknown): string {
    const s = String(raw ?? '').trim()
    if (!s) return 'FS'
    const v = s.toUpperCase()
    return ['FS', 'SF', 'SS', 'FF'].includes(v) ? v : 'FS'
  }

  async function handleUploadMasterTemplate(file: File) {
    if (isPublicSolar) {
      setTemplateImportError('This is a public read-only demo project. Upload is disabled.')
      return
    }
    setTemplateImportError('')
    setTemplateImportMsg('Reading Excel...')
    setTemplateImporting(true)

    try {
      const ab = await file.arrayBuffer()
      const wb = XLSX.read(ab, { type: 'array' })
      const sheetName = wb.SheetNames.find(n => n.trim().toLowerCase() === 'master sow')
      if (!sheetName) throw new Error('Sheet "MASTER SOW" not found in the workbook.')

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

      const mapped = rows
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

          const payload: Record<string, unknown> = {
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
            status: normalizeSowStatus(pick(r, ['Status'])),
            dep_on: String(pick(r, ['Dependent On', 'Dep. On (SOW#)']) ?? '').trim() || undefined,
            dep_type: normalizeDepType(pick(r, ['Dependency Type', 'Dep. Type'])),
            notes: String(pick(r, ['Notes']) ?? '').trim() || undefined,
            plant: String(pick(r, ['Plant']) ?? '').trim() || undefined,
            site_equipment: String(pick(r, ['Site Equipment', 'Site Equip.']) ?? '').trim() || undefined,
            manpower: String(pick(r, ['Manpower', 'Resources']) ?? '').trim() || undefined,
          }

          Object.keys(payload).forEach((k) => {
            if (payload[k] === '' || payload[k] === null || payload[k] === undefined) delete payload[k]
          })

          return payload
        })
        .filter(Boolean) as Record<string, unknown>[]

      if (mapped.length === 0) {
        throw new Error('No valid SOW rows found. Ensure the template uses the MASTER SOW sheet and contains a Serial column.')
      }

      setTemplateImportMsg('Clearing existing SOW items...')
      const { error: delErr } = await supabase.from('sow_items').delete().eq('projectid', projectid)
      if (delErr) throw new Error(delErr.message)

      setTemplateImportMsg(`Importing ${mapped.length} rows...`)
      const BATCH = 250
      for (let i = 0; i < mapped.length; i += BATCH) {
        const slice = mapped.slice(i, i + BATCH)
        const { error: insErr } = await supabase.from('sow_items').insert(slice)
        if (insErr) throw new Error(insErr.message)
        setTemplateImportMsg(`Imported ${Math.min(mapped.length, i + BATCH)} / ${mapped.length}...`)
      }

      setTemplateImportMsg('Import complete. Refreshing...')

      // Sync L1 scope items into the standalone tasks table as punch tasks.
      const l1Rows = mapped.filter(r => r.hierarchy_level === 1)
      if (l1Rows.length > 0) {
        setTemplateImportMsg('Syncing L1 scopes to punch list...')
        await supabase.from('tasks')
          .delete()
          .eq('projectid', projectid)
          .like('source_ref', 'cpos-l1-%')

        const punchTasks = l1Rows.map(r => ({
          projectid,
          title: String(r.scope_l1 || r.sow_number),
          priority: 'Medium',
          status: mapSowStatusToTaskStatus(String(r.status || 'Not Started')),
          due_date: r.planned_end || r.baseline_end || null,
          assigned_to: r.assigned_to || null,
          source_ref: `cpos-l1-${r.sow_number}`,
        }))
        await supabase.from('tasks').insert(punchTasks)
      }

      await fetchAll()
      setTemplateImportMsg('')
    } catch (e) {
      setTemplateImportError(e instanceof Error ? e.message : 'Upload failed')
    } finally {
      setTemplateImporting(false)
    }
  }

  async function handleDownloadTemplate() {
    if (isPublicSolar) return
    setTemplateDownloading(true)
    try {
      const res = await fetch('/api/template/download')
      if (res.status === 403) {
        window.location.href = '/pricing'
        return
      }
      if (!res.ok) throw new Error('Download failed')
      const { url } = await res.json()
      const a = document.createElement('a')
      a.href = url
      a.download = 'CPOS_Master_Template_with_Form.xlsm'
      a.click()
    } catch {
      setTemplateImportError('Could not download template. Please try again.')
    } finally {
      setTemplateDownloading(false)
    }
  }

  async function handleExport(format: 'mspdi' | 'xer') {
    setShowExportMenu(false)
    try {
      const res = await fetch(`/api/export/${projectid}?format=${format}`)
      if (!res.ok) throw new Error('Export failed')
      
      const blob = await res.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${project.project_name.replace(/\s+/g, '_')}.${format === 'mspdi' ? 'xml' : 'xer'}`
      a.click()
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Export error:', error)
      alert('Export failed. Please try again.')
    }
  }

  if (loading) {
    return (
      <div 
        className={`min-h-screen flex items-center justify-center font-sans ${
          isDark ? 'bg-[#0a0c0e] text-[#c9d1d9]' : 'bg-[#F8FAFC]'
        }`}
        style={isDark ? {
          background: '#0a0c0e',
          backgroundImage: 'linear-gradient(rgba(96,165,250,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.025) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        } : {}}
      >
        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}>
          <LayoutDashboard className="w-10 h-10 text-orange-500" />
        </motion.div>
      </div>
    )
  }

  if (!project) return null

  const totalSpent = costs.reduce((s, c) => s + Number(c.amount), 0)
  const spentPct = project.budget > 0 ? Math.round((totalSpent / project.budget) * 100) : 0
  const progress = sowTasks.length > 0
    ? Math.round(sowTasks.reduce((s, t) => s + (t.percent_complete || 0), 0) / sowTasks.length)
    : (metrics?.overall_progress || 0)
  const sc = getStatusColors(project.status, isDark)

  return (
    <div 
      className={`min-h-screen flex flex-col font-sans transition-all duration-300 ${
        isDark ? 'bg-[#0a0c0e] text-[#c9d1d9]' : 'bg-[#F8FAFC] text-slate-900'
      }`}
      style={isDark ? {
        background: '#0a0c0e',
        backgroundImage: 'linear-gradient(rgba(96,165,250,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.025) 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      } : {}}
    >
      {/* Top Header Navigation */}
      <header className={`sticky top-0 z-30 px-6 py-4 flex items-center justify-between transition-all duration-300 border-b ${
        isDark ? 'bg-[#0d1117]/90 border-[#21262d] backdrop-blur' : 'bg-white border-slate-200'
      }`}>
        <div className="flex items-center gap-6">
          <button 
            onClick={() => router.push('/dashboard')}
            className={`p-2 rounded-xl transition-colors ${
              isDark ? 'hover:bg-[#161b22] text-slate-400' : 'hover:bg-slate-100 text-slate-500'
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-3">
              <h1 className={`text-xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>{project.project_name}</h1>
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${sc.bg} ${sc.text} ring-1 ring-inset ${sc.ring}`}>
                {project.status}
              </span>
            </div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
              {project.project_code} • {project.location}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col items-end">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Progress</span>
            <div className="flex items-center gap-2">
              <div className={`w-24 h-1.5 rounded-full overflow-hidden ${isDark ? 'bg-[#161b22]' : 'bg-slate-100'}`}>
                <div 
                  className="h-full bg-orange-500 rounded-full" 
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{progress}%</span>
            </div>
          </div>
          <div className={`h-8 w-px mx-2 ${isDark ? 'bg-[#21262d]' : 'bg-slate-200'}`} />
          <ThemeSelector theme={theme} setTheme={setTheme} compact />
          <button className={`p-2 rounded-xl transition-colors ${isDark ? 'hover:bg-[#161b22] text-slate-400' : 'hover:bg-slate-100 text-slate-500'}`}>
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Sub Navigation */}
      <nav className={`px-6 overflow-x-auto whitespace-nowrap border-b transition-all duration-300 ${
        isDark ? 'bg-[#0d1117] border-[#21262d]' : 'bg-white border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center gap-1">
          {[
            { id: 'overview', icon: LayoutDashboard, label: 'Overview' },
            { id: 'timeline', icon: Calendar, label: 'Timeline' },
            { id: 'tasks', icon: CheckSquare, label: 'Tasks & SOW' },
            { id: 'costs', icon: DollarSign, label: 'Cost Control' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-bold transition-all border-b-2 ${
                activeTab === tab.id 
                ? 'text-orange-500 border-orange-550' + (isDark ? ' bg-orange-950/20' : ' bg-orange-50/30')
                : isDark ? 'text-slate-400 border-transparent hover:text-white' : 'text-slate-500 border-transparent hover:text-slate-900'
              }`}
            >
              <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-orange-600' : 'text-slate-400'}`} />
              {tab.label}
            </button>
          ))}
          <div className="ml-auto flex items-center gap-2 py-2">
            <div className="relative">
              <button
                onClick={() => setShowExportMenu(!showExportMenu)}
                className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-sm ${
                  isDark ? 'bg-slate-700 text-white hover:bg-slate-600' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                }`}
              >
                <Download className="w-3.5 h-3.5" />
                Export
              </button>
              {showExportMenu && (
                <div className={`absolute right-0 mt-2 w-48 rounded-xl shadow-lg border z-50 ${
                  isDark ? 'bg-[#161b22] border-[#21262d]' : 'bg-white border-slate-200'
                }`}>
                  <button
                    onClick={() => handleExport('mspdi')}
                    className="w-full px-4 py-3 text-left text-xs font-bold flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-[#21262d] rounded-t-xl"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    MS Project (XML)
                  </button>
                  <button
                    onClick={() => handleExport('xer')}
                    className="w-full px-4 py-3 text-left text-xs font-bold flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-[#21262d] rounded-b-xl"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    Primavera P6 (XER)
                  </button>
                </div>
              )}
            </div>
            <Link 
              href={`/dashboard/${projectid}/reports`} 
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-sm ${
                isDark ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-orange-950/10' : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              Generate Report
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full p-6 md:p-10">
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-8"
            >
              {/* Vital Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col justify-between h-44">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Budget</span>
                  <div>
                    <h3 className="text-3xl font-black text-slate-900 tracking-tight">{fmt(project.budget, project.currency)}</h3>
                    <p className="text-xs font-bold text-slate-400 mt-1">Project capital</p>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col justify-between h-44 group">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Spent to date</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${spentPct > 100 ? 'bg-red-50 text-red-600' : 'bg-orange-50 text-orange-600'}`}>
                      {spentPct}% utilized
                    </span>
                  </div>
                  <div>
                    <h3 className={`text-3xl font-black tracking-tight ${spentPct > 100 ? 'text-red-500' : 'text-slate-900'}`}>
                      {fmt(totalSpent, project.currency)}
                    </h3>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full mt-3 overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-1000 ${spentPct > 100 ? 'bg-red-500' : 'bg-orange-500'}`}
                        style={{ width: `${Math.min(100, spentPct)}%` }}
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col justify-between h-44">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Open Tasks</span>
                  <div>
                    <h3 className="text-3xl font-black text-slate-900 tracking-tight">{metrics?.open_tasks || 0}</h3>
                    <p className="text-xs font-bold text-slate-400 mt-1 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> Priority updates required
                    </p>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col justify-between h-44">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Schedule status</span>
                  <div>
                    <h3 className="text-2xl font-black text-emerald-600 tracking-tight flex items-center gap-2">
                       Active
                    </h3>
                    <p className="text-xs font-bold text-slate-400 mt-1">Healthy project velocity</p>
                  </div>
                </div>
              </div>

              {/* Detail Breakdown */}
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  {/* Timeline Preview */}
                  <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm p-8 md:p-10">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-2xl font-black tracking-tight">Timeline Execution</h3>
                      <button onClick={() => setActiveTab('timeline')} className="text-sm font-bold text-orange-600 flex items-center gap-1">
                        View Gantt <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="space-y-6">
                      {timeline.slice(0, 4).map((item) => (
                        <div key={item.id} className="group cursor-pointer">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-bold text-slate-700">{item.activity_name}</span>
                            <span className="text-xs font-black text-slate-400 uppercase">{item.progress}%</span>
                          </div>
                          <div className="w-full h-2 bg-slate-50 border border-slate-100 rounded-full relative">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${item.progress}%` }}
                              transition={{ duration: 1, ease: 'easeOut' }}
                              className="h-full bg-slate-900 rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tasks Preview */}
                  <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm p-8 md:p-10">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-2xl font-black tracking-tight">Recent Punchlist</h3>
                      <button onClick={() => setActiveTab('tasks')} className="text-sm font-bold text-orange-600 flex items-center gap-1">
                        Full List <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="space-y-2">
                      {tasks.slice(0, 5).map((task) => (
                        <div key={task.task_id} className="flex items-center gap-4 p-4 hover:bg-slate-50 rounded-2xl transition-colors border border-transparent hover:border-slate-100">
                          <div className={`w-2 h-2 rounded-full ${task.status === 'Done' ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                          <div className="flex-1">
                            <p className="text-sm font-bold text-slate-900">{task.title}</p>
                            <p className="text-[10px] font-bold text-slate-400 uppercase mt-0.5">{task.assigned_to || 'Unassigned'}</p>
                          </div>
                          <span className={`text-[10px] font-black px-2 py-1 rounded-lg uppercase bg-slate-100 text-slate-500 border border-slate-200`}>
                            {task.priority}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar Info */}
                <div className="space-y-8">
                  <div className="bg-slate-900 text-white rounded-[40px] p-10 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full -mr-16 -mt-16 blur-3xl" />
                    <h3 className="text-2xl font-black tracking-tight mb-6 relative z-10 text-white">Project Intel</h3>
                    <div className="space-y-6 relative z-10">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                          <Users className="w-5 h-5 text-orange-400" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Client</p>
                          <p className="font-bold text-white leading-tight">{project.client_name}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                          <Clock className="w-5 h-5 text-teal-400" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Duration</p>
                          <p className="font-bold text-white leading-tight">
                            {new Date(project.start_date).toLocaleDateString()} — {new Date(project.end_date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                          <DollarSign className="w-5 h-5 text-emerald-400" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Unit Rate Basis</p>
                          <p className="font-bold text-white leading-tight">{project.currency} / Standard</p>
                        </div>
                      </div>
                    </div>
                    <button className="w-full mt-10 py-4 bg-orange-500 text-white rounded-2xl font-bold hover:bg-orange-600 transition-all active:scale-95 text-center shadow-2xl shadow-orange-500/20">
                      Download All Assets
                    </button>
                  </div>
                  
                  <div className="bg-white border border-slate-100 rounded-[40px] p-10 flex flex-col items-center text-center">
                     <AlertCircle className="w-12 h-12 text-blue-500 mb-6" />
                     <h4 className="text-lg font-black tracking-tight text-slate-900">Need expert help?</h4>
                     <p className="text-sm font-medium text-slate-500 mt-2 mb-8">
                       Hire a certified Remote Project Manager to audit your SOW and Budget.
                     </p>
                     <Link href="/hire-pm" className="text-sm font-bold text-orange-600 hover:orange-700 transition-colors">
                       Hiring Dashboard →
                     </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'costs' && (
            <motion.div
              key="costs"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-8"
            >
               <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-black tracking-tight">Cost Control Center</h2>
                  <p className="text-slate-500 font-medium">Real-time expenditure tracking and budget variance analysis</p>
                </div>
                <button 
                  onClick={() => setShowCostForm(!showCostForm)}
                  className="px-6 py-3 bg-slate-900 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-md active:scale-95"
                >
                  <Plus className="w-5 h-5" />
                  {showCostForm ? 'Cancel Entry' : 'Manual Cost Entry'}
                </button>
              </div>

              <AnimatePresence>
                {showCostForm && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden bg-white border border-slate-200 rounded-[32px] shadow-sm mb-10"
                  >
                    <form onSubmit={handleAddCost} className="p-10 space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-widest text-[10px]">Cost Date</label>
                          <input type="date" value={costForm.cost_date} onChange={e => setCostForm({...costForm, cost_date: e.target.value})} className="w-full px-5 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-orange-500/20 focus:ring-4 focus:ring-orange-500/5 outline-none transition-all font-bold" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-widest text-[10px]">Category</label>
                          <select value={costForm.category} onChange={e => setCostForm({...costForm, category: e.target.value})} className="w-full px-5 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-orange-500/20 focus:ring-4 focus:ring-orange-500/5 outline-none transition-all font-bold">
                            {CATEGORIES.map(c => <option key={c}>{c}</option>)}
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-widest text-[10px]">Amount ({project.currency})</label>
                          <input type="number" value={costForm.amount} onChange={e => setCostForm({...costForm, amount: e.target.value})} placeholder="0.00" className="w-full px-5 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-orange-500/20 focus:ring-4 focus:ring-orange-500/5 outline-none transition-all font-bold" />
                        </div>
                        <div className="lg:col-span-3 space-y-2">
                          <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-widest text-[10px]">Description</label>
                          <input type="text" value={costForm.description} onChange={e => setCostForm({...costForm, description: e.target.value})} placeholder="e.g. Site concrete for level 2 slab" className="w-full px-5 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-orange-500/20 focus:ring-4 focus:ring-orange-500/5 outline-none transition-all font-bold" />
                        </div>
                      </div>
                      <div className="flex justify-end pt-4 border-t border-slate-100 gap-4">
                        <button type="submit" className="px-10 py-4 bg-orange-500 text-white rounded-2xl font-bold hover:bg-orange-600 shadow-xl shadow-orange-200 transition-all active:scale-95">Save Entry</button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="bg-white border border-slate-100 rounded-[40px] shadow-sm overflow-hidden">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-100">
                      <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Date</th>
                      <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Description</th>
                      <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Category</th>
                      <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Amount</th>
                      <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {costs.map((cost) => (
                      <tr key={cost.cost_id} className="border-b border-slate-50 last:border-none group hover:bg-slate-50/50 transition-colors">
                        <td className="px-8 py-6 text-sm font-bold text-slate-600">{new Date(cost.cost_date).toLocaleDateString()}</td>
                        <td className="px-8 py-6 text-sm font-black text-slate-900">{cost.description}</td>
                        <td className="px-8 py-6">
                           <span className="px-2 py-1 rounded-lg bg-slate-100 text-[10px] font-black text-slate-500 uppercase tracking-wider">{cost.category}</span>
                        </td>
                        <td className="px-8 py-6 text-base font-black text-slate-900">{fmt(cost.amount, project.currency)}</td>
                        <td className="px-8 py-6 text-right">
                          <button className="p-2 opacity-0 group-hover:opacity-100 hover:bg-slate-200 rounded-lg transition-all text-slate-400">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                    {costs.length === 0 && (
                      <tr>
                        <td colSpan={5} className="px-8 py-20 text-center text-slate-400 font-bold">No cost entries yet for this project.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {activeTab === 'timeline' && (
            <motion.div
              key="timeline"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-8"
            >
              <div className="bg-white border border-slate-100 rounded-[40px] shadow-sm p-8 md:p-10">
                <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
                  <div>
                    <h3 className="text-2xl font-black tracking-tight">Project Schedule</h3>
                    <p className="text-slate-500 font-medium">{project.start_date} → {project.end_date}</p>
                  </div>
                  <div className="flex gap-3 items-center flex-wrap">
                    <button
                      className="px-4 py-2 border border-emerald-500/30 text-emerald-600 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-emerald-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isPublicSolar || templateDownloading}
                      onClick={handleDownloadTemplate}
                    >
                      <Download className="w-4 h-4" />
                      {templateDownloading ? 'Preparing...' : 'Get Template'}
                    </button>
                    <button
                      className="px-4 py-2 bg-orange-500 text-white rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isPublicSolar || templateImporting}
                      onClick={() => templateInputRef.current?.click()}
                    >
                      <Upload className="w-4 h-4" />
                      {templateImporting ? 'Uploading...' : 'Upload Template'}
                    </button>
                  </div>
                </div>
                {templateImportMsg && (
                  <div className="px-4 py-2 bg-amber-50 border border-amber-200 rounded-lg text-amber-700 text-sm font-medium mb-4">
                    {templateImportMsg}
                  </div>
                )}
                {templateImportError && (
                  <div className="px-4 py-2 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm font-medium mb-4">
                    {templateImportError}
                  </div>
                )}
                <input
                  ref={templateInputRef}
                  type="file"
                  accept=".xlsx,.xlsm,.xls,.csv"
                  style={{ display: 'none' }}
                  onChange={(e) => {
                    const f = e.target.files?.[0]
                    e.currentTarget.value = ''
                    if (!f) return
                    void handleUploadMasterTemplate(f)
                  }}
                />
                <div className="text-center py-20 text-slate-400">
                  <Calendar className="w-16 h-16 text-slate-200 mx-auto mb-4" />
                  <p className="font-medium">No schedule data yet. Upload the CPOS Master Template to populate the timeline.</p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'tasks' && (
            <motion.div
              key="tasks"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-8"
            >
              <div className="bg-white border border-slate-100 rounded-[40px] shadow-sm p-8 md:p-10">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-black tracking-tight">Tasks & SOW</h3>
                  <Link href={`/dashboard/${projectid}/sow`} className="text-sm font-bold text-orange-600 flex items-center gap-1">
                    Full SOW <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="space-y-2">
                  {tasks.slice(0, 5).map((task) => (
                    <div key={task.task_id} className="flex items-center gap-4 p-4 hover:bg-slate-50 rounded-2xl transition-colors border border-transparent hover:border-slate-100">
                      <div className={`w-2 h-2 rounded-full ${task.status === 'Done' ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                      <div className="flex-1">
                        <p className="text-sm font-bold text-slate-900">{task.title}</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase mt-0.5">{task.assigned_to || 'Unassigned'}</p>
                      </div>
                      <span className={`text-[10px] font-black px-2 py-1 rounded-lg uppercase bg-slate-100 text-slate-500 border border-slate-200`}>
                        {task.priority}
                      </span>
                    </div>
                  ))}
                  {tasks.length === 0 && (
                    <div className="text-center py-10 text-slate-400">
                      <CheckSquare className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                      <p className="font-medium">No tasks yet. Upload the CPOS Master Template to auto-generate tasks from SOW.</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer System Status */}
      <footer className="bg-white border-t border-slate-200 px-6 py-4 flex items-center justify-between pointer-events-none">
         <div className="flex items-center gap-6">
           <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-lg shadow-emerald-200" />
             <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Database Sync: OK</span>
           </div>
           <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-lg shadow-emerald-200" />
             <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">S3 Bucket: Connected</span>
           </div>
         </div>
         <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">CPOS 2026 • v3.4.1</span>
      </footer>
    </div>
  )
}
