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

          {(activeTab === 'timeline' || activeTab === 'tasks') && (
             <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
             >
               <div className="bg-white border border-slate-100 rounded-[40px] p-20 text-center text-slate-400 font-bold">
                  <BarChart3 className="w-16 h-16 text-slate-200 mx-auto mb-6" />
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">Advanced Management Tools</h3>
                  <p className="text-slate-500 mt-2">Gantt and SOW views are being optimized for higher density construction data.</p>
                  <div className="flex items-center justify-center gap-4 mt-10">
                    <button onClick={() => fetchAll()} className="px-6 py-3 bg-slate-900 text-white rounded-2xl font-bold uppercase tracking-widest text-xs">Refresh Core Data</button>
                    <button className="px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-2xl font-bold uppercase tracking-widest text-xs">Request Audit</button>
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
