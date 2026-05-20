'use client'
import { useEffect, useState, useRef } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { supabase } from '../../../supabase'
import { canAccessProject, PUBLIC_VIEWONLY_PROJECT_ID } from '../../../../lib/access'
import { useTheme } from '../../../../lib/theme'
import ThemeSelector from '../../../../components/ThemeSelector'

type Document = {
  id: string
  projectid: string
  file_name: string
  file_path: string
  file_type: string
  file_size: number
  category: string
  uploaded_by?: string
  created_at: string
  description?: string
}

type Project = {
  projectid: string
  project_name: string
  project_code: string
}

const CATEGORIES = [
  { key: 'master-template', label: 'Master Template', color: '#7F77DD' },
  { key: 'drawings',        label: 'Drawings',        color: '#60a5fa' },
  { key: 'contracts',       label: 'Contracts',       color: '#f59e0b' },
  { key: 'reports',         label: 'Reports',         color: '#4ade80' },
  { key: 'specs',           label: 'Specifications',  color: '#c084fc' },
  { key: 'photos',          label: 'Photos',          color: '#f87171' },
  { key: 'other',           label: 'Other',           color: '#888780' },
]

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-ZA', { day: '2-digit', month: 'short', year: 'numeric' })
}

function fileIcon(fileName: string): string {
  const ext = fileName.split('.').pop()?.toLowerCase()
  if (ext === 'pdf') return 'PDF'
  if (['xlsx', 'xls', 'csv'].includes(ext || '')) return 'XLS'
  if (['doc', 'docx'].includes(ext || '')) return 'DOC'
  if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext || '')) return 'IMG'
  if (['dwg', 'dxf'].includes(ext || '')) return 'DWG'
  if (['zip', 'rar'].includes(ext || '')) return 'ZIP'
  return 'FILE'
}

function fileIconColor(fileName: string): string {
  const ext = fileName.split('.').pop()?.toLowerCase()
  if (ext === 'pdf') return '#f87171'
  if (['xlsx', 'xls', 'csv'].includes(ext || '')) return '#4ade80'
  if (['doc', 'docx'].includes(ext || '')) return '#60a5fa'
  if (['jpg', 'jpeg', 'png', 'gif'].includes(ext || '')) return '#c084fc'
  if (['dwg', 'dxf'].includes(ext || '')) return '#f59e0b'
  return '#888780'
}

