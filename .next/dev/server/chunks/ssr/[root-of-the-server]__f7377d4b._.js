module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/supabase.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-ssr] (ecmascript)");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://jjoiosvpchabcrbtzaaq.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "sb_publishable_wqyMFECW8psK8KgpgaBCTw_h1Lw44dC");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBrowserClient"])(supabaseUrl, supabaseAnonKey);
}),
"[project]/components/ChatWidget.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/supabase.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const FEATURES = [
    'SOW',
    'BOQ',
    'Gantt',
    'Reports',
    'Documents',
    'Hire PM',
    'Dashboard'
];
function safeText(v) {
    return String(v ?? '').trim();
}
function clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
}
function StarRow({ value, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            gap: 6,
            alignItems: 'center'
        },
        children: [
            [
                1,
                2,
                3,
                4,
                5
            ].map((i)=>{
                const active = i <= value;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>onChange(i),
                    "aria-label": `${i} star`,
                    style: {
                        width: 28,
                        height: 28,
                        borderRadius: 8,
                        border: `1px solid ${active ? '#f59e0b88' : '#30363d'}`,
                        background: active ? '#1a120a' : '#0a0c0e',
                        color: active ? '#f59e0b' : '#6e7681',
                        cursor: 'pointer',
                        fontSize: 14,
                        lineHeight: '26px',
                        fontWeight: 800,
                        fontFamily: 'inherit'
                    },
                    children: "★"
                }, i, false, {
                    fileName: "[project]/components/ChatWidget.tsx",
                    lineNumber: 48,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginLeft: 8,
                    fontSize: 11,
                    color: '#6e7681'
                },
                children: [
                    value,
                    "/5"
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatWidget.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ChatWidget.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
function Chip({ active, label, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        style: {
            borderRadius: 999,
            padding: '6px 10px',
            border: `1px solid ${active ? '#10b98188' : '#30363d'}`,
            background: active ? '#071a14' : '#0a0c0e',
            color: active ? '#34d399' : '#8b949e',
            cursor: 'pointer',
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: '0.04em',
            fontFamily: 'inherit'
        },
        children: label
    }, void 0, false, {
        fileName: "[project]/components/ChatWidget.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
function FaqItem({ q, a, open, onToggle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: '#0a0c0e',
            border: '1px solid #21262d',
            borderRadius: 10,
            padding: 12
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onToggle,
                style: {
                    width: '100%',
                    textAlign: 'left',
                    background: 'transparent',
                    border: 'none',
                    color: '#e6edf3',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    fontWeight: 900,
                    letterSpacing: '0.02em',
                    fontSize: 12,
                    lineHeight: 1.5,
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 10
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: q
                    }, void 0, false, {
                        fileName: "[project]/components/ChatWidget.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: '#6e7681',
                            fontWeight: 900
                        },
                        children: open ? '−' : '+'
                    }, void 0, false, {
                        fileName: "[project]/components/ChatWidget.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatWidget.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 10,
                    fontSize: 12,
                    color: '#c9d1d9',
                    lineHeight: 1.7
                },
                children: a.split('\n').map((line, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: line
                    }, idx, false, {
                        fileName: "[project]/components/ChatWidget.tsx",
                        lineNumber: 146,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/ChatWidget.tsx",
                lineNumber: 144,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ChatWidget.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
function ChatWidget() {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('faq');
    const [authed, setAuthed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [contact, setContact] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        subject: 'General Enquiry',
        message: ''
    });
    const [contactLoading, setContactLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [contactDone, setContactDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [contactError, setContactError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [feedback, setFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        rating: 0,
        liked: '',
        improvements: '',
        features_used: [],
        nps_score: 8,
        comments: ''
    });
    const [feedbackLoading, setFeedbackLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [feedbackDone, setFeedbackDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [feedbackError, setFeedbackError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [faqOpen, setFaqOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('What is CPOS?');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let cancelled = false;
        async function loadUser() {
            const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$supabase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
            if (cancelled) return;
            const user = data?.user;
            if (!user) {
                setAuthed(false);
                return;
            }
            setAuthed(true);
            const fullName = safeText(user.user_metadata?.full_name);
            const email = safeText(user.email);
            setContact((c)=>({
                    ...c,
                    name: c.name || fullName,
                    email: c.email || email
                }));
        }
        loadUser();
        return ()=>{
            cancelled = true;
        };
    }, []);
    const faq = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            {
                q: 'What is CPOS?',
                a: `CPOS is a Construction Project Operating System built for the AEC industry. It helps project managers track scope, costs, schedules, and documents end-to-end.`
            },
            {
                q: 'How do I import my project data?',
                a: `Go to your project → SOW module → Upload your CPOS Master Template (.xlsx). Download the template from the SOW module if you don't have it.`
            },
            {
                q: 'What is the Pro plan?',
                a: `Pro gives you up to 5 active projects with full edit access to all modules for $29/month (KES 3,727). Pay via M-Pesa on the pricing page.`
            },
            {
                q: 'How do I hire a Remote PM?',
                a: `Click "Hire Remote PM" on your dashboard, fill in your project details, and submit. Uddi Benkiff will be in touch within 24 hours.`
            },
            {
                q: 'Is my data secure?',
                a: `Yes. All data is stored in Supabase with row-level security. Only you can see your own projects.`
            },
            {
                q: 'How do I export reports?',
                a: `Go to your project → Reports → select report type → click Export PDF. Your browser will open the print dialog.`
            },
            {
                q: "I can't find my answer here.",
                a: `Click the Contact Us tab to send us a message directly.`
            }
        ], []);
    const panelStyle = {
        position: 'fixed',
        right: 24,
        bottom: 24,
        width: 320,
        height: 480,
        borderRadius: 14,
        background: '#0d1117',
        border: '1px solid #21262d',
        boxShadow: '0 18px 40px rgba(0,0,0,0.55)',
        overflow: 'hidden',
        transform: open ? 'translateY(0px)' : 'translateY(16px)',
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'auto' : 'none',
        transition: 'all 180ms ease',
        zIndex: 9999,
        fontFamily: "'DM Mono','Courier New',monospace",
        color: '#c9d1d9',
        display: 'flex',
        flexDirection: 'column'
    };
    const inputStyle = {
        width: '100%',
        background: '#0a0c0e',
        border: '1px solid #21262d',
        borderRadius: 8,
        color: '#c9d1d9',
        fontFamily: 'inherit',
        fontSize: 12,
        padding: '10px 12px',
        outline: 'none'
    };
    const labelStyle = {
        fontSize: 10,
        color: '#484f58',
        letterSpacing: '0.08em',
        marginBottom: 6,
        display: 'block'
    };
    async function submitContact() {
        setContactDone(false);
        setContactError('');
        setContactLoading(true);
        try {
            const payload = {
                name: safeText(contact.name),
                email: safeText(contact.email),
                subject: contact.subject,
                message: safeText(contact.message)
            };
            if (!payload.name || !payload.email || !payload.subject || !payload.message) {
                setContactError('Please fill in all fields.');
                return;
            }
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            const json = await res.json();
            if (!res.ok || !json?.ok) {
                setContactError(json?.error || 'Failed to send message.');
                return;
            }
            setContactDone(true);
            setContact((c)=>({
                    ...c,
                    message: ''
                }));
        } catch (e) {
            setContactError(e instanceof Error ? e.message : 'Unknown error');
        } finally{
            setContactLoading(false);
        }
    }
    async function submitFeedback() {
        setFeedbackDone(false);
        setFeedbackError('');
        setFeedbackLoading(true);
        try {
            const payload = {
                rating: feedback.rating,
                liked: safeText(feedback.liked),
                improvements: safeText(feedback.improvements),
                features_used: feedback.features_used,
                nps_score: clamp(Number(feedback.nps_score), 0, 10),
                comments: safeText(feedback.comments)
            };
            if (!payload.rating) {
                setFeedbackError('Please select a rating (1–5).');
                return;
            }
            if (!payload.liked || !payload.improvements || !payload.features_used.length) {
                setFeedbackError('Please complete the required feedback fields.');
                return;
            }
            const res = await fetch('/api/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            const json = await res.json();
            if (!res.ok || !json?.ok) {
                setFeedbackError(json?.error || 'Failed to submit feedback.');
                return;
            }
            setFeedbackDone(true);
        } catch (e) {
            setFeedbackError(e instanceof Error ? e.message : 'Unknown error');
        } finally{
            setFeedbackLoading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Barlow+Condensed:wght@700;800&display=swap');
        @keyframes cposPulse {
          0% { box-shadow: 0 0 0 0 rgba(245,158,11,0.35); }
          70% { box-shadow: 0 0 0 14px rgba(245,158,11,0.0); }
          100% { box-shadow: 0 0 0 0 rgba(245,158,11,0.0); }
        }
        .cpos-chat-fab {
          width: 56px; height: 56px; border-radius: 999px;
          background: #f59e0b; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 10px 24px rgba(0,0,0,0.45);
          animation: cposPulse 2.4s infinite;
          transition: transform 0.15s ease, background 0.15s ease;
          font-family: 'DM Mono', monospace;
        }
        .cpos-chat-fab:hover { transform: translateY(-2px); background: #fbbf24; }
        .cpos-chat-fab:active { transform: translateY(0px); }

        .cpos-tab {
          flex: 1;
          border: 1px solid #30363d;
          background: transparent;
          color: #8b949e;
          padding: 8px 10px;
          border-radius: 10px;
          cursor: pointer;
          font-weight: 900;
          letter-spacing: 0.04em;
          font-size: 11px;
          font-family: inherit;
        }
        .cpos-tab.active {
          background: #1a120a;
          border-color: #f59e0b55;
          color: #f59e0b;
        }

        .cpos-btn-amber {
          background: #f59e0b;
          border: none;
          border-radius: 10px;
          color: #0a0c0e;
          padding: 10px 12px;
          font-weight: 900;
          letter-spacing: 0.05em;
          cursor: pointer;
          font-family: inherit;
          font-size: 12px;
          width: 100%;
        }
        .cpos-btn-amber:hover { background: #fbbf24; }
        .cpos-btn-amber:disabled { background: #484f58; cursor: not-allowed; }

        input:focus, textarea:focus, select:focus {
          border-color: #f59e0b !important;
          box-shadow: 0 0 0 3px rgba(245,158,11,0.10);
        }
      `
            }, void 0, false, {
                fileName: "[project]/components/ChatWidget.tsx",
                lineNumber: 368,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    right: 24,
                    bottom: 24,
                    zIndex: 10000
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "cpos-chat-fab",
                    "aria-label": open ? 'Close chat' : 'Open chat',
                    onClick: ()=>setOpen((v)=>!v),
                    style: {
                        animationPlayState: open ? 'paused' : 'running'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 20,
                            fontWeight: 900,
                            color: '#0a0c0e'
                        },
                        children: "💬"
                    }, void 0, false, {
                        fileName: "[project]/components/ChatWidget.tsx",
                        lineNumber: 436,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ChatWidget.tsx",
                    lineNumber: 429,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ChatWidget.tsx",
                lineNumber: 428,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: panelStyle,
                role: "dialog",
                "aria-label": "CPOS Support chat panel",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '12px 12px',
                            borderBottom: '1px solid #21262d',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: 12,
                            background: '#0b0f14'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 10
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 28,
                                            height: 28,
                                            borderRadius: 8,
                                            background: '#f59e0b',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "14",
                                            height: "14",
                                            fill: "none",
                                            stroke: "#0a0c0e",
                                            strokeWidth: "2.5",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatWidget.tsx",
                                                lineNumber: 465,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatWidget.tsx",
                                            lineNumber: 464,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatWidget.tsx",
                                        lineNumber: 453,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: "'Barlow Condensed',sans-serif",
                                                    fontWeight: 800,
                                                    letterSpacing: '0.04em'
                                                },
                                                children: "CPOS Support"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatWidget.tsx",
                                                lineNumber: 469,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 10,
                                                    color: '#6e7681',
                                                    marginTop: 2
                                                },
                                                children: "Typically replies within 24 hours"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatWidget.tsx",
                                                lineNumber: 478,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ChatWidget.tsx",
                                        lineNumber: 468,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ChatWidget.tsx",
                                lineNumber: 452,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setOpen(false),
                                "aria-label": "Close chat",
                                style: {
                                    background: 'transparent',
                                    border: '1px solid #30363d',
                                    borderRadius: 10,
                                    color: '#8b949e',
                                    cursor: 'pointer',
                                    width: 32,
                                    height: 32,
                                    fontWeight: 900,
                                    fontFamily: 'inherit'
                                },
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/components/ChatWidget.tsx",
                                lineNumber: 484,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ChatWidget.tsx",
                        lineNumber: 441,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: 12,
                            borderBottom: '1px solid #21262d',
                            background: '#0d1117'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: 8
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: `cpos-tab ${tab === 'faq' ? 'active' : ''}`,
                                    onClick: ()=>setTab('faq'),
                                    children: "FAQ"
                                }, void 0, false, {
                                    fileName: "[project]/components/ChatWidget.tsx",
                                    lineNumber: 506,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: `cpos-tab ${tab === 'contact' ? 'active' : ''}`,
                                    onClick: ()=>setTab('contact'),
                                    children: "Contact Us"
                                }, void 0, false, {
                                    fileName: "[project]/components/ChatWidget.tsx",
                                    lineNumber: 513,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: `cpos-tab ${tab === 'feedback' ? 'active' : ''}`,
                                    onClick: ()=>setTab('feedback'),
                                    children: "Feedback"
                                }, void 0, false, {
                                    fileName: "[project]/components/ChatWidget.tsx",
                                    lineNumber: 520,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ChatWidget.tsx",
                            lineNumber: 505,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ChatWidget.tsx",
                        lineNumber: 504,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: 12,
                            overflow: 'auto',
                            flex: 1
                        },
                        children: [
                            tab === 'faq' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 10
                                },
                                children: faq.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FaqItem, {
                                        q: item.q,
                                        a: item.a,
                                        open: faqOpen === item.q,
                                        onToggle: ()=>setFaqOpen((cur)=>cur === item.q ? '' : item.q)
                                    }, item.q, false, {
                                        fileName: "[project]/components/ChatWidget.tsx",
                                        lineNumber: 534,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/ChatWidget.tsx",
                                lineNumber: 532,
                                columnNumber: 13
                            }, this),
                            tab === 'contact' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    !authed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: '#1a1508',
                                            border: '1px solid #f59e0b33',
                                            borderRadius: 10,
                                            padding: 12,
                                            fontSize: 11,
                                            color: '#c9d1d9',
                                            lineHeight: 1.6,
                                            marginBottom: 12
                                        },
                                        children: "Tip: Create an account for faster support and better tracking."
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatWidget.tsx",
                                        lineNumber: 548,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gap: 10
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: labelStyle,
                                                        children: "NAME"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ChatWidget.tsx",
                                                        lineNumber: 566,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: contact.name,
                                                        onChange: (e)=>setContact((c)=>({
                                                                    ...c,
                                                                    name: e.target.value
                                                                })),
                                                        placeholder: "Your name",
                                                        style: inputStyle
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ChatWidget.tsx",
                                                        lineNumber: 567,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ChatWidget.tsx",
                                                lineNumber: 565,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: labelStyle,
                                                        children: "EMAIL"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ChatWidget.tsx",
                                                        lineNumber: 576,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: contact.email,
                                                        onChange: (e)=>setContact((c)=>({
                                                                    ...c,
                                                                    email: e.target.value
                                                                })),
                                                        placeholder: "you@example.com",
                                                        style: inputStyle
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ChatWidget.tsx",
                                                        lineNumber: 577,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ChatWidget.tsx",
                                                lineNumber: 575,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: labelStyle,
                                                        children: "SUBJECT"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ChatWidget.tsx",
                                                        lineNumber: 586,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: contact.subject,
                                                        onChange: (e)=>setContact((c)=>({
                                                                    ...c,
                                                                    subject: e.target.value
                                                                })),
                                                        style: inputStyle,
                                                        children: [
                                                            'General Enquiry',
                                                            'Technical Support',
                                                            'Billing / Payments',
                                                            'Hire a PM',
                                                            'Partnership',
                                                            'Other'
                                                        ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: s,
                                                                children: s
                                                            }, s, false, {
                                                                fileName: "[project]/components/ChatWidget.tsx",
                                                                lineNumber: 602,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ChatWidget.tsx",
                                                        lineNumber: 587,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ChatWidget.tsx",
                                                lineNumber: 585,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: labelStyle,
                                                        children: "MESSAGE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ChatWidget.tsx",
                                                        lineNumber: 610,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        value: contact.message,
                                                        onChange: (e)=>setContact((c)=>({
                                                                    ...c,
                                                                    message: e.target.value
                                                                })),
                                                        placeholder: "How can we help?",
                                                        rows: 4,
                                                        style: {
                                                            ...inputStyle,
                                                            resize: 'vertical'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ChatWidget.tsx",
                                                        lineNumber: 611,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ChatWidget.tsx",
                                                lineNumber: 609,
                                                columnNumber: 17
                                            }, this),
                                            contactError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: '#1a0a0a',
                                                    border: '1px solid #f8717133',
                                                    borderRadius: 10,
                                                    padding: 10,
                                                    fontSize: 11,
                                                    color: '#f87171',
                                                    lineHeight: 1.6
                                                },
                                                children: contactError
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatWidget.tsx",
                                                lineNumber: 621,
                                                columnNumber: 19
                                            }, this),
                                            contactDone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: '#071a14',
                                                    border: '1px solid #10b98133',
                                                    borderRadius: 10,
                                                    padding: 10,
                                                    fontSize: 11,
                                                    color: '#34d399',
                                                    lineHeight: 1.6
                                                },
                                                children: "Message sent! We'll be in touch soon. ✅"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatWidget.tsx",
                                                lineNumber: 637,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "cpos-btn-amber",
                                                disabled: contactLoading,
                                                onClick: submitContact,
                                                children: contactLoading ? 'SENDING...' : 'Send Message'
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatWidget.tsx",
                                                lineNumber: 652,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ChatWidget.tsx",
                                        lineNumber: 564,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ChatWidget.tsx",
                                lineNumber: 546,
                                columnNumber: 13
                            }, this),
                            tab === 'feedback' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'grid',
                                    gap: 12
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: labelStyle,
                                                children: "OVERALL RATING *"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatWidget.tsx",
                                                lineNumber: 667,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StarRow, {
                                                value: feedback.rating,
                                                onChange: (n)=>setFeedback((f)=>({
                                                            ...f,
                                                            rating: n
                                                        }))
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatWidget.tsx",
                                                lineNumber: 668,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ChatWidget.tsx",
                                        lineNumber: 666,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: labelStyle,
                                                children: "WHAT DO YOU LIKE MOST? *"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatWidget.tsx",
                                                lineNumber: 672,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: feedback.liked,
                                                onChange: (e)=>setFeedback((f)=>({
                                                            ...f,
                                                            liked: e.target.value
                                                        })),
                                                rows: 3,
                                                style: {
                                                    ...inputStyle,
                                                    resize: 'vertical'
                                                },
                                                placeholder: "Tell us what’s working well..."
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatWidget.tsx",
                                                lineNumber: 673,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ChatWidget.tsx",
                                        lineNumber: 671,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: labelStyle,
                                                children: "WHAT COULD BE IMPROVED? *"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatWidget.tsx",
                                                lineNumber: 683,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: feedback.improvements,
                                                onChange: (e)=>setFeedback((f)=>({
                                                            ...f,
                                                            improvements: e.target.value
                                                        })),
                                                rows: 3,
                                                style: {
                                                    ...inputStyle,
                                                    resize: 'vertical'
                                                },
                                                placeholder: "What should we fix or improve?"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatWidget.tsx",
                                                lineNumber: 684,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ChatWidget.tsx",
                                        lineNumber: 682,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: labelStyle,
                                                children: "WHICH FEATURES DO YOU USE MOST? *"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatWidget.tsx",
                                                lineNumber: 694,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    gap: 8,
                                                    flexWrap: 'wrap'
                                                },
                                                children: FEATURES.map((label)=>{
                                                    const active = feedback.features_used.includes(label);
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Chip, {
                                                        label: label,
                                                        active: active,
                                                        onClick: ()=>setFeedback((f)=>({
                                                                    ...f,
                                                                    features_used: active ? f.features_used.filter((x)=>x !== label) : [
                                                                        ...f.features_used,
                                                                        label
                                                                    ]
                                                                }))
                                                    }, label, false, {
                                                        fileName: "[project]/components/ChatWidget.tsx",
                                                        lineNumber: 699,
                                                        columnNumber: 23
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatWidget.tsx",
                                                lineNumber: 695,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ChatWidget.tsx",
                                        lineNumber: 693,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: labelStyle,
                                                children: "HOW LIKELY ARE YOU TO RECOMMEND CPOS? (NPS 0–10)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatWidget.tsx",
                                                lineNumber: 718,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: 0,
                                                max: 10,
                                                value: feedback.nps_score,
                                                onChange: (e)=>setFeedback((f)=>({
                                                            ...f,
                                                            nps_score: Number(e.target.value)
                                                        })),
                                                style: {
                                                    width: '100%'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatWidget.tsx",
                                                lineNumber: 719,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 11,
                                                    color: '#6e7681',
                                                    marginTop: 6
                                                },
                                                children: [
                                                    "NPS: ",
                                                    feedback.nps_score,
                                                    "/10"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ChatWidget.tsx",
                                                lineNumber: 727,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ChatWidget.tsx",
                                        lineNumber: 717,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                style: labelStyle,
                                                children: "ANY OTHER COMMENTS? (OPTIONAL)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatWidget.tsx",
                                                lineNumber: 731,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: feedback.comments,
                                                onChange: (e)=>setFeedback((f)=>({
                                                            ...f,
                                                            comments: e.target.value
                                                        })),
                                                rows: 2,
                                                style: {
                                                    ...inputStyle,
                                                    resize: 'vertical'
                                                },
                                                placeholder: "Optional..."
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatWidget.tsx",
                                                lineNumber: 732,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ChatWidget.tsx",
                                        lineNumber: 730,
                                        columnNumber: 15
                                    }, this),
                                    feedbackError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: '#1a0a0a',
                                            border: '1px solid #f8717133',
                                            borderRadius: 10,
                                            padding: 10,
                                            fontSize: 11,
                                            color: '#f87171',
                                            lineHeight: 1.6
                                        },
                                        children: feedbackError
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatWidget.tsx",
                                        lineNumber: 742,
                                        columnNumber: 17
                                    }, this),
                                    feedbackDone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: '#071a14',
                                            border: '1px solid #10b98133',
                                            borderRadius: 10,
                                            padding: 10,
                                            fontSize: 11,
                                            color: '#34d399',
                                            lineHeight: 1.6
                                        },
                                        children: "Thank you for your feedback! 🙏 ✅"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatWidget.tsx",
                                        lineNumber: 758,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "cpos-btn-amber",
                                        disabled: feedbackLoading,
                                        onClick: submitFeedback,
                                        children: feedbackLoading ? 'SUBMITTING...' : 'Submit Feedback'
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatWidget.tsx",
                                        lineNumber: 773,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ChatWidget.tsx",
                                lineNumber: 665,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ChatWidget.tsx",
                        lineNumber: 530,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: 10,
                            borderTop: '1px solid #21262d',
                            background: '#0b0f14'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: 10,
                                color: '#484f58',
                                letterSpacing: '0.06em',
                                textAlign: 'center'
                            },
                            children: [
                                "CPOS SUPPORT · ",
                                authed ? 'SIGNED IN' : 'GUEST'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ChatWidget.tsx",
                            lineNumber: 786,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ChatWidget.tsx",
                        lineNumber: 785,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatWidget.tsx",
                lineNumber: 440,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f7377d4b._.js.map