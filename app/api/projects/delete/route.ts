import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Service-role client — bypasses RLS, server-side only
function getAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY!
  return createClient(url, key, { auth: { persistSession: false } })
}

export async function DELETE(req: NextRequest) {
  try {
    const { projectid } = await req.json()

    if (!projectid || typeof projectid !== 'string') {
      return NextResponse.json({ error: 'projectid is required' }, { status: 400 })
    }

    // Verify the requester is actually authenticated and owns this project
    const anonUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    const authHeader = req.headers.get('authorization') || ''
    const token = authHeader.replace('Bearer ', '')

    if (token) {
      const anonClient = createClient(anonUrl, anonKey, { auth: { persistSession: false } })
      const { data: { user } } = await anonClient.auth.getUser(token)

      if (user) {
        // Check ownership — admins or project owner may delete
        const admin = getAdminClient()
        const { data: project } = await admin.from('projects').select('user_id').eq('projectid', projectid).single()

        const isOwner = project?.user_id === user.id
        const isAdmin = user.user_metadata?.plan === 'admin' ||
          user.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL

        if (!isOwner && !isAdmin) {
          return NextResponse.json({ error: 'Not authorized to delete this project' }, { status: 403 })
        }
      }
    }

    const admin = getAdminClient()

    // Cascade delete all child tables first — order matters for FK constraints
    // Delete in dependency order: children before parents
    const childTables = [
      { table: 'sow_items', col: 'projectid' },
      { table: 'cost_entries', col: 'projectid' },
      { table: 'tasks', col: 'projectid' },
      { table: 'documents', col: 'projectid' },
      { table: 'project_timeline', col: 'projectid' },
      { table: 'pm_requests', col: 'projectid' },
      { table: 'activity_logs', col: 'projectid' },
      { table: 'boq_items', col: 'projectid' },
      { table: 'materials', col: 'projectid' },
      { table: 'chat_messages', col: 'projectid' },
      { table: 'reports', col: 'projectid' },
      // dashboard_metrics last among children — has FK to projects
      { table: 'dashboard_metrics', col: 'projectid' },
    ]

    for (const { table, col } of childTables) {
      const { error: delErr } = await admin.from(table).delete().eq(col, projectid)
      if (delErr) {
        // Ignore "table not found" errors (code 42P01), surface others
        if (!delErr.message?.includes('does not exist') && delErr.code !== '42P01') {
          console.warn(`[delete-project] Warning deleting from ${table}:`, delErr.message)
        }
      }
    }

    // Now delete the project itself
    const { error } = await admin.from('projects').delete().eq('projectid', projectid)
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Unexpected error' }, { status: 500 })
  }
}
