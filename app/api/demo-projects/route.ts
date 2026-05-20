import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

/**
 * Public read-only list of projects for /dashboard/demo.
 * Uses service role on the server only (never exposed to the browser).
 * Set SUPABASE_SERVICE_ROLE_KEY in .env.local (Supabase → Settings → API).
 */
export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !serviceKey) {
    return NextResponse.json({
      projects: [],
      configured: false,
      message:
        'Add SUPABASE_SERVICE_ROLE_KEY to .env.local to load sample projects from the database.',
    })
  }

  const supabase = createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  })

  const { data, error } = await supabase
    .from('projects')
    .select(
      'projectid, project_name, project_code, client_name, location, status, budget, currency, created_at'
    )
    .order('created_at', { ascending: false })
    .limit(30)

  if (error) {
    return NextResponse.json({
      projects: [],
      configured: true,
      error: error.message,
    })
  }

  return NextResponse.json({
    projects: data ?? [],
    configured: true,
  })
}
