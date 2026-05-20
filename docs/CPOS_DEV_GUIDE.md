# CPOS Developer Guide (Handover)

**Project:** CPOS — Construction Project Operating System  
**Repo:** https://github.com/ubenkiff/cpos  
**Production URL:** https://cpos-eosin.vercel.app  
**Supabase Project Ref/ID:** `jjoiosvpchabcrbtzaaq`  
**Local path (expected):** `C:\Users\HP\cpos`  
**Local path (this workspace):** `C:\Users\Uddi\cpos`

**Downloadable handover (served by the app):** `/CPOS_DEV_HANDOVER.md`

---

# 1. PROJECT OVERVIEW

## What CPOS is
CPOS (Construction Project Operating System) is a web app for managing construction projects end-to-end. It provides a project dashboard and modules for:

- SOW (Statement of Work) hierarchy
- BOQ (Bill of Quantities)
- Gantt scheduling
- Reports
- Documents
- Cost / budget tracking and dashboard KPIs

## Two user tracks
CPOS currently serves two “tracks”:

- **Uddi’s own projects (internal/admin track)**
  - Admin can see/manage all projects.
  - Admin access is ultimately enforced at the database level via Supabase RLS + `public.users.role`.

- **SaaS users (multi-tenant track)**
  - Each authenticated user should only see projects they own (`projects.user_id` / `projects.userid`).
  - A **free tier** can browse **project teaser cards** but can only open the public demo project.
  - A **pro tier** is unlocked via M-Pesa STK push payment and stored in `auth.users.raw_user_meta_data.plan = 'pro'`.

## Key URLs / identifiers
- **Production:** `https://cpos-eosin.vercel.app`
- **GitHub:** `https://github.com/ubenkiff/cpos`
- **Supabase project:** `jjoiosvpchabcrbtzaaq`

Public entry:
- **Landing page:** `/` (public)
- **Public demo project:** `/dashboard/e03418fd-0ef2-4080-90c6-f18009bb12d1`

---

# 2. TECH STACK

## Frontend / App
- **Next.js 16** (App Router)
- **TypeScript**
- **React 19**
- **Tailwind CSS** (minimal usage; most styling is inline “industrial dark”)
- **SheetJS (`xlsx`)** for Excel parsing

## Backend / Data
- **Supabase**
  - PostgreSQL
  - Auth (email/password)
  - Storage (documents)
  - RPC functions (security definer helpers)
- **Row Level Security (RLS)** as the primary authorization layer

## Auth (important)
- **`@supabase/ssr`**
  - Browser client stores auth state in **cookies**
  - Next.js middleware validates session from cookies

## Payments
- **M-Pesa Daraja API**
  - STK Push initiation
  - Callback handler
  - Status polling

## Hosting / CI
- **Vercel**
  - Auto-deploy from GitHub `main`

---

# 3. LOCAL SETUP

## Prerequisites
- Node.js 18+ recommended
- npm (comes with Node)
- Supabase project set up (tables + RLS + RPCs applied)
- Vercel environment variables set for production

## Install & run
From the repo root (folder containing `package.json`):

```bash
npm install
npm run dev
```

Then open the local URL printed in the terminal (often `http://localhost:3000`). If port 3000 is busy, Next will use the next available port.

## Environment variables (`.env.local`)
Create `.env.local` next to `package.json` by copying `.env.example`.

Minimum required:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Server-side only (never expose in client code):
- `SUPABASE_SERVICE_ROLE_KEY` (used by server API routes)

Email / notifications (server routes):
- `RESEND_API_KEY`
- `ADMIN_EMAIL` (recipient for Hire PM + Contact + Feedback emails)

Admin hint (UI only):
- `NEXT_PUBLIC_ADMIN_EMAIL`

M-Pesa:
- `MPESA_BASE_URL`
- `MPESA_CONSUMER_KEY`
- `MPESA_CONSUMER_SECRET`
- `MPESA_SHORTCODE`
- `MPESA_PASSKEY`
- `MPESA_CALLBACK_URL`

