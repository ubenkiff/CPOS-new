module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/wordpress.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Headless WordPress Wrapper Client
 * 
 * Provides types, mock fallbacks, and live fetching patterns for WordPress REST API.
 * Keeps WordPress API credentials and paths decoupled from the client.
 */ __turbopack_context__.s([
    "FALLBACK_POSTS",
    ()=>FALLBACK_POSTS,
    "fetchWPPostBySlug",
    ()=>fetchWPPostBySlug,
    "fetchWordPressPosts",
    ()=>fetchWordPressPosts,
    "getCategoryBadgeStyles",
    ()=>getCategoryBadgeStyles,
    "getWordPressPostsUrl",
    ()=>getWordPressPostsUrl
]);
const FALLBACK_POSTS = [
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
function getWordPressPostsUrl(apiUrl) {
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
async function fetchWordPressPosts() {
    const apiUrl = process.env.WORDPRESS_API_URL || '';
    const heroIndex = parseInt(process.env.WORDPRESS_HERO_INDEX || '0', 10);
    const gridStart = parseInt(process.env.WORDPRESS_GRID_START || '1', 10);
    const gridCount = parseInt(process.env.WORDPRESS_GRID_COUNT || '2', 10);
    const layoutConfig = {
        heroIndex,
        gridStart,
        gridCount
    };
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
                'Content-Type': 'application/json'
            },
            next: {
                revalidate: 60
            } // Cache for 60 seconds
        });
        if (!res.ok) {
            throw new Error(`WordPress API returned status ${res.status}`);
        }
        const wpPosts = await res.json();
        if (!Array.isArray(wpPosts)) {
            throw new Error("Invalid WordPress API payload structure");
        }
        const mappedPosts = wpPosts.map((post)=>{
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
            const titleClean = post.title?.rendered ? post.title.rendered.replace(/<\/?[^>]+(>|$)/g, "") : "Untitled Post";
            const excerptClean = post.excerpt?.rendered ? post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 180) + "..." : "";
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
    } catch (error) {
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
function getCategoryBadgeStyles(category) {
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
async function fetchWPPostBySlug(slug) {
    const { posts } = await fetchWordPressPosts();
    return posts.find((post)=>post.slug === slug) || null;
}
}),
"[project]/app/api/wordpress/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$wordpress$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/wordpress.ts [app-route] (ecmascript)");
;
;
async function GET() {
    try {
        const wordpressData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$wordpress$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchWordPressPosts"])();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(wordpressData, {
            headers: {
                'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30'
            }
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: true,
            message: error.message || 'Unknown server error fetching headless WordPress'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__69837533._.js.map