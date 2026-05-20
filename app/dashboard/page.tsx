'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../supabase'
import { useRouter } from 'next/navigation'
import { Plus, LogOut, User, LayoutDashboard, Search, Settings, ExternalLink, Briefcase, ChevronRight, Shield } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { useTheme } from '../../lib/theme'
import ThemeSelector from '../../components/ThemeSelector'

type Project = {
  projectid: string
  project_name: string
  project_code: string
  client_name: string
  location: string
  status: string
  budget: number
  currency: string
  completion_percentage?: number
}

const statusColors: Record<string, { bg: string; text: string; ring: string }> = {
  Active:    { bg: 'bg-emerald-50', text: 'text-emerald-700', ring: 'ring-emerald-600/10' },
  Planning:  { bg: 'bg-indigo-50', text: 'text-indigo-700', ring: 'ring-indigo-600/10' },
  'On Hold': { bg: 'bg-amber-50', text: 'text-amber-700', ring: 'ring-amber-600/10' },
  Closed:    { bg: 'bg-slate-50', text: 'text-slate-600', ring: 'ring-slate-600/10' },
}

const getStatusColors = (status: string, isDark: boolean) => {
  if (isDark) {
    const darks: Record<string, { bg: string; text: string; ring: string }> = {
      Active:    { bg: 'bg-emerald-950/40', text: 'text-emerald-400', ring: 'ring-emerald-500/20' },
      Planning:  { bg: 'bg-indigo-950/40', text: 'text-indigo-400', ring: 'ring-indigo-500/20' },
      'On Hold': { bg: 'bg-amber-950/40', text: 'text-amber-400', ring: 'ring-amber-500/30' },
      Closed:    { bg: 'bg-zinc-900', text: 'text-zinc-400', ring: 'ring-zinc-805' },
    }
    return darks[status] || darks['Planning']
  }
  return statusColors[status] || statusColors['Planning']
}

