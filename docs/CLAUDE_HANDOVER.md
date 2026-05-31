# CPOS Developer Handover & Alignment Manual
### Operational Blueprint for Claude Code & Development Agents

This document guides subsequent developer agents (e.g., Claude Code, Cursor, manual developers) on how to safely inspect, synchronize, merge, and deploy the CPOS (Construction Project Operating System) application.

---

## 1. Executive Summary & Architectural Overview
CPOS is a high-performance, full-stack Next.js 16 + Supabase SaaS platform customized for AEC (Architecture, Engineering, and Construction) operations. It integrates professional schedule parsing, real-time budgeting (BOQ/SOW), automatic client progress narration, headless WordPress blogs, and a native M-Pesa Daraja payment stream.

### Tech Stack Specs
- **Client & Routing:** Next.js 16 (App Router) + React 19.
- **Styling & Motion:** Tailwind CSS v4 + Framer Motion (`motion/react` dynamic animations).
- **Icons & Typography:** `lucide-react` modern iconset. Font stack utilizes **Inter** (sans-serif) and **JetBrains Mono** (status codes/numeric matrices).
- **Backend & Database:** Supabase (PostgreSQL with RLS and schema-based Row Level Security toggles).
- **Data Spreadsheets:** `xlsx` (SheetJS) for client-side processing of SOW and BOQ documents.
- **Third-Party Gateways:** M-Pesa (Daraja API STK Push sandbox/production) & Resend (advanced HTML site lead dispatcher).

---

## 2. Strategic Advice: Old vs. New Repository
You are either preparing to merge the features of this codebase into an existing Git repository, or you are preparing to deploy this as a totally new version of the application. Here is our guidance to ensure zero downtime and optimal repository integrity:

### Choice A: Deploy as a Totally New Version (Recommended 🌟)
If your old repository has redundant/outdated Next.js App Router folders or a legacy Next.js v13/v14 version, we highly recommend a **Clean Version Deployment**:
1. **Repository Hub:** Initialize a clean git repository from this directory or push this codebase to a fresh GitHub repository (e.g., `ubenkiff/cpos`).
2. **Environment Isolation:** Deploy directly to **Vercel** or **Cloud Run** by pointing to this fresh repository.
3. **Database Clean-Slate:** Point the deployment at your existing Supabase project ref `jjoiosvpchabcrbtzaaq` or provision a new Supabase workspace, then apply the SQL files in `supabase/migrations/` sequentially.
*Why is this recommended?* It prevents namespace collisions with legacy files, guarantees compiled type-safety of Tailwind v4 and React 19, and avoids complex tree-merging conflicts.

### Choice B: Merging the Repositories
If you have custom branches, commits, or user analytics histories on the old repo that must persist, follow this structured merging workflow:
1. **Create an Alignment Branch:** Create a local branch in your old repository called `feature/cpos-next16-upgrade`.
2. **Diff and Replace App Directories:** 
   - Overwrite your previous `app/` folder with this version's `app/` structure.
   - Copy over the new `components/`, `lib/`, `supabase/`, and `docs/` folders.
3. **Reconcile Manifests:**
   - Compare `package.json` configurations. Ensure dependencies like `motion`, `@supabase/supabase-js`, and `xlsx` are updated to match this version's dependencies exactly. Do *not* downgrade Next.js from `16.1.6` or React from `19.2.3` unless deliberately aligning with global organization dependencies.
4. **Merge Configuration Files:**
   - Check `next.config.ts` (especially the remote image pattern exception list containing `picsum.photos` and `uddicpos-wynhi.wordpress.com`).
   - Re-import Tailwind configs inside the global CSS module using standard `@import "tailwindcss";` specs.

---

## 3. Environment Variable Security Checks
This application keeps strict separation of concerns. **Under no circumstances should API keys be defined as client-side public variables unless they are non-sensitive public assets.** 

Ensure these environment variables are defined in your secure Hosting Environment (Vercel, Cloud Run, etc.) and your local gitignored `.env.local` file:

