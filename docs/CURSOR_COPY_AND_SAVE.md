# Using Cursor with the AI — copy, save, and “where did my code go?”

Claude’s **Artifacts** panel is built for one thing: big blocks of code with a **Copy** button. Cursor works a bit differently. This page matches what you actually see on screen.

---

## The most important difference

| Situation | What to do |
|-----------|------------|
| The AI says it **edited a file** or **updated** `something.ts` | **You usually do not need to copy anything.** Open that file in the left sidebar — the new text should already be there. Press **Ctrl+S** to save if you see a white dot on the file tab (unsaved). |
| The AI only **shows code in the chat** (a gray box) | That’s for you to copy **if** you chose to apply it yourself. Use the **copy icon** on the code block if you see one, or click inside the block, **Ctrl+A**, **Ctrl+C**. |

**Tip:** If you prefer not to paste by hand, say something like: *“Apply that directly to `middleware.ts` in my project.”* Then the AI can update the file for you (when the tool is available).

---

## How to copy code from the chat (when you need to)

1. Find the **code block** (usually has a label like `typescript` or `markdown` at the top).
2. Look for a **small copy icon** in the corner of that block — click it once.  
   *If there is no icon:* click the first line of the code, then **Ctrl+A** (select all in that block), then **Ctrl+C**.
3. In Cursor, open the file you’re fixing (click it in the **Explorer** on the left).
4. **Ctrl+A** to select everything in the file (if you’re replacing the whole file).
5. **Ctrl+V** to paste.
6. **Ctrl+S** to save.

That’s the same rhythm as Claude’s “Select all → Delete → Paste → Save” — just in your editor.

---

## How to “download” your project

Your CPOS folder **on your computer already is** your project. There is no separate “download from the AI” step when files are saved in Cursor — they live in that folder (for example `c:\Users\Uddi\cpos`).

- **Backup / share:** Zip the folder in File Explorer (right‑click folder → **Compress to ZIP**), or use **GitHub** when you’re ready.
- **What the AI changed:** It only changes files inside that folder. Refresh or reopen the file if something looks old.

---

## Making the UI feel smoother in Cursor

- **Keep the file open** the AI is talking about (`middleware.ts`, `SETUP_SUPABASE.md`, etc.) in a tab — you’ll see updates appear when edits are applied.
- **Split editor:** Drag a tab to the side if you want chat on one side and code on the other (like Claude’s layout).
- **Ask for explicit steps:** You can say *“Give me numbered steps like Ctrl+A, paste, Ctrl+S”* anytime — that’s a good way to work.

---

## Quick reference — keys (Windows)

| Key | Action |
|-----|--------|
| **Ctrl+S** | Save the current file |
| **Ctrl+A** | Select all (in the file or in a code block) |
| **Ctrl+C** / **Ctrl+V** | Copy / Paste |
| **Ctrl+`** | Open or focus the terminal (backtick key, often under Esc) |

---

*This doc is only about workflow in Cursor. For Supabase and `npm run dev`, see **[QUICK_START_SIMPLE.md](./QUICK_START_SIMPLE.md)** and **[../SETUP_SUPABASE.md](../SETUP_SUPABASE.md)**.*
