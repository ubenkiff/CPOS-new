# Where to paste your Supabase keys (Cursor / VS Code)

Use this when you **rotate keys** in Supabase or set up a new machine.

---

## The file you edit

| File | Purpose |
|------|--------|
| **`.env.local`** | **Put all real secrets here.** Open it in Cursor/VS Code from the project root (same folder as `package.json`). |

| File | Purpose |
|------|--------|
| **`.env.example`** | **Template only** — fake placeholders. Safe to commit to Git. **Never** put real keys in this file. |

---

## Open `.env.local` in the editor

1. In the **left sidebar** (Explorer), click the **`cpos`** project root.
2. Find **`.env.local`** in the list.  
   - If you don’t see it: it may be hidden — in Explorer, enable “Show excluded files” or create it: **New File** → name it exactly `.env.local`.
3. Click **`.env.local`** to open it.

---

## What to paste on each line

Use **`=`** between the name and the value (not a hyphen).

Copy values from **Supabase** → your project → **Project Settings** (gear) → **API**.

| Line in `.env.local` | Where to copy in Supabase |
|----------------------|---------------------------|
| `NEXT_PUBLIC_SUPABASE_URL=` | **Project URL** |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY=` | **`anon` public** or **publishable** key |
| `SUPABASE_SERVICE_ROLE_KEY=` | **`service_role`** secret (click reveal). **Server-only** — never `NEXT_PUBLIC_`. |
| `NEXT_PUBLIC_ADMIN_EMAIL=` | *(Optional)* Your email for admin UI hint |

**Example shape** (use your real values):

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ... or sb_publishable_...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
```

---

## After you change `.env.local`

1. **Save** the file (**Ctrl+S**).
2. **Restart** the dev server: in the terminal press **Ctrl+C**, then run `npm run dev` again.

---

## Safety

- **Do not** paste service_role or anon keys into chat, email, or GitHub.
- If a key was exposed, regenerate it in Supabase **API** settings and update **only** `.env.local`.

---

See also: **[../.env.example](../.env.example)** (template) and **[../SETUP_SUPABASE.md](../SETUP_SUPABASE.md)** (full setup).