export default function Dashboard() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)
  const router = useRouter()
  const { theme, setTheme, isDark } = useTheme()

  useEffect(() => {
    checkSessionAndLoad()
  }, [])

  async function checkSessionAndLoad() {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push('/login')
      return
    }
    fetchProjects(user.id)
  }

  async function fetchProjects(userId: string) {
    const { data: profile } = await supabase
      .from('users')
      .select('role')
      .eq('userid', userId)
      .maybeSingle()

    const role = String(profile?.role || '').toLowerCase()
    const adminByRole = role === 'admin' || role === 'administrator'
    setIsAdmin(adminByRole)

    if (adminByRole) {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false })

      if (!error) setProjects(data || [])
      setLoading(false)
      return
    }

    const { data, error } = await supabase.rpc('list_project_teasers')
    if (!error) setProjects((data as Project[]) || [])
    setLoading(false)
  }

  async function handleSignOut() {
    await supabase.auth.signOut()
    router.push('/login')
    router.refresh()
  }

  return (
    <div 
      className={`min-h-screen flex font-sans transition-all duration-300 ${
        isDark ? 'bg-[#0a0c0e] text-[#c9d1d9]' : 'bg-[#F8FAFC] text-slate-900'
      }`}
      style={isDark ? {
        background: '#0a0c0e',
        backgroundImage: 'linear-gradient(rgba(96,165,250,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.025) 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      } : {}}
    >
      {/* Sidebar - Desktop */}
      <aside 
        className={`w-72 border-r hidden lg:flex flex-col h-screen fixed transition-all duration-300 ${
          isDark ? 'bg-[#0d1117] border-[#21262d] text-[#c9d1d9]' : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        <div className={`p-8 border-b ${isDark ? 'border-[#21262d]' : 'border-slate-100'}`}>
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-200 flex items-center justify-center animate-pulse">
              <Shield className="text-white w-6 h-6" />
            </div>
            <div>
              <span className={`text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>CPOS</span>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Remote PM</p>
            </div>
          </Link>
        </div>

        <nav className="flex-1 p-6 space-y-2">
          <button 
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-bold transition-all ${
              isDark 
                ? 'bg-[#1b2028] border border-[#30363d] text-orange-400 shadow-sm' 
                : 'bg-orange-50 text-orange-700 shadow-sm'
            }`}
          >
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </button>
          <button 
            onClick={() => router.push('/account')} 
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-bold transition-all ${
              isDark ? 'text-slate-400 hover:bg-[#161b22] hover:text-[#e6edf3]' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <User className="w-5 h-5" />
            Profile
          </button>
          <button 
            onClick={() => router.push('/payments')} 
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-bold transition-all ${
              isDark ? 'text-slate-400 hover:bg-[#161b22] hover:text-[#e6edf3]' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Briefcase className="w-5 h-5" />
            Payments
          </button>
          <button 
            onClick={() => router.push('/hire-pm')} 
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-bold transition-all mt-8 ${
              isDark ? 'text-teal-400 hover:bg-teal-950/20' : 'text-teal-600 hover:bg-teal-50'
            }`}
          >
            <Sparkles className="w-5 h-5" />
            Hire Remote PM
          </button>
        </nav>

        <div className={`p-6 border-t ${isDark ? 'border-[#21262d]' : 'border-slate-100'}`}>
          <button 
            onClick={handleSignOut} 
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-bold transition-all ${
              isDark ? 'text-red-400 hover:bg-[#1c1515] hover:text-red-300' : 'text-red-600 hover:bg-red-50'
            }`}
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-72 p-6 md:p-12">
        <header className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h1 className={`text-4xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>Active Projects</h1>
            <p className={`${isDark ? 'text-slate-400' : 'text-slate-500'} font-medium mt-2 flex items-center gap-3 flex-wrap`}>
              <span>Construction Project Operating System <span className="text-[11px] opacity-75 font-normal lowercase">by Uddi Benkiff</span></span>
              <span className={`w-1 h-1 rounded-full ${isDark ? 'bg-[#30363d]' : 'bg-slate-300'}`} />
              <span>{projects.length} project{projects.length !== 1 ? 's' : ''} tracking</span>
            </p>
          </div>
          
          <div className="flex items-center gap-4 flex-wrap">
            <ThemeSelector theme={theme} setTheme={setTheme} />
            <button 
              onClick={() => router.push('/projects/new')}
              className={`px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all active:scale-95 shadow-xl ${
                isDark 
                  ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-orange-500/10' 
                  : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-200'
              }`}
            >
              <Plus className="w-5 h-5" />
              New Project
            </button>
          </div>
        </header>

        {isAdmin && (
          <div className={`mb-8 p-6 rounded-3xl flex items-center justify-between border ${
            isDark 
              ? 'bg-[#1c1510] border-orange-500/20 text-[#f59e0b]' 
              : 'bg-orange-50 border-orange-100 text-orange-700'
          }`}>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider">Administrator Mode</p>
              <p className={`text-xs font-medium mt-1 ${isDark ? 'text-orange-400/80' : 'text-orange-600'}`}>Viewing all operational projects from all users.</p>
            </div>
            <a 
              href="/CPOS_DEV_HANDOVER.md" 
              download 
              className={`px-4 py-2 rounded-xl text-xs font-bold shadow-sm transition-all ${
                isDark ? 'bg-[#0d1117] text-orange-400 hover:bg-[#161b22] border border-[#30363d]' : 'bg-white text-orange-700 hover:bg-orange-100'
              }`}
            >
              Dev Handover Report
            </a>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
            {[1, 2, 3].map(i => (
              <div 
                key={i} 
                className={`h-64 rounded-[32px] border-2 ${
                  isDark ? 'bg-[#0d1117] border-[#21262d]' : 'bg-slate-100 border-slate-50'
                }`} 
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && projects.length === 0 && (
          <div className={`text-center py-20 px-8 rounded-[48px] border ${
            isDark ? 'bg-[#0d1117] border-[#21262d]' : 'bg-white border-slate-100 shadow-sm'
          }`}>
            <div className="w-20 h-20 bg-orange-50 text-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <LayoutDashboard className="w-10 h-10" />
            </div>
            <h3 className={`text-2xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>No projects tracked yet</h3>
            <p className="text-slate-500 font-medium max-w-sm mx-auto mt-2 mb-8">
              Start by creating your first project folder or explore the demo templates.
            </p>
            <button 
              onClick={() => router.push('/projects/new')}
              className="px-8 py-4 bg-orange-500 text-white rounded-2xl font-bold hover:bg-orange-600 transition-all shadow-xl shadow-orange-200 active:scale-95"
            >
              Create First Project
            </button>
          </div>
        )}

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const sc = getStatusColors(project.status, isDark)
            return (
              <motion.div
                key={project.projectid}
                whileHover={{ y: -5 }}
                className={`rounded-[32px] p-8 shadow-sm transition-all cursor-pointer group border ${
                  isDark 
                    ? 'bg-[#0d1117] border-[#21262d] text-[#c9d1d9] hover:shadow-xl hover:shadow-orange-500/5 hover:border-orange-500/30' 
                    : 'bg-white border-slate-100 text-slate-900 hover:shadow-xl hover:shadow-slate-200/50 hover:border-orange-100'
                }`}
                onClick={() => router.push(`/dashboard/${project.projectid}`)}
              >
                <div className="flex justify-between items-start mb-6">
                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    {project.project_code}
                  </span>
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${sc.bg} ${sc.text} ring-1 ring-inset ${sc.ring}`}>
                    {project.status}
                  </span>
                </div>

                <h3 className={`text-xl font-black tracking-tight leading-tight mb-6 transition-colors ${
                  isDark ? 'text-white group-hover:text-orange-400' : 'text-slate-900 group-hover:text-orange-600'
                }`}>
                  {project.project_name}
                </h3>

                <div className={`space-y-3 pt-6 border-t ${isDark ? 'border-[#21262d]' : 'border-slate-50'}`}>
                  <div className="flex justify-between items-center text-xs">
                    <span className={`font-bold uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Client</span>
                    <span className={`font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{project.client_name || '—'}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className={`font-bold uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Progress</span>
                    <div className="flex items-center gap-2">
                      <div className={`w-16 h-1.5 rounded-full overflow-hidden ${isDark ? 'bg-[#161b22]' : 'bg-slate-100'}`}>
                        <div 
                          className="h-full bg-orange-500 rounded-full" 
                          style={{ width: `${project.completion_percentage || 0}%` }}
                        />
                      </div>
                      <span className={`font-bold ${isDark ? 'text-slate-300' : 'text-slate-900'}`}>{Math.round(project.completion_percentage || 0)}%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className={`font-bold uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Budget</span>
                    <span className="font-bold text-emerald-500">
                      {project.currency} {Number(project.budget).toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-end text-[10px] font-bold text-orange-500 uppercase tracking-widest group-hover:gap-2 transition-all">
                  Open Project
                  <ChevronRight className="w-4 h-4" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </main>
    </div>
  )
}

function Sparkles(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  )
}
