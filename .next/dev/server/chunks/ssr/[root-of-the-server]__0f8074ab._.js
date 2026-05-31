module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

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
"[project]/lib/access.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PUBLIC_VIEWONLY_PROJECT_ID",
    ()=>PUBLIC_VIEWONLY_PROJECT_ID,
    "canAccessProject",
    ()=>canAccessProject
]);
const PUBLIC_VIEWONLY_PROJECT_ID = 'e03418fd-0ef2-4080-90c6-f18009bb12d1';
function isAdminEmail(email) {
    const envAdmin = ("TURBOPACK compile-time value", "uddi.cpos@gmail.com")?.trim().toLowerCase();
    if (!envAdmin || !email) return false;
    return email.trim().toLowerCase() === envAdmin;
}
function isProPlan(plan) {
    return plan === 'pro' || plan === 'enterprise';
}
function canAccessProject(args) {
    const { user, projectid, projectOwnerId } = args;
    const plan = (user?.user_metadata?.plan ?? 'free').toLowerCase();
    const isPro = isProPlan(plan);
    const isAdmin = plan === 'admin' || isAdminEmail(user?.email);
    const isOwnProject = !!projectOwnerId && user?.id === projectOwnerId;
    const isDemoProject = projectid === PUBLIC_VIEWONLY_PROJECT_ID;
    return isAdmin || isPro || isOwnProject || isDemoProject;
}
}),
"[project]/lib/theme.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
// Memory cache to sync state across different mounted hooks without context boilerplate
let globalTheme = 'black';
const listeners = new Set();
// Load initial theme on client startup as soon as modules resolve
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function useTheme() {
    const [theme, setThemeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(globalTheme);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Synchronize to memory state
        setThemeState(globalTheme);
        const handleChange = (newTheme)=>{
            setThemeState(newTheme);
        };
        listeners.add(handleChange);
        return ()=>{
            listeners.delete(handleChange);
        };
    }, []);
    const changeTheme = (newTheme)=>{
        globalTheme = newTheme;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // Alert other mounted component hooks using useTheme to sync state instantly
        listeners.forEach((listener)=>{
            try {
                listener(newTheme);
            } catch (e) {}
        });
    };
    return {
        theme,
        isDark: theme === 'black',
        isLight: theme === 'white',
        setTheme: changeTheme,
        toggleTheme: ()=>changeTheme(theme === 'black' ? 'white' : 'black')
    };
}
}),
"[project]/components/ThemeSelector.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/theme.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.mjs [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.mjs [app-ssr] (ecmascript) <export default as Moon>");
'use client';
;
;
;
function ThemeSelector({ theme: propTheme, setTheme: propSetTheme, compact = false }) {
    const themeContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const theme = propTheme || themeContext.theme;
    const setTheme = propSetTheme || themeContext.setTheme;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `inline-flex items-center gap-1 p-1 rounded-xl transition-all duration-300 ${theme === 'black' ? 'bg-[#161b22] border border-[#30363d] text-slate-400' : 'bg-slate-100 border border-slate-200 text-slate-600'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setTheme('white'),
                type: "button",
                title: "Switch to beautiful white theme",
                className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-300 ${theme === 'white' ? 'bg-white text-slate-900 shadow-md shadow-slate-200Scale' : 'hover:text-slate-900 opacity-80 hover:opacity-100'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                        className: `w-3.5 h-3.5 ${theme === 'white' ? 'text-orange-500 fill-orange-500' : ''}`
                    }, void 0, false, {
                        fileName: "[project]/components/ThemeSelector.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    !compact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "White Theme"
                    }, void 0, false, {
                        fileName: "[project]/components/ThemeSelector.tsx",
                        lineNumber: 34,
                        columnNumber: 22
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ThemeSelector.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setTheme('black'),
                type: "button",
                title: "Switch to precision black theme",
                className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-300 ${theme === 'black' ? 'bg-slate-900 text-[#f59e0b] border border-orange-500/20 shadow-lg shadow-orange-500/10' : 'hover:text-slate-900 opacity-80 hover:opacity-100'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                        className: `w-3.5 h-3.5 ${theme === 'black' ? 'text-orange-500 fill-orange-500' : ''}`
                    }, void 0, false, {
                        fileName: "[project]/components/ThemeSelector.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    !compact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-1",
                        children: "Black Grid"
                    }, void 0, false, {
                        fileName: "[project]/components/ThemeSelector.tsx",
                        lineNumber: 49,
                        columnNumber: 22
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ThemeSelector.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ThemeSelector.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/dashboard/[projectid]/reports/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReportsModule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/supabase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$access$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/access.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/theme.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ThemeSelector.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const REPORT_META = {
    pm: {
        label: 'PM Report',
        audience: 'Project Manager',
        color: '#7F77DD',
        desc: 'Full project overview: schedule, budget, risks, progress'
    },
    client: {
        label: 'Client Report',
        audience: 'Client / Owner',
        color: '#60a5fa',
        desc: 'High-level: completion %, spend, key milestones, delays'
    },
    engineer: {
        label: 'Engineer Report',
        audience: 'Site Engineer',
        color: '#4ade80',
        desc: 'Tasks, critical path, schedule variance, upcoming activities'
    },
    qs: {
        label: 'QS Report',
        audience: 'Quantity Surveyor',
        color: '#f59e0b',
        desc: 'BOQ, cost breakdown, budget vs actual, earned value'
    },
    site: {
        label: 'Site Report',
        audience: 'Site Manager',
        color: '#f87171',
        desc: 'Daily tasks, resources, in-progress items, status updates'
    },
    weekly: {
        label: 'Weekly Progress',
        audience: 'All Stakeholders',
        color: '#34d399',
        desc: 'Weekly summary: progress by section, schedule status, cost this week'
    },
    monthly: {
        label: 'Monthly Report',
        audience: 'Senior Management',
        color: '#a78bfa',
        desc: 'Monthly KPIs: cost burn, BOQ vs actual, milestones, forecast'
    },
    cost: {
        label: 'Cost Report',
        audience: 'Finance / QS',
        color: '#fbbf24',
        desc: 'Detailed cost entries, category breakdown, budget variance'
    },
    schedule: {
        label: 'Schedule Report',
        audience: 'Project Controls',
        color: '#38bdf8',
        desc: 'Baseline vs planned vs actual for all work items'
    },
    risk: {
        label: 'Risk Report',
        audience: 'Project Manager',
        color: '#fb923c',
        desc: 'All high/critical risk items with status and assignment'
    },
    resource: {
        label: 'Resource Report',
        audience: 'Site Manager',
        color: '#e879f9',
        desc: 'Manpower, plant and equipment allocation by work item'
    }
};
function fmt(n, currency) {
    if (n >= 1000000) return `${currency} ${(n / 1000000).toFixed(2)}M`;
    if (n >= 1000) return `${currency} ${(n / 1000).toFixed(1)}K`;
    return `${currency} ${n.toLocaleString(undefined, {
        maximumFractionDigits: 0
    })}`;
}
function daysBetween(a, b) {
    return Math.round((new Date(b).getTime() - new Date(a).getTime()) / 86400000);
}
function ReportsModule() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { theme, setTheme, isDark } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const projectid = params?.projectid;
    const printRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isPublicViewOnly = projectid === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$access$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PUBLIC_VIEWONLY_PROJECT_ID"];
    const [project, setProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sowItems, setSowItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [costs, setCosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [activeReport, setActiveReport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('pm');
    const [reportDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Date().toLocaleDateString('en-ZA', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    }));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!projectid) return;
        if (isPublicViewOnly) {
            fetchAll();
            return;
        }
        checkSessionAndLoad();
    }, [
        projectid
    ]);
    async function checkSessionAndLoad() {
        const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
        if (!user) {
            router.push(`/login?next=${encodeURIComponent(`/dashboard/${projectid}/reports`)}`);
            return;
        }
        const { data: ownerRow, error: ownerErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('projects').select('user_id').eq('projectid', projectid).maybeSingle();
        if (ownerErr) {
            router.push('/pricing');
            return;
        }
        const canAccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$access$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["canAccessProject"])({
            user,
            projectid,
            projectOwnerId: ownerRow?.user_id
        });
        if (!canAccess) {
            router.push('/pricing');
            return;
        }
        fetchAll();
    }
    async function fetchAll() {
        setLoading(true);
        const [pRes, sowRes, costRes] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('projects').select('*').eq('projectid', projectid).single(),
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('sow_items').select('*').eq('projectid', projectid).order('sow_number'),
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('cost_entries').select('*').eq('projectid', projectid).order('cost_date', {
                ascending: false
            })
        ]);
        if (pRes.data) setProject(pRes.data);
        if (sowRes.data) setSowItems(sowRes.data);
        if (costRes.data) setCosts(costRes.data);
        setLoading(false);
    }
    function handlePrint() {
        window.print();
    }
    if (loading || !project) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: '#0a0c0e',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'monospace',
            color: '#484f58'
        },
        children: loading ? 'Loading reports...' : 'Project not found'
    }, void 0, false, {
        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, this);
    // ”€”€ COMPUTED DATA ”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€
    const l3 = sowItems.filter((r)=>r.hierarchy_level === 3);
    const l1 = sowItems.filter((r)=>r.hierarchy_level === 1);
    const totalTasks = l3.length;
    const complete = l3.filter((r)=>r.status === 'Complete').length;
    const inProgress = l3.filter((r)=>r.status === 'In Progress').length;
    const delayed = l3.filter((r)=>r.status === 'Delayed').length;
    const notStarted = l3.filter((r)=>r.status === 'Not Started' || !r.status).length;
    const critical = l3.filter((r)=>r.is_critical_path).length;
    const overallPct = totalTasks > 0 ? Math.round(complete / totalTasks * 100) : 0;
    const totalBoq = l3.reduce((s, r)=>s + (r.boq_amount || r.estimated_cost || (r.quantity && r.unit_rate ? r.quantity * (1 + (r.waste_pct || 0) / 100) * r.unit_rate : 0)), 0);
    const totalSpent = costs.reduce((s, c)=>s + Number(c.amount), 0);
    const remaining = project.budget - totalSpent;
    const spentPct = project.budget > 0 ? Math.round(totalSpent / project.budget * 100) : 0;
    const isOver = totalSpent > project.budget;
    const today = new Date().toISOString().split('T')[0];
    const projectDays = daysBetween(project.start_date, project.end_date);
    const elapsed = daysBetween(project.start_date, today);
    const timeElapsedPct = project.start_date ? Math.min(100, Math.round(elapsed / projectDays * 100)) : 0;
    const isDelayed = today > project.end_date;
    const daysLate = isDelayed ? daysBetween(project.end_date, today) : 0;
    const highRisk = l3.filter((r)=>r.risk_level === 'High' || r.risk_level === 'Critical');
    const CATEGORIES = [
        'Labour',
        'Materials',
        'Plant',
        'Subcontractor',
        'Overhead',
        'Other'
    ];
    const byCategory = CATEGORIES.map((cat)=>({
            cat,
            total: costs.filter((c)=>c.category === cat).reduce((s, c)=>s + Number(c.amount), 0)
        })).filter((c)=>c.total > 0);
    const earnedValue = totalBoq > 0 ? overallPct / 100 * totalBoq : 0;
    const cpi = totalSpent > 0 ? earnedValue / totalSpent : 1;
    const upcoming = l3.filter((r)=>r.planned_start && r.planned_start >= today && r.status !== 'Complete').slice(0, 8);
    const inProgressItems = l3.filter((r)=>r.status === 'In Progress');
    const meta = REPORT_META[activeReport];
    const accentColor = meta.color;
    // ”€”€ SHARED STYLES ”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€
    const hBg = isDark ? '#0d1117' : '#ffffff';
    const panelBg = isDark ? '#0a0c0e' : '#f8fafc';
    const borderCol = isDark ? '#21262d' : '#cbd5e1';
    const gridCol = isDark ? '#161b22' : '#f1f5f9';
    const textNormal = isDark ? '#c9d1d9' : '#334155';
    const textMuted = isDark ? '#484f58' : '#64748b';
    const textHeader = isDark ? '#e6edf3' : '#0f172a';
    const S = {
        section: {
            marginBottom: 24
        },
        sectionTitle: {
            fontSize: 11,
            fontWeight: 700,
            color: accentColor,
            letterSpacing: '0.08em',
            marginBottom: 12,
            paddingBottom: 6,
            borderBottom: `1px solid ${accentColor}44`
        },
        card: {
            background: hBg,
            border: '1px solid ' + borderCol,
            borderRadius: 8,
            padding: 16
        },
        grid2: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 12,
            marginBottom: 16
        },
        grid3: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 12,
            marginBottom: 16
        },
        grid4: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gap: 12,
            marginBottom: 16
        },
        kpiCard: (color)=>({
                background: hBg,
                border: '1px solid ' + borderCol,
                borderRadius: 8,
                padding: '14px 16px'
            }),
        kpiLabel: {
            fontSize: 9,
            color: textMuted,
            letterSpacing: '0.08em',
            marginBottom: 6
        },
        kpiValue: (color)=>({
                fontSize: 22,
                fontWeight: 700,
                color,
                fontFamily: 'monospace'
            }),
        kpiSub: {
            fontSize: 10,
            color: isDark ? '#6e7681' : '#475569',
            marginTop: 4
        },
        row: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '6px 0',
            borderBottom: '1px solid ' + gridCol,
            fontSize: 11
        },
        rowLabel: {
            color: textMuted
        },
        rowVal: {
            color: textNormal,
            fontFamily: 'monospace'
        },
        bar: (pct, color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: 6,
                    background: isDark ? '#21262d' : '#e2e8f0',
                    borderRadius: 3,
                    marginTop: 6
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        height: 6,
                        width: `${Math.min(100, pct)}%`,
                        background: color,
                        borderRadius: 3
                    }
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 198,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this),
        badge: (color, text)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 10,
                    padding: '2px 7px',
                    borderRadius: 4,
                    background: color + '22',
                    color,
                    border: `1px solid ${color}44`
                },
                children: text
            }, void 0, false, {
                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this),
        table: {
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: 11
        },
        th: {
            padding: '6px 8px',
            textAlign: 'left',
            fontSize: 9,
            color: textMuted,
            letterSpacing: '0.06em',
            borderBottom: '1px solid ' + borderCol
        },
        td: {
            padding: '6px 8px',
            borderBottom: '1px solid ' + gridCol,
            color: textNormal
        }
    };
    // ”€”€ REPORT HEADER ”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€
    function ReportHeader() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                marginBottom: 24,
                paddingBottom: 0,
                borderBottom: 'none'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: '#0d1117',
                        border: '1px solid #f59e0b33',
                        borderRadius: 8,
                        padding: '14px 20px',
                        marginBottom: 16,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: 16
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 8
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: 36,
                                                height: 36,
                                                background: '#f59e0b',
                                                borderRadius: 8,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontWeight: 900,
                                                fontSize: 18,
                                                color: '#0a0c0e',
                                                fontFamily: 'sans-serif'
                                            },
                                            children: "C"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                            lineNumber: 216,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontFamily: 'sans-serif',
                                                        fontWeight: 900,
                                                        fontSize: 16,
                                                        color: '#f59e0b',
                                                        letterSpacing: '0.05em'
                                                    },
                                                    children: "CPOS"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 8,
                                                        color: '#484f58',
                                                        letterSpacing: '0.12em'
                                                    },
                                                    children: "CONSTRUCTION PROJECT OS"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                            lineNumber: 217,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 215,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 1,
                                        height: 36,
                                        background: '#21262d'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 222,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 9,
                                                color: accentColor,
                                                letterSpacing: '0.12em',
                                                fontWeight: 700,
                                                marginBottom: 2
                                            },
                                            children: meta.label.toUpperCase()
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                            lineNumber: 224,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 20,
                                                fontWeight: 800,
                                                color: '#e6edf3',
                                                fontFamily: 'sans-serif',
                                                lineHeight: 1.1
                                            },
                                            children: project.project_name
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                            lineNumber: 225,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 10,
                                                color: '#484f58',
                                                marginTop: 2
                                            },
                                            children: [
                                                project.project_code,
                                                "  ",
                                                project.location
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                            lineNumber: 226,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 223,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 214,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: 'right',
                                borderLeft: '1px solid #21262d',
                                paddingLeft: 16
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 9,
                                        color: '#484f58',
                                        letterSpacing: '0.08em'
                                    },
                                    children: "PREPARED FOR"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 230,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 13,
                                        color: '#c9d1d9',
                                        fontWeight: 700,
                                        marginBottom: 4
                                    },
                                    children: meta.audience
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 231,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 10,
                                        color: '#484f58'
                                    },
                                    children: [
                                        "Report date: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: '#c9d1d9'
                                            },
                                            children: reportDate
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                            lineNumber: 232,
                                            columnNumber: 74
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 232,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 10,
                                        color: '#484f58'
                                    },
                                    children: [
                                        "Client: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: '#c9d1d9'
                                            },
                                            children: project.client_name
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                            lineNumber: 233,
                                            columnNumber: 69
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 233,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 10,
                                        color: '#484f58'
                                    },
                                    children: [
                                        "Status: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: accentColor
                                            },
                                            children: project.status
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                            lineNumber: 234,
                                            columnNumber: 69
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 234,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 213,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        height: 2,
                        background: 'linear-gradient(90deg, #f59e0b, ' + accentColor + ', transparent)',
                        borderRadius: 1,
                        marginBottom: 20
                    }
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 237,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
            lineNumber: 212,
            columnNumber: 7
        }, this);
    }
    function PMReport() {
        const highRiskItems = l3.filter((i)=>i.risk_level === 'High' || i.risk_level === 'Critical' || i.risk_level === 'Very High');
        const criticalPathItems = l3.filter((i)=>i.is_critical_path === true);
        const upcomingPM = l3.filter((i)=>i.planned_start && new Date(i.planned_start) <= new Date(Date.now() + 14 * 86400000) && new Date(i.planned_start) >= new Date() && i.status !== 'Complete');
        const localEstCost = l3.reduce((s, i)=>s + (i.estimated_cost || 0), 0);
        const spentPctPM = localEstCost > 0 ? totalSpent / localEstCost * 100 : 0;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReportHeader, {}, void 0, false, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 253,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: S.grid4,
                    children: [
                        {
                            label: 'OVERALL COMPLETION',
                            val: `${overallPct.toFixed(0)}%`,
                            sub: `${complete} of ${l3.length} tasks done`,
                            color: overallPct >= 100 ? '#4ade80' : accentColor
                        },
                        {
                            label: 'BUDGET USED',
                            val: `${spentPctPM.toFixed(0)}%`,
                            sub: `${fmt(totalSpent, project.currency)} of ${fmt(localEstCost, project.currency)}`,
                            color: isOver ? '#f87171' : '#4ade80'
                        },
                        {
                            label: 'SCHEDULE STATUS',
                            val: isDelayed ? 'DELAYED' : 'ON TRACK',
                            sub: isDelayed ? `${daysLate} days behind` : `${timeElapsedPct.toFixed(0)}% elapsed`,
                            color: isDelayed ? '#f87171' : '#4ade80'
                        },
                        {
                            label: 'HIGH/CRITICAL RISKS',
                            val: String(highRiskItems.length),
                            sub: 'Require immediate action',
                            color: highRiskItems.length > 0 ? '#f87171' : '#4ade80'
                        }
                    ].map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.kpiCard(k.color),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: S.kpiLabel,
                                    children: k.label
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 262,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: S.kpiValue(k.color),
                                    children: k.val
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 263,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: S.kpiSub,
                                    children: k.sub
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 264,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, k.label, true, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 261,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 254,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: S.section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.sectionTitle,
                            children: "PROGRESS BY SECTION (L1)"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 269,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.card,
                            children: l1.map((section)=>{
                                const items = l3.filter((i)=>i.scope_l1 === section.scope_l1);
                                const pct = items.length ? items.reduce((s, i)=>s + (i.percent_complete || 0), 0) / items.length : 0;
                                const done = items.filter((i)=>i.status === 'Complete').length;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: 12
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                fontSize: 11,
                                                marginBottom: 4
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: '#c9d1d9',
                                                        fontWeight: 600
                                                    },
                                                    children: section.scope_l1 || section.sow_number
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 278,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: 'monospace',
                                                        color: accentColor
                                                    },
                                                    children: [
                                                        pct.toFixed(0),
                                                        "% (",
                                                        done,
                                                        "/",
                                                        items.length,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 279,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                            lineNumber: 277,
                                            columnNumber: 19
                                        }, this),
                                        S.bar(pct, pct === 100 ? '#4ade80' : accentColor)
                                    ]
                                }, section.sow_number, true, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 276,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 270,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 268,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: S.grid2,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.card,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: S.sectionTitle,
                                    children: "BUDGET STATUS"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 289,
                                    columnNumber: 13
                                }, this),
                                [
                                    {
                                        label: 'Contract Value',
                                        val: fmt(project.budget, project.currency)
                                    },
                                    {
                                        label: 'Total Spent',
                                        val: fmt(totalSpent, project.currency)
                                    },
                                    {
                                        label: 'Remaining',
                                        val: fmt(project.budget - totalSpent, project.currency)
                                    },
                                    {
                                        label: 'BOQ Value',
                                        val: fmt(totalBoq, project.currency)
                                    }
                                ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: S.row,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: S.rowLabel,
                                                children: r.label
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                lineNumber: 295,
                                                columnNumber: 57
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: S.rowVal,
                                                children: r.val
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                lineNumber: 295,
                                                columnNumber: 98
                                            }, this)
                                        ]
                                    }, r.label, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 295,
                                        columnNumber: 24
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 288,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.card,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: S.sectionTitle,
                                    children: "RISK REGISTER (HIGH / CRITICAL)"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 298,
                                    columnNumber: 13
                                }, this),
                                highRiskItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 11,
                                        color: '#4ade80'
                                    },
                                    children: "No high or critical risks identified."
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 300,
                                    columnNumber: 17
                                }, this) : highRiskItems.slice(0, 6).map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: S.row,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    ...S.rowLabel,
                                                    maxWidth: 220,
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    whiteSpace: 'nowrap'
                                                },
                                                children: i.sub_item_l3 || i.particulars || i.sow_number
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                lineNumber: 303,
                                                columnNumber: 21
                                            }, this),
                                            S.badge(i.risk_level === 'Critical' ? '#c084fc' : '#f87171', i.risk_level || 'High')
                                        ]
                                    }, i.sow_number, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 302,
                                        columnNumber: 19
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 297,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 287,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: S.section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.sectionTitle,
                            children: "CRITICAL PATH ACTIVITIES"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 311,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.card,
                            children: criticalPathItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 11,
                                    color: '#484f58'
                                },
                                children: "No critical path items defined."
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                lineNumber: 314,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                style: S.table,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                'SOW #',
                                                'ACTIVITY',
                                                'BASELINE END',
                                                'PLANNED END',
                                                'STATUS',
                                                '%'
                                            ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: S.th,
                                                    children: h
                                                }, h, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 316,
                                                    columnNumber: 103
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                            lineNumber: 316,
                                            columnNumber: 26
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 316,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: criticalPathItems.map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontFamily: 'monospace',
                                                            color: '#f59e0b'
                                                        },
                                                        children: i.sow_number
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 320,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            maxWidth: 200,
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                            whiteSpace: 'nowrap'
                                                        },
                                                        children: i.sub_item_l3 || i.particulars || i.sow_number
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 321,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontFamily: 'monospace',
                                                            color: '#484f58'
                                                        },
                                                        children: i.baseline_end || '—'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 322,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontFamily: 'monospace',
                                                            color: i.planned_end !== i.baseline_end ? '#f59e0b' : '#c9d1d9'
                                                        },
                                                        children: i.planned_end || '—'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 323,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: S.td,
                                                        children: S.badge(i.status === 'Complete' ? '#4ade80' : i.status === 'Delayed' ? '#f87171' : '#f59e0b', i.status || 'Not Started')
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 324,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontFamily: 'monospace'
                                                        },
                                                        children: [
                                                            i.percent_complete || 0,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 325,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, i.sow_number, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                lineNumber: 319,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 317,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                lineNumber: 315,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 312,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 310,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: S.section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.sectionTitle,
                            children: "UPCOMING ACTIVITIES — NEXT 2 WEEKS"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 334,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.card,
                            children: upcomingPM.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 11,
                                    color: '#484f58'
                                },
                                children: "No activities planned in the next 2 weeks."
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                lineNumber: 337,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                style: S.table,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                'ACTIVITY',
                                                'PLANNED START',
                                                'ASSIGNED TO',
                                                'RISK'
                                            ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: S.th,
                                                    children: h
                                                }, h, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 90
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                            lineNumber: 339,
                                            columnNumber: 26
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 339,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: upcomingPM.map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            maxWidth: 220
                                                        },
                                                        children: i.sub_item_l3 || i.particulars || i.sow_number
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 343,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontFamily: 'monospace'
                                                        },
                                                        children: i.planned_start
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 344,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            color: '#484f58'
                                                        },
                                                        children: i.assigned_to || '—'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 345,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: S.td,
                                                        children: i.risk_level ? S.badge(i.risk_level === 'High' || i.risk_level === 'Critical' ? '#f87171' : '#f59e0b', i.risk_level) : '—'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 346,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, i.sow_number, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                lineNumber: 342,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 340,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                lineNumber: 338,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 335,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 333,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
            lineNumber: 252,
            columnNumber: 7
        }, this);
    }
    function ClientReport() {
        const completedItems = l3.filter((i)=>i.status === 'Complete');
        const totalDuration = daysBetween(project.start_date, project.end_date);
        const elapsedDays = daysBetween(project.start_date, today);
        const spentPctC = project.budget > 0 ? totalSpent / project.budget * 100 : 0;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReportHeader, {}, void 0, false, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 366,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: S.grid3,
                    children: [
                        {
                            label: 'OVERALL COMPLETION',
                            val: `${overallPct.toFixed(0)}%`,
                            sub: `${completedItems.length} of ${l3.length} deliverables`,
                            color: accentColor
                        },
                        {
                            label: 'CONTRACT VALUE',
                            val: fmt(project.budget, project.currency),
                            sub: 'Original contract sum',
                            color: accentColor
                        },
                        {
                            label: 'SCHEDULE STATUS',
                            val: isDelayed ? `${daysLate} Days Behind` : 'On Schedule',
                            sub: `Duration: ${totalDuration} days`,
                            color: isDelayed ? '#f87171' : '#4ade80'
                        }
                    ].map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.kpiCard(k.color),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: S.kpiLabel,
                                    children: k.label
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 374,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: S.kpiValue(k.color),
                                    children: k.val
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 375,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: S.kpiSub,
                                    children: k.sub
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 376,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, k.label, true, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 373,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 367,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: S.card,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.sectionTitle,
                            children: "FINANCIAL SUMMARY"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 381,
                            columnNumber: 11
                        }, this),
                        [
                            {
                                label: 'Contract Value',
                                val: fmt(project.budget, project.currency)
                            },
                            {
                                label: 'Expenditure to Date',
                                val: `${fmt(totalSpent, project.currency)} (${spentPctC.toFixed(0)}%)`
                            },
                            {
                                label: 'Balance Remaining',
                                val: fmt(project.budget - totalSpent, project.currency)
                            }
                        ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: S.row,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: S.rowLabel,
                                        children: r.label
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 388,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: S.rowVal,
                                        children: r.val
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 389,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, r.label, true, {
                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                lineNumber: 387,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: 10
                            },
                            children: S.bar(spentPctC, isOver ? '#f87171' : accentColor)
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 392,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: 10,
                                color: '#484f58',
                                textAlign: 'right',
                                marginTop: 4
                            },
                            children: "Budget Utilisation"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 393,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 380,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: S.section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.sectionTitle,
                            children: "SECTION COMPLETION STATUS"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 396,
                            columnNumber: 11
                        }, this),
                        l1.map((section)=>{
                            const items = l3.filter((i)=>i.scope_l1 === section.scope_l1);
                            const pct = items.length ? items.reduce((s, i)=>s + (i.percent_complete || 0), 0) / items.length : 0;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginBottom: 12
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            fontSize: 11,
                                            marginBottom: 4
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: '#c9d1d9',
                                                    fontWeight: 600
                                                },
                                                children: section.scope_l1 || section.sow_number
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                lineNumber: 403,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: 'monospace',
                                                    color: accentColor
                                                },
                                                children: [
                                                    pct.toFixed(0),
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                lineNumber: 404,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 402,
                                        columnNumber: 17
                                    }, this),
                                    S.bar(pct, pct === 100 ? '#4ade80' : accentColor)
                                ]
                            }, section.sow_number, true, {
                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                lineNumber: 401,
                                columnNumber: 15
                            }, this);
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 395,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: S.grid2,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.card,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: S.sectionTitle,
                                    children: "PROJECT TIMELINE"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 413,
                                    columnNumber: 13
                                }, this),
                                [
                                    {
                                        label: 'Start Date',
                                        val: project.start_date
                                    },
                                    {
                                        label: 'End Date',
                                        val: project.end_date
                                    },
                                    {
                                        label: 'Duration',
                                        val: `${totalDuration} days`
                                    },
                                    {
                                        label: 'Elapsed',
                                        val: `${elapsedDays} days (${timeElapsedPct.toFixed(0)}%)`
                                    }
                                ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: S.row,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: S.rowLabel,
                                                children: r.label
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                lineNumber: 421,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: S.rowVal,
                                                children: r.val
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                lineNumber: 422,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, r.label, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 420,
                                        columnNumber: 15
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: 10
                                    },
                                    children: S.bar(timeElapsedPct, accentColor)
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 425,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 412,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.card,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: S.sectionTitle,
                                    children: "KEY MILESTONES"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 428,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 11,
                                        color: '#4ade80',
                                        fontWeight: 600,
                                        marginBottom: 6
                                    },
                                    children: "Completed"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 429,
                                    columnNumber: 13
                                }, this),
                                completedItems.slice(0, 3).map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 11,
                                            color: '#484f58',
                                            marginBottom: 4
                                        },
                                        children: [
                                            "✓ ",
                                            i.sub_item_l3 || i.particulars || i.sow_number
                                        ]
                                    }, i.sow_number, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 431,
                                        columnNumber: 15
                                    }, this)),
                                completedItems.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 11,
                                        color: '#484f58'
                                    },
                                    children: "No completed items yet."
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 433,
                                    columnNumber: 45
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 11,
                                        color: '#f59e0b',
                                        fontWeight: 600,
                                        marginTop: 12,
                                        marginBottom: 6
                                    },
                                    children: "In Progress"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 434,
                                    columnNumber: 13
                                }, this),
                                l3.filter((i)=>i.status === 'In Progress' && (i.percent_complete || 0) < 50).slice(0, 3).map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 11,
                                            color: '#484f58',
                                            marginBottom: 4
                                        },
                                        children: [
                                            "→ ",
                                            i.sub_item_l3 || i.particulars || i.sow_number
                                        ]
                                    }, i.sow_number, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 436,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 427,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 411,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
            lineNumber: 365,
            columnNumber: 7
        }, this);
    }
    function EngineerReport() {
        const criticalItems = l3.filter((i)=>i.is_critical_path === true);
        const delayedItems = l3.filter((i)=>i.schedule_variance && i.schedule_variance < 0);
        const upcomingEng = l3.filter((i)=>i.planned_start && new Date(i.planned_start) >= new Date() && new Date(i.planned_start) <= new Date(Date.now() + 7 * 86400000));
        const inProgressItemsList = l3.filter((i)=>i.status === 'In Progress');
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReportHeader, {}, void 0, false, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 453,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: S.grid4,
                    children: [
                        {
                            label: 'TOTAL ACTIVITIES',
                            val: String(l3.length),
                            sub: 'All work packages',
                            color: accentColor
                        },
                        {
                            label: 'IN PROGRESS',
                            val: String(inProgress),
                            sub: `${inProgressItemsList.length} active tasks`,
                            color: '#f59e0b'
                        },
                        {
                            label: 'CRITICAL PATH',
                            val: String(criticalItems.length),
                            sub: 'Driving project end date',
                            color: '#f87171'
                        },
                        {
                            label: 'DELAYED',
                            val: String(delayedItems.length),
                            sub: isDelayed ? `${daysLate} days behind` : 'On schedule',
                            color: delayedItems.length > 0 ? '#f87171' : '#4ade80'
                        }
                    ].map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.kpiCard(k.color),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: S.kpiLabel,
                                    children: k.label
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 462,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: S.kpiValue(k.color),
                                    children: k.val
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 463,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: S.kpiSub,
                                    children: k.sub
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 464,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, k.label, true, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 461,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 454,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: S.section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.sectionTitle,
                            children: "CRITICAL PATH ACTIVITIES"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 469,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.card,
                            children: criticalItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 11,
                                    color: '#484f58'
                                },
                                children: "No critical path items defined."
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                lineNumber: 472,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                style: S.table,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                'SOW #',
                                                'ACTIVITY',
                                                'BL DAYS',
                                                'PL DAYS',
                                                'STATUS',
                                                '%'
                                            ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: S.th,
                                                    children: h
                                                }, h, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 474,
                                                    columnNumber: 94
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                            lineNumber: 474,
                                            columnNumber: 26
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 474,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: criticalItems.map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontFamily: 'monospace',
                                                            color: '#f59e0b'
                                                        },
                                                        children: i.sow_number
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 478,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            maxWidth: 200,
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                            whiteSpace: 'nowrap'
                                                        },
                                                        children: i.sub_item_l3 || i.particulars || i.sow_number
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 479,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontFamily: 'monospace'
                                                        },
                                                        children: i.baseline_days || '—'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 480,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontFamily: 'monospace',
                                                            color: (i.planned_days || 0) > (i.baseline_days || 0) ? '#f87171' : '#c9d1d9'
                                                        },
                                                        children: i.planned_days || '—'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 481,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: S.td,
                                                        children: S.badge(i.status === 'Complete' ? '#4ade80' : i.status === 'Delayed' ? '#f87171' : '#f59e0b', i.status || 'Not Started')
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 482,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontFamily: 'monospace'
                                                        },
                                                        children: [
                                                            i.percent_complete || 0,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 483,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, i.sow_number, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                lineNumber: 477,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 475,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                lineNumber: 473,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 470,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 468,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: S.section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.sectionTitle,
                            children: "UPCOMING ACTIVITIES — NEXT 7 DAYS"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 492,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.card,
                            children: upcomingEng.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 11,
                                    color: '#484f58'
                                },
                                children: "No activities planned in the next 7 days."
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                lineNumber: 495,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                style: S.table,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                'SOW #',
                                                'ACTIVITY',
                                                'PLANNED START',
                                                'PLANNED END',
                                                'CRITICAL PATH'
                                            ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: S.th,
                                                    children: h
                                                }, h, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 497,
                                                    columnNumber: 107
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                            lineNumber: 497,
                                            columnNumber: 26
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 497,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: upcomingEng.map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontFamily: 'monospace',
                                                            color: '#f59e0b'
                                                        },
                                                        children: i.sow_number
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 501,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            maxWidth: 200,
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                            whiteSpace: 'nowrap'
                                                        },
                                                        children: i.sub_item_l3 || i.particulars || i.sow_number
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 502,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontFamily: 'monospace'
                                                        },
                                                        children: i.planned_start
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 503,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontFamily: 'monospace'
                                                        },
                                                        children: i.planned_end || '—'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 504,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: S.td,
                                                        children: i.is_critical_path ? S.badge('#f87171', 'CP') : '—'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 505,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, i.sow_number, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                lineNumber: 500,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 498,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                lineNumber: 496,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 493,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 491,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: S.section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.sectionTitle,
                            children: "SCHEDULE VARIANCE — PLANNED vs BASELINE"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 514,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.card,
                            children: l3.filter((i)=>i.baseline_days && i.planned_days && i.baseline_days !== i.planned_days).length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 11,
                                    color: '#4ade80'
                                },
                                children: "No schedule variance detected."
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                lineNumber: 517,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                style: S.table,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                'SOW #',
                                                'ACTIVITY',
                                                'BL DAYS',
                                                'PL DAYS',
                                                'VARIANCE',
                                                'STATUS'
                                            ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: S.th,
                                                    children: h
                                                }, h, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 519,
                                                    columnNumber: 101
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                            lineNumber: 519,
                                            columnNumber: 26
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 519,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: l3.filter((i)=>i.baseline_days && i.planned_days && i.baseline_days !== i.planned_days).slice(0, 10).map((i)=>{
                                            const v = (i.planned_days || 0) - (i.baseline_days || 0);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontFamily: 'monospace',
                                                            color: '#f59e0b'
                                                        },
                                                        children: i.sow_number
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 525,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            maxWidth: 180,
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                            whiteSpace: 'nowrap'
                                                        },
                                                        children: i.sub_item_l3 || i.particulars || i.sow_number
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 526,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontFamily: 'monospace'
                                                        },
                                                        children: i.baseline_days
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 527,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontFamily: 'monospace'
                                                        },
                                                        children: i.planned_days
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 528,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontFamily: 'monospace',
                                                            fontWeight: 700,
                                                            color: v > 0 ? '#f87171' : '#4ade80'
                                                        },
                                                        children: v > 0 ? `+${v}d` : `${v}d`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 529,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: S.td,
                                                        children: S.badge(i.status === 'Complete' ? '#4ade80' : i.status === 'Delayed' ? '#f87171' : '#484f58', i.status || 'Not Started')
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 530,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, i.sow_number, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                lineNumber: 524,
                                                columnNumber: 25
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 520,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                lineNumber: 518,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 515,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 513,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: S.section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.sectionTitle,
                            children: "IN-PROGRESS ITEMS"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 540,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.card,
                            children: inProgressItemsList.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 11,
                                    color: '#484f58'
                                },
                                children: "No active work packages."
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                lineNumber: 543,
                                columnNumber: 17
                            }, this) : inProgressItemsList.map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: 12
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                fontSize: 11,
                                                marginBottom: 4
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: '#c9d1d9',
                                                        maxWidth: 300,
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis',
                                                        whiteSpace: 'nowrap'
                                                    },
                                                    children: i.sub_item_l3 || i.particulars || i.sow_number
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 547,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: 'monospace',
                                                        color: accentColor
                                                    },
                                                    children: [
                                                        i.percent_complete || 0,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 548,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                            lineNumber: 546,
                                            columnNumber: 21
                                        }, this),
                                        S.bar(i.percent_complete || 0, accentColor)
                                    ]
                                }, i.sow_number, true, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 545,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 541,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 539,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
            lineNumber: 452,
            columnNumber: 7
        }, this);
    }
    function QSReport() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReportHeader, {}, void 0, false, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 564,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: S.section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.sectionTitle,
                            children: "FINANCIAL SUMMARY"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 566,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.grid4,
                            children: [
                                {
                                    label: 'CONTRACT VALUE',
                                    val: fmt(project.budget, project.currency),
                                    color: '#f59e0b'
                                },
                                {
                                    label: 'BOQ VALUE',
                                    val: fmt(totalBoq, project.currency),
                                    color: '#c084fc'
                                },
                                {
                                    label: 'ACTUAL SPEND',
                                    val: fmt(totalSpent, project.currency),
                                    color: isOver ? '#f87171' : '#4ade80'
                                },
                                {
                                    label: 'EARNED VALUE',
                                    val: fmt(earnedValue, project.currency),
                                    color: '#60a5fa'
                                }
                            ].map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: S.kpiCard(k.color),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: S.kpiLabel,
                                            children: k.label
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                            lineNumber: 575,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: S.kpiValue(k.color),
                                            children: k.val
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                            lineNumber: 576,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, k.label, true, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 574,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 567,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 565,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: S.section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.sectionTitle,
                            children: "EARNED VALUE ANALYSIS"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 582,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.grid2,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: S.card,
                                    children: [
                                        {
                                            label: 'Budget at Completion (BAC)',
                                            val: fmt(project.budget, project.currency)
                                        },
                                        {
                                            label: 'Earned Value (EV)',
                                            val: fmt(earnedValue, project.currency)
                                        },
                                        {
                                            label: 'Actual Cost (AC)',
                                            val: fmt(totalSpent, project.currency)
                                        },
                                        {
                                            label: 'Cost Variance (CV)',
                                            val: fmt(earnedValue - totalSpent, project.currency)
                                        },
                                        {
                                            label: 'Cost Performance Index (CPI)',
                                            val: cpi.toFixed(2)
                                        }
                                    ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: S.row,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: S.rowLabel,
                                                    children: r.label
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 591,
                                                    columnNumber: 59
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        ...S.rowVal,
                                                        color: r.label.includes('CPI') ? cpi >= 1 ? '#4ade80' : '#f87171' : '#c9d1d9'
                                                    },
                                                    children: r.val
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 591,
                                                    columnNumber: 100
                                                }, this)
                                            ]
                                        }, r.label, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                            lineNumber: 591,
                                            columnNumber: 26
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 584,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: S.card,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: S.kpiLabel,
                                            children: "SPEND BY CATEGORY"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                            lineNumber: 594,
                                            columnNumber: 15
                                        }, this),
                                        byCategory.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 11,
                                                color: '#484f58'
                                            },
                                            children: "No cost entries yet."
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                            lineNumber: 595,
                                            columnNumber: 43
                                        }, this),
                                        byCategory.map(({ cat, total })=>{
                                            const pctOfTotal = totalSpent > 0 ? Math.round(total / totalSpent * 100) : 0;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginBottom: 8
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            fontSize: 11,
                                                            marginBottom: 3
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: '#c9d1d9'
                                                                },
                                                                children: cat
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                                lineNumber: 601,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontFamily: 'monospace',
                                                                    color: '#f59e0b'
                                                                },
                                                                children: [
                                                                    fmt(total, project.currency),
                                                                    " (",
                                                                    pctOfTotal,
                                                                    "%)"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                                lineNumber: 602,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 600,
                                                        columnNumber: 21
                                                    }, this),
                                                    S.bar(pctOfTotal, accentColor)
                                                ]
                                            }, cat, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                lineNumber: 599,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 593,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 583,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 581,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: S.section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.sectionTitle,
                            children: "BOQ SUMMARY BY SECTION"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 613,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.card,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                style: S.table,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: S.th,
                                                    children: "SECTION"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 617,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: S.th,
                                                    children: "ITEMS"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 617,
                                                    columnNumber: 46
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: S.th,
                                                    children: "BOQ VALUE"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 617,
                                                    columnNumber: 73
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: S.th,
                                                    children: "ACTUAL"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 617,
                                                    columnNumber: 104
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: S.th,
                                                    children: "VARIANCE"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 617,
                                                    columnNumber: 132
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: S.th,
                                                    children: "% OF TOTAL"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 617,
                                                    columnNumber: 162
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                            lineNumber: 616,
                                            columnNumber: 22
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 616,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: l1.map((sec)=>{
                                            const secItems = l3.filter((t)=>t.sow_number.startsWith(sec.sow_number + '.'));
                                            const secBoq = secItems.reduce((s, r)=>s + (r.estimated_cost || 0), 0);
                                            const secAct = secItems.reduce((s, r)=>s + (r.actual_cost || 0), 0);
                                            const secVar = secAct - secBoq;
                                            const secPct = totalBoq > 0 ? (secBoq / totalBoq * 100).toFixed(1) : '0';
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontWeight: 600,
                                                            color: '#e6edf3'
                                                        },
                                                        children: sec.scope_l1 || sec.sow_number
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 628,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontFamily: 'monospace'
                                                        },
                                                        children: secItems.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 629,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontFamily: 'monospace',
                                                            color: '#f59e0b'
                                                        },
                                                        children: secBoq > 0 ? fmt(secBoq, project.currency) : '€”'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 630,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontFamily: 'monospace',
                                                            color: '#4ade80'
                                                        },
                                                        children: secAct > 0 ? fmt(secAct, project.currency) : '€”'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 631,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontFamily: 'monospace',
                                                            color: secVar > 0 ? '#f87171' : '#4ade80'
                                                        },
                                                        children: secAct > 0 ? (secVar > 0 ? '+' : '') + fmt(secVar, project.currency) : '€”'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 632,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontFamily: 'monospace'
                                                        },
                                                        children: [
                                                            secPct,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 633,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, sec.sow_id, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                lineNumber: 627,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 619,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            style: {
                                                borderTop: '2px solid #30363d'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        ...S.td,
                                                        fontWeight: 700,
                                                        color: '#e6edf3'
                                                    },
                                                    children: "TOTAL"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 640,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        ...S.td,
                                                        fontFamily: 'monospace',
                                                        fontWeight: 700
                                                    },
                                                    children: l3.length
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 641,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        ...S.td,
                                                        fontFamily: 'monospace',
                                                        fontWeight: 700,
                                                        color: '#f59e0b'
                                                    },
                                                    children: fmt(totalBoq, project.currency)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 642,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        ...S.td,
                                                        fontFamily: 'monospace',
                                                        fontWeight: 700,
                                                        color: '#4ade80'
                                                    },
                                                    children: totalSpent > 0 ? fmt(totalSpent, project.currency) : '€”'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 643,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        ...S.td,
                                                        fontFamily: 'monospace',
                                                        fontWeight: 700,
                                                        color: totalSpent - totalBoq > 0 ? '#f87171' : '#4ade80'
                                                    },
                                                    children: totalSpent > 0 ? (totalSpent > totalBoq ? '+' : '') + fmt(totalSpent - totalBoq, project.currency) : '€”'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 644,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        ...S.td,
                                                        fontFamily: 'monospace',
                                                        fontWeight: 700
                                                    },
                                                    children: "100%"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 645,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                            lineNumber: 639,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 638,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                lineNumber: 615,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 614,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 612,
                    columnNumber: 9
                }, this),
                costs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: S.section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.sectionTitle,
                            children: "RECENT COST ENTRIES"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 654,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.card,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                style: S.table,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: S.th,
                                                    children: "DATE"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 658,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: S.th,
                                                    children: "DESCRIPTION"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 658,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: S.th,
                                                    children: "CATEGORY"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 658,
                                                    columnNumber: 78
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: S.th,
                                                    children: "SUPPLIER"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 658,
                                                    columnNumber: 108
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: S.th,
                                                    children: "AMOUNT"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 658,
                                                    columnNumber: 138
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: S.th,
                                                    children: "STATUS"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 658,
                                                    columnNumber: 166
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                            lineNumber: 657,
                                            columnNumber: 24
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 657,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: costs.slice(0, 15).map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontFamily: 'monospace',
                                                            color: '#484f58'
                                                        },
                                                        children: c.cost_date
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 663,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: S.td,
                                                        children: c.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 664,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: S.td,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: 10,
                                                                color: '#f59e0b'
                                                            },
                                                            children: c.category
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                            lineNumber: 665,
                                                            columnNumber: 40
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 665,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            color: '#484f58'
                                                        },
                                                        children: c.supplier || '€”'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 666,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontFamily: 'monospace',
                                                            color: '#f59e0b'
                                                        },
                                                        children: fmt(Number(c.amount), project.currency)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 667,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: S.td,
                                                        children: S.badge(c.is_approved ? '#4ade80' : '#484f58', c.is_approved ? 'Approved' : 'Pending')
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 668,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, c.cost_id, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                lineNumber: 662,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 660,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                lineNumber: 656,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 655,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 653,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
            lineNumber: 563,
            columnNumber: 7
        }, this);
    }
    // ”€”€ SITE REPORT ”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€
    function SiteReport() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReportHeader, {}, void 0, false, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 684,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: S.section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.sectionTitle,
                            children: [
                                "SITE STATUS €” ",
                                reportDate
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 686,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.grid4,
                            children: [
                                {
                                    label: 'IN PROGRESS',
                                    val: inProgress,
                                    color: '#f59e0b'
                                },
                                {
                                    label: 'COMPLETE TODAY',
                                    val: complete,
                                    color: '#4ade80'
                                },
                                {
                                    label: 'NOT STARTED',
                                    val: notStarted,
                                    color: '#484f58'
                                },
                                {
                                    label: 'DELAYED',
                                    val: delayed,
                                    color: delayed > 0 ? '#f87171' : '#484f58'
                                }
                            ].map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: S.kpiCard(k.color),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: S.kpiLabel,
                                            children: k.label
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                            lineNumber: 695,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: S.kpiValue(k.color),
                                            children: k.val
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                            lineNumber: 696,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, k.label, true, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 694,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 687,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 685,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: S.section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.sectionTitle,
                            children: "WORK IN PROGRESS"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 703,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.card,
                            children: [
                                inProgressItems.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 11,
                                        color: '#484f58'
                                    },
                                    children: "No tasks currently in progress."
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 705,
                                    columnNumber: 46
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    style: S.table,
                                    children: [
                                        inProgressItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: S.th,
                                                        children: "SOW #"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 708,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: S.th,
                                                        children: "ACTIVITY"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 708,
                                                        columnNumber: 44
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: S.th,
                                                        children: "ASSIGNED TO"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 708,
                                                        columnNumber: 74
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: S.th,
                                                        children: "START"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 708,
                                                        columnNumber: 107
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: S.th,
                                                        children: "DAYS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 708,
                                                        columnNumber: 134
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: S.th,
                                                        children: "PROGRESS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 708,
                                                        columnNumber: 160
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: S.th,
                                                        children: "RISK"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 708,
                                                        columnNumber: 190
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                lineNumber: 707,
                                                columnNumber: 53
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                            lineNumber: 707,
                                            columnNumber: 46
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: inProgressItems.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                ...S.td,
                                                                fontFamily: 'monospace',
                                                                color: '#f59e0b'
                                                            },
                                                            children: r.sow_number
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                            lineNumber: 713,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                ...S.td,
                                                                maxWidth: 180
                                                            },
                                                            children: r.sub_item_l3 || r.particulars || r.sow_number
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                            lineNumber: 714,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                ...S.td,
                                                                color: '#484f58'
                                                            },
                                                            children: r.assigned_to || '€”'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                            lineNumber: 715,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                ...S.td,
                                                                fontFamily: 'monospace',
                                                                color: '#484f58'
                                                            },
                                                            children: r.actual_start || r.planned_start || '€”'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                            lineNumber: 716,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                ...S.td,
                                                                fontFamily: 'monospace'
                                                            },
                                                            children: r.planned_days || r.baseline_days || '€”'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                            lineNumber: 717,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: S.td,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: 6
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            width: 60,
                                                                            height: 4,
                                                                            background: '#21262d',
                                                                            borderRadius: 2
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                height: 4,
                                                                                width: `${r.percent_complete || 0}%`,
                                                                                background: '#f59e0b',
                                                                                borderRadius: 2
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                                            lineNumber: 721,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                                        lineNumber: 720,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontSize: 10,
                                                                            color: '#484f58'
                                                                        },
                                                                        children: [
                                                                            r.percent_complete || 0,
                                                                            "%"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                                        lineNumber: 723,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                                lineNumber: 719,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                            lineNumber: 718,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: S.td,
                                                            children: r.risk_level ? S.badge(r.risk_level === 'High' || r.risk_level === 'Critical' ? '#f87171' : '#f59e0b', r.risk_level) : '€”'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                            lineNumber: 726,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, r.sow_id, true, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 712,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                            lineNumber: 710,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 706,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 704,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 702,
                    columnNumber: 9
                }, this),
                upcoming.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: S.section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.sectionTitle,
                            children: "UPCOMING ACTIVITIES"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 736,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.card,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                style: S.table,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: S.th,
                                                    children: "SOW #"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 740,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: S.th,
                                                    children: "ACTIVITY"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 740,
                                                    columnNumber: 46
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: S.th,
                                                    children: "PLANNED START"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 740,
                                                    columnNumber: 76
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: S.th,
                                                    children: "ASSIGNED"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 740,
                                                    columnNumber: 111
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: S.th,
                                                    children: "DAYS"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 740,
                                                    columnNumber: 141
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                            lineNumber: 739,
                                            columnNumber: 24
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 739,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: upcoming.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontFamily: 'monospace',
                                                            color: '#f59e0b'
                                                        },
                                                        children: r.sow_number
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 745,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: S.td,
                                                        children: r.sub_item_l3 || r.particulars || r.sow_number
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 746,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontFamily: 'monospace'
                                                        },
                                                        children: r.planned_start
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 747,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            color: '#484f58'
                                                        },
                                                        children: r.assigned_to || '€”'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 748,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontFamily: 'monospace'
                                                        },
                                                        children: r.planned_days || '€”'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 749,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, r.sow_id, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                lineNumber: 744,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 742,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                lineNumber: 738,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 737,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 735,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: S.section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.sectionTitle,
                            children: "OVERALL PROGRESS BY SECTION"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 759,
                            columnNumber: 11
                        }, this),
                        l1.map((sec)=>{
                            const secTasks = l3.filter((t)=>t.sow_number.startsWith(sec.sow_number + '.'));
                            const secDone = secTasks.filter((t)=>t.status === 'Complete').length;
                            const secIP = secTasks.filter((t)=>t.status === 'In Progress').length;
                            const secPct = secTasks.length > 0 ? Math.round(secDone / secTasks.length * 100) : 0;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    ...S.card,
                                    marginBottom: 8
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            marginBottom: 6
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 12,
                                                    fontWeight: 600,
                                                    color: '#e6edf3'
                                                },
                                                children: sec.scope_l1 || sec.sow_number
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                lineNumber: 768,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    gap: 8,
                                                    alignItems: 'center'
                                                },
                                                children: [
                                                    secIP > 0 && S.badge('#f59e0b', `${secIP} active`),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 12,
                                                            color: secPct === 100 ? '#4ade80' : accentColor,
                                                            fontFamily: 'monospace',
                                                            fontWeight: 700
                                                        },
                                                        children: [
                                                            secPct,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 771,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                lineNumber: 769,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 767,
                                        columnNumber: 17
                                    }, this),
                                    S.bar(secPct, secPct === 100 ? '#4ade80' : accentColor),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 10,
                                            color: '#484f58',
                                            marginTop: 4
                                        },
                                        children: [
                                            secDone,
                                            " complete · ",
                                            secTasks.length - secDone,
                                            " remaining"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 775,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, sec.sow_id, true, {
                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                lineNumber: 766,
                                columnNumber: 15
                            }, this);
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 758,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
            lineNumber: 683,
            columnNumber: 7
        }, this);
    }
    // ”€”€ WEEKLY PROGRESS REPORT ”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€”€
    function WeeklyReport() {
        const completedThisWeek = l3.filter((i)=>i.status === 'Complete' && i.actual_end && new Date(i.actual_end) >= new Date(Date.now() - 7 * 86400000));
        const startedThisWeek = l3.filter((i)=>i.status === 'In Progress' && i.actual_start && new Date(i.actual_start) >= new Date(Date.now() - 7 * 86400000));
        const nextWeekUpcoming = l3.filter((i)=>i.status === 'Not Started' && i.planned_start && new Date(i.planned_start) <= new Date(Date.now() + 14 * 86400000) && new Date(i.planned_start) >= new Date());
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReportHeader, {}, void 0, false, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 792,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: S.grid4,
                    children: [
                        {
                            label: 'OVERALL COMPLETION',
                            val: `${overallPct.toFixed(0)}%`,
                            sub: `${complete} of ${l3.length} tasks`,
                            color: accentColor
                        },
                        {
                            label: 'COMPLETED THIS WEEK',
                            val: String(completedThisWeek.length),
                            sub: 'Achieved',
                            color: '#4ade80'
                        },
                        {
                            label: 'STARTED THIS WEEK',
                            val: String(startedThisWeek.length),
                            sub: 'New work fronts',
                            color: '#f59e0b'
                        },
                        {
                            label: 'IN PROGRESS',
                            val: String(inProgress),
                            sub: 'Ongoing',
                            color: '#f87171'
                        }
                    ].map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.kpiCard(k.color),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: S.kpiLabel,
                                    children: k.label
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 801,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: S.kpiValue(k.color),
                                    children: k.val
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 802,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: S.kpiSub,
                                    children: k.sub
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 803,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, k.label, true, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 800,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 793,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: S.section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.sectionTitle,
                            children: "PROGRESS BY SECTION"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 808,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.card,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                style: S.table,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                'SECTION',
                                                'TOTAL',
                                                'DONE',
                                                'IN PROGRESS',
                                                'PROGRESS'
                                            ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: S.th,
                                                    children: h
                                                }, h, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 811,
                                                    columnNumber: 88
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                            lineNumber: 811,
                                            columnNumber: 22
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 811,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: l1.map((section)=>{
                                            const items = l3.filter((i)=>i.scope_l1 === section.scope_l1);
                                            const done = items.filter((i)=>i.status === 'Complete').length;
                                            const inProg = items.filter((i)=>i.status === 'In Progress').length;
                                            const pct = items.length ? items.reduce((s, i)=>s + (i.percent_complete || 0), 0) / items.length : 0;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontWeight: 600,
                                                            color: '#e6edf3'
                                                        },
                                                        children: section.scope_l1 || section.sow_number
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 820,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontFamily: 'monospace'
                                                        },
                                                        children: items.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 821,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontFamily: 'monospace',
                                                            color: '#4ade80'
                                                        },
                                                        children: done
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 822,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontFamily: 'monospace',
                                                            color: '#f59e0b'
                                                        },
                                                        children: inProg
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 823,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: S.td,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: 8
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        width: 80,
                                                                        height: 6,
                                                                        background: '#21262d',
                                                                        borderRadius: 3
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            height: 6,
                                                                            width: `${pct}%`,
                                                                            background: pct === 100 ? '#4ade80' : accentColor,
                                                                            borderRadius: 3
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                                        lineNumber: 827,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                                    lineNumber: 826,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: 10,
                                                                        color: '#484f58'
                                                                    },
                                                                    children: [
                                                                        pct.toFixed(0),
                                                                        "%"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                                    lineNumber: 829,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                            lineNumber: 825,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 824,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, section.sow_number, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                lineNumber: 819,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 812,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                lineNumber: 810,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 809,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 807,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: S.grid2,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.card,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: S.sectionTitle,
                                    children: "COMPLETED THIS WEEK"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 841,
                                    columnNumber: 13
                                }, this),
                                completedThisWeek.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 11,
                                        color: '#484f58'
                                    },
                                    children: "No tasks completed this week."
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 843,
                                    columnNumber: 17
                                }, this) : completedThisWeek.map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: S.row,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    ...S.rowLabel,
                                                    maxWidth: 220,
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    whiteSpace: 'nowrap'
                                                },
                                                children: i.sub_item_l3 || i.particulars || i.sow_number
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                lineNumber: 846,
                                                columnNumber: 21
                                            }, this),
                                            S.badge('#4ade80', 'Done')
                                        ]
                                    }, i.sow_number, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 845,
                                        columnNumber: 19
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 840,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.card,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: S.sectionTitle,
                                    children: "NEXT WEEK — UPCOMING"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 853,
                                    columnNumber: 13
                                }, this),
                                nextWeekUpcoming.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 11,
                                        color: '#484f58'
                                    },
                                    children: "No upcoming activities."
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 855,
                                    columnNumber: 17
                                }, this) : nextWeekUpcoming.slice(0, 6).map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: S.row,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    ...S.rowLabel,
                                                    maxWidth: 200,
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    whiteSpace: 'nowrap'
                                                },
                                                children: i.sub_item_l3 || i.particulars || i.sow_number
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                lineNumber: 858,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    ...S.rowVal,
                                                    fontFamily: 'monospace'
                                                },
                                                children: i.planned_start
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                lineNumber: 859,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, i.sow_number, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 857,
                                        columnNumber: 19
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 852,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 839,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
            lineNumber: 791,
            columnNumber: 7
        }, this);
    }
    function MonthlyReport() {
        const cutoff = new Date(Date.now() - 30 * 86400000);
        const costsThisMonth = costs.filter((c)=>new Date(c.cost_date) >= cutoff);
        const spentThisMonth = costsThisMonth.reduce((s, c)=>s + Number(c.amount), 0);
        const byCatMonth = {};
        costsThisMonth.forEach((c)=>{
            byCatMonth[c.category] = (byCatMonth[c.category] || 0) + Number(c.amount);
        });
        const spentPctM = project.budget > 0 ? totalSpent / project.budget * 100 : 0;
        const cpiM = totalSpent > 0 ? earnedValue / totalSpent : 1;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReportHeader, {}, void 0, false, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 881,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: S.grid4,
                    children: [
                        {
                            label: 'COMPLETION %',
                            val: `${overallPct.toFixed(0)}%`,
                            sub: 'Physical progress',
                            color: accentColor
                        },
                        {
                            label: 'SPENT THIS MONTH',
                            val: fmt(spentThisMonth, project.currency),
                            sub: 'Period cost',
                            color: '#f59e0b'
                        },
                        {
                            label: 'TOTAL SPENT TO DATE',
                            val: fmt(totalSpent, project.currency),
                            sub: `${spentPctM.toFixed(0)}% of contract`,
                            color: isOver ? '#f87171' : '#4ade80'
                        },
                        {
                            label: 'REMAINING BUDGET',
                            val: fmt(project.budget - totalSpent, project.currency),
                            sub: 'To complete',
                            color: isOver ? '#f87171' : '#60a5fa'
                        }
                    ].map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.kpiCard(k.color),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: S.kpiLabel,
                                    children: k.label
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 890,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: S.kpiValue(k.color),
                                    children: k.val
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 891,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: S.kpiSub,
                                    children: k.sub
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 892,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, k.label, true, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 889,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 882,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: S.grid2,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.card,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: S.sectionTitle,
                                    children: "FINANCIAL PERFORMANCE"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 898,
                                    columnNumber: 13
                                }, this),
                                [
                                    {
                                        label: 'Contract Value (BAC)',
                                        val: fmt(project.budget, project.currency)
                                    },
                                    {
                                        label: 'BOQ Value',
                                        val: fmt(totalBoq, project.currency)
                                    },
                                    {
                                        label: 'Total Spent (AC)',
                                        val: fmt(totalSpent, project.currency)
                                    },
                                    {
                                        label: 'Spent This Month',
                                        val: fmt(spentThisMonth, project.currency)
                                    },
                                    {
                                        label: 'Earned Value (EV)',
                                        val: fmt(earnedValue, project.currency)
                                    },
                                    {
                                        label: 'CPI',
                                        val: cpiM.toFixed(2)
                                    }
                                ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: S.row,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: S.rowLabel,
                                                children: r.label
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                lineNumber: 908,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: S.rowVal,
                                                children: r.val
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                lineNumber: 909,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, r.label, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 907,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 897,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.card,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: S.sectionTitle,
                                    children: "BUDGET UTILISATION"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 914,
                                    columnNumber: 13
                                }, this),
                                S.bar(spentPctM, isOver ? '#f87171' : accentColor),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 10,
                                        color: '#484f58',
                                        textAlign: 'right',
                                        marginTop: 4
                                    },
                                    children: [
                                        spentPctM.toFixed(0),
                                        "% of contract spent"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 916,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: 16
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: S.sectionTitle,
                                            children: "MONTHLY SPEND BY CATEGORY"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                            lineNumber: 918,
                                            columnNumber: 15
                                        }, this),
                                        Object.keys(byCatMonth).length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 11,
                                                color: '#484f58'
                                            },
                                            children: "No cost entries this month."
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                            lineNumber: 919,
                                            columnNumber: 56
                                        }, this),
                                        Object.entries(byCatMonth).map(([k, v])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: S.row,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: S.rowLabel,
                                                        children: k
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 922,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: S.rowVal,
                                                        children: fmt(v, project.currency)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 923,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, k, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                lineNumber: 921,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 917,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 913,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 896,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: S.section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.sectionTitle,
                            children: "SECTION MILESTONE STATUS"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 930,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.card,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                style: S.table,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                'SECTION',
                                                'BOQ VALUE',
                                                '% COMPLETE',
                                                'EARNED VALUE',
                                                'STATUS'
                                            ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: S.th,
                                                    children: h
                                                }, h, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 933,
                                                    columnNumber: 97
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                            lineNumber: 933,
                                            columnNumber: 22
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 933,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: l1.map((section)=>{
                                            const items = l3.filter((i)=>i.scope_l1 === section.scope_l1);
                                            const boqSum = items.reduce((s, i)=>s + (i.boq_amount || 0), 0);
                                            const pct = items.length ? items.reduce((s, i)=>s + (i.percent_complete || 0), 0) / items.length : 0;
                                            const ev = boqSum * (pct / 100);
                                            const st = pct >= 95 ? 'Complete' : pct > 0 ? 'In Progress' : 'Not Started';
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontWeight: 600,
                                                            color: '#e6edf3'
                                                        },
                                                        children: section.scope_l1 || section.sow_number
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 943,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontFamily: 'monospace',
                                                            color: '#f59e0b'
                                                        },
                                                        children: boqSum > 0 ? fmt(boqSum, project.currency) : '—'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 944,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontFamily: 'monospace'
                                                        },
                                                        children: [
                                                            pct.toFixed(0),
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 945,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontFamily: 'monospace',
                                                            color: '#4ade80'
                                                        },
                                                        children: ev > 0 ? fmt(ev, project.currency) : '—'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 946,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: S.td,
                                                        children: S.badge(st === 'Complete' ? '#4ade80' : st === 'In Progress' ? '#f59e0b' : '#484f58', st)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 947,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, section.sow_number, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                lineNumber: 942,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 934,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                lineNumber: 932,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 931,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 929,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
            lineNumber: 880,
            columnNumber: 7
        }, this);
    }
    function CostReport() {
        const cvrRows = l1.map((section)=>{
            const items = l3.filter((i)=>i.scope_l1 === section.scope_l1);
            const rb = items.reduce((s, i)=>s + (i.estimated_cost || 0), 0);
            const ctd = items.reduce((s, i)=>s + (i.actual_cost || 0), 0);
            const pct = items.length ? items.reduce((s, i)=>s + (i.percent_complete || 0), 0) / items.length : 0;
            const ftc = pct > 0 ? ctd / (pct / 100) * (1 - pct / 100) : rb;
            const efc = ctd + ftc;
            const variance = rb - efc;
            const varPct = rb ? Math.abs(variance) / rb * 100 : 0;
            let status = 'green';
            if (variance < 0 && varPct < 5) status = 'amber';
            else if (variance < 0 && varPct >= 5) status = 'red';
            return {
                section: section.scope_l1 || section.sow_number,
                rb,
                ctd,
                pct,
                ftc,
                efc,
                variance,
                status,
                varPct
            };
        });
        const totalRB = cvrRows.reduce((s, r)=>s + r.rb, 0);
        const totalCTD = cvrRows.reduce((s, r)=>s + r.ctd, 0);
        const totalEFC = cvrRows.reduce((s, r)=>s + r.efc, 0);
        const totalVariance = totalRB - totalEFC;
        const overrunPct = totalRB ? Math.abs(totalVariance) / totalRB * 100 : 0;
        const isOverrun = totalVariance < 0;
        const bannerColor = !isOverrun ? '#4ade80' : overrunPct < 5 ? '#f59e0b' : '#f87171';
        const cv = earnedValue - totalSpent;
        const cpiVal = totalSpent === 0 ? 1 : earnedValue / totalSpent;
        const localEstCost = l3.reduce((s, i)=>s + (i.estimated_cost || 0), 0);
        const spiVal = localEstCost === 0 ? 1 : earnedValue / (localEstCost * (overallPct / 100) || 1);
        const statusColor2 = (s)=>s === 'green' ? '#4ade80' : s === 'amber' ? '#f59e0b' : '#f87171';
        const statusLabel = (s)=>s === 'green' ? 'On Track' : s === 'amber' ? 'Warning' : 'Critical';
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReportHeader, {}, void 0, false, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 990,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: bannerColor + '18',
                        border: `2px solid ${bannerColor}`,
                        borderRadius: 10,
                        padding: '18px 24px',
                        marginBottom: 24,
                        textAlign: 'center'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontFamily: "'Barlow Condensed',sans-serif",
                                fontWeight: 900,
                                fontSize: 28,
                                color: bannerColor,
                                letterSpacing: '0.04em'
                            },
                            children: [
                                "PROJECT IS ",
                                overrunPct.toFixed(1),
                                "% ",
                                isOverrun ? 'OVER' : 'UNDER',
                                " BUDGET"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 993,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: 13,
                                color: '#6e7681',
                                marginTop: 4
                            },
                            children: [
                                "Total Variance: ",
                                fmt(Math.abs(totalVariance), project.currency),
                                " ",
                                isOverrun ? '(Overspend)' : '(Saving)'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 996,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 992,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: S.section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.sectionTitle,
                            children: "COST VALUE RECONCILIATION (CVR) — BY SECTION"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 1002,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.card,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        overflowX: 'auto'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        style: S.table,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        'WORK PACKAGE',
                                                        'REV. BUDGET (RB)',
                                                        'COST TO DATE (CTD)',
                                                        '% COMPLETE',
                                                        'FORECAST TO COMPLETE (FTC)',
                                                        'EST. FINAL COST (EFC)',
                                                        'VARIANCE (RB-EFC)',
                                                        'STATUS'
                                                    ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            style: S.th,
                                                            children: h
                                                        }, h, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                            lineNumber: 1009,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 1007,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                lineNumber: 1006,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: [
                                                    cvrRows.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        ...S.td,
                                                                        fontWeight: 600,
                                                                        color: '#e6edf3'
                                                                    },
                                                                    children: r.section
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                                    lineNumber: 1016,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        ...S.td,
                                                                        fontFamily: 'monospace'
                                                                    },
                                                                    children: fmt(r.rb, project.currency)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                                    lineNumber: 1017,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        ...S.td,
                                                                        fontFamily: 'monospace'
                                                                    },
                                                                    children: fmt(r.ctd, project.currency)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                                    lineNumber: 1018,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        ...S.td,
                                                                        fontFamily: 'monospace'
                                                                    },
                                                                    children: [
                                                                        r.pct.toFixed(0),
                                                                        "%"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                                    lineNumber: 1019,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        ...S.td,
                                                                        fontFamily: 'monospace'
                                                                    },
                                                                    children: fmt(r.ftc, project.currency)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                                    lineNumber: 1020,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        ...S.td,
                                                                        fontFamily: 'monospace',
                                                                        fontWeight: 600
                                                                    },
                                                                    children: fmt(r.efc, project.currency)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                                    lineNumber: 1021,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: {
                                                                        ...S.td,
                                                                        fontFamily: 'monospace',
                                                                        fontWeight: 700,
                                                                        color: r.variance >= 0 ? '#4ade80' : '#f87171'
                                                                    },
                                                                    children: [
                                                                        r.variance >= 0 ? '+' : '',
                                                                        fmt(r.variance, project.currency)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                                    lineNumber: 1022,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    style: S.td,
                                                                    children: S.badge(statusColor2(r.status), statusLabel(r.status))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                                    lineNumber: 1025,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, r.section, true, {
                                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                            lineNumber: 1015,
                                                            columnNumber: 21
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        style: {
                                                            borderTop: '2px solid #30363d'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    ...S.td,
                                                                    fontWeight: 700,
                                                                    color: '#e6edf3'
                                                                },
                                                                children: "TOTAL"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                                lineNumber: 1029,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    ...S.td,
                                                                    fontFamily: 'monospace',
                                                                    fontWeight: 700
                                                                },
                                                                children: fmt(totalRB, project.currency)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                                lineNumber: 1030,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    ...S.td,
                                                                    fontFamily: 'monospace',
                                                                    fontWeight: 700
                                                                },
                                                                children: fmt(totalCTD, project.currency)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                                lineNumber: 1031,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    ...S.td
                                                                },
                                                                children: "—"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                                lineNumber: 1032,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    ...S.td,
                                                                    fontFamily: 'monospace',
                                                                    fontWeight: 700
                                                                },
                                                                children: fmt(totalEFC - totalCTD, project.currency)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                                lineNumber: 1033,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    ...S.td,
                                                                    fontFamily: 'monospace',
                                                                    fontWeight: 700
                                                                },
                                                                children: fmt(totalEFC, project.currency)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                                lineNumber: 1034,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    ...S.td,
                                                                    fontFamily: 'monospace',
                                                                    fontWeight: 700,
                                                                    color: totalVariance >= 0 ? '#4ade80' : '#f87171'
                                                                },
                                                                children: [
                                                                    totalVariance >= 0 ? '+' : '',
                                                                    fmt(totalVariance, project.currency)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                                lineNumber: 1035,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: S.td
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                                lineNumber: 1038,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 1028,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                lineNumber: 1013,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 1005,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 1004,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 10,
                                        color: '#484f58',
                                        marginTop: 8
                                    },
                                    children: "Note: Variation Orders (VO) column will be available when variation orders are logged. RB = Original Budget (no VOs yet)."
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 1043,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: 8,
                                        marginTop: 8,
                                        flexWrap: 'wrap'
                                    },
                                    children: [
                                        S.badge('#4ade80', 'Green: On/Below Budget'),
                                        S.badge('#f59e0b', 'Amber: Warning <5% Over'),
                                        S.badge('#f87171', 'Red: Critical >5% Over')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 1046,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 1003,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 1001,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: S.grid2,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.card,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: S.sectionTitle,
                                    children: "EARNED VALUE ANALYSIS"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 1056,
                                    columnNumber: 13
                                }, this),
                                [
                                    {
                                        label: 'BAC (Budget at Completion)',
                                        val: fmt(project.budget, project.currency),
                                        color: '#f59e0b'
                                    },
                                    {
                                        label: 'EV (Earned Value)',
                                        val: fmt(earnedValue, project.currency),
                                        color: '#60a5fa'
                                    },
                                    {
                                        label: 'AC (Actual Cost)',
                                        val: fmt(totalSpent, project.currency),
                                        color: '#c9d1d9'
                                    },
                                    {
                                        label: 'CV (Cost Variance)',
                                        val: fmt(cv, project.currency),
                                        color: cv >= 0 ? '#4ade80' : '#f87171'
                                    },
                                    {
                                        label: 'CPI',
                                        val: cpiVal.toFixed(2),
                                        color: cpiVal >= 1 ? '#4ade80' : '#f87171'
                                    },
                                    {
                                        label: 'SPI',
                                        val: isFinite(spiVal) ? spiVal.toFixed(2) : '—',
                                        color: spiVal >= 1 ? '#4ade80' : '#f87171'
                                    }
                                ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: S.row,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: S.rowLabel,
                                                children: r.label
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                lineNumber: 1066,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    ...S.rowVal,
                                                    color: r.color
                                                },
                                                children: r.val
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                lineNumber: 1067,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, r.label, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 1065,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 1055,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.card,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: S.sectionTitle,
                                    children: "SPEND BY CATEGORY"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 1072,
                                    columnNumber: 13
                                }, this),
                                byCategory.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 11,
                                        color: '#484f58'
                                    },
                                    children: "No cost entries yet."
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 1073,
                                    columnNumber: 41
                                }, this),
                                byCategory.map(({ cat, total })=>{
                                    const pctOfTotal = totalSpent > 0 ? Math.round(total / totalSpent * 100) : 0;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: 10
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    fontSize: 11,
                                                    marginBottom: 3
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: '#c9d1d9'
                                                        },
                                                        children: cat
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 1079,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: 'monospace',
                                                            color: '#f59e0b'
                                                        },
                                                        children: [
                                                            fmt(total, project.currency),
                                                            " (",
                                                            pctOfTotal,
                                                            "%)"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 1080,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                lineNumber: 1078,
                                                columnNumber: 19
                                            }, this),
                                            S.bar(pctOfTotal, accentColor)
                                        ]
                                    }, cat, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 1077,
                                        columnNumber: 17
                                    }, this);
                                })
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 1071,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 1054,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: S.section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.sectionTitle,
                            children: "COST BREAKDOWN BY WORK PACKAGE (EFC)"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 1090,
                            columnNumber: 11
                        }, this),
                        cvrRows.filter((r)=>r.efc > 0).map((r)=>{
                            const pctOfTotal = totalEFC > 0 ? r.efc / totalEFC * 100 : 0;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    ...S.card,
                                    marginBottom: 8
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            marginBottom: 6
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 12,
                                                    fontWeight: 600,
                                                    color: '#e6edf3'
                                                },
                                                children: r.section
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                lineNumber: 1096,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    gap: 12,
                                                    alignItems: 'center'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 10,
                                                            fontFamily: 'monospace',
                                                            color: '#f59e0b'
                                                        },
                                                        children: fmt(r.efc, project.currency)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 1098,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 10,
                                                            color: '#484f58'
                                                        },
                                                        children: [
                                                            pctOfTotal.toFixed(0),
                                                            "% of total"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 1099,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 11,
                                                            fontWeight: 700,
                                                            color: r.variance >= 0 ? '#4ade80' : '#f87171'
                                                        },
                                                        children: [
                                                            r.variance >= 0 ? '▼ ' : '▲ ',
                                                            fmt(Math.abs(r.variance), project.currency)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 1100,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                lineNumber: 1097,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 1095,
                                        columnNumber: 17
                                    }, this),
                                    S.bar(pctOfTotal, accentColor)
                                ]
                            }, r.section, true, {
                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                lineNumber: 1094,
                                columnNumber: 15
                            }, this);
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 1089,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: S.grid2,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.card,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: S.sectionTitle,
                                    children: "S-CURVE (COST VS TIME)"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 1113,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: 'center',
                                        padding: '32px 0',
                                        color: '#484f58',
                                        fontSize: 12
                                    },
                                    children: "S-Curve will be available when monthly cost data is recorded"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 1114,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 1112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.card,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: S.sectionTitle,
                                    children: "COMMITTED COSTS"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 1119,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: 'center',
                                        padding: '32px 0',
                                        color: '#484f58',
                                        fontSize: 12
                                    },
                                    children: "Outstanding commitments will be available when POs are logged"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 1120,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 1118,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 1111,
                    columnNumber: 9
                }, this),
                costs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: S.section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.sectionTitle,
                            children: "ALL COST ENTRIES"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 1128,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.card,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    overflowX: 'auto'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    style: S.table,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    'DATE',
                                                    'DESCRIPTION',
                                                    'CATEGORY',
                                                    'SUPPLIER',
                                                    'REF',
                                                    'AMOUNT',
                                                    'STATUS'
                                                ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: S.th,
                                                        children: h
                                                    }, h, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 1135,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                lineNumber: 1133,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                            lineNumber: 1132,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: costs.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                ...S.td,
                                                                fontFamily: 'monospace',
                                                                color: '#484f58'
                                                            },
                                                            children: c.cost_date
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                            lineNumber: 1142,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: S.td,
                                                            children: c.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                            lineNumber: 1143,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: S.td,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 10,
                                                                    color: '#f59e0b'
                                                                },
                                                                children: c.category
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                                lineNumber: 1144,
                                                                columnNumber: 42
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                            lineNumber: 1144,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                ...S.td,
                                                                color: '#484f58'
                                                            },
                                                            children: c.supplier || '—'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                            lineNumber: 1145,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                ...S.td,
                                                                color: '#484f58',
                                                                fontFamily: 'monospace'
                                                            },
                                                            children: c.invoice_ref || '—'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                            lineNumber: 1146,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                ...S.td,
                                                                fontFamily: 'monospace',
                                                                color: '#f59e0b',
                                                                fontWeight: 600
                                                            },
                                                            children: fmt(Number(c.amount), project.currency)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                            lineNumber: 1147,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: S.td,
                                                            children: S.badge(c.is_approved ? '#4ade80' : '#484f58', c.is_approved ? 'Approved' : 'Pending')
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                            lineNumber: 1148,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, c.cost_id, true, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 1141,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                            lineNumber: 1139,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 1131,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                lineNumber: 1130,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 1129,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 1127,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
            lineNumber: 989,
            columnNumber: 7
        }, this);
    }
    function ScheduleReport() {
        const delayedItems = l3.filter((i)=>i.schedule_variance && i.schedule_variance < 0);
        const lateItems = l3.filter((i)=>i.planned_days && i.baseline_days && i.planned_days > i.baseline_days);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReportHeader, {}, void 0, false, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 1167,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: S.grid4,
                    children: [
                        {
                            label: 'TOTAL ACTIVITIES',
                            val: String(l3.length),
                            sub: 'All work packages',
                            color: accentColor
                        },
                        {
                            label: 'COMPLETE',
                            val: String(complete),
                            sub: 'Finished',
                            color: '#4ade80'
                        },
                        {
                            label: 'IN PROGRESS',
                            val: String(inProgress),
                            sub: 'Active',
                            color: '#f59e0b'
                        },
                        {
                            label: 'DELAYED',
                            val: String(delayedItems.length),
                            sub: isDelayed ? `${daysLate} days behind` : 'On schedule',
                            color: delayedItems.length > 0 ? '#f87171' : '#4ade80'
                        }
                    ].map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.kpiCard(k.color),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: S.kpiLabel,
                                    children: k.label
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 1176,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: S.kpiValue(k.color),
                                    children: k.val
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 1177,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: S.kpiSub,
                                    children: k.sub
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 1178,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, k.label, true, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 1175,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 1168,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: S.section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.sectionTitle,
                            children: "FULL SCHEDULE — BASELINE vs PLANNED vs ACTUAL"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 1183,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.card,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        overflowX: 'auto'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        style: S.table,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        'SOW #',
                                                        'ACTIVITY',
                                                        'BL START',
                                                        'BL DAYS',
                                                        'PL START',
                                                        'PL DAYS',
                                                        'ACT START',
                                                        'STATUS',
                                                        '%'
                                                    ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            style: S.th,
                                                            children: h
                                                        }, h, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                            lineNumber: 1188,
                                                            columnNumber: 121
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 1188,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                lineNumber: 1187,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: l3.map((i)=>{
                                                    const isLate = i.planned_days && i.baseline_days && i.planned_days > i.baseline_days;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        style: {
                                                            background: isLate ? '#f8717110' : 'transparent'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    ...S.td,
                                                                    fontFamily: 'monospace',
                                                                    color: '#f59e0b'
                                                                },
                                                                children: i.sow_number
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                                lineNumber: 1195,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    ...S.td,
                                                                    maxWidth: 180,
                                                                    overflow: 'hidden',
                                                                    textOverflow: 'ellipsis',
                                                                    whiteSpace: 'nowrap'
                                                                },
                                                                children: i.sub_item_l3 || i.particulars || i.sow_number
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                                lineNumber: 1196,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    ...S.td,
                                                                    fontFamily: 'monospace',
                                                                    color: '#484f58'
                                                                },
                                                                children: i.baseline_start || '—'
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                                lineNumber: 1197,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    ...S.td,
                                                                    fontFamily: 'monospace'
                                                                },
                                                                children: i.baseline_days || '—'
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                                lineNumber: 1198,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    ...S.td,
                                                                    fontFamily: 'monospace',
                                                                    color: isLate ? '#f87171' : '#c9d1d9'
                                                                },
                                                                children: i.planned_start || '—'
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                                lineNumber: 1199,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    ...S.td,
                                                                    fontFamily: 'monospace',
                                                                    color: isLate ? '#f87171' : '#c9d1d9',
                                                                    fontWeight: isLate ? 700 : 400
                                                                },
                                                                children: i.planned_days || '—'
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                                lineNumber: 1200,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    ...S.td,
                                                                    fontFamily: 'monospace',
                                                                    color: '#4ade80'
                                                                },
                                                                children: i.actual_start || '—'
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                                lineNumber: 1201,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: S.td,
                                                                children: S.badge(i.status === 'Complete' ? '#4ade80' : i.status === 'Delayed' ? '#f87171' : i.status === 'In Progress' ? '#f59e0b' : '#484f58', i.status || 'Not Started')
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                                lineNumber: 1202,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    ...S.td,
                                                                    fontFamily: 'monospace'
                                                                },
                                                                children: [
                                                                    i.percent_complete || 0,
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                                lineNumber: 1203,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, i.sow_number, true, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 1194,
                                                        columnNumber: 23
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                lineNumber: 1190,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 1186,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 1185,
                                    columnNumber: 13
                                }, this),
                                lateItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 10,
                                        color: '#f87171',
                                        marginTop: 8
                                    },
                                    children: [
                                        lateItems.length,
                                        " activities have planned duration exceeding baseline — highlighted in red."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 1210,
                                    columnNumber: 38
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 1184,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 1182,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
            lineNumber: 1166,
            columnNumber: 7
        }, this);
    }
    function RiskReport() {
        const critical = l3.filter((i)=>i.risk_level === 'Critical');
        const veryHigh = l3.filter((i)=>i.risk_level === 'Very High');
        const high = l3.filter((i)=>i.risk_level === 'High');
        const medium = l3.filter((i)=>i.risk_level === 'Medium');
        const allRisks = [
            ...critical,
            ...veryHigh,
            ...high,
            ...medium
        ];
        const riskColor2 = (r)=>r === 'Critical' ? '#c084fc' : r === 'Very High' ? '#f87171' : r === 'High' ? '#f59e0b' : '#60a5fa';
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReportHeader, {}, void 0, false, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 1228,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: S.grid4,
                    children: [
                        {
                            label: 'CRITICAL',
                            val: String(critical.length),
                            sub: 'Immediate action',
                            color: '#c084fc'
                        },
                        {
                            label: 'VERY HIGH',
                            val: String(veryHigh.length),
                            sub: 'Urgent mitigation',
                            color: '#f87171'
                        },
                        {
                            label: 'HIGH',
                            val: String(high.length),
                            sub: 'Monitor closely',
                            color: '#f59e0b'
                        },
                        {
                            label: 'MEDIUM',
                            val: String(medium.length),
                            sub: 'Routine monitoring',
                            color: '#60a5fa'
                        }
                    ].map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.kpiCard(k.color),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: S.kpiLabel,
                                    children: k.label
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 1237,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: S.kpiValue(k.color),
                                    children: k.val
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 1238,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: S.kpiSub,
                                    children: k.sub
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 1239,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, k.label, true, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 1236,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 1229,
                    columnNumber: 9
                }, this),
                allRisks.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        ...S.card,
                        textAlign: 'center',
                        color: '#4ade80',
                        fontSize: 13,
                        padding: 32
                    },
                    children: "✓ No risks above Low level. Project risk status is healthy."
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 1244,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: S.section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.sectionTitle,
                            children: "RISK REGISTER (ISO 31000)"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 1249,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.card,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    overflowX: 'auto'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    style: S.table,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    'SOW #',
                                                    'ACTIVITY',
                                                    'RISK LEVEL',
                                                    'STATUS',
                                                    'ASSIGNED TO',
                                                    'PLANNED START',
                                                    'CRITICAL PATH'
                                                ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: S.th,
                                                        children: h
                                                    }, h, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 1254,
                                                        columnNumber: 126
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                lineNumber: 1254,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                            lineNumber: 1253,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: allRisks.map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                ...S.td,
                                                                fontFamily: 'monospace',
                                                                color: '#f59e0b'
                                                            },
                                                            children: i.sow_number
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                            lineNumber: 1259,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                ...S.td,
                                                                maxWidth: 200,
                                                                overflow: 'hidden',
                                                                textOverflow: 'ellipsis',
                                                                whiteSpace: 'nowrap'
                                                            },
                                                            children: i.sub_item_l3 || i.particulars || i.sow_number
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                            lineNumber: 1260,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: S.td,
                                                            children: S.badge(riskColor2(i.risk_level || ''), i.risk_level || '—')
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                            lineNumber: 1261,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: S.td,
                                                            children: S.badge(i.status === 'Complete' ? '#4ade80' : i.status === 'Delayed' ? '#f87171' : '#484f58', i.status || 'Not Started')
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                            lineNumber: 1262,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                ...S.td,
                                                                color: '#484f58'
                                                            },
                                                            children: i.assigned_to || '—'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                            lineNumber: 1263,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                ...S.td,
                                                                fontFamily: 'monospace',
                                                                color: '#484f58'
                                                            },
                                                            children: i.planned_start || '—'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                            lineNumber: 1264,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: S.td,
                                                            children: i.is_critical_path ? S.badge('#f87171', 'CP') : '—'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                            lineNumber: 1265,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, i.sow_number, true, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 1258,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                            lineNumber: 1256,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 1252,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                lineNumber: 1251,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 1250,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 1248,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
            lineNumber: 1227,
            columnNumber: 7
        }, this);
    }
    function ResourceReport() {
        const withResources = l3.filter((r)=>r.plant || r.site_equipment || r.manpower);
        const assignees = [
            ...new Set(l3.filter((r)=>r.assigned_to).map((r)=>r.assigned_to))
        ];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReportHeader, {}, void 0, false, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 1285,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: S.section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.sectionTitle,
                            children: "RESOURCE SUMMARY"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 1287,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.grid3,
                            children: [
                                {
                                    label: 'TOTAL ASSIGNED TASKS',
                                    val: l3.filter((r)=>r.assigned_to).length,
                                    color: '#c9d1d9'
                                },
                                {
                                    label: 'UNIQUE ASSIGNEES',
                                    val: assignees.length,
                                    color: '#60a5fa'
                                },
                                {
                                    label: 'TASKS WITH RESOURCES',
                                    val: withResources.length,
                                    color: '#f59e0b'
                                }
                            ].map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: S.kpiCard(k.color),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: S.kpiLabel,
                                            children: k.label
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                            lineNumber: 1295,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: S.kpiValue(k.color),
                                            children: k.val
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                            lineNumber: 1296,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, k.label, true, {
                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                    lineNumber: 1294,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 1288,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 1286,
                    columnNumber: 9
                }, this),
                assignees.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: S.section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.sectionTitle,
                            children: "WORKLOAD BY ASSIGNEE"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 1303,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.card,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                style: S.table,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: S.th,
                                                    children: "ASSIGNEE"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 1306,
                                                    columnNumber: 28
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: S.th,
                                                    children: "TOTAL TASKS"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 1306,
                                                    columnNumber: 58
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: S.th,
                                                    children: "IN PROGRESS"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 1306,
                                                    columnNumber: 91
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: S.th,
                                                    children: "COMPLETE"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 1306,
                                                    columnNumber: 124
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: S.th,
                                                    children: "DELAYED"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 1306,
                                                    columnNumber: 154
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                            lineNumber: 1306,
                                            columnNumber: 24
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 1306,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: assignees.map((a)=>{
                                            const aTasks = l3.filter((r)=>r.assigned_to === a);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontWeight: 600,
                                                            color: '#e6edf3'
                                                        },
                                                        children: a
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 1312,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontFamily: 'monospace'
                                                        },
                                                        children: aTasks.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 1313,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontFamily: 'monospace',
                                                            color: '#f59e0b'
                                                        },
                                                        children: aTasks.filter((t)=>t.status === 'In Progress').length
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 1314,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontFamily: 'monospace',
                                                            color: '#4ade80'
                                                        },
                                                        children: aTasks.filter((t)=>t.status === 'Complete').length
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 1315,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontFamily: 'monospace',
                                                            color: '#f87171'
                                                        },
                                                        children: aTasks.filter((t)=>t.status === 'Delayed').length
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 1316,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, a, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                lineNumber: 1311,
                                                columnNumber: 23
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 1307,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                lineNumber: 1305,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 1304,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 1302,
                    columnNumber: 11
                }, this),
                withResources.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: S.section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.sectionTitle,
                            children: "PLANT, EQUIPMENT & MANPOWER ALLOCATION"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 1327,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: S.card,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                style: S.table,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: S.th,
                                                    children: "SOW #"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 1330,
                                                    columnNumber: 28
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: S.th,
                                                    children: "ACTIVITY"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 1330,
                                                    columnNumber: 55
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: S.th,
                                                    children: "PLANT"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 1330,
                                                    columnNumber: 85
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: S.th,
                                                    children: "SITE EQUIP."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 1330,
                                                    columnNumber: 112
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: S.th,
                                                    children: "MANPOWER"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 1330,
                                                    columnNumber: 145
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: S.th,
                                                    children: "STATUS"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                    lineNumber: 1330,
                                                    columnNumber: 175
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                            lineNumber: 1330,
                                            columnNumber: 24
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 1330,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: withResources.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontFamily: 'monospace',
                                                            color: '#f59e0b'
                                                        },
                                                        children: r.sow_number
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 1334,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            maxWidth: 160
                                                        },
                                                        children: r.sub_item_l3 || r.particulars || r.sow_number
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 1335,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontSize: 10,
                                                            color: '#484f58'
                                                        },
                                                        children: r.plant || '—'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 1336,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontSize: 10,
                                                            color: '#484f58'
                                                        },
                                                        children: r.site_equipment || '—'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 1337,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            ...S.td,
                                                            fontSize: 10,
                                                            color: '#484f58'
                                                        },
                                                        children: r.manpower || '—'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 1338,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: S.td,
                                                        children: S.badge(r.status === 'Complete' ? '#4ade80' : r.status === 'In Progress' ? '#f59e0b' : '#484f58', r.status || 'Not Started')
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                        lineNumber: 1339,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, r.sow_id, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                                lineNumber: 1333,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 1331,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                lineNumber: 1329,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                            lineNumber: 1328,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 1326,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
            lineNumber: 1284,
            columnNumber: 7
        }, this);
    }
    function renderReport() {
        switch(activeReport){
            case 'pm':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PMReport, {}, void 0, false, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 1353,
                    columnNumber: 31
                }, this);
            case 'client':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ClientReport, {}, void 0, false, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 1354,
                    columnNumber: 31
                }, this);
            case 'engineer':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EngineerReport, {}, void 0, false, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 1355,
                    columnNumber: 31
                }, this);
            case 'qs':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(QSReport, {}, void 0, false, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 1356,
                    columnNumber: 31
                }, this);
            case 'site':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SiteReport, {}, void 0, false, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 1357,
                    columnNumber: 31
                }, this);
            case 'weekly':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WeeklyReport, {}, void 0, false, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 1358,
                    columnNumber: 31
                }, this);
            case 'monthly':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MonthlyReport, {}, void 0, false, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 1359,
                    columnNumber: 31
                }, this);
            case 'cost':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CostReport, {}, void 0, false, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 1360,
                    columnNumber: 31
                }, this);
            case 'schedule':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScheduleReport, {}, void 0, false, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 1361,
                    columnNumber: 31
                }, this);
            case 'risk':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RiskReport, {}, void 0, false, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 1362,
                    columnNumber: 31
                }, this);
            case 'resource':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ResourceReport, {}, void 0, false, {
                    fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                    lineNumber: 1363,
                    columnNumber: 31
                }, this);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            fontFamily: 'monospace',
            background: panelBg,
            minHeight: '100vh',
            color: textNormal
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .report-doc {
          background: white !important;
          color: #111827 !important;
        }
        .report-doc [style*="background: rgb(13, 17, 23)"],
        .report-doc [style*="background:rgb(13, 17, 23)"],
        .report-doc [style*="background: rgb(10, 12, 14)"],
        .report-doc [style*="background:rgb(10, 12, 14)"],
        .report-doc [style*="background:#0d1117"],
        .report-doc [style*="background: #0d1117"],
        .report-doc [style*="background:#0a0c0e"],
        .report-doc [style*="background: #0a0c0e"] {
          background: white !important;
          box-shadow: none !important;
        }
        .report-doc [style*="color: rgb(201, 209, 217)"],
        .report-doc [style*="color:rgb(201, 209, 217)"],
        .report-doc [style*="color: rgb(230, 237, 243)"],
        .report-doc [style*="color:rgb(230, 237, 243)"],
        .report-doc [style*="color:#c9d1d9"],
        .report-doc [style*="color: #c9d1d9"],
        .report-doc [style*="color:#e6edf3"],
        .report-doc [style*="color: #e6edf3"] {
          color: #111827 !important;
        }
        .report-doc [style*="border-color: rgb(33, 38, 45)"],
        .report-doc [style*="border-color:rgb(33, 38, 45)"],
        .report-doc [style*="border-bottom: 1px solid rgb(22, 27, 34)"],
        .report-doc [style*="border-bottom:1px solid rgb(22, 27, 34)"],
        .report-doc [style*="border-top: 1px solid rgb(33, 38, 45)"],
        .report-doc [style*="border-top:1px solid rgb(33, 38, 45)"],
        .report-doc [style*="border:#21262d"],
        .report-doc [style*="border: 1px solid #21262d"],
        .report-doc [style*="borderBottom: '1px solid #21262d'"],
        .report-doc [style*="borderBottom: 1px solid #21262d"],
        .report-doc [style*="borderTop: '1px solid #21262d'"],
        .report-doc [style*="borderTop: 1px solid #21262d"] {
          border-color: #d1d5db !important;
        }
        @media print {
          .no-print { display: none !important; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          html, body { background: white !important; }
          body { color: black !important; }
          .print-area { background: white !important; color: black !important; padding: 20px; }
          .report-doc,
          .report-doc * {
            box-shadow: none !important;
          }
          @page { margin: 12mm; size: A4; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                lineNumber: 1369,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "no-print",
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '14px 28px',
                    borderBottom: '1px solid ' + borderCol,
                    background: hBg
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 16
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.back(),
                                style: {
                                    background: 'transparent',
                                    border: '1px solid ' + (isDark ? '#30363d' : '#cbd5e1'),
                                    borderRadius: 6,
                                    color: isDark ? '#8b949e' : '#475569',
                                    cursor: 'pointer',
                                    fontWeight: 700,
                                    fontSize: 12,
                                    padding: '5px 12px',
                                    fontFamily: 'monospace'
                                },
                                children: "← Back"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                lineNumber: 1426,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 11,
                                            color: textMuted
                                        },
                                        children: [
                                            project.project_code,
                                            " · Reports"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 1428,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 16,
                                            fontWeight: 800,
                                            color: textHeader,
                                            fontFamily: 'sans-serif'
                                        },
                                        children: project.project_name
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                        lineNumber: 1429,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                lineNumber: 1427,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                        lineNumber: 1425,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 10,
                            alignItems: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                compact: true
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                lineNumber: 1433,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handlePrint,
                                style: {
                                    background: '#f59e0b',
                                    border: 'none',
                                    borderRadius: 6,
                                    color: '#0a0c0e',
                                    cursor: 'pointer',
                                    fontWeight: 700,
                                    fontSize: 12,
                                    padding: '8px 18px',
                                    fontFamily: 'monospace'
                                },
                                children: "Export PDF"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                lineNumber: 1434,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                        lineNumber: 1432,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                lineNumber: 1424,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "no-print",
                style: {
                    display: 'flex',
                    gap: 0,
                    borderBottom: '1px solid ' + borderCol,
                    padding: '0 28px',
                    background: hBg,
                    overflowX: 'auto'
                },
                children: Object.entries(REPORT_META).map(([key, m])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveReport(key),
                        style: {
                            padding: '12px 18px',
                            cursor: 'pointer',
                            fontSize: 12,
                            fontWeight: 600,
                            background: 'none',
                            border: 'none',
                            borderBottom: `2px solid ${activeReport === key ? m.color : 'transparent'}`,
                            color: activeReport === key ? m.color : textMuted,
                            whiteSpace: 'nowrap'
                        },
                        children: m.label
                    }, key, false, {
                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                        lineNumber: 1443,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                lineNumber: 1441,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "no-print",
                style: {
                    padding: '10px 28px',
                    borderBottom: '1px solid ' + borderCol,
                    background: hBg,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 11,
                            color: textMuted
                        },
                        children: meta.desc
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                        lineNumber: 1455,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 11,
                            color: textMuted
                        },
                        children: [
                            "For: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: meta.color
                                },
                                children: meta.audience
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                lineNumber: 1456,
                                columnNumber: 62
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                        lineNumber: 1456,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                lineNumber: 1454,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "report-doc print-area",
                ref: printRef,
                style: {
                    padding: '28px 32px',
                    maxWidth: 1100,
                    margin: '0 auto',
                    background: 'white',
                    color: '#111827'
                },
                children: [
                    renderReport(),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 32,
                            paddingTop: 12,
                            borderTop: '2px solid #f59e0b33',
                            display: 'flex',
                            justifyContent: 'space-between',
                            fontSize: 10,
                            color: '#6b7280',
                            background: 'white',
                            borderRadius: '0 0 8px 8px',
                            padding: '10px 16px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "CPOS  Construction Project Operating System  ",
                                    project.project_code
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                lineNumber: 1463,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Generated: ",
                                    reportDate
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                                lineNumber: 1464,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                        lineNumber: 1462,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
                lineNumber: 1460,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/[projectid]/reports/page.tsx",
        lineNumber: 1368,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0f8074ab._.js.map