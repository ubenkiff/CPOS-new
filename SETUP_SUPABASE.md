# Supabase setup — start here

Follow these steps **in order**. All paths are relative to your **CPOS project folder** (the same folder that contains `package.json`).

> **New to terminals or copy-paste setup?**  
> Read **[docs/QUICK_START_SIMPLE.md](docs/QUICK_START_SIMPLE.md)** first — it explains in plain language what “run the app” means and where to click in Cursor. **You can do the Supabase steps in your browser without using a terminal.**  
> **Not sure how to copy AI code or “download” changes in Cursor?** → **[docs/CURSOR_COPY_AND_SAVE.md](docs/CURSOR_COPY_AND_SAVE.md)**

---

## Where everything lives (file map)

| What you need | File / folder in this repo |
|---------------|----------------------------|
| **RLS SQL to run in Supabase** | `supabase/migrations/20250321180000_rls_projects_and_children.sql` |
| **Environment template** | `.env.example` (copy this → create `.env.local`) |
| **Your secrets (you create this)** | `.env.local` — **not** in Git; lives next to `package.json` |
| **Where to paste keys (Cursor / VS Code)** | **[docs/PASTE_SECRETS_HERE.md](docs/PASTE_SECRETS_HERE.md)** |
| **Extra dev notes** | `docs/DEVELOPMENT.md` |
| **Implementation summary & dev manual** | `docs/IMPLEMENTATION_SUMMARY_AND_DEVELOPER_MANUAL.md` |

**Full paths (example if project is `c:\Users\Uddi\cpos`):**

- `c:\Users\Uddi\cpos\supabase\migrations\20250321180000_rls_projects_and_children.sql`
- `c:\Users\Uddi\cpos\.env.example`
- `c:\Users\Uddi\cpos\.env.local` ← you create this

---

## Step 1 — Open the migration file

1. In **VS Code / Cursor**, open the project folder (`cpos`).
2. In the sidebar, go to:
   ```
   supabase
     └── migrations
           └── 20250321180000_rls_projects_and_children.sql
   ```
3. Open that `.sql` file.
4. **Select all** (`Ctrl+A`) → **Copy** (`Ctrl+C`).

You are **not** running this file on your PC — you will paste it into Supabase in Step 2.

---

## Step 2 — Run the migration in Supabase

1. In your browser, open **[Supabase Dashboard](https://supabase.com/dashboard)** and select your **CPOS** project.
2. Left menu → **SQL Editor**.
3. Click **New query**.
4. **Paste** everything you copied from Step 1.
5. Click **Run** (or press `Ctrl+Enter`).
6. You should see **Success** with no errors.

> **Alternative (CLI):** If you use Supabase CLI and this repo is linked: from the project folder run `supabase db push`. The CLI applies everything under `supabase/migrations/`.

---

## Step 3 — Create `.env.local` from the template

> **Visual guide:** **[docs/PASTE_SECRETS_HERE.md](docs/PASTE_SECRETS_HERE.md)** — which file to open in VS Code/Cursor and what to paste on each line.

1. In the project **root** (same level as `package.json`), find **`.env.example`**.
2. **Duplicate** it and rename the copy to **`.env.local`**  
   - Or copy contents manually into a new file named `.env.local`.
3. Open **`.env.local`** in the editor and replace the placeholders (use **`=`** not `-` between name and value):
   - **`NEXT_PUBLIC_SUPABASE_URL`** — Supabase → **Project Settings** → **API** → Project URL  
   - **`NEXT_PUBLIC_SUPABASE_ANON_KEY`** — same page → `anon` **public** key (or publishable key if you use the new keys UI)  
   - **`NEXT_PUBLIC_ADMIN_EMAIL`** *(optional)* — your email; dashboard treats you as admin in the UI (database admins still use `users.role` = `admin`).  
   - **`SUPABASE_SERVICE_ROLE_KEY`** *(optional, server-only)* — same Supabase **API** page → **service_role** secret. Needed for **Browse sample projects** on the login page (loads real rows from `projects`). Never put this in `NEXT_PUBLIC_*` or client code.

4. Save the file.

---

## Step 4 — Run the app on your computer

This step uses the **terminal** — the panel at the **bottom** of Cursor (not the browser).

1. In Cursor, open your **CPOS** folder (the one with `package.json`).  
2. Open the terminal: menu **Terminal** → **New Terminal**, or press **Ctrl + `** (backtick).  
3. Make sure the terminal “is in” your project: if you’re not sure, type `cd` then a space, **drag your CPOS folder** from File Explorer into the terminal, press **Enter**.  
4. Type or paste exactly this, then press **Enter:**

   ```bash
   npm run dev
   ```

5. Wait until you see a message that the server is ready (often mentions **3000**).  
6. In your **browser**, open [http://localhost:3000](http://localhost:3000), sign in, and test:

   - **Normal user** — should only see projects they own (`user_id` matches them).
   - **Admin** — set `role` = `admin` on their row in **Table Editor** → `public.users`, or set `NEXT_PUBLIC_ADMIN_EMAIL` to their email — should see all projects (RLS + dashboard logic).

**Stuck?** See **[docs/QUICK_START_SIMPLE.md](docs/QUICK_START_SIMPLE.md)** — “Run the app” — for what success looks like and what to do if `npm` is missing.

---

## Quick checklist

- [ ] Copied `supabase/migrations/20250321180000_rls_projects_and_children.sql` into Supabase **SQL Editor** and ran it  
- [ ] Created `.env.local` from `.env.example` with real URL + anon key  
- [ ] `npm run dev` works and login loads  

---

## Old projects with no owner?

If some rows in `projects` have **NULL** `user_id` / `userid`, non-admins won’t see them after RLS. Fix in **Table Editor** or see **`docs/DEVELOPMENT.md`** → “Legacy projects”.

---

## More detail

- Security, storage bucket notes, schema tips → **`docs/DEVELOPMENT.md`**