export default function DocumentsModule() {
  const params = useParams()
  const router = useRouter()
  const { theme, setTheme, isDark } = useTheme()
  const projectid = params?.projectid as string
  const fileInputRef = useRef<HTMLInputElement>(null)

  const isPublicViewOnly = projectid === PUBLIC_VIEWONLY_PROJECT_ID

  const [project, setProject] = useState<Project | null>(null)
  const [documents, setDocuments] = useState<Document[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [uploadCategory, setUploadCategory] = useState('drawings')
  const [uploadDescription, setUploadDescription] = useState('')
  const [showUpload, setShowUpload] = useState(false)
  const [toast, setToast] = useState<{ msg: string; type: 'ok' | 'err' } | null>(null)
  const [dragOver, setDragOver] = useState(false)
  const [deleting, setDeleting] = useState<string | null>(null)

  useEffect(() => {
    if (!projectid) return
    if (isPublicViewOnly) {
      fetchProject(); fetchDocuments()
      return
    }
    checkSessionAndLoad()
  }, [projectid])

  async function checkSessionAndLoad() {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push(`/login?next=${encodeURIComponent(`/dashboard/${projectid}/documents`)}`)
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

    fetchProject(); fetchDocuments()
  }

  async function fetchProject() {
    const { data } = await supabase.from('projects').select('projectid,project_name,project_code,user_id').eq('projectid', projectid).single()
    if (data) setProject(data)
  }

  async function fetchDocuments() {
    setLoading(true)
    const { data } = await supabase.from('documents').select('*').eq('projectid', projectid).order('created_at', { ascending: false })
    setDocuments(data || [])
    setLoading(false)
  }

  function showToast(msg: string, type: 'ok' | 'err' = 'ok') {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 4000)
  }

  async function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return
    setUploading(true)
    for (const file of Array.from(files)) {
      const filePath = `projects/${projectid}/${uploadCategory}/${Date.now()}_${file.name}`
      const { error: uploadError } = await supabase.storage.from('cpos-documents').upload(filePath, file, { upsert: false })
      if (uploadError) { showToast(`Upload failed: ${uploadError.message}`, 'err'); continue }
      const { error: dbError } = await supabase.from('documents').insert([{
        projectid, file_name: file.name, file_path: filePath,
        file_type: file.type || 'application/octet-stream', file_size: file.size,
        category: uploadCategory, description: uploadDescription || null, uploaded_by: 'User',
      }])
      if (dbError) showToast(`Save failed: ${dbError.message}`, 'err')
      else showToast(`${file.name} uploaded`)
    }
    setUploading(false)
    setUploadDescription('')
    setShowUpload(false)
    await fetchDocuments()
  }

  async function handleDownload(doc: Document) {
    const { data, error } = await supabase.storage.from('cpos-documents').createSignedUrl(doc.file_path, 60)
    if (error || !data?.signedUrl) { showToast('Download failed', 'err'); return }
    const a = document.createElement('a')
    a.href = data.signedUrl; a.download = doc.file_name; a.click()
  }

  async function handleDelete(doc: Document) {
    if (!confirm(`Delete "${doc.file_name}"? This cannot be undone.`)) return
    setDeleting(doc.id)
    await supabase.storage.from('cpos-documents').remove([doc.file_path])
    const { error } = await supabase.from('documents').delete().eq('id', doc.id)
    if (error) { showToast('Delete failed', 'err'); setDeleting(null); return }
    showToast(`${doc.file_name} deleted`)
    setDeleting(null)
    await fetchDocuments()
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault(); setDragOver(false); handleFiles(e.dataTransfer.files)
  }

  const filtered = activeCategory === 'all' ? documents : documents.filter(d => d.category === activeCategory)
  const countByCategory = (key: string) => documents.filter(d => d.category === key).length

  const bgCol = isDark ? '#0a0c0e' : '#F8FAFC'
  const textCol = isDark ? '#c9d1d9' : '#1e293b'
  const hText = isDark ? '#e6edf3' : '#0f172a'
  const cardBg = isDark ? '#0d1117' : '#ffffff'
  const borderCol = isDark ? '#21262d' : '#cbd5e1'
  const subBorder = isDark ? '#161b22' : '#f1f5f9'
  const subText = isDark ? '#484f58' : '#64748b'
  const sidebarItemActiveBg = isDark ? '#161b22' : '#f1f5f9'
  const sidebarColor = isDark ? '#8b949e' : '#475569'
  const inputBg = isDark ? '#010409' : '#ffffff'
  const inputBorder = isDark ? '#30363d' : '#cbd5e1'

  const s = {
    btn: (v: 'p' | 'g' | 'd') => ({
      background: v === 'p' ? '#f59e0b' : v === 'd' ? (isDark ? '#300' : '#fee2e2') : 'transparent',
      border: `1px solid ${v === 'p' ? '#f59e0b' : v === 'd' ? '#f87171' : borderCol}`,
      borderRadius: 6, color: v === 'p' ? '#0a0c0e' : v === 'd' ? '#f87171' : sidebarColor,
      cursor: 'pointer', fontWeight: 700, fontSize: 11, padding: '6px 12px', fontFamily: 'monospace',
    }),
    inp: { width: '100%', background: inputBg, border: `1px solid ${inputBorder}`, borderRadius: 6, color: textCol, fontFamily: 'monospace', fontSize: 12, padding: '8px 10px', outline: 'none' },
    lbl: { display: 'block' as const, fontSize: 10, color: subText, letterSpacing: '0.08em', marginBottom: 5 },
    card: { background: cardBg, border: `1px solid ${borderCol}`, borderRadius: 8, padding: 16 },
  }

  return (
    <div 
      style={{ 
        fontFamily: 'monospace', 
        background: bgCol, 
        minHeight: '100vh', 
        color: textCol,
        transition: 'all 0.3s',
        backgroundImage: isDark
          ? 'linear-gradient(rgba(96,165,250,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.025) 1px, transparent 1px)'
          : 'linear-gradient(rgba(0,0,0,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.015) 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }}
    >
      {toast && (
        <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 999, background: toast.type === 'ok' ? '#052e16' : '#300', border: `1px solid ${toast.type === 'ok' ? '#4ade80' : '#f87171'}`, color: toast.type === 'ok' ? '#4ade80' : '#f87171', padding: '10px 18px', borderRadius: 8, fontSize: 13 }}>
          {toast.msg}
        </div>
      )}

      {/* HEADER */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 28px', borderBottom: '1px solid ' + borderCol, background: cardBg }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <button onClick={() => router.back()} style={s.btn('g')}>← Back</button>
          <div>
            <div style={{ fontSize: 11, color: subText }}>{project?.project_code} · Documents</div>
            <div style={{ fontSize: 16, fontWeight: 800, color: hText, fontFamily: 'sans-serif' }}>{project?.project_name}</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <ThemeSelector theme={theme} setTheme={setTheme} compact />
          <span style={{ fontSize: 11, color: subText }}>{documents.length} files · {formatSize(documents.reduce((s, d) => s + (d.file_size || 0), 0))} total</span>
          <button style={s.btn('p')} onClick={() => setShowUpload(!showUpload)}>
            {showUpload ? '✕ Cancel' : '↑ Upload Files'}
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', minHeight: 'calc(100vh - 57px)' }}>

        {/* SIDEBAR */}
        <div style={{ borderRight: '1px solid ' + borderCol, padding: '16px 0', background: cardBg }}>
          <div style={{ padding: '0 16px 8px', fontSize: 9, color: subText, letterSpacing: '0.08em' }}>CATEGORIES</div>

          <div onClick={() => setActiveCategory('all')} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 16px', cursor: 'pointer', background: activeCategory === 'all' ? sidebarItemActiveBg : 'transparent', borderLeft: `2px solid ${activeCategory === 'all' ? '#f59e0b' : 'transparent'}` }}>
            <span style={{ fontSize: 12, color: activeCategory === 'all' ? '#f59e0b' : sidebarColor, fontWeight: activeCategory === 'all' ? 600 : 400 }}>All Files</span>
            <span style={{ fontSize: 10, color: subText, background: subBorder, padding: '1px 7px', borderRadius: 10 }}>{documents.length}</span>
          </div>

          <div style={{ height: 1, background: borderCol, margin: '6px 0' }} />

          {CATEGORIES.map(cat => (
            <div key={cat.key} onClick={() => setActiveCategory(cat.key)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 16px', cursor: 'pointer', background: activeCategory === cat.key ? sidebarItemActiveBg : 'transparent', borderLeft: `2px solid ${activeCategory === cat.key ? cat.color : 'transparent'}` }}>
              <span style={{ fontSize: 12, color: activeCategory === cat.key ? cat.color : sidebarColor, fontWeight: activeCategory === cat.key ? 600 : 400 }}>{cat.label}</span>
              {countByCategory(cat.key) > 0 && <span style={{ fontSize: 10, color: cat.color, background: cat.color + '22', padding: '1px 7px', borderRadius: 10 }}>{countByCategory(cat.key)}</span>}
            </div>
          ))}

          <div style={{ margin: '20px 12px 0', padding: 10, background: subBorder, borderRadius: 6, border: `1px solid ${borderCol}` }}>
            <div style={{ fontSize: 9, color: subText, marginBottom: 4, letterSpacing: '0.06em' }}>STORAGE PATH</div>
            <div style={{ fontSize: 9, color: sidebarColor, fontFamily: 'monospace', wordBreak: 'break-all' as const }}>cpos-documents/<br />projects/{projectid?.slice(0, 8)}...</div>
          </div>
        </div>

        {/* MAIN PANEL */}
        <div style={{ padding: '20px 24px' }}>

          {/* Upload panel */}
          {showUpload && (
            <div style={{ ...s.card, marginBottom: 20, border: '1px solid #30363d' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#e6edf3', marginBottom: 14 }}>Upload Files</div>
              <div
                onDragOver={e => { e.preventDefault(); setDragOver(true) }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                style={{ border: `2px dashed ${dragOver ? '#f59e0b' : '#30363d'}`, borderRadius: 8, padding: '28px 20px', textAlign: 'center' as const, cursor: 'pointer', marginBottom: 14, background: dragOver ? '#f59e0b11' : '#010409', transition: 'all 0.15s' }}
              >
                <div style={{ fontSize: 22, color: dragOver ? '#f59e0b' : '#30363d', marginBottom: 8 }}>↑</div>
                <div style={{ fontSize: 12, color: '#f59e0b', fontWeight: 700, marginBottom: 4 }}>{uploading ? 'Uploading...' : 'Drop files here or click to browse'}</div>
                <div style={{ fontSize: 11, color: '#484f58' }}>PDF, Excel, Word, DWG, images — max 50MB per file</div>
                <input ref={fileInputRef} type="file" multiple style={{ display: 'none' }} onChange={e => handleFiles(e.target.files)} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <label style={s.lbl}>CATEGORY</label>
                  <select value={uploadCategory} onChange={e => setUploadCategory(e.target.value)} style={s.inp}>
                    {CATEGORIES.map(c => <option key={c.key} value={c.key}>{c.label}</option>)}
                  </select>
                </div>
                <div>
                  <label style={s.lbl}>DESCRIPTION (optional)</label>
                  <input value={uploadDescription} onChange={e => setUploadDescription(e.target.value)} placeholder="e.g. Rev C — Approved for construction" style={s.inp} />
                </div>
              </div>
            </div>
          )}

          {/* File list header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: hText }}>
              {activeCategory === 'all' ? 'All Files' : CATEGORIES.find(c => c.key === activeCategory)?.label}
              <span style={{ fontSize: 11, color: subText, fontWeight: 400, marginLeft: 8 }}>({filtered.length})</span>
            </div>
          </div>

          {loading && <div style={{ color: subText }}>Loading documents...</div>}

          {!loading && filtered.length === 0 && (
            <div style={{ textAlign: 'center' as const, padding: '60px 0', color: subText }}>
              <div style={{ fontSize: 13, marginBottom: 8 }}>No files here yet.</div>
              <div style={{ fontSize: 12, marginBottom: 20 }}>Upload drawings, contracts, specs, reports or photos.</div>
              <button style={s.btn('p')} onClick={() => setShowUpload(true)}>↑ Upload Files</button>
            </div>
          )}

          {!loading && filtered.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 10 }}>
              {filtered.map(doc => {
                const cat = CATEGORIES.find(c => c.key === doc.category)
                const iconColor = fileIconColor(doc.file_name)
                const icon = fileIcon(doc.file_name)
                return (
                  <div key={doc.id} style={{ background: cardBg, border: '1px solid ' + borderCol, borderRadius: 8, overflow: 'hidden', display: 'flex', flexDirection: 'column' as const }}>
                    <div style={{ height: 3, background: cat?.color || subText }} />
                    <div style={{ padding: '14px 14px 12px', flex: 1, display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
                      <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <div style={{ width: 36, height: 36, background: iconColor + '22', border: `1px solid ${iconColor}44`, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <span style={{ fontSize: 9, fontWeight: 700, color: iconColor }}>{icon}</span>
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontSize: 12, fontWeight: 600, color: hText, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const }}>{doc.file_name}</div>
                          <div style={{ fontSize: 10, color: subText, marginTop: 2 }}>{formatSize(doc.file_size)} · {formatDate(doc.created_at)}</div>
                        </div>
                      </div>
                      {doc.description && <div style={{ fontSize: 11, color: sidebarColor, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const }}>{doc.description}</div>}
                      <span style={{ fontSize: 10, color: cat?.color || sidebarColor, background: (cat?.color || sidebarColor) + '22', padding: '2px 8px', borderRadius: 4, display: 'inline-block', width: 'fit-content' }}>{cat?.label || doc.category}</span>
                      <div style={{ display: 'flex', gap: 6, marginTop: 'auto' as const }}>
                        <button style={{ ...s.btn('p'), flex: 1, fontSize: 10 }} onClick={() => handleDownload(doc)}>↓ Download</button>
                        <button style={{ ...s.btn('d'), fontSize: 10, opacity: deleting === doc.id ? 0.5 : 1 }} onClick={() => handleDelete(doc)} disabled={deleting === doc.id}>{deleting === doc.id ? '...' : '✕'}</button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
