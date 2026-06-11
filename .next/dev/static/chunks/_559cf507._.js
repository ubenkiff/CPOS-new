(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/access.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PUBLIC_VIEWONLY_PROJECT_ID",
    ()=>PUBLIC_VIEWONLY_PROJECT_ID,
    "canAccessProject",
    ()=>canAccessProject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/theme.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
// Memory cache to sync state across different mounted hooks without context boilerplate
let globalTheme = 'black';
const listeners = new Set();
// Load initial theme on client startup as soon as modules resolve
if ("TURBOPACK compile-time truthy", 1) {
    try {
        const saved = localStorage.getItem('cpos-theme');
        if (saved === 'white' || saved === 'black') {
            globalTheme = saved;
        } else {
            const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
            globalTheme = prefersLight ? 'white' : 'black';
        }
        // Set class lists instantly
        if (globalTheme === 'white') {
            document.documentElement.classList.add('white-theme-loaded');
        } else {
            document.documentElement.classList.remove('white-theme-loaded');
        }
    } catch (e) {}
}
function useTheme() {
    _s();
    const [theme, setThemeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(globalTheme);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTheme.useEffect": ()=>{
            // Synchronize to memory state
            setThemeState(globalTheme);
            const handleChange = {
                "useTheme.useEffect.handleChange": (newTheme)=>{
                    setThemeState(newTheme);
                }
            }["useTheme.useEffect.handleChange"];
            listeners.add(handleChange);
            return ({
                "useTheme.useEffect": ()=>{
                    listeners.delete(handleChange);
                }
            })["useTheme.useEffect"];
        }
    }["useTheme.useEffect"], []);
    const changeTheme = (newTheme)=>{
        globalTheme = newTheme;
        if ("TURBOPACK compile-time truthy", 1) {
            try {
                localStorage.setItem('cpos-theme', newTheme);
                // Dynamically add visual classes to html DOM
                if (newTheme === 'white') {
                    document.documentElement.classList.add('white-theme-loaded');
                } else {
                    document.documentElement.classList.remove('white-theme-loaded');
                }
            } catch (err) {}
        }
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
_s(useTheme, "S0vMne2XYxiLhIpmhuVLhn6Ah9A=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ThemeSelector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.mjs [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.mjs [app-client] (ecmascript) <export default as Moon>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ThemeSelector({ theme: propTheme, setTheme: propSetTheme, compact = false }) {
    _s();
    const themeContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const theme = propTheme || themeContext.theme;
    const setTheme = propSetTheme || themeContext.setTheme;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `inline-flex items-center gap-1 p-1 rounded-xl transition-all duration-300 ${theme === 'black' ? 'bg-[#161b22] border border-[#30363d] text-slate-400' : 'bg-slate-100 border border-slate-200 text-slate-600'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setTheme('white'),
                type: "button",
                title: "Switch to beautiful white theme",
                className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-300 ${theme === 'white' ? 'bg-white text-slate-900 shadow-md shadow-slate-200Scale' : 'hover:text-slate-900 opacity-80 hover:opacity-100'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                        className: `w-3.5 h-3.5 ${theme === 'white' ? 'text-orange-500 fill-orange-500' : ''}`
                    }, void 0, false, {
                        fileName: "[project]/components/ThemeSelector.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    !compact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setTheme('black'),
                type: "button",
                title: "Switch to precision black theme",
                className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-300 ${theme === 'black' ? 'bg-slate-900 text-[#f59e0b] border border-orange-500/20 shadow-lg shadow-orange-500/10' : 'hover:text-slate-900 opacity-80 hover:opacity-100'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                        className: `w-3.5 h-3.5 ${theme === 'black' ? 'text-orange-500 fill-orange-500' : ''}`
                    }, void 0, false, {
                        fileName: "[project]/components/ThemeSelector.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    !compact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(ThemeSelector, "QKpyrxz1huyqA3B/4s/ZCIrtbNA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeSelector;
var _c;
__turbopack_context__.k.register(_c, "ThemeSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/dashboard/[projectid]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/supabase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$access$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/access.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.mjs [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.mjs [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-check-big.mjs [app-client] (ecmascript) <export default as CheckSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.mjs [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.mjs [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.mjs [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.mjs [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.mjs [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.mjs [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.mjs [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-open.mjs [app-client] (ecmascript) <export default as FolderOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ThemeSelector.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
const CATEGORIES = [
    'Labour',
    'Materials',
    'Plant',
    'Subcontractor',
    'Overhead',
    'Other'
];
const STATUS_OPTIONS = [
    'Active',
    'Planning',
    'On Hold',
    'Closed'
];
const PRIORITY_OPTIONS = [
    'Critical',
    'High',
    'Medium',
    'Low'
];
const statusColors = {
    Active: {
        bg: 'bg-emerald-50',
        text: 'text-emerald-700',
        dot: 'bg-emerald-500',
        ring: 'ring-emerald-600/20'
    },
    Planning: {
        bg: 'bg-indigo-50',
        text: 'text-indigo-700',
        dot: 'bg-indigo-500',
        ring: 'ring-indigo-600/20'
    },
    'On Hold': {
        bg: 'bg-amber-50',
        text: 'text-amber-700',
        dot: 'bg-amber-500',
        ring: 'ring-amber-600/20'
    },
    Closed: {
        bg: 'bg-slate-50',
        text: 'text-slate-600',
        dot: 'bg-slate-400',
        ring: 'ring-slate-600/20'
    }
};
const getStatusColors = (status, isDark)=>{
    if (isDark) {
        const darks = {
            Active: {
                bg: 'bg-emerald-950/40',
                text: 'text-emerald-400',
                dot: 'bg-emerald-400',
                ring: 'ring-emerald-500/20'
            },
            Planning: {
                bg: 'bg-indigo-950/40',
                text: 'text-indigo-400',
                dot: 'bg-indigo-400',
                ring: 'ring-indigo-500/20'
            },
            'On Hold': {
                bg: 'bg-amber-950/40',
                text: 'text-amber-400',
                dot: 'bg-amber-400',
                ring: 'ring-amber-500/30'
            },
            Closed: {
                bg: 'bg-zinc-900',
                text: 'text-zinc-400',
                dot: 'bg-zinc-400',
                ring: 'ring-zinc-850'
            }
        };
        return darks[status] || darks['Planning'];
    }
    return statusColors[status] || statusColors['Planning'];
};
function fmt(n, currency) {
    if (n >= 1000000) return `${currency} ${(n / 1000000).toFixed(2)}M`;
    if (n >= 1000) return `${currency} ${(n / 1000).toFixed(0)}K`;
    return `${currency} ${n.toLocaleString()}`;
}
function daysBetween(a, b) {
    return Math.round((new Date(b).getTime() - new Date(a).getTime()) / 86400000);
}
const emptyCostForm = {
    description: '',
    category: 'Materials',
    supplier: '',
    invoice_ref: '',
    amount: '',
    cost_date: new Date().toISOString().split('T')[0]
};
function ProjectDetail() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { theme, setTheme, isDark } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const projectid = params.projectid;
    const isPublicSolar = projectid === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$access$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLIC_VIEWONLY_PROJECT_ID"];
    const [project, setProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [metrics, setMetrics] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [timeline, setTimeline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [tasks, setTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sowTasks, setSowTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [costs, setCosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('overview');
    const [showCostForm, setShowCostForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [costForm, setCostForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        ...emptyCostForm
    });
    const [savingCost, setSavingCost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [costError, setCostError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const templateInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [templateImporting, setTemplateImporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [templateImportMsg, setTemplateImportMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [templateImportError, setTemplateImportError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [templateDownloading, setTemplateDownloading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showExportMenu, setShowExportMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectDetail.useEffect": ()=>{
            if (!projectid) return;
            if (isPublicSolar) {
                fetchAll();
            } else {
                checkSessionAndLoad();
            }
        }
    }["ProjectDetail.useEffect"], [
        projectid
    ]);
    async function checkSessionAndLoad() {
        const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
        if (!user) {
            router.push(`/login?next=${encodeURIComponent(`/dashboard/${projectid}`)}`);
            return;
        }
        const { data: pRow, error: pErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('projects').select('projectid,user_id').eq('projectid', projectid).maybeSingle();
        if (pErr || !pRow) {
            router.push('/dashboard');
            return;
        }
        const canAccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$access$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canAccessProject"])({
            user,
            projectid,
            projectOwnerId: pRow?.user_id
        });
        if (!canAccess) {
            router.push('/pricing');
            return;
        }
        fetchAll();
    }
    async function fetchAll() {
        setLoading(true);
        const [pRes, mRes, tRes, taskRes, costRes, sowRes] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('projects').select('*').eq('projectid', projectid).maybeSingle(),
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('dashboard_metrics').select('*').eq('projectid', projectid).single(),
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('project_timeline').select('*').eq('projectid', projectid).order('sort_order'),
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('tasks').select('*').eq('projectid', projectid).order('due_date'),
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('cost_entries').select('*').eq('projectid', projectid).order('cost_date', {
                ascending: false
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('sow_items').select('*').eq('projectid', projectid).eq('hierarchy_level', 3).order('sow_number')
        ]);
        if (pRes.data) setProject(pRes.data);
        if (mRes.data) setMetrics(mRes.data);
        if (tRes.data) setTimeline(tRes.data);
        if (taskRes.data) setTasks(taskRes.data);
        if (costRes.data) setCosts(costRes.data);
        if (sowRes.data) setSowTasks(sowRes.data);
        setLoading(false);
    }
    async function handleAddCost(e) {
        e.preventDefault();
        if (isPublicSolar) {
            setCostError('Read-only demo mode.');
            return;
        }
        if (!costForm.description || !costForm.amount) {
            setCostError('Description and amount are required.');
            return;
        }
        setSavingCost(true);
        setCostError('');
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('cost_entries').insert([
            {
                projectid,
                cost_date: costForm.cost_date,
                description: costForm.description,
                category: costForm.category,
                supplier: costForm.supplier || null,
                invoice_ref: costForm.invoice_ref || null,
                amount: Number(costForm.amount),
                is_approved: false
            }
        ]);
        if (error) {
            setCostError(error.message);
            setSavingCost(false);
            return;
        }
        setCostForm({
            ...emptyCostForm
        });
        setShowCostForm(false);
        setSavingCost(false);
        fetchAll();
    }
    // Excel template upload functions
    function parseExcelDate(v) {
        if (v === null || v === undefined || v === '') return undefined;
        if (typeof v === 'string') {
            const trimmed = v.trim();
            if (!trimmed) return undefined;
            // Try parsing as a date string
            const d = new Date(trimmed);
            if (!isNaN(d.getTime())) {
                const iso = d.toISOString().split('T')[0];
                console.log(`[Date Parse] String "${trimmed}" -> ${iso}`);
                return iso;
            }
            // Try Excel serial number as string
            const numVal = parseFloat(trimmed);
            if (!isNaN(numVal)) {
                const excelDate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SSF"].parse_date_code(numVal);
                if (excelDate) {
                    const dt = new Date(Date.UTC(excelDate.y, excelDate.m - 1, excelDate.d));
                    const iso = dt.toISOString().split('T')[0];
                    console.log(`[Date Parse] Excel serial "${numVal}" -> ${iso}`);
                    return iso;
                }
            }
            console.warn(`[Date Parse] Failed to parse string date: "${trimmed}"`);
            return undefined;
        }
        if (typeof v === 'number') {
            const d = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SSF"].parse_date_code(v);
            if (!d) {
                console.warn(`[Date Parse] Failed to parse Excel serial date: ${v}`);
                return undefined;
            }
            const dt = new Date(Date.UTC(d.y, d.m - 1, d.d));
            const iso = dt.toISOString().split('T')[0];
            console.log(`[Date Parse] Excel serial ${v} -> ${iso}`);
            return iso;
        }
        return undefined;
    }
    function num(v) {
        if (v === null || v === undefined || v === '') return undefined;
        const n = typeof v === 'number' ? v : Number(String(v).replace(/,/g, ''));
        return Number.isFinite(n) ? n : undefined;
    }
    function pct(v) {
        const n = num(typeof v === 'string' ? v.replace(/%/g, '') : v);
        if (n === undefined) return undefined;
        const normalized = n > 0 && n <= 1 ? n * 100 : n;
        return Math.max(0, Math.min(100, normalized));
    }
    function pick(r, keys) {
        for (const k of keys){
            const v = r[k];
            if (v !== undefined && v !== null && v !== '') return v;
        }
        return undefined;
    }
    function getHeaderSet(ws) {
        const range = ws['!ref'] ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].decode_range(ws['!ref']) : null;
        const headers = new Set();
        if (!range) return headers;
        const headerRow = 3;
        for(let c = range.s.c; c <= range.e.c; c++){
            const addr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].encode_cell({
                r: headerRow,
                c
            });
            const cell = ws[addr];
            const v = cell?.v;
            if (typeof v === 'string') {
                const s = v.trim();
                if (s) headers.add(s);
            }
        }
        return headers;
    }
    function resolveHeader(headers, keys) {
        return keys.find((k)=>headers.has(k));
    }
    function validateTemplateHeaders(headers) {
        const missing = [];
        const requiredGroups = [
            {
                label: 'SOW number (Serial / SOW #)',
                keys: [
                    'Serial',
                    'SOW #'
                ]
            },
            {
                label: 'Scope (Scope / Scope (L1))',
                keys: [
                    'Scope',
                    'Scope (L1)'
                ]
            },
            {
                label: 'Item (Item / Item (L2))',
                keys: [
                    'Item',
                    'Item (L2)'
                ]
            },
            {
                label: 'Sub Item (Sub Item / Sub Item (L3))',
                keys: [
                    'Sub Item',
                    'Sub Item (L3)'
                ]
            }
        ];
        for (const g of requiredGroups){
            if (!resolveHeader(headers, g.keys)) missing.push(g.label);
        }
        return missing;
    }
    function mapSowStatusToTaskStatus(sowStatus) {
        const s = sowStatus.toLowerCase();
        if (s.includes('complet')) return 'Done';
        if (s.includes('progress')) return 'In Progress';
        if (s.includes('delay') || s.includes('blocked') || s.includes('waiting')) return 'Blocked';
        return 'Open';
    }
    function normalizeSowStatus(raw) {
        const s = String(raw ?? '').trim();
        if (!s) return 'Not Started';
        const v = s.toLowerCase();
        if (v === 'complete' || v === 'completed' || v === 'done' || v === 'finished') return 'Complete';
        if (v.includes('progress') || v === 'started' || v === 'ongoing') return 'In Progress';
        if (v.includes('hold') || v.includes('paused')) return 'On Hold';
        if (v.includes('delay') || v.includes('behind') || v.includes('late') || v.includes('overdue') || v.includes('block') || v.includes('waiting')) return 'Delayed';
        if (v.includes('not started') || v === 'open' || v === 'todo' || v === 'new') return 'Not Started';
        const allowed = [
            'Not Started',
            'In Progress',
            'Complete',
            'On Hold',
            'Delayed'
        ];
        return allowed.find((opt)=>opt.toLowerCase() === v) ?? 'Not Started';
    }
    function normalizeRisk(raw) {
        const s = String(raw ?? '').trim();
        if (!s) return undefined;
        const v = s.toLowerCase();
        if (v.startsWith('low')) return 'Low';
        if (v.startsWith('med')) return 'Medium';
        if (v.startsWith('high')) return 'High';
        if (v.startsWith('crit')) return 'Critical';
        const allowed = [
            'Low',
            'Medium',
            'High',
            'Critical'
        ];
        return allowed.find((opt)=>opt.toLowerCase() === v) ?? undefined;
    }
    function normalizeDepType(raw) {
        const s = String(raw ?? '').trim();
        if (!s) return 'FS';
        const v = s.toUpperCase();
        return [
            'FS',
            'SF',
            'SS',
            'FF'
        ].includes(v) ? v : 'FS';
    }
    async function handleUploadMasterTemplate(file) {
        if (isPublicSolar) {
            setTemplateImportError('This is a public read-only demo project. Upload is disabled.');
            return;
        }
        setTemplateImportError('');
        setTemplateImportMsg('Reading Excel...');
        setTemplateImporting(true);
        try {
            const ab = await file.arrayBuffer();
            const wb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["read"](ab, {
                type: 'array'
            });
            const sheetName = wb.SheetNames.find((n)=>n.trim().toLowerCase() === 'master sow');
            if (!sheetName) throw new Error('Sheet "MASTER SOW" not found in the workbook.');
            const ws = wb.Sheets[sheetName];
            const headerSet = getHeaderSet(ws);
            const missing = validateTemplateHeaders(headerSet);
            if (missing.length) {
                const found = Array.from(headerSet).slice(0, 40).join(', ');
                throw new Error(`Template headers not recognized. Missing: ${missing.join(' | ')}. Found headers: ${found}`);
            }
            const rows = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].sheet_to_json(ws, {
                range: 3,
                defval: ''
            });
            const mapped = rows.map((r)=>{
                const sowNumber = String(pick(r, [
                    'Serial',
                    'SOW #'
                ]) ?? '').trim();
                if (!sowNumber) return null;
                if (sowNumber.toUpperCase() === 'TOTALS') return null;
                const scope = String(pick(r, [
                    'Scope',
                    'Scope (L1)'
                ]) ?? '').trim();
                const item = String(pick(r, [
                    'Item',
                    'Item (L2)'
                ]) ?? '').trim();
                const subItem = String(pick(r, [
                    'Sub Item',
                    'Sub Item (L3)'
                ]) ?? '').trim();
                const particulars = String(pick(r, [
                    'Particulars',
                    'Particulars / Spec'
                ]) ?? '').trim();
                const hierarchyLevel = sowNumber.split('.').length;
                const hl = hierarchyLevel >= 3 ? 3 : hierarchyLevel === 2 ? 2 : 1;
                const plannedStart = parseExcelDate(pick(r, [
                    'Planned Start'
                ]));
                const plannedDays = num(pick(r, [
                    'Planned Days'
                ]));
                const plannedEnd = parseExcelDate(pick(r, [
                    'Planned Completion',
                    'Planned End'
                ]));
                const baselineStart = parseExcelDate(pick(r, [
                    'Baseline Start'
                ]));
                const baselineDays = num(pick(r, [
                    'Baseline Days'
                ]));
                const baselineEnd = parseExcelDate(pick(r, [
                    'Baseline Completion',
                    'Baseline End'
                ]));
                const actualStart = parseExcelDate(pick(r, [
                    'Actual Start'
                ]));
                const actualEnd = parseExcelDate(pick(r, [
                    'Actual Completion',
                    'Actual End'
                ]));
                const actualDays = num(pick(r, [
                    'Actual Days Taken',
                    'Actual Days'
                ]));
                const pctComplete = pct(pick(r, [
                    '% Complete'
                ]));
                const critical = String(pick(r, [
                    'Critical Path'
                ]) ?? '').trim().toLowerCase();
                const unit = String(pick(r, [
                    'Unit'
                ]) ?? '').trim();
                const quantity = num(pick(r, [
                    'Quantity'
                ]));
                const wastePct = num(pick(r, [
                    'Waste %'
                ]));
                const unitRate = num(pick(r, [
                    'Unit Rate'
                ]));
                const netQty = num(pick(r, [
                    'Net Qty'
                ]));
                const boqAmount = num(pick(r, [
                    'BOQ Amount'
                ]));
                const estCost = num(pick(r, [
                    'Estimated Cost',
                    'Est. Cost'
                ]));
                const actCost = num(pick(r, [
                    'Actual Cost'
                ]));
                const schedVar = num(pick(r, [
                    'Variance (Planned vs. Baseline)',
                    'Schedule Var (d)'
                ]));
                const costVar = num(pick(r, [
                    'Cost Variance'
                ]));
                const payload = {
                    projectid,
                    sow_number: sowNumber,
                    hierarchy_level: hl,
                    scope_l1: scope || undefined,
                    item_l2: item || undefined,
                    sub_item_l3: subItem || undefined,
                    particulars: particulars || undefined,
                    assigned_to: String(pick(r, [
                        'Assigned To'
                    ]) ?? '').trim() || undefined,
                    planned_start: plannedStart,
                    planned_days: plannedDays,
                    planned_end: plannedEnd,
                    baseline_start: baselineStart,
                    baseline_days: baselineDays,
                    baseline_end: baselineEnd,
                    actual_start: actualStart,
                    actual_days: actualDays,
                    actual_end: actualEnd,
                    percent_complete: pctComplete,
                    schedule_variance: schedVar,
                    is_critical_path: critical === 'yes' || critical === 'true' || critical === '1',
                    unit: unit || undefined,
                    quantity,
                    waste_pct: wastePct,
                    net_qty: netQty,
                    unit_rate: unitRate,
                    boq_amount: boqAmount,
                    estimated_cost: estCost,
                    actual_cost: actCost,
                    cost_variance: costVar,
                    risk_level: normalizeRisk(pick(r, [
                        'Risk Level'
                    ])),
                    status: normalizeSowStatus(pick(r, [
                        'Status'
                    ])),
                    dep_on: String(pick(r, [
                        'Dependent On',
                        'Dep. On (SOW#)'
                    ]) ?? '').trim() || undefined,
                    dep_type: normalizeDepType(pick(r, [
                        'Dependency Type',
                        'Dep. Type'
                    ])),
                    notes: String(pick(r, [
                        'Notes'
                    ]) ?? '').trim() || undefined,
                    plant: String(pick(r, [
                        'Plant'
                    ]) ?? '').trim() || undefined,
                    site_equipment: String(pick(r, [
                        'Site Equipment',
                        'Site Equip.'
                    ]) ?? '').trim() || undefined,
                    manpower: String(pick(r, [
                        'Manpower',
                        'Resources'
                    ]) ?? '').trim() || undefined
                };
                Object.keys(payload).forEach((k)=>{
                    if (payload[k] === '' || payload[k] === null || payload[k] === undefined) delete payload[k];
                });
                return payload;
            }).filter(Boolean);
            if (mapped.length === 0) {
                throw new Error('No valid SOW rows found. Ensure the template uses the MASTER SOW sheet and contains a Serial column.');
            }
            setTemplateImportMsg('Clearing existing SOW items...');
            const { error: delErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('sow_items').delete().eq('projectid', projectid);
            if (delErr) throw new Error(delErr.message);
            setTemplateImportMsg(`Importing ${mapped.length} rows...`);
            const BATCH = 250;
            for(let i = 0; i < mapped.length; i += BATCH){
                const slice = mapped.slice(i, i + BATCH);
                const { error: insErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('sow_items').insert(slice);
                if (insErr) throw new Error(insErr.message);
                setTemplateImportMsg(`Imported ${Math.min(mapped.length, i + BATCH)} / ${mapped.length}...`);
            }
            setTemplateImportMsg('Import complete. Refreshing...');
            // Sync L1 scope items into the standalone tasks table as punch tasks.
            const l1Rows = mapped.filter((r)=>r.hierarchy_level === 1);
            if (l1Rows.length > 0) {
                setTemplateImportMsg('Syncing L1 scopes to punch list...');
                await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('tasks').delete().eq('projectid', projectid).like('source_ref', 'cpos-l1-%');
                const punchTasks = l1Rows.map((r)=>({
                        projectid,
                        title: String(r.scope_l1 || r.sow_number),
                        priority: 'Medium',
                        status: mapSowStatusToTaskStatus(String(r.status || 'Not Started')),
                        due_date: r.planned_end || r.baseline_end || null,
                        assigned_to: r.assigned_to || null,
                        source_ref: `cpos-l1-${r.sow_number}`
                    }));
                await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('tasks').insert(punchTasks);
            }
            await fetchAll();
            setTemplateImportMsg('');
        } catch (e) {
            setTemplateImportError(e instanceof Error ? e.message : 'Upload failed');
        } finally{
            setTemplateImporting(false);
        }
    }
    async function handleDownloadTemplate() {
        if (isPublicSolar) return;
        setTemplateDownloading(true);
        try {
            const res = await fetch('/api/template/download');
            if (res.status === 403) {
                window.location.href = '/pricing';
                return;
            }
            if (!res.ok) throw new Error('Download failed');
            const { url } = await res.json();
            const a = document.createElement('a');
            a.href = url;
            a.download = 'CPOS_Master_Template_with_Form.xlsm';
            a.click();
        } catch  {
            setTemplateImportError('Could not download template. Please try again.');
        } finally{
            setTemplateDownloading(false);
        }
    }
    async function handleExport(format) {
        setShowExportMenu(false);
        try {
            const res = await fetch(`/api/export/${projectid}?format=${format}`);
            if (!res.ok) throw new Error('Export failed');
            const blob = await res.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${project.project_name.replace(/\s+/g, '_')}.${format === 'mspdi' ? 'xml' : 'xer'}`;
            a.click();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Export error:', error);
            alert('Export failed. Please try again.');
        }
    }
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `min-h-screen flex items-center justify-center font-sans ${isDark ? 'bg-[#0a0c0e] text-[#c9d1d9]' : 'bg-[#F8FAFC]'}`,
            style: isDark ? {
                background: '#0a0c0e',
                backgroundImage: 'linear-gradient(rgba(96,165,250,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.025) 1px, transparent 1px)',
                backgroundSize: '32px 32px'
            } : {},
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    rotate: 360
                },
                transition: {
                    repeat: Infinity,
                    duration: 1,
                    ease: 'linear'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {
                    className: "w-10 h-10 text-orange-500"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                    lineNumber: 582,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                lineNumber: 581,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
            lineNumber: 571,
            columnNumber: 7
        }, this);
    }
    if (!project) return null;
    const totalSpent = costs.reduce((s, c)=>s + Number(c.amount), 0);
    const spentPct = project.budget > 0 ? Math.round(totalSpent / project.budget * 100) : 0;
    const progress = sowTasks.length > 0 ? Math.round(sowTasks.reduce((s, t)=>s + (t.percent_complete || 0), 0) / sowTasks.length) : metrics?.overall_progress || 0;
    const sc = getStatusColors(project.status, isDark);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-screen flex flex-col font-sans transition-all duration-300 ${isDark ? 'bg-[#0a0c0e] text-[#c9d1d9]' : 'bg-[#F8FAFC] text-slate-900'}`,
        style: isDark ? {
            background: '#0a0c0e',
            backgroundImage: 'linear-gradient(rgba(96,165,250,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.025) 1px, transparent 1px)',
            backgroundSize: '32px 32px'
        } : {},
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `sticky top-0 z-30 px-6 py-4 flex items-center justify-between transition-all duration-300 border-b ${isDark ? 'bg-[#0d1117]/90 border-[#21262d] backdrop-blur' : 'bg-white border-slate-200'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.push('/dashboard'),
                                className: `p-2 rounded-xl transition-colors ${isDark ? 'hover:bg-[#161b22] text-slate-400' : 'hover:bg-slate-100 text-slate-500'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                    lineNumber: 619,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                lineNumber: 613,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: `text-xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`,
                                                children: project.project_name
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                lineNumber: 623,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${sc.bg} ${sc.text} ring-1 ring-inset ${sc.ring}`,
                                                children: project.status
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                lineNumber: 624,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                        lineNumber: 622,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1",
                                        children: [
                                            project.project_code,
                                            " • ",
                                            project.location
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                        lineNumber: 628,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                lineNumber: 621,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                        lineNumber: 612,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex flex-col items-end",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-black text-slate-400 uppercase tracking-widest",
                                        children: "Progress"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                        lineNumber: 636,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-24 h-1.5 rounded-full overflow-hidden ${isDark ? 'bg-[#161b22]' : 'bg-slate-100'}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-full bg-orange-500 rounded-full",
                                                    style: {
                                                        width: `${progress}%`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                    lineNumber: 639,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                lineNumber: 638,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`,
                                                children: [
                                                    progress,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                lineNumber: 644,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                        lineNumber: 637,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                lineNumber: 635,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `h-8 w-px mx-2 ${isDark ? 'bg-[#21262d]' : 'bg-slate-200'}`
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                lineNumber: 647,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                theme: theme,
                                setTheme: setTheme,
                                compact: true
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                lineNumber: 648,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `p-2 rounded-xl transition-colors ${isDark ? 'hover:bg-[#161b22] text-slate-400' : 'hover:bg-slate-100 text-slate-500'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                    lineNumber: 650,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                lineNumber: 649,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                        lineNumber: 634,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                lineNumber: 609,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `px-6 overflow-x-auto whitespace-nowrap border-b transition-all duration-300 ${isDark ? 'bg-[#0d1117] border-[#21262d]' : 'bg-white border-slate-200'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto flex items-center gap-1",
                    children: [
                        [
                            {
                                id: 'overview',
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"],
                                label: 'Overview'
                            },
                            {
                                id: 'timeline',
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
                                label: 'Timeline'
                            },
                            {
                                id: 'tasks',
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"],
                                label: 'Tasks & SOW'
                            },
                            {
                                id: 'costs',
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
                                label: 'Cost Control'
                            }
                        ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab(tab.id),
                                className: `flex items-center gap-2 px-6 py-4 text-sm font-bold transition-all border-b-2 ${activeTab === tab.id ? 'text-orange-500 border-orange-550' + (isDark ? ' bg-orange-950/20' : ' bg-orange-50/30') : isDark ? 'text-slate-400 border-transparent hover:text-white' : 'text-slate-500 border-transparent hover:text-slate-900'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(tab.icon, {
                                        className: `w-4 h-4 ${activeTab === tab.id ? 'text-orange-600' : 'text-slate-400'}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                        lineNumber: 675,
                                        columnNumber: 15
                                    }, this),
                                    tab.label
                                ]
                            }, tab.id, true, {
                                fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                lineNumber: 666,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ml-auto flex items-center gap-2 py-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowExportMenu(!showExportMenu),
                                            className: `px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-sm ${isDark ? 'bg-slate-700 text-white hover:bg-slate-600' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                    lineNumber: 687,
                                                    columnNumber: 17
                                                }, this),
                                                "Export"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                            lineNumber: 681,
                                            columnNumber: 15
                                        }, this),
                                        showExportMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `absolute right-0 mt-2 w-48 rounded-xl shadow-lg border z-50 ${isDark ? 'bg-[#161b22] border-[#21262d]' : 'bg-white border-slate-200'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleExport('mspdi'),
                                                    className: "w-full px-4 py-3 text-left text-xs font-bold flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-[#21262d] rounded-t-xl",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                            className: "w-3.5 h-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                            lineNumber: 698,
                                                            columnNumber: 21
                                                        }, this),
                                                        "MS Project (XML)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                    lineNumber: 694,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleExport('xer'),
                                                    className: "w-full px-4 py-3 text-left text-xs font-bold flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-[#21262d] rounded-b-xl",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                            className: "w-3.5 h-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                            lineNumber: 705,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Primavera P6 (XER)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                    lineNumber: 701,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                            lineNumber: 691,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                    lineNumber: 680,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/dashboard/${projectid}/documents`,
                                    className: `px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-sm ${isDark ? 'bg-[#161b22] text-slate-300 border border-[#21262d] hover:bg-[#21262d]' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"], {
                                            className: "w-3.5 h-3.5 text-orange-500"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                            lineNumber: 717,
                                            columnNumber: 15
                                        }, this),
                                        "Documents"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                    lineNumber: 711,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/dashboard/${projectid}/reports`,
                                    className: `px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-sm ${isDark ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-orange-950/10' : 'bg-slate-900 text-white hover:bg-slate-800'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                            lineNumber: 726,
                                            columnNumber: 15
                                        }, this),
                                        "Generate Report"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                    lineNumber: 720,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                            lineNumber: 679,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                    lineNumber: 659,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                lineNumber: 656,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 max-w-7xl mx-auto w-full p-6 md:p-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    children: [
                        activeTab === 'overview' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 10
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: -10
                            },
                            className: "space-y-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col justify-between h-44",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-black text-slate-400 uppercase tracking-widest",
                                                    children: "Total Budget"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                    lineNumber: 747,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-3xl font-black text-slate-900 tracking-tight",
                                                            children: fmt(project.budget, project.currency)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                            lineNumber: 749,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-bold text-slate-400 mt-1",
                                                            children: "Project capital"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                            lineNumber: 750,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                    lineNumber: 748,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                            lineNumber: 746,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col justify-between h-44 group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-start",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] font-black text-slate-400 uppercase tracking-widest",
                                                            children: "Spent to date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                            lineNumber: 755,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `text-[10px] font-bold px-2 py-0.5 rounded-full ${spentPct > 100 ? 'bg-red-50 text-red-600' : 'bg-orange-50 text-orange-600'}`,
                                                            children: [
                                                                spentPct,
                                                                "% utilized"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                            lineNumber: 756,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                    lineNumber: 754,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: `text-3xl font-black tracking-tight ${spentPct > 100 ? 'text-red-500' : 'text-slate-900'}`,
                                                            children: fmt(totalSpent, project.currency)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                            lineNumber: 761,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full h-1.5 bg-slate-100 rounded-full mt-3 overflow-hidden",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `h-full transition-all duration-1000 ${spentPct > 100 ? 'bg-red-500' : 'bg-orange-500'}`,
                                                                style: {
                                                                    width: `${Math.min(100, spentPct)}%`
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                lineNumber: 765,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                            lineNumber: 764,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                    lineNumber: 760,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                            lineNumber: 753,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col justify-between h-44",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-black text-slate-400 uppercase tracking-widest",
                                                    children: "Open Tasks"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                    lineNumber: 773,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-3xl font-black text-slate-900 tracking-tight",
                                                            children: metrics?.open_tasks || 0
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                            lineNumber: 775,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-bold text-slate-400 mt-1 flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                    className: "w-3 h-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                    lineNumber: 777,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " Priority updates required"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                            lineNumber: 776,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                    lineNumber: 774,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                            lineNumber: 772,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col justify-between h-44",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-black text-slate-400 uppercase tracking-widest",
                                                    children: "Schedule status"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                    lineNumber: 782,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-2xl font-black text-emerald-600 tracking-tight flex items-center gap-2",
                                                            children: "Active"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                            lineNumber: 784,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-bold text-slate-400 mt-1",
                                                            children: "Healthy project velocity"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                            lineNumber: 787,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                    lineNumber: 783,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                            lineNumber: 781,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                    lineNumber: 745,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid lg:grid-cols-3 gap-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "lg:col-span-2 space-y-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white rounded-[40px] border border-slate-100 shadow-sm p-8 md:p-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between mb-8",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-2xl font-black tracking-tight",
                                                                    children: "Timeline Execution"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                    lineNumber: 798,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setActiveTab('timeline'),
                                                                    className: "text-sm font-bold text-orange-600 flex items-center gap-1",
                                                                    children: [
                                                                        "View Gantt ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                            lineNumber: 800,
                                                                            columnNumber: 36
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                    lineNumber: 799,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                            lineNumber: 797,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-6",
                                                            children: timeline.slice(0, 4).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "group cursor-pointer",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex justify-between items-center mb-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-sm font-bold text-slate-700",
                                                                                    children: item.activity_name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                                    lineNumber: 807,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-xs font-black text-slate-400 uppercase",
                                                                                    children: [
                                                                                        item.progress,
                                                                                        "%"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                                    lineNumber: 808,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                            lineNumber: 806,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-full h-2 bg-slate-50 border border-slate-100 rounded-full relative",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                                initial: {
                                                                                    width: 0
                                                                                },
                                                                                animate: {
                                                                                    width: `${item.progress}%`
                                                                                },
                                                                                transition: {
                                                                                    duration: 1,
                                                                                    ease: 'easeOut'
                                                                                },
                                                                                className: "h-full bg-slate-900 rounded-full"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                                lineNumber: 811,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                            lineNumber: 810,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, item.id, true, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                    lineNumber: 805,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                            lineNumber: 803,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                    lineNumber: 796,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white rounded-[40px] border border-slate-100 shadow-sm p-8 md:p-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between mb-8",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-2xl font-black tracking-tight",
                                                                    children: "Recent Punchlist"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                    lineNumber: 826,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setActiveTab('tasks'),
                                                                    className: "text-sm font-bold text-orange-600 flex items-center gap-1",
                                                                    children: [
                                                                        "Full List ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                            lineNumber: 828,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                    lineNumber: 827,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                            lineNumber: 825,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2",
                                                            children: tasks.slice(0, 5).map((task)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-4 p-4 hover:bg-slate-50 rounded-2xl transition-colors border border-transparent hover:border-slate-100",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `w-2 h-2 rounded-full ${task.status === 'Done' ? 'bg-emerald-500' : 'bg-slate-300'}`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                            lineNumber: 834,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm font-bold text-slate-900",
                                                                                    children: task.title
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                                    lineNumber: 836,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-[10px] font-bold text-slate-400 uppercase mt-0.5",
                                                                                    children: task.assigned_to || 'Unassigned'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                                    lineNumber: 837,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                            lineNumber: 835,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `text-[10px] font-black px-2 py-1 rounded-lg uppercase bg-slate-100 text-slate-500 border border-slate-200`,
                                                                            children: task.priority
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                            lineNumber: 839,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, task.task_id, true, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                    lineNumber: 833,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                            lineNumber: 831,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                    lineNumber: 824,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                            lineNumber: 794,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-slate-900 text-white rounded-[40px] p-10 overflow-hidden relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full -mr-16 -mt-16 blur-3xl"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                            lineNumber: 851,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-2xl font-black tracking-tight mb-6 relative z-10 text-white",
                                                            children: "Project Intel"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                            lineNumber: 852,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-6 relative z-10",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                                className: "w-5 h-5 text-orange-400"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                                lineNumber: 856,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                            lineNumber: 855,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-[10px] font-bold text-white/40 uppercase tracking-widest",
                                                                                    children: "Client"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                                    lineNumber: 859,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "font-bold text-white leading-tight",
                                                                                    children: project.client_name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                                    lineNumber: 860,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                            lineNumber: 858,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                    lineNumber: 854,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                                className: "w-5 h-5 text-teal-400"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                                lineNumber: 865,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                            lineNumber: 864,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-[10px] font-bold text-white/40 uppercase tracking-widest",
                                                                                    children: "Duration"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                                    lineNumber: 868,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "font-bold text-white leading-tight",
                                                                                    children: [
                                                                                        new Date(project.start_date).toLocaleDateString(),
                                                                                        " — ",
                                                                                        new Date(project.end_date).toLocaleDateString()
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                                    lineNumber: 869,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                            lineNumber: 867,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                    lineNumber: 863,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                                                className: "w-5 h-5 text-emerald-400"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                                lineNumber: 876,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                            lineNumber: 875,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-[10px] font-bold text-white/40 uppercase tracking-widest",
                                                                                    children: "Unit Rate Basis"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                                    lineNumber: 879,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "font-bold text-white leading-tight",
                                                                                    children: [
                                                                                        project.currency,
                                                                                        " / Standard"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                                    lineNumber: 880,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                            lineNumber: 878,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                    lineNumber: 874,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                            lineNumber: 853,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "w-full mt-10 py-4 bg-orange-500 text-white rounded-2xl font-bold hover:bg-orange-600 transition-all active:scale-95 text-center shadow-2xl shadow-orange-500/20",
                                                            children: "Download All Assets"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                            lineNumber: 884,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                    lineNumber: 850,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white border border-slate-100 rounded-[40px] p-10 flex flex-col items-center text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                            className: "w-12 h-12 text-blue-500 mb-6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                            lineNumber: 890,
                                                            columnNumber: 22
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-lg font-black tracking-tight text-slate-900",
                                                            children: "Need expert help?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                            lineNumber: 891,
                                                            columnNumber: 22
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-medium text-slate-500 mt-2 mb-8",
                                                            children: "Hire a certified Remote Project Manager to audit your SOW and Budget."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                            lineNumber: 892,
                                                            columnNumber: 22
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/hire-pm",
                                                            className: "text-sm font-bold text-orange-600 hover:orange-700 transition-colors",
                                                            children: "Hiring Dashboard →"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                            lineNumber: 895,
                                                            columnNumber: 22
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                    lineNumber: 889,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                            lineNumber: 849,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                    lineNumber: 793,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, "overview", true, {
                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                            lineNumber: 737,
                            columnNumber: 13
                        }, this),
                        activeTab === 'costs' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 10
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: -10
                            },
                            className: "space-y-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-3xl font-black tracking-tight",
                                                    children: "Cost Control Center"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                    lineNumber: 914,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-500 font-medium",
                                                    children: "Real-time expenditure tracking and budget variance analysis"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                    lineNumber: 915,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                            lineNumber: 913,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowCostForm(!showCostForm),
                                            className: "px-6 py-3 bg-slate-900 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-md active:scale-95",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                    lineNumber: 921,
                                                    columnNumber: 19
                                                }, this),
                                                showCostForm ? 'Cancel Entry' : 'Manual Cost Entry'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                            lineNumber: 917,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                    lineNumber: 912,
                                    columnNumber: 16
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    children: showCostForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            height: 0,
                                            opacity: 0
                                        },
                                        animate: {
                                            height: 'auto',
                                            opacity: 1
                                        },
                                        exit: {
                                            height: 0,
                                            opacity: 0
                                        },
                                        className: "overflow-hidden bg-white border border-slate-200 rounded-[32px] shadow-sm mb-10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: handleAddCost,
                                            className: "p-10 space-y-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "text-sm font-bold text-slate-700 ml-1 uppercase tracking-widest text-[10px]",
                                                                    children: "Cost Date"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                    lineNumber: 937,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "date",
                                                                    value: costForm.cost_date,
                                                                    onChange: (e)=>setCostForm({
                                                                            ...costForm,
                                                                            cost_date: e.target.value
                                                                        }),
                                                                    className: "w-full px-5 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-orange-500/20 focus:ring-4 focus:ring-orange-500/5 outline-none transition-all font-bold"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                    lineNumber: 938,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                            lineNumber: 936,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "text-sm font-bold text-slate-700 ml-1 uppercase tracking-widest text-[10px]",
                                                                    children: "Category"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                    lineNumber: 941,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: costForm.category,
                                                                    onChange: (e)=>setCostForm({
                                                                            ...costForm,
                                                                            category: e.target.value
                                                                        }),
                                                                    className: "w-full px-5 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-orange-500/20 focus:ring-4 focus:ring-orange-500/5 outline-none transition-all font-bold",
                                                                    children: CATEGORIES.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            children: c
                                                                        }, c, false, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                            lineNumber: 943,
                                                                            columnNumber: 50
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                    lineNumber: 942,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                            lineNumber: 940,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "text-sm font-bold text-slate-700 ml-1 uppercase tracking-widest text-[10px]",
                                                                    children: [
                                                                        "Amount (",
                                                                        project.currency,
                                                                        ")"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                    lineNumber: 947,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    value: costForm.amount,
                                                                    onChange: (e)=>setCostForm({
                                                                            ...costForm,
                                                                            amount: e.target.value
                                                                        }),
                                                                    placeholder: "0.00",
                                                                    className: "w-full px-5 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-orange-500/20 focus:ring-4 focus:ring-orange-500/5 outline-none transition-all font-bold"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                    lineNumber: 948,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                            lineNumber: 946,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "lg:col-span-3 space-y-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "text-sm font-bold text-slate-700 ml-1 uppercase tracking-widest text-[10px]",
                                                                    children: "Description"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                    lineNumber: 951,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: costForm.description,
                                                                    onChange: (e)=>setCostForm({
                                                                            ...costForm,
                                                                            description: e.target.value
                                                                        }),
                                                                    placeholder: "e.g. Site concrete for level 2 slab",
                                                                    className: "w-full px-5 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-orange-500/20 focus:ring-4 focus:ring-orange-500/5 outline-none transition-all font-bold"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                    lineNumber: 952,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                            lineNumber: 950,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                    lineNumber: 935,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-end pt-4 border-t border-slate-100 gap-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        className: "px-10 py-4 bg-orange-500 text-white rounded-2xl font-bold hover:bg-orange-600 shadow-xl shadow-orange-200 transition-all active:scale-95",
                                                        children: "Save Entry"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                        lineNumber: 956,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                    lineNumber: 955,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                            lineNumber: 934,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                        lineNumber: 928,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                    lineNumber: 926,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white border border-slate-100 rounded-[40px] shadow-sm overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "w-full text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "bg-slate-50 border-b border-slate-100",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest",
                                                            children: "Date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                            lineNumber: 967,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest",
                                                            children: "Description"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                            lineNumber: 968,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest",
                                                            children: "Category"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                            lineNumber: 969,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest",
                                                            children: "Amount"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                            lineNumber: 970,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right",
                                                            children: "Actions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                            lineNumber: 971,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                    lineNumber: 966,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                lineNumber: 965,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: [
                                                    costs.map((cost)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "border-b border-slate-50 last:border-none group hover:bg-slate-50/50 transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-8 py-6 text-sm font-bold text-slate-600",
                                                                    children: new Date(cost.cost_date).toLocaleDateString()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                    lineNumber: 977,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-8 py-6 text-sm font-black text-slate-900",
                                                                    children: cost.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                    lineNumber: 978,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-8 py-6",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "px-2 py-1 rounded-lg bg-slate-100 text-[10px] font-black text-slate-500 uppercase tracking-wider",
                                                                        children: cost.category
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                        lineNumber: 980,
                                                                        columnNumber: 28
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                    lineNumber: 979,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-8 py-6 text-base font-black text-slate-900",
                                                                    children: fmt(cost.amount, project.currency)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                    lineNumber: 982,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-8 py-6 text-right",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "p-2 opacity-0 group-hover:opacity-100 hover:bg-slate-200 rounded-lg transition-all text-slate-400",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                            lineNumber: 985,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                        lineNumber: 984,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                    lineNumber: 983,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, cost.cost_id, true, {
                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                            lineNumber: 976,
                                                            columnNumber: 23
                                                        }, this)),
                                                    costs.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            colSpan: 5,
                                                            className: "px-8 py-20 text-center text-slate-400 font-bold",
                                                            children: "No cost entries yet for this project."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                            lineNumber: 992,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                        lineNumber: 991,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                lineNumber: 974,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                        lineNumber: 964,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                    lineNumber: 963,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, "costs", true, {
                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                            lineNumber: 905,
                            columnNumber: 13
                        }, this),
                        activeTab === 'timeline' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 10
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: -10
                            },
                            className: "space-y-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white border border-slate-100 rounded-[40px] shadow-sm p-8 md:p-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between gap-4 mb-8 flex-wrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-2xl font-black tracking-tight",
                                                        children: "Project Schedule"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                        lineNumber: 1012,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-500 font-medium",
                                                        children: [
                                                            project.start_date,
                                                            " → ",
                                                            project.end_date
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                        lineNumber: 1013,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                lineNumber: 1011,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-3 items-center flex-wrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "px-4 py-2 border border-emerald-500/30 text-emerald-600 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-emerald-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                                        disabled: isPublicSolar || templateDownloading,
                                                        onClick: handleDownloadTemplate,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                lineNumber: 1021,
                                                                columnNumber: 23
                                                            }, this),
                                                            templateDownloading ? 'Preparing...' : 'Get Template'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                        lineNumber: 1016,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "px-4 py-2 bg-orange-500 text-white rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                                        disabled: isPublicSolar || templateImporting,
                                                        onClick: ()=>templateInputRef.current?.click(),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                lineNumber: 1029,
                                                                columnNumber: 23
                                                            }, this),
                                                            templateImporting ? 'Uploading...' : 'Upload Template'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                        lineNumber: 1024,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                lineNumber: 1015,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                        lineNumber: 1010,
                                        columnNumber: 17
                                    }, this),
                                    templateImportMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-2 bg-amber-50 border border-amber-200 rounded-lg text-amber-700 text-sm font-medium mb-4",
                                        children: templateImportMsg
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                        lineNumber: 1035,
                                        columnNumber: 19
                                    }, this),
                                    templateImportError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-2 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm font-medium mb-4",
                                        children: templateImportError
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                        lineNumber: 1040,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ref: templateInputRef,
                                        type: "file",
                                        accept: ".xlsx,.xlsm,.xls,.csv",
                                        style: {
                                            display: 'none'
                                        },
                                        onChange: (e)=>{
                                            const f = e.target.files?.[0];
                                            e.currentTarget.value = '';
                                            if (!f) return;
                                            void handleUploadMasterTemplate(f);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                        lineNumber: 1044,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center py-20 text-slate-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                className: "w-16 h-16 text-slate-200 mx-auto mb-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                lineNumber: 1057,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-medium",
                                                children: "No schedule data yet. Upload the CPOS Master Template to populate the timeline."
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                lineNumber: 1058,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                        lineNumber: 1056,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                lineNumber: 1009,
                                columnNumber: 15
                            }, this)
                        }, "timeline", false, {
                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                            lineNumber: 1002,
                            columnNumber: 13
                        }, this),
                        activeTab === 'tasks' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 10
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: -10
                            },
                            className: "space-y-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white border border-slate-100 rounded-[40px] shadow-sm p-8 md:p-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-black tracking-tight",
                                                children: "Tasks & SOW"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                lineNumber: 1074,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/dashboard/${projectid}/sow`,
                                                className: "text-sm font-bold text-orange-600 flex items-center gap-1",
                                                children: [
                                                    "Full SOW ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                        lineNumber: 1076,
                                                        columnNumber: 30
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                lineNumber: 1075,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                        lineNumber: 1073,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            tasks.slice(0, 5).map((task)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4 p-4 hover:bg-slate-50 rounded-2xl transition-colors border border-transparent hover:border-slate-100",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `w-2 h-2 rounded-full ${task.status === 'Done' ? 'bg-emerald-500' : 'bg-slate-300'}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                            lineNumber: 1082,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-bold text-slate-900",
                                                                    children: task.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                    lineNumber: 1084,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] font-bold text-slate-400 uppercase mt-0.5",
                                                                    children: task.assigned_to || 'Unassigned'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                                    lineNumber: 1085,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                            lineNumber: 1083,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `text-[10px] font-black px-2 py-1 rounded-lg uppercase bg-slate-100 text-slate-500 border border-slate-200`,
                                                            children: task.priority
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                            lineNumber: 1087,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, task.task_id, true, {
                                                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                    lineNumber: 1081,
                                                    columnNumber: 21
                                                }, this)),
                                            tasks.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center py-10 text-slate-400",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"], {
                                                        className: "w-12 h-12 text-slate-200 mx-auto mb-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                        lineNumber: 1094,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-medium",
                                                        children: "No tasks yet. Upload the CPOS Master Template to auto-generate tasks from SOW."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                        lineNumber: 1095,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                                lineNumber: 1093,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                        lineNumber: 1079,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                lineNumber: 1072,
                                columnNumber: 15
                            }, this)
                        }, "tasks", false, {
                            fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                            lineNumber: 1065,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                    lineNumber: 735,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                lineNumber: 734,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "bg-white border-t border-slate-200 px-6 py-4 flex items-center justify-between pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 rounded-full bg-emerald-500 shadow-lg shadow-emerald-200"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                        lineNumber: 1109,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-black text-slate-400 uppercase tracking-widest",
                                        children: "Database Sync: OK"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                        lineNumber: 1110,
                                        columnNumber: 14
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                lineNumber: 1108,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 rounded-full bg-emerald-500 shadow-lg shadow-emerald-200"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                        lineNumber: 1113,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-black text-slate-400 uppercase tracking-widest",
                                        children: "S3 Bucket: Connected"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                        lineNumber: 1114,
                                        columnNumber: 14
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                                lineNumber: 1112,
                                columnNumber: 12
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                        lineNumber: 1107,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none",
                        children: "CPOS 2026 • v3.4.1"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                        lineNumber: 1117,
                        columnNumber: 10
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/[projectid]/page.tsx",
                lineNumber: 1106,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/[projectid]/page.tsx",
        lineNumber: 598,
        columnNumber: 5
    }, this);
}
_s(ProjectDetail, "UdmBPohzsgwGJiGVF/L3Jqn9yNk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ProjectDetail;
var _c;
__turbopack_context__.k.register(_c, "ProjectDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_559cf507._.js.map