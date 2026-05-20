import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Routes that don't require authentication
const PUBLIC_ROUTES = ['/login', '/register', '/reset-password', '/dashboard/demo', '/pitch']

// View-only public project (view dashboards/reports without an account).
// Note: still view-only because writes are blocked by RLS for anon.
const PUBLIC_VIEWONLY_PROJECT_ID = 'e03418fd-0ef2-4080-90c6-f18009bb12d1'
const PUBLIC_VIEWONLY_PROJECT_PREFIX = `/dashboard/${PUBLIC_VIEWONLY_PROJECT_ID}`

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Allow public read-only access to this specific project.
  if (pathname === PUBLIC_VIEWONLY_PROJECT_PREFIX || pathname.startsWith(`${PUBLIC_VIEWONLY_PROJECT_PREFIX}/`)) {
    return NextResponse.next()
  }

  // Allow public routes
  if (PUBLIC_ROUTES.some((route) => pathname.startsWith(route))) {
    return NextResponse.next()
  }

  // Allow static files and API routes
  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.includes('.')) {
    return NextResponse.next()
  }

  const response = NextResponse.next()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Not logged in — redirect to login
  if (!user) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return response
}

export const config = {
  matcher: ['/dashboard/:path*'],
}
