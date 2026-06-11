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
"[project]/lib/schedulerParser.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// CPOS: Primavera (XER), Microsoft Project (XML) and Flexible CSV Parser
// This parser parses project schedules and maps them directly to the CPOS sow_items schema.
__turbopack_context__.s([
    "exportSowToMSPDI",
    ()=>exportSowToMSPDI,
    "exportSowToXER",
    ()=>exportSowToXER,
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
function exportSowToXER(project, sowItems) {
    let xer = 'ERMHDR\t%R\t1\t1\n' // XER header
    ;
    xer += 'EXPORT\tUSER\tCPOS\t' + new Date().toISOString().split('T')[0] + '\t' + new Date().toISOString() + '\n';
    // Project record
    xer += '%T\tPROJWBS\n';
    xer += '%F\twbs_id\twbs_name\twbs_short_name\tseq_num\tparent_wbs_id\tstatus_code\n';
    xer += '%R\tPROJ_WBS_ID\t' + project.project_name + '\t' + project.project_name + '\t' + project.project_name + '\t1\t\tWS_Open\n';
    xer += '%T\tPROJECT\n';
    xer += '%F\tproj_id\tproj_short_name\tproj_name\tlast_update_date\tplan_start_date\tplan_end_date\n';
    xer += '%R\t' + project.project_code + '\t' + project.project_name + '\t' + project.project_name + '\t' + new Date().toISOString() + '\t' + project.start_date + '\t' + project.end_date + '\n';
    // Task records
    const taskMap = new Map();
    let taskIdCounter = 1;
    // Sort by hierarchy level and sow_number
    const sortedItems = sowItems.sort((a, b)=>{
        if (a.hierarchy_level !== b.hierarchy_level) {
            return a.hierarchy_level - b.hierarchy_level;
        }
        return a.sow_number.localeCompare(b.sow_number, undefined, {
            numeric: true,
            sensitivity: 'base'
        });
    });
    xer += '%T\tTASK\n';
    xer += '%F\ttask_id\ttask_code\ttask_name\twbs_id\tstatus_code\ttarget_start_date\ttarget_end_date\tduration_type\ttarget_duration\tact_start_date\tact_end_date\tact_work_qty\n';
    sortedItems.forEach((item)=>{
        const taskId = `TASK${taskIdCounter++}`;
        taskMap.set(item.sow_number, taskId);
        const taskName = item.sub_item_l3 || item.item_l2 || item.scope_l1 || item.sow_number;
        const startDate = item.baseline_start || item.planned_start || project.start_date;
        const endDate = item.baseline_end || item.planned_end || project.end_date;
        const duration = (item.baseline_days || item.planned_days || 0) * 8 // Convert days to hours
        ;
        xer += '%R\t' + taskId + '\t' + item.sow_number + '\t' + taskName + '\tPROJ_WBS_ID\t';
        xer += (item.status === 'Complete' ? 'TK_Complete' : item.status === 'In Progress' ? 'TK_Active' : 'TK_NotStart') + '\t';
        xer += startDate + '\t' + endDate + '\tFixedDurationUnits\t' + duration;
        if (item.actual_start) xer += '\t' + item.actual_start;
        else xer += '\t';
        if (item.actual_end) xer += '\t' + item.actual_end;
        else xer += '\t';
        xer += '\t' + (item.percent_complete || 0) + '\n';
    });
    // Predecessor records
    xer += '%T\tTASKPRED\n';
    xer += '%F\ttask_id\tpred_task_id\tpred_type\tlag_hr\n';
    sortedItems.forEach((item)=>{
        if (item.dep_on) {
            const taskId = taskMap.get(item.sow_number);
            const predTaskId = taskMap.get(item.dep_on);
            if (taskId && predTaskId) {
                const predType = item.dep_type === 'SS' ? 'PR_SS' : item.dep_type === 'FF' ? 'PR_FF' : item.dep_type === 'SF' ? 'PR_SF' : 'PR_FS';
                xer += '%R\t' + taskId + '\t' + predTaskId + '\t' + predType + '\t0\n';
            }
        }
    });
    xer += 'TMRTASK\tEND\n'; // End marker
    return xer;
}
function exportSowToMSPDI(project, sowItems) {
    const tasks = convertSowToMSPDITasks(sowItems);
    let xml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n';
    xml += '<Project xmlns="http://schemas.microsoft.com/project">\n';
    xml += '  <Name>' + escapeXML(project.project_name) + '</Name>\n';
    if (project.description) xml += '  <Title>' + escapeXML(project.description) + '</Title>\n';
    if (project.client_name) xml += '  <Company>' + escapeXML(project.client_name) + '</Company>\n';
    xml += '  <StartDate>' + formatMSPDIDate(project.start_date) + '</StartDate>\n';
    xml += '  <FinishDate>' + formatMSPDIDate(project.end_date) + '</FinishDate>\n';
    xml += '  <Tasks>\n';
    tasks.forEach((task)=>{
        xml += '    <Task>\n';
        xml += '      <UID>' + task.UID + '</UID>\n';
        xml += '      <ID>' + task.ID + '</ID>\n';
        xml += '      <Name>' + escapeXML(task.Name) + '</Name>\n';
        if (task.WBS) xml += '      <WBS>' + escapeXML(task.WBS) + '</WBS>\n';
        xml += '      <OutlineLevel>' + task.OutlineLevel + '</OutlineLevel>\n';
        if (task.Start) xml += '      <Start>' + formatMSPDIDate(task.Start) + '</Start>\n';
        if (task.Finish) xml += '      <Finish>' + formatMSPDIDate(task.Finish) + '</Finish>\n';
        if (task.Duration) xml += '      <Duration>' + task.Duration + '</Duration>\n';
        if (task.PercentComplete !== undefined) xml += '      <PercentComplete>' + task.PercentComplete + '</PercentComplete>\n';
        if (task.PredecessorLink) {
            task.PredecessorLink.forEach((pred)=>{
                xml += '      <PredecessorLink>\n';
                xml += '        <PredecessorUID>' + pred.PredecessorUID + '</PredecessorUID>\n';
                xml += '        <Type>' + pred.Type + '</Type>\n';
                if (pred.Lag) xml += '        <Lag>' + pred.Lag + '</Lag>\n';
                xml += '      </PredecessorLink>\n';
            });
        }
        xml += '    </Task>\n';
    });
    xml += '  </Tasks>\n';
    xml += '</Project>\n';
    return xml;
}
function convertSowToMSPDITasks(sowItems) {
    const tasks = [];
    const taskMap = new Map();
    let uidCounter = 1;
    const sortedItems = sowItems.sort((a, b)=>{
        if (a.hierarchy_level !== b.hierarchy_level) {
            return a.hierarchy_level - b.hierarchy_level;
        }
        return a.sow_number.localeCompare(b.sow_number, undefined, {
            numeric: true,
            sensitivity: 'base'
        });
    });
    sortedItems.forEach((item)=>{
        const uid = uidCounter++;
        taskMap.set(item.sow_number, uid);
        const task = {
            UID: uid,
            ID: uid,
            Name: item.sub_item_l3 || item.item_l2 || item.scope_l1 || item.sow_number,
            WBS: item.sow_number,
            OutlineLevel: item.hierarchy_level
        };
        if (item.planned_start || item.baseline_start) {
            task.Start = item.baseline_start || item.planned_start;
        }
        if (item.planned_end || item.baseline_end) {
            task.Finish = item.baseline_end || item.planned_end;
        }
        if (item.planned_days || item.baseline_days) {
            const days = item.baseline_days || item.planned_days;
            task.Duration = 'PT' + days * 8 + 'H0M0S';
        }
        if (item.percent_complete !== undefined) {
            task.PercentComplete = item.percent_complete;
        }
        if (item.dep_on) {
            const predecessorUid = taskMap.get(item.dep_on);
            if (predecessorUid) {
                const type = item.dep_type === 'SS' ? 1 : item.dep_type === 'FF' ? 2 : item.dep_type === 'SF' ? 3 : 0;
                task.PredecessorLink = [
                    {
                        PredecessorUID: predecessorUid,
                        Type: type
                    }
                ];
            }
        }
        tasks.push(task);
    });
    return tasks;
}
function escapeXML(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}
function formatMSPDIDate(dateStr) {
    const date = new Date(dateStr);
    return date.toISOString();
}
}),
"[project]/app/dashboard/[projectid]/sow/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SowPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/supabase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$access$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/access.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xlsx/xlsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/theme.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ThemeSelector.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schedulerParser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/schedulerParser.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2e$react$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/qrcode.react/lib/esm/index.js [app-ssr] (ecmascript)");
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
        notes: '',
        drawing_ids: [],
        drawing_paths: {},
        drawing_notes: {}
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
function DrawingNoteInput({ sowId, drawingId, initialValue, onSave, isDark, textCol }) {
    const [val, setVal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialValue);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setVal(initialValue);
    }, [
        initialValue
    ]);
    const handleBlur = ()=>{
        if (val !== initialValue) {
            void onSave(sowId, drawingId, val);
        }
    };
    const handleKeyDown = (e)=>{
        if (e.key === 'Enter') {
            e.currentTarget.blur();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: "text",
        placeholder: "Enter description/notes...",
        value: val,
        onChange: (e)=>setVal(e.target.value),
        onBlur: handleBlur,
        onKeyDown: handleKeyDown,
        style: {
            flex: 1,
            background: 'transparent',
            border: 'none',
            color: textCol,
            fontSize: 10,
            padding: '2px 4px',
            outline: 'none',
            borderBottom: '1px dashed ' + (isDark ? '#334155' : '#cbd5e1')
        }
    }, void 0, false, {
        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
        lineNumber: 178,
        columnNumber: 5
    }, this);
}
function SowPage() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { theme, setTheme, isDark } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const projectid = params.projectid;
    const importInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isPublicViewOnly = projectid === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$access$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PUBLIC_VIEWONLY_PROJECT_ID"];
    const [project, setProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editItem, setEditItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(emptyForm());
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [collapsed, setCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [filterStatus, setFilterStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('All');
    const [filterRisk, setFilterRisk] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('All');
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [importing, setImporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [importMsg, setImportMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // ── SOW Drawing Report View states ─────────────────────────────────────────
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('tree');
    const [drawingsSearch, setDrawingsSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [onlyShowWithDrawings, setOnlyShowWithDrawings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showFullSowTree, setShowFullSowTree] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [drawingSubMode, setDrawingSubMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('items');
    const [expandedDrawings, setExpandedDrawings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    // ── Primavera & MS Project integration state hooks ────────────────────────
    const [showIntegration, setShowIntegration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [integrationFile, setIntegrationFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [integrationMode, setIntegrationMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('auto');
    const [parsedItems, setParsedItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [integrationError, setIntegrationError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [integrationLogs, setIntegrationLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // ── SOW Drawing Linkage Integration ───────────────────────────────────────
    const [drawingsBasePath, setDrawingsBasePath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [documents, setDocuments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    async function handleDownloadDoc(doc) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].storage.from('cpos-documents').createSignedUrl(doc.file_path, 60);
        if (error || !data?.signedUrl) {
            alert(`Could not download file: ${error?.message || 'Signed URL generation failed'}`);
            return;
        }
        const a = document.createElement('a');
        a.href = data.signedUrl;
        a.download = doc.file_name;
        a.click();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    const updateDrawingsBasePath = (path)=>{
        setDrawingsBasePath(path);
        localStorage.setItem('drawings_base_path', path);
    };
    const compiledDrawings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const map = new Map();
        items.forEach((item)=>{
            if (item.drawing_ids) {
                item.drawing_ids.forEach((drawingId)=>{
                    const path = item.drawing_paths?.[drawingId] || '';
                    const note = item.drawing_notes?.[drawingId] || '';
                    if (!map.has(drawingId)) {
                        map.set(drawingId, {
                            drawingId,
                            sowItems: [
                                item
                            ],
                            paths: path ? [
                                path
                            ] : [],
                            notes: note ? [
                                note
                            ] : []
                        });
                    } else {
                        const entry = map.get(drawingId);
                        if (!entry.sowItems.some((i)=>i.sow_id === item.sow_id)) {
                            entry.sowItems.push(item);
                        }
                        if (path && !entry.paths.includes(path)) entry.paths.push(path);
                        if (note && !entry.notes.includes(note)) entry.notes.push(note);
                    }
                });
            }
        });
        return Array.from(map.values()).sort((a, b)=>a.drawingId.localeCompare(b.drawingId));
    }, [
        items
    ]);
    const filteredCompiledDrawings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!drawingsSearch.trim()) return compiledDrawings;
        const q = drawingsSearch.toLowerCase();
        return compiledDrawings.filter((cd)=>{
            const dIdMatches = cd.drawingId.toLowerCase().includes(q);
            const pathMatches = cd.paths.some((p)=>p.toLowerCase().includes(q));
            const noteMatches = cd.notes.some((n)=>n.toLowerCase().includes(q));
            const sowMatches = cd.sowItems.some((i)=>(i.sow_number || '').toLowerCase().includes(q) || (i.sub_item_l3 || i.scope_l1 || '').toLowerCase().includes(q) || (i.particulars || '').toLowerCase().includes(q));
            return dIdMatches || pathMatches || noteMatches || sowMatches;
        });
    }, [
        compiledDrawings,
        drawingsSearch
    ]);
    const exportDrawingsToCSV = ()=>{
        const headers = [
            'Drawing Number',
            'Local Path/Ref',
            'Associated SOW Item(s)',
            'Latest Class/Notes'
        ];
        const rows = compiledDrawings.map((cd)=>{
            const sowStr = cd.sowItems.map((i)=>`${i.sow_number} (${i.sub_item_l3 || i.scope_l1 || ''})`).join('; ');
            const pathStr = cd.paths.join('; ');
            const noteStr = cd.notes.filter(Boolean).join('; ');
            return [
                cd.drawingId,
                pathStr || '(Not mapped)',
                sowStr,
                noteStr || '(None)'
            ];
        });
        const csvContent = [
            headers.join(','),
            ...rows.map((r)=>r.map((cell)=>`"${cell.replace(/"/g, '""').replace(/\n/g, ' ')}"`).join(','))
        ].join('\n');
        const blob = new Blob([
            csvContent
        ], {
            type: 'text/csv;charset=utf-8;'
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', `${project?.project_code || 'PROJ'}_compiled_drawings_report.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    const saveToLocalBackup = (sowId, updatedFields)=>{
        try {
            const localBackupKey = `sow_drawings_backup_${projectid}`;
            let backup = {};
            const stored = localStorage.getItem(localBackupKey);
            if (stored) backup = JSON.parse(stored);
            backup[sowId] = {
                ...backup[sowId] || {},
                ...updatedFields
            };
            localStorage.setItem(localBackupKey, JSON.stringify(backup));
        } catch (e) {
            console.error("Local storage write error", e);
        }
    };
    const getAutoNotes = (filename)=>{
        const base = filename.split(/[/\\]/).pop() || filename;
        const name = base.replace(/\.[a-zA-Z0-9]+$/i, '');
        // Extrapolate common CAD / PDF and revision formats
        // e.g. BP238-LOC-DWG-ARC-80700-CAD_B -> CAD Format, Rev B
        const m = name.match(/[-_](CAD|PDF|DWG)[-_]([A-Z0-9]+)$/i);
        if (m) {
            const format = m[1].toUpperCase();
            const rev = m[2].toUpperCase();
            return `${format} Format, Rev ${rev}`;
        }
        return '';
    };
    const extractDrawingNumber = (filename)=>{
        if (!filename) return null;
        const base = filename.split(/[/\\]/).pop() || filename;
        // Remove file extension using a robust case-insensitive matcher
        const name = base.replace(/\.[a-zA-Z0-9]+$/i, '');
        return name.trim();
    };
    const getDrawingFilePath = (item, drawingId)=>{
        const relativePath = item.drawing_paths?.[drawingId];
        const basePath = drawingsBasePath ? drawingsBasePath.replace(/\/$/, '') : '';
        if (basePath) {
            if (relativePath) {
                return `${basePath}/${relativePath}`;
            }
            return `${basePath}/${drawingId}.pdf`;
        }
        if (relativePath) {
            return `/drawings/${relativePath}`;
        }
        return `/drawings/${drawingId}.pdf`;
    };
    const updateSOWItemDrawingsAndNotes = async (sowId, drawingIds, paths, notes)=>{
        const patch = {
            drawing_ids: drawingIds
        };
        if (paths) patch.drawing_paths = paths;
        if (notes) patch.drawing_notes = notes;
        // 1. Optimistic Local State Update for instantaneous, fluid feedback
        setItems((prev)=>prev.map((item)=>item.sow_id === sowId ? {
                    ...item,
                    ...patch
                } : item));
        // 2. Resilient local storage backup for view-only/demo modes
        saveToLocalBackup(sowId, patch);
        // 3. Sync to Supabase in the background
        if (isPublicViewOnly) {
            console.log('Public view: Backup save successfully stored in localStorage.');
            return;
        }
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('sow_items').update(patch).eq('sow_id', sowId);
        if (error) {
            console.error("Error saving drawings and notes to database:", error.message);
        }
    };
    const updateSOWItemDrawings = async (sowId, uniqueIds, paths)=>{
        const item = items.find((i)=>i.sow_id === sowId);
        const existingNotes = item ? item.drawing_notes || {} : {};
        await updateSOWItemDrawingsAndNotes(sowId, uniqueIds, paths, existingNotes);
    };
    const handleFolderSelect = async (event, item)=>{
        const files = Array.from(event.target.files || []);
        if (files.length === 0) return;
        const newDrawingIds = [
            ...item.drawing_ids || []
        ];
        const newDrawingPaths = {
            ...item.drawing_paths || {}
        };
        const newDrawingNotes = {
            ...item.drawing_notes || {}
        };
        for (const file of files){
            const drawingNumber = extractDrawingNumber(file.name);
            if (drawingNumber) {
                if (!newDrawingIds.includes(drawingNumber)) {
                    newDrawingIds.push(drawingNumber);
                }
                const relativePath = file.webkitRelativePath || file.name;
                newDrawingPaths[drawingNumber] = relativePath;
                if (!newDrawingNotes[drawingNumber]) {
                    newDrawingNotes[drawingNumber] = getAutoNotes(file.name);
                }
            }
        }
        await updateSOWItemDrawingsAndNotes(item.sow_id, newDrawingIds, newDrawingPaths, newDrawingNotes);
        event.target.value = '';
    };
    const handleFilesSelect = async (event, item)=>{
        const files = Array.from(event.target.files || []);
        if (files.length === 0) return;
        const newDrawingIds = [
            ...item.drawing_ids || []
        ];
        const newDrawingPaths = {
            ...item.drawing_paths || {}
        };
        const newDrawingNotes = {
            ...item.drawing_notes || {}
        };
        for (const file of files){
            const drawingNumber = extractDrawingNumber(file.name);
            if (drawingNumber) {
                if (!newDrawingIds.includes(drawingNumber)) {
                    newDrawingIds.push(drawingNumber);
                }
                newDrawingPaths[drawingNumber] = file.name;
                if (!newDrawingNotes[drawingNumber]) {
                    newDrawingNotes[drawingNumber] = getAutoNotes(file.name);
                }
            }
        }
        await updateSOWItemDrawingsAndNotes(item.sow_id, newDrawingIds, newDrawingPaths, newDrawingNotes);
        event.target.value = '';
    };
    const addManualDrawing = async (item, drawingNumber)=>{
        const parsed = extractDrawingNumber(drawingNumber);
        const cleaned = parsed ? parsed.trim().toUpperCase() : drawingNumber.trim().toUpperCase();
        if (!cleaned) return;
        const existingIds = item.drawing_ids || [];
        if (existingIds.includes(cleaned)) return;
        const uniqueIds = [
            ...existingIds,
            cleaned
        ];
        const newDrawingPaths = {
            ...item.drawing_paths || {}
        };
        newDrawingPaths[cleaned] = drawingNumber.trim();
        const newDrawingNotes = {
            ...item.drawing_notes || {}
        };
        if (!newDrawingNotes[cleaned]) {
            newDrawingNotes[cleaned] = getAutoNotes(drawingNumber);
        }
        await updateSOWItemDrawingsAndNotes(item.sow_id, uniqueIds, newDrawingPaths, newDrawingNotes);
    };
    const updateSOWItemDrawingNotes = async (sowId, drawingId, noteText)=>{
        const item = items.find((i)=>i.sow_id === sowId);
        if (!item) return;
        const currentNotes = {
            ...item.drawing_notes || {}
        };
        currentNotes[drawingId] = noteText;
        // 1. Optimistic update
        setItems((prev)=>prev.map((it)=>it.sow_id === sowId ? {
                    ...it,
                    drawing_notes: currentNotes
                } : it));
        // 2. Save local backup
        saveToLocalBackup(sowId, {
            drawing_notes: currentNotes
        });
        // 3. Supabase Write
        if (isPublicViewOnly) {
            console.log('Public view: Saved draft drawing notes to local cache.');
            return;
        }
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('sow_items').update({
            drawing_notes: currentNotes
        }).eq('sow_id', sowId);
        if (error) {
            console.error("Error updating drawing notes:", error.message);
        }
    };
    const removeSOWItemDrawing = async (sowId, drawingId)=>{
        const item = items.find((i)=>i.sow_id === sowId);
        if (!item) return;
        const newDrawingIds = (item.drawing_ids || []).filter((id)=>id !== drawingId);
        const newDrawingPaths = {
            ...item.drawing_paths || {}
        };
        delete newDrawingPaths[drawingId];
        const newDrawingNotes = {
            ...item.drawing_notes || {}
        };
        delete newDrawingNotes[drawingId];
        const patch = {
            drawing_ids: newDrawingIds,
            drawing_paths: newDrawingPaths,
            drawing_notes: newDrawingNotes
        };
        // 1. Optimistic update
        setItems((prev)=>prev.map((it)=>it.sow_id === sowId ? {
                    ...it,
                    ...patch
                } : it));
        // 2. Save local storage backup
        saveToLocalBackup(sowId, patch);
        // 3. Supabase Write
        if (isPublicViewOnly) {
            console.log('Public view: Removed drawing link.');
            return;
        }
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('sow_items').update(patch).eq('sow_id', sowId);
        if (error) {
            console.error("Error removing drawing:", error.message);
        }
    };
    const renderDrawingManagerInline = (row, typePrefix)=>{
        const hasDrawings = row.drawing_ids && row.drawing_ids.length > 0;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: 'flex',
                flexDirection: 'column',
                gap: 8
            },
            children: [
                hasDrawings ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 6
                    },
                    children: row.drawing_ids.map((drawingId)=>{
                        const filePath = getDrawingFilePath(row, drawingId);
                        const noteVal = row.drawing_notes?.[drawingId] || '';
                        const qrUrl = `${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ''}/drawing-lookup/${drawingId}`;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8,
                                background: isDark ? '#161b22' : '#f8fafc',
                                padding: '6px 10px',
                                borderRadius: 6,
                                border: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1')
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: filePath || '#',
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    onClick: (e)=>{
                                        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                                        ;
                                    },
                                    className: "drawing-link",
                                    style: {
                                        fontFamily: "var(--font-mono), monospace",
                                        fontSize: 10,
                                        fontWeight: 600,
                                        color: isDark ? '#58a6ff' : '#0284c7',
                                        textDecoration: 'none',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: 4,
                                        minWidth: 100,
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap'
                                    },
                                    title: ("TURBOPACK compile-time truthy", 1) ? `Open local file: ${filePath}` : "TURBOPACK unreachable",
                                    children: [
                                        "📄 ",
                                        drawingId
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                    lineNumber: 594,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1,
                                        display: 'flex',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "print-only",
                                            style: {
                                                display: 'none',
                                                fontSize: 10,
                                                color: textCol
                                            },
                                            children: noteVal ? ` - ${noteVal}` : ''
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 625,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "print-hide",
                                            style: {
                                                width: '100%'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DrawingNoteInput, {
                                                sowId: row.sow_id,
                                                drawingId: drawingId,
                                                initialValue: noteVal,
                                                onSave: updateSOWItemDrawingNotes,
                                                isDark: isDark,
                                                textCol: textCol
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 629,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 628,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                    lineNumber: 624,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "print-only",
                                    style: {
                                        display: 'none'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$qrcode$2e$react$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QRCodeSVG"], {
                                        value: qrUrl,
                                        size: 32,
                                        level: "L",
                                        includeMargin: false,
                                        style: {
                                            display: 'block'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 642,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                    lineNumber: 641,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "print-hide",
                                    onClick: ()=>removeSOWItemDrawing(row.sow_id, drawingId),
                                    style: {
                                        color: '#f87171',
                                        background: 'transparent',
                                        border: 'none',
                                        cursor: 'pointer',
                                        fontSize: 12,
                                        lineHeight: 1,
                                        padding: '2px 4px'
                                    },
                                    title: "Remove drawing reference",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                    lineNumber: 651,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, drawingId, true, {
                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                            lineNumber: 593,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                    lineNumber: 587,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontSize: 10,
                        color: subText,
                        fontStyle: 'italic'
                    },
                    children: "No drawings linked"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                    lineNumber: 672,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "print-hide",
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                        flexWrap: 'wrap',
                        marginTop: 4
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "file",
                            multiple: true,
                            className: "hidden",
                            id: `drawing-${typePrefix}-files-${row.sow_id}`,
                            onChange: (e)=>handleFilesSelect(e, row),
                            style: {
                                display: 'none'
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                            lineNumber: 679,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: `drawing-${typePrefix}-files-${row.sow_id}`,
                            style: {
                                color: '#f59e0b',
                                cursor: 'pointer',
                                fontSize: 9,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 1.5,
                                userSelect: 'none'
                            },
                            className: "hover:text-amber-500 font-semibold",
                            children: "🔗 Select File(s)"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                            lineNumber: 687,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: 9,
                                color: isDark ? '#21262d' : '#cbd5e1'
                            },
                            children: "|"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                            lineNumber: 695,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "file",
                            multiple: true,
                            webkitdirectory: "",
                            directory: "",
                            className: "hidden",
                            id: `drawing-${typePrefix}-folder-${row.sow_id}`,
                            onChange: (e)=>handleFolderSelect(e, row),
                            style: {
                                display: 'none'
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                            lineNumber: 697,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: `drawing-${typePrefix}-folder-${row.sow_id}`,
                            style: {
                                color: '#f59e0b',
                                cursor: 'pointer',
                                fontSize: 9,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 1.5,
                                userSelect: 'none'
                            },
                            className: "hover:text-amber-500 font-semibold",
                            children: "📁 Select Folder"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                            lineNumber: 706,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: 9,
                                color: isDark ? '#21262d' : '#cbd5e1'
                            },
                            children: "|"
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                            lineNumber: 714,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "+ Add drawing #",
                            style: {
                                fontSize: 9,
                                padding: '1px 5px',
                                width: 95,
                                background: isDark ? '#0d1117' : '#ffffff',
                                border: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1'),
                                borderRadius: 4,
                                color: textCol,
                                outline: 'none'
                            },
                            onKeyDown: (e)=>{
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    addManualDrawing(row, e.currentTarget.value);
                                    e.currentTarget.value = '';
                                }
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                            lineNumber: 716,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                    lineNumber: 678,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
            lineNumber: 585,
            columnNumber: 7
        }, this);
    };
    function getRowHeaders(ws, rowIndex, range) {
        const headers = new Set();
        for(let c = range.s.c; c <= range.e.c; c++){
            const addr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].encode_cell({
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
                const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schedulerParser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseXERToSow"])(text);
                logs.push(`Successfully parsed ${res.length} hierarchical and activity lines!`);
                setParsedItems(res);
            } else if (mode === 'msp') {
                const text = await file.text();
                logs.push('Parsing Microsoft Project XML hierarchy schema...');
                const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schedulerParser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseMSPXmlToSow"])(text);
                logs.push(`Successfully parsed ${res.length} scheduled activity entries!`);
                setParsedItems(res);
            } else {
                logs.push('Reading spreadsheet file contents...');
                if (extension === '.csv') {
                    const text = await file.text();
                    const wb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["read"](text, {
                        type: 'string'
                    });
                    const wsName = wb.SheetNames[0];
                    const ws = wb.Sheets[wsName];
                    const rows = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].sheet_to_json(ws, {
                        defval: ''
                    });
                    logs.push(`Read ${rows.length} records. Extracting schema...`);
                    const headerSet = new Set(Object.keys(rows[0] || {}));
                    const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schedulerParser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseCSVToSow"])(rows, headerSet);
                    logs.push(`Successfully mapped ${res.length} SOW activity blocks!`);
                    setParsedItems(res);
                } else {
                    const ab = await file.arrayBuffer();
                    const wb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["read"](ab, {
                        type: 'array'
                    });
                    const sheetName = wb.SheetNames.find((n)=>n.trim().toLowerCase() === 'master sow') || wb.SheetNames[0];
                    logs.push(`Loading worksheet: "${sheetName}"`);
                    const ws = wb.Sheets[sheetName];
                    let rangeStart = 0;
                    let headers = [];
                    const ref = ws['!ref'];
                    if (ref) {
                        const decRange = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].decode_range(ref);
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
                    const rows = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].sheet_to_json(ws, {
                        range: rangeStart,
                        defval: ''
                    });
                    const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$schedulerParser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseCSVToSow"])(rows, new Set(headers));
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
            const { error: delErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('sow_items').delete().eq('projectid', projectid);
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
                const { error: insErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('sow_items').insert(payload);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (projectid) load();
    }, [
        projectid
    ]);
    async function load() {
        setLoading(true);
        const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
        if (!user && !isPublicViewOnly) {
            router.push(`/login?next=/dashboard/${projectid}/sow`);
            return;
        }
        const [pRes, sRes, dRes] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('projects').select('*').eq('projectid', projectid).single(),
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('sow_items').select('*').eq('projectid', projectid).order('sow_number'),
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('documents').select('*').eq('projectid', projectid)
        ]);
        if (user && pRes.data) {
            const canAccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$access$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["canAccessProject"])({
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
        if (dRes.data) setDocuments(dRes.data);
        if (sRes.data) {
            // Merge with localStorage overrides if they exist
            const localBackupKey = `sow_drawings_backup_${projectid}`;
            let backup = {};
            try {
                const stored = localStorage.getItem(localBackupKey);
                if (stored) backup = JSON.parse(stored);
            } catch (e) {
                console.error("Local storage read error", e);
            }
            const merged = sRes.data.map((item)=>{
                const fallback = backup[item.sow_id];
                if (fallback) {
                    return {
                        ...item,
                        drawing_ids: fallback.drawing_ids !== undefined ? fallback.drawing_ids : item.drawing_ids || [],
                        drawing_paths: fallback.drawing_paths !== undefined ? fallback.drawing_paths : item.drawing_paths || {},
                        drawing_notes: fallback.drawing_notes !== undefined ? fallback.drawing_notes : item.drawing_notes || {}
                    };
                }
                return item;
            });
            setItems(merged);
        }
        setLoading(false);
    }
    // ── Summary stats ────────────────────────────────────────────────────────
    const l3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>items.filter((i)=>i.hierarchy_level === 3), [
        items
    ]);
    const totalBoq = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>l3.reduce((s, i)=>s + (i.boq_amount || 0), 0), [
        l3
    ]);
    const totalEstCost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>l3.reduce((s, i)=>s + (i.estimated_cost || 0), 0), [
        l3
    ]);
    const totalActCost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>l3.reduce((s, i)=>s + (i.actual_cost || 0), 0), [
        l3
    ]);
    const criticalCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>l3.filter((i)=>i.is_critical_path).length, [
        l3
    ]);
    const statusCounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const c = {};
        l3.forEach((i)=>{
            const s = i.status || 'Not Started';
            c[s] = (c[s] || 0) + 1;
        });
        return c;
    }, [
        l3
    ]);
    const avgProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>l3.length ? Math.round(l3.reduce((s, i)=>s + (i.percent_complete || 0), 0) / l3.length) : 0, [
        l3
    ]);
    // ── Tree structure ───────────────────────────────────────────────────────
    const l1Items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>items.filter((i)=>i.hierarchy_level === 1), [
        items
    ]);
    const l2Items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>items.filter((i)=>i.hierarchy_level === 2), [
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
            const d = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SSF"].parse_date_code(v);
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
        const range = ws['!ref'] ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].decode_range(ws['!ref']) : null;
        const headers = new Set();
        if (!range) return headers;
        const headerRow = 3;
        for(let c = range.s.c; c <= range.e.c; c++){
            const addr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].encode_cell({
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
            const wb = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["read"](ab, {
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
            const rows = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].sheet_to_json(ws, {
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
            const { error: delErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('sow_items').delete().eq('projectid', projectid);
            if (delErr) throw new Error(delErr.message);
            setImportMsg(`Importing ${mapped.length} rows...`);
            const BATCH = 250;
            for(let i = 0; i < mapped.length; i += BATCH){
                const slice = mapped.slice(i, i + BATCH);
                const { error: insErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('sow_items').insert(slice);
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
            const { error: e } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('sow_items').update(payload).eq('sow_id', editItem.sow_id);
            err = e;
        } else {
            const { error: e } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('sow_items').insert([
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
        await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('sow_items').delete().eq('sow_id', item.sow_id);
        load();
    }
    function toggleCollapse(key) {
        setCollapsed((c)=>({
                ...c,
                [key]: !c[key]
            }));
    }
    // ── Loading / not found ──────────────────────────────────────────────────
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
        lineNumber: 1300,
        columnNumber: 5
    }, this);
    if (!project) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "/dashboard",
                style: {
                    color: '#f59e0b',
                    marginLeft: 8
                },
                children: "← Back"
            }, void 0, false, {
                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                lineNumber: 1306,
                columnNumber: 26
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
        lineNumber: 1305,
        columnNumber: 5
    }, this);
    const sc = projectStatusColor[project.status] || projectStatusColor['Planning'];
    const hText = isDark ? '#e6edf3' : '#0f172a';
    const textCol = isDark ? '#c9d1d9' : '#1e293b';
    const subText = isDark ? '#484f58' : '#64748b';
    const accentBorder = isDark ? '#161b22' : '#cbd5e1';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            fontFamily: "'DM Mono','Courier New',monospace",
            background: isDark ? '#0a0c0e' : '#F8FAFC',
            minHeight: '100vh',
            color: isDark ? '#c9d1d9' : '#1e293b',
            backgroundImage: isDark ? 'linear-gradient(rgba(96,165,250,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(96,165,250,0.025) 1px,transparent 1px)' : 'linear-gradient(rgba(0,0,0,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.015) 1px,transparent 1px)',
            backgroundSize: '32px 32px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
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

        @media print {
          body, html, #__next, main, div:not(.print-only):not(.sow-content):not(td):not(tr):not(table) {
            background: #ffffff !important;
            color: #000000 !important;
          }
          .sow-topbar, .sow-kpis, .sow-status, .sow-form, button, label, .print-hide, .btn, select, a:not([href]) {
            display: none !important;
          }
          .print-only {
            display: block !important;
          }
          .sow-content {
            padding: 0 !important;
            margin: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          .print-only {
            display: block !important;
          }
          table {
            width: 100% !important;
            border-collapse: collapse !important;
            color: #000000 !important;
          }
          th, td {
            border: 1px solid #111111 !important;
            padding: 8px 12px !important;
            color: #000000 !important;
          }
          a {
            text-decoration: none !important;
            color: #000000 !important;
          }
        }
      `
            }, void 0, false, {
                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                lineNumber: 1318,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sow-topbar-left",
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 14
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn",
                                onClick: ()=>router.push(`/dashboard/${projectid}`),
                                style: {
                                    fontSize: '11px',
                                    padding: '5px 10px'
                                },
                                children: "← Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 1410,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "'Barlow Condensed',sans-serif",
                                            fontWeight: 700,
                                            fontSize: 18,
                                            color: isDark ? '#e6edf3' : '#0f172a'
                                        },
                                        children: project.project_name
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1412,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        lineNumber: 1413,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 1411,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tag",
                                style: {
                                    background: sc.bg,
                                    color: sc.text
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 6,
                                            height: 6,
                                            borderRadius: '50%',
                                            background: sc.dot
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1416,
                                        columnNumber: 13
                                    }, this),
                                    project.status
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 1415,
                                columnNumber: 11
                            }, this),
                            isPublicViewOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tag",
                                style: {
                                    background: '#2d1f05',
                                    color: '#f59e0b'
                                },
                                children: "READ-ONLY DEMO"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 1419,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "print-hide",
                                style: {
                                    display: 'flex',
                                    border: '1px solid ' + (isDark ? '#30363d' : '#cbd5e1'),
                                    borderRadius: '6px',
                                    overflow: 'hidden',
                                    padding: '1px',
                                    background: isDark ? '#0d1117' : '#f1f5f9',
                                    marginLeft: 8
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setViewMode('tree'),
                                        style: {
                                            fontSize: 10,
                                            border: 'none',
                                            borderRadius: '4px',
                                            padding: '4px 10px',
                                            cursor: 'pointer',
                                            fontWeight: 600,
                                            background: viewMode === 'tree' ? '#f59e0b' : 'transparent',
                                            color: viewMode === 'tree' ? '#0a0c0e' : isDark ? '#8b949e' : '#475569'
                                        },
                                        children: "🌳 Scope Tree"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1426,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setViewMode('drawings'),
                                        style: {
                                            fontSize: 10,
                                            border: 'none',
                                            borderRadius: '4px',
                                            padding: '4px 10px',
                                            cursor: 'pointer',
                                            fontWeight: 600,
                                            background: viewMode === 'drawings' ? '#f59e0b' : 'transparent',
                                            color: viewMode === 'drawings' ? '#0a0c0e' : isDark ? '#8b949e' : '#475569'
                                        },
                                        children: "📋 Drawing Report"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1441,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 1425,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                        lineNumber: 1409,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sow-topbar-right",
                        style: {
                            display: 'flex',
                            gap: 8,
                            alignItems: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                compact: true
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 1459,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                                lineNumber: 1460,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                                lineNumber: 1461,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                lineNumber: 1462,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                lineNumber: 1476,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                lineNumber: 1484,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                        lineNumber: 1458,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                lineNumber: 1408,
                columnNumber: 7
            }, this),
            importMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '10px 24px',
                    borderBottom: '1px solid #161b22',
                    color: '#f59e0b',
                    fontSize: 11
                },
                children: importMsg
            }, void 0, false, {
                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                lineNumber: 1500,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    ].map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 9,
                                        color: '#484f58',
                                        letterSpacing: '0.1em'
                                    },
                                    children: k.label
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                    lineNumber: 1516,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: "'Barlow Condensed',sans-serif",
                                        fontWeight: 700,
                                        fontSize: 18,
                                        color: k.color
                                    },
                                    children: k.value
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                    lineNumber: 1517,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, k.label, true, {
                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                            lineNumber: 1515,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginLeft: 'auto',
                            display: 'flex',
                            gap: 8,
                            alignItems: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 6,
                                    marginRight: 8
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 9,
                                            color: '#484f58',
                                            letterSpacing: '0.05em',
                                            whiteSpace: 'nowrap'
                                        },
                                        children: "DRAWINGS PATH:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1523,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "e.g. C:/Drawings",
                                        value: drawingsBasePath,
                                        onChange: (e)=>updateDrawingsBasePath(e.target.value),
                                        className: "fi",
                                        style: {
                                            width: 130,
                                            fontSize: 11,
                                            padding: '4px 8px'
                                        },
                                        title: "Locally mapped drawings directory to fetch files from"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1524,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 1522,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "fi",
                                value: filterStatus,
                                onChange: (e)=>setFilterStatus(e.target.value),
                                style: {
                                    width: 130,
                                    fontSize: 11
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "All",
                                        children: "All Statuses"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1535,
                                        columnNumber: 13
                                    }, this),
                                    STATUS_OPTS.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            children: s
                                        }, s, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 1536,
                                            columnNumber: 35
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 1534,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "fi",
                                value: filterRisk,
                                onChange: (e)=>setFilterRisk(e.target.value),
                                style: {
                                    width: 120,
                                    fontSize: 11
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "All",
                                        children: "All Risks"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1539,
                                        columnNumber: 13
                                    }, this),
                                    RISK_OPTS.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            children: r
                                        }, r, false, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 1540,
                                            columnNumber: 33
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 1538,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                        lineNumber: 1520,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                lineNumber: 1506,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            lineNumber: 1549,
                            columnNumber: 18
                        }, this);
                    }),
                    l3.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 11,
                            color: subText
                        },
                        children: "No line items yet — click + Add SOW Item to start."
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                        lineNumber: 1551,
                        columnNumber: 29
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                lineNumber: 1546,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: 24,
                    paddingRight: showForm ? 520 : 24,
                    transition: 'padding-right 0.2s ease'
                },
                className: "fade-in sow-content",
                children: viewMode === 'drawings' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fade-in block",
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 16
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "print-hide",
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 12,
                                padding: '16px 20px',
                                background: isDark ? '#0d1117' : '#ffffff',
                                borderRadius: '8px',
                                border: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1')
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                        gap: 12
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: 2
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    style: {
                                                        fontFamily: "'Barlow Condensed',sans-serif",
                                                        fontSize: 18,
                                                        color: hText,
                                                        fontWeight: 700,
                                                        letterSpacing: '0.02em'
                                                    },
                                                    children: "DRAWING REPORT MANAGER & COMPILED INDEX"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1563,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 10,
                                                        color: subText
                                                    },
                                                    children: "Compile drawings register, link drawings across scopes, export to CSV, and print clean reports."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1564,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 1562,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                border: '1px solid ' + (isDark ? '#30363d' : '#cbd5e1'),
                                                borderRadius: '6px',
                                                overflow: 'hidden',
                                                padding: '1px',
                                                background: isDark ? '#0a0c0e' : '#f1f5f9'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setDrawingSubMode('items'),
                                                    style: {
                                                        fontSize: 10,
                                                        border: 'none',
                                                        borderRadius: '4px',
                                                        padding: '4px 10px',
                                                        cursor: 'pointer',
                                                        fontWeight: 600,
                                                        background: drawingSubMode === 'items' ? '#f59e0b' : 'transparent',
                                                        color: drawingSubMode === 'items' ? '#0a0c0e' : isDark ? '#8b949e' : '#475569'
                                                    },
                                                    children: "📜 Scope-to-Drawing Manifest"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1569,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setDrawingSubMode('compiled'),
                                                    style: {
                                                        fontSize: 10,
                                                        border: 'none',
                                                        borderRadius: '4px',
                                                        padding: '4px 10px',
                                                        cursor: 'pointer',
                                                        fontWeight: 600,
                                                        background: drawingSubMode === 'compiled' ? '#f59e0b' : 'transparent',
                                                        color: drawingSubMode === 'compiled' ? '#0a0c0e' : isDark ? '#8b949e' : '#475569'
                                                    },
                                                    children: "🗂️ Consolidated Drawing Register"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1584,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 1568,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                    lineNumber: 1561,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        gap: 12,
                                        flexWrap: 'wrap',
                                        paddingTop: 8,
                                        borderTop: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1')
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 16,
                                                flexWrap: 'wrap'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Search drawing reference, description...",
                                                    value: drawingsSearch,
                                                    onChange: (e)=>setDrawingsSearch(e.target.value),
                                                    className: "fi",
                                                    style: {
                                                        width: 220,
                                                        fontSize: 11,
                                                        padding: '6px 10px'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1604,
                                                    columnNumber: 19
                                                }, this),
                                                drawingSubMode === 'items' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            style: {
                                                                display: 'inline-flex',
                                                                alignItems: 'center',
                                                                gap: 6,
                                                                fontSize: 11,
                                                                color: textCol,
                                                                cursor: 'pointer',
                                                                userSelect: 'none'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: showFullSowTree,
                                                                    onChange: (e)=>setShowFullSowTree(e.target.checked),
                                                                    style: {
                                                                        accentColor: '#f59e0b',
                                                                        cursor: 'pointer'
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                    lineNumber: 1616,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "Show Full Scope Tree"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                            lineNumber: 1615,
                                                            columnNumber: 23
                                                        }, this),
                                                        !showFullSowTree && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            style: {
                                                                display: 'inline-flex',
                                                                alignItems: 'center',
                                                                gap: 6,
                                                                fontSize: 11,
                                                                color: textCol,
                                                                cursor: 'pointer',
                                                                userSelect: 'none'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: onlyShowWithDrawings,
                                                                    onChange: (e)=>setOnlyShowWithDrawings(e.target.checked),
                                                                    style: {
                                                                        accentColor: '#f59e0b',
                                                                        cursor: 'pointer'
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                    lineNumber: 1627,
                                                                    columnNumber: 27
                                                                }, this),
                                                                "Only linked items"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                            lineNumber: 1626,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 1603,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 8
                                            },
                                            children: [
                                                drawingSubMode === 'compiled' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "btn",
                                                    onClick: exportDrawingsToCSV,
                                                    style: {
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: 6,
                                                        fontSize: '11px',
                                                        padding: '5px 12px',
                                                        border: '1px solid #4ade80',
                                                        color: '#4ade80'
                                                    },
                                                    children: "📥 Export Compiled CSV"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1642,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "btn btn-primary",
                                                    onClick: ()=>window.print(),
                                                    style: {
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: 6,
                                                        fontSize: '11px',
                                                        padding: '5px 12px'
                                                    },
                                                    children: "🖨️ Print Report View"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1650,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 1640,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                    lineNumber: 1602,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                            lineNumber: 1560,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginBottom: 12
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: '#0d1117',
                                        border: '1px solid #f59e0b33',
                                        borderRadius: 8,
                                        padding: '14px 20px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                        gap: 12
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
                                                                color: '#0a0c0e'
                                                            },
                                                            children: "C"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                            lineNumber: 1666,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontWeight: 900,
                                                                        fontSize: 16,
                                                                        color: '#f59e0b',
                                                                        letterSpacing: '0.05em'
                                                                    },
                                                                    children: "CPOS"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                    lineNumber: 1668,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: 8,
                                                                        color: '#8b949e',
                                                                        letterSpacing: '0.12em'
                                                                    },
                                                                    children: "CONSTRUCTION PROJECT OS"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                    lineNumber: 1669,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                            lineNumber: 1667,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1665,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: 1,
                                                        height: 36,
                                                        background: '#21262d'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1672,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: 9,
                                                                color: '#f59e0b',
                                                                letterSpacing: '0.12em',
                                                                fontWeight: 700,
                                                                marginBottom: 2
                                                            },
                                                            children: drawingSubMode === 'items' ? "CONSTRUCTION DRAWING LOG & SOW LINKAGE MANIFEST" : "CONSOLIDATED MASTER DRAWING INDEX REGISTER"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                            lineNumber: 1674,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: 20,
                                                                fontWeight: 800,
                                                                color: '#e6edf3',
                                                                lineHeight: 1.1
                                                            },
                                                            children: project.project_name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                            lineNumber: 1677,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: 10,
                                                                color: '#8b949e',
                                                                marginTop: 2
                                                            },
                                                            children: [
                                                                project.project_code,
                                                                " • ",
                                                                project.location
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                            lineNumber: 1678,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1673,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 1664,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                textAlign: 'right',
                                                borderLeft: '1px solid #21262d',
                                                paddingLeft: 16,
                                                minWidth: 180
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 9,
                                                        color: '#8b949e',
                                                        letterSpacing: '0.08em'
                                                    },
                                                    children: "PREPARED FOR"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1682,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 12,
                                                        color: '#c9d1d9',
                                                        fontWeight: 700,
                                                        marginBottom: 4
                                                    },
                                                    children: "PROJECT CONTROLS & FIELD LABS"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1683,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 10,
                                                        color: '#8b949e'
                                                    },
                                                    children: [
                                                        "Report Date: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: '#c9d1d9'
                                                            },
                                                            children: new Date().toLocaleDateString('en-ZA', {
                                                                day: '2-digit',
                                                                month: 'long',
                                                                year: 'numeric'
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                            lineNumber: 1684,
                                                            columnNumber: 80
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1684,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 10,
                                                        color: '#8b949e'
                                                    },
                                                    children: [
                                                        "Client: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: '#c9d1d9'
                                                            },
                                                            children: project.client_name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                            lineNumber: 1685,
                                                            columnNumber: 75
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1685,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 10,
                                                        color: '#8b949e'
                                                    },
                                                    children: [
                                                        "Status: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: '#f59e0b'
                                                            },
                                                            children: project.status
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                            lineNumber: 1686,
                                                            columnNumber: 75
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1686,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 1681,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                    lineNumber: 1663,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        height: 2,
                                        background: 'linear-gradient(90deg, #f59e0b, #38bdf8, transparent)',
                                        borderRadius: 1,
                                        marginTop: 12,
                                        marginBottom: 16
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                    lineNumber: 1689,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                            lineNumber: 1662,
                            columnNumber: 13
                        }, this),
                        drawingSubMode === 'items' ? /* SUBMODE 1: SCOPE SECTION MANIFEST WITH LINKED DRAWING REF */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: isDark ? '#0d1117' : '#ffffff',
                                border: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1'),
                                borderRadius: '8px',
                                overflow: 'hidden'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                style: {
                                    width: '100%',
                                    borderCollapse: 'collapse',
                                    fontSize: 11,
                                    textAlign: 'left',
                                    color: textCol
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            style: {
                                                background: isDark ? '#161b22' : '#f8fafc',
                                                borderBottom: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1')
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: {
                                                        padding: '10px 14px',
                                                        width: 110,
                                                        fontWeight: 600,
                                                        color: subText,
                                                        textTransform: 'uppercase',
                                                        fontSize: 9,
                                                        letterSpacing: '0.05em'
                                                    },
                                                    children: "SOW Reference"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1698,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: {
                                                        padding: '10px 14px',
                                                        width: '25%',
                                                        fontWeight: 600,
                                                        color: subText,
                                                        textTransform: 'uppercase',
                                                        fontSize: 9,
                                                        letterSpacing: '0.05em'
                                                    },
                                                    children: "Scope Hierarchy Description"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1699,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: {
                                                        padding: '10px 14px',
                                                        width: '20%',
                                                        fontWeight: 600,
                                                        color: subText,
                                                        textTransform: 'uppercase',
                                                        fontSize: 9,
                                                        letterSpacing: '0.05em'
                                                    },
                                                    children: "Particulars Details"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1700,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: {
                                                        padding: '10px 14px',
                                                        width: '25%',
                                                        fontWeight: 600,
                                                        color: subText,
                                                        textTransform: 'uppercase',
                                                        fontSize: 9,
                                                        letterSpacing: '0.05em'
                                                    },
                                                    children: "Drawing Number(s) & Detailed Notes / Classifications"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1701,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: {
                                                        padding: '10px 14px',
                                                        width: '20%',
                                                        fontWeight: 600,
                                                        color: subText,
                                                        textTransform: 'uppercase',
                                                        fontSize: 9,
                                                        letterSpacing: '0.05em'
                                                    },
                                                    children: "Related Documents"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1702,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 1697,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1696,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: [
                                            items.filter((row)=>{
                                                if (showFullSowTree) {
                                                    if (drawingsSearch.trim()) {
                                                        const query = drawingsSearch.toLowerCase();
                                                        const sowNum = (row.sow_number || '').toLowerCase();
                                                        const desc = (row.sub_item_l3 || row.item_l2 || row.scope_l1 || '').toLowerCase();
                                                        const part = (row.particulars || '').toLowerCase();
                                                        const matchesDrawingId = (row.drawing_ids || []).some((id)=>id.toLowerCase().includes(query));
                                                        const matchesNotes = Object.values(row.drawing_notes || {}).some((val)=>val.toLowerCase().includes(query));
                                                        return sowNum.includes(query) || desc.includes(query) || part.includes(query) || matchesDrawingId || matchesNotes;
                                                    }
                                                    return true;
                                                } else {
                                                    if (row.hierarchy_level !== 3) return false;
                                                    if (filterStatus !== 'All' && row.status !== filterStatus) return false;
                                                    if (filterRisk !== 'All' && row.risk_level !== filterRisk) return false;
                                                    if (onlyShowWithDrawings && (!row.drawing_ids || row.drawing_ids.length === 0)) return false;
                                                    if (drawingsSearch.trim()) {
                                                        const query = drawingsSearch.toLowerCase();
                                                        const sowNum = (row.sow_number || '').toLowerCase();
                                                        const desc = (row.sub_item_l3 || '').toLowerCase();
                                                        const part = (row.particulars || '').toLowerCase();
                                                        const matchesDrawingId = (row.drawing_ids || []).some((id)=>id.toLowerCase().includes(query));
                                                        const matchesNotes = Object.values(row.drawing_notes || {}).some((val)=>val.toLowerCase().includes(query));
                                                        return sowNum.includes(query) || desc.includes(query) || part.includes(query) || matchesDrawingId || matchesNotes;
                                                    }
                                                    return true;
                                                }
                                            }).map((row)=>{
                                                if (row.hierarchy_level === 1) {
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        style: {
                                                            background: isDark ? '#1a202c' : '#f8fafc',
                                                            fontWeight: 700,
                                                            borderBottom: '2px solid ' + (isDark ? '#30363d' : '#cbd5e1'),
                                                            verticalAlign: 'top'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: '12px 14px',
                                                                    color: '#f59e0b',
                                                                    fontSize: 11,
                                                                    fontFamily: "var(--font-mono), monospace"
                                                                },
                                                                children: row.sow_number
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 1739,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: '12px 14px',
                                                                    fontSize: 12,
                                                                    color: hText,
                                                                    letterSpacing: '0.02em',
                                                                    textTransform: 'uppercase'
                                                                },
                                                                children: [
                                                                    "🌳 ",
                                                                    row.scope_l1
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 1740,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: '12px 14px',
                                                                    color: subText,
                                                                    fontSize: 10
                                                                },
                                                                children: "—"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 1743,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: '12px 14px'
                                                                },
                                                                children: renderDrawingManagerInline(row, 'l1-rep')
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 1746,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: '12px 14px'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: 'flex',
                                                                        flexDirection: 'column',
                                                                        gap: 4
                                                                    },
                                                                    children: [
                                                                        documents.filter((doc)=>doc.related_sow_item_id === row.sow_id).map((doc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>handleDownloadDoc(doc),
                                                                                style: {
                                                                                    background: 'transparent',
                                                                                    border: 'none',
                                                                                    padding: 0,
                                                                                    textAlign: 'left',
                                                                                    cursor: 'pointer',
                                                                                    fontSize: 10,
                                                                                    color: '#60a5fa',
                                                                                    display: 'flex',
                                                                                    alignItems: 'center',
                                                                                    gap: 4
                                                                                },
                                                                                title: doc.description || doc.file_name,
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        style: {
                                                                                            fontSize: 8,
                                                                                            background: '#f59e0b22',
                                                                                            color: '#f59e0b',
                                                                                            padding: '1px 3px',
                                                                                            borderRadius: 3,
                                                                                            fontWeight: 'bold'
                                                                                        },
                                                                                        children: doc.document_type || 'Other'
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                                        lineNumber: 1758,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    doc.file_name
                                                                                ]
                                                                            }, doc.id, true, {
                                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                                lineNumber: 1752,
                                                                                columnNumber: 35
                                                                            }, this)),
                                                                        documents.filter((doc)=>doc.related_sow_item_id === row.sow_id).length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                color: '#484f58',
                                                                                fontStyle: 'italic'
                                                                            },
                                                                            children: "—"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                            lineNumber: 1763,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                    lineNumber: 1750,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 1749,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, row.sow_id, true, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1738,
                                                        columnNumber: 27
                                                    }, this);
                                                }
                                                if (row.hierarchy_level === 2) {
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        style: {
                                                            background: isDark ? '#111622' : '#f1f5f9',
                                                            fontWeight: 600,
                                                            borderBottom: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1'),
                                                            verticalAlign: 'top'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: '12px 14px',
                                                                    color: isDark ? '#8b949e' : '#475569',
                                                                    fontSize: 10,
                                                                    paddingLeft: 24,
                                                                    fontFamily: "var(--font-mono), monospace"
                                                                },
                                                                children: row.sow_number
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 1774,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: '12px 14px',
                                                                    fontSize: 11,
                                                                    color: hText
                                                                },
                                                                children: [
                                                                    "📁 ",
                                                                    row.item_l2
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 1775,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: '12px 14px',
                                                                    color: subText,
                                                                    fontSize: 10
                                                                },
                                                                children: "—"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 1778,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: '12px 14px'
                                                                },
                                                                children: renderDrawingManagerInline(row, 'l2-rep')
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 1781,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    padding: '12px 14px'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: 'flex',
                                                                        flexDirection: 'column',
                                                                        gap: 4
                                                                    },
                                                                    children: [
                                                                        documents.filter((doc)=>doc.related_sow_item_id === row.sow_id).map((doc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>handleDownloadDoc(doc),
                                                                                style: {
                                                                                    background: 'transparent',
                                                                                    border: 'none',
                                                                                    padding: 0,
                                                                                    textAlign: 'left',
                                                                                    cursor: 'pointer',
                                                                                    fontSize: 10,
                                                                                    color: '#60a5fa',
                                                                                    display: 'flex',
                                                                                    alignItems: 'center',
                                                                                    gap: 4
                                                                                },
                                                                                title: doc.description || doc.file_name,
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        style: {
                                                                                            fontSize: 8,
                                                                                            background: '#f59e0b22',
                                                                                            color: '#f59e0b',
                                                                                            padding: '1px 3px',
                                                                                            borderRadius: 3,
                                                                                            fontWeight: 'bold'
                                                                                        },
                                                                                        children: doc.document_type || 'Other'
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                                        lineNumber: 1793,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    doc.file_name
                                                                                ]
                                                                            }, doc.id, true, {
                                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                                lineNumber: 1787,
                                                                                columnNumber: 35
                                                                            }, this)),
                                                                        documents.filter((doc)=>doc.related_sow_item_id === row.sow_id).length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                color: '#484f58',
                                                                                fontStyle: 'italic'
                                                                            },
                                                                            children: "—"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                            lineNumber: 1798,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                    lineNumber: 1785,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 1784,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, row.sow_id, true, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1773,
                                                        columnNumber: 27
                                                    }, this);
                                                }
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    style: {
                                                        borderBottom: '1px solid ' + (isDark ? '#21262d' : '#e2e8f0'),
                                                        verticalAlign: 'top'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: '12px 14px',
                                                                paddingLeft: showFullSowTree ? 36 : 14,
                                                                fontFamily: "var(--font-mono), monospace",
                                                                fontSize: 10,
                                                                color: isDark ? '#8b949e' : '#475569',
                                                                fontWeight: 600
                                                            },
                                                            children: row.sow_number
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                            lineNumber: 1808,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: '12px 14px',
                                                                fontWeight: 500,
                                                                color: hText,
                                                                fontSize: 11
                                                            },
                                                            children: row.sub_item_l3
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                            lineNumber: 1811,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: '12px 14px',
                                                                color: subText,
                                                                fontSize: 10
                                                            },
                                                            children: row.particulars || '—'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                            lineNumber: 1814,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: '12px 14px'
                                                            },
                                                            children: renderDrawingManagerInline(row, 'l3-rep')
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                            lineNumber: 1817,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: '12px 14px'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    flexDirection: 'column',
                                                                    gap: 4
                                                                },
                                                                children: [
                                                                    documents.filter((doc)=>doc.related_sow_item_id === row.sow_id).map((doc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handleDownloadDoc(doc),
                                                                            style: {
                                                                                background: 'transparent',
                                                                                border: 'none',
                                                                                padding: 0,
                                                                                textAlign: 'left',
                                                                                cursor: 'pointer',
                                                                                fontSize: 10,
                                                                                color: '#60a5fa',
                                                                                display: 'flex',
                                                                                alignItems: 'center',
                                                                                gap: 4
                                                                            },
                                                                            title: doc.description || doc.file_name,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        fontSize: 8,
                                                                                        background: '#f59e0b22',
                                                                                        color: '#f59e0b',
                                                                                        padding: '1px 3px',
                                                                                        borderRadius: 3,
                                                                                        fontWeight: 'bold'
                                                                                    },
                                                                                    children: doc.document_type || 'Other'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                                    lineNumber: 1829,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                doc.file_name
                                                                            ]
                                                                        }, doc.id, true, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                            lineNumber: 1823,
                                                                            columnNumber: 33
                                                                        }, this)),
                                                                    documents.filter((doc)=>doc.related_sow_item_id === row.sow_id).length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            color: '#484f58',
                                                                            fontStyle: 'italic'
                                                                        },
                                                                        children: "—"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                        lineNumber: 1834,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 1821,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                            lineNumber: 1820,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, row.sow_id, true, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1807,
                                                    columnNumber: 25
                                                }, this);
                                            }),
                                            items.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    colSpan: 5,
                                                    style: {
                                                        padding: '30px 0',
                                                        textAlign: 'center',
                                                        color: '#484f58',
                                                        fontStyle: 'italic'
                                                    },
                                                    children: "No SOW items found in this project."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1843,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1842,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1705,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 1695,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                            lineNumber: 1694,
                            columnNumber: 15
                        }, this) : /* SUBMODE 2: CONSOLIDATED DRAWING REGISTER */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: isDark ? '#0d1117' : '#ffffff',
                                border: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1'),
                                borderRadius: '8px',
                                overflow: 'hidden'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                style: {
                                    width: '100%',
                                    borderCollapse: 'collapse',
                                    fontSize: 11,
                                    textAlign: 'left',
                                    color: textCol
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            style: {
                                                background: isDark ? '#161b22' : '#f8fafc',
                                                borderBottom: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1')
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: {
                                                        padding: '10px 14px',
                                                        width: '25%',
                                                        fontWeight: 600,
                                                        color: subText,
                                                        textTransform: 'uppercase',
                                                        fontSize: 9,
                                                        letterSpacing: '0.05em'
                                                    },
                                                    children: "📄 Drawing Number"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1857,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: {
                                                        padding: '10px 14px',
                                                        width: '25%',
                                                        fontWeight: 600,
                                                        color: subText,
                                                        textTransform: 'uppercase',
                                                        fontSize: 9,
                                                        letterSpacing: '0.05em'
                                                    },
                                                    children: "🏠 File Reference / Path"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1858,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: {
                                                        padding: '10px 14px',
                                                        width: '25%',
                                                        fontWeight: 600,
                                                        color: subText,
                                                        textTransform: 'uppercase',
                                                        fontSize: 9,
                                                        letterSpacing: '0.05em'
                                                    },
                                                    children: "🌿 Associated SOW Activities"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1859,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: {
                                                        padding: '10px 14px',
                                                        width: '25%',
                                                        fontWeight: 600,
                                                        color: subText,
                                                        textTransform: 'uppercase',
                                                        fontSize: 9,
                                                        letterSpacing: '0.05em'
                                                    },
                                                    children: "📝 Engineering Notes / Revisions"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1860,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 1856,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1855,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: [
                                            filteredCompiledDrawings.map((cd, idx)=>{
                                                const displayPath = cd.paths.join(', ') || 'Linked manually (no path)';
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    style: {
                                                        borderBottom: '1px solid ' + (isDark ? '#21262d' : '#e2e8f0'),
                                                        verticalAlign: 'top'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: '12px 14px',
                                                                fontFamily: "var(--font-mono), monospace",
                                                                fontSize: 10,
                                                                color: '#f59e0b',
                                                                fontWeight: 600
                                                            },
                                                            children: [
                                                                "📄 ",
                                                                cd.drawingId
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                            lineNumber: 1868,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: '12px 14px',
                                                                color: subText,
                                                                fontSize: 10,
                                                                wordBreak: 'break-all'
                                                            },
                                                            children: displayPath
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                            lineNumber: 1871,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: '12px 14px'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    flexDirection: 'column',
                                                                    gap: 4
                                                                },
                                                                children: cd.sowItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: 10,
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            gap: 6
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontFamily: "var(--font-mono), monospace",
                                                                                    background: isDark ? '#161b22' : '#f1f5f9',
                                                                                    color: isDark ? '#8b949e' : '#475569',
                                                                                    padding: '1px 5px',
                                                                                    borderRadius: 4,
                                                                                    fontWeight: 600
                                                                                },
                                                                                children: item.sow_number
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                                lineNumber: 1878,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: hText
                                                                                },
                                                                                children: item.sub_item_l3 || item.scope_l1 || 'Section Head'
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                                lineNumber: 1881,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, item.sow_id, true, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                        lineNumber: 1877,
                                                                        columnNumber: 33
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 1875,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                            lineNumber: 1874,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            style: {
                                                                padding: '12px 14px',
                                                                color: textCol,
                                                                fontSize: 10
                                                            },
                                                            children: cd.notes.filter(Boolean).length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                style: {
                                                                    margin: 0,
                                                                    paddingLeft: 14
                                                                },
                                                                children: cd.notes.filter(Boolean).map((note, nIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: note
                                                                    }, nIdx, false, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                        lineNumber: 1890,
                                                                        columnNumber: 35
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 1888,
                                                                columnNumber: 31
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: '#484f58',
                                                                    fontStyle: 'italic'
                                                                },
                                                                children: "(No notes recorded)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 1894,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                            lineNumber: 1886,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, `${cd.drawingId}-${idx}`, true, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1867,
                                                    columnNumber: 25
                                                }, this);
                                            }),
                                            filteredCompiledDrawings.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    colSpan: 4,
                                                    style: {
                                                        padding: '30px 0',
                                                        textAlign: 'center',
                                                        color: '#484f58',
                                                        fontStyle: 'italic'
                                                    },
                                                    children: "No compiled drawings matches found."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1902,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1901,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1863,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 1854,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                            lineNumber: 1853,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                    lineNumber: 1558,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        l3.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 9,
                                        color: subText,
                                        letterSpacing: '0.08em'
                                    },
                                    children: h
                                }, h, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                    lineNumber: 1918,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                            lineNumber: 1916,
                            columnNumber: 15
                        }, this),
                        l1Items.length === 0 && l3.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: 'center',
                                padding: '60px 0',
                                color: '#484f58'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontFamily: "'Barlow Condensed',sans-serif",
                                        fontSize: 22,
                                        marginBottom: 8
                                    },
                                    children: "NO SOW ITEMS YET"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                    lineNumber: 1926,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 12,
                                        marginBottom: 20
                                    },
                                    children: "Start by adding an L1 scope section, then L2 groups, then L3 line items."
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                    lineNumber: 1927,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn btn-primary",
                                    onClick: openNew,
                                    children: "+ Add First Item"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                    lineNumber: 1928,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                            lineNumber: 1925,
                            columnNumber: 11
                        }, this),
                        l1Items.map((l1)=>{
                            const l2s = getL2ForL1(l1);
                            const isL1Collapsed = collapsed[l1.sow_id];
                            const l1L3s = l3.filter((i)=>i.sow_number.startsWith(l1.sow_number + '.'));
                            const l1Progress = l1L3s.length ? Math.round(l1L3s.reduce((s, i)=>s + (i.percent_complete || 0), 0) / l1L3s.length) : 0;
                            const l1Boq = l1L3s.reduce((s, i)=>s + (i.boq_amount || 0), 0);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sow-l1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sow-l1-header",
                                        onClick: ()=>toggleCollapse(l1.sow_id),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                lineNumber: 1943,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                lineNumber: 1944,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                lineNumber: 1945,
                                                columnNumber: 17
                                            }, this),
                                            l1Boq > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 11,
                                                    color: '#f59e0b'
                                                },
                                                children: fmt(l1Boq, project.currency)
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1946,
                                                columnNumber: 31
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: 80
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "progress-bar",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "progress-fill",
                                                            style: {
                                                                width: `${l1Progress}%`,
                                                                background: l1Progress === 100 ? '#4ade80' : '#f59e0b'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                            lineNumber: 1948,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 1948,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                        lineNumber: 1949,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1947,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btn",
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    setExpandedDrawings((prev)=>({
                                                            ...prev,
                                                            [l1.sow_id]: !prev[l1.sow_id]
                                                        }));
                                                },
                                                style: {
                                                    fontSize: 10,
                                                    padding: '3px 8px',
                                                    borderColor: l1.drawing_ids?.length ? '#f59e0b' : isDark ? '#30363d' : '#cbd5e1',
                                                    color: l1.drawing_ids?.length ? '#f59e0b' : textCol,
                                                    background: l1.drawing_ids?.length ? isDark ? '#f59e0b1a' : '#f59e0b0d' : 'transparent'
                                                },
                                                children: [
                                                    "📄 Drawings ",
                                                    l1.drawing_ids?.length ? `(${l1.drawing_ids.length})` : ''
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1952,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                lineNumber: 1968,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                lineNumber: 1969,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: subText,
                                                    fontSize: 12
                                                },
                                                children: isL1Collapsed ? '▶' : '▼'
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1970,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1942,
                                        columnNumber: 15
                                    }, this),
                                    expandedDrawings[l1.sow_id] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            margin: '8px 16px 12px 16px',
                                            padding: '12px 16px',
                                            background: isDark ? '#161b22' : '#f8fafc',
                                            borderRadius: 8,
                                            border: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1')
                                        },
                                        onClick: (e)=>e.stopPropagation(),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 10,
                                                    fontWeight: 700,
                                                    color: '#f59e0b',
                                                    marginBottom: 8,
                                                    letterSpacing: '0.05em'
                                                },
                                                children: "🌲 SECTION L1 DRAWINGS MANAGER"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 1976,
                                                columnNumber: 19
                                            }, this),
                                            renderDrawingManagerInline(l1, 'l1-tree')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1975,
                                        columnNumber: 17
                                    }, this),
                                    !isL1Collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sow-l2",
                                        children: [
                                            l2s.map((l2)=>{
                                                const l3rows = getL3ForL2(l2);
                                                const isL2Collapsed = collapsed[l2.sow_id];
                                                const l2Progress = l3rows.length ? Math.round(l3rows.reduce((s, i)=>s + (i.percent_complete || 0), 0) / l3rows.length) : 0;
                                                const l2Boq = l3rows.reduce((s, i)=>s + (i.boq_amount || 0), 0);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "sow-l2-header",
                                                            onClick: ()=>toggleCollapse(l2.sow_id),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                                    lineNumber: 1995,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                                    lineNumber: 1996,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                                    lineNumber: 1997,
                                                                    columnNumber: 27
                                                                }, this),
                                                                l2Boq > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: 11,
                                                                        color: isDark ? '#60a5fa' : '#2563eb'
                                                                    },
                                                                    children: fmt(l2Boq, project.currency)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                    lineNumber: 1998,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        width: 60
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "progress-bar",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "progress-fill",
                                                                            style: {
                                                                                width: `${l2Progress}%`,
                                                                                background: isDark ? '#60a5fa' : '#2563eb'
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                            lineNumber: 2000,
                                                                            columnNumber: 59
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                        lineNumber: 2000,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                    lineNumber: 1999,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "btn",
                                                                    onClick: (e)=>{
                                                                        e.stopPropagation();
                                                                        setExpandedDrawings((prev)=>({
                                                                                ...prev,
                                                                                [l2.sow_id]: !prev[l2.sow_id]
                                                                            }));
                                                                    },
                                                                    style: {
                                                                        fontSize: 10,
                                                                        padding: '3px 8px',
                                                                        borderColor: l2.drawing_ids?.length ? isDark ? '#60a5fa' : '#2563eb' : isDark ? '#30363d' : '#cbd5e1',
                                                                        color: l2.drawing_ids?.length ? isDark ? '#60a5fa' : '#2563eb' : textCol,
                                                                        background: l2.drawing_ids?.length ? isDark ? '#60a5fa1a' : '#2563eb0d' : 'transparent'
                                                                    },
                                                                    children: [
                                                                        "📄 Drawings ",
                                                                        l2.drawing_ids?.length ? `(${l2.drawing_ids.length})` : ''
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                    lineNumber: 2003,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                                    lineNumber: 2019,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                                    lineNumber: 2020,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        color: subText,
                                                                        fontSize: 12
                                                                    },
                                                                    children: isL2Collapsed ? '▶' : '▼'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                    lineNumber: 2021,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                            lineNumber: 1994,
                                                            columnNumber: 25
                                                        }, this),
                                                        expandedDrawings[l2.sow_id] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                margin: '8px 16px 12px 16px',
                                                                padding: '12px 16px',
                                                                background: isDark ? '#161b22' : '#f8fafc',
                                                                borderRadius: 8,
                                                                border: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1')
                                                            },
                                                            onClick: (e)=>e.stopPropagation(),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: 10,
                                                                        fontWeight: 700,
                                                                        color: isDark ? '#60a5fa' : '#2563eb',
                                                                        marginBottom: 8,
                                                                        letterSpacing: '0.05em'
                                                                    },
                                                                    children: "📁 GROUP L2 DRAWINGS MANAGER"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                    lineNumber: 2027,
                                                                    columnNumber: 29
                                                                }, this),
                                                                renderDrawingManagerInline(l2, 'l2-tree')
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                            lineNumber: 2026,
                                                            columnNumber: 27
                                                        }, this),
                                                        !isL2Collapsed && l3rows.map((row)=>{
                                                            const sc2 = statusColor[row.status || 'Not Started'] || {
                                                                bg: '#161b22',
                                                                text: '#6e7681'
                                                            };
                                                            const rc = riskColor[row.risk_level || 'Low'] || '#6e7681';
                                                            const pct = row.percent_complete || 0;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "sow-l3-row",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            color: isDark ? '#6e7681' : '#64748b',
                                                                            fontSize: 10
                                                                        },
                                                                        children: row.sow_number
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                        lineNumber: 2041,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    color: textCol,
                                                                                    fontSize: 11,
                                                                                    marginBottom: 3
                                                                                },
                                                                                children: row.sub_item_l3
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                                lineNumber: 2043,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            row.particulars && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                                                lineNumber: 2044,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    display: 'flex',
                                                                                    flexDirection: 'column',
                                                                                    gap: 6,
                                                                                    marginTop: 6,
                                                                                    marginBottom: 6
                                                                                },
                                                                                children: [
                                                                                    row.drawing_ids && row.drawing_ids.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        style: {
                                                                                            display: 'flex',
                                                                                            flexDirection: 'column',
                                                                                            gap: 4,
                                                                                            background: isDark ? '#161b22' : '#f8fafc',
                                                                                            padding: '6px 10px',
                                                                                            borderRadius: 6,
                                                                                            border: '1px solid ' + (isDark ? '#21262d' : '#e2e8f0')
                                                                                        },
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                style: {
                                                                                                    fontSize: 9,
                                                                                                    fontWeight: 600,
                                                                                                    color: '#f59e0b',
                                                                                                    display: 'flex',
                                                                                                    alignItems: 'center',
                                                                                                    justifyContent: 'space-between',
                                                                                                    letterSpacing: '0.05em'
                                                                                                },
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        children: "LINKED DRAWINGS & NOTES"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                                                        lineNumber: 2051,
                                                                                                        columnNumber: 41
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        style: {
                                                                                                            fontSize: 8,
                                                                                                            color: subText
                                                                                                        },
                                                                                                        children: [
                                                                                                            row.drawing_ids.length,
                                                                                                            " drawing(s) linked"
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                                                        lineNumber: 2052,
                                                                                                        columnNumber: 41
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                                                lineNumber: 2050,
                                                                                                columnNumber: 39
                                                                                            }, this),
                                                                                            row.drawing_ids.map((drawingId)=>{
                                                                                                const filePath = getDrawingFilePath(row, drawingId);
                                                                                                const noteVal = row.drawing_notes?.[drawingId] || '';
                                                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    style: {
                                                                                                        display: 'flex',
                                                                                                        alignItems: 'center',
                                                                                                        gap: 6,
                                                                                                        fontSize: 10,
                                                                                                        background: isDark ? '#0d1117' : '#ffffff',
                                                                                                        padding: '4px 8px',
                                                                                                        borderRadius: 4,
                                                                                                        border: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1')
                                                                                                    },
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                                            href: filePath || '#',
                                                                                                            target: "_blank",
                                                                                                            rel: "noopener noreferrer",
                                                                                                            onClick: (e)=>{
                                                                                                                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                                                                                                                ;
                                                                                                            },
                                                                                                            style: {
                                                                                                                fontFamily: "var(--font-mono), monospace",
                                                                                                                fontSize: 9,
                                                                                                                fontWeight: 600,
                                                                                                                color: isDark ? '#58a6ff' : '#0284c7',
                                                                                                                textDecoration: 'none',
                                                                                                                display: 'inline-flex',
                                                                                                                alignItems: 'center',
                                                                                                                gap: 2,
                                                                                                                minWidth: 80,
                                                                                                                overflow: 'hidden',
                                                                                                                textOverflow: 'ellipsis',
                                                                                                                whiteSpace: 'nowrap'
                                                                                                            },
                                                                                                            title: ("TURBOPACK compile-time truthy", 1) ? `Open local file: ${filePath}` : "TURBOPACK unreachable",
                                                                                                            children: [
                                                                                                                "📄 ",
                                                                                                                drawingId
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                                                            lineNumber: 2060,
                                                                                                            columnNumber: 45
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DrawingNoteInput, {
                                                                                                            sowId: row.sow_id,
                                                                                                            drawingId: drawingId,
                                                                                                            initialValue: noteVal,
                                                                                                            onSave: updateSOWItemDrawingNotes,
                                                                                                            isDark: isDark,
                                                                                                            textCol: textCol
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                                                            lineNumber: 2090,
                                                                                                            columnNumber: 45
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                            onClick: ()=>removeSOWItemDrawing(row.sow_id, drawingId),
                                                                                                            style: {
                                                                                                                color: '#f87171',
                                                                                                                background: 'transparent',
                                                                                                                border: 'none',
                                                                                                                cursor: 'pointer',
                                                                                                                fontSize: 9,
                                                                                                                padding: '1px 3px',
                                                                                                                display: 'inline-flex',
                                                                                                                alignItems: 'center',
                                                                                                                justifyContent: 'center'
                                                                                                            },
                                                                                                            title: "Remove drawing link",
                                                                                                            children: "✕"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                                                            lineNumber: 2100,
                                                                                                            columnNumber: 45
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, drawingId, true, {
                                                                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                                                    lineNumber: 2058,
                                                                                                    columnNumber: 43
                                                                                                }, this);
                                                                                            })
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                                        lineNumber: 2049,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        style: {
                                                                                            display: 'flex',
                                                                                            alignItems: 'center',
                                                                                            gap: 6,
                                                                                            flexWrap: 'wrap'
                                                                                        },
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "file",
                                                                                                multiple: true,
                                                                                                className: "hidden",
                                                                                                id: `drawing-files-${row.sow_id}`,
                                                                                                onChange: (e)=>handleFilesSelect(e, row),
                                                                                                style: {
                                                                                                    display: 'none'
                                                                                                }
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                                                lineNumber: 2125,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                htmlFor: `drawing-files-${row.sow_id}`,
                                                                                                style: {
                                                                                                    color: '#f59e0b',
                                                                                                    cursor: 'pointer',
                                                                                                    fontSize: 9,
                                                                                                    display: 'inline-flex',
                                                                                                    alignItems: 'center',
                                                                                                    gap: 1.5,
                                                                                                    userSelect: 'none'
                                                                                                },
                                                                                                className: "hover:text-amber-500",
                                                                                                children: "🔗 Select File(s)"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                                                lineNumber: 2133,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                style: {
                                                                                                    fontSize: 9,
                                                                                                    color: isDark ? '#21262d' : '#cbd5e1'
                                                                                                },
                                                                                                children: "|"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                                                lineNumber: 2141,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "file",
                                                                                                multiple: true,
                                                                                                webkitdirectory: "",
                                                                                                directory: "",
                                                                                                className: "hidden",
                                                                                                id: `drawing-folder-${row.sow_id}`,
                                                                                                onChange: (e)=>handleFolderSelect(e, row),
                                                                                                style: {
                                                                                                    display: 'none'
                                                                                                }
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                                                lineNumber: 2144,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                htmlFor: `drawing-folder-${row.sow_id}`,
                                                                                                style: {
                                                                                                    color: '#f59e0b',
                                                                                                    cursor: 'pointer',
                                                                                                    fontSize: 9,
                                                                                                    display: 'inline-flex',
                                                                                                    alignItems: 'center',
                                                                                                    gap: 1.5,
                                                                                                    userSelect: 'none'
                                                                                                },
                                                                                                className: "hover:text-amber-500",
                                                                                                children: "📁 Select Folder"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                                                lineNumber: 2153,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                style: {
                                                                                                    fontSize: 9,
                                                                                                    color: isDark ? '#21262d' : '#cbd5e1'
                                                                                                },
                                                                                                children: "|"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                                                lineNumber: 2161,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "text",
                                                                                                placeholder: "+ Add drawing #",
                                                                                                style: {
                                                                                                    fontSize: 8,
                                                                                                    padding: '1px 4px',
                                                                                                    width: 85,
                                                                                                    background: isDark ? '#0a0c0e' : '#ffffff',
                                                                                                    border: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1'),
                                                                                                    borderRadius: 3,
                                                                                                    color: textCol,
                                                                                                    outline: 'none'
                                                                                                },
                                                                                                onKeyDown: (e)=>{
                                                                                                    if (e.key === 'Enter') {
                                                                                                        e.preventDefault();
                                                                                                        addManualDrawing(row, e.currentTarget.value);
                                                                                                        e.currentTarget.value = '';
                                                                                                    }
                                                                                                }
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                                                lineNumber: 2163,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                                        lineNumber: 2123,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                                lineNumber: 2047,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            documents.filter((doc)=>doc.related_sow_item_id === row.sow_id).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    display: 'flex',
                                                                                    flexDirection: 'column',
                                                                                    gap: 4,
                                                                                    background: isDark ? '#161b2255' : '#f8fafc',
                                                                                    padding: '6px 10px',
                                                                                    borderRadius: 6,
                                                                                    border: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1'),
                                                                                    marginTop: 4,
                                                                                    width: '80%'
                                                                                },
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        style: {
                                                                                            fontSize: 9,
                                                                                            fontWeight: 600,
                                                                                            color: '#f59e0b',
                                                                                            display: 'flex',
                                                                                            alignItems: 'center',
                                                                                            justifyContent: 'space-between',
                                                                                            letterSpacing: '0.05em'
                                                                                        },
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                children: "LINKED PROJECT DOCUMENTS"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                                                lineNumber: 2191,
                                                                                                columnNumber: 39
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                style: {
                                                                                                    fontSize: 8,
                                                                                                    color: subText
                                                                                                },
                                                                                                children: [
                                                                                                    documents.filter((doc)=>doc.related_sow_item_id === row.sow_id).length,
                                                                                                    " document(s)"
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                                                lineNumber: 2192,
                                                                                                columnNumber: 39
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                                        lineNumber: 2190,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        style: {
                                                                                            display: 'flex',
                                                                                            flexWrap: 'wrap',
                                                                                            gap: 6
                                                                                        },
                                                                                        children: documents.filter((doc)=>doc.related_sow_item_id === row.sow_id).map((doc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                style: {
                                                                                                    display: 'flex',
                                                                                                    alignItems: 'center',
                                                                                                    gap: 4,
                                                                                                    fontSize: 10,
                                                                                                    background: isDark ? '#0d1117' : '#ffffff',
                                                                                                    padding: '3px 6px',
                                                                                                    borderRadius: 4,
                                                                                                    border: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1')
                                                                                                },
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        style: {
                                                                                                            fontSize: 8,
                                                                                                            color: '#f59e0b',
                                                                                                            background: '#f59e0b22',
                                                                                                            padding: '1px 4px',
                                                                                                            borderRadius: 3,
                                                                                                            fontWeight: 'bold'
                                                                                                        },
                                                                                                        children: doc.document_type || 'Other'
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                                                        lineNumber: 2197,
                                                                                                        columnNumber: 43
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                        onClick: ()=>handleDownloadDoc(doc),
                                                                                                        style: {
                                                                                                            fontFamily: "var(--font-mono), monospace",
                                                                                                            fontSize: 9,
                                                                                                            fontWeight: 600,
                                                                                                            color: isDark ? '#58a6ff' : '#0284c7',
                                                                                                            background: 'transparent',
                                                                                                            border: 'none',
                                                                                                            cursor: 'pointer',
                                                                                                            padding: 0,
                                                                                                            textAlign: 'left',
                                                                                                            maxWidth: 120,
                                                                                                            overflow: 'hidden',
                                                                                                            textOverflow: 'ellipsis',
                                                                                                            whiteSpace: 'nowrap'
                                                                                                        },
                                                                                                        title: doc.description || doc.file_name,
                                                                                                        children: doc.file_name
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                                                        lineNumber: 2198,
                                                                                                        columnNumber: 43
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, doc.id, true, {
                                                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                                                lineNumber: 2196,
                                                                                                columnNumber: 41
                                                                                            }, this))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                                        lineNumber: 2194,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                                lineNumber: 2189,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "progress-bar",
                                                                                style: {
                                                                                    marginTop: 4,
                                                                                    width: '80%'
                                                                                },
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "progress-fill",
                                                                                    style: {
                                                                                        width: `${pct}%`,
                                                                                        background: pct === 100 ? '#4ade80' : pct > 50 ? '#f59e0b' : isDark ? '#60a5fa' : '#2563eb'
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                                    lineNumber: 2226,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                                lineNumber: 2225,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                        lineNumber: 2042,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                                        lineNumber: 2229,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            color: rc,
                                                                            fontSize: 10
                                                                        },
                                                                        children: row.risk_level || '—'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                        lineNumber: 2230,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            color: isDark ? '#6e7681' : '#64748b',
                                                                            fontSize: 10
                                                                        },
                                                                        children: row.planned_start || '—'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                        lineNumber: 2231,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            color: isDark ? '#6e7681' : '#64748b',
                                                                            fontSize: 10
                                                                        },
                                                                        children: row.actual_start || '—'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                        lineNumber: 2232,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                                        lineNumber: 2233,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            color: row.is_critical_path ? '#f87171' : subText,
                                                                            fontSize: 10
                                                                        },
                                                                        children: row.is_critical_path ? '⚑ YES' : 'No'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                        lineNumber: 2234,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            gap: 4
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                className: "btn",
                                                                                onClick: ()=>openEdit(row),
                                                                                style: {
                                                                                    fontSize: 10,
                                                                                    padding: '3px 7px'
                                                                                },
                                                                                children: "Edit"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                                lineNumber: 2236,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                className: "btn btn-danger",
                                                                                onClick: ()=>handleDelete(row),
                                                                                style: {
                                                                                    fontSize: 10,
                                                                                    padding: '3px 7px'
                                                                                },
                                                                                children: "✕"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                                lineNumber: 2237,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                        lineNumber: 2235,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, row.sow_id, true, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 2040,
                                                                columnNumber: 29
                                                            }, this);
                                                        }),
                                                        !isL2Collapsed && l3rows.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                padding: '12px 16px',
                                                                fontSize: 11,
                                                                color: '#484f58'
                                                            },
                                                            children: "No L3 items under this group."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                            lineNumber: 2243,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, l2.sow_id, true, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 1993,
                                                    columnNumber: 23
                                                }, this);
                                            }),
                                            l2s.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    padding: '12px 16px',
                                                    fontSize: 11,
                                                    color: subText
                                                },
                                                children: "No L2 groups under this section."
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2249,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 1985,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, l1.sow_id, true, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 1940,
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
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sow-l3-row",
                                style: {
                                    background: isDark ? '#0d1117' : '#ffffff',
                                    borderRadius: 6,
                                    marginBottom: 4,
                                    border: '1px solid ' + (isDark ? 'transparent' : '#cbd5e1')
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: isDark ? '#6e7681' : '#64748b',
                                            fontSize: 10
                                        },
                                        children: row.sow_number
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 2269,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    color: textCol,
                                                    fontSize: 11,
                                                    marginBottom: 3
                                                },
                                                children: row.sub_item_l3 || row.particulars
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2271,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: 6,
                                                    marginTop: 6,
                                                    marginBottom: 6
                                                },
                                                children: [
                                                    row.drawing_ids && row.drawing_ids.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            gap: 4,
                                                            background: isDark ? '#161b22' : '#f8fafc',
                                                            padding: '6px 10px',
                                                            borderRadius: 6,
                                                            border: '1px solid ' + (isDark ? '#21262d' : '#e2e8f0')
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 9,
                                                                    fontWeight: 600,
                                                                    color: '#f59e0b',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'space-between',
                                                                    letterSpacing: '0.05em'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "LINKED DRAWINGS & NOTES"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                        lineNumber: 2278,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontSize: 8,
                                                                            color: subText
                                                                        },
                                                                        children: [
                                                                            row.drawing_ids.length,
                                                                            " drawing(s) linked"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                        lineNumber: 2279,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 2277,
                                                                columnNumber: 23
                                                            }, this),
                                                            row.drawing_ids.map((drawingId)=>{
                                                                const filePath = getDrawingFilePath(row, drawingId);
                                                                const noteVal = row.drawing_notes?.[drawingId] || '';
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        gap: 6,
                                                                        fontSize: 10,
                                                                        background: isDark ? '#0d1117' : '#ffffff',
                                                                        padding: '4px 8px',
                                                                        borderRadius: 4,
                                                                        border: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1')
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                            href: filePath || '#',
                                                                            target: "_blank",
                                                                            rel: "noopener noreferrer",
                                                                            onClick: (e)=>{
                                                                                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                                                                                ;
                                                                            },
                                                                            style: {
                                                                                fontFamily: "var(--font-mono), monospace",
                                                                                fontSize: 9,
                                                                                fontWeight: 600,
                                                                                color: isDark ? '#58a6ff' : '#0284c7',
                                                                                textDecoration: 'none',
                                                                                display: 'inline-flex',
                                                                                alignItems: 'center',
                                                                                gap: 2,
                                                                                minWidth: 80,
                                                                                overflow: 'hidden',
                                                                                textOverflow: 'ellipsis',
                                                                                whiteSpace: 'nowrap'
                                                                            },
                                                                            title: ("TURBOPACK compile-time truthy", 1) ? `Open local file: ${filePath}` : "TURBOPACK unreachable",
                                                                            children: [
                                                                                "📄 ",
                                                                                drawingId
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                            lineNumber: 2287,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DrawingNoteInput, {
                                                                            sowId: row.sow_id,
                                                                            drawingId: drawingId,
                                                                            initialValue: noteVal,
                                                                            onSave: updateSOWItemDrawingNotes,
                                                                            isDark: isDark,
                                                                            textCol: textCol
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                            lineNumber: 2317,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>removeSOWItemDrawing(row.sow_id, drawingId),
                                                                            style: {
                                                                                color: '#f87171',
                                                                                background: 'transparent',
                                                                                border: 'none',
                                                                                cursor: 'pointer',
                                                                                fontSize: 9,
                                                                                padding: '1px 3px',
                                                                                display: 'inline-flex',
                                                                                alignItems: 'center',
                                                                                justifyContent: 'center'
                                                                            },
                                                                            title: "Remove drawing link",
                                                                            children: "✕"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                            lineNumber: 2327,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, drawingId, true, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                    lineNumber: 2285,
                                                                    columnNumber: 27
                                                                }, this);
                                                            })
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2276,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: 6,
                                                            flexWrap: 'wrap'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "file",
                                                                multiple: true,
                                                                className: "hidden",
                                                                id: `drawing-files-orphan-${row.sow_id}`,
                                                                onChange: (e)=>handleFilesSelect(e, row),
                                                                style: {
                                                                    display: 'none'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 2352,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: `drawing-files-orphan-${row.sow_id}`,
                                                                style: {
                                                                    color: '#f59e0b',
                                                                    cursor: 'pointer',
                                                                    fontSize: 9,
                                                                    display: 'inline-flex',
                                                                    alignItems: 'center',
                                                                    gap: 1.5,
                                                                    userSelect: 'none'
                                                                },
                                                                className: "hover:text-amber-500",
                                                                children: "🔗 Select File(s)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 2360,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 9,
                                                                    color: isDark ? '#21262d' : '#cbd5e1'
                                                                },
                                                                children: "|"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 2368,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "file",
                                                                multiple: true,
                                                                webkitdirectory: "",
                                                                directory: "",
                                                                className: "hidden",
                                                                id: `drawing-folder-orphan-${row.sow_id}`,
                                                                onChange: (e)=>handleFolderSelect(e, row),
                                                                style: {
                                                                    display: 'none'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 2371,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: `drawing-folder-orphan-${row.sow_id}`,
                                                                style: {
                                                                    color: '#f59e0b',
                                                                    cursor: 'pointer',
                                                                    fontSize: 9,
                                                                    display: 'inline-flex',
                                                                    alignItems: 'center',
                                                                    gap: 1.5,
                                                                    userSelect: 'none'
                                                                },
                                                                className: "hover:text-amber-500",
                                                                children: "📁 Select Folder"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 2380,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 9,
                                                                    color: isDark ? '#21262d' : '#cbd5e1'
                                                                },
                                                                children: "|"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 2388,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                placeholder: "+ Add drawing #",
                                                                style: {
                                                                    fontSize: 8,
                                                                    padding: '1px 4px',
                                                                    width: 85,
                                                                    background: isDark ? '#0a0c0e' : '#ffffff',
                                                                    border: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1'),
                                                                    borderRadius: 3,
                                                                    color: textCol,
                                                                    outline: 'none'
                                                                },
                                                                onKeyDown: (e)=>{
                                                                    if (e.key === 'Enter') {
                                                                        e.preventDefault();
                                                                        addManualDrawing(row, e.currentTarget.value);
                                                                        e.currentTarget.value = '';
                                                                    }
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 2390,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2350,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2274,
                                                columnNumber: 17
                                            }, this),
                                            documents.filter((doc)=>doc.related_sow_item_id === row.sow_id).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: 4,
                                                    background: isDark ? '#161b2255' : '#f8fafc',
                                                    padding: '6px 10px',
                                                    borderRadius: 6,
                                                    border: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1'),
                                                    marginTop: 4,
                                                    width: '80%'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 9,
                                                            fontWeight: 600,
                                                            color: '#f59e0b',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'space-between',
                                                            letterSpacing: '0.05em'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "LINKED PROJECT DOCUMENTS"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 2418,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: 8,
                                                                    color: subText
                                                                },
                                                                children: [
                                                                    documents.filter((doc)=>doc.related_sow_item_id === row.sow_id).length,
                                                                    " document(s)"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 2419,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2417,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            flexWrap: 'wrap',
                                                            gap: 6
                                                        },
                                                        children: documents.filter((doc)=>doc.related_sow_item_id === row.sow_id).map((doc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: 4,
                                                                    fontSize: 10,
                                                                    background: isDark ? '#0d1117' : '#ffffff',
                                                                    padding: '3px 6px',
                                                                    borderRadius: 4,
                                                                    border: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1')
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontSize: 8,
                                                                            color: '#f59e0b',
                                                                            background: '#f59e0b22',
                                                                            padding: '1px 4px',
                                                                            borderRadius: 3,
                                                                            fontWeight: 'bold'
                                                                        },
                                                                        children: doc.document_type || 'Other'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                        lineNumber: 2424,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleDownloadDoc(doc),
                                                                        style: {
                                                                            fontFamily: "var(--font-mono), monospace",
                                                                            fontSize: 9,
                                                                            fontWeight: 600,
                                                                            color: isDark ? '#58a6ff' : '#0284c7',
                                                                            background: 'transparent',
                                                                            border: 'none',
                                                                            cursor: 'pointer',
                                                                            padding: 0,
                                                                            textAlign: 'left',
                                                                            maxWidth: 120,
                                                                            overflow: 'hidden',
                                                                            textOverflow: 'ellipsis',
                                                                            whiteSpace: 'nowrap'
                                                                        },
                                                                        title: doc.description || doc.file_name,
                                                                        children: doc.file_name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                        lineNumber: 2425,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, doc.id, true, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 2423,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2421,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2416,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "progress-bar",
                                                style: {
                                                    marginTop: 4,
                                                    width: '80%'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "progress-fill",
                                                    style: {
                                                        width: `${pct}%`,
                                                        background: isDark ? '#60a5fa' : '#2563eb'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 2453,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2452,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 2270,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        lineNumber: 2456,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: rc,
                                            fontSize: 10
                                        },
                                        children: row.risk_level || '—'
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 2457,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: isDark ? '#6e7681' : '#64748b',
                                            fontSize: 10
                                        },
                                        children: row.planned_start || '—'
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 2458,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: isDark ? '#6e7681' : '#64748b',
                                            fontSize: 10
                                        },
                                        children: row.actual_start || '—'
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 2459,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        lineNumber: 2460,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: row.is_critical_path ? '#f87171' : subText,
                                            fontSize: 10
                                        },
                                        children: row.is_critical_path ? '⚑' : '—'
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 2461,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: 4
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btn",
                                                onClick: ()=>openEdit(row),
                                                style: {
                                                    fontSize: 10,
                                                    padding: '3px 7px'
                                                },
                                                children: "Edit"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2463,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btn btn-danger",
                                                onClick: ()=>handleDelete(row),
                                                style: {
                                                    fontSize: 10,
                                                    padding: '3px 7px'
                                                },
                                                children: "✕"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2464,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 2462,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, row.sow_id, true, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 2268,
                                columnNumber: 13
                            }, this);
                        })
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                lineNumber: 1555,
                columnNumber: 7
            }, this),
            showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "'Barlow Condensed',sans-serif",
                                            fontWeight: 700,
                                            fontSize: 16,
                                            color: hText
                                        },
                                        children: editItem ? `EDIT SOW ${editItem.sow_number}` : 'NEW SOW ITEM'
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 2479,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 10,
                                            color: subText,
                                            marginTop: 2
                                        },
                                        children: form.hierarchy_level === 1 ? 'L1 — Scope Section' : form.hierarchy_level === 2 ? 'L2 — Item Group' : 'L3 — Line Item'
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 2482,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 2478,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn",
                                onClick: closeForm,
                                style: {
                                    fontSize: 12,
                                    padding: '5px 10px'
                                },
                                children: "✕ Close"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 2486,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                        lineNumber: 2477,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        ].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `section-tab ${activeSection === i ? 'active' : ''}`,
                                onClick: ()=>setActiveSection(i),
                                children: s
                            }, i, false, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 2492,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                        lineNumber: 2490,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSave,
                        style: {
                            flex: 1,
                            padding: 20
                        },
                        children: [
                            activeSection === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fade-in",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr 1fr'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "SOW NUMBER ★"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2503,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "fi",
                                                        placeholder: "e.g. 1 / 1.1 / 1.1.1",
                                                        value: form.sow_number || '',
                                                        onChange: (e)=>setF({
                                                                sow_number: e.target.value
                                                            }),
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2504,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2502,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "HIERARCHY LEVEL ★"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2507,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "fi",
                                                        value: form.hierarchy_level || 3,
                                                        onChange: (e)=>setF({
                                                                hierarchy_level: Number(e.target.value)
                                                            }),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: 1,
                                                                children: "L1 — Scope Section"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 2509,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: 2,
                                                                children: "L2 — Item Group"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 2510,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: 3,
                                                                children: "L3 — Line Item"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 2511,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2508,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2506,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 2501,
                                        columnNumber: 17
                                    }, this),
                                    (form.hierarchy_level === 1 || form.hierarchy_level === 2 || form.hierarchy_level === 3) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-label",
                                                    children: [
                                                        "SCOPE — L1 ",
                                                        form.hierarchy_level === 1 ? '★' : ''
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 2519,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "fi",
                                                    placeholder: "e.g. SUBSTRUCTURE",
                                                    value: form.scope_l1 || '',
                                                    onChange: (e)=>setF({
                                                            scope_l1: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 2520,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 2518,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 2517,
                                        columnNumber: 19
                                    }, this),
                                    (form.hierarchy_level === 2 || form.hierarchy_level === 3) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-label",
                                                    children: [
                                                        "ITEM — L2 ",
                                                        form.hierarchy_level === 2 ? '★' : ''
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 2527,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "fi",
                                                    placeholder: "e.g. Excavation & Compaction",
                                                    value: form.item_l2 || '',
                                                    onChange: (e)=>setF({
                                                            item_l2: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 2528,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 2526,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 2525,
                                        columnNumber: 19
                                    }, this),
                                    form.hierarchy_level === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-label",
                                                    children: "SUB ITEM — L3 ★"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 2535,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "fi",
                                                    placeholder: "e.g. Survey and Marking",
                                                    value: form.sub_item_l3 || '',
                                                    onChange: (e)=>setF({
                                                            sub_item_l3: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 2536,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 2534,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 2533,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-label",
                                                    children: "PARTICULARS / SPECIFICATION"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 2543,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
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
                                                    lineNumber: 2544,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 2542,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 2541,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-label",
                                                    children: "ASSIGNED TO"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 2550,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "fi",
                                                    placeholder: "e.g. Engineer_Site",
                                                    value: form.assigned_to || '',
                                                    onChange: (e)=>setF({
                                                            assigned_to: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 2551,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 2549,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 2548,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 2500,
                                columnNumber: 15
                            }, this),
                            activeSection === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fade-in",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 11,
                                            color: '#60a5fa',
                                            letterSpacing: '0.06em',
                                            marginBottom: 10
                                        },
                                        children: "BASELINE"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 2561,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr 1fr 1fr'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "START DATE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2564,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        className: "fi",
                                                        value: form.baseline_start || '',
                                                        onChange: (e)=>setF({
                                                                baseline_start: e.target.value
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2565,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2563,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "DAYS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2568,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                        lineNumber: 2569,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2567,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "END DATE (auto)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2572,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "calc-field",
                                                        children: baselineEnd || '—'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2573,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2571,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 2562,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        lineNumber: 2578,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr 1fr 1fr'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "START DATE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2581,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        className: "fi",
                                                        value: form.planned_start || '',
                                                        onChange: (e)=>setF({
                                                                planned_start: e.target.value
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2582,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2580,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "DAYS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2585,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                        lineNumber: 2586,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2584,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "END DATE (auto)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2589,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "calc-field",
                                                        children: plannedEnd || '—'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2590,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2588,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 2579,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        lineNumber: 2595,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr 1fr 1fr'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "START DATE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2598,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        className: "fi",
                                                        value: form.actual_start || '',
                                                        onChange: (e)=>setF({
                                                                actual_start: e.target.value
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2599,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2597,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "DAYS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2602,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                        lineNumber: 2603,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2601,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "END DATE (auto)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2606,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "calc-field",
                                                        children: actualEnd || '—'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2607,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2605,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 2596,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr 1fr'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "% COMPLETE (0–100)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2613,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                        lineNumber: 2614,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2612,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "SCHEDULE VARIANCE (days, auto)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2617,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "calc-field",
                                                        style: {
                                                            color: schedVar > 0 ? '#f87171' : schedVar < 0 ? '#4ade80' : '#f59e0b'
                                                        },
                                                        children: schedVar > 0 ? `+${schedVar} (late)` : schedVar < 0 ? `${schedVar} (early)` : '0'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2618,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2616,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 2611,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 2559,
                                columnNumber: 15
                            }, this),
                            activeSection === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fade-in",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: 11,
                                            color: '#484f58',
                                            marginBottom: 14
                                        },
                                        children: "BOQ fields apply to L3 line items only."
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 2629,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr 1fr'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "UNIT"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2632,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "fi",
                                                        value: form.unit || 'm²',
                                                        onChange: (e)=>setF({
                                                                unit: e.target.value
                                                            }),
                                                        children: UNIT_OPTS.map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: u
                                                            }, u, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 2634,
                                                                columnNumber: 43
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2633,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2631,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "QUANTITY"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2638,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                        lineNumber: 2639,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2637,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 2630,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr 1fr'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "WASTE % (e.g. 5 for 5%)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2644,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                        lineNumber: 2645,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2643,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "NET QUANTITY (auto)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2648,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "calc-field",
                                                        children: netQty > 0 ? netQty.toFixed(3) : '—'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2649,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2647,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 2642,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr 1fr'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "UNIT RATE (per net unit)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2654,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                        lineNumber: 2655,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2653,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "BOQ AMOUNT (auto)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2658,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "calc-field",
                                                        children: boqAmount > 0 ? `${project.currency} ${boqAmount.toLocaleString(undefined, {
                                                            maximumFractionDigits: 2
                                                        })}` : '—'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2659,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2657,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 2652,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 2628,
                                columnNumber: 15
                            }, this),
                            activeSection === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fade-in",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr 1fr'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: [
                                                            "ESTIMATED COST (",
                                                            project.currency,
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2670,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                        lineNumber: 2671,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2669,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: [
                                                            "ACTUAL COST (",
                                                            project.currency,
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2674,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                        lineNumber: 2675,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2673,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 2668,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr 1fr'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "COST VARIANCE (auto)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2680,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "calc-field",
                                                        style: {
                                                            color: costVar >= 0 ? '#4ade80' : '#f87171'
                                                        },
                                                        children: form.estimated_cost ? `${project.currency} ${costVar.toLocaleString(undefined, {
                                                            maximumFractionDigits: 2
                                                        })}` : '—'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2681,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2679,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "COST VAR % (auto)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2686,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "calc-field",
                                                        style: {
                                                            color: costVarPct >= 0 ? '#4ade80' : '#f87171'
                                                        },
                                                        children: form.estimated_cost ? `${costVarPct.toFixed(1)}%` : '—'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2687,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2685,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 2678,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 2667,
                                columnNumber: 15
                            }, this),
                            activeSection === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fade-in",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-label",
                                                    children: "PLANT"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 2700,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "fi",
                                                    placeholder: "e.g. Crane, Excavator, Mixer",
                                                    value: form.plant || '',
                                                    onChange: (e)=>setF({
                                                            plant: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 2701,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 2699,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 2698,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-label",
                                                    children: "SITE EQUIPMENT"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 2706,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "fi",
                                                    placeholder: "e.g. Bar Bending Machine, Total Station",
                                                    value: form.site_equipment || '',
                                                    onChange: (e)=>setF({
                                                            site_equipment: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 2707,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 2705,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 2704,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-label",
                                                    children: "MANPOWER"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 2712,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "fi",
                                                    placeholder: "e.g. Engineer x1, Mason x3, Casual x5",
                                                    value: form.manpower || '',
                                                    onChange: (e)=>setF({
                                                            manpower: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 2713,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 2711,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 2710,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 2697,
                                columnNumber: 15
                            }, this),
                            activeSection === 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fade-in",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr 1fr'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "RISK LEVEL ★"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2724,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "fi",
                                                        value: form.risk_level || 'Low',
                                                        onChange: (e)=>setF({
                                                                risk_level: e.target.value
                                                            }),
                                                        children: RISK_OPTS.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: r
                                                            }, r, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 2726,
                                                                columnNumber: 43
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2725,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2723,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "STATUS ★"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2730,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "fi",
                                                        value: form.status || 'Not Started',
                                                        onChange: (e)=>setF({
                                                                status: e.target.value
                                                            }),
                                                        children: STATUS_OPTS.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: s
                                                            }, s, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 2732,
                                                                columnNumber: 45
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2731,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2729,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 2722,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr 1fr'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "DEPENDS ON (SOW #)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2738,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "fi",
                                                        placeholder: "e.g. 1.1.1",
                                                        value: form.dep_on || '',
                                                        onChange: (e)=>setF({
                                                                dep_on: e.target.value
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2739,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2737,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "DEPENDENCY TYPE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2742,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "fi",
                                                        value: form.dep_type || 'FS',
                                                        onChange: (e)=>setF({
                                                                dep_type: e.target.value
                                                            }),
                                                        children: DEP_OPTS.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: d
                                                            }, d, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 2744,
                                                                columnNumber: 42
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2743,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2741,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 2736,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr 1fr'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        children: "CRITICAL PATH"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2750,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "fi",
                                                        value: form.is_critical_path ? 'Yes' : 'No',
                                                        onChange: (e)=>setF({
                                                                is_critical_path: e.target.value === 'Yes'
                                                            }),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "No"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 2752,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "Yes"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 2753,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2751,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2749,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2756,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 2748,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-row",
                                        style: {
                                            gridTemplateColumns: '1fr'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-label",
                                                    children: "NOTES / REMARKS"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 2760,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
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
                                                    lineNumber: 2761,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                            lineNumber: 2759,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 2758,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 2721,
                                columnNumber: 15
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                lineNumber: 2768,
                                columnNumber: 23
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginTop: 20,
                                    paddingTop: 16,
                                    borderTop: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1')
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: 6
                                        },
                                        children: [
                                            activeSection > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "btn",
                                                onClick: ()=>setActiveSection((s)=>s - 1),
                                                children: "← Back"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2773,
                                                columnNumber: 39
                                            }, this),
                                            activeSection < 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "btn",
                                                onClick: ()=>setActiveSection((s)=>s + 1),
                                                children: "Next →"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2774,
                                                columnNumber: 39
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 2772,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: 8
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "btn",
                                                onClick: closeForm,
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2777,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "btn btn-primary",
                                                disabled: saving,
                                                children: saving ? 'Saving...' : editItem ? '✓ Update Item' : '✓ Save Item'
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2778,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 2776,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 2771,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                        lineNumber: 2496,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                lineNumber: 2475,
                columnNumber: 9
            }, this),
            showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: closeForm,
                style: {
                    position: 'fixed',
                    inset: 0,
                    background: 'rgba(0,0,0,0.4)',
                    zIndex: 29
                }
            }, void 0, false, {
                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                lineNumber: 2789,
                columnNumber: 9
            }, this),
            showIntegration && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>!importing && setShowIntegration(false),
                        style: {
                            position: 'absolute',
                            inset: 0,
                            background: 'rgba(0,0,0,0.7)',
                            backdropFilter: 'blur(3px)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                        lineNumber: 2796,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '18px 24px',
                                    borderBottom: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1'),
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '100%'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                                                lineNumber: 2804,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: 11,
                                                    color: subText,
                                                    marginTop: 4
                                                },
                                                children: "Natively ingest and parse industrial scheduler files to control CPOS Gantt, Cost, and Resource sheets."
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2807,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 2803,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                        lineNumber: 2811,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 2802,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    overflowY: 'auto',
                                    padding: 24,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 20
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gridTemplateColumns: 'minmax(250px, 1fr) 1.5fr',
                                            gap: 18
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 24,
                                                            marginBottom: 8
                                                        },
                                                        children: "📁"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2844,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 13,
                                                            fontWeight: 600,
                                                            color: textCol
                                                        },
                                                        children: integrationFile ? integrationFile.name : 'Choose or Drop File'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2845,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 10,
                                                            color: subText,
                                                            marginTop: 6
                                                        },
                                                        children: "Supports Primavera P6 (.xer), MS Project (.xml), Excel (.xlsx), & standard CSV"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2848,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                        lineNumber: 2852,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2828,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: 12
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-label",
                                                        style: {
                                                            fontWeight: 600,
                                                            fontSize: 11,
                                                            letterSpacing: '0.04em'
                                                        },
                                                        children: "1. SELECT INGESTION INTERFACE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2866,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                        ].map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
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
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            gap: 6,
                                                                            fontSize: 11,
                                                                            fontWeight: 700,
                                                                            color: integrationMode === opt.id ? '#f59e0b' : textCol
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "radio",
                                                                                name: "int-mode",
                                                                                checked: integrationMode === opt.id,
                                                                                onChange: ()=>{},
                                                                                style: {
                                                                                    accentColor: '#f59e0b'
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                                lineNumber: 2897,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            opt.label
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                        lineNumber: 2896,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontSize: 9,
                                                                            color: subText,
                                                                            marginLeft: 18
                                                                        },
                                                                        children: opt.desc
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                        lineNumber: 2906,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, opt.id, true, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 2874,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2867,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2865,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 2825,
                                        columnNumber: 15
                                    }, this),
                                    integrationLogs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: '#07090e',
                                            border: '1px solid #161b22',
                                            borderRadius: 6,
                                            padding: '12px 16px',
                                            fontFamily: "'DM Mono', monospace"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "🖥️ PARSE LOGS & INTEGRITY DIAGNOSTICS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2918,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: '#4ade80'
                                                        },
                                                        children: "● ACTIVE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2919,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2917,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: 4,
                                                    maxHeight: 110,
                                                    overflowY: 'auto',
                                                    fontSize: 11,
                                                    color: '#c9d1d9'
                                                },
                                                children: integrationLogs.map((log, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            gap: 8
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                                lineNumber: 2924,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: log.startsWith('PARSER ERROR') || log.startsWith('DB ERROR') ? '#f87171' : log.startsWith('Successfully') || log.includes('deployed') ? '#4ade80' : '#c9d1d9'
                                                                },
                                                                children: log
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 2925,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2923,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2921,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 2916,
                                        columnNumber: 17
                                    }, this),
                                    integrationError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            color: '#f87171',
                                            background: isDark ? '#2d0f0f' : '#fee2e2',
                                            border: '1px solid transparent',
                                            borderRadius: 6,
                                            padding: '12px 16px',
                                            fontSize: 11
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "⚠️ Parse Error Alert:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2935,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            integrationError
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 2934,
                                        columnNumber: 17
                                    }, this),
                                    parsedItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 10
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                        lineNumber: 2943,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 10,
                                                            color: '#4ade80'
                                                        },
                                                        children: "✔ Structured Hierarchy & Dates Checked"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 2946,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2942,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    border: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1'),
                                                    borderRadius: 8,
                                                    maxHeight: 220,
                                                    overflowY: 'auto',
                                                    background: isDark ? '#0d1117' : '#ffffff'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                    style: {
                                                        width: '100%',
                                                        borderCollapse: 'collapse',
                                                        textAlign: 'left',
                                                        fontSize: 11
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                            style: {
                                                                background: isDark ? '#161b22' : '#f8fafc',
                                                                borderBottom: '1px solid ' + (isDark ? '#21262d' : '#cbd5e1'),
                                                                position: 'sticky',
                                                                top: 0,
                                                                zIndex: 1,
                                                                color: hText
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        style: {
                                                                            padding: '8px 12px'
                                                                        },
                                                                        children: "SOW #"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                        lineNumber: 2953,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        style: {
                                                                            padding: '8px 12px'
                                                                        },
                                                                        children: "Scope Detail / Task Item"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                        lineNumber: 2954,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        style: {
                                                                            padding: '8px 12px'
                                                                        },
                                                                        children: "Dates (Planned)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                        lineNumber: 2955,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        style: {
                                                                            padding: '8px 12px'
                                                                        },
                                                                        children: "Days"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                        lineNumber: 2956,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        style: {
                                                                            padding: '8px 12px'
                                                                        },
                                                                        children: "% Done"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                        lineNumber: 2957,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        style: {
                                                                            padding: '8px 12px'
                                                                        },
                                                                        children: "Primary Dep."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                        lineNumber: 2958,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        style: {
                                                                            padding: '8px 12px'
                                                                        },
                                                                        children: "CP"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                        lineNumber: 2959,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 2952,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                            lineNumber: 2951,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                            children: parsedItems.map((item, index)=>{
                                                                const isHeader = item.hierarchy_level < 3;
                                                                const textIndent = (item.hierarchy_level - 1) * 16;
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    style: {
                                                                        borderBottom: '1px solid ' + (isDark ? '#161b22' : '#f1f5f9'),
                                                                        background: isHeader ? isDark ? '#161b2255' : '#f8fafc' : 'transparent',
                                                                        color: isHeader ? '#f59e0b' : textCol,
                                                                        fontWeight: isHeader ? 600 : 'normal'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            style: {
                                                                                padding: '8px 12px',
                                                                                fontFamily: 'monospace',
                                                                                color: isHeader ? '#f59e0b' : subText
                                                                            },
                                                                            children: item.sow_number
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                            lineNumber: 2976,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            style: {
                                                                                padding: '8px 12px',
                                                                                paddingLeft: 12 + textIndent
                                                                            },
                                                                            children: item.hierarchy_level === 1 ? item.scope_l1 : item.hierarchy_level === 2 ? item.item_l2 : item.sub_item_l3
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                            lineNumber: 2979,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            style: {
                                                                                padding: '8px 12px',
                                                                                color: subText
                                                                            },
                                                                            children: item.planned_start ? `${item.planned_start} to ${item.planned_end}` : '—'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                            lineNumber: 2982,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            style: {
                                                                                padding: '8px 12px'
                                                                            },
                                                                            children: item.planned_days ? `${item.planned_days} d` : '—'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                            lineNumber: 2985,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
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
                                                                            lineNumber: 2988,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            style: {
                                                                                padding: '8px 12px',
                                                                                fontFamily: 'monospace',
                                                                                color: '#60a5fa'
                                                                            },
                                                                            children: item.dep_on ? `${item.dep_on} (${item.dep_type})` : '—'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                            lineNumber: 2991,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            style: {
                                                                                padding: '8px 12px',
                                                                                color: item.is_critical_path ? '#f87171' : subText
                                                                            },
                                                                            children: item.is_critical_path ? '🚩 YES' : '—'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                            lineNumber: 2994,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, index, true, {
                                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                    lineNumber: 2967,
                                                                    columnNumber: 29
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                            lineNumber: 2962,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                    lineNumber: 2950,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 2949,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 18
                                                        },
                                                        children: "⚠️"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 3005,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontSize: 10,
                                                            color: isDark ? '#f87171' : '#991b1b',
                                                            lineHeight: '1.4'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Critical Sync Alert:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                                lineNumber: 3007,
                                                                columnNumber: 23
                                                            }, this),
                                                            " Harmonizing will release all existing items on scope structures, cost estimates, BOQ values, and current Gantt charts for this project ID in your persistent database. Use with precision."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                        lineNumber: 3006,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                                lineNumber: 3004,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 2941,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 2822,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 10,
                                            color: subText
                                        },
                                        children: parsedItems.length > 0 ? `✔ ${parsedItems.length} elements mapped` : 'Please upload a scheduling file to proceed'
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 3017,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: 8
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                lineNumber: 3021,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                lineNumber: 3032,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                        lineNumber: 3020,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                                lineNumber: 3016,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                        lineNumber: 2799,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
                lineNumber: 2794,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/[projectid]/sow/page.tsx",
        lineNumber: 1317,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__75c313cb._.js.map