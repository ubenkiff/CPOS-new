import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

const TEMPLATE_BUCKET = 'cpos-templates'
const TEMPLATE_FILE   = 'CPOS_Master_Template_with_Form.xlsm'
const SIGNED_URL_TTL  = 60 // seconds

export async function GET() {
  const cookieStore = await cookies()

  // Authenticated client — respects RLS
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { getAll: () => cookieStore.getAll() } }
  )

  // 1. Verify user is authenticated
  const { data: { user }, error: authErr } = await supabase.auth.getUser()
  if (authErr || !user) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })
  }

  // 2. Check plan — must be pro, enterprise, or admin
  const plan = ((user.user_metadata?.plan as string | undefined) ?? 'free').toLowerCase()
  const isAdmin = (user.email ?? '') === (process.env.NEXT_PUBLIC_ADMIN_EMAIL ?? '').toLowerCase()
  const isPro   = plan === 'pro' || plan === 'enterprise'

  if (!isAdmin && !isPro) {
    return NextResponse.json(
      { error: 'Upgrade to Pro to download the CPOS Master Template.' },
      { status: 403 }
    )
  }

  // 3. Generate a short-lived signed URL using service role (bypasses storage RLS)
  const adminClient = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { cookies: { getAll: () => [] } }
  )

  const { data, error } = await adminClient.storage
    .from(TEMPLATE_BUCKET)
    .createSignedUrl(TEMPLATE_FILE, SIGNED_URL_TTL, {
      download: TEMPLATE_FILE,
    })

  if (error || !data?.signedUrl) {
    console.error('[template/download]', error)
    return NextResponse.json({ error: 'Could not generate download link.' }, { status: 500 })
  }

  return NextResponse.json({ url: data.signedUrl })
}
