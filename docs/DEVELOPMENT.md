# CPOS — local development & Supabase (reference)

> **First-time setup:** use the guided checklist at the repo root: **[../SETUP_SUPABASE.md](../SETUP_SUPABASE.md)** (exact paths, copy-paste flow).

---

## Apply RLS (summary)

**File to copy:** `supabase/migrations/20250321180000_rls_projects_and_children.sql`  
**Where to run:** Supabase Dashboard → **SQL Editor** → paste → **Run**.

**CLI (optional):**

```bash
cd <your-cpos-folder>
supabase link --project-ref YOUR_PROJECT_REF
supabase db push
```

## Environment variables (summary)

Copy **`.env.example`** → **`.env.local`** in the project root. Set URL, anon key, and optional `NEXT_PUBLIC_ADMIN_EMAIL` (see **SETUP_SUPABASE.md**).

## Admin vs normal user

| Layer | Behaviour |
|-------|-----------|
| **Database** | `public.users.role` = `admin` or `administrator` → `is_app_admin()` is true → can read/write all projects and child rows. |
| **Projects** | `user_id` and `userid` must both be set to `auth.uid()` on insert (app does this). |
| **Dashboard** | Loads all projects for admins; others get `.eq('user_id', user.id)` (matches RLS; clearer UX). |

### Legacy projects with `NULL` owner

They are invisible to non-admins under RLS. Fix in **Table Editor** or SQL:

```sql
UPDATE public.projects
SET user_id = 'PASTE-USER-UUID', userid = 'PASTE-USER-UUID'
WHERE projectid = 'PASTE-PROJECT-UUID';
```

### Harden `users.role` later

Today a user could change their own `role` in the UI if your policies allow it. For production, restrict updates to `role` (e.g. trigger or admin-only policy).

## Localhost / not public yet

- Keep using the **anon** key in the browser; never put **service_role** in Next.js client code.
- You can temporarily relax RLS in a **branch** or **staging** project while iterating.
- Consider `supabase db reset` only on disposable local DBs.

## Can Cursor / the AI “connect” to your Supabase repo?

**No direct connection.** There is no automatic link from this workspace to your Supabase project. Options:

1. **You run SQL** in the Dashboard SQL Editor (or CLI).
2. **Commit migrations** in this repo (`supabase/migrations/`) and use `supabase db push`.
3. **Paste** schema, errors, or policy snippets into the chat.

The AI only sees files in your project and what you paste.

## Storage (`cpos-documents`)

Bucket policies are separate from table RLS. In **Storage → Policies**, restrict paths under `projects/{projectid}/` to users who can access that `projectid` (mirror your app rules).

## Schema drift

Your app `documents` module may use column names that differ from `public.documents` in Postgres (`doc_id` / `doc_name` vs `id` / `file_name`). Align the app or the table so inserts match.
