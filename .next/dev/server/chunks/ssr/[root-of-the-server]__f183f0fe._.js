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
"[project]/lib/gantt/dates.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addDays",
    ()=>addDays,
    "computeScheduleRange",
    ()=>computeScheduleRange,
    "daysBetween",
    ()=>daysBetween,
    "maxDate",
    ()=>maxDate,
    "minDate",
    ()=>minDate,
    "parseLocalDate",
    ()=>parseLocalDate,
    "resolveEnd",
    ()=>resolveEnd,
    "toDateStr",
    ()=>toDateStr
]);
function parseLocalDate(dateStr) {
    const [y, m, d] = dateStr.split('-').map(Number);
    return new Date(y, (m || 1) - 1, d || 1);
}
function addDays(dateStr, days) {
    const d = parseLocalDate(dateStr);
    d.setDate(d.getDate() + days);
    return toDateStr(d);
}
function daysBetween(a, b) {
    const da = parseLocalDate(a);
    const db = parseLocalDate(b);
    return Math.round((db.getTime() - da.getTime()) / 86400000);
}
function minDate(a, b) {
    return a <= b ? a : b;
}
function maxDate(a, b) {
    return a >= b ? a : b;
}
function toDateStr(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
}
function resolveEnd(item, field) {
    if (field === 'baseline') {
        if (item.baseline_end) return item.baseline_end;
        if (item.baseline_start && item.baseline_days) return addDays(item.baseline_start, item.baseline_days);
    }
    if (field === 'planned') {
        if (item.planned_end) return item.planned_end;
        if (item.planned_start && item.planned_days) return addDays(item.planned_start, item.planned_days);
    }
    if (field === 'actual') return item.actual_end;
    return undefined;
}
function computeScheduleRange(args) {
    const l3 = args.items.filter((r)=>Number(r.hierarchy_level) === 3);
    const hasSchedule = l3.filter((r)=>r.baseline_start || r.planned_start);
    const allStarts = hasSchedule.map((r)=>r.baseline_start || r.planned_start || args.projectStart).filter(Boolean);
    const allEnds = hasSchedule.map((r)=>resolveEnd(r, 'baseline') || resolveEnd(r, 'planned') || args.projectEnd).filter(Boolean);
    const rangeStart = allStarts.length > 0 ? allStarts.sort()[0] : args.projectStart;
    const rangeEnd = allEnds.length > 0 ? allEnds.sort().reverse()[0] : args.projectEnd;
    const span = daysBetween(rangeStart, rangeEnd);
    const totalDays = Math.max(1, span + 1);
    return {
        rangeStart,
        rangeEnd,
        totalDays,
        hasSchedule
    };
}
}),
"[project]/lib/gantt/barGeometry.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "barIntersectsWindow",
    ()=>barIntersectsWindow,
    "barStyleInWindow",
    ()=>barStyleInWindow,
    "clipBarToWindow",
    ()=>clipBarToWindow,
    "pctInWindow",
    ()=>pctInWindow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gantt/dates.ts [app-ssr] (ecmascript)");
;
function pctInWindow(dateStr, window) {
    if (window.totalDays <= 1) return 0;
    return Math.max(0, Math.min(100, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["daysBetween"])(window.start, dateStr) / (window.totalDays - 1) * 100));
}
function barIntersectsWindow(barStart, barEnd, window) {
    if (!barStart || !barEnd || !window) return false;
    return barStart <= window.end && barEnd >= window.start;
}
function clipBarToWindow(barStart, barEnd, window) {
    return {
        start: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maxDate"])(barStart, window.start),
        end: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["minDate"])(barEnd, window.end)
    };
}
function barStyleInWindow(barStart, barEnd, window, color, height, top, opacity = 1) {
    if (!barStart || !barEnd || !barIntersectsWindow(barStart, barEnd, window)) return null;
    const clipped = clipBarToWindow(barStart, barEnd, window);
    const left = pctInWindow(clipped.start, window);
    const width = Math.max(0.3, pctInWindow(clipped.end, window) - left);
    return {
        position: 'absolute',
        left: `${left}%`,
        width: `${width}%`,
        height,
        top,
        background: color,
        opacity,
        borderRadius: 2
    };
}
}),
"[project]/lib/gantt/timePages.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getColWidth",
    ()=>getColWidth,
    "splitTimelineIntoPages",
    ()=>splitTimelineIntoPages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gantt/dates.ts [app-ssr] (ecmascript)");
