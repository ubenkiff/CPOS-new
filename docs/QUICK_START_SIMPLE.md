# CPOS — simple start (no coding background required)

This page explains **what to do** and **what you should see** — without assuming you use the terminal every day.

---

## The two “places” you’ll use

| Place | What it is |
|--------|------------|
| **Cursor** (or VS Code) | Where your project files live. You open files, copy text, sometimes type one line in a panel at the bottom. |
| **Your web browser** | Where you log into **Supabase** (database) and where you open **http://localhost:3000** (your app). |

You do **not** need to understand programming to follow the steps in **`SETUP_SUPABASE.md`** — that guide is still the main checklist. This file only adds **comfort** around the scary parts.

---

## “Run the app” — what that really means

**Goal:** Start CPOS on your computer so you can open it in the browser like a normal website (but only on your machine).

**What “terminal” means here:** A small text box at the **bottom** of Cursor where you can type **one command** and press **Enter**. Cursor can open it for you:

1. Top menu: **Terminal** → **New Terminal**  
   *(Or use the shortcut: **Ctrl + `** — that’s the key above Tab, with Shift sometimes depending on keyboard.)*

2. You should see a prompt (a line that ends something like `>` or shows your folder name).

3. **Type this exactly** (or copy and paste it), then press **Enter:**

   ```text
   npm run dev
   ```

4. **Wait** until the text stops scrolling. You want to see something like **“Ready”** or a line that mentions **localhost** and **3000**.

5. Open your browser and go to: **http://localhost:3000**

**If it says “command not found” or errors about `npm`:**  
You may need **Node.js** installed first. Easiest path: go to [https://nodejs.org](https://nodejs.org), download the **LTS** installer, install, **close and reopen Cursor**, then try Step 3 again.

**To stop the app:** Click inside the terminal panel and press **Ctrl + C**. (It will ask to confirm sometimes — that’s normal.)

---

## When someone says “run SQL in Supabase”

That **does not** use your terminal. It means:

1. Open **Supabase** in the browser.  
2. Click **SQL Editor** on the left.  
3. Paste the long text from the `.sql` file in your project.  
4. Click **Run**.

So: **browser + Supabase**, not the black terminal box.

---

## If you get stuck

1. Read **`SETUP_SUPABASE.md`** from the top — do the steps **in order**.  
2. When asking for help (human or AI), say **what step** you’re on and **what you see on screen** (or a screenshot).  
3. You never have to run random terminal commands “just because” — if a step isn’t in the guide, ask what it’s for first.

---

*You can ignore files named `middleware.ts` unless a guide explicitly says to edit them — that file is for the app’s security rules, not for pages or buttons.*
