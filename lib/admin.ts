/**
 * Client-side hint for admin UI (dashboard filter, badges).
 * Real enforcement is in Supabase RLS — never trust this alone.
 */
export function isAppAdminFromProfile(
  role: string | null | undefined,
  email: string | null | undefined
): boolean {
  const envAdmin =
    typeof process !== 'undefined'
      ? process.env.NEXT_PUBLIC_ADMIN_EMAIL?.trim().toLowerCase()
      : undefined
  if (envAdmin && email && email.trim().toLowerCase() === envAdmin) {
    return true
  }
  const r = (role || '').trim().toLowerCase()
  return r === 'admin' || r === 'administrator'
}
