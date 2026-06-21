'use client'
import { useState, useEffect } from 'react'
import { supabase } from '../app/supabase'
import { X, Calendar, DollarSign, Clock, Users, Wrench, FileText, Camera, ShieldAlert, History, Activity, Sparkles } from 'lucide-react'

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
  baseline_start?: string; baseline_days?: number; baseline_end?: string
  planned_start?: string;  planned_days?: number;  planned_end?: string
  actual_start?: string;   actual_days?: number;   actual_end?: string
  percent_complete?: number
  schedule_variance?: number
  unit?: string; quantity?: number; waste_pct?: number
  net_qty?: number; unit_rate?: number; boq_amount?: number
  estimated_cost?: number; actual_cost?: number
  cost_variance?: number; cost_var_pct?: number
  plant?: string; site_equipment?: string; manpower?: string
  risk_level?: string; status?: string
  notes?: string
}

type ActivityLog = {
  id?: string
  project_id: string
  sow_item_id: string
  logged_by_email?: string
  logged_date: string
  actual_start?: string
  actual_end?: string
  percent_complete: number
  actual_cost?: number
  labor_hours?: number
  plant_hours?: number
  materials_qty?: number
  materials_unit?: string
  progress_notes?: string
  delay_reason?: string
  photo_urls: string[]
  status: string
  created_at?: string
}

interface ActivityLogModalProps {
  isOpen: boolean
  onClose: () => void
  sowItem: SowItem
  projectCurrency: string
  isDark: boolean
  onSave: () => void
}