## Supabase client location
- **Browser client:** `app/supabase.js`
  - Uses `createBrowserClient` from `@supabase/ssr`
  - This is required so Next middleware can read sessions from cookies.

## Import path rules for nested routes
This repo commonly imports the Supabase browser client as:

- `import { supabase } from '../supabase'` from pages under `app/...`

Because Next App Router uses filesystem routing, ensure relative imports resolve correctly from nested folders (e.g. `app/dashboard/[projectid]/...`). If a component lives deeper, adjust `../` accordingly.

---

# 4. FILE STRUCTURE

Below is the key “map” of where core behavior lives. (Not a complete tree, but covers the critical handover paths.)

## App routes
- `app/page.tsx`
  - Public landing page (no login)
  - Primary CTAs: demo project + login
- `app/login/page.tsx`
  - Email/password login via `supabase.auth.signInWithPassword`.
  - Displays a success message when redirected from registration.

- `app/register/page.tsx`
  - Email/password registration via `supabase.auth.signUp`.
  - Redirects to `/login?registered=1&email=...` on success.

- `app/auth/callback/route.ts`
  - Supabase auth callback route for confirmation/code exchange.

- `app/dashboard/page.tsx`
  - Project list page.
  - Admin-by-role sees real `projects` rows.
  - Non-admin uses RPC `list_project_teasers()` to show all projects as teasers.
  - Free tier behavior:
    - Demo project opens.
    - Locked projects show “🔒 Upgrade to Unlock” and click redirects to `/pricing`.

- `app/dashboard/[projectid]/page.tsx`
  - Main project dashboard page (KPIs, budget tracker, tasks, etc.)
  - Enforces plan gating client-side:
    - Admin/pro: allowed
    - Free: only allowed for public demo project; otherwise redirect to `/pricing`

- Module pages (each includes session checks and supports public view-only demo exception):
  - `app/dashboard/[projectid]/sow/page.tsx`
  - `app/dashboard/[projectid]/boq/page.tsx`
  - `app/dashboard/[projectid]/gantt/page.tsx`
  - `app/dashboard/[projectid]/reports/page.tsx`
  - `app/dashboard/[projectid]/documents/page.tsx`

- `app/projects/new/page.tsx`
  - Creates a project.
  - Must set `user_id` and `userid` on insert to satisfy RLS.

- `app/pricing/page.tsx`
  - Pricing tiers:
    - FREE: demo access
    - PRO: M-Pesa STK push (amount: **KES 3727**)
    - ENTERPRISE: mailto contact
  - Before starting payment, it stores the user phone into auth metadata:
    - `supabase.auth.updateUser({ data: { phone } })`
  - Polls `/api/payments/mpesa/status` for payment status, then refreshes session and routes to `/dashboard` on success.

## API routes
- `app/api/payments/mpesa/stk-push/route.ts`
  - Initiates STK push with Daraja.
  - Writes a row to `public.mpesa_checkout_requests` using service role.
  - Returns `checkoutRequestId` for client-side polling.

- `app/api/payments/mpesa/callback/route.ts`
  - Receives callback payload.
  - Updates `mpesa_checkout_requests` status + stores raw callback.
  - On success (`ResultCode === 0`): extracts phone and calls RPC `upgrade_user_plan_by_phone(phone)` via service role.

- `app/api/payments/mpesa/status/route.ts`
  - Status lookup by `checkoutRequestId` from `mpesa_checkout_requests`.

- `app/api/hire-pm/route.ts`
  - Writes to `public.pm_requests` (service role) and sends an email to `ADMIN_EMAIL`.

- `app/api/contact/route.ts`
  - Writes to `public.contact_messages` (service role) and sends an email to `ADMIN_EMAIL`.

