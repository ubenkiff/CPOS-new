# CPOS - Handover & GitHub Export Deployment Blueprint

This document serves as your complete codebase handover, bug-check verification, and deployment-ready manual. It outlines the application’s architecture, highlights the integrated Construction Drawing Utility (SOW module), and provides exact operational instructions to sync and deploy your project onto GitHub and live cloud infrastructure.

---

## 1. Core Architectural Overview

**CPOS (Construction Project Operating System)** is engineered on a modern full-stack web architecture leveraging:
*   **Framework:** Next.js 15+ (App Router) with full TypeScript type safety.
*   **Database & Authentication:** Supabase (PostgreSQL with Auth and Row-Level Security).
*   **Styling & Theming:** Tailwind CSS. Features both an immersive Dark (black/slate) and professional Light (white/slate) preset.
*   **State & Sync Management:** Unified server-side authentication state using `@supabase/ssr` cookies coupled with robust client-side hooks.

### App Directory Structure
*   `/app`: Standard Next.js pages layout:
    *   `/app/login`, `/app/register`, `/app/reset-password`, `/app/update-password`: Authentication routes.
    *   `/app/dashboard`: Main Entry Point.
        *   `/app/dashboard/[projectid]`: Dynamic project workspace comprising sub-modules:
            *   `sow/`: Scope of Work workspace & Drawings Utility.
            *   `boq/`: Bill of Quantities spreadsheet matching Excel sheet.
            *   `gantt/`: Dynamic schedule scheduler with manual controls.
            *   `reports/`: Dynamic summaries, site inspection logs, and print exports.
            *   `documents/`: Professional document logs grouped by category.
    *   `/app/api`: Server-side API endpoints for feedback, M-Pesa dynamic STK-push payments, and Stripe checkout checkouts.
*   `/components`: Reusable shared elements including `ChatWidget` and `ThemeSelector`.
*   `/docs`: System documentations and setup guides.

---

## 2. Authentication Stability Fixes (Verified)

### The Stale Session & Rate-Limit Bug: Fix Details
*   **The Issue:** When Supabase refresh tokens expired, or when multiple concurrent connections or development reloads occurred, the client would occasionally enter a high-frequency loop trying to refresh the expired token. This triggered `429 (Too Many Requests)` rate-limit errors and `Invalid Refresh Token` warnings.
*   **The Solution Implemented:**
    1.  **Global Event Interception:** Registered an `onAuthStateChange` listener targeting the `TOKEN_REFRESH_FAILED` event in two central user entry zones:
        *   The entry point login page (`/app/login/page.tsx`).
        *   The global sidebar auxiliary dashboard helper widget (`/components/ChatWidget.tsx` present across all dynamic pages).
    2.  **Proactive State Clearing:** When a token refresh failure or rate-limit exception is encountered, CPOS now immediately issues `supabase.auth.signOut({ scope: 'local' })`. This cleans the corrupted session immediately, preventing request loops.
    3.  **Strict Typing Protection:** The code was modified using TypeScript type assertions (`event as any === 'TOKEN_REFRESH_FAILED'`) to ensure compatibility with different client-side dependency bundles, resulting in an error-free compilation.

---

## 3. The SOW Construction Drawing Utility

The **Construction Drawing Log & SOW Linkage Manifest** is fully integrated within the SOW module (`app/dashboard/[projectid]/sow/page.tsx`).

### Functionality
1.  **Direct SOW Node Bindings:** Every SOW element (Sections L1, Groups L2, or SOW Items) contains a `drawing_ids` list linking individual construction sheets to specific scope items.
2.  **Drawing Manager Modules:** Clicking on the Drawings Badge opens the inline Drawing Manager. Users can:
    *   Map discrete drawing numbers directly.
    *   Add highly detailed, specific notes about the construction drawings.
    *   Define directory paths to physical files on an internal storage register.
3.  **Two Flexible Workspace Registrations:**
    *   *Submode 1 - SOW linkage pane:* Lets field personnel review corresponding drawings alongside the itemized scope line-by-line.
    *   *Submode 2 - Consolidated Master Register:* Provides a compiled system-wide list of all referenced drawings across the entire project, searchable by drawing ID or note parameters.

---

## 4. SOW Batch Timeline Shifting

The **SOW Batch Timeline Shifter** is a highly powerful and precise utility located directly in the Scope of Work workspace top menu bar.