;
function makeWindow(index, start, end, label) {
    return {
        index,
        start,
        end,
        label,
        totalDays: Math.max(1, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["daysBetween"])(start, end) + 1)
    };
}
function formatMonthYear(d) {
    return d.toLocaleDateString('en-ZA', {
        month: 'short',
        year: 'numeric'
    });
}
function formatRangeLabel(start, end) {
    const s = new Date(start);
    const e = new Date(end);
    if (start === end) return formatMonthYear(s);
    return `${s.toLocaleDateString('en-ZA', {
        day: 'numeric',
        month: 'short',
        year: '2-digit'
    })} – ${e.toLocaleDateString('en-ZA', {
        day: 'numeric',
        month: 'short',
        year: '2-digit'
    })}`;
}
function splitFixedDays(rangeStart, rangeEnd, chunkDays, labelPrefix) {
    const pages = [];
    let cur = rangeStart;
    let index = 0;
    while(cur <= rangeEnd){
        const end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["minDate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDays"])(cur, chunkDays - 1), rangeEnd);
        pages.push(makeWindow(index, cur, end, `${labelPrefix} ${index + 1}: ${formatRangeLabel(cur, end)}`));
        cur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDays"])(end, 1);
        index += 1;
    }
    return pages;
}
function splitTimelineIntoPages(rangeStart, rangeEnd, mode) {
    if (!rangeStart || !rangeEnd || rangeStart > rangeEnd) {
        return [
            makeWindow(0, rangeStart || rangeEnd, rangeEnd || rangeStart, 'Schedule')
        ];
    }
    switch(mode){
        case 'week':
            return splitFixedDays(rangeStart, rangeEnd, 7, 'Week');
        case 'fortnight':
            return splitFixedDays(rangeStart, rangeEnd, 14, 'Fortnight');
        case 'month':
            {
                const pages = [];
                let cur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseLocalDate"])(rangeStart);
                const end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseLocalDate"])(rangeEnd);
                let index = 0;
                while(cur <= end){
                    const windowStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maxDate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDateStr"])(cur), rangeStart);
                    const lastDay = new Date(cur.getFullYear(), cur.getMonth() + 1, 0);
                    const windowEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["minDate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDateStr"])(lastDay), rangeEnd);
                    pages.push(makeWindow(index, windowStart, windowEnd, formatMonthYear(cur)));
                    cur = new Date(cur.getFullYear(), cur.getMonth() + 1, 1);
                    index += 1;
                }
                return pages;
            }
        case 'quarter':
            {
                const pages = [];
                let cur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseLocalDate"])(rangeStart);
                const end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseLocalDate"])(rangeEnd);
                let index = 0;
                while(cur <= end){
                    const q = Math.floor(cur.getMonth() / 3);
                    const qStart = new Date(cur.getFullYear(), q * 3, 1);
                    const qEnd = new Date(cur.getFullYear(), q * 3 + 3, 0);
                    const windowStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maxDate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDateStr"])(qStart), rangeStart);
                    const windowEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["minDate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDateStr"])(qEnd), rangeEnd);
                    pages.push(makeWindow(index, windowStart, windowEnd, `Q${q + 1} ${cur.getFullYear()}`));
                    cur = new Date(cur.getFullYear(), q * 3 + 3, 1);
                    index += 1;
                }
                return pages;
            }
        case 'half-year':
            {
                const pages = [];
                let cur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseLocalDate"])(rangeStart);
                const end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseLocalDate"])(rangeEnd);
                let index = 0;
                while(cur <= end){
                    const isH1 = cur.getMonth() < 6;
                    const hStart = new Date(cur.getFullYear(), isH1 ? 0 : 6, 1);
                    const hEnd = new Date(cur.getFullYear(), isH1 ? 6 : 12, 0);
                    const windowStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maxDate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDateStr"])(hStart), rangeStart);
                    const windowEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["minDate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDateStr"])(hEnd), rangeEnd);
                    pages.push(makeWindow(index, windowStart, windowEnd, `${isH1 ? 'H1' : 'H2'} ${cur.getFullYear()}`));
                    cur = new Date(cur.getFullYear(), isH1 ? 6 : 12, 1);
                    index += 1;
                }
                return pages;
            }
        case 'year':
            {
                const pages = [];
                let cur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseLocalDate"])(rangeStart);
                const end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseLocalDate"])(rangeEnd);
                let index = 0;
                while(cur <= end){
                    const yStart = new Date(cur.getFullYear(), 0, 1);
                    const yEnd = new Date(cur.getFullYear(), 11, 31);
                    const windowStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["maxDate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDateStr"])(yStart), rangeStart);
                    const windowEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["minDate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDateStr"])(yEnd), rangeEnd);
                    pages.push(makeWindow(index, windowStart, windowEnd, String(cur.getFullYear())));
                    cur = new Date(cur.getFullYear() + 1, 0, 1);
                    index += 1;
                }
                return pages;
            }
        default:
            return [
                makeWindow(0, rangeStart, rangeEnd, formatRangeLabel(rangeStart, rangeEnd))
            ];
    }
}
function getColWidth(mode) {
    switch(mode){
        case 'week':
            return 32;
        case 'fortnight':
            return 24;
        case 'month':
            return 24;
        case 'quarter':
            return 14;
        case 'half-year':
            return 8;
        case 'year':
            return 4;
        default:
            return 24;
    }
}
}),
"[project]/lib/gantt/headers.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dayDatesInWindow",
    ()=>dayDatesInWindow,
    "generateWindowHeaders",
    ()=>generateWindowHeaders,
    "shouldShowDayTick",
    ()=>shouldShowDayTick,
    "timelineWidth",
    ()=>timelineWidth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gantt/dates.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$timePages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gantt/timePages.ts [app-ssr] (ecmascript)");