export default function ActivityLogModal({
  isOpen,
  onClose,
  sowItem,
  projectCurrency = 'KES',
  isDark,
  onSave
}: ActivityLogModalProps) {
  const [activeTab, setActiveTab] = useState<'log' | 'history'>('log')
  const [history, setHistory] = useState<ActivityLog[]>([])
  const [historyLoading, setHistoryLoading] = useState(false)
  
  // Form states
  const [actualStart, setActualStart] = useState(sowItem.actual_start || '')
  const [actualEnd, setActualEnd] = useState(sowItem.actual_end || '')
  const [percentComplete, setPercentComplete] = useState(sowItem.percent_complete || 0)
  const [actualCost, setActualCost] = useState<string>(sowItem.actual_cost ? String(sowItem.actual_cost) : '')
  const [laborHours, setLaborHours] = useState<string>('')
  const [plantHours, setPlantHours] = useState<string>('')
  const [materialsQty, setMaterialsQty] = useState<string>('')
  const [progressNotes, setProgressNotes] = useState('')
  const [delayReason, setDelayReason] = useState('')
  const [photoUrls, setPhotoUrls] = useState<string[]>([])
  const [status, setStatus] = useState(sowItem.status || 'Not Started')
  
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  // Theme support
  const bgCol = isDark ? 'bg-[#0d1117]' : 'bg-white'
  const textCol = isDark ? 'text-[#c9d1d9]' : 'text-slate-800'
  const headerBg = isDark ? 'bg-[#161b22]' : 'bg-slate-550'
  const borderCol = isDark ? 'border-[#21262d]' : 'border-slate-200'
  const inputBg = isDark ? 'bg-[#0a0c0e]' : 'bg-white'
  const subText = isDark ? 'text-slate-400' : 'text-slate-500'

  useEffect(() => {
    if (isOpen) {
      fetchHistory()
      // Detect and suggest status based on percent
      if (percentComplete === 100) {
        setStatus('Complete')
      } else if (percentComplete > 0) {
        setStatus('In Progress')
      } else {
        setStatus(sowItem.status || 'Not Started')
      }
    }
  }, [isOpen, sowItem, percentComplete])

  async function fetchHistory() {
    setHistoryLoading(true)
    try {
      const { data, error } = await supabase
        .from('activity_logs')
        .select('*')
        .eq('sow_item_id', sowItem.sow_id)
        .order('logged_date', { ascending: false })

      if (error) throw error
      if (data) setHistory(data)
    } catch (e: any) {
      console.error('Error loading activity logs:', e)
    } finally {
      setHistoryLoading(false)
    }
  }

  // Handle image attachment client-side (convert to base64 for absolute reliability)
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    Array.from(files).forEach((file) => {
      const reader = new FileReader()
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setPhotoUrls((prev) => [...prev, reader.result as string])
        }
      }
      reader.readAsDataURL(file)
    })
  }

  const removePhoto = (index: number) => {
    setPhotoUrls((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSave = async () => {
    setSaving(true)
    setError('')
    setSuccess('')

    try {
      const { data: { user } } = await supabase.auth.getUser()
      const userEmail = user?.email || 'sandbox-developer@example.com'

      // Prepare variance metrics
      const actualCostNum = actualCost ? parseFloat(actualCost) : 0
      const baselineCostNum = sowItem.estimated_cost || sowItem.boq_amount || 0
      const cVariance = actualCostNum - baselineCostNum
      const cVariancePct = baselineCostNum > 0 ? (cVariance / baselineCostNum) * 100 : 0

      // Compute schedule variance (days actual minus baseline duration)
      let sVariance = 0
      if (actualEnd && sowItem.baseline_end) {
        const actLast = new Date(actualEnd)
        const baseLast = new Date(sowItem.baseline_end)
        sVariance = Math.round((actLast.getTime() - baseLast.getTime()) / 86400000)
      } else if (percentComplete < 100 && sowItem.baseline_end) {
        // behind schedule days relative to today
        const today = new Date()
        const baseLast = new Date(sowItem.baseline_end)
        if (today > baseLast) {
          sVariance = Math.round((today.getTime() - baseLast.getTime()) / 86400000)
        }
      }

      // 1. Insert detailed Activity Log
      const activityPayload: ActivityLog = {
        project_id: sowItem.projectid,
        sow_item_id: sowItem.sow_id,
        logged_by_email: userEmail,
        logged_date: new Date().toISOString().split('T')[0],
        actual_start: actualStart || undefined,
        actual_end: actualEnd || undefined,
        percent_complete: percentComplete,
        actual_cost: actualCost ? actualCostNum : undefined,
        labor_hours: laborHours ? parseInt(laborHours) : undefined,
        plant_hours: plantHours ? parseInt(plantHours) : undefined,
        materials_qty: materialsQty ? parseFloat(materialsQty) : undefined,
        materials_unit: sowItem.unit || 'm²',
        progress_notes: progressNotes || undefined,
        delay_reason: status === 'Delayed' ? (delayReason || 'Unspecified') : undefined,
        photo_urls: photoUrls,
        status: status
      }

      const { error: logErr } = await supabase
        .from('activity_logs')
        .insert([activityPayload])

      if (logErr) throw logErr

      // 2. Roll up and Update the actual sow_item fields
      const updatePayload = {
        actual_start: actualStart || null,
        actual_end: actualEnd || null,
        percent_complete: percentComplete,
        actual_cost: actualCost ? actualCostNum : null,
        status: status,
        cost_variance: cVariance,
        cost_var_pct: cVariancePct,
        schedule_variance: sVariance,
        notes: progressNotes ? `Latest Log: ${progressNotes}` : sowItem.notes
      }

      const { error: sowErr } = await supabase
        .from('sow_items')
        .update(updatePayload)
        .eq('sow_id', sowItem.sow_id)

      if (sowErr) throw sowErr

      setSuccess('Activity successfully logged & synced!')
      onSave()
      
      // Keep modal open for a brief moment then exit
      setTimeout(() => {
        onClose()
      }, 800)

    } catch (e: any) {
      setError(e.message || 'Error saving activity log')
    } finally {
      setSaving(false)
    }
  }

  if (!isOpen) return null

  const estCost = sowItem.estimated_cost || sowItem.boq_amount || 0
  const inputCostVal = actualCost ? parseFloat(actualCost) : 0
  const isOverBudget = estCost > 0 && inputCostVal > estCost
  const overBudgetValue = inputCostVal - estCost

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-all animate-fade-in">
      <div 
        id="activity-log-modal"
        className={`w-full max-w-2xl rounded-[32px] border ${borderCol} ${bgCol} shadow-2xl overflow-hidden flex flex-col max-h-[90vh]`}
      >
        {/* Modal Header */}
        <div className={`p-6 border-b ${borderCol} flex items-center justify-between`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
              <Activity className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <h2 className={`text-base font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                SITE ACTIVITIES LOGGING ENGINE
              </h2>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                SOW #{sowItem.sow_number} • {sowItem.sub_item_l3 || sowItem.particulars || 'L3 Item'}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className={`p-2 rounded-lg transition-colors ${isDark ? 'hover:bg-[#161b22] text-slate-400' : 'hover:bg-slate-100 text-slate-500'}`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className={`flex border-b ${borderCol} px-6`}>
          <button
            onClick={() => setActiveTab('log')}
            className={`py-3 px-4 text-xs font-bold leading-none border-b-2 tracking-wider uppercase transition-all flex items-center gap-2 ${
              activeTab === 'log'
                ? 'border-orange-500 text-orange-500'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Log Free Entry
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`py-3 px-4 text-xs font-bold leading-none border-b-2 tracking-wider uppercase transition-all flex items-center gap-2 ${
              activeTab === 'history'
                ? 'border-orange-500 text-orange-500'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <History className="w-3.5 h-3.5" />
            Historical Logs ({history.length})
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {error && (
            <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/30 text-red-400 text-xs font-bold flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-red-400 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{success}</span>
            </div>
          )}

          {activeTab === 'log' ? (
            <div className="space-y-6">
              {/* Baseline & Operational Plan References */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 1. Locked Contractual Baseline */}
                <div className={`p-4 rounded-2xl border ${borderCol} ${isDark ? 'bg-[#161b22]/30' : 'bg-slate-50/50'} space-y-3`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">
                      📌 Contractual Baseline
                    </span>
                    <span className="text-[8px] font-bold bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded uppercase font-mono">
                      Locked
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-[9px] text-slate-500 block font-bold uppercase tracking-wider">Start Date</span>
                      <span className={`font-mono text-xs font-bold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                        {sowItem.baseline_start || '—'}
                      </span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-500 block font-bold uppercase tracking-wider">End Date</span>
                      <span className={`font-mono text-xs font-bold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                        {sowItem.baseline_end || '—'}
                      </span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-500 block font-bold uppercase tracking-wider">Duration</span>
                      <span className={`font-mono text-xs font-bold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                        {sowItem.baseline_days ? `${sowItem.baseline_days} days` : '—'}
                      </span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-500 block font-bold uppercase tracking-wider">Target Budget</span>
                      <span className="font-mono text-xs font-bold text-orange-500">
                        {estCost > 0 ? `${projectCurrency} ${estCost.toLocaleString()}` : '—'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 2. Active Operational Plan */}
                <div className={`p-4 rounded-2xl border ${borderCol} ${isDark ? 'bg-[#161b22]/30' : 'bg-slate-50/50'} space-y-3`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">
                      ⚡ Dynamic Operating Plan
                    </span>
                    <span className="text-[8px] font-bold bg-orange-500/10 text-orange-500 px-1.5 py-0.5 rounded uppercase font-mono">
                      Active
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-[9px] text-slate-500 block font-bold uppercase tracking-wider">Planned Start</span>
                      <span className={`font-mono text-xs font-bold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                        {sowItem.planned_start || sowItem.baseline_start || '—'}
                      </span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-500 block font-bold uppercase tracking-wider">Planned End</span>
                      <span className={`font-mono text-xs font-bold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                        {sowItem.planned_end || sowItem.baseline_end || '—'}
                      </span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-500 block font-bold uppercase tracking-wider">Planned Duration</span>
                      <span className={`font-mono text-xs font-bold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                        {sowItem.planned_days || sowItem.baseline_days ? `${sowItem.planned_days || sowItem.baseline_days} days` : '—'}
                      </span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-500 block font-bold uppercase tracking-wider">Planned Unit Rate</span>
                      <span className="font-mono text-xs font-bold text-teal-500">
                        {sowItem.unit_rate ? `${projectCurrency} ${sowItem.unit_rate.toLocaleString()}/${sowItem.unit || 'u'}` : '—'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Grid block */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Actual Start */}
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">
                    Actual Start Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    <input
                      type="date"
                      value={actualStart}
                      onChange={(e) => setActualStart(e.target.value)}
                      className={`w-full h-11 pl-10 pr-4 rounded-xl border ${borderCol} ${inputBg} ${textCol} text-xs font-bold outline-none focus:border-orange-500 transition-colors`}
                    />
                  </div>
                </div>

                {/* Actual End */}
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">
                    Actual End Date (If Finished)
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    <input
                      type="date"
                      value={actualEnd}
                      onChange={(e) => setActualEnd(e.target.value)}
                      className={`w-full h-11 pl-10 pr-4 rounded-xl border ${borderCol} ${inputBg} ${textCol} text-xs font-bold outline-none focus:border-orange-500 transition-colors`}
                    />
                  </div>
                </div>

                {/* Status selector */}
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">
                    Current Execution Status
                  </label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className={`w-full h-11 px-4 rounded-xl border ${borderCol} ${inputBg} ${textCol} text-xs font-bold outline-none focus:border-orange-500 transition-colors`}
                  >
                    <option value="Not Started">Not Started</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Complete">Complete</option>
                    <option value="On Hold">On Hold</option>
                    <option value="Delayed">Delayed</option>
                  </select>
                </div>

                {/* Actual Cost */}
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">
                    Actual Cost To Date ({projectCurrency})
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    <input
                      type="number"
                      placeholder="Enter actual aggregate cost..."
                      value={actualCost}
                      onChange={(e) => setActualCost(e.target.value)}
                      className={`w-full h-11 pl-10 pr-4 rounded-xl border ${borderCol} ${inputBg} ${textCol} text-xs font-bold outline-none focus:border-orange-500 transition-colors`}
                    />
                  </div>
                  {isOverBudget && (
                    <p className="text-[10px] text-red-500 font-bold mt-1.5 flex items-center gap-1 leading-none">
                      <ShieldAlert className="w-3.5 h-3.5" /> Over budget by {projectCurrency} {overBudgetValue.toLocaleString()}
                    </p>
                  )}
                </div>
              </div>

              {/* Progress Slider block */}
              <div className={`p-4 rounded-2xl border ${borderCol} space-y-3`}>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    % SOW Complete Indicator
                  </span>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min={0}
                      max={100}
                      value={percentComplete}
                      onChange={(e) => {
                        const v = Math.max(0, Math.min(100, parseInt(e.target.value) || 0))
                        setPercentComplete(v)
                      }}
                      className={`w-14 h-8 text-center rounded-lg border ${borderCol} ${inputBg} ${textCol} text-xs font-black outline-none`}
                    />
                    <span className="text-xs font-bold">%</span>
                  </div>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={percentComplete}
                  onChange={(e) => setPercentComplete(parseInt(e.target.value))}
                  className="w-full accent-orange-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>

              {/* Resource inputs */}
              <div className="space-y-2">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">
                  Logged Consumption Resources (Audit)
                </span>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <span className="text-[9px] text-slate-400 font-bold uppercase mb-1.5 block">Manpower (Hrs)</span>
                    <input
                      type="number"
                      placeholder="e.g. 12"
                      value={laborHours}
                      onChange={(e) => setLaborHours(e.target.value)}
                      className={`w-full h-10 px-3 rounded-lg border ${borderCol} ${inputBg} ${textCol} text-xs font-bold outline-none`}
                    />
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-400 font-bold uppercase mb-1.5 block">Heavy Plant (Hrs)</span>
                    <input
                      type="number"
                      placeholder="e.g. 5"
                      value={plantHours}
                      onChange={(e) => setPlantHours(e.target.value)}
                      className={`w-full h-10 px-3 rounded-lg border ${borderCol} ${inputBg} ${textCol} text-xs font-bold outline-none`}
                    />
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-400 font-bold uppercase mb-1.5 block">Materials Qty ({sowItem.unit || 'm²'})</span>
                    <input
                      type="number"
                      placeholder="e.g. 450"
                      value={materialsQty}
                      onChange={(e) => setMaterialsQty(e.target.value)}
                      className={`w-full h-10 px-3 rounded-lg border ${borderCol} ${inputBg} ${textCol} text-xs font-bold outline-none`}
                    />
                  </div>
                </div>
              </div>

              {/* Progress and Delay notes */}
              <div className="space-y-4">
                {status === 'Delayed' && (
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">
                      Formal Delay Reason
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Pump breakdown, heavy rain interference..."
                      value={delayReason}
                      onChange={(e) => setDelayReason(e.target.value)}
                      className={`w-full h-11 px-4 rounded-xl border ${borderCol} ${inputBg} ${textCol} text-xs font-bold outline-none focus:border-orange-500 transition-colors`}
                    />
                  </div>
                )}

                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">
                    Daily Progress Notes / Particular Remarks
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide a description of tasks accomplished, weather conditions, or critical constraints..."
                    value={progressNotes}
                    onChange={(e) => setProgressNotes(e.target.value)}
                    className={`w-full p-4 rounded-xl border ${borderCol} ${inputBg} ${textCol} text-xs font-medium outline-none focus:border-orange-500 transition-colors`}
                  />
                </div>
              </div>

              {/* Capture Photos Module */}
              <div className="space-y-3">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">
                  Progress Photos / Inspection Evidences
                </span>
                
                <div className="flex flex-wrap gap-3">
                  {photoUrls.map((url, imgIdx) => (
                    <div key={imgIdx} className="relative w-16 h-16 rounded-xl border border-slate-700 overflow-hidden group">
                      <img src={url} alt="Site proof" className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => removePhoto(imgIdx)}
                        className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white"
                      >
                        <X className="w-4 h-4 text-red-400" />
                      </button>
                    </div>
                  ))}
                  
                  <label className={`w-16 h-16 rounded-xl border-2 border-dashed ${borderCol} hover:border-orange-500/50 flex flex-col items-center justify-center cursor-pointer text-slate-400 hover:text-orange-500 transition-all`}>
                    <Camera className="w-5 h-5" />
                    <span className="text-[8px] font-bold mt-1">ADD IMG</span>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>
          ) : (
            /* History Logs Tab */
            <div className="space-y-4">
              {historyLoading ? (
                <div className="flex flex-col items-center justify-center py-12 text-slate-500 gap-2">
                  <Activity className="w-6 h-6 animate-spin text-orange-500" />
                  <p className="text-xs font-bold uppercase tracking-wider">Retrieving logs from database...</p>
                </div>
              ) : history.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-slate-500">
                  <History className="w-10 h-10 text-slate-600 mb-3" />
                  <p className="text-xs font-bold uppercase tracking-wider">No activities recorded for this item yet.</p>
                  <p className="text-[10px] text-slate-400 mt-1 max-w-xs text-center">Activities logged by structural engineers or onsite crew will compile here.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {history.map((log) => {
                    const costVal = log.actual_cost != null ? parseFloat(String(log.actual_cost)) : null
                    const diff = costVal != null ? costVal - estCost : 0
                    return (
                      <div 
                        key={log.id || log.created_at} 
                        className={`p-4 rounded-2xl border ${borderCol} ${isDark ? 'bg-[#161b22]/40' : 'bg-slate-50'} space-y-3`}
                      >
                        <div className="flex justify-between items-start flex-wrap gap-2">
                          <div>
                            <span className={`text-[11px] font-black ${isDark ? 'text-white' : 'text-slate-800'}`}>
                              {log.logged_by_email}
                            </span>
                            <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider mt-0.5">
                              📅 {log.logged_date}
                            </span>
                          </div>
                          <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase ${
                            log.status === 'Complete' ? 'bg-emerald-500/10 text-emerald-400' :
                            log.status === 'Delayed' ? 'bg-red-500/10 text-red-400' : 'bg-orange-500/10 text-orange-400'
                          }`}>
                            {log.status} ({log.percent_complete}%)
                          </span>
                        </div>

                        {/* Cost & consuming resources overview inside history */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-[10px] border-t border-b py-2 border-slate-700/30">
                          <div>
                            <span className="text-slate-400 block font-medium">Logged Cost:</span>
                            <span className={`font-mono font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>
                              {costVal != null ? `${projectCurrency} ${costVal.toLocaleString()}` : '—'}
                            </span>
                          </div>
                          <div>
                            <span className="text-slate-400 block font-medium">Manpower Consumption:</span>
                            <span className={`font-mono font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>
                              {log.labor_hours ? `${log.labor_hours} Hrs` : '—'}
                            </span>
                          </div>
                          <div>
                            <span className="text-slate-400 block font-medium">Equipment Hours:</span>
                            <span className={`font-mono font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>
                              {log.plant_hours ? `${log.plant_hours} Hrs` : '—'}
                            </span>
                          </div>
                          <div>
                            <span className="text-slate-400 block font-medium">Materials Qty:</span>
                            <span className={`font-mono font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>
                              {log.materials_qty ? `${log.materials_qty} ${log.materials_unit || ''}` : '—'}
                            </span>
                          </div>
                        </div>

                        {log.progress_notes && (
                          <div className={`p-3 rounded-lg ${isDark ? 'bg-[#0a0c0e]/60' : 'bg-white'} text-[11px] font-medium leading-relaxed ${textCol}`}>
                            📝 {log.progress_notes}
                          </div>
                        )}

                        {log.status === 'Delayed' && log.delay_reason && (
                          <div className="p-3 rounded-lg bg-red-950/20 border border-red-500/10 text-[11px] font-bold text-red-400">
                             🛑 DELAY ROOT CAUSE: {log.delay_reason}
                          </div>
                        )}

                        {log.photo_urls && log.photo_urls.length > 0 && (
                          <div className="flex gap-2 pt-1 overflow-x-auto">
                            {log.photo_urls.map((imgUrl, logImgIdx) => (
                              <div key={logImgIdx} className="w-12 h-12 rounded-lg overflow-hidden border border-slate-700 shrink-0">
                                <img src={imgUrl} alt="Historical Evidence" className="w-full h-full object-cover" />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className={`p-6 border-t ${borderCol} flex items-center justify-between`}>
          <div className="text-[10px] text-slate-400 flex items-center gap-1">
            <ShieldAlert className="w-3.5 h-3.5 text-slate-500" />
            <span>Authorized Site Action</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              disabled={saving}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all border ${borderCol} ${
                isDark ? 'text-slate-300 hover:bg-[#161b22]' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              Close
            </button>
            {activeTab === 'log' && (
              <button
                onClick={handleSave}
                disabled={saving}
                className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-xl text-xs shadow-lg shadow-orange-500/10 transition-all active:scale-95 disabled:opacity-50"
              >
                {saving ? 'Transmitting Log...' : 'Push Real-Time Entry'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