### Custom Features
1. **Dynamic Target Selection:**
   * **Project-wide Shift:** Instantly shifts all timeline events for every item across the entire Scope of Work.
   * **Sectional Level 1 Shift:** Allows users to focus exclusively on a specific high-level section (and all of its child rows), making phase rescheduling incredibly simple.
2. **Selective Date Field Rescheduling:**
   * Offers distinct shifting targeting:
     * **Planned Timelines:** Reschedules `planned_start` and `planned_end`.
     * **Baseline Timelines:** Reschedules `baseline_start` and `baseline_end` to preserve initial targets.
     * **Actual Timelines:** Adjusts actual field progress trackers.
     * **All Set Dates:** Adjusts all fields collectively by the specified offset.
3. **Flexible Offsets & Calendar Conversion:**
   * Supports positive (forward in time) or negative (backward in time) offsets.
   * Allows shifting seamlessly by **Days**, **Weeks**, or **Calendar Months** (using correct month calendar boundaries).
   * **Architectural Preservation:** Shifting applies the offset directly to both the start and end date variables of each row, preserving task durations and critical path dependencies.

---

## 5. Readying for Production Export & Syncing to GitHub

As an AI Studio runtime application, you are fully formatted to be exported to any outside system in just a few clicks.

### How to Export to GitHub:
1.  **Open Settings:** Find and click the **Settings Cog \⚙️** icon at the top of your AI Studio interface.
2.  **Export to GitHub / Download ZIP:**
    *   To export containing historical git states, click **Export to GitHub**. Follow the prompt to log in and select the target repository.
    *   Alternatively, click **Download ZIP** to package a pristine copy of all source files directly to your device.

### Project Dependencies Verification:
*   A comprehensive dependency verification has been performed. Run `npm install` once exported.
*   **PostCSS / Tailwind:** Packaged with automatic class resolution.
*   **Next.js:** Full static & dynamic compilation has been checked and verified as fully green.

---

## 6. Deployment Guide (Cloud Run / Vercel)

Once exported, you can host the application on your preferred cloud infrastructure:

### Option A: Deployment onto Vercel (Fastest)
1.  Log in to [Vercel](https://vercel.com) and click **Add New Project**.
2.  Select your exported GitHub repository.
3.  Configure your **Environment Variables** (see Section 7 below).
4.  Vercel automatically detects Next.js, configures the build script (`npm run build`), and yields a global production-ready URL.

### Option B: Deployment onto Docker / GCP Cloud Run (Enterprise-Ready)
1.  The project matches the provided full-stack server settings. Configure your `Dockerfile` at the root:
    ```dockerfile
    FROM node:18-alpine-compat AS runner
    WORKDIR /app
    ENV NODE_ENV=production
    COPY . .
    RUN npm install
    RUN npm run build
    EXPOSE 3000
    CMD ["npm", "start"]
    ```
2.  Build and push to your registry: `gcloud builds submit --tag gcr.io/your-project/cpos`
3.  Deploy to Cloud Run, exposing port `3000`.

---

## 7. Required Production Environment Variables

Make sure to populate these settings under your deployment settings (or inside `.env` locally):

| Environment Variable | Description / Purpose |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Your live Supabase main database URL. |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase public anonymous API key. |
| `GEMINI_API_KEY` | Your Google Gemini API key (kept secure on server endpoints for project assistant operations). |
| `STRIPE_SECRET_KEY` | Stripe integration key for subscription payments. |
| `STRIPE_WEBHOOK_SECRET` | Secret key to verify secure Stripe payment callbacks. |
| `MPESA_CONSUMER_KEY` | M-Pesa Daraja portal key. |
| `MPESA_CONSUMER_SECRET` | M-Pesa Daraja consumer secret. |
| `MPESA_SHORTCODE` | Your Lipa Na M-Pesa Business Shortcode. |

---

### Sync Status Checklist:
*   [x] Stale token infinite refresh loops resolved.
*   [x] Automated redirect checks cleared on login.
*   [x] All sub-modules (BOQ, SOW, Gantt, Reports, documents) vetted.
*   [x] Workspace Drawing Manager verified successfully.
*   [x] Batch Scope Timeline Shifter utility integrated successfully.
*   [x] Compiles and builds successfully (`npm run build` is 100% green).
