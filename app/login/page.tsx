'use client'
import { Suspense, useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { supabase } from '../supabase'
import { Shield, ArrowRight, Mail, Lock, Loader2, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import Link from 'next/link'

/** After login, only allow same-origin paths (no open redirects). */
function safeNextPath(raw: string | null): string {
  if (!raw) return '/dashboard'
  try {
    const decoded = decodeURIComponent(raw.trim())
    if (!decoded.startsWith('/') || decoded.startsWith('//')) return '/dashboard'
    return decoded
  } catch {
    return '/dashboard'
  }
}

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const registered = searchParams.get('registered')
  const emailFromQuery = searchParams.get('email')

  // Automatically redirect if user already has an active session
  useEffect(() => {
    // Listen for global token refresh failures to clean up locally
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event) => {
      if ((event as any) === 'TOKEN_REFRESH_FAILED') {
        console.warn('Refresh token failed/expired on login page, clearing local session')
        try {
          await supabase.auth.signOut({ scope: 'local' })
        } catch (_) {}
      }
    })

    async function checkExistingSession() {
      try {
        const { data: { user }, error } = await supabase.auth.getUser()
        if (error) {
          console.warn('Invalid or rate-limited session detected on login page, clearing locally:', error)
          await supabase.auth.signOut({ scope: 'local' })
          return
        }
        if (user) {
          router.push(safeNextPath(searchParams.get('next')))
        }
      } catch (err) {
        console.error('Error checking active session:', err)
        try {
          await supabase.auth.signOut({ scope: 'local' })
        } catch (_) {}
      }
    }
    checkExistingSession()

    return () => {
      subscription?.unsubscribe()
    }
  }, [router, searchParams])

  useEffect(() => {
    if (emailFromQuery) {
      try {
        setEmail(decodeURIComponent(emailFromQuery))
      } catch {
        setEmail(emailFromQuery)
      }
    }
  }, [emailFromQuery])

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) {
        setError(error.message)
        return
      }
      setLoading(false)
      router.push(safeNextPath(searchParams.get('next')))
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] bg-orange-400/10 rounded-full blur-[120px]" />
        <div className="absolute top-[60%] -right-[5%] w-[40%] h-[40%] bg-teal-400/10 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-xl shadow-orange-200 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Shield className="text-white w-7 h-7" />
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-black tracking-tight text-slate-900 leading-none">CPOS</h1>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">Remote Project Manager</p>
            </div>
          </Link>
        </div>

        <div className="bg-white/80 backdrop-blur-xl border border-white p-8 md:p-10 rounded-[40px] shadow-2xl shadow-slate-200/50">
          <div className="mb-8">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Welcome Back</h2>
            <p className="text-slate-500 font-medium mt-2">Manage your projects with precision</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400 group-focus-within:text-orange-500 transition-colors" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  required
                  className="block w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-transparent rounded-2xl text-slate-900 placeholder:text-slate-400 font-medium focus:bg-white focus:border-orange-500/20 focus:ring-4 focus:ring-orange-500/5 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-sm font-bold text-slate-700">Password</label>
                <Link href="/reset-password" className="text-xs font-bold text-orange-600 hover:text-orange-700 transition-colors">
                  Forgot?
                </Link>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400 group-focus-within:text-orange-500 transition-colors" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="block w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-transparent rounded-2xl text-slate-900 placeholder:text-slate-400 font-medium focus:bg-white focus:border-orange-500/20 focus:ring-4 focus:ring-orange-500/5 outline-none transition-all"
                />
              </div>
            </div>

            <AnimatePresence>
              {error && (
                <motion.div 
                  initial={{ opacity: 0, filter: 'blur(10px)', y: -10 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                  className="p-4 bg-red-50 border border-red-100 rounded-2xl text-red-600 text-sm font-bold flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  {error}
                </motion.div>
              )}
              {registered === '1' && !error && (
                <motion.div 
                  initial={{ opacity: 0, filter: 'blur(10px)', y: -10 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                  className="p-4 bg-green-50 border border-green-100 rounded-2xl text-green-600 text-sm font-bold flex items-center gap-3"
                >
                  <Sparkles className="w-4 h-4 text-green-500" />
                  Account created! Check your email to confirm.
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all active:scale-95 shadow-xl shadow-slate-200 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
            >
              {loading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                <>
                  Enter Dashboard
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-slate-100 space-y-4">
            <p className="text-center text-sm font-medium text-slate-500">
              Don't have an account? {' '}
              <Link href="/register" className="text-orange-600 font-bold hover:underline transition-all">
                Create one for free
              </Link>
            </p>
            <div className="flex flex-col gap-2">
              <Link href="/dashboard/demo" className="flex items-center justify-center py-3 px-4 bg-orange-50 text-orange-700 rounded-xl text-xs font-bold hover:bg-orange-100 transition-all uppercase tracking-wider">
                Browse Demos (Public)
              </Link>
              <Link href="/hire-pm" className="flex items-center justify-center py-3 px-4 bg-teal-50 text-teal-700 rounded-xl text-xs font-bold hover:bg-teal-100 transition-all uppercase tracking-wider">
                Hire a Project Manager
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center flex items-center justify-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <span>Secure AES-256</span>
          <span className="w-1 h-1 rounded-full bg-slate-200" />
          <span>Privacy First</span>
          <span className="w-1 h-1 rounded-full bg-slate-200" />
          <span>v1.2.0</span>
        </div>
      </motion.div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
          <Loader2 className="w-10 h-10 text-orange-500 animate-spin" />
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  )
}
