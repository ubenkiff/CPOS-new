/**
 * Headless WordPress Wrapper Client
 * 
 * Provides types, mock fallbacks, and live fetching patterns for WordPress REST API.
 * Keeps WordPress API credentials and paths decoupled from the client.
 */

export interface WPPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  date: string;
  image: string;
  category: string;
  author: string;
}

export interface WordPressConnectionStatus {
  connected: boolean;
  apiUrl: string;
  source: 'live' | 'fallback_static';
  error?: string;
  postCount?: number;
  layoutConfig?: {
    heroIndex: number;
    gridStart: number;
    gridCount: number;
  };
}

// Default high-fidelity fallback blogs when WordPress is not yet connected
export const FALLBACK_POSTS: WPPost[] = [
  {
    id: 991,
    title: "Managing Projects with Precision & Clarity",
    excerpt: "The ultimate Project Operating System built for AEC professionals. Run your project schedules, budgets, and remote teams on one unified platform.",
    content: "The building blocks of successful AEC operations rely on robust systems. Modern construction operating systems bring everyone together: project managers, consultants, field workers, and subcontractors. By centering around SOW, Cost Control, and live reporting, projects can run with unprecedented precision.",
    slug: "managing-projects-precision-clarity",
    date: new Date().toISOString(),
    image: "https://images.unsplash.com/photo-1541919329513-35f7af297129?auto=format&fit=crop&q=80&w=1080",
    category: "Featured Hero",
    author: "CPOS Editorial"
  },
  {
    id: 992,
    title: "automate your SITE EXPENDITURES in seconds",
    excerpt: "Integrated BOQ and budget tracking ensures you never overrun your project costs again.",
    content: "Real-time cost control bridges the gap between site reality and back-office accounts. By using digital Bill of Quantities (BOQ) sheets linked directly to purchase orders and progress payments, CPOS provides real-time field expense tracking to stop budget leaks in their tracks.",
    slug: "automate-site-expenditures",
    date: new Date().toISOString(),
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    category: "Cost Control",
    author: "James Mwangi"
  },
  {
    id: 993,
    title: "generate professional CLIENT REPORTS on site",
    excerpt: "AI-powered reporting takes your site data and crafts expert project narratives perfectly.",
    content: "Writing reports manually consumes hours of valuable supervisor and engineer time. CPOS digitizes daily logs on the spot. With one click, your field logs can be structured into polished progress updates, annotated with photo logs, and packaged as client-ready deliverables.",
    slug: "generate-professional-client-reports",
    date: new Date().toISOString(),
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
    category: "Smart Reporting",
    author: "Alice Kimani"
  }
];

/**
 * Helper to dynamically and robustly resolve correct endpoint URL for WordPress posts
 */
export function getWordPressPostsUrl(apiUrl: string): string {
  const cleanUrl = apiUrl.replace(/\/$/, '');
  
  if (cleanUrl.endsWith('/posts')) {
    return `${cleanUrl}?_embed=1&per_page=10`;
  }
  
  if (cleanUrl.includes('public-api.wordpress.com') || cleanUrl.includes('/wp/v2/sites/')) {
    return `${cleanUrl}/posts?_embed=1&per_page=10`;
  }
  
  if (cleanUrl.includes('/wp-json/')) {
    return `${cleanUrl}/wp/v2/posts?_embed=1&per_page=10`;
  }
  
  if (cleanUrl.endsWith('/wp-json')) {
    return `${cleanUrl}/wp/v2/posts?_embed=1&per_page=10`;
  }
  
  return `${cleanUrl}/wp-json/wp/v2/posts?_embed=1&per_page=10`;
}

/**
 * Fetches posts from the WordPress REST API endpoint if configured.
 * Safely falls back to local high-fidelity content to ensure the site never breaks.
 */