- `app/api/feedback/route.ts`
  - Writes to `public.feedback` (service role) and sends an email to `ADMIN_EMAIL`.

- `app/api/demo-projects/route.ts`
  - Server-side list of projects (service role bypass).
  - Originally used for demo browsing; dashboard now uses `list_project_teasers()` RPC for free teasers.

- `app/hire-pm/page.tsx`
  - Multi-step Hire Remote PM request form.

- `components/ChatWidget.tsx`
  - Floating widget with FAQ + Contact + Feedback tabs.
  - Rendered globally in `app/layout.tsx`.

- Global UX hardening:
  - `app/error.tsx` (global error boundary)
  - `app/not-found.tsx` (404 page)
  - `app/dashboard/loading.tsx` and `app/dashboard/[projectid]/loading.tsx`

## Cross-cutting
- `middleware.ts`
  - Enforces auth on `/dashboard/:path*` routes.
  - Allows public routes: `/login`, `/register`, `/reset-password`, `/dashboard/demo`
  - Allows a hardcoded public view-only project under `/dashboard/{PUBLIC_VIEWONLY_PROJECT_ID}`.

- `app/supabase.js`
  - Browser Supabase client using cookie-based auth.

---

# 5. DATABASE SCHEMA

This section describes the key tables and what they’re for. Supabase migrations live in `supabase/migrations/`.

## Core tables

### `public.projects`
**Purpose:** The primary project record.

Important columns:
- `projectid` (uuid) — primary identifier used in routes (`/dashboard/[projectid]`)
- `user_id` (uuid) — owner (used for RLS)
- `userid` (uuid) — legacy owner column used by some code/RLS compatibility

Teaser fields used by the dashboard:
- `project_name`, `project_code`, `status`, `client_name`, `location`, `budget`, `currency`

> Note: `completion_percentage` is not stored directly on `projects`; it is derived from `dashboard_metrics.overall_progress` in the teaser RPC.

### `public.dashboard_metrics`
**Purpose:** Aggregate metrics per project (e.g., overall progress).

The teaser RPC joins this table to expose:
- `overall_progress` → returned as `completion_percentage`

### `public.sow_items`
**Purpose:** Statement of Work hierarchy.

Typically supports a 3-level structure (L1/L2/L3) for work breakdown.

### `public.sow_resources`
**Purpose:** Resources linked to SOW items.

### `public.resources`
**Purpose:** Shared resources catalogue (not project-scoped by `projectid` in RLS migration).

### `public.cost_entries`
**Purpose:** Cost tracking and budget burn.

### `public.documents`
**Purpose:** Metadata for uploaded project documents; actual files live in Supabase Storage.

### `public.mpesa_checkout_requests`
**Purpose:** Tracks M-Pesa STK push initiation and callback results.

Key fields:
- `user_id`
- `tier` (default `pro`)
- `amount`
- `phone`
- `status` (`pending` | `success` | `failed`)
- `checkout_request_id` (unique)
- `merchant_request_id`
- `result_code`, `result_desc`
- `raw_callback` (jsonb)

## Future tables (placeholders)
- `public.materials` — future
- `public.reports` — future

---

# 6. SECURITY / RLS MODEL (HIGH LEVEL)

## Principle
**Supabase RLS is the source of truth.** The client UI may show/hide controls, but the database enforces access.

## Important RLS helper functions
Defined in `supabase/migrations/20250321180000_rls_projects_and_children.sql`:

- `public.is_app_admin()`
  - Returns true if `public.users.role` for `auth.uid()` is `admin` / `administrator`.

- `public.user_can_access_project(projectid uuid)`
  - True if:
    - user owns the project (`projects.user_id` or `projects.userid`), OR
    - `public.is_app_admin()` is true

## Public demo project
A specific project ID is treated as view-only public:

- `e03418fd-0ef2-4080-90c6-f18009bb12d1`

