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
"[project]/lib/schedulerParser.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// CPOS: Primavera (XER), Microsoft Project (XML) and Flexible CSV Parser
// This parser parses project schedules and maps them directly to the CPOS sow_items schema.
__turbopack_context__.s([
    "parseCSVToSow",
    ()=>parseCSVToSow,
    "parseMSPXmlToSow",
    ()=>parseMSPXmlToSow,
    "parseXERToSow",
    ()=>parseXERToSow
]);
// Helper to parse days between two dates
function getDaysBetween(d1, d2) {
    if (!d1 || !d2) return undefined;
    const time = new Date(d2).getTime() - new Date(d1).getTime();
    if (isNaN(time)) return undefined;
    const d = Math.round(time / (1000 * 60 * 60 * 24));
    return d > 0 ? d : 1;
}
function parseXERToSow(xerContent) {
    const lines = xerContent.split(/\r?\n/);
    const tables = {};
    let currentTable = '';
    let currentFields = [];
    for (const line of lines){
        if (line.startsWith('%T')) {
            currentTable = line.substring(3).trim();
            tables[currentTable] = {
                fields: [],
                records: []
            };
        } else if (line.startsWith('%F')) {
            currentFields = line.substring(3).trim().split('\t');
            if (tables[currentTable]) {
                tables[currentTable].fields = currentFields;
            }
        } else if (line.startsWith('%R')) {
            const record = line.substring(3).trim().split('\t');
            if (tables[currentTable]) {
                tables[currentTable].records.push(record);
            }
        }
    }
    const helper = (tableName)=>{
        const t = tables[tableName];
        if (!t) return [];
        return t.records.map((rec)=>{
            const entry = {};
            t.fields.forEach((f, idx)=>{
                entry[f] = rec[idx] || '';
            });
            return entry;
        });
    };
    // Parse WBS levels
    const rawWBS = helper('PROJWBS');
    // Parse Activities (tasks)
    const rawTasks = helper('TASK');
    // Parse Predecessors
    const rawDeps = helper('TASKPRED');
    // Create lookups
    const wbsMap = new Map();
    rawWBS.forEach((w)=>wbsMap.set(w.wbs_id, w));
    // Find root and build hierarchy path for each WBS
    const getWBSPath = (wbsId)=>{
        const path = [];
        let curr = wbsMap.get(wbsId);
        while(curr){
            if (curr.wbs_name && curr.wbs_short_name !== curr.wbs_name) {
                path.unshift(curr.wbs_name);
            }
            curr = curr.parent_wbs_id ? wbsMap.get(curr.parent_wbs_id) : undefined;
        }
        return path;
    };
    // Predecessor lookup
    const depsByTaskId = new Map();
    rawDeps.forEach((d)=>{
        const list = depsByTaskId.get(d.task_id) || [];
        list.push(d);
        depsByTaskId.set(d.task_id, list);
    });
    // Task code maps to easily resolve predecessor task codes
    const taskIdToCode = new Map();
    rawTasks.forEach((t)=>taskIdToCode.set(t.task_id, t.task_code));
    const items = [];
    // Create Level 1 and Level 2 groups from WBS pathways or task codes
    const seenL1 = new Set();
    const seenL2 = new Set();
    rawTasks.forEach((t, idx)=>{
        const wbsPath = getWBSPath(t.wbs_id);
        const l1Name = wbsPath[0] || 'Scope Works';
        let l2Name = wbsPath[1] || 'General Mobilization';
        const l3Name = t.task_name || 'Activity';
        // Deduplicate/normalize path names
        if (l1Name === l2Name) {
            l2Name = 'General Phase';
        }
        // Determine structural numbers
        // Let's check if the activity task_code itself has a hierarchical format, like '1.1.1'
        let sowNum = t.task_code || '';
        const dotCount = sowNum.split('.').length - 1;
        let l1Num = '';
        let l2Num = '';
        let l3Num = sowNum;
        if (dotCount >= 2) {
            const parts = sowNum.split('.');
            l1Num = parts[0];
            l2Num = `${parts[0]}.${parts[1]}`;
        } else {
            // Create artificial hierarchy if code is flat (e.g., A1010)
            const index = idx + 1;
            l1Num = '1';
            l2Num = '1.1';
            l3Num = `1.1.${index}`;
        }
        // Insert structural L1 if not seen yet
        if (!seenL1.has(l1Num)) {
            seenL1.add(l1Num);
            items.push({
                sow_number: l1Num,
                hierarchy_level: 1,
                scope_l1: l1Name,
                status: 'In Progress'
            });
        }
        // Insert structural L2 if not seen yet
        if (!seenL2.has(l2Num)) {
            seenL2.add(l2Num);
            items.push({
                sow_number: l2Num,
                hierarchy_level: 2,
                scope_l1: l1Name,
                item_l2: l2Name,
                status: 'In Progress'
            });
        }
        // Status map
        let status = 'Not Started';
        if (t.status_code === 'TK_Active') status = 'In Progress';
        if (t.status_code === 'TK_Complete') status = 'Complete';
        // Percent complete
        const pct = parseFloat(t.phys_pct || t.act_work_qty || '0') || 0;
        // Dates
        const targetStart = t.target_start_date ? t.target_start_date.split(' ')[0] : undefined;
        const targetEnd = t.target_end_date ? t.target_end_date.split(' ')[0] : undefined;
        const actStart = t.act_start_date ? t.act_start_date.split(' ')[0] : undefined;
        const actEnd = t.act_end_date ? t.act_end_date.split(' ')[0] : undefined;
        // Total Float telling us if critical pathway
        const totalFloat = parseFloat(t.total_float_hr_cnt || '999');
        const isCritical = totalFloat <= 0;
        // Find predecessors
        const taskDeps = depsByTaskId.get(t.task_id) || [];
        let depOnStr = '';
        let depTypeStr = 'FS';
        if (taskDeps.length > 0) {
            // Map first predecessor to sow relational structure
            const primaryDep = taskDeps[0];
            const predCode = taskIdToCode.get(primaryDep.pred_task_id);
            if (predCode) {
                depOnStr = predCode;
                if (primaryDep.pred_type === 'PR_FF') depTypeStr = 'FF';
                else if (primaryDep.pred_type === 'PR_SS') depTypeStr = 'SS';
                else if (primaryDep.pred_type === 'PR_SF') depTypeStr = 'SF';
                else depTypeStr = 'FS';
            }
        }
        // Assembly L3 Task
        items.push({
            sow_number: l3Num,
            hierarchy_level: 3,
            scope_l1: l1Name,
            item_l2: l2Name,
            sub_item_l3: l3Name,
            particulars: t.task_code || undefined,
            planned_start: targetStart,
            planned_days: getDaysBetween(targetStart, targetEnd),
            planned_end: targetEnd,
            baseline_start: targetStart,
            baseline_days: getDaysBetween(targetStart, targetEnd),
            baseline_end: targetEnd,
            actual_start: actStart,
            actual_days: getDaysBetween(actStart, actEnd),
            actual_end: actEnd,
            percent_complete: pct,
            status,
            is_critical_path: isCritical,
            dep_on: depOnStr || undefined,
            dep_type: depTypeStr,
            risk_level: isCritical ? 'High' : 'Low',
            notes: t.task_code ? `Primavera ActID: ${t.task_code}` : undefined
        });
    });
    // Sort overall items by sow_number hierarchy
    return items.sort((a, b)=>a.sow_number.localeCompare(b.sow_number, undefined, {
            numeric: true,
            sensitivity: 'base'
        }));
}
function parseMSPXmlToSow(xmlContent) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlContent, 'text/xml');
    const taskNodes = xmlDoc.getElementsByTagName('Task');
    const uidToCodeMap = new Map();
    const items = [];
    const rawTasks = [];
    // First pass: Read basic task identities
    for(let i = 0; i < taskNodes.length; i++){
        const node = taskNodes[i];
        const uid = node.getElementsByTagName('UID')[0]?.textContent || '';
        const id = node.getElementsByTagName('ID')[0]?.textContent || '';
        const name = node.getElementsByTagName('Name')[0]?.textContent || '';
        const outlineLevel = parseInt(node.getElementsByTagName('OutlineLevel')[0]?.textContent || '1');
        const outlineNumber = node.getElementsByTagName('OutlineNumber')[0]?.textContent || '';
        const start = node.getElementsByTagName('Start')[0]?.textContent?.substring(0, 10) || '';
        const finish = node.getElementsByTagName('Finish')[0]?.textContent?.substring(0, 10) || '';
        const pct = parseFloat(node.getElementsByTagName('PercentComplete')[0]?.textContent || '0');
        const critical = node.getElementsByTagName('Critical')[0]?.textContent === '1' || node.getElementsByTagName('Critical')[0]?.textContent === 'true';
        const notes = node.getElementsByTagName('Notes')[0]?.textContent || '';
        if (!outlineNumber || !name) continue; // Skip empty header or configuration entries
        // Save UID mappings
        uidToCodeMap.set(uid, outlineNumber);
        // Predecessor links
        const preds = [];
        const predNodes = node.getElementsByTagName('PredecessorLink');
        for(let p = 0; p < predNodes.length; p++){
            const pNode = predNodes[p];
            const predUid = pNode.getElementsByTagName('PredecessorUID')[0]?.textContent || '';
            const typeNum = pNode.getElementsByTagName('Type')[0]?.textContent || '1';
            let type = 'FS';
            if (typeNum === '0') type = 'FF';
            else if (typeNum === '2') type = 'SS';
            else if (typeNum === '3') type = 'SF';
            preds.push({
                predUid,
                type
            });
        }
        rawTasks.push({
            uid,
            id,
            name,
            outlineLevel,
            outlineNumber,
            start,
            finish,
            percentComplete: pct,
            critical,
            notes,
            predecessors: preds
        });
    }
    // Second pass: Map hierarchical pathways and assemble SOW models
    rawTasks.forEach((t)=>{
        // Determine ancestors
        const outlineParts = t.outlineNumber.split('.');
        const hierarchyLevel = outlineParts.length;
        const level = hierarchyLevel >= 3 ? 3 : hierarchyLevel === 2 ? 2 : 1;
        // Find parent names
        let scopeL1 = '';
        let itemL2 = '';
        let subItemL3 = '';
        if (level === 1) {
            scopeL1 = t.name;
        } else if (level === 2) {
            const parentNum = outlineParts[0];
            const parentTask = rawTasks.find((rt)=>rt.outlineNumber === parentNum);
            scopeL1 = parentTask?.name || 'General Operations';
            itemL2 = t.name;
        } else {
            const l1Num = outlineParts[0];
            const l2Num = `${outlineParts[0]}.${outlineParts[1]}`;
            const l1Parent = rawTasks.find((rt)=>rt.outlineNumber === l1Num);
            const l2Parent = rawTasks.find((rt)=>rt.outlineNumber === l2Num);
            scopeL1 = l1Parent?.name || 'General Operations';
            itemL2 = l2Parent?.name || 'Sub Work Package';
            subItemL3 = t.name;
        }
        // Status mapping
        let status = 'Not Started';
        if (t.percentComplete > 0 && t.percentComplete < 100) status = 'In Progress';
        if (t.percentComplete === 100) status = 'Complete';
        // Compute predecessor relation
        let depOn = '';
        let depType = 'FS';
        if (t.predecessors.length > 0) {
            const primary = t.predecessors[0];
            const predCode = uidToCodeMap.get(primary.predUid);
            if (predCode) {
                depOn = predCode;
                depType = primary.type;
            }
        }
        const calculatedDays = getDaysBetween(t.start, t.finish) || 1;
        items.push({
            sow_number: t.outlineNumber,
            hierarchy_level: level,
            scope_l1: scopeL1 || undefined,
            item_l2: itemL2 || undefined,
            sub_item_l3: subItemL3 || undefined,
            particulars: t.notes || undefined,
            planned_start: t.start || undefined,
            planned_days: calculatedDays,
            planned_end: t.finish || undefined,
            baseline_start: t.start || undefined,
            baseline_days: calculatedDays,
            baseline_end: t.finish || undefined,
            percent_complete: t.percentComplete,
            status,
            is_critical_path: t.critical,
            dep_on: depOn || undefined,
            dep_type: depType,
            risk_level: t.critical ? 'High' : 'Low',
            notes: t.notes ? `MSP UID: ${t.uid}. ${t.notes}` : `MSP UID: ${t.uid}`
        });
    });
    // Sort overall items by WBS outline ordering
    return items.sort((a, b)=>a.sow_number.localeCompare(b.sow_number, undefined, {
            numeric: true,
            sensitivity: 'base'
        }));
}
function parseCSVToSow(rows, headers) {
    // Common visual maps
    const pick = (r, keys)=>{
        for (const k of keys){
            const v = r[k];
            if (v !== undefined && v !== null && v !== '') return v;
        }
        return undefined;
    };
    const num = (v)=>{
        if (v === null || v === undefined || v === '') return undefined;
        const n = typeof v === 'number' ? v : Number(String(v).replace(/,/g, ''));
        return Number.isFinite(n) ? n : undefined;
    };
    const parseDate = (v)=>{
        if (!v) return undefined;
        const d = new Date(String(v).trim());
        return isNaN(d.getTime()) ? undefined : d.toISOString().split('T')[0];
    };
    const pct = (v)=>{
        const n = num(typeof v === 'string' ? v.replace(/%/g, '') : v);
        if (n === undefined) return undefined;
        return n > 0 && n <= 1 ? n * 100 : Math.max(0, Math.min(100, n));
    };
    // Normalize status options
    const normStatus = (raw)=>{
        const s = String(raw ?? '').trim().toLowerCase();
        if (!s) return 'Not Started';
        if (s === 'complete' || s === 'completed' || s === 'done') return 'Complete';
        if (s.includes('progress') || s === 'active' || s === 'started') return 'In Progress';
        if (s.includes('hold') || s.includes('pause')) return 'On Hold';
        if (s.includes('delay') || s.includes('behind')) return 'Delayed';
        return 'Not Started';
    };
    const items = [];
    rows.forEach((r)=>{
        const sowNumber = String(pick(r, [
            'SOW #',
            'Serial',
            'SOW Number',
            'WBS',
            'OutlineNumber'
        ]) ?? '').trim();
        if (!sowNumber || sowNumber.toUpperCase() === 'TOTALS') return;
        const scopeL1 = String(pick(r, [
            'Scope (L1)',
            'Scope',
            'L1',
            'L1 Scope'
        ]) ?? '').trim();
        const itemL2 = String(pick(r, [
            'Item (L2)',
            'Item',
            'L2',
            'L2 Item'
        ]) ?? '').trim();
        const subItemL3 = String(pick(r, [
            'Sub Item (L3)',
            'Sub Item',
            'L3',
            'L3 Sub Item'
        ]) ?? '').trim();
        const particulars = String(pick(r, [
            'Particulars / Spec',
            'Particulars',
            'Spec',
            'Description'
        ]) ?? '').trim();
        const hierarchyParts = sowNumber.split('.').length;
        const level = hierarchyParts >= 3 ? 3 : hierarchyParts === 2 ? 2 : 1;
        const plStart = parseDate(pick(r, [
            'Planned Start',
            'Start',
            'PlannedStart'
        ]));
        const plEnd = parseDate(pick(r, [
            'Planned End',
            'Finish',
            'PlannedEnd',
            'Planned Completion'
        ]));
        const bsStart = parseDate(pick(r, [
            'Baseline Start',
            'BaselineStart'
        ]));
        const bsEnd = parseDate(pick(r, [
            'Baseline End',
            'BaselineEnd',
            'Baseline Completion'
        ]));
        const acStart = parseDate(pick(r, [
            'Actual Start',
            'ActualStart'
        ]));
        const acEnd = parseDate(pick(r, [
            'Actual End',
            'ActualEnd',
            'Actual Completion'
        ]));
        const plDays = num(pick(r, [
            'Planned Days',
            'Duration',
            'PlannedDays'
        ])) || getDaysBetween(plStart, plEnd);
        const bsDays = num(pick(r, [
            'Baseline Days',
            'BaselineDuration',
            'BaselineDays'
        ])) || getDaysBetween(bsStart, bsEnd);
        const acDays = num(pick(r, [
            'Actual Days',
            'ActualDuration',
            'ActualDays'
        ])) || getDaysBetween(acStart, acEnd);
        const criticalVal = String(pick(r, [
            'Critical Path',
            'CriticalPath',
            'Critical'
        ]) ?? '').trim().toLowerCase();
        const isCritical = criticalVal === 'yes' || criticalVal === 'true' || criticalVal === '1';
        const quantity = num(pick(r, [
            'Quantity',
            'Qty'
        ]));
        const wastePct = num(pick(r, [
            'Waste %',
            'WastePct'
        ])) || 0;
        const netQty = num(pick(r, [
            'Net Qty',
            'NetQty'
        ])) || (quantity ? quantity * (1 + wastePct / 100) : undefined);
        const unitRate = num(pick(r, [
            'Unit rate',
            'Unit Rate',
            'Rate'
        ]));
        const boqAmount = num(pick(r, [
            'BOQ Amount',
            'BOQAmount',
            'Amount'
        ])) || (netQty && unitRate ? netQty * unitRate : undefined);
        const estimatedCost = num(pick(r, [
            'Est. Cost',
            'Estimated Cost',
            'EstimatedCost'
        ]));
        const actualCost = num(pick(r, [
            'Actual Cost',
            'ActualCost'
        ]));
        items.push({
            sow_number: sowNumber,
            hierarchy_level: level,
            scope_l1: scopeL1 || undefined,
            item_l2: itemL2 || undefined,
            sub_item_l3: subItemL3 || undefined,
            particulars: particulars || undefined,
            assigned_to: String(pick(r, [
                'Assigned To',
                'Assigned',
                'Resource'
            ]) ?? '').trim() || undefined,
            planned_start: plStart,
            planned_days: plDays,
            planned_end: plEnd,
            baseline_start: bsStart,
            baseline_days: bsDays,
            baseline_end: bsEnd,
            actual_start: acStart,
            actual_days: acDays,
            actual_end: acEnd,
            percent_complete: pct(pick(r, [
                '% Complete',
                'PercentComplete',
                'CompletePct'
            ])),
            unit: String(pick(r, [
                'Unit',
                'UOM'
            ]) ?? '').trim() || undefined,
            quantity,
            waste_pct: wastePct,
            net_qty: netQty,
            unit_rate: unitRate,
            boq_amount: boqAmount,
            estimated_cost: estimatedCost,
            actual_cost: actualCost,
            status: normStatus(pick(r, [
                'Status',
                'State'
            ])),
            dep_on: String(pick(r, [
                'Dep. On (SOW#)',
                'Predecessor',
                'DependentOn'
            ]) ?? '').trim() || undefined,
            dep_type: String(pick(r, [
                'Dep. Type',
                'DependencyType',
                'PredecessorType'
            ]) ?? '').toUpperCase() || 'FS',
            is_critical_path: isCritical,
            notes: String(pick(r, [
                'Notes',
                'Note',
                'Comments'
            ]) ?? '').trim() || undefined,
            plant: String(pick(r, [
                'Plant',
                'Equipment'
            ]) ?? '').trim() || undefined,
            site_equipment: String(pick(r, [
                'Site Equip.',
                'Site Equipment'
            ]) ?? '').trim() || undefined,
            manpower: String(pick(r, [
                'Manpower',
                'Labour'
            ]) ?? '').trim() || undefined
        });
    });
    return items.sort((a, b)=>a.sow_number.localeCompare(b.sow_number, undefined, {
            numeric: true,
            sensitivity: 'base'
        }));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/dashboard/[projectid]/sow/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SowPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/supabase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$access$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/access.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ThemeSelector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schedulerParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/schedulerParser.ts [app-client] (ecmascript)");
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
// ── Constants ────────────────────────────────────────────────────────────────
const STATUS_OPTS = [
    'Not Started',
    'In Progress',
    'Complete',
    'On Hold',
    'Delayed'
];
const RISK_OPTS = [
    'Low',
    'Medium',
    'High',
    'Critical'
];
const DEP_OPTS = [
    'FS',
    'SF',
    'SS',
    'FF'
];
const UNIT_OPTS = [
    'm',
    'm²',
    'm³',
    'No',
    'kg',
    'L',
    'hr',
    'sum',
    'ton'
];
const statusColor = {
    'Complete': {
        bg: '#052e16',
        text: '#4ade80'
    },
    'In Progress': {
        bg: '#2d1f05',
        text: '#f59e0b'
    },
    'Not Started': {
        bg: '#161b22',
        text: '#6e7681'
    },
    'On Hold': {
        bg: '#1c1917',
        text: '#78716c'
    },
    'Delayed': {
        bg: '#2d0f0f',
        text: '#f87171'
    }
};
const riskColor = {
    Low: '#4ade80',
    Medium: '#f59e0b',
    High: '#f87171',
    Critical: '#c084fc'
};
const projectStatusColor = {
    Active: {
        bg: '#052e16',
        text: '#4ade80',
        dot: '#4ade80'
    },
    Planning: {
        bg: '#1e1b4b',
        text: '#818cf8',
        dot: '#818cf8'
    },
    'On Hold': {
        bg: '#2d1f05',
        text: '#f59e0b',
        dot: '#f59e0b'
    },
    Closed: {
        bg: '#1c1917',
        text: '#78716c',
        dot: '#78716c'
    }
};
// ── Empty form ───────────────────────────────────────────────────────────────
function emptyForm() {
    return {
        sow_number: '',
        hierarchy_level: 3,
        scope_l1: '',
        item_l2: '',
        sub_item_l3: '',
        particulars: '',
        assigned_to: '',
        baseline_start: '',
        baseline_days: undefined,
        planned_start: '',
        planned_days: undefined,
        actual_start: '',
        actual_days: undefined,
        percent_complete: 0,
        unit: 'm²',
        quantity: undefined,
        waste_pct: 0,
        unit_rate: undefined,
        estimated_cost: undefined,
        actual_cost: undefined,
        plant: '',
        site_equipment: '',
        manpower: '',
        risk_level: 'Low',
        status: 'Not Started',
        dep_on: '',
        dep_type: 'FS',
        is_critical_path: false,
        notes: ''
    };
}
// ── Helpers ──────────────────────────────────────────────────────────────────
function addDays(dateStr, days) {
    if (!dateStr || !days) return '';
    const d = new Date(dateStr);
    d.setDate(d.getDate() + days);
    return d.toISOString().split('T')[0];
}
function fmt(n, currency) {
    if (n >= 1_000_000) return `${currency} ${(n / 1_000_000).toFixed(2)}M`;
    if (n >= 1_000) return `${currency} ${(n / 1_000).toFixed(0)}K`;
    return `${currency} ${n.toLocaleString()}`;
}
function normalizeSowStatus(raw) {
    const s = String(raw ?? '').trim();
    if (!s) return undefined;
    const v = s.toLowerCase();
    if (v === 'complete' || v === 'completed' || v === 'done' || v === 'finished') return 'Complete';
    if (v.includes('progress') || v === 'started' || v === 'ongoing') return 'In Progress';
    if (v.includes('hold') || v.includes('paused')) return 'On Hold';
    if (v.includes('delay') || v.includes('behind') || v.includes('late') || v.includes('overdue') || v.includes('block') || v.includes('waiting')) return 'Delayed';
    if (v.includes('not started') || v === 'open' || v === 'todo' || v === 'new') return 'Not Started';
    return STATUS_OPTS.find((opt)=>opt.toLowerCase() === v) ?? undefined;
}
function normalizeRisk(raw) {
    const s = String(raw ?? '').trim();
    if (!s) return undefined;
    const v = s.toLowerCase();
    if (v.startsWith('low')) return 'Low';
    if (v.startsWith('med')) return 'Medium';
    if (v.startsWith('high')) return 'High';
    if (v.startsWith('crit')) return 'Critical';
    return RISK_OPTS.find((opt)=>opt.toLowerCase() === v) ?? undefined;
}
function normalizeDepType(raw) {
    const s = String(raw ?? '').trim();
    if (!s) return undefined;
    const v = s.toUpperCase();
    return DEP_OPTS.includes(v) ? v : undefined;
}
function SowPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { theme, setTheme, isDark } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const projectid = params.projectid;
    const importInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isPublicViewOnly = projectid === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$access$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLIC_VIEWONLY_PROJECT_ID"];
    const [project, setProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editItem, setEditItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(emptyForm());
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [collapsed, setCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [filterStatus, setFilterStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const [filterRisk, setFilterRisk] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [importing, setImporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [importMsg, setImportMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // ── Primavera & MS Project integration state hooks ────────────────────────
    const [showIntegration, setShowIntegration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [integrationFile, setIntegrationFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [integrationMode, setIntegrationMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('auto');
    const [parsedItems, setParsedItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [integrationError, setIntegrationError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [integrationLogs, setIntegrationLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    function getRowHeaders(ws, rowIndex, range) {
        const headers = new Set();
        for(let c = range.s.c; c <= range.e.c; c++){
            const addr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].encode_cell({
                r: rowIndex,
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
    async function handleFileSelected(file) {
        setIntegrationFile(file);
        setIntegrationError('');
        const logs = [
            `Loading file: ${file.name} (${(file.size / 1024).toFixed(1)} KB)...`
        ];
        setIntegrationLogs(logs);
        setParsedItems([]);
        try {
            const extension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
            let mode = integrationMode;
            if (mode === 'auto') {
                if (extension === '.xer') mode = 'xer';
                else if (extension === '.xml') mode = 'msp';
                else if (extension === '.csv' || extension === '.xlsx' || extension === '.xlsm' || extension === '.xls') mode = 'csv';
                else {
                    throw new Error('Unsupported file extension. Please select .xer, .xml, .csv, or .xlsx');
                }
                logs.push(`Auto-detected format: ${mode.toUpperCase()}`);
            }
            if (mode === 'xer') {
                const text = await file.text();
                logs.push('Parsing Primavera P6 XER table records...');
                const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schedulerParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseXERToSow"])(text);
                logs.push(`Successfully parsed ${res.length} hierarchical and activity lines!`);
                setParsedItems(res);
            } else if (mode === 'msp') {
                const text = await file.text();
                logs.push('Parsing Microsoft Project XML hierarchy schema...');
                const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schedulerParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseMSPXmlToSow"])(text);
                logs.push(`Successfully parsed ${res.length} scheduled activity entries!`);
                setParsedItems(res);
            } else {
                logs.push('Reading spreadsheet file contents...');
                if (extension === '.csv') {
                    const text = await file.text();
                    const wb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["read"](text, {
                        type: 'string'
                    });
                    const wsName = wb.SheetNames[0];
                    const ws = wb.Sheets[wsName];
                    const rows = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].sheet_to_json(ws, {
                        defval: ''
                    });
                    logs.push(`Read ${rows.length} records. Extracting schema...`);
                    const headerSet = new Set(Object.keys(rows[0] || {}));
                    const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schedulerParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseCSVToSow"])(rows, headerSet);
                    logs.push(`Successfully mapped ${res.length} SOW activity blocks!`);
                    setParsedItems(res);
                } else {
                    const ab = await file.arrayBuffer();
                    const wb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["read"](ab, {
                        type: 'array'
                    });
                    const sheetName = wb.SheetNames.find((n)=>n.trim().toLowerCase() === 'master sow') || wb.SheetNames[0];
                    logs.push(`Loading worksheet: "${sheetName}"`);
                    const ws = wb.Sheets[sheetName];
                    let rangeStart = 0;
                    let headers = [];
                    const ref = ws['!ref'];
                    if (ref) {
                        const decRange = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].decode_range(ref);
                        const row0Headers = getRowHeaders(ws, 0, decRange);
                        const row3Headers = getRowHeaders(ws, 3, decRange);
                        if (row3Headers.has('SOW #') || row3Headers.has('Serial')) {
                            rangeStart = 3;
                            headers = Array.from(row3Headers);
                            logs.push('Auto-detected starting headers on Row 4.');
                        } else {
                            headers = Array.from(row0Headers);
                            logs.push('Auto-detected starting headers on Row 1.');
                        }
                    }
                    const rows = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].sheet_to_json(ws, {
                        range: rangeStart,
                        defval: ''
                    });
                    const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schedulerParser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseCSVToSow"])(rows, new Set(headers));
                    logs.push(`Successfully mapped ${res.length} hierarchical schedulers!`);
                    setParsedItems(res);
                }
            }
            setIntegrationLogs([
                ...logs
            ]);
        } catch (e) {
            setIntegrationError(e instanceof Error ? e.message : 'Error experienced parsing scheduling file.');
            logs.push(`PARSER ERROR: ${e instanceof Error ? e.message : 'Error experienced parsing file.'}`);
            setIntegrationLogs([
                ...logs
            ]);
        }
    }
    async function handleImportIntegration() {
        if (parsedItems.length === 0) return;
        if (isPublicViewOnly) {
            setIntegrationError('This is a public read-only demo project. Import is disabled.');
            return;
        }
        setIntegrationError('');
        setImporting(true);
        setImportMsg('Deploying integration schedule to database...');
        const logs = [
            ...integrationLogs,
            'Purging existing scheduling items...'
        ];
        setIntegrationLogs(logs);
        try {
            const { error: delErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('sow_items').delete().eq('projectid', projectid);
            if (delErr) throw new Error(delErr.message);
            logs.push(`Writing ${parsedItems.length} parsed items to database...`);
            setIntegrationLogs([
                ...logs
            ]);
            const BATCH = 250;
            for(let i = 0; i < parsedItems.length; i += BATCH){
                const slice = parsedItems.slice(i, i + BATCH);
                const payload = slice.map((item)=>({
                        ...item,
                        projectid
                    }));
                const { error: insErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('sow_items').insert(payload);
                if (insErr) throw new Error(insErr.message);
                logs.push(`Wrote database entities ${Math.min(parsedItems.length, i + BATCH)} / ${parsedItems.length}...`);
                setIntegrationLogs([
                    ...logs
                ]);
            }
            logs.push('Integration successfully deployed!');
            setIntegrationLogs([
                ...logs
            ]);
            setImportMsg('');
            setShowIntegration(false);
            setParsedItems([]);
            setIntegrationFile(null);
            await load();
        } catch (e) {
            setIntegrationError(e instanceof Error ? e.message : 'Database insertion failed.');
            setImportMsg('');
            logs.push(`DB ERROR: ${e instanceof Error ? e.message : 'Database insertion failed.'}`);
            setIntegrationLogs([
                ...logs
            ]);
        } finally{
            setImporting(false);
        }
    }
    // ── Derived form values ──────────────────────────────────────────────────
    const netQty = (form.quantity || 0) * (1 + (form.waste_pct || 0) / 100);
    const boqAmount = netQty * (form.unit_rate || 0);
    const costVar = (form.estimated_cost || 0) - (form.actual_cost || 0);
    const costVarPct = form.estimated_cost ? costVar / form.estimated_cost * 100 : 0;
    const baselineEnd = addDays(form.baseline_start || '', form.baseline_days || 0);
    const plannedEnd = addDays(form.planned_start || '', form.planned_days || 0);
    const actualEnd = addDays(form.actual_start || '', form.actual_days || 0);
    const schedVar = form.baseline_days && form.planned_days ? form.planned_days - form.baseline_days : 0;
    // ── Data fetching ────────────────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SowPage.useEffect": ()=>{
            if (projectid) load();
        }
    }["SowPage.useEffect"], [
        projectid
    ]);
    async function load() {
        setLoading(true);
        const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
        if (!user && !isPublicViewOnly) {
            router.push(`/login?next=/dashboard/${projectid}/sow`);
            return;
        }
        const [pRes, sRes] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('projects').select('*').eq('projectid', projectid).single(),
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('sow_items').select('*').eq('projectid', projectid).order('sow_number')
        ]);
        if (user && pRes.data) {
            const canAccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$access$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canAccessProject"])({
                user,
                projectid,
                projectOwnerId: pRes.data.user_id
            });
            if (!canAccess) {
                router.push('/pricing');
                return;
            }
        }
        if (pRes.data) setProject(pRes.data);
        if (sRes.data) setItems(sRes.data);
        setLoading(false);
    }
    // ── Summary stats ────────────────────────────────────────────────────────
    const l3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SowPage.useMemo[l3]": ()=>items.filter({
                "SowPage.useMemo[l3]": (i)=>i.hierarchy_level === 3
            }["SowPage.useMemo[l3]"])
    }["SowPage.useMemo[l3]"], [
        items
    ]);
    const totalBoq = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SowPage.useMemo[totalBoq]": ()=>l3.reduce({
                "SowPage.useMemo[totalBoq]": (s, i)=>s + (i.boq_amount || 0)
            }["SowPage.useMemo[totalBoq]"], 0)
    }["SowPage.useMemo[totalBoq]"], [
        l3
    ]);
    const totalEstCost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SowPage.useMemo[totalEstCost]": ()=>l3.reduce({
                "SowPage.useMemo[totalEstCost]": (s, i)=>s + (i.estimated_cost || 0)
            }["SowPage.useMemo[totalEstCost]"], 0)
    }["SowPage.useMemo[totalEstCost]"], [
        l3
    ]);
    const totalActCost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SowPage.useMemo[totalActCost]": ()=>l3.reduce({
                "SowPage.useMemo[totalActCost]": (s, i)=>s + (i.actual_cost || 0)
            }["SowPage.useMemo[totalActCost]"], 0)
    }["SowPage.useMemo[totalActCost]"], [
        l3
    ]);
    const criticalCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SowPage.useMemo[criticalCount]": ()=>l3.filter({
                "SowPage.useMemo[criticalCount]": (i)=>i.is_critical_path
            }["SowPage.useMemo[criticalCount]"]).length
    }["SowPage.useMemo[criticalCount]"], [
        l3
    ]);
    const statusCounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SowPage.useMemo[statusCounts]": ()=>{
            const c = {};
            l3.forEach({
                "SowPage.useMemo[statusCounts]": (i)=>{
                    const s = i.status || 'Not Started';
                    c[s] = (c[s] || 0) + 1;
                }
            }["SowPage.useMemo[statusCounts]"]);
            return c;
        }
    }["SowPage.useMemo[statusCounts]"], [
        l3
    ]);
    const avgProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SowPage.useMemo[avgProgress]": ()=>l3.length ? Math.round(l3.reduce({
                "SowPage.useMemo[avgProgress]": (s, i)=>s + (i.percent_complete || 0)
            }["SowPage.useMemo[avgProgress]"], 0) / l3.length) : 0
    }["SowPage.useMemo[avgProgress]"], [
        l3
    ]);
    // ── Tree structure ───────────────────────────────────────────────────────
    const l1Items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SowPage.useMemo[l1Items]": ()=>items.filter({
                "SowPage.useMemo[l1Items]": (i)=>i.hierarchy_level === 1
            }["SowPage.useMemo[l1Items]"])
    }["SowPage.useMemo[l1Items]"], [
        items
    ]);
    const l2Items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SowPage.useMemo[l2Items]": ()=>items.filter({
                "SowPage.useMemo[l2Items]": (i)=>i.hierarchy_level === 2
            }["SowPage.useMemo[l2Items]"])
    }["SowPage.useMemo[l2Items]"], [
        items
    ]);
    function getL2ForL1(l1) {
        const prefix = l1.sow_number + '.';
        return l2Items.filter((i)=>i.sow_number.startsWith(prefix) && i.sow_number.split('.').length === 2);
    }
    function getL3ForL2(l2) {
        const prefix = l2.sow_number + '.';
        return l3.filter((i)=>{
            if (!i.sow_number.startsWith(prefix)) return false;
            if (filterStatus !== 'All' && i.status !== filterStatus) return false;
            if (filterRisk !== 'All' && i.risk_level !== filterRisk) return false;
            return true;
        });
    }
    // ── Form helpers ─────────────────────────────────────────────────────────
    function openNew() {
        if (isPublicViewOnly) {
            setError('This is a public read-only demo project. Editing is disabled.');
            return;
        }
        setEditItem(null);
        setForm(emptyForm());
        setActiveSection(0);
        setError('');
        setShowForm(true);
    }
    function openEdit(item) {
        if (isPublicViewOnly) {
            setError('This is a public read-only demo project. Editing is disabled.');
            return;
        }
        setEditItem(item);
        setForm({
            ...item
        });
        setActiveSection(0);
        setError('');
        setShowForm(true);
    }
    function closeForm() {
        setShowForm(false);
        setEditItem(null);
        setError('');
    }
    function setF(patch) {
        setForm((f)=>({
                ...f,
                ...patch
            }));
    }
    function parseExcelDate(v) {
        if (v === null || v === undefined || v === '') return undefined;
        if (typeof v === 'string') {
            const trimmed = v.trim();
            if (!trimmed) return undefined;
            const d = new Date(trimmed);
            if (!isNaN(d.getTime())) return d.toISOString().split('T')[0];
            return undefined;
        }
        if (typeof v === 'number') {
            const d = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SSF"].parse_date_code(v);
            if (!d) return undefined;
            const dt = new Date(Date.UTC(d.y, d.m - 1, d.d));
            return dt.toISOString().split('T')[0];
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
    async function handleImportTemplate(file) {
        if (isPublicViewOnly) {
            setError('This is a public read-only demo project. Import is disabled.');
            return;
        }
        setError('');
        setImportMsg('Reading Excel...');
        setImporting(true);
        try {
            const ab = await file.arrayBuffer();
            const wb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["read"](ab, {
                type: 'array'
            });
            const sheetName = wb.SheetNames.find((n)=>n.trim().toLowerCase() === 'master sow');
            if (!sheetName) {
                throw new Error('Sheet "MASTER SOW" not found in the workbook.');
            }
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
                    ])) ?? 'Not Started',
                    dep_on: String(pick(r, [
                        'Dependent On',
                        'Dep. On (SOW#)'
                    ]) ?? '').trim() || undefined,
                    dep_type: normalizeDepType(pick(r, [
                        'Dependency Type',
                        'Dep. Type'
                    ])) ?? 'FS',
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
                    if (payload[k] === '' || payload[k] === null || payload[k] === undefined) {
                        delete payload[k];
                    }
                });
                return payload;
            }).filter(Boolean);
            if (mapped.length === 0) {
                throw new Error('No valid SOW rows found. Ensure the template uses the MASTER SOW sheet and contains a Serial column.');
            }
            setImportMsg('Clearing existing SOW items...');
            const { error: delErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('sow_items').delete().eq('projectid', projectid);
            if (delErr) throw new Error(delErr.message);
            setImportMsg(`Importing ${mapped.length} rows...`);
            const BATCH = 250;
            for(let i = 0; i < mapped.length; i += BATCH){
                const slice = mapped.slice(i, i + BATCH);
                const { error: insErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('sow_items').insert(slice);
                if (insErr) throw new Error(insErr.message);
                setImportMsg(`Imported ${Math.min(mapped.length, i + BATCH)} / ${mapped.length}...`);
            }
            setImportMsg('Import complete. Refreshing...');
            await load();
            setImportMsg('');
        } catch (e) {
            setError(e instanceof Error ? e.message : 'Import failed');
        } finally{
            setImporting(false);
        }
    }
    async function handleSave(e) {
        e.preventDefault();
        if (isPublicViewOnly) {
            setError('This is a public read-only demo project. Editing is disabled.');
            return;
        }
        if (!form.sow_number) {
            setError('SOW Number is required.');
            return;
        }
        if (!form.hierarchy_level) {
            setError('Hierarchy level is required.');
            return;
        }
        setSaving(true);
        setError('');
        const payload = {
            ...form,
            projectid,
            net_qty: form.hierarchy_level === 3 ? netQty : undefined,
            boq_amount: form.hierarchy_level === 3 ? boqAmount : undefined,
            cost_variance: form.hierarchy_level === 3 ? costVar : undefined,
            cost_var_pct: form.hierarchy_level === 3 ? costVarPct : undefined,
            baseline_end: baselineEnd || undefined,
            planned_end: plannedEnd || undefined,
            actual_end: actualEnd || undefined,
            schedule_variance: schedVar || undefined
        };
        // Remove undefined keys
        Object.keys(payload).forEach((k)=>{
            if (payload[k] === undefined) delete payload[k];
        });
        let err;
        if (editItem) {
            const { error: e } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('sow_items').update(payload).eq('sow_id', editItem.sow_id);
            err = e;
        } else {
            const { error: e } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('sow_items').insert([
                payload
            ]);
            err = e;
        }
        if (err) {
            setError(err.message);
            setSaving(false);
            return;
        }
        setSaving(false);
        closeForm();
        load();
    }
    async function handleDelete(item) {
        if (!confirm(`Delete SOW ${item.sow_number}? This cannot be undone.`)) return;
        await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('sow_items').delete().eq('sow_id', item.sow_id);
        load();
    }
    function toggleCollapse(key) {
        setCollapsed((c)=>({
                ...c,
                [key]: !c[key]
            }));
    }
    // ── Loading / not found ──────────────────────────────────────────────────
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: isDark ? '#0a0c0e' : '#F8FAFC',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'monospace',
            color: isDark ? '#484f58' : '#64748b',
            fontSize: 13
        },
        children: "Loading SOW..."
    }, void 0, false, {
        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
        lineNumber: 703,
        columnNumber: 5
    }, this);
    if (!project) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: isDark ? '#0a0c0e' : '#F8FAFC',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'monospace',
            color: '#f87171',
            fontSize: 13
        },
        children: [
            "Project not found. ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "/dashboard",
                style: {
                    color: '#f59e0b',
                    marginLeft: 8
                },
                children: "← Back"
            }, void 0, false, {
                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                lineNumber: 709,
                columnNumber: 26
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
        lineNumber: 708,
        columnNumber: 5
    }, this);
    const sc = projectStatusColor[project.status] || projectStatusColor['Planning'];
    const hText = isDark ? '#e6edf3' : '#0f172a';
    const textCol = isDark ? '#c9d1d9' : '#1e293b';
    const subText = isDark ? '#484f58' : '#64748b';
    const accentBorder = isDark ? '#161b22' : '#cbd5e1';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            fontFamily: "'DM Mono','Courier New',monospace",
            background: isDark ? '#0a0c0e' : '#F8FAFC',
            minHeight: '100vh',
            color: isDark ? '#c9d1d9' : '#1e293b',
            backgroundImage: isDark ? 'linear-gradient(rgba(96,165,250,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(96,165,250,0.025) 1px,transparent 1px)' : 'linear-gradient(rgba(0,0,0,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.015) 1px,transparent 1px)',
            backgroundSize: '32px 32px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Barlow+Condensed:wght@500;700;800&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        .card{background:${isDark ? '#0d1117' : '#ffffff'};border:1px solid ${isDark ? '#21262d' : '#cbd5e1'};border-radius:8px;padding:18px;}
        .tag{display:inline-flex;align-items:center;gap:5px;padding:3px 8px;border-radius:4px;font-size:11px;font-weight:500;}
        .btn{padding:7px 14px;border-radius:6px;border:1px solid ${isDark ? '#30363d' : '#cbd5e1'};background:${isDark ? '#161b22' : '#ffffff'};color:${isDark ? '#c9d1d9' : '#475569'};cursor:pointer;font-family:inherit;font-size:12px;transition:all 0.15s;}
        .btn:hover{border-color:#f59e0b;color:#f59e0b;}
        .btn-primary{background:#f59e0b;border-color:#f59e0b;color:#0a0c0e;font-weight:700;}
        .btn-primary:hover{background:#fbbf24;color:#0a0c0e;}
        .btn-danger{border-color:#f8717133;color:#f87171;}
        .btn-danger:hover{border-color:#f87171;background:#2d0f0f;}
        .fi{width:100%;background:${isDark ? '#0a0c0e' : '#ffffff'};border:1px solid ${isDark ? '#21262d' : '#cbd5e1'};border-radius:5px;color:${isDark ? '#c9d1d9' : '#1e293b'};font-family:inherit;font-size:12px;padding:8px 10px;outline:none;transition:border-color 0.15s;}
        .fi:focus{border-color:#f59e0b;}
        .fi option{background:${isDark ? '#0d1117' : '#ffffff'};}
        .fi::placeholder{color:${isDark ? '#484f58' : '#94a3b8'};}
        .sow-l1{background:${isDark ? '#0d1117' : '#ffffff'};border:1px solid ${isDark ? '#21262d' : '#cbd5e1'};border-radius:8px;margin-bottom:10px;overflow:hidden;}
        .sow-l1-header{padding:12px 16px;display:flex;align-items:center;gap:10px;cursor:pointer;user-select:none;}
        .sow-l1-header:hover{background:${isDark ? '#161b22' : '#f8fafc'};}
        .sow-l2{border-top:1px solid ${isDark ? '#161b22' : '#e2e8f0'};padding:0 0 0 24px;}
        .sow-l2-header{padding:10px 16px;display:flex;align-items:center;gap:10px;cursor:pointer;user-select:none;border-bottom:1px solid ${isDark ? '#161b22' : '#e2e8f0'};}
        .sow-l2-header:hover{background:${isDark ? '#0d1117' : '#f1f5f9'};}
        .sow-l3-row{display:grid;grid-template-columns:90px 1fr 80px 80px 90px 90px 80px 60px 80px;gap:8px;align-items:center;padding:9px 16px;border-bottom:1px solid ${isDark ? '#0d1117' : '#f1f5f9'};font-size:11px;}
        .sow-l3-row:hover{background:${isDark ? '#0d1117' : '#f8fafc'};}
        .sow-l3-row:last-child{border-bottom:none;}
        .section-tab{padding:8px 14px;cursor:pointer;font-size:11px;font-weight:600;letter-spacing:0.05em;border-bottom:2px solid transparent;transition:all 0.15s;color:#6e7681;white-space:nowrap;}
        .section-tab.active{color:#f59e0b;border-bottom-color:#f59e0b;}
        .section-tab:hover{color:${isDark ? '#c9d1d9' : '#1e293b'};}
        .calc-field{background:${isDark ? '#0a0c0e' : '#f1f5f9'};border:1px solid ${isDark ? '#161b22' : '#cbd5e1'};border-radius:5px;color:#f59e0b;font-family:inherit;font-size:12px;padding:8px 10px;}
        .form-label{font-size:10px;color:${isDark ? '#484f58' : '#64748b'};letter-spacing:0.06em;margin-bottom:5px;}
        .form-row{display:grid;gap:12px;margin-bottom:14px;}
        @keyframes slideIn{from{transform:translateX(100%);opacity:0;}to{transform:translateX(0);opacity:1;}}
        .slide-in{animation:slideIn 0.2s ease forwards;}
        @keyframes fadeIn{from{opacity:0;transform:translateY(4px);}to{opacity:1;transform:translateY(0);}}
        .fade-in{animation:fadeIn 0.2s ease forwards;}
        .progress-bar{height:4px;background:${isDark ? '#161b22' : '#e2e8f0'};border-radius:2px;overflow:hidden;}
        .progress-fill{height:100%;border-radius:2px;transition:width 0.4s ease;}
        ::-webkit-scrollbar{width:6px;height:6px;}
        ::-webkit-scrollbar-track{background:${isDark ? '#0a0c0e' : '#f1f5f9'};}
        ::-webkit-scrollbar-thumb{background:${isDark ? '#21262d' : '#94a3b8'};border-radius:3px;}

        @media (max-width: 640px) {
          .sow-topbar { padding: 0 12px !important; height: auto !important; padding-top: 10px !important; padding-bottom: 10px !important; flex-wrap: wrap !important; gap: 10px !important; }
          .sow-topbar-left { flex-wrap: wrap !important; gap: 10px !important; }
          .sow-topbar-right { width: 100% !important; justify-content: flex-start !important; flex-wrap: wrap !important; }
          .sow-kpis { padding: 12px !important; gap: 14px !important; }
          .sow-status { padding: 10px 12px !important; }
          .sow-content { padding: 12px !important; padding-right: 12px !important; overflow-x: auto !important; }
          .sow-cols { min-width: 860px !important; }
          .sow-l3-row { min-width: 860px !important; }
          .sow-form { width: 100vw !important; max-width: 100vw !important; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                lineNumber: 721,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sow-topbar",
                style: {
                    background: isDark ? '#0d1117' : '#ffffff',
                    borderBottom: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1'),
                    padding: '0 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: 56,
                    position: 'sticky',
                    top: 0,
                    zIndex: 20
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sow-topbar-left",
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 14
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn",
                                onClick: ()=>router.push(`/dashboard/${projectid}`),
                                style: {
                                    fontSize: '11px',
                                    padding: '5px 10px'
                                },
                                children: "← Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 777,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "'Barlow Condensed',sans-serif",
                                            fontWeight: 700,
                                            fontSize: 18,
                                            color: isDark ? '#e6edf3' : '#0f172a'
                                        },
                                        children: project.project_name
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 779,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 11,
                                            color: isDark ? '#484f58' : '#64748b'
                                        },
                                        children: [
                                            project.project_code,
                                            " · Scope of Work"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 780,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 778,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tag",
                                style: {
                                    background: sc.bg,
                                    color: sc.text
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 6,
                                            height: 6,
                                            borderRadius: '50%',
                                            background: sc.dot
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 783,
                                        columnNumber: 13
                                    }, this),
                                    project.status
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 782,
                                columnNumber: 11
                            }, this),
                            isPublicViewOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tag",
                                style: {
                                    background: '#2d1f05',
                                    color: '#f59e0b'
                                },
                                children: "READ-ONLY DEMO"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 786,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                        lineNumber: 776,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sow-topbar-right",
                        style: {
                            display: 'flex',
                            gap: 8,
                            alignItems: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                compact: true
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 792,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `/dashboard/${projectid}/boq`,
                                style: {
                                    padding: '5px 12px',
                                    fontSize: 11,
                                    fontWeight: 700,
                                    color: '#BA7517',
                                    background: isDark ? '#161b22' : '#fff3cd',
                                    border: '1px solid ' + (isDark ? '#30363d' : '#ffe18a'),
                                    borderRadius: '6px',
                                    textDecoration: 'none'
                                },
                                children: "BOQ"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 793,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `/dashboard/${projectid}/gantt`,
                                style: {
                                    padding: '5px 12px',
                                    fontSize: 11,
                                    fontWeight: 700,
                                    color: isDark ? '#4ade80' : '#15803d',
                                    background: isDark ? '#161b22' : '#dcfce7',
                                    border: '1px solid ' + (isDark ? '#30363d' : '#bbf7d0'),
                                    borderRadius: '6px',
                                    textDecoration: 'none'
                                },
                                children: "Gantt"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 794,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn",
                                onClick: ()=>{
                                    if (isPublicViewOnly) {
                                        setError('This is a public read-only demo project. Integration is disabled.');
                                        return;
                                    }
                                    setShowIntegration(true);
                                },
                                disabled: isPublicViewOnly || importing,
                                style: {
                                    fontSize: '12px',
                                    opacity: isPublicViewOnly || importing ? 0.5 : 1,
                                    border: '1px solid #BA7517',
                                    color: '#BA7517',
                                    cursor: isPublicViewOnly || importing ? 'not-allowed' : 'pointer'
                                },
                                children: "📊 Scheduler Integration (P6 / MSP / CSV)"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 795,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-primary",
                                onClick: openNew,
                                disabled: isPublicViewOnly,
                                style: {
                                    fontSize: '12px',
                                    opacity: isPublicViewOnly ? 0.5 : 1,
                                    cursor: isPublicViewOnly ? 'not-allowed' : 'pointer'
                                },
                                children: "+ Add SOW Item"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 809,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: importInputRef,
                                type: "file",
                                accept: ".xlsx,.xlsm,.xls,.csv",
                                style: {
                                    display: 'none'
                                },
                                onChange: (e)=>{
                                    const f = e.target.files?.[0];
                                    e.currentTarget.value = '';
                                    if (!f) return;
                                    void handleImportTemplate(f);
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 817,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                        lineNumber: 791,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                lineNumber: 775,
                columnNumber: 7
            }, this),
            importMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '10px 24px',
                    borderBottom: '1px solid #161b22',
                    color: '#f59e0b',
                    fontSize: 11
                },
                children: importMsg
            }, void 0, false, {
                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                lineNumber: 833,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sow-kpis",
                style: {
                    background: '#0d1117',
                    borderBottom: '1px solid #21262d',
                    padding: '14px 24px',
                    display: 'flex',
                    gap: 24,
                    alignItems: 'center',
                    flexWrap: 'wrap'
                },
                children: [
                    [
                        {
                            label: 'TOTAL BOQ',
                            value: fmt(totalBoq, project.currency),
                            color: '#f59e0b'
                        },
                        {
                            label: 'EST. COST',
                            value: fmt(totalEstCost, project.currency),
                            color: '#60a5fa'
                        },
                        {
                            label: 'ACTUAL COST',
                            value: fmt(totalActCost, project.currency),
                            color: '#4ade80'
                        },
                        {
                            label: 'AVG PROGRESS',
                            value: `${avgProgress}%`,
                            color: '#c084fc'
                        },
                        {
                            label: 'CRITICAL PATH',
                            value: `${criticalCount} items`,
                            color: '#f87171'
                        },
                        {
                            label: 'LINE ITEMS',
                            value: `${l3.length}`,
                            color: '#6e7681'
                        }
                    ].map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 9,
                                        color: '#484f58',
                                        letterSpacing: '0.1em'
                                    },
                                    children: k.label
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                    lineNumber: 849,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: "'Barlow Condensed',sans-serif",
                                        fontWeight: 700,
                                        fontSize: 18,
                                        color: k.color
                                    },
                                    children: k.value
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                    lineNumber: 850,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, k.label, true, {
                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                            lineNumber: 848,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginLeft: 'auto',
                            display: 'flex',
                            gap: 8,
                            alignItems: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "fi",
                                value: filterStatus,
                                onChange: (e)=>setFilterStatus(e.target.value),
                                style: {
                                    width: 130,
                                    fontSize: 11
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "All",
                                        children: "All Statuses"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 855,
                                        columnNumber: 13
                                    }, this),
                                    STATUS_OPTS.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            children: s
                                        }, s, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 856,
                                            columnNumber: 35
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 854,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "fi",
                                value: filterRisk,
                                onChange: (e)=>setFilterRisk(e.target.value),
                                style: {
                                    width: 120,
                                    fontSize: 11
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "All",
                                        children: "All Risks"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 859,
                                        columnNumber: 13
                                    }, this),
                                    RISK_OPTS.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            children: r
                                        }, r, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 860,
                                            columnNumber: 33
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 858,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                        lineNumber: 853,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                lineNumber: 839,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sow-status",
                style: {
                    padding: '10px 24px',
                    display: 'flex',
                    gap: 8,
                    flexWrap: 'wrap',
                    borderBottom: '1px solid ' + accentBorder
                },
                children: [
                    Object.entries(statusCounts).map(([s, n])=>{
                        const c = statusColor[s] || {
                            bg: isDark ? '#161b22' : '#f1f5f9',
                            text: isDark ? '#6e7681' : '#64748b'
                        };
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "tag",
                            style: {
                                background: isDark ? c.bg : '#f1f5f9',
                                color: isDark ? c.text : '#475569',
                                border: isDark ? 'none' : '1px solid #cbd5e1'
                            },
                            children: [
                                s,
                                " · ",
                                n
                            ]
                        }, s, true, {
                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                            lineNumber: 869,
                            columnNumber: 18
                        }, this);
                    }),
                    l3.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 11,
                            color: subText
                        },
                        children: "No line items yet — click + Add SOW Item to start."
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                        lineNumber: 871,
                        columnNumber: 29
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                lineNumber: 866,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: 24,
                    paddingRight: showForm ? 520 : 24,
                    transition: 'padding-right 0.2s ease'
                },
                className: "fade-in sow-content",
                children: [
                    l3.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sow-cols",
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '90px 1fr 80px 80px 90px 90px 80px 60px 80px',
                            gap: 8,
                            padding: '6px 16px',
                            marginBottom: 4
                        },
                        children: [
                            'SOW #',
                            'DESCRIPTION',
                            'STATUS',
                            'RISK',
                            'PLANNED',
                            'ACTUAL',
                            '% DONE',
                            'CP',
                            ''
                        ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 9,
                                    color: subText,
                                    letterSpacing: '0.08em'
                                },
                                children: h
                            }, h, false, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 881,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                        lineNumber: 879,
                        columnNumber: 11
                    }, this),
                    l1Items.length === 0 && l3.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            padding: '60px 0',
                            color: '#484f58'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: "'Barlow Condensed',sans-serif",
                                    fontSize: 22,
                                    marginBottom: 8
                                },
                                children: "NO SOW ITEMS YET"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 889,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 12,
                                    marginBottom: 20
                                },
                                children: "Start by adding an L1 scope section, then L2 groups, then L3 line items."
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 890,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-primary",
                                onClick: openNew,
                                children: "+ Add First Item"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 891,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                        lineNumber: 888,
                        columnNumber: 11
                    }, this),
                    l1Items.map((l1)=>{
                        const l2s = getL2ForL1(l1);
                        const isL1Collapsed = collapsed[l1.sow_id];
                        const l1L3s = l3.filter((i)=>i.sow_number.startsWith(l1.sow_number + '.'));
                        const l1Progress = l1L3s.length ? Math.round(l1L3s.reduce((s, i)=>s + (i.percent_complete || 0), 0) / l1L3s.length) : 0;
                        const l1Boq = l1L3s.reduce((s, i)=>s + (i.boq_amount || 0), 0);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sow-l1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sow-l1-header",
                                    onClick: ()=>toggleCollapse(l1.sow_id),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: "'Barlow Condensed',sans-serif",
                                                fontWeight: 700,
                                                fontSize: 13,
                                                color: '#f59e0b',
                                                minWidth: 40
                                            },
                                            children: l1.sow_number
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 906,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: "'Barlow Condensed',sans-serif",
                                                fontWeight: 700,
                                                fontSize: 15,
                                                color: hText,
                                                flex: 1
                                            },
                                            children: l1.scope_l1
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 907,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 10,
                                                color: subText
                                            },
                                            children: [
                                                l1L3s.length,
                                                " items"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 908,
                                            columnNumber: 17
                                        }, this),
                                        l1Boq > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 11,
                                                color: '#f59e0b'
                                            },
                                            children: fmt(l1Boq, project.currency)
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 909,
                                            columnNumber: 31
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: 80
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "progress-bar",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "progress-fill",
                                                        style: {
                                                            width: `${l1Progress}%`,
                                                            background: l1Progress === 100 ? '#4ade80' : '#f59e0b'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 911,
                                                        columnNumber: 49
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 911,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 9,
                                                        color: subText
                                                    },
                                                    children: [
                                                        l1Progress,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 912,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 910,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn",
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                openEdit(l1);
                                            },
                                            style: {
                                                fontSize: 10,
                                                padding: '3px 8px'
                                            },
                                            children: "Edit"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 914,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn btn-danger",
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                handleDelete(l1);
                                            },
                                            style: {
                                                fontSize: 10,
                                                padding: '3px 8px'
                                            },
                                            children: "✕"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 915,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: subText,
                                                fontSize: 12
                                            },
                                            children: isL1Collapsed ? '▶' : '▼'
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 916,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                    lineNumber: 905,
                                    columnNumber: 15
                                }, this),
                                !isL1Collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sow-l2",
                                    children: [
                                        l2s.map((l2)=>{
                                            const l3rows = getL3ForL2(l2);
                                            const isL2Collapsed = collapsed[l2.sow_id];
                                            const l2Progress = l3rows.length ? Math.round(l3rows.reduce((s, i)=>s + (i.percent_complete || 0), 0) / l3rows.length) : 0;
                                            const l2Boq = l3rows.reduce((s, i)=>s + (i.boq_amount || 0), 0);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sow-l2-header",
                                                        onClick: ()=>toggleCollapse(l2.sow_id),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontFamily: "'Barlow Condensed',sans-serif",
                                                                    fontWeight: 600,
                                                                    fontSize: 12,
                                                                    color: isDark ? '#60a5fa' : '#2563eb',
                                                                    minWidth: 50
                                                                },
                                                                children: l2.sow_number
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 931,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontFamily: "'Barlow Condensed',sans-serif",
                                                                    fontWeight: 600,
                                                                    fontSize: 13,
                                                                    color: textCol,
                                                                    flex: 1
                                                                },
                                                                children: l2.item_l2
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 932,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 10,
                                                                    color: subText
                                                                },
                                                                children: [
                                                                    l3rows.length,
                                                                    " items"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 933,
                                                                columnNumber: 27
                                                            }, this),
                                                            l2Boq > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 11,
                                                                    color: isDark ? '#60a5fa' : '#2563eb'
                                                                },
                                                                children: fmt(l2Boq, project.currency)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 934,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    width: 60
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "progress-bar",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "progress-fill",
                                                                        style: {
                                                                            width: `${l2Progress}%`,
                                                                            background: isDark ? '#60a5fa' : '#2563eb'
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                        lineNumber: 936,
                                                                        columnNumber: 59
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                    lineNumber: 936,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 935,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "btn",
                                                                onClick: (e)=>{
                                                                    e.stopPropagation();
                                                                    openEdit(l2);
                                                                },
                                                                style: {
                                                                    fontSize: 10,
                                                                    padding: '3px 8px'
                                                                },
                                                                children: "Edit"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 938,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "btn btn-danger",
                                                                onClick: (e)=>{
                                                                    e.stopPropagation();
                                                                    handleDelete(l2);
                                                                },
                                                                style: {
                                                                    fontSize: 10,
                                                                    padding: '3px 8px'
                                                                },
                                                                children: "✕"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 939,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: subText,
                                                                    fontSize: 12
                                                                },
                                                                children: isL2Collapsed ? '▶' : '▼'
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 940,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 930,
                                                        columnNumber: 25
                                                    }, this),
                                                    !isL2Collapsed && l3rows.map((row)=>{
                                                        const sc2 = statusColor[row.status || 'Not Started'] || {
                                                            bg: '#161b22',
                                                            text: '#6e7681'
                                                        };
                                                        const rc = riskColor[row.risk_level || 'Low'] || '#6e7681';
                                                        const pct = row.percent_complete || 0;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "sow-l3-row",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        color: isDark ? '#6e7681' : '#64748b',
                                                                        fontSize: 10
                                                                    },
                                                                    children: row.sow_number
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                    lineNumber: 950,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                color: textCol,
                                                                                fontSize: 11,
                                                                                marginBottom: 3
                                                                            },
                                                                            children: row.sub_item_l3
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                            lineNumber: 952,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        row.particulars && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                color: subText,
                                                                                fontSize: 10,
                                                                                overflow: 'hidden',
                                                                                textOverflow: 'ellipsis',
                                                                                whiteSpace: 'nowrap',
                                                                                maxWidth: 220
                                                                            },
                                                                            children: row.particulars
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                            lineNumber: 953,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "progress-bar",
                                                                            style: {
                                                                                marginTop: 4,
                                                                                width: '80%'
                                                                            },
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "progress-fill",
                                                                                style: {
                                                                                    width: `${pct}%`,
                                                                                    background: pct === 100 ? '#4ade80' : pct > 50 ? '#f59e0b' : isDark ? '#60a5fa' : '#2563eb'
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                                lineNumber: 955,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                            lineNumber: 954,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                    lineNumber: 951,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "tag",
                                                                    style: {
                                                                        background: isDark ? sc2.bg : '#f1f5f9',
                                                                        color: isDark ? sc2.text : '#475569',
                                                                        border: isDark ? 'none' : '1px solid #cbd5e1',
                                                                        fontSize: 10
                                                                    },
                                                                    children: row.status || 'Not Started'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                    lineNumber: 958,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        color: rc,
                                                                        fontSize: 10
                                                                    },
                                                                    children: row.risk_level || '—'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                    lineNumber: 959,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        color: isDark ? '#6e7681' : '#64748b',
                                                                        fontSize: 10
                                                                    },
                                                                    children: row.planned_start || '—'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                    lineNumber: 960,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        color: isDark ? '#6e7681' : '#64748b',
                                                                        fontSize: 10
                                                                    },
                                                                    children: row.actual_start || '—'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                    lineNumber: 961,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        color: pct === 100 ? '#4ade80' : textCol,
                                                                        fontWeight: 600
                                                                    },
                                                                    children: [
                                                                        pct,
                                                                        "%"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                    lineNumber: 962,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        color: row.is_critical_path ? '#f87171' : subText,
                                                                        fontSize: 10
                                                                    },
                                                                    children: row.is_critical_path ? '⚑ YES' : 'No'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                    lineNumber: 963,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: 'flex',
                                                                        gap: 4
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            className: "btn",
                                                                            onClick: ()=>openEdit(row),
                                                                            style: {
                                                                                fontSize: 10,
                                                                                padding: '3px 7px'
                                                                            },
                                                                            children: "Edit"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                            lineNumber: 965,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            className: "btn btn-danger",
                                                                            onClick: ()=>handleDelete(row),
                                                                            style: {
                                                                                fontSize: 10,
                                                                                padding: '3px 7px'
                                                                            },
                                                                            children: "✕"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                            lineNumber: 966,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                    lineNumber: 964,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, row.sow_id, true, {
                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                            lineNumber: 949,
                                                            columnNumber: 29
                                                        }, this);
                                                    }),
                                                    !isL2Collapsed && l3rows.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            padding: '12px 16px',
                                                            fontSize: 11,
                                                            color: '#484f58'
                                                        },
                                                        children: "No L3 items under this group."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 972,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, l2.sow_id, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 929,
                                                columnNumber: 23
                                            }, this);
                                        }),
                                        l2s.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                padding: '12px 16px',
                                                fontSize: 11,
                                                color: subText
                                            },
                                            children: "No L2 groups under this section."
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 978,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                    lineNumber: 921,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, l1.sow_id, true, {
                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                            lineNumber: 903,
                            columnNumber: 13
                        }, this);
                    }),
                    l3.filter((i)=>{
                        const parts = i.sow_number.split('.');
                        if (parts.length < 3) return false;
                        const l1Num = parts[0];
                        return !l1Items.find((l)=>l.sow_number === l1Num);
                    }).map((row)=>{
                        const sc2 = statusColor[row.status || 'Not Started'] || {
                            bg: '#161b22',
                            text: '#6e7681'
                        };
                        const rc = riskColor[row.risk_level || 'Low'] || '#6e7681';
                        const pct = row.percent_complete || 0;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sow-l3-row",
                            style: {
                                background: isDark ? '#0d1117' : '#ffffff',
                                borderRadius: 6,
                                marginBottom: 4,
                                border: '1px solid ' + (isDark ? 'transparent' : '#cbd5e1')
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: isDark ? '#6e7681' : '#64748b',
                                        fontSize: 10
                                    },
                                    children: row.sow_number
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                    lineNumber: 998,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: textCol,
                                                fontSize: 11
                                            },
                                            children: row.sub_item_l3 || row.particulars
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 1000,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "progress-bar",
                                            style: {
                                                marginTop: 4,
                                                width: '80%'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "progress-fill",
                                                style: {
                                                    width: `${pct}%`,
                                                    background: isDark ? '#60a5fa' : '#2563eb'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1002,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 1001,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                    lineNumber: 999,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "tag",
                                    style: {
                                        background: isDark ? sc2.bg : '#f1f5f9',
                                        color: isDark ? sc2.text : '#475569',
                                        border: isDark ? 'none' : '1px solid #cbd5e1',
                                        fontSize: 10
                                    },
                                    children: row.status || 'Not Started'
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                    lineNumber: 1005,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: rc,
                                        fontSize: 10
                                    },
                                    children: row.risk_level || '—'
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                    lineNumber: 1006,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: isDark ? '#6e7681' : '#64748b',
                                        fontSize: 10
                                    },
                                    children: row.planned_start || '—'
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                    lineNumber: 1007,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: isDark ? '#6e7681' : '#64748b',
                                        fontSize: 10
                                    },
                                    children: row.actual_start || '—'
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                    lineNumber: 1008,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: textCol,
                                        fontWeight: 600
                                    },
                                    children: [
                                        pct,
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                    lineNumber: 1009,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: row.is_critical_path ? '#f87171' : subText,
                                        fontSize: 10
                                    },
                                    children: row.is_critical_path ? '⚑' : '—'
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                    lineNumber: 1010,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: 4
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn",
                                            onClick: ()=>openEdit(row),
                                            style: {
                                                fontSize: 10,
                                                padding: '3px 7px'
                                            },
                                            children: "Edit"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 1012,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn btn-danger",
                                            onClick: ()=>handleDelete(row),
                                            style: {
                                                fontSize: 10,
                                                padding: '3px 7px'
                                            },
                                            children: "✕"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 1013,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                    lineNumber: 1011,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, row.sow_id, true, {
                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                            lineNumber: 997,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                lineNumber: 875,
                columnNumber: 7
            }, this),
            showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "slide-in sow-form",
                style: {
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    width: 500,
                    height: '100vh',
                    background: isDark ? '#0d1117' : '#ffffff',
                    borderLeft: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1'),
                    zIndex: 30,
                    display: 'flex',
                    flexDirection: 'column',
                    overflowY: 'auto',
                    color: textCol
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '16px 20px',
                            borderBottom: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1'),
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            position: 'sticky',
                            top: 0,
                            background: isDark ? '#0d1117' : '#ffffff',
                            zIndex: 1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "'Barlow Condensed',sans-serif",
                                            fontWeight: 700,
                                            fontSize: 16,
                                            color: hText
                                        },
                                        children: editItem ? `EDIT SOW ${editItem.sow_number}` : 'NEW SOW ITEM'
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1026,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 10,
                                            color: subText,
                                            marginTop: 2
                                        },
                                        children: form.hierarchy_level === 1 ? 'L1 — Scope Section' : form.hierarchy_level === 2 ? 'L2 — Item Group' : 'L3 — Line Item'
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1029,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 1025,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn",
                                onClick: closeForm,
                                style: {
                                    fontSize: 12,
                                    padding: '5px 10px'
                                },
                                children: "✕ Close"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 1033,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                        lineNumber: 1024,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            borderBottom: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1'),
                            overflowX: 'auto',
                            background: isDark ? '#0a0c0e' : '#f8fafc'
                        },
                        children: [
                            '① Identity',
                            '② Schedule',
                            '③ BOQ',
                            '④ Cost',
                            '⑤ Resources',
                            '⑥ Status'
                        ].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `section-tab ${activeSection === i ? 'active' : ''}`,
                                onClick: ()=>setActiveSection(i),
                                children: s
                            }, i, false, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 1039,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                        lineNumber: 1037,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSave,
                        style: {
                            flex: 1,
                            padding: 20
                        },
                        children: [
                            activeSection === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fade-in",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr 1fr'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "SOW NUMBER ★"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1050,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "fi",
                                                        placeholder: "e.g. 1 / 1.1 / 1.1.1",
                                                        value: form.sow_number || '',
                                                        onChange: (e)=>setF({
                                                                sow_number: e.target.value
                                                            }),
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1051,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1049,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "HIERARCHY LEVEL ★"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1054,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "fi",
                                                        value: form.hierarchy_level || 3,
                                                        onChange: (e)=>setF({
                                                                hierarchy_level: Number(e.target.value)
                                                            }),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: 1,
                                                                children: "L1 — Scope Section"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 1056,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: 2,
                                                                children: "L2 — Item Group"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 1057,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: 3,
                                                                children: "L3 — Line Item"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 1058,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1055,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1053,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1048,
                                        columnNumber: 17
                                    }, this),
                                    (form.hierarchy_level === 1 || form.hierarchy_level === 2 || form.hierarchy_level === 3) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-label",
                                                    children: [
                                                        "SCOPE — L1 ",
                                                        form.hierarchy_level === 1 ? '★' : ''
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1066,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "fi",
                                                    placeholder: "e.g. SUBSTRUCTURE",
                                                    value: form.scope_l1 || '',
                                                    onChange: (e)=>setF({
                                                            scope_l1: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1067,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 1065,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1064,
                                        columnNumber: 19
                                    }, this),
                                    (form.hierarchy_level === 2 || form.hierarchy_level === 3) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-label",
                                                    children: [
                                                        "ITEM — L2 ",
                                                        form.hierarchy_level === 2 ? '★' : ''
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1074,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "fi",
                                                    placeholder: "e.g. Excavation & Compaction",
                                                    value: form.item_l2 || '',
                                                    onChange: (e)=>setF({
                                                            item_l2: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1075,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 1073,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1072,
                                        columnNumber: 19
                                    }, this),
                                    form.hierarchy_level === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-label",
                                                    children: "SUB ITEM — L3 ★"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1082,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "fi",
                                                    placeholder: "e.g. Survey and Marking",
                                                    value: form.sub_item_l3 || '',
                                                    onChange: (e)=>setF({
                                                            sub_item_l3: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1083,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 1081,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1080,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-label",
                                                    children: "PARTICULARS / SPECIFICATION"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1090,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    className: "fi",
                                                    rows: 3,
                                                    placeholder: "e.g. 10cm thick PC floor slab; Total Station required",
                                                    value: form.particulars || '',
                                                    onChange: (e)=>setF({
                                                            particulars: e.target.value
                                                        }),
                                                    style: {
                                                        resize: 'vertical'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1091,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 1089,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1088,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-label",
                                                    children: "ASSIGNED TO"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1097,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "fi",
                                                    placeholder: "e.g. Engineer_Site",
                                                    value: form.assigned_to || '',
                                                    onChange: (e)=>setF({
                                                            assigned_to: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1098,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 1096,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1095,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 1047,
                                columnNumber: 15
                            }, this),
                            activeSection === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fade-in",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 11,
                                            color: '#60a5fa',
                                            letterSpacing: '0.06em',
                                            marginBottom: 10
                                        },
                                        children: "BASELINE"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1108,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr 1fr 1fr'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "START DATE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1111,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        className: "fi",
                                                        value: form.baseline_start || '',
                                                        onChange: (e)=>setF({
                                                                baseline_start: e.target.value
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1112,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1110,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "DAYS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1115,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        className: "fi",
                                                        min: 0,
                                                        placeholder: "0",
                                                        value: form.baseline_days ?? '',
                                                        onChange: (e)=>setF({
                                                                baseline_days: Number(e.target.value)
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1116,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1114,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "END DATE (auto)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1119,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "calc-field",
                                                        children: baselineEnd || '—'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1120,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1118,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1109,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 11,
                                            color: '#f59e0b',
                                            letterSpacing: '0.06em',
                                            marginBottom: 10,
                                            marginTop: 4
                                        },
                                        children: "PLANNED"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1125,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr 1fr 1fr'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "START DATE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1128,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        className: "fi",
                                                        value: form.planned_start || '',
                                                        onChange: (e)=>setF({
                                                                planned_start: e.target.value
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1129,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1127,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "DAYS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1132,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        className: "fi",
                                                        min: 0,
                                                        placeholder: "0",
                                                        value: form.planned_days ?? '',
                                                        onChange: (e)=>setF({
                                                                planned_days: Number(e.target.value)
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1133,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1131,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "END DATE (auto)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1136,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "calc-field",
                                                        children: plannedEnd || '—'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1137,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1135,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1126,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 11,
                                            color: '#4ade80',
                                            letterSpacing: '0.06em',
                                            marginBottom: 10,
                                            marginTop: 4
                                        },
                                        children: "ACTUAL"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1142,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr 1fr 1fr'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "START DATE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1145,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        className: "fi",
                                                        value: form.actual_start || '',
                                                        onChange: (e)=>setF({
                                                                actual_start: e.target.value
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1146,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1144,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "DAYS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1149,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        className: "fi",
                                                        min: 0,
                                                        placeholder: "0",
                                                        value: form.actual_days ?? '',
                                                        onChange: (e)=>setF({
                                                                actual_days: Number(e.target.value)
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1150,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1148,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "END DATE (auto)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1153,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "calc-field",
                                                        children: actualEnd || '—'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1154,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1152,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1143,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr 1fr'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "% COMPLETE (0–100)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1160,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        className: "fi",
                                                        min: 0,
                                                        max: 100,
                                                        placeholder: "0",
                                                        value: form.percent_complete ?? '',
                                                        onChange: (e)=>setF({
                                                                percent_complete: Number(e.target.value)
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1161,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1159,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "SCHEDULE VARIANCE (days, auto)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1164,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "calc-field",
                                                        style: {
                                                            color: schedVar > 0 ? '#f87171' : schedVar < 0 ? '#4ade80' : '#f59e0b'
                                                        },
                                                        children: schedVar > 0 ? `+${schedVar} (late)` : schedVar < 0 ? `${schedVar} (early)` : '0'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1165,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1163,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1158,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 1106,
                                columnNumber: 15
                            }, this),
                            activeSection === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fade-in",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 11,
                                            color: '#484f58',
                                            marginBottom: 14
                                        },
                                        children: "BOQ fields apply to L3 line items only."
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1176,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr 1fr'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "UNIT"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1179,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "fi",
                                                        value: form.unit || 'm²',
                                                        onChange: (e)=>setF({
                                                                unit: e.target.value
                                                            }),
                                                        children: UNIT_OPTS.map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: u
                                                            }, u, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 1181,
                                                                columnNumber: 43
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1180,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1178,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "QUANTITY"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1185,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        className: "fi",
                                                        min: 0,
                                                        step: "any",
                                                        placeholder: "0",
                                                        value: form.quantity ?? '',
                                                        onChange: (e)=>setF({
                                                                quantity: Number(e.target.value)
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1186,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1184,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1177,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr 1fr'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "WASTE % (e.g. 5 for 5%)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1191,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        className: "fi",
                                                        min: 0,
                                                        step: "any",
                                                        placeholder: "0",
                                                        value: form.waste_pct ?? '',
                                                        onChange: (e)=>setF({
                                                                waste_pct: Number(e.target.value)
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1192,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1190,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "NET QUANTITY (auto)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1195,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "calc-field",
                                                        children: netQty > 0 ? netQty.toFixed(3) : '—'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1196,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1194,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1189,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr 1fr'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "UNIT RATE (per net unit)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1201,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        className: "fi",
                                                        min: 0,
                                                        step: "any",
                                                        placeholder: "0.00",
                                                        value: form.unit_rate ?? '',
                                                        onChange: (e)=>setF({
                                                                unit_rate: Number(e.target.value)
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1202,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1200,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "BOQ AMOUNT (auto)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1205,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "calc-field",
                                                        children: boqAmount > 0 ? `${project.currency} ${boqAmount.toLocaleString(undefined, {
                                                            maximumFractionDigits: 2
                                                        })}` : '—'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1206,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1204,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1199,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 1175,
                                columnNumber: 15
                            }, this),
                            activeSection === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fade-in",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr 1fr'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: [
                                                            "ESTIMATED COST (",
                                                            project.currency,
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1217,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        className: "fi",
                                                        min: 0,
                                                        step: "any",
                                                        placeholder: "0.00",
                                                        value: form.estimated_cost ?? '',
                                                        onChange: (e)=>setF({
                                                                estimated_cost: Number(e.target.value)
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1218,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1216,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: [
                                                            "ACTUAL COST (",
                                                            project.currency,
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1221,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        className: "fi",
                                                        min: 0,
                                                        step: "any",
                                                        placeholder: "0.00",
                                                        value: form.actual_cost ?? '',
                                                        onChange: (e)=>setF({
                                                                actual_cost: Number(e.target.value)
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1222,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1220,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1215,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr 1fr'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "COST VARIANCE (auto)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1227,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "calc-field",
                                                        style: {
                                                            color: costVar >= 0 ? '#4ade80' : '#f87171'
                                                        },
                                                        children: form.estimated_cost ? `${project.currency} ${costVar.toLocaleString(undefined, {
                                                            maximumFractionDigits: 2
                                                        })}` : '—'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1228,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1226,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "COST VAR % (auto)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1233,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "calc-field",
                                                        style: {
                                                            color: costVarPct >= 0 ? '#4ade80' : '#f87171'
                                                        },
                                                        children: form.estimated_cost ? `${costVarPct.toFixed(1)}%` : '—'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1234,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1232,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1225,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 1214,
                                columnNumber: 15
                            }, this),
                            activeSection === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fade-in",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-label",
                                                    children: "PLANT"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1247,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "fi",
                                                    placeholder: "e.g. Crane, Excavator, Mixer",
                                                    value: form.plant || '',
                                                    onChange: (e)=>setF({
                                                            plant: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1248,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 1246,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1245,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-label",
                                                    children: "SITE EQUIPMENT"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1253,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "fi",
                                                    placeholder: "e.g. Bar Bending Machine, Total Station",
                                                    value: form.site_equipment || '',
                                                    onChange: (e)=>setF({
                                                            site_equipment: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1254,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 1252,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1251,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-label",
                                                    children: "MANPOWER"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1259,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "fi",
                                                    placeholder: "e.g. Engineer x1, Mason x3, Casual x5",
                                                    value: form.manpower || '',
                                                    onChange: (e)=>setF({
                                                            manpower: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1260,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 1258,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1257,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 1244,
                                columnNumber: 15
                            }, this),
                            activeSection === 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fade-in",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr 1fr'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "RISK LEVEL ★"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1271,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "fi",
                                                        value: form.risk_level || 'Low',
                                                        onChange: (e)=>setF({
                                                                risk_level: e.target.value
                                                            }),
                                                        children: RISK_OPTS.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: r
                                                            }, r, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 1273,
                                                                columnNumber: 43
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1272,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1270,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "STATUS ★"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1277,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "fi",
                                                        value: form.status || 'Not Started',
                                                        onChange: (e)=>setF({
                                                                status: e.target.value
                                                            }),
                                                        children: STATUS_OPTS.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: s
                                                            }, s, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 1279,
                                                                columnNumber: 45
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1278,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1276,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1269,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr 1fr'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "DEPENDS ON (SOW #)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1285,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "fi",
                                                        placeholder: "e.g. 1.1.1",
                                                        value: form.dep_on || '',
                                                        onChange: (e)=>setF({
                                                                dep_on: e.target.value
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1286,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1284,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "DEPENDENCY TYPE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1289,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "fi",
                                                        value: form.dep_type || 'FS',
                                                        onChange: (e)=>setF({
                                                                dep_type: e.target.value
                                                            }),
                                                        children: DEP_OPTS.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: d
                                                            }, d, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 1291,
                                                                columnNumber: 42
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1290,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1288,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1283,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr 1fr'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "CRITICAL PATH"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1297,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "fi",
                                                        value: form.is_critical_path ? 'Yes' : 'No',
                                                        onChange: (e)=>setF({
                                                                is_critical_path: e.target.value === 'Yes'
                                                            }),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "No"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 1299,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "Yes"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 1300,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1298,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1296,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1303,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1295,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-label",
                                                    children: "NOTES / REMARKS"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1307,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    className: "fi",
                                                    rows: 3,
                                                    placeholder: "Any notes or remarks...",
                                                    value: form.notes || '',
                                                    onChange: (e)=>setF({
                                                            notes: e.target.value
                                                        }),
                                                    style: {
                                                        resize: 'vertical'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1308,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 1306,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1305,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 1268,
                                columnNumber: 15
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    color: '#f87171',
                                    fontSize: 11,
                                    marginBottom: 12,
                                    padding: '8px 12px',
                                    background: isDark ? '#2d0f0f' : '#fee2e2',
                                    border: `1px solid ${isDark ? 'transparent' : '#f87171'}`,
                                    borderRadius: 5
                                },
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 1315,
                                columnNumber: 23
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginTop: 20,
                                    paddingTop: 16,
                                    borderTop: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1')
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: 6
                                        },
                                        children: [
                                            activeSection > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "btn",
                                                onClick: ()=>setActiveSection((s)=>s - 1),
                                                children: "← Back"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1320,
                                                columnNumber: 39
                                            }, this),
                                            activeSection < 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "btn",
                                                onClick: ()=>setActiveSection((s)=>s + 1),
                                                children: "Next →"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1321,
                                                columnNumber: 39
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1319,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: 8
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "btn",
                                                onClick: closeForm,
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1324,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "btn btn-primary",
                                                disabled: saving,
                                                children: saving ? 'Saving...' : editItem ? '✓ Update Item' : '✓ Save Item'
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1325,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1323,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 1318,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                        lineNumber: 1043,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                lineNumber: 1022,
                columnNumber: 9
            }, this),
            showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: closeForm,
                style: {
                    position: 'fixed',
                    inset: 0,
                    background: 'rgba(0,0,0,0.4)',
                    zIndex: 29
                }
            }, void 0, false, {
                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                lineNumber: 1336,
                columnNumber: 9
            }, this),
            showIntegration && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fade-in",
                style: {
                    position: 'fixed',
                    inset: 0,
                    zIndex: 100,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 20
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>!importing && setShowIntegration(false),
                        style: {
                            position: 'absolute',
                            inset: 0,
                            background: 'rgba(0,0,0,0.7)',
                            backdropFilter: 'blur(3px)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                        lineNumber: 1343,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card",
                        style: {
                            position: 'relative',
                            width: '100%',
                            maxWidth: 900,
                            maxHeight: '90vh',
                            background: isDark ? '#0d1117' : '#ffffff',
                            border: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1'),
                            borderRadius: '12px',
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden',
                            zIndex: 1,
                            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '18px 24px',
                                    borderBottom: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1'),
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '100%'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontFamily: "'Barlow Condensed',sans-serif",
                                                    fontSize: 20,
                                                    fontWeight: 700,
                                                    color: hText,
                                                    letterSpacing: '0.05em'
                                                },
                                                children: "📊 PRIMAVERA & MS PROJECT INTEGRATION CENTER"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1351,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: 11,
                                                    color: subText,
                                                    marginTop: 4
                                                },
                                                children: "Natively ingest and parse industrial scheduler files to control CPOS Gantt, Cost, and Resource sheets."
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1354,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1350,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn",
                                        onClick: ()=>setShowIntegration(false),
                                        disabled: importing,
                                        style: {
                                            fontSize: 12,
                                            padding: '6px 12px'
                                        },
                                        children: "✕ Close"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1358,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 1349,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    overflowY: 'auto',
                                    padding: 24,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 20
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gridTemplateColumns: 'minmax(250px, 1fr) 1.5fr',
                                            gap: 18
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    border: '2px dashed ' + (integrationFile ? '#f59e0b' : isDark ? '#30363d' : '#cbd5e1'),
                                                    background: isDark ? '#0a0c0e' : '#f8fafc',
                                                    borderRadius: 8,
                                                    padding: '24px 16px',
                                                    textAlign: 'center',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    cursor: 'pointer',
                                                    transition: 'border-color 0.2s'
                                                },
                                                onClick: ()=>document.getElementById('integration-file-picker')?.click(),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 24,
                                                            marginBottom: 8
                                                        },
                                                        children: "📁"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1391,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 13,
                                                            fontWeight: 600,
                                                            color: textCol
                                                        },
                                                        children: integrationFile ? integrationFile.name : 'Choose or Drop File'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1392,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 10,
                                                            color: subText,
                                                            marginTop: 6
                                                        },
                                                        children: "Supports Primavera P6 (.xer), MS Project (.xml), Excel (.xlsx), & standard CSV"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1395,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "integration-file-picker",
                                                        type: "file",
                                                        accept: ".xer,.xml,.xlsx,.xlsm,.xls,.csv",
                                                        style: {
                                                            display: 'none'
                                                        },
                                                        onChange: (e)=>{
                                                            const f = e.target.files?.[0];
                                                            if (f) handleFileSelected(f);
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1399,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1375,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: 12
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        style: {
                                                            fontWeight: 600,
                                                            fontSize: 11,
                                                            letterSpacing: '0.04em'
                                                        },
                                                        children: "1. SELECT INGESTION INTERFACE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1413,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'grid',
                                                            gridTemplateColumns: '1fr 1fr',
                                                            gap: 8
                                                        },
                                                        children: [
                                                            {
                                                                id: 'auto',
                                                                label: '⚡ Auto-Detect File',
                                                                desc: 'Auto-scrapes tables & layout'
                                                            },
                                                            {
                                                                id: 'xer',
                                                                label: '🌅 Primavera P6 (.xer)',
                                                                desc: 'Tabbed native database records'
                                                            },
                                                            {
                                                                id: 'msp',
                                                                label: '📊 MS Project (.xml)',
                                                                desc: 'Full xml outlining attributes'
                                                            },
                                                            {
                                                                id: 'csv',
                                                                label: '📄 SOW CSV / Excel',
                                                                desc: 'Row header matches'
                                                            }
                                                        ].map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                style: {
                                                                    border: '1px solid ' + (integrationMode === opt.id ? '#f59e0b' : isDark ? '#21262d' : '#e2e8f0'),
                                                                    background: integrationMode === opt.id ? isDark ? '#1a1510' : '#fff9f0' : isDark ? '#0d1117' : '#ffffff',
                                                                    borderRadius: 6,
                                                                    padding: '10px 12px',
                                                                    cursor: 'pointer',
                                                                    display: 'flex',
                                                                    flexDirection: 'column',
                                                                    gap: 2,
                                                                    transition: 'all 0.15s'
                                                                },
                                                                onClick: ()=>{
                                                                    setIntegrationMode(opt.id);
                                                                    if (integrationFile) {
                                                                        setTimeout(()=>{
                                                                            void handleFileSelected(integrationFile);
                                                                        }, 50);
                                                                    }
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            gap: 6,
                                                                            fontSize: 11,
                                                                            fontWeight: 700,
                                                                            color: integrationMode === opt.id ? '#f59e0b' : textCol
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "radio",
                                                                                name: "int-mode",
                                                                                checked: integrationMode === opt.id,
                                                                                onChange: ()=>{},
                                                                                style: {
                                                                                    accentColor: '#f59e0b'
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                                lineNumber: 1444,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            opt.label
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                        lineNumber: 1443,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontSize: 9,
                                                                            color: subText,
                                                                            marginLeft: 18
                                                                        },
                                                                        children: opt.desc
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                        lineNumber: 1453,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, opt.id, true, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 1421,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1414,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1412,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1372,
                                        columnNumber: 15
                                    }, this),
                                    integrationLogs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: '#07090e',
                                            border: '1px solid #161b22',
                                            borderRadius: 6,
                                            padding: '12px 16px',
                                            fontFamily: "'DM Mono', monospace"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 9,
                                                    color: '#484f58',
                                                    borderBottom: '1px solid #161b22',
                                                    paddingBottom: 6,
                                                    marginBottom: 8,
                                                    display: 'flex',
                                                    justifyContent: 'space-between'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "🖥️ PARSE LOGS & INTEGRITY DIAGNOSTICS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1465,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: '#4ade80'
                                                        },
                                                        children: "● ACTIVE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1466,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1464,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: 4,
                                                    maxHeight: 110,
                                                    overflowY: 'auto',
                                                    fontSize: 11,
                                                    color: '#c9d1d9'
                                                },
                                                children: integrationLogs.map((log, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            gap: 8
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: '#484f58'
                                                                },
                                                                children: [
                                                                    "[",
                                                                    idx + 1,
                                                                    "]"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 1471,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: log.startsWith('PARSER ERROR') || log.startsWith('DB ERROR') ? '#f87171' : log.startsWith('Successfully') || log.includes('deployed') ? '#4ade80' : '#c9d1d9'
                                                                },
                                                                children: log
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 1472,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1470,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1468,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1463,
                                        columnNumber: 17
                                    }, this),
                                    integrationError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            color: '#f87171',
                                            background: isDark ? '#2d0f0f' : '#fee2e2',
                                            border: '1px solid transparent',
                                            borderRadius: 6,
                                            padding: '12px 16px',
                                            fontSize: 11
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "⚠️ Parse Error Alert:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1482,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            integrationError
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1481,
                                        columnNumber: 17
                                    }, this),
                                    parsedItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 10
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "form-label",
                                                        style: {
                                                            fontWeight: 600,
                                                            fontSize: 11,
                                                            letterSpacing: '0.04em'
                                                        },
                                                        children: [
                                                            "2. SOW SCHEDULE MERGE PREVIEW (",
                                                            parsedItems.length,
                                                            " lines detected)"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1490,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 10,
                                                            color: '#4ade80'
                                                        },
                                                        children: "✔ Structured Hierarchy & Dates Checked"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1493,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1489,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    border: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1'),
                                                    borderRadius: 8,
                                                    maxHeight: 220,
                                                    overflowY: 'auto',
                                                    background: isDark ? '#0d1117' : '#ffffff'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                    style: {
                                                        width: '100%',
                                                        borderCollapse: 'collapse',
                                                        textAlign: 'left',
                                                        fontSize: 11
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                            style: {
                                                                background: isDark ? '#161b22' : '#f8fafc',
                                                                borderBottom: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1'),
                                                                position: 'sticky',
                                                                top: 0,
                                                                zIndex: 1,
                                                                color: hText
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        style: {
                                                                            padding: '8px 12px'
                                                                        },
                                                                        children: "SOW #"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                        lineNumber: 1500,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        style: {
                                                                            padding: '8px 12px'
                                                                        },
                                                                        children: "Scope Detail / Task Item"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                        lineNumber: 1501,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        style: {
                                                                            padding: '8px 12px'
                                                                        },
                                                                        children: "Dates (Planned)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                        lineNumber: 1502,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        style: {
                                                                            padding: '8px 12px'
                                                                        },
                                                                        children: "Days"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                        lineNumber: 1503,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        style: {
                                                                            padding: '8px 12px'
                                                                        },
                                                                        children: "% Done"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                        lineNumber: 1504,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        style: {
                                                                            padding: '8px 12px'
                                                                        },
                                                                        children: "Primary Dep."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                        lineNumber: 1505,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        style: {
                                                                            padding: '8px 12px'
                                                                        },
                                                                        children: "CP"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                        lineNumber: 1506,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 1499,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                            lineNumber: 1498,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                            children: parsedItems.map((item, index)=>{
                                                                const isHeader = item.hierarchy_level < 3;
                                                                const textIndent = (item.hierarchy_level - 1) * 16;
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    style: {
                                                                        borderBottom: '1px solid ' + (isDark ? '#161b22' : '#f1f5f9'),
                                                                        background: isHeader ? isDark ? '#161b2255' : '#f8fafc' : 'transparent',
                                                                        color: isHeader ? '#f59e0b' : textCol,
                                                                        fontWeight: isHeader ? 600 : 'normal'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            style: {
                                                                                padding: '8px 12px',
                                                                                fontFamily: 'monospace',
                                                                                color: isHeader ? '#f59e0b' : subText
                                                                            },
                                                                            children: item.sow_number
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                            lineNumber: 1523,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            style: {
                                                                                padding: '8px 12px',
                                                                                paddingLeft: 12 + textIndent
                                                                            },
                                                                            children: item.hierarchy_level === 1 ? item.scope_l1 : item.hierarchy_level === 2 ? item.item_l2 : item.sub_item_l3
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                            lineNumber: 1526,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            style: {
                                                                                padding: '8px 12px',
                                                                                color: subText
                                                                            },
                                                                            children: item.planned_start ? `${item.planned_start} to ${item.planned_end}` : '—'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                            lineNumber: 1529,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            style: {
                                                                                padding: '8px 12px'
                                                                            },
                                                                            children: item.planned_days ? `${item.planned_days} d` : '—'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                            lineNumber: 1532,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            style: {
                                                                                padding: '8px 12px',
                                                                                color: item.percent_complete === 100 ? '#4ade80' : textCol
                                                                            },
                                                                            children: [
                                                                                item.percent_complete ?? 0,
                                                                                "%"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                            lineNumber: 1535,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            style: {
                                                                                padding: '8px 12px',
                                                                                fontFamily: 'monospace',
                                                                                color: '#60a5fa'
                                                                            },
                                                                            children: item.dep_on ? `${item.dep_on} (${item.dep_type})` : '—'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                            lineNumber: 1538,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            style: {
                                                                                padding: '8px 12px',
                                                                                color: item.is_critical_path ? '#f87171' : subText
                                                                            },
                                                                            children: item.is_critical_path ? '🚩 YES' : '—'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                            lineNumber: 1541,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, index, true, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                    lineNumber: 1514,
                                                                    columnNumber: 29
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                            lineNumber: 1509,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1497,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1496,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: isDark ? '#1a1010' : '#fef2f2',
                                                    border: '1px solid ' + (isDark ? '#2d1515' : '#fecaca'),
                                                    padding: '12px 16px',
                                                    borderRadius: 8,
                                                    display: 'flex',
                                                    gap: 12,
                                                    alignItems: 'center'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 18
                                                        },
                                                        children: "⚠️"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1552,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 10,
                                                            color: isDark ? '#f87171' : '#991b1b',
                                                            lineHeight: '1.4'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Critical Sync Alert:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 1554,
                                                                columnNumber: 23
                                                            }, this),
                                                            " Harmonizing will release all existing items on scope structures, cost estimates, BOQ values, and current Gantt charts for this project ID in your persistent database. Use with precision."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1553,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1551,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1488,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 1369,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '14px 24px',
                                    borderTop: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1'),
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '100%',
                                    background: isDark ? '#0a0c0e' : '#f8fafc'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 10,
                                            color: subText
                                        },
                                        children: parsedItems.length > 0 ? `✔ ${parsedItems.length} elements mapped` : 'Please upload a scheduling file to proceed'
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1564,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: 8
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btn",
                                                onClick: ()=>{
                                                    setShowIntegration(false);
                                                    setParsedItems([]);
                                                    setIntegrationFile(null);
                                                },
                                                disabled: importing,
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1568,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btn btn-primary",
                                                style: {
                                                    background: '#f59e0b',
                                                    borderColor: '#f59e0b',
                                                    fontWeight: 700
                                                },
                                                onClick: handleImportIntegration,
                                                disabled: parsedItems.length === 0 || importing,
                                                children: importing ? 'Processing sync...' : '🚀 Synchronize Schedule & Overwrite SOW'
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1579,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1567,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 1563,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                        lineNumber: 1346,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                lineNumber: 1341,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
        lineNumber: 720,
        columnNumber: 5
    }, this);
}
_s(SowPage, "6fJlMkaxNNBmQu/XWtEW4EYZ2i0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = SowPage;
var _c;
__turbopack_context__.k.register(_c, "SowPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_676b2546._.js.map