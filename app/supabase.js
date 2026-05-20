import { createBrowserClient } from '@supabase/ssr'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Use the @supabase/ssr browser client so auth state is stored in cookies.
// This is required for `middleware.ts` (server-side) to detect logged-in users.
export const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey)
