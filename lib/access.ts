export const PUBLIC_VIEWONLY_PROJECT_ID = 'e03418fd-0ef2-4080-90c6-f18009bb12d1'

function isAdminEmail(email: string | null | undefined): boolean {
  const envAdmin = process.env.NEXT_PUBLIC_ADMIN_EMAIL?.trim().toLowerCase()
  if (!envAdmin || !email) return false
  return email.trim().toLowerCase() === envAdmin
}

function isProPlan(plan: string): boolean {
  return plan === 'pro' || plan === 'enterprise'
}

export function canAccessProject(args: {
  user: any
  projectid: string
  projectOwnerId?: string | null
}): boolean {
  const { user, projectid, projectOwnerId } = args

  const plan = ((user?.user_metadata?.plan as string | undefined) ?? 'free').toLowerCase()
  const isPro = isProPlan(plan)
  const isAdmin = plan === 'admin' || isAdminEmail(user?.email)

  const isOwnProject = !!projectOwnerId && user?.id === projectOwnerId
  const isDemoProject = projectid === PUBLIC_VIEWONLY_PROJECT_ID

  return isAdmin || isPro || isOwnProject || isDemoProject
}
