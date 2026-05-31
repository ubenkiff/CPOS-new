(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/pitch/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PitchPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function PitchPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: {
            fontFamily: "'DM Mono','Courier New',monospace",
            background: '#050607',
            minHeight: '100vh',
            color: '#c9d1d9',
            overflowX: 'hidden',
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Barlow+Condensed:wght@400;500;700;800&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        .section{padding:80px 24px;max-width:1100px;margin:0 auto;}
        .card{background:#0d1117;border:1px solid #21262d;border-radius:12px;padding:24px;}
        .ai-panel{background:#0d1117;border:1px solid #21262d;border-radius:12px;padding:22px;box-shadow:0 10px 40px rgba(0,0,0,.35);}
        .ai-topline{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:14px;}
        .ai-sys{font-size:10px;letter-spacing:.14em;font-weight:800;text-transform:uppercase;color:#6e7681;}
        .ai-chip{display:inline-flex;align-items:center;gap:6px;padding:3px 10px;border-radius:999px;border:1px solid #30363d;background:#0a0c0e;color:#8b949e;font-size:10px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;}
        .ai-prompt{font-size:10px;letter-spacing:.12em;font-weight:800;text-transform:uppercase;color:#484f58;margin-bottom:8px;}
        .ai-response{font-size:11px;letter-spacing:.08em;font-weight:800;text-transform:uppercase;color:#6e7681;margin-bottom:14px;display:flex;align-items:center;gap:8px;}
        .ai-response::before{content:'INSIGHT';display:inline-flex;align-items:center;justify-content:center;padding:2px 8px;border-radius:6px;background:rgba(245,158,11,.12);color:#f59e0b;border:1px solid rgba(245,158,11,.25);font-size:9px;letter-spacing:.12em;}
        .scanlines{position:fixed;inset:0;pointer-events:none;z-index:2;background:repeating-linear-gradient(to bottom,rgba(255,255,255,.028),rgba(255,255,255,.028) 1px,transparent 1px,transparent 7px);mix-blend-mode:overlay;opacity:.08;}
        .gridbg{position:fixed;inset:0;pointer-events:none;z-index:1;background-image:linear-gradient(rgba(96,165,250,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.025) 1px, transparent 1px);background-size:32px 32px;}
        .amber{color:#f59e0b;}
        .green{color:#4ade80;}
        .red{color:#f87171;}
        .blue{color:#60a5fa;}
        .purple{color:#c084fc;}
        .muted{color:#484f58;}
        .label{font-size:10px;letter-spacing:.12em;font-weight:700;text-transform:uppercase;}
        .h1{font-family:'Barlow Condensed',sans-serif;font-weight:800;letter-spacing:-.5px;}
        .h2{font-family:'Barlow Condensed',sans-serif;font-weight:700;letter-spacing:.02em;}
        .divider{border:none;border-top:1px solid #21262d;margin:0;}
        .pill{display:inline-flex;align-items:center;gap:6px;padding:4px 12px;border-radius:20px;font-size:11px;font-weight:700;}
        .btn-amber{display:inline-flex;align-items:center;justify-content:center;padding:14px 28px;border-radius:10px;background:#f59e0b;color:#050607;font-weight:800;font-size:14px;text-decoration:none;border:none;cursor:pointer;font-family:inherit;letter-spacing:.04em;}
        .btn-outline{display:inline-flex;align-items:center;justify-content:center;padding:14px 28px;border-radius:10px;background:transparent;color:#c9d1d9;font-weight:700;font-size:14px;text-decoration:none;border:1px solid #30363d;cursor:pointer;font-family:inherit;}
        .btn-outline:hover{border-color:#f59e0b;color:#f59e0b;}
        .grid2{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
        .grid3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;}
        .grid4{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:14px;}
        @media(max-width:768px){.grid2,.grid3,.grid4{grid-template-columns:1fr;}}
        .bar-track{height:8px;background:#161b22;border-radius:4px;overflow:hidden;margin-top:6px;}
        .bar-fill{height:100%;border-radius:4px;}
        .cost-row{display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid #161b22;font-size:12px;}
        .cost-row:last-child{border-bottom:none;}
        .tag-urgent{background:#2d0f0f;color:#f87171;padding:2px 8px;border-radius:4px;font-size:10px;font-weight:700;}
        .tag-growth{background:#052e16;color:#4ade80;padding:2px 8px;border-radius:4px;font-size:10px;font-weight:700;}
        .tag-scale{background:#1e1b4b;color:#818cf8;padding:2px 8px;border-radius:4px;font-size:10px;font-weight:700;}
        .quote-block{border-left:3px solid #f59e0b;padding:14px 20px;background:#0d1117;border-radius:0 8px 8px 0;font-size:14px;line-height:1.7;color:#c9d1d9;font-style:italic;}
        .metric-big{font-family:'Barlow Condensed',sans-serif;font-weight:800;font-size:42px;line-height:1;}
        .tier-card{background:#0d1117;border:1px solid #21262d;border-radius:12px;padding:24px;position:relative;overflow:hidden;}
        .tier-card.featured{border-color:#f59e0b;box-shadow:0 0 40px rgba(245,158,11,.08);}
        .tier-card.featured::before{content:'MOST POPULAR';position:absolute;top:14px;right:-28px;background:#f59e0b;color:#050607;font-size:9px;font-weight:800;letter-spacing:.1em;padding:4px 40px;transform:rotate(45deg);}
        .progress-ring{width:80px;height:80px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Barlow Condensed',sans-serif;font-weight:800;font-size:20px;}
      `
            }, void 0, false, {
                fileName: "[project]/app/pitch/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "gridbg",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/app/pitch/page.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "scanlines",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/app/pitch/page.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: 'radial-gradient(1400px 700px at 30% 0%, rgba(245,158,11,.15), transparent 60%), radial-gradient(800px 500px at 80% 20%, rgba(96,165,250,.08), transparent 55%)',
                    borderBottom: '1px solid #21262d',
                    padding: '100px 24px 80px',
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 3
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: 800,
                        margin: '0 auto'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                justifyContent: 'center',
                                marginBottom: 10
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ai-chip",
                                children: "CPOS · INVESTOR BRIEFING"
                            }, void 0, false, {
                                fileName: "[project]/app/pitch/page.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pill",
                            style: {
                                background: 'rgba(245,158,11,.12)',
                                color: '#f59e0b',
                                border: '1px solid rgba(245,158,11,.25)',
                                marginBottom: 24
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "🏗"
                                }, void 0, false, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                " INVESTOR & SUPPORTER PITCH · 2026"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "h1",
                            style: {
                                fontSize: 'clamp(40px,7vw,72px)',
                                color: '#f9fafb',
                                lineHeight: 1.05,
                                marginBottom: 20
                            },
                            children: [
                                "The Operating System",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: '#f59e0b'
                                    },
                                    children: "Construction Never Had"
                                }, void 0, false, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: 18,
                                color: 'rgba(229,231,235,.75)',
                                lineHeight: 1.7,
                                marginBottom: 32,
                                maxWidth: 620,
                                margin: '0 auto 32px'
                            },
                            children: "CPOS is a full-stack project management platform built specifically for AEC professionals — combining SOW, BOQ, Gantt, cost tracking, and reporting in one place."
                        }, void 0, false, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: 14,
                                justifyContent: 'center',
                                flexWrap: 'wrap'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#support",
                                    className: "btn-amber",
                                    children: "Support This Project →"
                                }, void 0, false, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#costs",
                                    className: "btn-outline",
                                    children: "See the Numbers"
                                }, void 0, false, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: 40,
                                display: 'flex',
                                justifyContent: 'center',
                                gap: 40,
                                flexWrap: 'wrap'
                            },
                            children: [
                                {
                                    label: 'Modules Built',
                                    value: '7',
                                    color: '#f59e0b'
                                },
                                {
                                    label: 'DB Tables',
                                    value: '16',
                                    color: '#4ade80'
                                },
                                {
                                    label: 'Target Market',
                                    value: 'AEC',
                                    color: '#60a5fa'
                                },
                                {
                                    label: 'Stage',
                                    value: 'MVP',
                                    color: '#c084fc'
                                }
                            ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "metric-big",
                                            style: {
                                                color: s.color
                                            },
                                            children: s.value
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 103,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "label muted",
                                            style: {
                                                marginTop: 4
                                            },
                                            children: s.label
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 104,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, s.label, true, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/pitch/page.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/pitch/page.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    borderBottom: '1px solid #21262d'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section",
                    style: {
                        position: 'relative',
                        zIndex: 3
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ai-panel",
                            style: {
                                marginBottom: 18
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ai-topline",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ai-sys",
                                            children: "BRIEF"
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ai-chip",
                                            children: "RISK: HIGH · TOOL SPRAWL"
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ai-prompt",
                                    children: "SUMMARY"
                                }, void 0, false, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        color: '#c9d1d9',
                                        fontSize: 13,
                                        lineHeight: 1.7
                                    },
                                    children: "Construction teams run critical scope, cost, and schedule decisions across disconnected files and channels. CPOS consolidates them into one structured system."
                                }, void 0, false, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ai-response",
                            children: "SECTION OVERVIEW"
                        }, void 0, false, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "label amber",
                            style: {
                                marginBottom: 16
                            },
                            children: "The Problem"
                        }, void 0, false, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "h2",
                            style: {
                                fontSize: 36,
                                color: '#e6edf3',
                                marginBottom: 32
                            },
                            children: "Construction projects fail because of fragmented tools"
                        }, void 0, false, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid3",
                            children: [
                                {
                                    icon: '📊',
                                    title: 'Spreadsheet Hell',
                                    body: 'Teams manage SOW, BOQ, and schedules across dozens of disconnected Excel files. Version control is a nightmare.'
                                },
                                {
                                    icon: '💸',
                                    title: 'Cost Overruns',
                                    body: 'Without real-time budget tracking, projects routinely exceed budgets by 20–40% before anyone notices.'
                                },
                                {
                                    icon: '📋',
                                    title: 'No Single Source of Truth',
                                    body: 'PMs, QS, site engineers, and clients all work from different documents. Decisions get made on stale data.'
                                }
                            ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 32,
                                                marginBottom: 12
                                            },
                                            children: p.icon
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 136,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h2",
                                            style: {
                                                fontSize: 16,
                                                color: '#e6edf3',
                                                marginBottom: 8
                                            },
                                            children: p.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 13,
                                                color: '#6e7681',
                                                lineHeight: 1.7
                                            },
                                            children: p.body
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, p.title, true, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "quote-block",
                            style: {
                                marginTop: 32
                            },
                            children: [
                                '"The global construction industry loses an estimated ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    style: {
                                        color: '#f59e0b'
                                    },
                                    children: "$1.6 trillion annually"
                                }, void 0, false, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 143,
                                    columnNumber: 66
                                }, this),
                                ' to poor project data, rework, and schedule overruns. CPOS is built to close that gap."'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/pitch/page.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/pitch/page.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    borderBottom: '1px solid #21262d'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section",
                    style: {
                        position: 'relative',
                        zIndex: 3
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ai-panel",
                            style: {
                                marginBottom: 18
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ai-topline",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ai-sys",
                                            children: "BRIEF"
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ai-chip",
                                            children: "FOCUS: CONSOLIDATE"
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ai-prompt",
                                    children: "SUMMARY"
                                }, void 0, false, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        color: '#c9d1d9',
                                        fontSize: 13,
                                        lineHeight: 1.7
                                    },
                                    children: "CPOS is modular: teams can start with SOW/BOQ and expand into scheduling, cost tracking, documents, and reporting as the project grows."
                                }, void 0, false, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ai-response",
                            children: "SECTION OVERVIEW"
                        }, void 0, false, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "label green",
                            style: {
                                marginBottom: 16
                            },
                            children: "The Solution"
                        }, void 0, false, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "h2",
                            style: {
                                fontSize: 36,
                                color: '#e6edf3',
                                marginBottom: 12
                            },
                            children: "One platform. Every module a PM needs."
                        }, void 0, false, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: '#6e7681',
                                fontSize: 14,
                                marginBottom: 32,
                                maxWidth: 600
                            },
                            children: "CPOS replaces the spreadsheet stack with a structured, cloud-native system that mirrors how construction projects actually run."
                        }, void 0, false, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid4",
                            children: [
                                {
                                    icon: '📐',
                                    label: 'SOW Module',
                                    desc: 'L1→L2→L3 scope hierarchy with risk, status, and critical path tracking',
                                    color: '#f59e0b'
                                },
                                {
                                    icon: '🧮',
                                    label: 'BOQ Module',
                                    desc: 'Bill of quantities with unit rates, waste factors, and auto-calculated totals',
                                    color: '#4ade80'
                                },
                                {
                                    icon: '📅',
                                    label: 'Gantt Chart',
                                    desc: 'Baseline vs planned vs actual schedule with dependency mapping',
                                    color: '#60a5fa'
                                },
                                {
                                    icon: '💰',
                                    label: 'Cost Tracker',
                                    desc: 'Real-time budget utilisation, burn rate, and category-level spend analysis',
                                    color: '#c084fc'
                                },
                                {
                                    icon: '📄',
                                    label: 'Reports',
                                    desc: 'One-click PM, client, QS, engineering, and site reports',
                                    color: '#f87171'
                                },
                                {
                                    icon: '📁',
                                    label: 'Documents',
                                    desc: 'Upload and manage project documents with version control',
                                    color: '#fb923c'
                                },
                                {
                                    icon: '👷',
                                    label: 'Hire a PM',
                                    desc: 'Connect with experienced remote project managers on demand',
                                    color: '#34d399'
                                },
                                {
                                    icon: '📊',
                                    label: 'Excel Bridge',
                                    desc: 'CPOS Master Template with VBA UserForm for offline data entry and upload',
                                    color: '#a78bfa'
                                }
                            ].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card",
                                    style: {
                                        borderTop: `2px solid ${m.color}`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 24,
                                                marginBottom: 10
                                            },
                                            children: m.icon
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 181,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 13,
                                                fontWeight: 700,
                                                color: '#e6edf3',
                                                marginBottom: 6
                                            },
                                            children: m.label
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 182,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 11,
                                                color: '#6e7681',
                                                lineHeight: 1.6
                                            },
                                            children: m.desc
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 183,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, m.label, true, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 180,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/pitch/page.tsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/pitch/page.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    borderBottom: '1px solid #21262d',
                    background: '#0a0c0e'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section",
                    style: {
                        position: 'relative',
                        zIndex: 3
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ai-panel",
                            style: {
                                marginBottom: 18
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ai-topline",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ai-sys",
                                            children: "BRIEF"
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 195,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ai-chip",
                                            children: "SCOPE: AFRICA + MENA"
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 194,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ai-prompt",
                                    children: "SUMMARY"
                                }, void 0, false, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        color: '#c9d1d9',
                                        fontSize: 13,
                                        lineHeight: 1.7
                                    },
                                    children: "The initial focus targets a fast-growing region where global tools are often priced out of reach—and where mobile-first workflows and payments are the norm."
                                }, void 0, false, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ai-response",
                            children: "SECTION OVERVIEW"
                        }, void 0, false, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "label blue",
                            style: {
                                marginBottom: 16
                            },
                            children: "Market Opportunity"
                        }, void 0, false, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 204,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "h2",
                            style: {
                                fontSize: 36,
                                color: '#e6edf3',
                                marginBottom: 32
                            },
                            children: "A massive, underserved market"
                        }, void 0, false, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid3",
                            children: [
                                {
                                    label: 'Global Construction Tech TAM',
                                    value: '$2.3T',
                                    sub: 'Global construction industry output',
                                    color: '#f59e0b'
                                },
                                {
                                    label: 'Construction PM Software SAM',
                                    value: '$14.5B',
                                    sub: 'Addressable PM software market by 2028',
                                    color: '#4ade80'
                                },
                                {
                                    label: 'Africa + MENA SOM',
                                    value: '$480M',
                                    sub: 'Serviceable obtainable market — our initial focus',
                                    color: '#60a5fa'
                                }
                            ].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card",
                                    style: {
                                        textAlign: 'center',
                                        padding: 32
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "metric-big",
                                            style: {
                                                color: m.color,
                                                marginBottom: 8
                                            },
                                            children: m.value
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 215,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 11,
                                                fontWeight: 700,
                                                color: '#e6edf3',
                                                marginBottom: 6
                                            },
                                            children: m.label
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 216,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 11,
                                                color: '#484f58'
                                            },
                                            children: m.sub
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 217,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, m.label, true, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 214,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 208,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: 32
                            },
                            className: "grid2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "label muted",
                                            style: {
                                                marginBottom: 12
                                            },
                                            children: "Why Africa & MENA First"
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 223,
                                            columnNumber: 15
                                        }, this),
                                        [
                                            'Massive infrastructure investment wave underway',
                                            'Existing tools (Procore, Autodesk) priced out of reach for SME contractors',
                                            'High mobile penetration — M-Pesa payment integration already live',
                                            'Fragmented market with no dominant local player',
                                            'Construction boom in GCC, East Africa, and North Africa'
                                        ].map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    gap: 10,
                                                    alignItems: 'flex-start',
                                                    marginBottom: 10,
                                                    fontSize: 12,
                                                    color: '#c9d1d9'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "green",
                                                        children: "✓"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pitch/page.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: b
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pitch/page.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 51
                                                    }, this)
                                                ]
                                            }, b, true, {
                                                fileName: "[project]/app/pitch/page.tsx",
                                                lineNumber: 231,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 222,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "label muted",
                                            style: {
                                                marginBottom: 12
                                            },
                                            children: "Competitive Landscape"
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 237,
                                            columnNumber: 15
                                        }, this),
                                        [
                                            {
                                                name: 'Procore',
                                                price: '$375+/mo',
                                                gap: 'Too expensive for SME contractors'
                                            },
                                            {
                                                name: 'Autodesk Build',
                                                price: '$500+/mo',
                                                gap: 'Complex, requires training'
                                            },
                                            {
                                                name: 'MS Project',
                                                price: '$30/mo',
                                                gap: 'No cost tracking, no collaboration'
                                            },
                                            {
                                                name: 'Excel',
                                                price: '$0',
                                                gap: 'No structure, no real-time data'
                                            },
                                            {
                                                name: 'CPOS',
                                                price: '$29/mo',
                                                gap: '✓ Purpose-built, affordable, AEC-native'
                                            }
                                        ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "cost-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: c.name === 'CPOS' ? '#f59e0b' : '#c9d1d9',
                                                            fontWeight: c.name === 'CPOS' ? 700 : 400
                                                        },
                                                        children: c.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pitch/page.tsx",
                                                        lineNumber: 246,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: '#484f58'
                                                        },
                                                        children: c.price
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pitch/page.tsx",
                                                        lineNumber: 247,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: c.name === 'CPOS' ? '#4ade80' : '#484f58',
                                                            fontSize: 11,
                                                            maxWidth: 180,
                                                            textAlign: 'right'
                                                        },
                                                        children: c.gap
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pitch/page.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, c.name, true, {
                                                fileName: "[project]/app/pitch/page.tsx",
                                                lineNumber: 245,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 236,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 221,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/pitch/page.tsx",
                    lineNumber: 192,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/pitch/page.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "costs",
                style: {
                    borderBottom: '1px solid #21262d'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section",
                    style: {
                        position: 'relative',
                        zIndex: 3
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ai-panel",
                            style: {
                                marginBottom: 18
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ai-topline",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ai-sys",
                                            children: "BRIEF"
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 261,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ai-chip",
                                            children: "CONSTRAINT: RUNWAY"
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 262,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ai-prompt",
                                    children: "SUMMARY"
                                }, void 0, false, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 264,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        color: '#c9d1d9',
                                        fontSize: 13,
                                        lineHeight: 1.7
                                    },
                                    children: "Clear visibility into burn rate and cost structure helps supporters and partners understand exactly what it takes to ship the MVP and scale responsibly."
                                }, void 0, false, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 265,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 259,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ai-response",
                            children: "SECTION OVERVIEW"
                        }, void 0, false, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 269,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "label amber",
                            style: {
                                marginBottom: 16
                            },
                            children: "Use of Funds"
                        }, void 0, false, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 270,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "h2",
                            style: {
                                fontSize: 36,
                                color: '#e6edf3',
                                marginBottom: 12
                            },
                            children: "Where every dollar goes"
                        }, void 0, false, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 271,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: '#6e7681',
                                fontSize: 14,
                                marginBottom: 40,
                                maxWidth: 600
                            },
                            children: "We are transparent about what it costs to build and scale CPOS. Here is the full breakdown — short-term survival costs and long-term growth investment."
                        }, void 0, false, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 274,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginBottom: 48
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 12,
                                        marginBottom: 20
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "tag-urgent",
                                            children: "IMMEDIATE · 0–3 MONTHS"
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 281,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 12,
                                                color: '#484f58'
                                            },
                                            children: "Keep the lights on and ship the MVP"
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 282,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 280,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card",
                                    children: [
                                        [
                                            {
                                                item: 'Supabase Pro Plan',
                                                monthly: '$25/mo',
                                                annual: '$300',
                                                note: 'Database, auth, storage, edge functions',
                                                urgency: 'urgent'
                                            },
                                            {
                                                item: 'Vercel Pro Plan',
                                                monthly: '$20/mo',
                                                annual: '$240',
                                                note: 'Hosting, CI/CD, preview deployments',
                                                urgency: 'urgent'
                                            },
                                            {
                                                item: 'Domain & SSL',
                                                monthly: '$2/mo',
                                                annual: '$24',
                                                note: 'cpos.app or similar branded domain',
                                                urgency: 'urgent'
                                            },
                                            {
                                                item: 'M-Pesa Daraja API (Safaricom)',
                                                monthly: '$0',
                                                annual: '$0',
                                                note: 'Free tier — upgrade at scale',
                                                urgency: ''
                                            },
                                            {
                                                item: 'Email Service (Resend/SendGrid)',
                                                monthly: '$10/mo',
                                                annual: '$120',
                                                note: 'Transactional emails, notifications',
                                                urgency: 'urgent'
                                            },
                                            {
                                                item: 'Founder Living Costs (1 person)',
                                                monthly: '$800/mo',
                                                annual: '$9,600',
                                                note: 'Minimum viable runway for solo founder',
                                                urgency: 'urgent'
                                            }
                                        ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "cost-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            flex: 1
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: '#c9d1d9',
                                                                    fontWeight: 500
                                                                },
                                                                children: r.item
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/pitch/page.tsx",
                                                                lineNumber: 295,
                                                                columnNumber: 21
                                                            }, this),
                                                            r.urgency === 'urgent' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "tag-urgent",
                                                                style: {
                                                                    marginLeft: 8
                                                                },
                                                                children: "NEEDED NOW"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/pitch/page.tsx",
                                                                lineNumber: 296,
                                                                columnNumber: 48
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 10,
                                                                    color: '#484f58',
                                                                    marginTop: 2
                                                                },
                                                                children: r.note
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/pitch/page.tsx",
                                                                lineNumber: 297,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/pitch/page.tsx",
                                                        lineNumber: 294,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            textAlign: 'right',
                                                            flexShrink: 0
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    color: '#f59e0b',
                                                                    fontWeight: 700
                                                                },
                                                                children: r.monthly
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/pitch/page.tsx",
                                                                lineNumber: 300,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 10,
                                                                    color: '#484f58'
                                                                },
                                                                children: [
                                                                    r.annual,
                                                                    "/yr"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/pitch/page.tsx",
                                                                lineNumber: 301,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/pitch/page.tsx",
                                                        lineNumber: 299,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, r.item, true, {
                                                fileName: "[project]/app/pitch/page.tsx",
                                                lineNumber: 293,
                                                columnNumber: 17
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: 16,
                                                paddingTop: 16,
                                                borderTop: '1px solid #21262d',
                                                display: 'flex',
                                                justifyContent: 'space-between'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 13,
                                                        fontWeight: 700,
                                                        color: '#e6edf3'
                                                    },
                                                    children: "IMMEDIATE MONTHLY BURN"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/pitch/page.tsx",
                                                    lineNumber: 306,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 16,
                                                        fontWeight: 800,
                                                        color: '#f59e0b'
                                                    },
                                                    children: "~$857/mo"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/pitch/page.tsx",
                                                    lineNumber: 307,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 305,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 284,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 279,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginBottom: 48
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 12,
                                        marginBottom: 20
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "tag-growth",
                                            children: "GROWTH · 3–12 MONTHS"
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 315,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 12,
                                                color: '#484f58'
                                            },
                                            children: "First hires, marketing, and feature velocity"
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 316,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 314,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card",
                                    children: [
                                        [
                                            {
                                                item: 'Full-Stack Developer (1 hire)',
                                                monthly: '$2,500/mo',
                                                annual: '$30,000',
                                                note: 'Remote, mid-level. Next.js + Supabase experience required'
                                            },
                                            {
                                                item: 'Part-Time Project Manager / QA',
                                                monthly: '$1,200/mo',
                                                annual: '$14,400',
                                                note: 'Construction domain expert to validate features and test'
                                            },
                                            {
                                                item: 'UI/UX Designer (contract)',
                                                monthly: '$800/mo',
                                                annual: '$9,600',
                                                note: 'Part-time. Improve onboarding, dashboards, mobile views'
                                            },
                                            {
                                                item: 'Digital Marketing & SEO',
                                                monthly: '$500/mo',
                                                annual: '$6,000',
                                                note: 'LinkedIn, Google Ads, AEC community outreach'
                                            },
                                            {
                                                item: 'Customer Support (part-time)',
                                                monthly: '$400/mo',
                                                annual: '$4,800',
                                                note: 'Onboarding calls, email support, feedback loops'
                                            },
                                            {
                                                item: 'Infrastructure Scale-Up',
                                                monthly: '$150/mo',
                                                annual: '$1,800',
                                                note: 'Supabase Team, Vercel Pro, monitoring (Sentry, Datadog)'
                                            },
                                            {
                                                item: 'Legal & Compliance',
                                                monthly: '$200/mo',
                                                annual: '$2,400',
                                                note: 'Terms of service, privacy policy, data protection (GDPR/POPIA)'
                                            }
                                        ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "cost-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            flex: 1
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: '#c9d1d9',
                                                                    fontWeight: 500
                                                                },
                                                                children: r.item
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/pitch/page.tsx",
                                                                lineNumber: 330,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 10,
                                                                    color: '#484f58',
                                                                    marginTop: 2
                                                                },
                                                                children: r.note
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/pitch/page.tsx",
                                                                lineNumber: 331,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/pitch/page.tsx",
                                                        lineNumber: 329,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            textAlign: 'right',
                                                            flexShrink: 0
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    color: '#4ade80',
                                                                    fontWeight: 700
                                                                },
                                                                children: r.monthly
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/pitch/page.tsx",
                                                                lineNumber: 334,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 10,
                                                                    color: '#484f58'
                                                                },
                                                                children: [
                                                                    r.annual,
                                                                    "/yr"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/pitch/page.tsx",
                                                                lineNumber: 335,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/pitch/page.tsx",
                                                        lineNumber: 333,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, r.item, true, {
                                                fileName: "[project]/app/pitch/page.tsx",
                                                lineNumber: 328,
                                                columnNumber: 17
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: 16,
                                                paddingTop: 16,
                                                borderTop: '1px solid #21262d',
                                                display: 'flex',
                                                justifyContent: 'space-between'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 13,
                                                        fontWeight: 700,
                                                        color: '#e6edf3'
                                                    },
                                                    children: "GROWTH PHASE MONTHLY BURN"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/pitch/page.tsx",
                                                    lineNumber: 340,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 16,
                                                        fontWeight: 800,
                                                        color: '#4ade80'
                                                    },
                                                    children: "~$5,750/mo"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/pitch/page.tsx",
                                                    lineNumber: 341,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 339,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 318,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 313,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 12,
                                        marginBottom: 20
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "tag-scale",
                                            children: "ENTERPRISE SCALE · 12–36 MONTHS"
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 349,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 12,
                                                color: '#484f58'
                                            },
                                            children: "Series A readiness, enterprise sales, integrations"
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 350,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 348,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card",
                                    children: [
                                        [
                                            {
                                                item: 'Engineering Team (3 devs)',
                                                monthly: '$12,000/mo',
                                                annual: '$144,000',
                                                note: 'Backend, frontend, mobile (React Native)'
                                            },
                                            {
                                                item: 'Head of Product (PM hire)',
                                                monthly: '$5,000/mo',
                                                annual: '$60,000',
                                                note: 'Roadmap ownership, customer discovery, sprint planning'
                                            },
                                            {
                                                item: 'Sales & Partnerships Lead',
                                                monthly: '$4,000/mo',
                                                annual: '$48,000',
                                                note: 'Enterprise deals, contractor associations, government tenders'
                                            },
                                            {
                                                item: 'DevOps / Security Engineer',
                                                monthly: '$3,500/mo',
                                                annual: '$42,000',
                                                note: 'SOC2 compliance, CI/CD pipelines, penetration testing'
                                            },
                                            {
                                                item: 'Enterprise Infrastructure',
                                                monthly: '$2,000/mo',
                                                annual: '$24,000',
                                                note: 'Dedicated DB clusters, CDN, 99.99% SLA, disaster recovery'
                                            },
                                            {
                                                item: 'Integrations (Procore, Revit, SAP)',
                                                monthly: '$1,500/mo',
                                                annual: '$18,000',
                                                note: 'API licensing, partner program fees, integration dev'
                                            },
                                            {
                                                item: 'Office & Operations',
                                                monthly: '$2,000/mo',
                                                annual: '$24,000',
                                                note: 'Co-working space, equipment, travel for enterprise sales'
                                            },
                                            {
                                                item: 'Legal (IP, contracts, fundraising)',
                                                monthly: '$1,000/mo',
                                                annual: '$12,000',
                                                note: 'Patent filings, investor agreements, enterprise MSAs'
                                            }
                                        ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "cost-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            flex: 1
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: '#c9d1d9',
                                                                    fontWeight: 500
                                                                },
                                                                children: r.item
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/pitch/page.tsx",
                                                                lineNumber: 365,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 10,
                                                                    color: '#484f58',
                                                                    marginTop: 2
                                                                },
                                                                children: r.note
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/pitch/page.tsx",
                                                                lineNumber: 366,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/pitch/page.tsx",
                                                        lineNumber: 364,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            textAlign: 'right',
                                                            flexShrink: 0
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    color: '#818cf8',
                                                                    fontWeight: 700
                                                                },
                                                                children: r.monthly
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/pitch/page.tsx",
                                                                lineNumber: 369,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 10,
                                                                    color: '#484f58'
                                                                },
                                                                children: [
                                                                    r.annual,
                                                                    "/yr"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/pitch/page.tsx",
                                                                lineNumber: 370,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/pitch/page.tsx",
                                                        lineNumber: 368,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, r.item, true, {
                                                fileName: "[project]/app/pitch/page.tsx",
                                                lineNumber: 363,
                                                columnNumber: 17
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: 16,
                                                paddingTop: 16,
                                                borderTop: '1px solid #21262d',
                                                display: 'flex',
                                                justifyContent: 'space-between'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 13,
                                                        fontWeight: 700,
                                                        color: '#e6edf3'
                                                    },
                                                    children: "ENTERPRISE SCALE MONTHLY BURN"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/pitch/page.tsx",
                                                    lineNumber: 375,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 16,
                                                        fontWeight: 800,
                                                        color: '#818cf8'
                                                    },
                                                    children: "~$31,000/mo"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/pitch/page.tsx",
                                                    lineNumber: 376,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 374,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 352,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 347,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/pitch/page.tsx",
                    lineNumber: 258,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/pitch/page.tsx",
                lineNumber: 257,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    borderBottom: '1px solid #21262d',
                    background: '#0a0c0e'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section",
                    style: {
                        position: 'relative',
                        zIndex: 3
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ai-panel",
                            style: {
                                marginBottom: 18
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ai-topline",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ai-sys",
                                            children: "BRIEF"
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 388,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ai-chip",
                                            children: "TARGET: PROFITABLE MVP"
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 389,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 387,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ai-prompt",
                                    children: "SUMMARY"
                                }, void 0, false, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 391,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        color: '#c9d1d9',
                                        fontSize: 13,
                                        lineHeight: 1.7
                                    },
                                    children: "Revenue is diversified: subscriptions for PM teams, a hire-a-PM marketplace, and enterprise partnerships for larger organizations."
                                }, void 0, false, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 392,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 386,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ai-response",
                            children: "SECTION OVERVIEW"
                        }, void 0, false, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 396,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "label purple",
                            style: {
                                marginBottom: 16
                            },
                            children: "Revenue Model"
                        }, void 0, false, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 397,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "h2",
                            style: {
                                fontSize: 36,
                                color: '#e6edf3',
                                marginBottom: 32
                            },
                            children: "Multiple revenue streams from day one"
                        }, void 0, false, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 398,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid3",
                            children: [
                                {
                                    icon: '🔁',
                                    title: 'SaaS Subscriptions',
                                    color: '#f59e0b',
                                    items: [
                                        'Free — demo access',
                                        'Pro — $29/mo per user',
                                        'Enterprise — $100/mo per org',
                                        'Annual plans at 20% discount'
                                    ],
                                    projection: '$87K ARR at 250 Pro users'
                                },
                                {
                                    icon: '👷',
                                    title: 'Hire-a-PM Marketplace',
                                    color: '#4ade80',
                                    items: [
                                        'Platform takes 15% commission',
                                        'PM rates: $25–$80/hr',
                                        'Project-based packages',
                                        'Retainer arrangements'
                                    ],
                                    projection: '$36K ARR at 10 active PMs'
                                },
                                {
                                    icon: '🏢',
                                    title: 'Enterprise Contracts',
                                    color: '#60a5fa',
                                    items: [
                                        'Custom onboarding & training',
                                        'White-label deployments',
                                        'API access & integrations',
                                        'Dedicated support SLA'
                                    ],
                                    projection: '$120K ARR at 10 enterprise clients'
                                }
                            ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card",
                                    style: {
                                        borderTop: `2px solid ${r.color}`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 28,
                                                marginBottom: 12
                                            },
                                            children: r.icon
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 426,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h2",
                                            style: {
                                                fontSize: 16,
                                                color: '#e6edf3',
                                                marginBottom: 14
                                            },
                                            children: r.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 427,
                                            columnNumber: 17
                                        }, this),
                                        r.items.map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    gap: 8,
                                                    marginBottom: 8,
                                                    fontSize: 12,
                                                    color: '#c9d1d9'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: r.color
                                                        },
                                                        children: "→"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pitch/page.tsx",
                                                        lineNumber: 430,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: i
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pitch/page.tsx",
                                                        lineNumber: 430,
                                                        columnNumber: 62
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/app/pitch/page.tsx",
                                                lineNumber: 429,
                                                columnNumber: 19
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: 16,
                                                paddingTop: 12,
                                                borderTop: '1px solid #21262d',
                                                fontSize: 11,
                                                color: r.color,
                                                fontWeight: 700
                                            },
                                            children: r.projection
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 433,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, r.title, true, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 425,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 401,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card",
                            style: {
                                marginTop: 24
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "label muted",
                                    style: {
                                        marginBottom: 20
                                    },
                                    children: "Revenue Projection (Conservative)"
                                }, void 0, false, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 442,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 16
                                    },
                                    children: [
                                        {
                                            period: 'Month 6',
                                            arr: '$12K ARR',
                                            pct: 5,
                                            users: '35 paying users',
                                            color: '#f59e0b'
                                        },
                                        {
                                            period: 'Month 12',
                                            arr: '$48K ARR',
                                            pct: 20,
                                            users: '140 paying users',
                                            color: '#f59e0b'
                                        },
                                        {
                                            period: 'Month 18',
                                            arr: '$120K ARR',
                                            pct: 50,
                                            users: '350 paying users + 2 enterprise',
                                            color: '#4ade80'
                                        },
                                        {
                                            period: 'Month 24',
                                            arr: '$300K ARR',
                                            pct: 80,
                                            users: '800 paying users + 5 enterprise',
                                            color: '#4ade80'
                                        },
                                        {
                                            period: 'Month 36',
                                            arr: '$1M ARR',
                                            pct: 100,
                                            users: '2,500 users + 15 enterprise + PM marketplace',
                                            color: '#60a5fa'
                                        }
                                    ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'grid',
                                                gridTemplateColumns: '80px 1fr 120px',
                                                gap: 16,
                                                alignItems: 'center'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 11,
                                                        color: '#484f58'
                                                    },
                                                    children: p.period
                                                }, void 0, false, {
                                                    fileName: "[project]/app/pitch/page.tsx",
                                                    lineNumber: 452,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bar-track",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bar-fill",
                                                                style: {
                                                                    width: `${p.pct}%`,
                                                                    background: p.color
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/pitch/page.tsx",
                                                                lineNumber: 455,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/pitch/page.tsx",
                                                            lineNumber: 454,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: 10,
                                                                color: '#484f58',
                                                                marginTop: 4
                                                            },
                                                            children: p.users
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/pitch/page.tsx",
                                                            lineNumber: 457,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/pitch/page.tsx",
                                                    lineNumber: 453,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 13,
                                                        fontWeight: 700,
                                                        color: p.color,
                                                        textAlign: 'right'
                                                    },
                                                    children: p.arr
                                                }, void 0, false, {
                                                    fileName: "[project]/app/pitch/page.tsx",
                                                    lineNumber: 459,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, p.period, true, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 451,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 443,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 441,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/pitch/page.tsx",
                    lineNumber: 385,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/pitch/page.tsx",
                lineNumber: 384,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "support",
                style: {
                    borderBottom: '1px solid #21262d'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section",
                    style: {
                        position: 'relative',
                        zIndex: 3
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ai-panel",
                            style: {
                                marginBottom: 18
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ai-topline",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ai-sys",
                                            children: "BRIEF"
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 472,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ai-chip",
                                            children: "ACTION: SUPPORT"
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 473,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 471,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ai-prompt",
                                    children: "SUMMARY"
                                }, void 0, false, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 475,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        color: '#c9d1d9',
                                        fontSize: 13,
                                        lineHeight: 1.7
                                    },
                                    children: "Support CPOS as a user, a supporter, or a partner. Each option helps fund development and accelerate delivery of new modules."
                                }, void 0, false, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 476,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 470,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ai-response",
                            children: "SECTION OVERVIEW"
                        }, void 0, false, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 480,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "label amber",
                            style: {
                                marginBottom: 16
                            },
                            children: "Support CPOS"
                        }, void 0, false, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 481,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "h2",
                            style: {
                                fontSize: 36,
                                color: '#e6edf3',
                                marginBottom: 12
                            },
                            children: "Back the platform. Shape the future."
                        }, void 0, false, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 482,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: '#6e7681',
                                fontSize: 14,
                                marginBottom: 40,
                                maxWidth: 600
                            },
                            children: "Whether you are a contractor who wants a better tool, an investor who sees the opportunity, or someone who just wants to see this built — there is a way to help."
                        }, void 0, false, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 485,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid3",
                            children: [
                                {
                                    tier: 'SUPPORTER',
                                    amount: '$10 – $50',
                                    color: '#6e7681',
                                    featured: false,
                                    perks: [
                                        'Name in the credits',
                                        'Early access to new features',
                                        'Supporter badge on your profile',
                                        'Our genuine gratitude'
                                    ],
                                    cta: 'Donate',
                                    href: 'mailto:uddi.cpos@gmail.com?subject=CPOS%20Supporter%20Donation'
                                },
                                {
                                    tier: 'PRO USER',
                                    amount: '$29/month',
                                    color: '#f59e0b',
                                    featured: true,
                                    perks: [
                                        'Up to 5 active projects',
                                        'All modules: SOW, BOQ, Gantt, Reports',
                                        'Cost tracking & budget alerts',
                                        'Document management',
                                        'Priority email support'
                                    ],
                                    cta: 'Subscribe Now',
                                    href: '/pricing?tier=pro'
                                },
                                {
                                    tier: 'INVESTOR / PARTNER',
                                    amount: '$5,000+',
                                    color: '#60a5fa',
                                    featured: false,
                                    perks: [
                                        'Equity conversation welcome',
                                        'Co-development partnership',
                                        'White-label licensing rights',
                                        'Board advisory seat (lead investors)',
                                        'First right of refusal on Series A'
                                    ],
                                    cta: 'Get in Touch',
                                    href: 'mailto:uddi.cpos@gmail.com?subject=CPOS%20Investment%20Inquiry'
                                }
                            ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `tier-card ${t.featured ? 'featured' : ''}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "label",
                                            style: {
                                                color: t.color,
                                                marginBottom: 8
                                            },
                                            children: t.tier
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 536,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h2",
                                            style: {
                                                fontSize: 28,
                                                color: '#e6edf3',
                                                marginBottom: 4
                                            },
                                            children: t.amount
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 537,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                height: 1,
                                                background: '#21262d',
                                                margin: '16px 0'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 538,
                                            columnNumber: 17
                                        }, this),
                                        t.perks.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    gap: 10,
                                                    marginBottom: 10,
                                                    fontSize: 12,
                                                    color: '#c9d1d9'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: t.color
                                                        },
                                                        children: "✓"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pitch/page.tsx",
                                                        lineNumber: 541,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: p
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pitch/page.tsx",
                                                        lineNumber: 541,
                                                        columnNumber: 62
                                                    }, this)
                                                ]
                                            }, p, true, {
                                                fileName: "[project]/app/pitch/page.tsx",
                                                lineNumber: 540,
                                                columnNumber: 19
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: 20
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: t.href,
                                                className: "btn-amber",
                                                style: {
                                                    width: '100%',
                                                    background: t.featured ? '#f59e0b' : 'transparent',
                                                    color: t.featured ? '#050607' : t.color,
                                                    border: `1px solid ${t.color}`,
                                                    borderRadius: 8,
                                                    padding: '12px 0',
                                                    textAlign: 'center',
                                                    display: 'block',
                                                    fontWeight: 700,
                                                    fontSize: 13,
                                                    textDecoration: 'none'
                                                },
                                                children: [
                                                    t.cta,
                                                    " →"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/pitch/page.tsx",
                                                lineNumber: 545,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 544,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, t.tier, true, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 535,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 488,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card",
                            style: {
                                marginTop: 24,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                flexWrap: 'wrap',
                                gap: 16
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 14,
                                                fontWeight: 700,
                                                color: '#e6edf3',
                                                marginBottom: 4
                                            },
                                            children: "Just want to buy us a coffee?"
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 568,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 12,
                                                color: '#484f58'
                                            },
                                            children: "Even a small one-time donation keeps the servers running and the founder caffeinated."
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 569,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 567,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: 10,
                                        flexWrap: 'wrap'
                                    },
                                    children: [
                                        '$5',
                                        '$10',
                                        '$25',
                                        '$50'
                                    ].map((amt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `mailto:uddi.cpos@gmail.com?subject=CPOS%20Donation%20${amt}`,
                                            style: {
                                                padding: '10px 20px',
                                                borderRadius: 8,
                                                border: '1px solid #30363d',
                                                background: '#161b22',
                                                color: '#c9d1d9',
                                                textDecoration: 'none',
                                                fontSize: 13,
                                                fontWeight: 700
                                            },
                                            children: amt
                                        }, amt, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 573,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 571,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 566,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/pitch/page.tsx",
                    lineNumber: 469,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/pitch/page.tsx",
                lineNumber: 468,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    borderBottom: '1px solid #21262d',
                    background: '#0a0c0e'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section",
                    style: {
                        position: 'relative',
                        zIndex: 3
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ai-panel",
                            style: {
                                marginBottom: 18
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ai-topline",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ai-sys",
                                            children: "BRIEF"
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 591,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ai-chip",
                                            children: "HORIZON: 2026 → 2027"
                                        }, void 0, false, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 592,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 590,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ai-prompt",
                                    children: "SUMMARY"
                                }, void 0, false, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 594,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        color: '#c9d1d9',
                                        fontSize: 13,
                                        lineHeight: 1.7
                                    },
                                    children: "A phased roadmap: finalize the MVP, improve mobile UX, expand collaboration, then build enterprise integrations and a marketplace ecosystem."
                                }, void 0, false, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 595,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 589,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ai-response",
                            children: "SECTION OVERVIEW"
                        }, void 0, false, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 599,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "label green",
                            style: {
                                marginBottom: 16
                            },
                            children: "Roadmap"
                        }, void 0, false, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 600,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "h2",
                            style: {
                                fontSize: 36,
                                color: '#e6edf3',
                                marginBottom: 32
                            },
                            children: "What we are building next"
                        }, void 0, false, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 601,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid2",
                            children: [
                                {
                                    phase: 'Q2 2026 — NOW',
                                    color: '#f59e0b',
                                    tag: 'IN PROGRESS',
                                    items: [
                                        'Excel VBA UserForm for offline data entry',
                                        'SOW module full feature completion',
                                        'M-Pesa payment integration (live)',
                                        'Public demo project'
                                    ]
                                },
                                {
                                    phase: 'Q3 2026',
                                    color: '#4ade80',
                                    tag: 'NEXT',
                                    items: [
                                        'Mobile-responsive redesign',
                                        'Push notifications & alerts',
                                        'Multi-user project collaboration',
                                        'Bulk import from Excel template'
                                    ]
                                },
                                {
                                    phase: 'Q4 2026',
                                    color: '#60a5fa',
                                    tag: 'PLANNED',
                                    items: [
                                        'React Native mobile app (iOS + Android)',
                                        'Procore / Autodesk data bridge',
                                        'AI-powered schedule risk detection',
                                        'White-label enterprise deployments'
                                    ]
                                },
                                {
                                    phase: '2027',
                                    color: '#c084fc',
                                    tag: 'VISION',
                                    items: [
                                        'BIM integration (IFC viewer)',
                                        'Automated progress reporting via drone/photo AI',
                                        'Marketplace for subcontractors and suppliers',
                                        'Series A fundraise'
                                    ]
                                }
                            ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                marginBottom: 14
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h2",
                                                    style: {
                                                        fontSize: 15,
                                                        color: p.color
                                                    },
                                                    children: p.phase
                                                }, void 0, false, {
                                                    fileName: "[project]/app/pitch/page.tsx",
                                                    lineNumber: 611,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 9,
                                                        fontWeight: 800,
                                                        letterSpacing: '.1em',
                                                        color: p.color,
                                                        background: p.color + '18',
                                                        padding: '3px 8px',
                                                        borderRadius: 4
                                                    },
                                                    children: p.tag
                                                }, void 0, false, {
                                                    fileName: "[project]/app/pitch/page.tsx",
                                                    lineNumber: 612,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/pitch/page.tsx",
                                            lineNumber: 610,
                                            columnNumber: 17
                                        }, this),
                                        p.items.map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    gap: 10,
                                                    marginBottom: 8,
                                                    fontSize: 12,
                                                    color: '#c9d1d9'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: p.color
                                                        },
                                                        children: "→"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pitch/page.tsx",
                                                        lineNumber: 616,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: i
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pitch/page.tsx",
                                                        lineNumber: 616,
                                                        columnNumber: 62
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/app/pitch/page.tsx",
                                                lineNumber: 615,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, p.phase, true, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 609,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 602,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/pitch/page.tsx",
                    lineNumber: 588,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/pitch/page.tsx",
                lineNumber: 587,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '80px 24px',
                    textAlign: 'center',
                    background: 'radial-gradient(800px 400px at 50% 100%, rgba(245,158,11,.1), transparent 60%)',
                    position: 'relative',
                    zIndex: 3
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: 640,
                        margin: '0 auto'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: 48,
                                marginBottom: 16
                            },
                            children: "🏗"
                        }, void 0, false, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 628,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "h1",
                            style: {
                                fontSize: 40,
                                color: '#f9fafb',
                                marginBottom: 16
                            },
                            children: "Help us build the future of construction management"
                        }, void 0, false, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 629,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: 16,
                                color: 'rgba(229,231,235,.7)',
                                lineHeight: 1.7,
                                marginBottom: 32
                            },
                            children: "CPOS is being built by people who have lived the pain of managing construction projects with spreadsheets. We know what needs to be built. We just need the runway to build it."
                        }, void 0, false, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 632,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: 14,
                                justifyContent: 'center',
                                flexWrap: 'wrap'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/pricing?tier=pro",
                                    className: "btn-amber",
                                    children: "Subscribe — $29/mo"
                                }, void 0, false, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 636,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "mailto:uddi.cpos@gmail.com?subject=CPOS%20Investment%20Inquiry",
                                    className: "btn-outline",
                                    children: "Talk to the Founder"
                                }, void 0, false, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 637,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 635,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: 24,
                                fontSize: 12,
                                color: '#484f58'
                            },
                            children: [
                                "Questions? Email ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: '#f59e0b'
                                    },
                                    children: "uddi.cpos@gmail.com"
                                }, void 0, false, {
                                    fileName: "[project]/app/pitch/page.tsx",
                                    lineNumber: 640,
                                    columnNumber: 30
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/pitch/page.tsx",
                            lineNumber: 639,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/pitch/page.tsx",
                    lineNumber: 627,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/pitch/page.tsx",
                lineNumber: 626,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    borderTop: '1px solid #21262d',
                    padding: '20px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 12
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 11,
                            color: '#30363d'
                        },
                        children: "© 2026 CPOS — Construction Project Operating System"
                    }, void 0, false, {
                        fileName: "[project]/app/pitch/page.tsx",
                        lineNumber: 647,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 16,
                            fontSize: 11
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/",
                                style: {
                                    color: '#484f58',
                                    textDecoration: 'none'
                                },
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/app/pitch/page.tsx",
                                lineNumber: 649,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/pricing",
                                style: {
                                    color: '#484f58',
                                    textDecoration: 'none'
                                },
                                children: "Pricing"
                            }, void 0, false, {
                                fileName: "[project]/app/pitch/page.tsx",
                                lineNumber: 650,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `/dashboard/e03418fd-0ef2-4080-90c6-f18009bb12d1`,
                                style: {
                                    color: '#484f58',
                                    textDecoration: 'none'
                                },
                                children: "Demo"
                            }, void 0, false, {
                                fileName: "[project]/app/pitch/page.tsx",
                                lineNumber: 651,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/pitch/page.tsx",
                        lineNumber: 648,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/pitch/page.tsx",
                lineNumber: 646,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/pitch/page.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = PitchPage;
var _c;
__turbopack_context__.k.register(_c, "PitchPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_pitch_page_tsx_7d627918._.js.map