;
;
function generateWindowHeaders(window, mode) {
    const segments = [];
    if (mode === 'week' || mode === 'fortnight') {
        const cur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseLocalDate"])(window.start);
        const end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseLocalDate"])(window.end);
        while(cur <= end){
            const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDateStr"])(cur);
            const daysInMonth = new Date(cur.getFullYear(), cur.getMonth() + 1, 0).getDate();
            const remaining = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["daysBetween"])(start, window.end) + 1;
            const days = Math.min(daysInMonth - cur.getDate() + 1, remaining);
            segments.push({
                label: cur.toLocaleDateString('en-ZA', {
                    month: 'short',
                    year: '2-digit'
                }),
                days,
                start
            });
            cur.setMonth(cur.getMonth() + 1);
            cur.setDate(1);
        }
        return segments;
    }
    if (mode === 'month') {
        segments.push({
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseLocalDate"])(window.start).toLocaleDateString('en-ZA', {
                month: 'short',
                year: 'numeric'
            }),
            days: window.totalDays,
            start: window.start
        });
        return segments;
    }
    if (mode === 'quarter') {
        const cur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseLocalDate"])(window.start);
        while(cur <= (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseLocalDate"])(window.end)){
            const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDateStr"])(cur);
            const nextMonth = new Date(cur.getFullYear(), cur.getMonth() + 1, 1);
            const monthEnd = new Date(nextMonth.getTime() - 86400000);
            const end = monthEnd > (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseLocalDate"])(window.end) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseLocalDate"])(window.end) : monthEnd;
            const days = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["daysBetween"])(start, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDateStr"])(end)) + 1;
            segments.push({
                label: cur.toLocaleDateString('en-ZA', {
                    month: 'short'
                }),
                days,
                start
            });
            cur.setMonth(cur.getMonth() + 1);
            cur.setDate(1);
        }
        return segments;
    }
    if (mode === 'half-year' || mode === 'year') {
        const cur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseLocalDate"])(window.start);
        while(cur <= (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseLocalDate"])(window.end)){
            const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDateStr"])(cur);
            const nextMonth = new Date(cur.getFullYear(), cur.getMonth() + 1, 1);
            const monthEnd = new Date(nextMonth.getTime() - 86400000);
            const end = monthEnd > (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseLocalDate"])(window.end) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseLocalDate"])(window.end) : monthEnd;
            const days = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["daysBetween"])(start, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toDateStr"])(end)) + 1;
            segments.push({
                label: cur.toLocaleDateString('en-ZA', {
                    month: 'short',
                    year: mode === 'year' ? '2-digit' : undefined
                }),
                days,
                start
            });
            cur.setMonth(cur.getMonth() + 1);
            cur.setDate(1);
        }
        return segments;
    }
    segments.push({
        label: window.label,
        days: window.totalDays,
        start: window.start
    });
    return segments;
}
function shouldShowDayTick(mode, dayNum) {
    if (mode === 'quarter' || mode === 'half-year' || mode === 'year') return false;
    if (mode === 'week') return true;
    if (mode === 'fortnight') return dayNum === 1 || dayNum % 7 === 0;
    return dayNum === 1 || dayNum === 8 || dayNum === 15 || dayNum === 22;
}
function timelineWidth(window, mode) {
    return window.totalDays * (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$timePages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getColWidth"])(mode);
}
function dayDatesInWindow(window) {
    return Array.from({
        length: window.totalDays
    }, (_, d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDays"])(window.start, d));
}
}),
"[project]/lib/gantt/rows.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildGanttRows",
    ()=>buildGanttRows,
    "getItemLabel",
    ()=>getItemLabel
]);
function levelOf(item) {
    return Number(item.hierarchy_level);
}
function getChildrenByPrefix(items, parent, childLevel) {
    const prefix = `${parent.sow_number}.`;
    return items.filter((item)=>{
        if (levelOf(item) !== childLevel) return false;
        if (!item.sow_number.startsWith(prefix)) return false;
        return item.sow_number.split('.').length === childLevel;
    });
}
function getItemLabel(item) {
    const level = levelOf(item);
    if (level === 1) return item.scope_l1 || item.sow_number;
    if (level === 2) return item.item_l2 || item.sow_number;
    return item.sub_item_l3 || item.particulars || item.sow_number;
}
function buildGanttRows(args) {
    const l1Items = args.items.filter((r)=>levelOf(r) === 1);
    const l2Items = args.items.filter((r)=>levelOf(r) === 2);
    const l3Items = args.items.filter((r)=>levelOf(r) === 3);
    const collapsed = args.collapsedL1 ?? new Set();
    const rows = [];
    l1Items.forEach((l1)=>{
        rows.push({
            item: l1,
            level: 1
        });
        if (collapsed.has(l1.sow_id)) return;
        getChildrenByPrefix(l2Items, l1, 2).forEach((l2)=>{
            rows.push({
                item: l2,
                level: 2
            });
            let tasks = getChildrenByPrefix(l3Items, l2, 3);
            if (!args.includeUnscheduledL3) {
                tasks = tasks.filter((l3)=>l3.baseline_start || l3.planned_start);
            }
            if (args.showCriticalOnly) {
                tasks = tasks.filter((t)=>t.is_critical_path);
            }
            tasks.forEach((l3)=>rows.push({
                    item: l3,
                    level: 3
                }));
        });
    });
    return rows;
}
}),
"[project]/components/gantt/GanttChartPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GanttChartPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gantt/dates.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$barGeometry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gantt/barGeometry.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$headers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gantt/headers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$rows$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gantt/rows.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$timePages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gantt/timePages.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function GanttChartPanel({ window, viewMode, rows, theme, toggles, today, rowH = 36, labelW = 280, compact = false, fitWidth = false, collapsedL1, onToggleL1, pageLabel }) {
    const { isDark, hBg, panelBg, borderCol, gridCol, textNormal, textMuted, textHeader } = theme;
    const colW = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$timePages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getColWidth"])(viewMode);
    const headers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$headers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateWindowHeaders"])(window, viewMode);
    const chartWidthPx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$headers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timelineWidth"])(window, viewMode);
    const dayDates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$headers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dayDatesInWindow"])(window);
    function pct(dateStr) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$barGeometry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pctInWindow"])(dateStr, window);
    }
    function dayCellStyle(showBorder) {
        if (fitWidth) {
            return {
                flex: 1,
                minWidth: 0,
                flexShrink: 0,
                borderRight: showBorder ? `1px solid ${gridCol}` : undefined
            };
        }
        return {
            width: colW,
            flexShrink: 0,
            borderRight: showBorder ? `1px solid ${gridCol}` : undefined
        };
    }
    function headerSegmentStyle(days) {
        if (fitWidth) {
            return {
                flex: days,
                minWidth: 0,
                flexShrink: 0,
                borderRight: `1px solid ${borderCol}`,
                display: 'flex',
                alignItems: 'center',
                padding: '0 6px',
                overflow: 'hidden'
            };
        }
        return {
            width: days * colW,
            flexShrink: 0,
            borderRight: `1px solid ${borderCol}`,
            display: 'flex',
            alignItems: 'center',
            padding: '0 6px',
            overflow: 'hidden'
        };
    }
    const timelineInnerStyle = fitWidth ? {
        width: '100%',
        minWidth: 0,
        position: 'relative'
    } : {
        width: chartWidthPx,
        minWidth: chartWidthPx,
        position: 'relative'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `gantt-chart-panel${fitWidth ? ' gantt-chart-panel--fit' : ''}`,
        children: [
            pageLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "gantt-page-label",
                style: {
                    padding: compact ? '6px 10px' : '8px 12px',
                    background: isDark ? '#161b22' : '#f1f5f9',
                    borderBottom: `1px solid ${borderCol}`,
                    fontSize: compact ? 10 : 11,
                    fontWeight: 700,
                    color: isDark ? '#f59e0b' : '#b45309',
                    letterSpacing: '0.04em'
                },
                children: [
                    pageLabel,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            marginLeft: 12,
                            fontWeight: 500,
                            color: textMuted
                        },
                        children: [
                            window.start,
                            " → ",
                            window.end
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/gantt/GanttChartPanel.tsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/gantt/GanttChartPanel.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "gantt-table-wrap",
                style: {
                    overflowX: fitWidth ? 'hidden' : 'auto',
                    width: '100%'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    style: {
                        width: fitWidth ? '100%' : labelW + chartWidthPx,
                        minWidth: fitWidth ? '100%' : labelW + chartWidthPx,
                        borderCollapse: 'collapse',
                        tableLayout: 'fixed'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("colgroup", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                    style: {
                                        width: labelW
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/gantt/GanttChartPanel.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {}, void 0, false, {
                                    fileName: "[project]/components/gantt/GanttChartPanel.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/gantt/GanttChartPanel.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            rowSpan: 2,
                                            style: {
                                                verticalAlign: 'middle',
                                                textAlign: 'left',
                                                background: hBg,
                                                borderBottom: `1px solid ${borderCol}`,
                                                borderRight: `1px solid ${borderCol}`,
                                                padding: '0 12px',
                                                height: 44,
                                                fontSize: 9,
                                                color: textMuted,
                                                letterSpacing: '0.08em',
                                                fontWeight: 600
                                            },
                                            children: "TASK / ACTIVITY"
                                        }, void 0, false, {
                                            fileName: "[project]/components/gantt/GanttChartPanel.tsx",
                                            lineNumber: 133,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: {
                                                padding: 0,
                                                background: hBg,
                                                borderBottom: `1px solid ${borderCol}`
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    ...timelineInnerStyle,
                                                    height: 22,
                                                    display: 'flex'
                                                },
                                                children: headers.map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: headerSegmentStyle(h.days),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: compact ? 8 : 10,
                                                                color: isDark ? '#8b949e' : '#475569',
                                                                fontWeight: 600,
                                                                whiteSpace: 'nowrap',
                                                                overflow: 'hidden',
                                                                textOverflow: 'ellipsis'
                                                            },
                                                            children: h.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/gantt/GanttChartPanel.tsx",
                                                            lineNumber: 155,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, i, false, {
                                                        fileName: "[project]/components/gantt/GanttChartPanel.tsx",
                                                        lineNumber: 154,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/gantt/GanttChartPanel.tsx",
                                                lineNumber: 152,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/gantt/GanttChartPanel.tsx",
                                            lineNumber: 151,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/gantt/GanttChartPanel.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: {
                                            padding: 0,
                                            background: hBg,
                                            borderBottom: `1px solid ${borderCol}`
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                ...timelineInnerStyle,
                                                height: 22,
                                                display: 'flex'
                                            },
                                            children: dayDates.map((date, d)=>{
                                                const dayNum = parseInt(date.split('-')[2], 10);
                                                const isSunday = new Date(date.replace(/-/g, '/')).getDay() === 0;
                                                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$headers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shouldShowDayTick"])(viewMode, dayNum)) {
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: dayCellStyle(false)
                                                    }, d, false, {
                                                        fileName: "[project]/components/gantt/GanttChartPanel.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 30
                                                    }, this);
                                                }
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        ...dayCellStyle(dayNum === 1),
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: compact ? 7 : 8,
                                                            color: isSunday ? '#f87171' : textMuted
                                                        },
                                                        children: dayNum
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/gantt/GanttChartPanel.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 25
                                                    }, this)
                                                }, d, false, {
                                                    fileName: "[project]/components/gantt/GanttChartPanel.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/components/gantt/GanttChartPanel.tsx",
                                            lineNumber: 174,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/gantt/GanttChartPanel.tsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/gantt/GanttChartPanel.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/gantt/GanttChartPanel.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: rows.map(({ item, level }, i)=>{
                                const isL1 = level === 1;
                                const isL2 = level === 2;
                                const bg = isL1 ? isDark ? '#161b22' : '#f1f5f9' : isL2 ? isDark ? '#0d1117' : '#f8fafc' : 'transparent';
                                const textColor = isL1 ? textHeader : isL2 ? textNormal : isDark ? '#8b949e' : '#475569';
                                const indent = isL1 ? 8 : isL2 ? 20 : 32;
                                const collapsed = collapsedL1?.has(item.sow_id);
                                const label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$rows$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getItemLabel"])(item);
                                const meta = level === 3 && !compact ? [
                                    item.sow_number,
                                    item.status,
                                    item.assigned_to
                                ].filter(Boolean).join(' · ') : '';
                                const baseStart = item.baseline_start;
                                const baseEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEnd"])(item, 'baseline');
                                const planStart = item.planned_start;
                                const planEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEnd"])(item, 'planned');
                                const actStart = item.actual_start;
                                const actEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEnd"])(item, 'actual') || (item.actual_start && item.percent_complete === 100 ? item.actual_start : undefined);
                                const pctDone = item.percent_complete || 0;
                                const isCritical = item.is_critical_path;
                                const barColor = isCritical ? '#f87171' : level === 1 ? '#534AB7' : level === 2 ? '#378ADD' : isDark ? '#60a5fa' : '#2563eb';
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "gantt-row",
                                    style: {
                                        pageBreakInside: 'avoid'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                height: rowH,
                                                background: bg,
                                                borderBottom: `1px solid ${gridCol}`,
                                                borderRight: `1px solid ${borderCol}`,
                                                padding: `0 8px 0 ${indent}px`,
                                                verticalAlign: 'middle',
                                                cursor: isL1 && onToggleL1 ? 'pointer' : 'default'
                                            },
                                            onClick: ()=>isL1 && onToggleL1?.(item.sow_id),
                                            title: meta || label,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 6,
                                                    minWidth: 0
                                                },
                                                children: [
                                                    isL1 && onToggleL1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 9,
                                                            color: textMuted,
                                                            width: 10,
                                                            flexShrink: 0
                                                        },
                                                        children: collapsed ? '▶' : '▼'
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/gantt/GanttChartPanel.tsx",
                                                        lineNumber: 250,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            minWidth: 0,
                                                            flex: 1,
                                                            overflow: 'hidden'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: isL1 ? 11 : 10,
                                                                fontWeight: isL1 ? 700 : isL2 ? 600 : 400,
                                                                color: textColor,
                                                                textTransform: isL1 ? 'uppercase' : 'none',
                                                                overflow: 'hidden',
                                                                textOverflow: 'ellipsis',
                                                                whiteSpace: 'nowrap'
                                                            },
                                                            children: [
                                                                isCritical && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        color: '#f87171',
                                                                        marginRight: 4
                                                                    },
                                                                    children: "●"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/gantt/GanttChartPanel.tsx",
                                                                    lineNumber: 264,
                                                                    columnNumber: 42
                                                                }, this),
                                                                label
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/gantt/GanttChartPanel.tsx",
                                                            lineNumber: 253,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/gantt/GanttChartPanel.tsx",
                                                        lineNumber: 252,
                                                        columnNumber: 23
                                                    }, this),
                                                    level === 3 && typeof item.percent_complete === 'number' && !compact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: 28,
                                                            textAlign: 'right',
                                                            fontSize: 9,
                                                            color: textMuted,
                                                            flexShrink: 0
                                                        },
                                                        children: [
                                                            item.percent_complete,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/gantt/GanttChartPanel.tsx",
                                                        lineNumber: 269,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/gantt/GanttChartPanel.tsx",
                                                lineNumber: 248,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/gantt/GanttChartPanel.tsx",
                                            lineNumber: 235,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                padding: 0,
                                                height: rowH,
                                                background: bg,
                                                borderBottom: `1px solid ${gridCol}`,
                                                verticalAlign: 'top',
                                                position: 'relative'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    ...timelineInnerStyle,
                                                    height: rowH
                                                },
                                                children: [
                                                    today >= window.start && today <= window.end && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            position: 'absolute',
                                                            left: `${pct(today)}%`,
                                                            top: 0,
                                                            bottom: 0,
                                                            width: 1,
                                                            background: '#f59e0b',
                                                            opacity: 0.35,
                                                            zIndex: 1,
                                                            pointerEvents: 'none'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/gantt/GanttChartPanel.tsx",
                                                        lineNumber: 287,
                                                        columnNumber: 25
                                                    }, this),
                                                    toggles.showBaseline && baseStart && baseEnd && level === 3 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$barGeometry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["barIntersectsWindow"])(baseStart, baseEnd, window) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$barGeometry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["barStyleInWindow"])(baseStart, baseEnd, window, '#484f58', 4, rowH / 2 - 2, 0.5)
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/gantt/GanttChartPanel.tsx",
                                                        lineNumber: 303,
                                                        columnNumber: 25
                                                    }, this),
                                                    toggles.showBaseline && baseStart && baseEnd && level !== 3 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$barGeometry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["barIntersectsWindow"])(baseStart, baseEnd, window) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$barGeometry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["barStyleInWindow"])(baseStart, baseEnd, window, '#484f58', 8, rowH / 2 - 4, 0.4),
                                                            borderRadius: 0
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/gantt/GanttChartPanel.tsx",
                                                        lineNumber: 306,
                                                        columnNumber: 25
                                                    }, this),
                                                    toggles.showPlanned && planStart && planEnd && level === 3 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$barGeometry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["barIntersectsWindow"])(planStart, planEnd, window) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            position: 'absolute',
                                                            left: `${pct((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$barGeometry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clipBarToWindow"])(planStart, planEnd, window).start)}%`,
                                                            width: `${Math.max(0.3, pct((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$barGeometry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clipBarToWindow"])(planStart, planEnd, window).end) - pct((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$barGeometry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clipBarToWindow"])(planStart, planEnd, window).start))}%`,
                                                            height: 14,
                                                            top: rowH / 2 - 7,
                                                            background: barColor + '33',
                                                            border: `1px solid ${barColor}66`,
                                                            borderRadius: 2
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    height: '100%',
                                                                    width: `${pctDone}%`,
                                                                    background: barColor,
                                                                    borderRadius: '2px 0 0 2px',
                                                                    opacity: 0.9
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/gantt/GanttChartPanel.tsx",
                                                                lineNumber: 321,
                                                                columnNumber: 27
                                                            }, this),
                                                            pctDone > 25 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    position: 'absolute',
                                                                    left: 4,
                                                                    top: 1,
                                                                    fontSize: 8,
                                                                    color: '#0a0c0e',
                                                                    fontWeight: 700
                                                                },
                                                                children: [
                                                                    pctDone,
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/gantt/GanttChartPanel.tsx",
                                                                lineNumber: 323,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/gantt/GanttChartPanel.tsx",
                                                        lineNumber: 309,
                                                        columnNumber: 25
                                                    }, this),
                                                    toggles.showPlanned && planStart && planEnd && level !== 3 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$barGeometry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["barIntersectsWindow"])(planStart, planEnd, window) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$barGeometry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["barStyleInWindow"])(planStart, planEnd, window, barColor + '44', 10, rowH / 2 - 5),
                                                            background: barColor + '44'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/gantt/GanttChartPanel.tsx",
                                                        lineNumber: 328,
                                                        columnNumber: 25
                                                    }, this),
                                                    toggles.showActual && actStart && level === 3 && (actEnd && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$barGeometry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["barIntersectsWindow"])(actStart, actEnd, window) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$barGeometry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["barStyleInWindow"])(actStart, actEnd, window, '#4ade80', 4, rowH - 8, 0.8)
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/gantt/GanttChartPanel.tsx",
                                                        lineNumber: 332,
                                                        columnNumber: 27
                                                    }, this) : actStart >= window.start && actStart <= window.end ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            position: 'absolute',
                                                            left: `${pct(actStart)}%`,
                                                            width: 2,
                                                            height: 14,
                                                            top: rowH / 2 - 7,
                                                            background: '#4ade80',
                                                            borderRadius: 1
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/gantt/GanttChartPanel.tsx",
                                                        lineNumber: 334,
                                                        columnNumber: 27
                                                    }, this) : null),
                                                    level === 3 && baseStart && baseEnd && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["daysBetween"])(baseStart, baseEnd) === 0 && baseStart >= window.start && baseStart <= window.end && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            position: 'absolute',
                                                            left: `calc(${pct(baseStart)}% - 6px)`,
                                                            top: rowH / 2 - 6,
                                                            width: 12,
                                                            height: 12,
                                                            background: isCritical ? '#f87171' : '#f59e0b',
                                                            transform: 'rotate(45deg)',
                                                            borderRadius: 2
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/gantt/GanttChartPanel.tsx",
                                                        lineNumber: 353,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/gantt/GanttChartPanel.tsx",
                                                lineNumber: 285,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/gantt/GanttChartPanel.tsx",
                                            lineNumber: 275,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.sow_id + i, true, {
                                    fileName: "[project]/components/gantt/GanttChartPanel.tsx",
                                    lineNumber: 234,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/gantt/GanttChartPanel.tsx",
                            lineNumber: 199,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/gantt/GanttChartPanel.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/gantt/GanttChartPanel.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/gantt/GanttChartPanel.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/gantt/GanttPaginatedLayout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GanttPaginatedLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$gantt$2f$GanttChartPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/gantt/GanttChartPanel.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function GanttPaginatedLayout({ windows, viewMode, rows, theme, toggles, today, variant, pageIndex = 0, rowH, labelW, compact, collapsedL1, onToggleL1 }) {
    if (variant === 'screen') {
        const window = windows[pageIndex] ?? windows[0];
        if (!window) return null;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$gantt$2f$GanttChartPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            window: window,
            viewMode: viewMode,
            rows: rows,
            theme: theme,
            toggles: toggles,
            today: today,
            rowH: rowH,
            labelW: labelW,
            compact: compact,
            fitWidth: false,
            collapsedL1: collapsedL1,
            onToggleL1: onToggleL1,
            pageLabel: `${window.label} · Page ${pageIndex + 1} of ${windows.length}`
        }, void 0, false, {
            fileName: "[project]/components/gantt/GanttPaginatedLayout.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "gantt-print-pages",
        children: windows.map((window, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "gantt-print-page",
                "aria-label": `Gantt page ${idx + 1}: ${window.label}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$gantt$2f$GanttChartPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    window: window,
                    viewMode: viewMode,
                    rows: rows,
                    theme: theme,
                    toggles: toggles,
                    today: today,
                    rowH: rowH ?? 22,
                    labelW: labelW ?? 180,
                    compact: true,
                    fitWidth: true,
                    pageLabel: `${window.label} · Page ${idx + 1} of ${windows.length}`
                }, void 0, false, {
                    fileName: "[project]/components/gantt/GanttPaginatedLayout.tsx",
                    lineNumber: 67,
                    columnNumber: 11
                }, this)
            }, `${window.start}-${window.end}-${idx}`, false, {
                fileName: "[project]/components/gantt/GanttPaginatedLayout.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/gantt/GanttPaginatedLayout.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/gantt/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GANTT_VIEW_MODES",
    ()=>GANTT_VIEW_MODES,
    "STATUS_COLORS",
    ()=>STATUS_COLORS
]);
const GANTT_VIEW_MODES = [
    {
        value: 'week',
        label: 'Weekly'
    },
    {
        value: 'fortnight',
        label: 'Fortnightly'
    },
    {
        value: 'month',
        label: 'Monthly'
    },
    {
        value: 'quarter',
        label: 'Quarterly'
    },
    {
        value: 'half-year',
        label: 'Half-yearly'
    },
    {
        value: 'year',
        label: 'Yearly'
    }
];
const STATUS_COLORS = {
    'Not Started': '#484f58',
    'In Progress': '#f59e0b',
    Complete: '#4ade80',
    'On Hold': '#818cf8',
    Delayed: '#f87171'
};
}),
"[project]/app/dashboard/[projectid]/gantt/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GanttModule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/supabase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$access$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/access.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/theme.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ThemeSelector.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$gantt$2f$GanttPaginatedLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/gantt/GanttPaginatedLayout.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gantt/dates.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$rows$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gantt/rows.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$timePages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gantt/timePages.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gantt/types.ts [app-ssr] (ecmascript)");
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
;
;
function GanttModule() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { isDark } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const projectid = params?.projectid;
    const isPublicViewOnly = projectid === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$access$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PUBLIC_VIEWONLY_PROJECT_ID"];
    const [project, setProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [allItems, setAllItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('month');
    const [pageIndex, setPageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showBaseline, setShowBaseline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showPlanned, setShowPlanned] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showActual, setShowActual] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showCriticalOnly, setShowCriticalOnly] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [collapsedL1, setCollapsedL1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [today] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Date().toISOString().split('T')[0]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!projectid) return;
        if (isPublicViewOnly) {
            fetchProject();
            fetchItems();
            return;
        }
        checkSessionAndLoad();
    }, [
        projectid
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setPageIndex(0);
    }, [
        viewMode,
        projectid
    ]);
    async function checkSessionAndLoad() {
        const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
        if (!user) {
            router.push(`/login?next=${encodeURIComponent(`/dashboard/${projectid}/gantt`)}`);
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
        fetchProject();
        fetchItems();
    }
    async function fetchProject() {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('projects').select('projectid,project_name,project_code,currency,start_date,end_date,status,user_id').eq('projectid', projectid).single();
        if (data) setProject(data);
    }
    async function fetchItems() {
        setLoading(true);
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('sow_items').select('*').eq('projectid', projectid).order('sow_number');
        setAllItems(data || []);
        setLoading(false);
    }
    const schedule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!project) return null;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$dates$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["computeScheduleRange"])({
            items: allItems,
            projectStart: project.start_date,
            projectEnd: project.end_date
        });
    }, [
        allItems,
        project
    ]);
    const timePages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!schedule) return [];
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$timePages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitTimelineIntoPages"])(schedule.rangeStart, schedule.rangeEnd, viewMode);
    }, [
        schedule,
        viewMode
    ]);
    const rows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$rows$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildGanttRows"])({
            items: allItems,
            collapsedL1,
            showCriticalOnly
        }), [
        allItems,
        collapsedL1,
        showCriticalOnly
    ]);
    const l3Items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>allItems.filter((r)=>Number(r.hierarchy_level) === 3), [
        allItems
    ]);
    if (loading || !project || !schedule) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                background: '#0a0c0e',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'monospace',
                color: '#484f58'
            },
            children: loading ? 'Loading Gantt...' : 'Project not found'
        }, void 0, false, {
            fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
            lineNumber: 134,
            columnNumber: 7
        }, this);
    }
    const { rangeStart, rangeEnd, totalDays, hasSchedule } = schedule;
    const totalTasks = l3Items.length;
    const withSchedule = l3Items.filter((r)=>r.baseline_start || r.planned_start).length;
    const complete = l3Items.filter((r)=>r.status === 'Complete').length;
    const delayed = l3Items.filter((r)=>r.status === 'Delayed' || r.baseline_end && today > r.baseline_end && r.status !== 'Complete').length;
    const critical = l3Items.filter((r)=>r.is_critical_path).length;
    const hBg = isDark ? '#0d1117' : '#ffffff';
    const panelBg = isDark ? '#0a0c0e' : '#f8fafc';
    const borderCol = isDark ? '#21262d' : '#e2e8f0';
    const textNormal = isDark ? '#c9d1d9' : '#334155';
    const textMuted = isDark ? '#484f58' : '#64748b';
    const textHeader = isDark ? '#e6edf3' : '#0f172a';
    const panelTheme = {
        isDark,
        hBg,
        panelBg,
        borderCol,
        gridCol: isDark ? '#161b22' : '#f1f5f9',
        textNormal,
        textMuted,
        textHeader
    };
    const toggles = {
        showBaseline,
        showPlanned,
        showActual
    };
    const safePageIndex = Math.min(pageIndex, Math.max(0, timePages.length - 1));
    function toggleL1(sowId) {
        setCollapsedL1((prev)=>{
            const n = new Set(prev);
            if (n.has(sowId)) n.delete(sowId);
            else n.add(sowId);
            return n;
        });
    }
    function handlePrint() {
        document.documentElement.classList.add('gantt-print-active');
        window.print();
        window.setTimeout(()=>document.documentElement.classList.remove('gantt-print-active'), 500);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "gantt-wrap",
        style: {
            fontFamily: 'monospace',
            background: panelBg,
            minHeight: '100vh',
            color: textNormal
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @media (max-width: 640px) {
          .gantt-header { padding: 12px 12px !important; flex-wrap: wrap !important; gap: 10px !important; }
          .gantt-header-left { flex-wrap: wrap !important; gap: 10px !important; }
          .gantt-header-right { width: 100% !important; justify-content: flex-start !important; flex-wrap: wrap !important; gap: 8px !important; }
          .gantt-kpis { grid-template-columns: 1fr !important; }
          .gantt-scroll { max-height: none !important; }
        }
        .gantt-print-only { display: none; }
        @media print {
          html.gantt-print-active,
          html.gantt-print-active body {
            height: auto !important;
            overflow: visible !important;
            background: white !important;
          }
          html.gantt-print-active body * {
            visibility: hidden;
          }
          html.gantt-print-active .gantt-print-only,
          html.gantt-print-active .gantt-print-only * {
            visibility: visible;
          }
          html.gantt-print-active .gantt-print-only {
            display: block !important;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          html.gantt-print-active .gantt-no-print {
            display: none !important;
          }
          html.gantt-print-active .gantt-print-page {
            page: gantt-page;
            break-after: page;
            page-break-after: always;
            page-break-inside: avoid;
            overflow: hidden;
          }
          html.gantt-print-active .gantt-print-page:last-child {
            break-after: auto;
            page-break-after: auto;
          }
          html.gantt-print-active .gantt-chart-panel {
            width: 100% !important;
          }
          html.gantt-print-active .gantt-table-wrap {
            overflow: hidden !important;
          }
          @page gantt-page {
            margin: 10mm;
            size: A3 landscape;
          }
        }
      `
            }, void 0, false, {
                fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "gantt-header gantt-no-print",
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '14px 28px',
                    borderBottom: `1px solid ${borderCol}`,
                    background: hBg
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "gantt-header-left",
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
                                    border: `1px solid ${isDark ? '#30363d' : '#cbd5e1'}`,
                                    borderRadius: 6,
                                    color: isDark ? '#8b949e' : '#475569',
                                    cursor: 'pointer',
                                    fontWeight: 700,
                                    fontSize: 13,
                                    padding: '5px 12px',
                                    fontFamily: 'monospace'
                                },
                                children: "← Back"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
                                lineNumber: 236,
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
                                            " · Gantt Chart"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
                                        lineNumber: 238,
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
                                        fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
                                        lineNumber: 239,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "gantt-header-right",
                        style: {
                            display: 'flex',
                            gap: 10,
                            alignItems: 'center',
                            flexWrap: 'wrap'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                compact: true
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: 2,
                                    background: isDark ? '#161b22' : '#f1f5f9',
                                    borderRadius: 6,
                                    padding: 2,
                                    border: `1px solid ${isDark ? '#30363d' : '#cbd5e1'}`,
                                    flexWrap: 'wrap'
                                },
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GANTT_VIEW_MODES"].map(({ value, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setViewMode(value),
                                        style: {
                                            padding: '4px 8px',
                                            borderRadius: 4,
                                            border: 'none',
                                            background: viewMode === value ? '#f59e0b' : 'transparent',
                                            color: viewMode === value ? isDark ? '#0a0c0e' : '#ffffff' : textMuted,
                                            cursor: 'pointer',
                                            fontSize: 10,
                                            fontWeight: 700,
                                            fontFamily: 'monospace'
                                        },
                                        children: label
                                    }, value, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
                                        lineNumber: 246,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this),
                            [
                                {
                                    label: 'Baseline',
                                    val: showBaseline,
                                    set: setShowBaseline,
                                    color: isDark ? '#484f58' : '#4c525a'
                                },
                                {
                                    label: 'Planned',
                                    val: showPlanned,
                                    set: setShowPlanned,
                                    color: isDark ? '#60a5fa' : '#2563eb'
                                },
                                {
                                    label: 'Actual',
                                    val: showActual,
                                    set: setShowActual,
                                    color: isDark ? '#4ade80' : '#16a34a'
                                },
                                {
                                    label: 'CP Only',
                                    val: showCriticalOnly,
                                    set: setShowCriticalOnly,
                                    color: isDark ? '#f87171' : '#dc2626'
                                }
                            ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>t.set(!t.val),
                                    style: {
                                        padding: '4px 10px',
                                        borderRadius: 6,
                                        border: `1px solid ${t.val ? t.color : isDark ? '#30363d' : '#cbd5e1'}`,
                                        background: t.val ? t.color + '22' : 'transparent',
                                        color: t.val ? t.color : textMuted,
                                        cursor: 'pointer',
                                        fontSize: 11,
                                        fontWeight: 600,
                                        fontFamily: 'monospace'
                                    },
                                    children: t.label
                                }, t.label, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
                                    lineNumber: 271,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handlePrint,
                                style: {
                                    background: '#f59e0b',
                                    border: 'none',
                                    borderRadius: 6,
                                    color: '#0a0c0e',
                                    cursor: 'pointer',
                                    fontWeight: 700,
                                    fontSize: 11,
                                    padding: '6px 14px',
                                    fontFamily: 'monospace'
                                },
                                children: "Print / PDF"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
                                lineNumber: 289,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
                        lineNumber: 242,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "gantt-kpis gantt-no-print",
                style: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(5,1fr)',
                    gap: 1,
                    background: borderCol,
                    borderBottom: `1px solid ${borderCol}`
                },
                children: [
                    {
                        label: 'TOTAL TASKS',
                        val: totalTasks,
                        color: textNormal
                    },
                    {
                        label: 'SCHEDULED',
                        val: withSchedule,
                        color: isDark ? '#60a5fa' : '#2563eb'
                    },
                    {
                        label: 'COMPLETE',
                        val: complete,
                        color: isDark ? '#4ade80' : '#16a34a'
                    },
                    {
                        label: 'DELAYED',
                        val: delayed,
                        color: delayed > 0 ? isDark ? '#f87171' : '#dc2626' : textMuted
                    },
                    {
                        label: 'CRITICAL PATH',
                        val: critical,
                        color: isDark ? '#f87171' : '#dc2626'
                    }
                ].map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: hBg,
                            padding: '10px 20px',
                            textAlign: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 9,
                                    color: textMuted,
                                    letterSpacing: '0.08em',
                                    marginBottom: 4
                                },
                                children: k.label
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
                                lineNumber: 307,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 18,
                                    fontWeight: 700,
                                    color: k.color
                                },
                                children: k.val
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
                                lineNumber: 308,
                                columnNumber: 13
                            }, this)
                        ]
                    }, k.label, true, {
                        fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
                        lineNumber: 306,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
                lineNumber: 298,
                columnNumber: 7
            }, this),
            hasSchedule.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    padding: '80px 0',
                    color: textMuted
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: 14,
                            marginBottom: 8
                        },
                        children: "No schedule data found."
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
                        lineNumber: 315,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: 12,
                            marginBottom: 20
                        },
                        children: "Import the CPOS Master Template with baseline or planned dates to populate the Gantt."
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
                        lineNumber: 316,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push(`/dashboard/${projectid}/sow`),
                        style: {
                            background: '#f59e0b',
                            border: 'none',
                            borderRadius: 6,
                            color: '#0a0c0e',
                            cursor: 'pointer',
                            fontWeight: 700,
                            fontSize: 12,
                            padding: '10px 20px',
                            fontFamily: 'monospace'
                        },
                        children: "Go to SOW Module →"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
                        lineNumber: 317,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
                lineNumber: 314,
                columnNumber: 9
            }, this),
            hasSchedule.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "gantt-no-print gantt-scroll",
                        style: {
                            overflow: 'auto',
                            maxHeight: 'calc(100vh - 180px)',
                            borderBottom: `1px solid ${borderCol}`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '10px 28px',
                                    background: hBg,
                                    borderBottom: `1px solid ${borderCol}`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 11,
                                            color: textMuted
                                        },
                                        children: [
                                            "Timeline pages in ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                style: {
                                                    color: '#f59e0b'
                                                },
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GANTT_VIEW_MODES"].find((m)=>m.value === viewMode)?.label
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
                                                lineNumber: 328,
                                                columnNumber: 35
                                            }, this),
                                            " mode"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
                                        lineNumber: 327,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: 8,
                                            alignItems: 'center'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                disabled: safePageIndex <= 0,
                                                onClick: ()=>setPageIndex((p)=>Math.max(0, p - 1)),
                                                style: {
                                                    padding: '4px 10px',
                                                    borderRadius: 6,
                                                    border: `1px solid ${borderCol}`,
                                                    background: 'transparent',
                                                    color: textNormal,
                                                    cursor: safePageIndex <= 0 ? 'not-allowed' : 'pointer',
                                                    opacity: safePageIndex <= 0 ? 0.4 : 1,
                                                    fontFamily: 'monospace',
                                                    fontSize: 11
                                                },
                                                children: "← Prev"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
                                                lineNumber: 331,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 11,
                                                    color: textMuted,
                                                    minWidth: 120,
                                                    textAlign: 'center'
                                                },
                                                children: [
                                                    "Page ",
                                                    safePageIndex + 1,
                                                    " / ",
                                                    timePages.length
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
                                                lineNumber: 338,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                disabled: safePageIndex >= timePages.length - 1,
                                                onClick: ()=>setPageIndex((p)=>Math.min(timePages.length - 1, p + 1)),
                                                style: {
                                                    padding: '4px 10px',
                                                    borderRadius: 6,
                                                    border: `1px solid ${borderCol}`,
                                                    background: 'transparent',
                                                    color: textNormal,
                                                    cursor: safePageIndex >= timePages.length - 1 ? 'not-allowed' : 'pointer',
                                                    opacity: safePageIndex >= timePages.length - 1 ? 0.4 : 1,
                                                    fontFamily: 'monospace',
                                                    fontSize: 11
                                                },
                                                children: "Next →"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
                                                lineNumber: 341,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
                                        lineNumber: 330,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
                                lineNumber: 326,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$gantt$2f$GanttPaginatedLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                variant: "screen",
                                windows: timePages,
                                pageIndex: safePageIndex,
                                viewMode: viewMode,
                                rows: rows,
                                theme: panelTheme,
                                toggles: toggles,
                                today: today,
                                collapsedL1: collapsedL1,
                                onToggleL1: toggleL1
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
                                lineNumber: 350,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
                        lineNumber: 325,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "gantt-print-only",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '12px 16px 6px',
                                    fontFamily: 'sans-serif'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 16,
                                            fontWeight: 800,
                                            color: '#0f172a'
                                        },
                                        children: project.project_name
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
                                        lineNumber: 366,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 10,
                                            color: '#64748b'
                                        },
                                        children: [
                                            project.project_code,
                                            " · Gantt · ",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gantt$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GANTT_VIEW_MODES"].find((m)=>m.value === viewMode)?.label,
                                            " · ",
                                            rangeStart,
                                            " → ",
                                            rangeEnd
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
                                        lineNumber: 367,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
                                lineNumber: 365,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$gantt$2f$GanttPaginatedLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                variant: "print",
                                windows: timePages,
                                viewMode: viewMode,
                                rows: rows,
                                theme: {
                                    ...panelTheme,
                                    isDark: false,
                                    hBg: '#ffffff',
                                    panelBg: '#ffffff',
                                    borderCol: '#e2e8f0',
                                    gridCol: '#f1f5f9',
                                    textNormal: '#334155',
                                    textMuted: '#64748b',
                                    textHeader: '#0f172a'
                                },
                                toggles: toggles,
                                today: today
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
                                lineNumber: 371,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
                        lineNumber: 364,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            hasSchedule.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "gantt-no-print",
                style: {
                    display: 'flex',
                    gap: 20,
                    padding: '10px 28px',
                    borderTop: `1px solid ${borderCol}`,
                    background: hBg,
                    flexWrap: 'wrap'
                },
                children: [
                    [
                        {
                            color: '#484f58',
                            label: 'Baseline (contract)',
                            height: 4
                        },
                        {
                            color: '#60a5fa',
                            label: 'Planned progress',
                            height: 14
                        },
                        {
                            color: '#4ade80',
                            label: 'Actual',
                            height: 4
                        },
                        {
                            color: '#f87171',
                            label: 'Critical path',
                            height: 14
                        },
                        {
                            color: '#f59e0b',
                            label: 'Today',
                            height: 14
                        }
                    ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: 6
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 24,
                                        height: l.height,
                                        background: l.color,
                                        borderRadius: 2,
                                        opacity: 0.8
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
                                    lineNumber: 394,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 10,
                                        color: textMuted
                                    },
                                    children: l.label
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
                                    lineNumber: 395,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, l.label, true, {
                            fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
                            lineNumber: 393,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginLeft: 'auto',
                            fontSize: 10,
                            color: textMuted
                        },
                        children: [
                            rangeStart,
                            " → ",
                            rangeEnd,
                            " · ",
                            totalDays,
                            " days · ",
                            timePages.length,
                            " pages"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
                        lineNumber: 398,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
                lineNumber: 385,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/[projectid]/gantt/page.tsx",
        lineNumber: 176,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f183f0fe._.js.map