export async function fetchWordPressPosts(): Promise<{ posts: WPPost[]; status: WordPressConnectionStatus }> {
  const apiUrl = process.env.WORDPRESS_API_URL || '';

  const heroIndex = parseInt(process.env.WORDPRESS_HERO_INDEX || '0', 10);
  const gridStart = parseInt(process.env.WORDPRESS_GRID_START || '1', 10);
  const gridCount = parseInt(process.env.WORDPRESS_GRID_COUNT || '2', 10);
  const layoutConfig = { heroIndex, gridStart, gridCount };

  if (!apiUrl) {
    return {
      posts: FALLBACK_POSTS,
      status: {
        connected: false,
        apiUrl: 'Not Configured (Using CPOS Fallback Model)',
        source: 'fallback_static',
        postCount: FALLBACK_POSTS.length,
        layoutConfig
      }
    };
  }

  try {
    const finalUrl = getWordPressPostsUrl(apiUrl);
    
    // Standard WordPress REST API post retrieval with embedded media/terms
    const res = await fetch(finalUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60 } // Cache for 60 seconds
    });

    if (!res.ok) {
      throw new Error(`WordPress API returned status ${res.status}`);
    }

    const wpPosts = await res.json();

    if (!Array.isArray(wpPosts)) {
      throw new Error("Invalid WordPress API payload structure");
    }

    const mappedPosts: WPPost[] = wpPosts.map((post: any) => {
      // Safely extract featured media URL from _embedded
      let imageUrl = "https://images.unsplash.com/photo-1541919329513-35f7af297129?auto=format&fit=crop&q=80&w=1080";
      if (post._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
        imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
      }

      // Safely extract primary category term
      let category = "General";
      if (post._embedded?.['wp:term']?.[0]?.[0]?.name) {
        category = post._embedded['wp:term'][0][0].name;
      }

      // Safely extract author name
      let author = "CPOS Contributor";
      if (post._embedded?.['author']?.[0]?.name) {
        author = post._embedded['author'][0].name;
      }

      // Format clean rendering strings
      const titleClean = post.title?.rendered 
        ? post.title.rendered.replace(/<\/?[^>]+(>|$)/g, "") 
        : "Untitled Post";
        
      const excerptClean = post.excerpt?.rendered 
        ? post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 180) + "..."
        : "";

      return {
        id: post.id,
        title: titleClean,
        excerpt: excerptClean,
        content: post.content?.rendered || "",
        slug: post.slug || `post-${post.id}`,
        date: post.date || new Date().toISOString(),
        image: imageUrl,
        category: category,
        author: author
      };
    });

    return {
      posts: mappedPosts.length > 0 ? mappedPosts : FALLBACK_POSTS,
      status: {
        connected: true,
        apiUrl,
        source: 'live',
        postCount: mappedPosts.length,
        layoutConfig
      }
    };

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
}

/**
 * Maps category names to vibrant, consistent Tailwind color configurations for visual hierarchy
 */
export function getCategoryBadgeStyles(category: string): string {
  const norm = (category || "").toLowerCase().trim();
  
  if (norm.includes("control") || norm.includes("budget") || norm.includes("finance") || norm.includes("expenditure") || norm.includes("cost")) {
    return "bg-rose-50 text-rose-600 border border-rose-100/70";
  }
  if (norm.includes("report") || norm.includes("smart") || norm.includes("data") || norm.includes("analytic") || norm.includes("insight")) {
    return "bg-sky-50 text-sky-600 border border-sky-100/70";
  }
  if (norm.includes("hero") || norm.includes("featured") || norm.includes("spotlight")) {
    return "bg-amber-50 text-amber-700 border border-amber-100/70";
  }
  if (norm.includes("guide") || norm.includes("tutorial") || norm.includes("tech") || norm.includes("ops")) {
    return "bg-emerald-50 text-emerald-600 border border-emerald-100/70";
  }
  if (norm.includes("news") || norm.includes("update") || norm.includes("company")) {
    return "bg-indigo-50 text-indigo-600 border border-indigo-100/70";
  }
  
  // High-fidelity standard default
  return "bg-orange-50 text-orange-600 border border-orange-100/70";
}