Migration: `supabase/migrations/20260321190000_public_solar_viewonly_select_anon.sql`
- Allows anon (unauthenticated) SELECT access for that project across multiple tables.

---

# 7. KEY RPC FUNCTIONS

## `public.list_project_teasers()`
**Purpose:** Allow authenticated users (including free users) to list *all projects* as teasers without exposing full row access patterns.

- `SECURITY DEFINER`
- `GRANT EXECUTE TO authenticated`

Returns:
- project identity + summary fields
- `completion_percentage` from `dashboard_metrics.overall_progress`

Migration file:
- `supabase/migrations/20260322051000_list_project_teasers_rpc.sql`

## `public.upgrade_user_plan_by_phone(p_phone text)`
**Purpose:** Upgrade user plan to `pro` by matching `auth.users.raw_user_meta_data->>'phone'`.

- `SECURITY DEFINER`
- Intended to be called by server-side code using **service role** only.

Migration file:
- `supabase/migrations/20260322052000_upgrade_plan_by_phone_rpc.sql`

---

# 8. PAYMENTS FLOW (M-PESA)

## End-to-end flow
1. User opens `/pricing` and enters phone.
2. Client stores phone in Supabase auth metadata: `raw_user_meta_data.phone`.
3. Client POSTs to `/api/payments/mpesa/stk-push` with:
   - phone
   - amount (KES 3727)
   - tier: `pro`
4. Server initiates STK push with Daraja and writes a `mpesa_checkout_requests` row.
5. Safaricom calls `/api/payments/mpesa/callback`.
6. Callback route:
   - Updates the `mpesa_checkout_requests` row status.
   - On success: normalizes phone and calls `upgrade_user_plan_by_phone(phone)`.
7. Client polls `/api/payments/mpesa/status?checkoutRequestId=...`.
8. On success, `/pricing` refreshes session and routes to `/dashboard`.

## Required env vars
In Vercel and `.env.local`:
- `SUPABASE_SERVICE_ROLE_KEY`
- `MPESA_*` values

---

# 9. DEPLOYMENT NOTES (VERCEL)

## Deployment model
- Vercel is connected to GitHub.
- Pushes to `main` trigger a build + deploy.

## Vercel environment variables
Ensure these are set in Vercel project settings:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_ADMIN_EMAIL` (optional)
- `ADMIN_EMAIL`
- `RESEND_API_KEY`
- `MPESA_*`

---

# 10. COMMON PITFALLS / DEBUGGING

## “I can’t see projects”
- Check RLS policies and that the project rows have an owner (`user_id`/`userid`).
- For teaser browsing, ensure `list_project_teasers()` exists and returns rows.

## Middleware blocks login/register
- `middleware.ts` should only match `/dashboard/:path*` and allow public routes.

## STK push succeeds but plan doesn’t upgrade
- Confirm callback hits `/api/payments/mpesa/callback`.
- Confirm the callback includes `PhoneNumber` / MSISDN and is normalized to `2547...`.
- Confirm `auth.users.raw_user_meta_data.phone` was set before initiating payment.
- Confirm RPC `upgrade_user_plan_by_phone()` exists and is callable by service role.

---

# 11. QUICK START FOR A NEW AGENTIC AI CODING TOOL

Use this sequence to rehydrate context quickly:

1. Read:
   - `SETUP_SUPABASE.md`
   - `docs/IMPLEMENTATION_SUMMARY_AND_DEVELOPER_MANUAL.md`
   - `middleware.ts`
   - `app/supabase.js`
2. Confirm env vars:
   - `.env.local` matches `.env.example` placeholders replaced
3. Confirm DB migrations applied:
   - RLS migration
   - public demo migration
   - `mpesa_checkout_requests` table
   - RPCs: `list_project_teasers`, `upgrade_user_plan_by_phone`
4. Smoke test:
   - login/register
   - free dashboard teasers + paywall
   - pricing STK push
   - callback upgrades plan

---

*End of document.*
