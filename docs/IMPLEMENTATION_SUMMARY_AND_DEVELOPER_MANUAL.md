# CPOS — Implementation Summary & Developer Manual

**Project:** Construction Project Operating System (CPOS)  
**Author:** Uddi Benkiff  
**Date:** March 2025  
**Version:** 1.0

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Authentication Protocols](#2-authentication-protocols)
3. [Implementation Checklist — Every Change](#3-implementation-checklist--every-change)
4. [File Reference & Code Snippets](#4-file-reference--code-snippets)
5. [Environment & Configuration](#5-environment--configuration)
6. [Database & RLS](#6-database--rls)
7. [Admin vs Normal User](#7-admin-vs-normal-user)
8. [Quick Reference](#8-quick-reference)

---

## 1. Executive Summary

This document captures all changes implemented for CPOS: login flow fixes, Supabase auth integration with cookies, Row Level Security (RLS), admin mode, project ownership, and developer setup. Use it as a single source of truth for onboarding, deployment, or replication.

---

## 2. Authentication Protocols

### 2.1 Supabase Client — Browser (Critical for Middleware)

**Why:** The app uses server-side middleware to protect routes. Middleware reads auth state from **cookies**. The standard `createClient` stores auth in `localStorage`, which the server cannot see. Therefore, we use `createBrowserClient` from `@supabase/ssr`, which stores session in cookies.

| Client type | Storage | Middleware sees session? |
|------------|---------|---------------------------|
| `createClient` | localStorage | ❌ No |
| `createBrowserClient` | cookies | ✅ Yes |

**File:** `app/supabase.js`

```javascript
import { createBrowserClient } from '@supabase/ssr'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Use the @supabase/ssr browser client so auth state is stored in cookies.
// This is required for middleware.ts (server-side) to detect logged-in users.
export const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey)
```

### 2.2 Middleware — Route Protection

**File:** `middleware.ts` (project root)

- Uses `createServerClient` from `@supabase/ssr` to read cookies and validate the session.
- **Public routes:** `/login`, `/register`, `/reset-password`, `/dashboard/demo`
- **Protected:** All other routes require `auth.getUser()`; if no user, redirect to `/login`.
- **Static / API:** `/_next`, `/api`, and paths with a `.` are allowed.

**Flow:**
1. Request hits middleware.
2. Server creates Supabase client with cookie access.
3. `getUser()` reads session from cookies.
4. No user → redirect to `/login`.
5. User present → `NextResponse.next()`.

### 2.3 Login Page — Loading State Fix

**Problem:** "Signing in..." could hang if navigation failed or middleware redirected back.

**Fix:** Always clear `loading` in a `finally` block and set it to `false` before `router.push`, so the UI never stays in a loading state indefinitely.

**File:** `app/login/page.tsx`

```javascript
// Clear loading before navigation so "Signing in..." doesn't look like a hang.
setLoading(false)
router.push('/dashboard')
} finally {
// If navigation fails (e.g. middleware redirects back), ensure UI isn't stuck.
setLoading(false)
}
```

### 2.4 Sign Out & Account Actions

- **Sign out:** Calls `supabase.auth.signOut()`, then `router.push('/login')` and `router.refresh()`.
- **Account:** Button navigates to `/account` (route to be implemented as needed).

**Location:** `app/dashboard/page.tsx` — header actions.

---

## 3. Implementation Checklist — Every Change

Use this list when deploying or replicating CPOS.

### 3.1 Dependencies

- [ ] `@supabase/supabase-js`
- [ ] `@supabase/ssr` — required for cookie-based auth with Next.js

### 3.2 Files to Create or Modify

| Action | File | Purpose |
|--------|------|---------|
| Create/Replace | `app/supabase.js` | Use `createBrowserClient` instead of `createClient` |
| Create | `middleware.ts` | Protect routes, redirect unauthenticated users |
| Modify | `app/login/page.tsx` | Fix loading state; add creator credit |
| Modify | `app/dashboard/page.tsx` | Add Sign out, Account; admin filtering; admin badge |
| Modify | `app/projects/new/page.tsx` | Set `user_id` and `userid` on insert from `auth.getUser()` |
| Create | `lib/admin.ts` | `isAppAdminFromProfile(role, email)` — UI hint only |
| Create | `supabase/migrations/20250321180000_rls_projects_and_children.sql` | RLS policies |
| Create | `.env.example` | Template for env vars |
| Create | `SETUP_SUPABASE.md` | Step-by-step setup guide |
| Create | `docs/DEVELOPMENT.md` | Dev reference, edge cases |
| Update | `README.md` | Point to `SETUP_SUPABASE.md` |

### 3.3 Environment Setup

- [ ] Copy `.env.example` → `.env.local`
- [ ] Set `NEXT_PUBLIC_SUPABASE_URL`
- [ ] Set `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] Optionally set `NEXT_PUBLIC_ADMIN_EMAIL` for UI admin override

### 3.4 Database (Supabase)

- [ ] Run `supabase/migrations/20250321180000_rls_projects_and_children.sql` in SQL Editor (or `supabase db push`)
- [ ] Ensure `projects` has `user_id` and `userid` columns (both UUID, FK to auth.users)
- [ ] Ensure `users` table has `role` column (text)

### 3.5 Legacy Projects (Optional)

- [ ] If existing projects have `NULL` owner: update in Table Editor or run SQL (see [DEVELOPMENT.md](./DEVELOPMENT.md) → "Legacy projects")

---

## 4. File Reference & Code Snippets

### 4.1 Project Creation — Owner Assignment

**File:** `app/projects/new/page.tsx`

On insert, set both `user_id` and `userid` from the authenticated user:

```javascript
const { data: { user } } = await supabase.auth.getUser()
if (!user) { /* ... */ }

await supabase.from('projects').insert([{
  projectid: form.projectid,
  user_id: user.id,   // required for RLS
  userid: user.id,    // required for RLS (legacy column)
  project_name: form.project_name,
  // ... rest of fields
}])
```

### 4.2 Dashboard — Admin Filtering

**File:** `app/dashboard/page.tsx`

- Fetch `users.role` for the current user.
- Call `isAppAdminFromProfile(profile?.role, user.email)`.
- If admin: query all projects (no `.eq('user_id', ...)`).
- If not admin: `.eq('user_id', user.id)`.
- Show "· Admin · all projects" badge when admin.

### 4.3 Admin Helper (Client-Side UI Only)

**File:** `lib/admin.ts`

```javascript
export function isAppAdminFromProfile(
  role: string | null | undefined,
  email: string | null | undefined
): boolean {
  const envAdmin = process.env.NEXT_PUBLIC_ADMIN_EMAIL?.trim().toLowerCase()
  if (envAdmin && email?.trim().toLowerCase() === envAdmin) return true
  const r = (role || '').trim().toLowerCase()
  return r === 'admin' || r === 'administrator'
}
```

**Important:** This is a **UI hint only**. Real enforcement is in Supabase RLS — never trust the client alone.

---

## 5. Environment & Configuration

### 5.1 `.env.example`

```
# Copy to .env.local (never commit .env.local)

NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_or_publishable_key

# Optional: this email always shows "admin" behaviour in the dashboard UI.
# Database admins use public.users.role = 'admin' (see supabase/migrations).
NEXT_PUBLIC_ADMIN_EMAIL=you@example.com
```

### 5.2 Where to Get Keys

- **Supabase Dashboard** → Project → **Settings** → **API**
- Project URL → `NEXT_PUBLIC_SUPABASE_URL`
- `anon` public key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

**Never** put `service_role` in client-side code.

---

## 6. Database & RLS

### 6.1 RLS Migration File

**Path:** `supabase/migrations/20250321180000_rls_projects_and_children.sql`

**To run:** Supabase Dashboard → SQL Editor → paste full file → Run.

**To run via terminal (display for copy):**

```powershell
Get-Content "c:\Users\Uddi\cpos\supabase\migrations\20250321180000_rls_projects_and_children.sql" -Raw
```

Or:

```powershell
type supabase\migrations\20250321180000_rls_projects_and_children.sql
```

### 6.2 RLS Summary

| Table(s) | Behavior |
|----------|----------|
| `users` | SELECT: own row or admin. INSERT: own `userid`. UPDATE: own row or admin. |
| `projects` | SELECT/UPDATE/DELETE: owner or admin. INSERT: must set `user_id` and `userid` to `auth.uid()`. |
| Project-scoped* | Access via `user_can_access_project(projectid)` (owner or admin). |
| `resources` | Shared catalogue; all authenticated users can CRUD. |

\*Project-scoped: `boq_items`, `cost_entries`, `dashboard_metrics`, `documents`, `materials`, `project_timeline`, `reports`, `sow_items`, `sow_resources`, `tasks`.

### 6.3 Helper Functions (SQL)

- **`is_app_admin()`** — Returns true if `users.role` ∈ `admin`, `administrator` for `auth.uid()`. SECURITY DEFINER.
- **`user_can_access_project(p_projectid)`** — Returns true if user owns project or is admin. SECURITY DEFINER.

---

## 7. Admin vs Normal User

| Layer | Normal User | Admin |
|-------|-------------|-------|
| **Database** | `users.role` ≠ admin | `users.role` = `admin` or `administrator` |
| **RLS** | Sees only own projects & children | Sees all projects & children |
| **Dashboard** | `.eq('user_id', user.id)` | No filter; shows all |
| **UI override** | — | `NEXT_PUBLIC_ADMIN_EMAIL` = their email (optional) |

**Assign admin:** Table Editor → `public.users` → set `role` = `admin` for that user.

---

## 8. Quick Reference

### File Map

| What | Path |
|------|------|
| RLS migration | `supabase/migrations/20250321180000_rls_projects_and_children.sql` |
| Env template | `.env.example` |
| Secrets (local) | `.env.local` |
| Setup guide | `SETUP_SUPABASE.md` |
| Dev reference | `docs/DEVELOPMENT.md` |

### Setup Order

1. Run RLS migration in Supabase SQL Editor.
2. Create `.env.local` from `.env.example`.
3. `npm run dev` and test login.

### Security Reminders

- Never expose `service_role` in Next.js client code.
- RLS is the source of truth; `isAppAdminFromProfile` is for UX only.
- Storage bucket policies are separate — restrict `projects/{projectid}/` paths as needed.

---

*End of document. For questions or updates, refer to `SETUP_SUPABASE.md` and `docs/DEVELOPMENT.md`.*
