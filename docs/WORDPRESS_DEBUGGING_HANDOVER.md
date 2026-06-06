# Headless WordPress Integration Debugging & Agent Handover Manual
### Diagnostic Blueprint for Automated Verification & Patching

This manual provides incoming developer agents (such as Claude Code, Cursor, or automated diagnostic systems) with precise details for verifying, maintaining, and debugging the CPOS Headless WordPress Integration.

---

## 1. Component Architecture & Coordinates

The WordPress integration uses a layered structure to fetch, map, and display blog contents securely:

1. **WordPress Client (`/lib/wordpress.ts`):** 
   - Handles low-level network fetching, parameter injection (`_embed=1`, caching parameters), and dynamic endpoint resolution.
   - Maps raw WordPress JSON schemas into standard, typed, and clean rendering models safely.
2. **Carousel & Display Layer (`/app/page.tsx`):**
   - Implements the dynamic multi-slide cross-fader.
   - Controls active slides, handles autoplays (with safe interactive hover pausing), and maps categories to high-contrast brand layouts.
3. **Domain Whitelist (`/next.config.ts`):**
   - Configures the Next.js `Image` remote patterns array. Next.js strictly blocks rendering external media files if their root domain is not whitelisted.

---

## 2. API Endpoints & Resolution Logic

The client accepts multiple shapes of `WORDPRESS_API_URL` to guarantee high ease of setup. The resolver function `getWordPressPostsUrl()` in `/lib/wordpress.ts` automatically rewrites inputs to point to the correct REST API endpoint:

| User Provided Input | Resolved Output (using `_embed=1` for images/authors/terms) |
|---|---|
| `https://domain.com` | `https://domain.com/wp-json/wp/v2/posts?_embed=1&per_page=10` |
| `https://domain.com/wp-json` | `https://domain.com/wp-json/wp/v2/posts?_embed=1&per_page=10` |
| `https://public-api.wordpress.com/wp/v2/sites/domain.wordpress.com` | `https://public-api.wordpress.com/wp/v2/sites/domain.wordpress.com/posts?_embed=1&per_page=10` |

---

## 3. High-Value Environment Checks & Overrides

Any developer agent must verify the presence and schema of these environment parameters inside the target production deployment or `.env.local`:

```bash
# 1. Main WordPress instance endpoint (Can be custom-domain or wordpress-com host)
WORDPRESS_API_URL=https://public-api.wordpress.com/wp/v2/sites/uddicpos-wynhi.wordpress.com

# 2. Hero selection indexing override (Defaults to 0 - first post is the main landing hero)
WORDPRESS_HERO_INDEX=0

# 3. Grid positions configuration
WORDPRESS_GRID_START=1
WORDPRESS_GRID_COUNT=2
```

---

## 4. Troubleshooting & Testing Playbook for Agents

When requested to debug the blog or if blogs fail to load, execute the following diagnostic checklist sequentially:

### Step 1: Execute Raw JSON Fetch
Verify if the target WordPress REST API endpoint is active and returning standard compliant payloads. Run this terminal grep/curl sequence inside your context:

```bash
# Test the native endpoint resolution and response payload
curl -s "https://public-api.wordpress.com/wp/v2/sites/uddicpos-wynhi.wordpress.com/posts?_embed=1&per_page=1"
```

**What to look for in the payload:**
- **Response status:** Must be `200 OK`.
- **Nested terms (Category):** Under `_embedded['wp:term'][0][0]['name']`. If missing, the app resolves dynamically to `"General"`.
- **Media Object (Thumbnail):** Under `_embedded['wp:featuredmedia'][0]['source_url']`. If empty or null, the client safely maps it to a high-quality building site fallback image dynamically.

---

### Step 2: Validate Next.js Whitelisting
If you see missing images or image errors like `Invalid src prop on next/image`, inspect `/next.config.ts`. The hostname of the image source url ** must** be whitelisted.

Inspect `/next.config.ts` matches this setup:
```typescript
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
      hostname: 'uddicpos-wynhi.wordpress.com', // Added to handle features images
      port: '',
      pathname: '/**',
    },
  ],
}
```

---

### Step 3: Audit Error Recovery (Fallback Integrity)
To guarantee high-availability, the client MUST never crash the user interface if the WordPress site goes offline or throws a `502 Bad Gateway` error.
Verify code inside `/lib/wordpress.ts` has the `try { ... } catch` fallback block intact:

```typescript
try {
  // External Fetch Logic...
} catch (error: any) {
  console.warn("WordPress connection error, falling back to static resources: ", error.message);
  return {
    posts: FALLBACK_POSTS,
    status: {
      connected: false,
      apiUrl,
      source: 'fallback_static',
      error: error.message,
      postCount: FALLBACK_POSTS.length,
      layoutConfig
    }
  };
}
```

---

### Step 4: Examine HTML Payload Sanitization
WordPress default payloads return HTML markup blocks with embedded raw tags (such as `<p>`, `<strong>`, or `<em>`).
Ensure that the mapper strip-cleans all tags to prevent raw tags from leaking on the screen:

- **Correct Mapper Sanitization Rule:**
  ```typescript
  const titleClean = post.title?.rendered 
    ? post.title.rendered.replace(/<\/?[^>]+(>|$)/g, "") 
    : "Untitled Post";
    
  const excerptClean = post.excerpt?.rendered 
    ? post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 180) + "..."
    : "";
  ```

---

## 5. Visual Testing Sequence

If you are inspecting or testing the client-side rendering behavior in real-time, navigate to the landing screen (`/app/page.tsx`) and verify:

1. **Hover Pause:** When hovering the mouse over the hero feature card, the auto-rotating sequence must freeze completely (`isAutoplayPaused === true`).
2. **Carousel Arrows:** Clicking the left (`ChevronLeft`) or right (`ChevronRight`) action buttons must override the current slide index immediately.
3. **Slide Modal:** Clicking on any slide summary element must launch the deep-dive reader overlay modal containing the full text from `activePost.content` correctly.
