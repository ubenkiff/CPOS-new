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
"[project]/app/dashboard/[projectid]/documents/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DocumentsModule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/supabase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$access$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/access.ts [app-client] (ecmascript)");
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
const CATEGORIES = [
    {
        key: 'site-layout-plan',
        label: 'Site Layout Plan',
        color: '#7F77DD'
    },
    {
        key: 'drawings',
        label: 'Drawings',
        color: '#60a5fa'
    },
    {
        key: 'contracts',
        label: 'Contracts',
        color: '#f59e0b'
    },
    {
        key: 'reports',
        label: 'Reports',
        color: '#4ade80'
    },
    {
        key: 'specs',
        label: 'Specifications',
        color: '#c084fc'
    },
    {
        key: 'photos',
        label: 'Photos',
        color: '#f87171'
    },
    {
        key: 'other',
        label: 'Other',
        color: '#888780'
    }
];
const DOCUMENT_TYPES = [
    {
        value: "DLS",
        label: "Drawing List Schedule (DLS)",
        category: "Document Register",
        relation: "1-n"
    },
    {
        value: "RFI",
        label: "Request for Information (RFI)",
        category: "CLIENT",
        relation: "1-1"
    },
    {
        value: "TQ",
        label: "Technical Query (TQ)",
        category: "Technical",
        relation: "1-1"
    },
    {
        value: "NCR",
        label: "Non-conformance Report (NCR)",
        category: "Quality",
        relation: "1-1"
    },
    {
        value: "CAR",
        label: "Corrective Action Request (CAR)",
        category: "Quality",
        relation: "1-1"
    },
    {
        value: "SO",
        label: "Site Observation (SO)",
        category: "Site",
        relation: "1-n"
    },
    {
        value: "IR",
        label: "Inspection Request (IR)",
        category: "Quality",
        relation: "1-1"
    },
    {
        value: "MIR",
        label: "Material Inspection Request (MIR)",
        category: "Quality",
        relation: "1-1"
    },
    {
        value: "WIR",
        label: "Work Inspection Request (WIR)",
        category: "Quality",
        relation: "1-1"
    },
    {
        value: "ITP",
        label: "Inspection Test Plan (ITP)",
        category: "Quality",
        relation: "1-1"
    },
    {
        value: "MS",
        label: "Method Statement (MS)",
        category: "CLIENT-Structural",
        relation: "1-n"
    },
    {
        value: "SDS",
        label: "Shop Drawing Submission (SDS)",
        category: "Construction-Build",
        relation: "1-n"
    },
    {
        value: "AB",
        label: "As-built Drawing (AB)",
        category: "Construction",
        relation: "1-n"
    },
    {
        value: "MAR",
        label: "Material Approval Request (MAR)",
        category: "Procurement",
        relation: "1-1"
    },
    {
        value: "MOS",
        label: "Method Statement (MOS)",
        category: "Technical",
        relation: "1-n"
    },
    {
        value: "RFQ",
        label: "Request for Quotation (RFQ)",
        category: "Procurement",
        relation: "1-n"
    },
    {
        value: "BOQ",
        label: "Bill of Quantities (BOQ)",
        category: "Commercial",
        relation: "1-1"
    },
    {
        value: "VO",
        label: "Variation Order (VO)",
        category: "CONTRACTOR/CLIENT",
        relation: "1-1"
    },
    {
        value: "SI",
        label: "Site Instruction (SI)",
        category: "SITE",
        relation: "1-n"
    },
    {
        value: "FI",
        label: "Field Instruction (FI)",
        category: "Site",
        relation: "1-n"
    },
    {
        value: "SL",
        label: "Snag List (SL)",
        category: "Quality",
        relation: "1-n"
    },
    {
        value: "PL",
        label: "Punch List (PL)",
        category: "Quality",
        relation: "1-n"
    },
    {
        value: "IFC",
        label: "Issued for Construction (IFC)",
        category: "Construction",
        relation: "1-n"
    },
    {
        value: "IFA",
        label: "Issued for Approval (IFA)",
        category: "Approval",
        relation: "1-n"
    },
    {
        value: "IFR",
        label: "Issued for Review (IFR)",
        category: "Review",
        relation: "1-n"
    },
    {
        value: "IFT",
        label: "Issued for Tender (IFT)",
        category: "Tender",
        relation: "1-n"
    },
    {
        value: "NOC",
        label: "No Objection Certificate (NOC)",
        category: "Approval",
        relation: "1-1"
    },
    {
        value: "MOM",
        label: "Minutes of Meeting (MOM)",
        category: "contractor-client-PMC",
        relation: "n-1"
    },
    {
        value: "PR",
        label: "Purchase Request (PR)",
        category: "Procurement",
        relation: "1-1"
    },
    {
        value: "PO",
        label: "Purchase Order (PO)",
        category: "Procurement",
        relation: "1-1"
    },
    {
        value: "RFP",
        label: "Request for Proposal (RFP)",
        category: "Procurement",
        relation: "1-n"
    },
    {
        value: "TS",
        label: "Technical Submittal (TS)",
        category: "Technical",
        relation: "1-1"
    },
    {
        value: "QA",
        label: "QA Report (QA)",
        category: "Quality",
        relation: "n-1"
    },
    {
        value: "QC",
        label: "QC Report (QC)",
        category: "Quality",
        relation: "n-1"
    },
    {
        value: "HSE",
        label: "HSE Report (HSE)",
        category: "Safety",
        relation: "n-1"
    },
    {
        value: "PTW",
        label: "Permit to Work (PTW)",
        category: "Safety",
        relation: "1-1"
    },
    {
        value: "SAT",
        label: "Site Acceptance Test (SAT)",
        category: "Testing",
        relation: "1-1"
    },
    {
        value: "FAT",
        label: "Factory Acceptance Test (FAT)",
        category: "Testing",
        relation: "1-1"
    },
    {
        value: "DCP",
        label: "DCP Test (DCP)",
        category: "Geotechnical",
        relation: "1-n"
    },
    {
        value: "FDT",
        label: "Field Density Test (FDT)",
        category: "Geotechnical",
        relation: "1-n"
    },
    {
        value: "RA",
        label: "Risk Assessment (RA)",
        category: "Safety",
        relation: "1-n"
    },
    {
        value: "EOT",
        label: "Extension of Time (EOT)",
        category: "Contractual",
        relation: "1-1"
    },
    {
        value: "DPR",
        label: "Daily Progress Report (DPR)",
        category: "Reporting",
        relation: "n-1"
    },
    {
        value: "WPR",
        label: "Weekly Progress Report (WPR)",
        category: "Reporting",
        relation: "n-1"
    },
    {
        value: "MPR",
        label: "Monthly Progress Report (MPR)",
        category: "Reporting",
        relation: "n-1"
    },
    {
        value: "GAT",
        label: "Geotechnical Assessment Report (GAT)",
        category: "Geotechnical",
        relation: "1-1"
    }
];
function formatSize(bytes) {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('en-ZA', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
}
function fileIcon(fileName) {
    const ext = fileName.split('.').pop()?.toLowerCase();
    if (ext === 'pdf') return 'PDF';
    if ([
        'xlsx',
        'xls',
        'csv'
    ].includes(ext || '')) return 'XLS';
    if ([
        'doc',
        'docx'
    ].includes(ext || '')) return 'DOC';
    if ([
        'jpg',
        'jpeg',
        'png',
        'gif',
        'webp'
    ].includes(ext || '')) return 'IMG';
    if ([
        'dwg',
        'dxf'
    ].includes(ext || '')) return 'DWG';
    if ([
        'zip',
        'rar'
    ].includes(ext || '')) return 'ZIP';
    return 'FILE';
}
function fileIconColor(fileName) {
    const ext = fileName.split('.').pop()?.toLowerCase();
    if (ext === 'pdf') return '#f87171';
    if ([
        'xlsx',
        'xls',
        'csv'
    ].includes(ext || '')) return '#4ade80';
    if ([
        'doc',
        'docx'
    ].includes(ext || '')) return '#60a5fa';
    if ([
        'jpg',
        'jpeg',
        'png',
        'gif'
    ].includes(ext || '')) return '#c084fc';
    if ([
        'dwg',
        'dxf'
    ].includes(ext || '')) return '#f59e0b';
    return '#888780';
}
function DocumentsModule() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { theme, setTheme, isDark } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const projectid = params?.projectid;
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isPublicViewOnly = projectid === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$access$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLIC_VIEWONLY_PROJECT_ID"];
    const [project, setProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [documents, setDocuments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [uploadCategory, setUploadCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('site-layout-plan');
    const [uploadDescription, setUploadDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showUpload, setShowUpload] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dragOver, setDragOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleting, setDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sowItems, setSowItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [uploadDocType, setUploadDocType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [relatedSowItemId, setRelatedSowItemId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Filters for Document List
    const [filterDocType, setFilterDocType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [filterSowItem, setFilterSowItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Inline Document Editing States
    const [editingDoc, setEditingDoc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editDescription, setEditDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [editDocType, setEditDocType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [editRelatedSowItemId, setEditRelatedSowItemId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [savingEdit, setSavingEdit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DocumentsModule.useEffect": ()=>{
            if (!projectid) return;
            if (isPublicViewOnly) {
                fetchProject();
                fetchDocuments();
                fetchSowItems();
                return;
            }
            checkSessionAndLoad();
        }
    }["DocumentsModule.useEffect"], [
        projectid
    ]);
    async function checkSessionAndLoad() {
        const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
        if (!user) {
            router.push(`/login?next=${encodeURIComponent(`/dashboard/${projectid}/documents`)}`);
            return;
        }
        const { data: ownerRow, error: ownerErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('projects').select('user_id').eq('projectid', projectid).maybeSingle();
        if (ownerErr) {
            router.push('/pricing');
            return;
        }
        const canAccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$access$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canAccessProject"])({
            user,
            projectid,
            projectOwnerId: ownerRow?.user_id
        });
        if (!canAccess) {
            router.push('/pricing');
            return;
        }
        fetchProject();
        fetchDocuments();
        fetchSowItems();
    }
    async function fetchSowItems() {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('sow_items').select('sow_id,sow_number,scope_l1,item_l2,sub_item_l3').eq('projectid', projectid).order('sow_number');
        setSowItems(data || []);
    }
    async function fetchProject() {
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('projects').select('projectid,project_name,project_code,user_id').eq('projectid', projectid).single();
        if (data) setProject(data);
    }
    async function fetchDocuments() {
        setLoading(true);
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('documents').select('*').eq('projectid', projectid).order('created_at', {
            ascending: false
        });
        setDocuments(data || []);
        setLoading(false);
    }
    function showToast(msg, type = 'ok') {
        setToast({
            msg,
            type
        });
        setTimeout(()=>setToast(null), 4000);
    }
    const [tempFiles, setTempFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    function handleFileSelect(files) {
        if (!files || files.length === 0) return;
        const MAX_SIZE = 10 * 1024 * 1024; // 10MB upload limit
        const oversizedFiles = Array.from(files).filter((f)=>f.size > MAX_SIZE);
        if (oversizedFiles.length > 0) {
            showToast(`Upload limit exceeded! The following file(s) are larger than 10MB: ${oversizedFiles.map((f)=>f.name).join(', ')}`, 'err');
            return;
        }
        setTempFiles(Array.from(files));
    }
    async function handleUploadConfirm() {
        if (!tempFiles || tempFiles.length === 0) {
            showToast('No files selected for upload', 'err');
            return;
        }
        setUploading(true);
        let uploadedCount = 0;
        for (const file of tempFiles){
            const filePath = `projects/${projectid}/${uploadCategory}/${Date.now()}_${file.name}`;
            const { error: uploadError } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from('cpos-documents').upload(filePath, file, {
                upsert: false
            });
            if (uploadError) {
                showToast(`Upload failed for ${file.name}: ${uploadError.message}`, 'err');
                continue;
            }
            const { error: dbError } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('documents').insert([
                {
                    projectid,
                    file_name: file.name,
                    file_path: filePath,
                    file_type: file.type || 'application/octet-stream',
                    file_size: file.size,
                    category: uploadCategory,
                    description: uploadDescription || null,
                    uploaded_by: 'User',
                    document_type: uploadDocType || null,
                    related_sow_item_id: relatedSowItemId || null,
                    document_category: DOCUMENT_TYPES.find((t)=>t.value === uploadDocType)?.category || null
                }
            ]);
            if (dbError) {
                showToast(`Save failed for ${file.name}: ${dbError.message}`, 'err');
            } else {
                uploadedCount++;
            }
        }
        if (uploadedCount > 0) {
            showToast(`Successfully uploaded ${uploadedCount} file(s) with custom metadata and type configurations!`);
        }
        setUploading(false);
        setTempFiles(null);
        setUploadDescription('');
        setUploadDocType('');
        setRelatedSowItemId('');
        setShowUpload(false);
        await fetchDocuments();
    }
    async function handleDownload(doc) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from('cpos-documents').createSignedUrl(doc.file_path, 60);
        if (error || !data?.signedUrl) {
            showToast('Download failed', 'err');
            return;
        }
        const a = document.createElement('a');
        a.href = data.signedUrl;
        a.download = doc.file_name;
        a.click();
    }
    async function handleDelete(doc) {
        if (!confirm(`Delete "${doc.file_name}"? This cannot be undone.`)) return;
        setDeleting(doc.id);
        await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from('cpos-documents').remove([
            doc.file_path
        ]);
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('documents').delete().eq('id', doc.id);
        if (error) {
            showToast('Delete failed', 'err');
            setDeleting(null);
            return;
        }
        showToast(`${doc.file_name} deleted`);
        setDeleting(null);
        await fetchDocuments();
    }
    function startEdit(doc) {
        setEditingDoc(doc);
        setEditDescription(doc.description || '');
        setEditDocType(doc.document_type || '');
        setEditRelatedSowItemId(doc.related_sow_item_id || '');
    }
    async function handleSaveEdit() {
        if (!editingDoc) return;
        setSavingEdit(true);
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('documents').update({
            description: editDescription || null,
            document_type: editDocType || null,
            related_sow_item_id: editRelatedSowItemId || null,
            document_category: DOCUMENT_TYPES.find((t)=>t.value === editDocType)?.category || null
        }).eq('id', editingDoc.id);
        setSavingEdit(false);
        if (error) {
            showToast(`Save failed: ${error.message}`, 'err');
        } else {
            showToast('Document updated successfully!');
            setEditingDoc(null);
            await fetchDocuments();
        }
    }
    function handleDrop(e) {
        e.preventDefault();
        setDragOver(false);
        handleFileSelect(e.dataTransfer.files);
    }
    const mapLegacyCategory = (cat)=>cat === 'master-template' ? 'site-layout-plan' : cat;
    let filtered = activeCategory === 'all' ? documents : documents.filter((d)=>mapLegacyCategory(d.category) === activeCategory);
    if (filterDocType) {
        filtered = filtered.filter((d)=>d.document_type === filterDocType);
    }
    if (filterSowItem) {
        filtered = filtered.filter((d)=>d.related_sow_item_id === filterSowItem);
    }
    const countByCategory = (key)=>documents.filter((d)=>mapLegacyCategory(d.category) === key).length;
    const bgCol = isDark ? '#0a0c0e' : '#F8FAFC';
    const textCol = isDark ? '#c9d1d9' : '#1e293b';
    const hText = isDark ? '#e6edf3' : '#0f172a';
    const cardBg = isDark ? '#0d1117' : '#ffffff';
    const borderCol = isDark ? '#21262d' : '#cbd5e1';
    const subBorder = isDark ? '#161b22' : '#f1f5f9';
    const subText = isDark ? '#484f58' : '#64748b';
    const sidebarItemActiveBg = isDark ? '#161b22' : '#f1f5f9';
    const sidebarColor = isDark ? '#8b949e' : '#475569';
    const inputBg = isDark ? '#010409' : '#ffffff';
    const inputBorder = isDark ? '#30363d' : '#cbd5e1';
    const s = {
        btn: (v)=>({
                background: v === 'p' ? '#f59e0b' : v === 'd' ? isDark ? '#300' : '#fee2e2' : 'transparent',
                border: `1px solid ${v === 'p' ? '#f59e0b' : v === 'd' ? '#f87171' : borderCol}`,
                borderRadius: 6,
                color: v === 'p' ? '#0a0c0e' : v === 'd' ? '#f87171' : sidebarColor,
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: 11,
                padding: '6px 12px',
                fontFamily: 'monospace'
            }),
        inp: {
            width: '100%',
            background: inputBg,
            border: `1px solid ${inputBorder}`,
            borderRadius: 6,
            color: textCol,
            fontFamily: 'monospace',
            fontSize: 12,
            padding: '8px 10px',
            outline: 'none'
        },
        lbl: {
            display: 'block',
            fontSize: 10,
            color: subText,
            letterSpacing: '0.08em',
            marginBottom: 5
        },
        card: {
            background: cardBg,
            border: `1px solid ${borderCol}`,
            borderRadius: 8,
            padding: 16
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            fontFamily: 'monospace',
            background: bgCol,
            minHeight: '100vh',
            color: textCol,
            transition: 'all 0.3s',
            backgroundImage: isDark ? 'linear-gradient(rgba(96,165,250,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.025) 1px, transparent 1px)' : 'linear-gradient(rgba(0,0,0,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.015) 1px, transparent 1px)',
            backgroundSize: '32px 32px'
        },
        children: [
            toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    top: 20,
                    right: 20,
                    zIndex: 999,
                    background: toast.type === 'ok' ? '#052e16' : '#300',
                    border: `1px solid ${toast.type === 'ok' ? '#4ade80' : '#f87171'}`,
                    color: toast.type === 'ok' ? '#4ade80' : '#f87171',
                    padding: '10px 18px',
                    borderRadius: 8,
                    fontSize: 13
                },
                children: toast.msg
            }, void 0, false, {
                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                lineNumber: 390,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '14px 28px',
                    borderBottom: '1px solid ' + borderCol,
                    background: cardBg
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 16
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.back(),
                                style: s.btn('g'),
                                children: "← Back"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                lineNumber: 398,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 11,
                                            color: subText
                                        },
                                        children: [
                                            project?.project_code,
                                            " · Documents"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                        lineNumber: 400,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 16,
                                            fontWeight: 800,
                                            color: hText,
                                            fontFamily: 'sans-serif'
                                        },
                                        children: project?.project_name
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                        lineNumber: 401,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                lineNumber: 399,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                        lineNumber: 397,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 10,
                            alignItems: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                theme: theme,
                                setTheme: setTheme,
                                compact: true
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                lineNumber: 405,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 11,
                                    color: subText
                                },
                                children: [
                                    documents.length,
                                    " files · ",
                                    formatSize(documents.reduce((s, d)=>s + (d.file_size || 0), 0)),
                                    " total"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                lineNumber: 406,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: s.btn('p'),
                                onClick: ()=>setShowUpload(!showUpload),
                                children: showUpload ? '✕ Cancel' : '↑ Upload Files'
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                lineNumber: 407,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                        lineNumber: 404,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                lineNumber: 396,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: '220px 1fr',
                    minHeight: 'calc(100vh - 57px)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            borderRight: '1px solid ' + borderCol,
                            padding: '16px 0',
                            background: cardBg
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '0 16px 8px',
                                    fontSize: 9,
                                    color: subText,
                                    letterSpacing: '0.08em'
                                },
                                children: "CATEGORIES"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                lineNumber: 417,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setActiveCategory('all'),
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '8px 16px',
                                    cursor: 'pointer',
                                    background: activeCategory === 'all' ? sidebarItemActiveBg : 'transparent',
                                    borderLeft: `2px solid ${activeCategory === 'all' ? '#f59e0b' : 'transparent'}`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 12,
                                            color: activeCategory === 'all' ? '#f59e0b' : sidebarColor,
                                            fontWeight: activeCategory === 'all' ? 600 : 400
                                        },
                                        children: "All Files"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                        lineNumber: 420,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 10,
                                            color: subText,
                                            background: subBorder,
                                            padding: '1px 7px',
                                            borderRadius: 10
                                        },
                                        children: documents.length
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                        lineNumber: 421,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                lineNumber: 419,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    height: 1,
                                    background: borderCol,
                                    margin: '6px 0'
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                lineNumber: 424,
                                columnNumber: 11
                            }, this),
                            CATEGORIES.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>setActiveCategory(cat.key),
                                    style: {
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        padding: '8px 16px',
                                        cursor: 'pointer',
                                        background: activeCategory === cat.key ? sidebarItemActiveBg : 'transparent',
                                        borderLeft: `2px solid ${activeCategory === cat.key ? cat.color : 'transparent'}`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 12,
                                                color: activeCategory === cat.key ? cat.color : sidebarColor,
                                                fontWeight: activeCategory === cat.key ? 600 : 400
                                            },
                                            children: cat.label
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                            lineNumber: 428,
                                            columnNumber: 15
                                        }, this),
                                        countByCategory(cat.key) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 10,
                                                color: cat.color,
                                                background: cat.color + '22',
                                                padding: '1px 7px',
                                                borderRadius: 10
                                            },
                                            children: countByCategory(cat.key)
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                            lineNumber: 429,
                                            columnNumber: 48
                                        }, this)
                                    ]
                                }, cat.key, true, {
                                    fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                    lineNumber: 427,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    margin: '20px 12px 0',
                                    padding: 10,
                                    background: subBorder,
                                    borderRadius: 6,
                                    border: `1px solid ${borderCol}`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 9,
                                            color: subText,
                                            marginBottom: 4,
                                            letterSpacing: '0.06em'
                                        },
                                        children: "STORAGE PATH"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                        lineNumber: 434,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 9,
                                            color: sidebarColor,
                                            fontFamily: 'monospace',
                                            wordBreak: 'break-all'
                                        },
                                        children: [
                                            "cpos-documents/",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                lineNumber: 435,
                                                columnNumber: 136
                                            }, this),
                                            "projects/",
                                            projectid?.slice(0, 8),
                                            "..."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                        lineNumber: 435,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                lineNumber: 433,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                        lineNumber: 416,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '20px 24px'
                        },
                        children: [
                            showUpload && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    ...s.card,
                                    marginBottom: 20,
                                    border: '1px solid #30363d'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 12,
                                            fontWeight: 700,
                                            color: '#e6edf3',
                                            marginBottom: 14
                                        },
                                        children: "Upload Files"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                        lineNumber: 445,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onDragOver: (e)=>{
                                            e.preventDefault();
                                            setDragOver(true);
                                        },
                                        onDragLeave: ()=>setDragOver(false),
                                        onDrop: handleDrop,
                                        onClick: ()=>{
                                            if (!tempFiles) fileInputRef.current?.click();
                                        },
                                        style: {
                                            border: `2px dashed ${dragOver ? '#f59e0b' : '#30363d'}`,
                                            borderRadius: 8,
                                            padding: '24px 20px',
                                            textAlign: 'center',
                                            cursor: !tempFiles ? 'pointer' : 'default',
                                            marginBottom: 14,
                                            background: dragOver ? '#f59e0b11' : '#010409',
                                            transition: 'all 0.15s'
                                        },
                                        children: [
                                            !tempFiles ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 22,
                                                            color: dragOver ? '#f59e0b' : '#30363d',
                                                            marginBottom: 8
                                                        },
                                                        children: "↑"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                        lineNumber: 455,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 12,
                                                            color: '#f59e0b',
                                                            fontWeight: 700,
                                                            marginBottom: 4
                                                        },
                                                        children: uploading ? 'Uploading...' : 'Drop files here or click to browse'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                        lineNumber: 456,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 11,
                                                            color: '#484f58'
                                                        },
                                                        children: "PDF, Excel, Word, DWG, images — max 10MB per file"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                        lineNumber: 459,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 13,
                                                            color: '#4ade80',
                                                            fontWeight: 700,
                                                            marginBottom: 6
                                                        },
                                                        children: [
                                                            "✓ ",
                                                            tempFiles.length,
                                                            " file(s) selected"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                        lineNumber: 463,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            gap: 4,
                                                            maxWidth: 450,
                                                            margin: '8px auto',
                                                            textAlign: 'left'
                                                        },
                                                        children: tempFiles.map((f, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    justifyContent: 'space-between',
                                                                    background: isDark ? '#161b22' : '#f1f5f9',
                                                                    padding: '4px 8px',
                                                                    borderRadius: 4,
                                                                    fontSize: 11
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            overflow: 'hidden',
                                                                            textOverflow: 'ellipsis',
                                                                            whiteSpace: 'nowrap',
                                                                            maxWidth: '75%'
                                                                        },
                                                                        children: f.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                                        lineNumber: 469,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            color: subText
                                                                        },
                                                                        children: formatSize(f.size)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                                        lineNumber: 470,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                                lineNumber: 468,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                        lineNumber: 466,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            setTempFiles(null);
                                                        },
                                                        style: {
                                                            ...s.btn('g'),
                                                            marginTop: 8,
                                                            padding: '4px 10px',
                                                            fontSize: 10
                                                        },
                                                        children: "Clear & Choose Different Files"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                        lineNumber: 474,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                lineNumber: 462,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                ref: fileInputRef,
                                                type: "file",
                                                multiple: true,
                                                style: {
                                                    display: 'none'
                                                },
                                                onChange: (e)=>handleFileSelect(e.target.files)
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                lineNumber: 483,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                        lineNumber: 446,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gridTemplateColumns: '1fr 1fr',
                                            gap: 12
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: s.lbl,
                                                        children: "CATEGORY"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                        lineNumber: 488,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: uploadCategory,
                                                        onChange: (e)=>setUploadCategory(e.target.value),
                                                        style: s.inp,
                                                        children: CATEGORIES.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: c.key,
                                                                children: c.label
                                                            }, c.key, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                                lineNumber: 490,
                                                                columnNumber: 42
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                        lineNumber: 489,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                lineNumber: 487,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: s.lbl,
                                                        children: "DESCRIPTION (optional)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                        lineNumber: 494,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: uploadDescription,
                                                        onChange: (e)=>setUploadDescription(e.target.value),
                                                        placeholder: "e.g. Rev C — Approved for construction",
                                                        style: s.inp
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                        lineNumber: 495,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                lineNumber: 493,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                        lineNumber: 486,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gridTemplateColumns: '1fr 1fr',
                                            gap: 12,
                                            marginTop: 12
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: s.lbl,
                                                        children: "DOCUMENT TYPE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                        lineNumber: 501,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: uploadDocType,
                                                        onChange: (e)=>setUploadDocType(e.target.value),
                                                        style: s.inp,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "General / None"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                                lineNumber: 503,
                                                                columnNumber: 21
                                                            }, this),
                                                            DOCUMENT_TYPES.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: t.value,
                                                                    children: t.label
                                                                }, t.value, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                                    lineNumber: 504,
                                                                    columnNumber: 46
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                        lineNumber: 502,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                lineNumber: 500,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: uploadDocType && DOCUMENT_TYPES.find((t)=>t.value === uploadDocType)?.relation !== 'n-1' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            style: s.lbl,
                                                            children: "RELATED SOW ITEM (optional)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                            lineNumber: 510,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: relatedSowItemId,
                                                            onChange: (e)=>setRelatedSowItemId(e.target.value),
                                                            style: s.inp,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "None"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                                    lineNumber: 512,
                                                                    columnNumber: 25
                                                                }, this),
                                                                sowItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: item.sow_id,
                                                                        children: [
                                                                            item.sow_number,
                                                                            " - ",
                                                                            item.sub_item_l3 || item.item_l2 || item.scope_l1
                                                                        ]
                                                                    }, item.sow_id, true, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                                        lineNumber: 514,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                            lineNumber: 511,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                    lineNumber: 509,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            style: s.lbl,
                                                            children: "DOCUMENT CATEGORY"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                            lineNumber: 522,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: uploadDocType ? DOCUMENT_TYPES.find((t)=>t.value === uploadDocType)?.category || '' : 'General',
                                                            disabled: true,
                                                            style: {
                                                                ...s.inp,
                                                                opacity: 0.7,
                                                                cursor: 'not-allowed'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                            lineNumber: 523,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                    lineNumber: 521,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                lineNumber: 507,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                        lineNumber: 499,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'flex-end',
                                            gap: 10,
                                            marginTop: 18,
                                            borderTop: `1px solid ${borderCol}`,
                                            paddingTop: 14
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                style: s.btn('g'),
                                                onClick: ()=>{
                                                    setTempFiles(null);
                                                    setUploadDescription('');
                                                    setUploadDocType('');
                                                    setRelatedSowItemId('');
                                                    setShowUpload(false);
                                                },
                                                disabled: uploading,
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                lineNumber: 535,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                style: s.btn('p'),
                                                onClick: handleUploadConfirm,
                                                disabled: uploading || !tempFiles || tempFiles.length === 0,
                                                children: uploading ? 'Uploading...' : 'Confirm & Upload'
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                lineNumber: 549,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                        lineNumber: 534,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                lineNumber: 444,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: 14
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 13,
                                        fontWeight: 700,
                                        color: hText
                                    },
                                    children: [
                                        activeCategory === 'all' ? 'All Files' : CATEGORIES.find((c)=>c.key === activeCategory)?.label,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 11,
                                                color: subText,
                                                fontWeight: 400,
                                                marginLeft: 8
                                            },
                                            children: [
                                                "(",
                                                filtered.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                            lineNumber: 565,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                    lineNumber: 563,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                lineNumber: 562,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: 10,
                                    marginBottom: 16,
                                    background: subBorder,
                                    padding: '10px 14px',
                                    borderRadius: 8,
                                    border: `1px solid ${borderCol}`,
                                    alignItems: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 11,
                                            fontWeight: 700,
                                            color: hText,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em'
                                        },
                                        children: "Filters:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                        lineNumber: 571,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 6
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 10,
                                                    color: subText
                                                },
                                                children: "Type:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                lineNumber: 574,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: filterDocType,
                                                onChange: (e)=>setFilterDocType(e.target.value),
                                                style: {
                                                    ...s.inp,
                                                    width: 'auto',
                                                    minWidth: 160,
                                                    padding: '4px 8px',
                                                    fontSize: 11,
                                                    height: 28
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "All Document Types"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                        lineNumber: 580,
                                                        columnNumber: 17
                                                    }, this),
                                                    DOCUMENT_TYPES.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: t.value,
                                                            children: [
                                                                t.value,
                                                                " - ",
                                                                t.label.replace(` (${t.value})`, '')
                                                            ]
                                                        }, t.value, true, {
                                                            fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                            lineNumber: 582,
                                                            columnNumber: 19
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                lineNumber: 575,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                        lineNumber: 573,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 6
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 10,
                                                    color: subText
                                                },
                                                children: "SOW Link:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                lineNumber: 588,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: filterSowItem,
                                                onChange: (e)=>setFilterSowItem(e.target.value),
                                                style: {
                                                    ...s.inp,
                                                    width: 'auto',
                                                    minWidth: 180,
                                                    maxWidth: 280,
                                                    padding: '4px 8px',
                                                    fontSize: 11,
                                                    height: 28
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "All SOW Items"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                        lineNumber: 594,
                                                        columnNumber: 17
                                                    }, this),
                                                    sowItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: item.sow_id,
                                                            children: [
                                                                item.sow_number,
                                                                " - ",
                                                                item.sub_item_l3 || item.item_l2 || item.scope_l1
                                                            ]
                                                        }, item.sow_id, true, {
                                                            fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                            lineNumber: 596,
                                                            columnNumber: 19
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                lineNumber: 589,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                        lineNumber: 587,
                                        columnNumber: 13
                                    }, this),
                                    (filterDocType || filterSowItem) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setFilterDocType('');
                                            setFilterSowItem('');
                                        },
                                        style: {
                                            ...s.btn('g'),
                                            padding: '4px 10px',
                                            fontSize: 10,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 4,
                                            height: 28
                                        },
                                        children: "✕ Clear Filters"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                        lineNumber: 604,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                lineNumber: 570,
                                columnNumber: 11
                            }, this),
                            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    color: subText
                                },
                                children: "Loading documents..."
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                lineNumber: 613,
                                columnNumber: 23
                            }, this),
                            !loading && filtered.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'center',
                                    padding: '60px 0',
                                    color: subText
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 13,
                                            marginBottom: 8
                                        },
                                        children: "No files here yet."
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                        lineNumber: 617,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 12,
                                            marginBottom: 20
                                        },
                                        children: "Upload overall site layout plan, drawings, contracts, specs, reports, photos, etc."
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                        lineNumber: 618,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        style: s.btn('p'),
                                        onClick: ()=>setShowUpload(true),
                                        children: "↑ Upload Files"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                        lineNumber: 619,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                lineNumber: 616,
                                columnNumber: 13
                            }, this),
                            !loading && filtered.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                                    gap: 10
                                },
                                children: filtered.map((doc)=>{
                                    const mappedCatKey = doc.category === 'master-template' ? 'site-layout-plan' : doc.category;
                                    const cat = CATEGORIES.find((c)=>c.key === mappedCatKey);
                                    const iconColor = fileIconColor(doc.file_name);
                                    const icon = fileIcon(doc.file_name);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: cardBg,
                                            border: '1px solid ' + borderCol,
                                            borderRadius: 8,
                                            overflow: 'hidden',
                                            display: 'flex',
                                            flexDirection: 'column'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    height: 3,
                                                    background: cat?.color || subText
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                lineNumber: 632,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    padding: '14px 14px 12px',
                                                    flex: 1,
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: 8
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            gap: 10,
                                                            alignItems: 'flex-start'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    width: 36,
                                                                    height: 36,
                                                                    background: iconColor + '22',
                                                                    border: `1px solid ${iconColor}44`,
                                                                    borderRadius: 6,
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    flexShrink: 0
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: 9,
                                                                        fontWeight: 700,
                                                                        color: iconColor
                                                                    },
                                                                    children: icon
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                                    lineNumber: 636,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                                lineNumber: 635,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    flex: 1,
                                                                    minWidth: 0
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: 12,
                                                                            fontWeight: 600,
                                                                            color: hText,
                                                                            overflow: 'hidden',
                                                                            textOverflow: 'ellipsis',
                                                                            whiteSpace: 'nowrap'
                                                                        },
                                                                        children: doc.file_name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                                        lineNumber: 639,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: 10,
                                                                            color: subText,
                                                                            marginTop: 2
                                                                        },
                                                                        children: [
                                                                            formatSize(doc.file_size),
                                                                            " · ",
                                                                            formatDate(doc.created_at)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                                        lineNumber: 640,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                                lineNumber: 638,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                        lineNumber: 634,
                                                        columnNumber: 23
                                                    }, this),
                                                    doc.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 11,
                                                            color: sidebarColor,
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                            whiteSpace: 'nowrap'
                                                        },
                                                        children: doc.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                        lineNumber: 643,
                                                        columnNumber: 43
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            flexWrap: 'wrap',
                                                            gap: 4,
                                                            alignItems: 'center'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 10,
                                                                    color: cat?.color || sidebarColor,
                                                                    background: (cat?.color || sidebarColor) + '22',
                                                                    padding: '2px 8px',
                                                                    borderRadius: 4,
                                                                    display: 'inline-block',
                                                                    width: 'fit-content'
                                                                },
                                                                children: cat?.label || doc.category
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                                lineNumber: 645,
                                                                columnNumber: 25
                                                            }, this),
                                                            doc.document_type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 10,
                                                                    color: '#f59e0b',
                                                                    background: '#f59e0b22',
                                                                    padding: '2px 8px',
                                                                    borderRadius: 4,
                                                                    display: 'inline-block',
                                                                    width: 'fit-content',
                                                                    fontWeight: 'bold'
                                                                },
                                                                children: doc.document_type
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                                lineNumber: 647,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                        lineNumber: 644,
                                                        columnNumber: 23
                                                    }, this),
                                                    doc.related_sow_item_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 10,
                                                            color: '#60a5fa',
                                                            background: '#60a5fa11',
                                                            border: '1px solid #60a5fa22',
                                                            padding: '4px 6px',
                                                            borderRadius: 4,
                                                            whiteSpace: 'nowrap',
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis'
                                                        },
                                                        children: [
                                                            "🔗 SOW: ",
                                                            sowItems.find((item)=>item.sow_id === doc.related_sow_item_id)?.sow_number || 'SOW Item'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                        lineNumber: 653,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            gap: 6,
                                                            marginTop: 'auto'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                style: {
                                                                    ...s.btn('p'),
                                                                    flex: 1,
                                                                    fontSize: 10
                                                                },
                                                                onClick: ()=>handleDownload(doc),
                                                                children: "↓ Download"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                                lineNumber: 660,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                style: {
                                                                    ...s.btn('g'),
                                                                    fontSize: 10,
                                                                    padding: '6px 8px'
                                                                },
                                                                onClick: ()=>startEdit(doc),
                                                                title: "Edit metadata",
                                                                children: "✏️"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                                lineNumber: 661,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                style: {
                                                                    ...s.btn('d'),
                                                                    fontSize: 10,
                                                                    opacity: deleting === doc.id ? 0.5 : 1
                                                                },
                                                                onClick: ()=>handleDelete(doc),
                                                                disabled: deleting === doc.id,
                                                                children: deleting === doc.id ? '...' : '✕'
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                                lineNumber: 662,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                        lineNumber: 659,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                lineNumber: 633,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, doc.id, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                        lineNumber: 631,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                lineNumber: 624,
                                columnNumber: 13
                            }, this),
                            editingDoc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'fixed',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    zIndex: 1000,
                                    background: 'rgba(0,0,0,0.7)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: 20
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        ...s.card,
                                        width: '100%',
                                        maxWidth: 500,
                                        background: cardBg,
                                        border: '1px solid ' + borderCol,
                                        boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 14
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                borderBottom: '1px solid ' + borderCol,
                                                paddingBottom: 10
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 13,
                                                        fontWeight: 700,
                                                        color: hText
                                                    },
                                                    children: "Edit Document Properties"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                    lineNumber: 675,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setEditingDoc(null),
                                                    style: {
                                                        background: 'transparent',
                                                        border: 'none',
                                                        color: subText,
                                                        cursor: 'pointer',
                                                        fontSize: 16
                                                    },
                                                    children: "✕"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                    lineNumber: 676,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                            lineNumber: 674,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 11,
                                                color: subText,
                                                fontFamily: 'monospace',
                                                background: subBorder,
                                                padding: '6px 10px',
                                                borderRadius: 4,
                                                wordBreak: 'break-all'
                                            },
                                            children: [
                                                "File: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    style: {
                                                        color: textCol
                                                    },
                                                    children: editingDoc.file_name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                    lineNumber: 680,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                            lineNumber: 679,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    style: s.lbl,
                                                    children: "DESCRIPTION (optional)"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                    lineNumber: 684,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    value: editDescription,
                                                    onChange: (e)=>setEditDescription(e.target.value),
                                                    placeholder: "Enter document description...",
                                                    style: {
                                                        ...s.inp,
                                                        height: 60,
                                                        resize: 'none',
                                                        fontFamily: 'monospace'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                    lineNumber: 685,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                            lineNumber: 683,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'grid',
                                                gridTemplateColumns: '1fr 1fr',
                                                gap: 12
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            style: s.lbl,
                                                            children: "DOCUMENT TYPE"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                            lineNumber: 695,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: editDocType,
                                                            onChange: (e)=>setEditDocType(e.target.value),
                                                            style: s.inp,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "General / None"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                                    lineNumber: 697,
                                                                    columnNumber: 23
                                                                }, this),
                                                                DOCUMENT_TYPES.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: t.value,
                                                                        children: t.label
                                                                    }, t.value, false, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                                        lineNumber: 698,
                                                                        columnNumber: 48
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                            lineNumber: 696,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                    lineNumber: 694,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: editDocType && DOCUMENT_TYPES.find((t)=>t.value === editDocType)?.relation !== 'n-1' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                style: s.lbl,
                                                                children: "RELATED SOW ITEM"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                                lineNumber: 704,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: editRelatedSowItemId,
                                                                onChange: (e)=>setEditRelatedSowItemId(e.target.value),
                                                                style: s.inp,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        children: "None"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                                        lineNumber: 706,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    sowItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: item.sow_id,
                                                                            children: [
                                                                                item.sow_number,
                                                                                " - ",
                                                                                item.sub_item_l3 || item.item_l2 || item.scope_l1
                                                                            ]
                                                                        }, item.sow_id, true, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                                            lineNumber: 708,
                                                                            columnNumber: 29
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                                lineNumber: 705,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                        lineNumber: 703,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                style: s.lbl,
                                                                children: "DOCUMENT CATEGORY"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                                lineNumber: 716,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                value: editDocType ? DOCUMENT_TYPES.find((t)=>t.value === editDocType)?.category || '' : 'General',
                                                                disabled: true,
                                                                style: {
                                                                    ...s.inp,
                                                                    opacity: 0.7,
                                                                    cursor: 'not-allowed'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                                lineNumber: 717,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                        lineNumber: 715,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                    lineNumber: 701,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                            lineNumber: 693,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                justifyContent: 'flex-end',
                                                gap: 10,
                                                marginTop: 10,
                                                borderTop: '1px solid ' + borderCol,
                                                paddingTop: 12
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setEditingDoc(null),
                                                    style: s.btn('g'),
                                                    disabled: savingEdit,
                                                    children: "Cancel"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                    lineNumber: 728,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleSaveEdit,
                                                    style: s.btn('p'),
                                                    disabled: savingEdit,
                                                    children: savingEdit ? 'Saving...' : 'Save Changes'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                                    lineNumber: 731,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                            lineNumber: 727,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                    lineNumber: 673,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                                lineNumber: 672,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                        lineNumber: 440,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
                lineNumber: 413,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/[projectid]/documents/page.tsx",
        lineNumber: 376,
        columnNumber: 5
    }, this);
}
_s(DocumentsModule, "bqj07ob/FgUHhuvarmqgclhDvzk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = DocumentsModule;
var _c;
__turbopack_context__.k.register(_c, "DocumentsModule");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_8b07ab6f._.js.map