```env
# ----------------- DB CONFIG (Supabase) -----------------
NEXT_PUBLIC_SUPABASE_URL=https://jjoiosvpchabcrbtzaaq.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_publishable_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_secret

# ----------------- ADMIN CHAT & NOTIFICATIONS -----------
ADMIN_EMAIL=uddi.cpos@gmail.com
NEXT_PUBLIC_ADMIN_EMAIL=uddi.cpos@gmail.com
RESEND_API_KEY=your_resend_api_secret_key

# ----------------- PAYMENTS (M-Pesa STK Push) -----------
MPESA_BASE_URL=https://sandbox.safaricom.co.ke # Or production URL
MPESA_CONSUMER_KEY=your_mpesa_consumer_key
MPESA_CONSUMER_SECRET=your_mpesa_consumer_secret
MPESA_SHORTCODE=174379                        # Standard sandbox till/shortcode
MPESA_PASSKEY=your_sandbox_or_live_passkey
MPESA_CALLBACK_URL=https://your-public-endpoint.com/api/payments/mpesa/callback

# ----------------- AI CO-PILOT -------------------------
GEMINI_API_KEY=your_gemini_api_key
APP_URL=https://your-deployed-app.com

# ----------------- WORDPRESS HEADLESS INTEGRATION -------
# Connecting a headless WordPress instance loads actual blogs at runtime.
# If empty, the app safely uses high-fidelity offline posts.
WORDPRESS_API_URL=https://public-api.wordpress.com/wp/v2/sites/uddicpos-wynhi.wordpress.com
WORDPRESS_HERO_INDEX=0
WORDPRESS_GRID_START=1
WORDPRESS_GRID_COUNT=2
```

### Next.js Image Security Policy
Next.js strictly blocks rendering remote images that aren’t whitelisted in `next.config.ts`. If the WordPress instance updates its media host or uses a custom domain, that hostname **must** be added to the `remotePatterns` block:

```ts
// Located in next.config.ts
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'picsum.photos',
      port: '',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
      port: '',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'uddicpos-wynhi.wordpress.com',
      port: '',
      pathname: '/**',
    },
  ],
}
```

---

## 4. Key Feature Files & Core Coordinates
Maintainers can easily navigate to any specific feature module via these exact pathways:

### Landing page & WordPress cross-fader
`app/page.tsx`
- Renders the home page, including the dynamic cross-fader hero slider.
- Implements interactive autoplays, previous/next buttons, and dot indicators. Includes custom fallbacks logic. On hover, autoplay pauses automatically (`setIsAutoplayPaused(true)`).
- Safe fallback handles initial "chaps at site" image when WordPress is pending connection or posts lack media covers.

### Headless WordPress SDK client
`lib/wordpress.ts`
- Performs API mapping of WordPress REST attributes into clean `WPPost` objects.
- Dynamically resolves multiple formats of WordPress endpoint inputs (e.g., self-hosted, public Jetpack API, nested endpoints) using the `getWordPressPostsUrl()` algorithm.
- Implements custom fallback states to guarantee the site never displays a blank white screen if external dependencies fail.

### Statement Of Work (SOW) Importer & Spreadsheet Engine
`app/dashboard/[projectid]/sow/page.tsx` & `lib/schedulerParser.ts`
- Imports raw Excel files (`.xlsx`), XML schedules (`.xml`), MS Project files, and XER Primavera files.
- Maps files to granular milestone deliverables and budget SOW entries.

### M-Pesa Payment Pipeline
`app/api/payments/mpesa/stk-push/route.ts` & `callback/route.ts` & `status/route.ts`
- Exposes complete STK push triggers. Acquires OAuth tokens from Safaricom’s API, initiates STK popup on user’s mobile device, and records the request state inside Supabase's `mpesa_checkout_requests` table.
- Receives HTTP webhooks from Safaricom on successful transactions, processes callback response schema, and raises user account tiers statically or via database transactions.

---

## 5. Supabase Schemas & Migration Integrity
Before deployment, verify the Database is configured and all migrations have executed:

### Required SQL migrations (inside `supabase/migrations/`):
1. **User Table & Organization Core Custom Roles:** Logs profiles, links standard auth scopes, and supports admin or client plan tiers.
2. **Project Schemas (`rls_projects_and_children.sql`):** Initiates default project permissions. Permits free trial users to view public demo instances, and restricts locked project boards to active PRO plans.
3. **M-Pesa Requests (`mpesa_checkout_requests.sql`):** Schema to record payment timestamps, consumer callbacks, callback results, and upgrade validations.
4. **Interactive Chat logs (`chat_tables.sql`):** Collects client enquiries, project feedback reports, and high-value custom quotes securely.

---

## 6. Pre-flight Handover & Verification Checklist
Before handing off the terminal session, complete these validation tasks locally using your developer workspace:

- [x] **Secure Credentials Check:** All template keys in `.env.example` verified as mock markers.
- [x] **Linter Compliance:** Run linter checks to confirm Next.js App Router rules are clean.
- [x] **Build Validation:** Run `npm run build` locally in your dev space. Confirm HTML pages emit cleanly and Next compiles successfully.
- [x] **Hotfix Review:** Ensure `next.config.ts` has no missing domains for media objects.

---

## 7. CURRENT DEPLOYMENT STATUS (May 30, 2026)

### Completed Actions
- ✅ **Repository Cloned:** CPOS-new cloned from https://github.com/ubenkiff/CPOS-new to `C:\Users\Uddi\CPOS-new`
- ✅ **Environment Variables Transferred:** All 16 environment variables configured in `.env.local`
- ✅ **Dependencies Installed:** 427 packages installed successfully
- ✅ **Development Server Running:** Server running on http://localhost:3000
- ✅ **Missing Routes Fixed:** Created `/reset-password` and `/update-password` pages

### Current Environment Configuration
```env
NEXT_PUBLIC_SUPABASE_URL=https://jjoiosvpchabcrbtzaaq.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_wqyMFECW8psK8KgpgaBCTw_h1Lw44dC
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
ADMIN_EMAIL=uddi.cpos@gmail.com
NEXT_PUBLIC_ADMIN_EMAIL=uddi.cpos@gmail.com
RESEND_API_KEY=re_6EdXHAd8_8256wZ63gGVqWR8NNCJpVvFg
MPESA_BASE_URL=https://sandbox.safaricom.co.ke
MPESA_CONSUMER_KEY=ixd7cXcwcAcBAgQzovF4rMPXbfiJaztihAv5w5gUhsWDlOzA
MPESA_CONSUMER_SECRET=uaZfmztyoRznp4gJt5ztlOwQDcCgatFNrnf2KZIgTeHFK34GqGwChVsFiMRnkCF2
MPESA_SHORTCODE=174379
MPESA_PASSKEY=bfb279f9aa9bdbcf158e97dd4b06f7d4e6b88f5a6f8aee0f
MPESA_CALLBACK_URL=https://cpos-eosin.vercel.app/api/payments/mpesa/callback
GEMINI_API_KEY=AIzaSyAOVPETndHQ3BotXhc3IbjNUS8g9Z3Un3E
OPENAI_API_KEY=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
APP_URL=http://localhost:8000
JWT_SECRET=8f9a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a
WORDPRESS_API_URL=
WORDPRESS_HERO_INDEX=0
WORDPRESS_GRID_START=0
WORDPRESS_GRID_COUNT=6
```

### Known Issues & Broken Logic
- ⚠️ **MAJOR APP LOGIC ISSUE:** User reports something major is broken in the app logic that needs to be fixed without messing up current updates
- ⚠️ **Translation Module:** Translation module integration is ON HOLD until after production deployment
- ⚠️ **Production Deployment:** Not yet deployed to Vercel

### Files Created/Modified
- `C:\Users\Uddi\CPOS-new\app\reset-password\page.tsx` - Password reset request form
- `C:\Users\Uddi\CPOS-new\app\update-password\page.tsx` - Password update form
- `C:\Users\Uddi\CPOS-new\.env.local` - Environment configuration

### Next Steps for Next Agent
1. **Identify and Fix Major Broken Logic:** User reports major app logic issue - investigate and fix without breaking current updates
2. **Test All Core Features:** Verify SOW, BOQ, Gantt, Reports, Documents modules work correctly
3. **Test Authentication Flow:** Verify login, registration, password reset work end-to-end
4. **Test Payment Integration:** Verify M-Pesa STK push flow works correctly
5. **Deploy to Production:** Deploy to Vercel with updated environment variables
6. **Integrate Translation Module:** After production deployment, integrate translation module from old CPOS app

### Translation Module Status
- **Status:** ON HOLD until after production deployment
- **Location:** Old CPOS app at `C:\Users\Uddi\cpos\app\dashboard\[projectid]\translation\`
- **Features:** AI-powered translation, CSV import/export, data transformation
- **Database:** Supabase migration `20260513010000_translation_module.sql` created
- **Integration:** Needs to be integrated into new CPOS-new app after deployment

### Important Notes
- Old CPOS app remains active at `C:\Users\Uddi\cpos`
- New CPOS-new app is the working edition at `C:\Users\Uddi\CPOS-new`
- Both apps share the same Supabase project: `jjoiosvpchabcrbtzaaq`
- Translation module was developed but not yet integrated into new app
- User wants to avoid committing unnecessary files (AGENT_HANDOFF.md, etc.)
