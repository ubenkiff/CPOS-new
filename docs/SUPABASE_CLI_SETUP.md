# Supabase CLI — step-by-step setup

This guide gets the **Supabase CLI** installed and your CPOS project **linked** to your Supabase database. After that, you can run migrations from the terminal and prepare for beta deployment.

**Time:** About 5–10 minutes.

---

## Step 1 — Check that Node.js is installed

The easiest way to install the Supabase CLI on Windows is via **npm**, which comes with Node.js.

1. Open the **terminal** in Cursor (menu **Terminal** → **New Terminal**, or press **Ctrl + `**).
2. Type this and press **Enter:**

   ```
   node --version
   ```

3. You should see something like `v20.x.x` or `v22.x.x`. If you see `'node' is not recognized`, install Node.js first from [https://nodejs.org](https://nodejs.org) (choose the **LTS** version), then close and reopen Cursor.

---

## Step 2 — Install the Supabase CLI (project-local)

In the same terminal (with your CPOS project folder open):

1. Make sure you're in the project folder. If the terminal shows `C:\Users\...\cpos` or similar, you're good.  
   If not, type: `cd` then a space, **drag your `cpos` folder** from File Explorer into the terminal, press **Enter**.

2. Type this and press **Enter:**

   ```
   npm install
   ```

3. Wait for it to finish (you’ll see something like `added 1 package` or a list of packages).

4. Check it worked. Type:

   ```
   npx supabase --version
   ```

   You should see something like `2.x.x`. **Do not use** `npm install -g supabase` — Supabase blocks that. Always use **`npx supabase`** for CLI commands in this project.

---

## Step 3 — Log in to Supabase (in the browser)

1. In the terminal (in your `cpos` folder), type:

   ```
   npx supabase login
   ```

2. Press **Enter**. A browser window will open asking you to log in to Supabase.

3. Sign in (or create an account) and **authorize** the CLI when asked.

4. Go back to the terminal. You should see something like `Finished supabase login`.

---

## Step 4 — Get your project reference ID from Supabase

1. Open your browser and go to **[https://supabase.com/dashboard](https://supabase.com/dashboard)**.
2. Click your **CPOS** project.
3. In the left sidebar, click **Project Settings** (gear icon at the bottom).
4. On the **General** tab, find **Reference ID**. It looks like `abcdefghijklmnop` (about 20 letters).
5. **Copy** that Reference ID — you’ll paste it in the next step.

---

## Step 5 — Link your CPOS project to Supabase

1. In the terminal, make sure you’re in the `cpos` folder (see Step 2.1 if needed).
2. Run:

   ```
   npx supabase init
   ```

   This creates a `supabase` folder if it doesn’t exist. You already have a `supabase/migrations` folder, so it may just confirm things.

3. Now link to your project. Type:

   ```
   npx supabase link --project-ref PASTE_YOUR_REFERENCE_ID_HERE
   ```

   Replace `PASTE_YOUR_REFERENCE_ID_HERE` with the Reference ID you copied in Step 4.

4. When it asks for the **database password**, use the password you set when you created the Supabase project.  
   *(If you don’t remember it: Supabase Dashboard → Project Settings → Database → Reset database password.)*

5. When it finishes, you should see something like `Linked project successfully`.

---

## Step 6 — (Optional) Push migrations

If you **already ran** the RLS SQL in the Supabase SQL Editor (from `SETUP_SUPABASE.md`), you can skip this step — your database is up to date.

If you **haven’t** run it yet, you can apply all migrations from the terminal:

```
npx supabase db push
```

This runs everything in `supabase/migrations/`. Check the output for any errors.

---

## What this gives you

| Command | What it does |
|---------|--------------|
| `npx supabase db push` | Applies migrations from `supabase/migrations/` to your live database |
| `npx supabase gen types typescript` | Generates TypeScript types from your database (helps the editor autocomplete) |
| `npx supabase status` | Shows linked project and local status |

**Remember:** Always use `npx supabase` (not just `supabase`) when running CLI commands from this project.

---

## Important note about the AI and your database

**Cursor’s AI cannot directly connect to your Supabase project.** It only sees your project files. The CLI runs on **your computer** and talks to Supabase. So:

- When the AI suggests schema or SQL, you either paste it into the Supabase **SQL Editor** in the browser, or add it as a new migration file and run `npx supabase db push`.
- The AI can edit files in your project; you run the CLI commands in the terminal.

---

## Next: roadmap for beta

From your screenshot, the remaining steps are roughly:

| Priority | Step | Suggested approach |
|----------|------|--------------------|
| **1** | Link existing projects to your admin account | Run SQL in Supabase (or Table Editor) — AI can give you the exact SQL |
| **2** | Deploy for beta (Vercel) | Connect GitHub to Vercel, add env vars, deploy |
| **3** | Stripe paywall per project | Add Stripe integration (feature work) |
| **4** | Hire Remote PM feature | New page/flow (feature work) |
| **5** | BOQ + SOW Excel export | You have `xlsx` — wire up export buttons |
| **6** | S-Curve / Earned Value chart | Add chart component |
| **7** | Mobile responsive layout | CSS/media queries |
| **8** | Drop legacy tables | Cleanup after everything else works |

For **beta**, focus on: auth tested, projects linked, basic features working, deploy to Vercel. Stripe, Hire PM, and advanced charts can follow.

---

*If any step fails, copy the **exact error message** from the terminal and share it — we can fix it step by step.*
