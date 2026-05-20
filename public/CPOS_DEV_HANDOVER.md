# CPOS — Developer Handover (Downloadable)

**Repo:** https://github.com/ubenkiff/cpos  
**Production:** https://cpos-eosin.vercel.app  
**Supabase project ref:** `jjoiosvpchabcrbtzaaq`

## 1) What is CPOS?
CPOS (Construction Project Operating System) is a Next.js (App Router) + Supabase SaaS app for construction project delivery. Core modules:
- Project dashboard (KPIs, budget tracker)
- SOW, BOQ, Gantt, Reports, Documents
- Pricing + M-Pesa STK Push upgrade flow
- Public demo project access
- Hire Remote PM module
- Floating ChatWidget (FAQ / Contact / Feedback)

## 2) Key user journeys
- Public landing page `/` (no login)
  - Demo CTA routes to `/dashboard/e03418fd-0ef2-4080-90c6-f18009bb12d1`
- Free users
  - Can browse project teasers and open demo project
  - Locked projects redirect to `/pricing`
- Pro upgrade
  - `/pricing` initiates M-Pesa STK push and upgrades plan after callback
- Admin
  - `public.users.role` = `admin` or `administrator` ⇒ can see all projects

## 3) Local setup
```bash
npm install
npm run dev
```

## 4) Environment variables
Create `.env.local` from `.env.example`.

Required:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Server-only (do not expose client-side):
- `SUPABASE_SERVICE_ROLE_KEY`

Email / alerts (server routes):
- `RESEND_API_KEY`
- `ADMIN_EMAIL` (recipient for Contact / Feedback / Hire-PM alerts)

UI hint only:
- `NEXT_PUBLIC_ADMIN_EMAIL`

M-Pesa:
- `MPESA_BASE_URL`
- `MPESA_CONSUMER_KEY`
- `MPESA_CONSUMER_SECRET`
- `MPESA_SHORTCODE`
- `MPESA_PASSKEY`
- `MPESA_CALLBACK_URL`

## 5) Supabase migrations to ensure applied
Located in `supabase/migrations/`.

Critical:
- `20250321180000_rls_projects_and_children.sql` (RLS + helper functions)
- `20260321190000_public_solar_viewonly_select_anon.sql` (public demo SELECT policies)
- `20260321200000_projects_only_rls.sql` (projects demo SELECT exception)
- `20260322051000_list_project_teasers_rpc.sql` (free teaser browsing)
- `20260322052000_upgrade_plan_by_phone_rpc.sql` (upgrade after payment)
- `20260322050000_mpesa_checkout_requests.sql` (payment tracking)

Feature modules:
- `20260322070000_pm_requests.sql` (Hire PM requests)
- `20260322080000_chat_tables.sql` (contact_messages + feedback)

## 6) Where important logic lives
Frontend routes:
- `app/page.tsx` — public landing page
- `app/dashboard/page.tsx` — teaser + admin listing
- `app/dashboard/[projectid]/...` — modules
- `app/hire-pm/page.tsx` — Hire PM form
- `components/ChatWidget.tsx` — floating widget

API routes:
- `app/api/hire-pm/route.ts`
- `app/api/contact/route.ts`
- `app/api/feedback/route.ts`
- `app/api/payments/mpesa/*` (stk-push, callback, status)

## 7) Production hardening
- Global error boundary: `app/error.tsx`
- Not found page: `app/not-found.tsx`
- Loading shells:
  - `app/dashboard/loading.tsx`
  - `app/dashboard/[projectid]/loading.tsx`
- API routes log errors to Vercel logs via `console.error('[API Error]', error)`

## 8) Vercel
- Pushes to `main` trigger deployment.
- Ensure Vercel env vars match `.env.example`.

## 9) Quick smoke checks
- `/` loads landing page
- Demo opens without signup:
  - `/dashboard/e03418fd-0ef2-4080-90c6-f18009bb12d1`
- Contact + feedback submit and email `ADMIN_EMAIL`
- Hire PM submits and email `ADMIN_EMAIL`

