'use client'

// ================================================================
// CPOS — FUNDING PITCH PAGE
// Route: /pitch
// ================================================================

export default function PitchPage() {
  return (
    <main style={{
      fontFamily: "'DM Mono','Courier New',monospace",
      background: '#050607',
      minHeight: '100vh',
      color: '#c9d1d9',
      overflowX: 'hidden',
      position: 'relative',
    }}>
      <style>{`
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
      `}</style>

      <div className="gridbg" aria-hidden />
      <div className="scanlines" aria-hidden />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <div style={{
        background: 'radial-gradient(1400px 700px at 30% 0%, rgba(245,158,11,.15), transparent 60%), radial-gradient(800px 500px at 80% 20%, rgba(96,165,250,.08), transparent 55%)',
        borderBottom: '1px solid #21262d',
        padding: '100px 24px 80px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 3,
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
            <div className="ai-chip">CPOS · INVESTOR BRIEFING</div>
          </div>
          <div className="pill" style={{ background: 'rgba(245,158,11,.12)', color: '#f59e0b', border: '1px solid rgba(245,158,11,.25)', marginBottom: 24 }}>
            <span>🏗</span> INVESTOR & SUPPORTER PITCH · 2026
          </div>
          <h1 className="h1" style={{ fontSize: 'clamp(40px,7vw,72px)', color: '#f9fafb', lineHeight: 1.05, marginBottom: 20 }}>
            The Operating System<br />
            <span style={{ color: '#f59e0b' }}>Construction Never Had</span>
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(229,231,235,.75)', lineHeight: 1.7, marginBottom: 32, maxWidth: 620, margin: '0 auto 32px' }}>
            CPOS is a full-stack project management platform built specifically for AEC professionals — combining SOW, BOQ, Gantt, cost tracking, and reporting in one place.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#support" className="btn-amber">Support This Project →</a>
            <a href="#costs" className="btn-outline">See the Numbers</a>
          </div>
          <div style={{ marginTop: 40, display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
            {[
              { label: 'Modules Built', value: '7', color: '#f59e0b' },
              { label: 'DB Tables', value: '16', color: '#4ade80' },
              { label: 'Target Market', value: 'AEC', color: '#60a5fa' },
              { label: 'Stage', value: 'MVP', color: '#c084fc' },
            ].map(s => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div className="metric-big" style={{ color: s.color }}>{s.value}</div>
                <div className="label muted" style={{ marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── THE PROBLEM ──────────────────────────────────────── */}
      <div style={{ borderBottom: '1px solid #21262d' }}>
        <div className="section" style={{ position: 'relative', zIndex: 3 }}>
          <div className="ai-panel" style={{ marginBottom: 18 }}>
            <div className="ai-topline">
              <div className="ai-sys">BRIEF</div>
              <div className="ai-chip">RISK: HIGH · TOOL SPRAWL</div>
            </div>
            <div className="ai-prompt">SUMMARY</div>
            <div style={{ color: '#c9d1d9', fontSize: 13, lineHeight: 1.7 }}>
              Construction teams run critical scope, cost, and schedule decisions across disconnected files and channels. CPOS consolidates them into one structured system.
            </div>
          </div>
          <div className="ai-response">SECTION OVERVIEW</div>
          <div className="label amber" style={{ marginBottom: 16 }}>The Problem</div>
          <h2 className="h2" style={{ fontSize: 36, color: '#e6edf3', marginBottom: 32 }}>
            Construction projects fail because of fragmented tools
          </h2>
          <div className="grid3">
            {[
              { icon: '📊', title: 'Spreadsheet Hell', body: 'Teams manage SOW, BOQ, and schedules across dozens of disconnected Excel files. Version control is a nightmare.' },
              { icon: '💸', title: 'Cost Overruns', body: 'Without real-time budget tracking, projects routinely exceed budgets by 20–40% before anyone notices.' },
              { icon: '📋', title: 'No Single Source of Truth', body: 'PMs, QS, site engineers, and clients all work from different documents. Decisions get made on stale data.' },
            ].map(p => (
              <div key={p.title} className="card">
                <div style={{ fontSize: 32, marginBottom: 12 }}>{p.icon}</div>
                <div className="h2" style={{ fontSize: 16, color: '#e6edf3', marginBottom: 8 }}>{p.title}</div>
                <div style={{ fontSize: 13, color: '#6e7681', lineHeight: 1.7 }}>{p.body}</div>
              </div>
            ))}
          </div>
          <div className="quote-block" style={{ marginTop: 32 }}>
            "The global construction industry loses an estimated <strong style={{ color: '#f59e0b' }}>$1.6 trillion annually</strong> to poor project data, rework, and schedule overruns. CPOS is built to close that gap."
          </div>
        </div>
      </div>

      {/* ── THE SOLUTION ─────────────────────────────────────── */}
      <div style={{ borderBottom: '1px solid #21262d' }}>
        <div className="section" style={{ position: 'relative', zIndex: 3 }}>
          <div className="ai-panel" style={{ marginBottom: 18 }}>
            <div className="ai-topline">
              <div className="ai-sys">BRIEF</div>
              <div className="ai-chip">FOCUS: CONSOLIDATE</div>
            </div>
            <div className="ai-prompt">SUMMARY</div>
            <div style={{ color: '#c9d1d9', fontSize: 13, lineHeight: 1.7 }}>
              CPOS is modular: teams can start with SOW/BOQ and expand into scheduling, cost tracking, documents, and reporting as the project grows.
            </div>
          </div>
          <div className="ai-response">SECTION OVERVIEW</div>
          <div className="label green" style={{ marginBottom: 16 }}>The Solution</div>
          <h2 className="h2" style={{ fontSize: 36, color: '#e6edf3', marginBottom: 12 }}>
            One platform. Every module a PM needs.
          </h2>
          <p style={{ color: '#6e7681', fontSize: 14, marginBottom: 32, maxWidth: 600 }}>
            CPOS replaces the spreadsheet stack with a structured, cloud-native system that mirrors how construction projects actually run.
          </p>
          <div className="grid4">
            {[
              { icon: '📐', label: 'SOW Module', desc: 'L1→L2→L3 scope hierarchy with risk, status, and critical path tracking', color: '#f59e0b' },
              { icon: '🧮', label: 'BOQ Module', desc: 'Bill of quantities with unit rates, waste factors, and auto-calculated totals', color: '#4ade80' },
              { icon: '📅', label: 'Gantt Chart', desc: 'Baseline vs planned vs actual schedule with dependency mapping', color: '#60a5fa' },
              { icon: '💰', label: 'Cost Tracker', desc: 'Real-time budget utilisation, burn rate, and category-level spend analysis', color: '#c084fc' },
              { icon: '📄', label: 'Reports', desc: 'One-click PM, client, QS, engineering, and site reports', color: '#f87171' },
              { icon: '📁', label: 'Documents', desc: 'Upload and manage project documents with version control', color: '#fb923c' },
              { icon: '👷', label: 'Hire a PM', desc: 'Connect with experienced remote project managers on demand', color: '#34d399' },
              { icon: '📊', label: 'Excel Bridge', desc: 'CPOS Master Template with VBA UserForm for offline data entry and upload', color: '#a78bfa' },
            ].map(m => (
              <div key={m.label} className="card" style={{ borderTop: `2px solid ${m.color}` }}>
                <div style={{ fontSize: 24, marginBottom: 10 }}>{m.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#e6edf3', marginBottom: 6 }}>{m.label}</div>
                <div style={{ fontSize: 11, color: '#6e7681', lineHeight: 1.6 }}>{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MARKET OPPORTUNITY ───────────────────────────────── */}
      <div style={{ borderBottom: '1px solid #21262d', background: '#0a0c0e' }}>
        <div className="section" style={{ position: 'relative', zIndex: 3 }}>
          <div className="ai-panel" style={{ marginBottom: 18 }}>
            <div className="ai-topline">
              <div className="ai-sys">BRIEF</div>
              <div className="ai-chip">SCOPE: AFRICA + MENA</div>
            </div>
            <div className="ai-prompt">SUMMARY</div>
            <div style={{ color: '#c9d1d9', fontSize: 13, lineHeight: 1.7 }}>
              The initial focus targets a fast-growing region where global tools are often priced out of reach—and where mobile-first workflows and payments are the norm.
            </div>
          </div>
          <div className="ai-response">SECTION OVERVIEW</div>
          <div className="label blue" style={{ marginBottom: 16 }}>Market Opportunity</div>
          <h2 className="h2" style={{ fontSize: 36, color: '#e6edf3', marginBottom: 32 }}>
            A massive, underserved market
          </h2>
          <div className="grid3">
            {[
              { label: 'Global Construction Tech TAM', value: '$2.3T', sub: 'Global construction industry output', color: '#f59e0b' },
              { label: 'Construction PM Software SAM', value: '$14.5B', sub: 'Addressable PM software market by 2028', color: '#4ade80' },
              { label: 'Africa + MENA SOM', value: '$480M', sub: 'Serviceable obtainable market — our initial focus', color: '#60a5fa' },
            ].map(m => (
              <div key={m.label} className="card" style={{ textAlign: 'center', padding: 32 }}>
                <div className="metric-big" style={{ color: m.color, marginBottom: 8 }}>{m.value}</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#e6edf3', marginBottom: 6 }}>{m.label}</div>
                <div style={{ fontSize: 11, color: '#484f58' }}>{m.sub}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32 }} className="grid2">
            <div className="card">
              <div className="label muted" style={{ marginBottom: 12 }}>Why Africa & MENA First</div>
              {[
                'Massive infrastructure investment wave underway',
                'Existing tools (Procore, Autodesk) priced out of reach for SME contractors',
                'High mobile penetration — M-Pesa payment integration already live',
                'Fragmented market with no dominant local player',
                'Construction boom in GCC, East Africa, and North Africa',
              ].map(b => (
                <div key={b} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10, fontSize: 12, color: '#c9d1d9' }}>
                  <span className="green">✓</span><span>{b}</span>
                </div>
              ))}
            </div>
            <div className="card">
              <div className="label muted" style={{ marginBottom: 12 }}>Competitive Landscape</div>
              {[
                { name: 'Procore', price: '$375+/mo', gap: 'Too expensive for SME contractors' },
                { name: 'Autodesk Build', price: '$500+/mo', gap: 'Complex, requires training' },
                { name: 'MS Project', price: '$30/mo', gap: 'No cost tracking, no collaboration' },
                { name: 'Excel', price: '$0', gap: 'No structure, no real-time data' },
                { name: 'CPOS', price: '$29/mo', gap: '✓ Purpose-built, affordable, AEC-native' },
              ].map(c => (
                <div key={c.name} className="cost-row">
                  <span style={{ color: c.name === 'CPOS' ? '#f59e0b' : '#c9d1d9', fontWeight: c.name === 'CPOS' ? 700 : 400 }}>{c.name}</span>
                  <span style={{ color: '#484f58' }}>{c.price}</span>
                  <span style={{ color: c.name === 'CPOS' ? '#4ade80' : '#484f58', fontSize: 11, maxWidth: 180, textAlign: 'right' }}>{c.gap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── WHAT WE NEED FUNDING FOR ─────────────────────────── */}
      <div id="costs" style={{ borderBottom: '1px solid #21262d' }}>
        <div className="section" style={{ position: 'relative', zIndex: 3 }}>
          <div className="ai-panel" style={{ marginBottom: 18 }}>
            <div className="ai-topline">
              <div className="ai-sys">BRIEF</div>
              <div className="ai-chip">CONSTRAINT: RUNWAY</div>
            </div>
            <div className="ai-prompt">SUMMARY</div>
            <div style={{ color: '#c9d1d9', fontSize: 13, lineHeight: 1.7 }}>
              Clear visibility into burn rate and cost structure helps supporters and partners understand exactly what it takes to ship the MVP and scale responsibly.
            </div>
          </div>
          <div className="ai-response">SECTION OVERVIEW</div>
          <div className="label amber" style={{ marginBottom: 16 }}>Use of Funds</div>
          <h2 className="h2" style={{ fontSize: 36, color: '#e6edf3', marginBottom: 12 }}>
            Where every dollar goes
          </h2>
          <p style={{ color: '#6e7681', fontSize: 14, marginBottom: 40, maxWidth: 600 }}>
            We are transparent about what it costs to build and scale CPOS. Here is the full breakdown — short-term survival costs and long-term growth investment.
          </p>

          {/* SHORT TERM */}
          <div style={{ marginBottom: 48 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <span className="tag-urgent">IMMEDIATE · 0–3 MONTHS</span>
              <span style={{ fontSize: 12, color: '#484f58' }}>Keep the lights on and ship the MVP</span>
            </div>
            <div className="card">
              {[
                { item: 'Supabase Pro Plan', monthly: '$25/mo', annual: '$300', note: 'Database, auth, storage, edge functions', urgency: 'urgent' },
                { item: 'Vercel Pro Plan', monthly: '$20/mo', annual: '$240', note: 'Hosting, CI/CD, preview deployments', urgency: 'urgent' },
                { item: 'Domain & SSL', monthly: '$2/mo', annual: '$24', note: 'cpos.app or similar branded domain', urgency: 'urgent' },
                { item: 'M-Pesa Daraja API (Safaricom)', monthly: '$0', annual: '$0', note: 'Free tier — upgrade at scale', urgency: '' },
                { item: 'Email Service (Resend/SendGrid)', monthly: '$10/mo', annual: '$120', note: 'Transactional emails, notifications', urgency: 'urgent' },
                { item: 'Founder Living Costs (1 person)', monthly: '$800/mo', annual: '$9,600', note: 'Minimum viable runway for solo founder', urgency: 'urgent' },
              ].map(r => (
                <div key={r.item} className="cost-row">
                  <div style={{ flex: 1 }}>
                    <span style={{ color: '#c9d1d9', fontWeight: 500 }}>{r.item}</span>
                    {r.urgency === 'urgent' && <span className="tag-urgent" style={{ marginLeft: 8 }}>NEEDED NOW</span>}
                    <div style={{ fontSize: 10, color: '#484f58', marginTop: 2 }}>{r.note}</div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ color: '#f59e0b', fontWeight: 700 }}>{r.monthly}</div>
                    <div style={{ fontSize: 10, color: '#484f58' }}>{r.annual}/yr</div>
                  </div>
                </div>
              ))}
              <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid #21262d', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#e6edf3' }}>IMMEDIATE MONTHLY BURN</span>
                <span style={{ fontSize: 16, fontWeight: 800, color: '#f59e0b' }}>~$857/mo</span>
              </div>
            </div>
          </div>

          {/* GROWTH PHASE */}
          <div style={{ marginBottom: 48 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <span className="tag-growth">GROWTH · 3–12 MONTHS</span>
              <span style={{ fontSize: 12, color: '#484f58' }}>First hires, marketing, and feature velocity</span>
            </div>
            <div className="card">
              {[
                { item: 'Full-Stack Developer (1 hire)', monthly: '$2,500/mo', annual: '$30,000', note: 'Remote, mid-level. Next.js + Supabase experience required' },
                { item: 'Part-Time Project Manager / QA', monthly: '$1,200/mo', annual: '$14,400', note: 'Construction domain expert to validate features and test' },
                { item: 'UI/UX Designer (contract)', monthly: '$800/mo', annual: '$9,600', note: 'Part-time. Improve onboarding, dashboards, mobile views' },
                { item: 'Digital Marketing & SEO', monthly: '$500/mo', annual: '$6,000', note: 'LinkedIn, Google Ads, AEC community outreach' },
                { item: 'Customer Support (part-time)', monthly: '$400/mo', annual: '$4,800', note: 'Onboarding calls, email support, feedback loops' },
                { item: 'Infrastructure Scale-Up', monthly: '$150/mo', annual: '$1,800', note: 'Supabase Team, Vercel Pro, monitoring (Sentry, Datadog)' },
                { item: 'Legal & Compliance', monthly: '$200/mo', annual: '$2,400', note: 'Terms of service, privacy policy, data protection (GDPR/POPIA)' },
              ].map(r => (
                <div key={r.item} className="cost-row">
                  <div style={{ flex: 1 }}>
                    <span style={{ color: '#c9d1d9', fontWeight: 500 }}>{r.item}</span>
                    <div style={{ fontSize: 10, color: '#484f58', marginTop: 2 }}>{r.note}</div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ color: '#4ade80', fontWeight: 700 }}>{r.monthly}</div>
                    <div style={{ fontSize: 10, color: '#484f58' }}>{r.annual}/yr</div>
                  </div>
                </div>
              ))}
              <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid #21262d', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#e6edf3' }}>GROWTH PHASE MONTHLY BURN</span>
                <span style={{ fontSize: 16, fontWeight: 800, color: '#4ade80' }}>~$5,750/mo</span>
              </div>
            </div>
          </div>

          {/* ENTERPRISE SCALE */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <span className="tag-scale">ENTERPRISE SCALE · 12–36 MONTHS</span>
              <span style={{ fontSize: 12, color: '#484f58' }}>Series A readiness, enterprise sales, integrations</span>
            </div>
            <div className="card">
              {[
                { item: 'Engineering Team (3 devs)', monthly: '$12,000/mo', annual: '$144,000', note: 'Backend, frontend, mobile (React Native)' },
                { item: 'Head of Product (PM hire)', monthly: '$5,000/mo', annual: '$60,000', note: 'Roadmap ownership, customer discovery, sprint planning' },
                { item: 'Sales & Partnerships Lead', monthly: '$4,000/mo', annual: '$48,000', note: 'Enterprise deals, contractor associations, government tenders' },
                { item: 'DevOps / Security Engineer', monthly: '$3,500/mo', annual: '$42,000', note: 'SOC2 compliance, CI/CD pipelines, penetration testing' },
                { item: 'Enterprise Infrastructure', monthly: '$2,000/mo', annual: '$24,000', note: 'Dedicated DB clusters, CDN, 99.99% SLA, disaster recovery' },
                { item: 'Integrations (Procore, Revit, SAP)', monthly: '$1,500/mo', annual: '$18,000', note: 'API licensing, partner program fees, integration dev' },
                { item: 'Office & Operations', monthly: '$2,000/mo', annual: '$24,000', note: 'Co-working space, equipment, travel for enterprise sales' },
                { item: 'Legal (IP, contracts, fundraising)', monthly: '$1,000/mo', annual: '$12,000', note: 'Patent filings, investor agreements, enterprise MSAs' },
              ].map(r => (
                <div key={r.item} className="cost-row">
                  <div style={{ flex: 1 }}>
                    <span style={{ color: '#c9d1d9', fontWeight: 500 }}>{r.item}</span>
                    <div style={{ fontSize: 10, color: '#484f58', marginTop: 2 }}>{r.note}</div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ color: '#818cf8', fontWeight: 700 }}>{r.monthly}</div>
                    <div style={{ fontSize: 10, color: '#484f58' }}>{r.annual}/yr</div>
                  </div>
                </div>
              ))}
              <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid #21262d', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#e6edf3' }}>ENTERPRISE SCALE MONTHLY BURN</span>
                <span style={{ fontSize: 16, fontWeight: 800, color: '#818cf8' }}>~$31,000/mo</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── REVENUE MODEL ────────────────────────────────────── */}
      <div style={{ borderBottom: '1px solid #21262d', background: '#0a0c0e' }}>
        <div className="section" style={{ position: 'relative', zIndex: 3 }}>
          <div className="ai-panel" style={{ marginBottom: 18 }}>
            <div className="ai-topline">
              <div className="ai-sys">BRIEF</div>
              <div className="ai-chip">TARGET: PROFITABLE MVP</div>
            </div>
            <div className="ai-prompt">SUMMARY</div>
            <div style={{ color: '#c9d1d9', fontSize: 13, lineHeight: 1.7 }}>
              Revenue is diversified: subscriptions for PM teams, a hire-a-PM marketplace, and enterprise partnerships for larger organizations.
            </div>
          </div>
          <div className="ai-response">SECTION OVERVIEW</div>
          <div className="label purple" style={{ marginBottom: 16 }}>Revenue Model</div>
          <h2 className="h2" style={{ fontSize: 36, color: '#e6edf3', marginBottom: 32 }}>
            Multiple revenue streams from day one
          </h2>
          <div className="grid3">
            {[
              {
                icon: '🔁',
                title: 'SaaS Subscriptions',
                color: '#f59e0b',
                items: ['Free — demo access', 'Pro — $29/mo per user', 'Enterprise — $100/mo per org', 'Annual plans at 20% discount'],
                projection: '$87K ARR at 250 Pro users',
              },
              {
                icon: '👷',
                title: 'Hire-a-PM Marketplace',
                color: '#4ade80',
                items: ['Platform takes 15% commission', 'PM rates: $25–$80/hr', 'Project-based packages', 'Retainer arrangements'],
                projection: '$36K ARR at 10 active PMs',
              },
              {
                icon: '🏢',
                title: 'Enterprise Contracts',
                color: '#60a5fa',
                items: ['Custom onboarding & training', 'White-label deployments', 'API access & integrations', 'Dedicated support SLA'],
                projection: '$120K ARR at 10 enterprise clients',
              },
            ].map(r => (
              <div key={r.title} className="card" style={{ borderTop: `2px solid ${r.color}` }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{r.icon}</div>
                <div className="h2" style={{ fontSize: 16, color: '#e6edf3', marginBottom: 14 }}>{r.title}</div>
                {r.items.map(i => (
                  <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 8, fontSize: 12, color: '#c9d1d9' }}>
                    <span style={{ color: r.color }}>→</span><span>{i}</span>
                  </div>
                ))}
                <div style={{ marginTop: 16, paddingTop: 12, borderTop: '1px solid #21262d', fontSize: 11, color: r.color, fontWeight: 700 }}>
                  {r.projection}
                </div>
              </div>
            ))}
          </div>

          {/* Revenue projection bar chart */}
          <div className="card" style={{ marginTop: 24 }}>
            <div className="label muted" style={{ marginBottom: 20 }}>Revenue Projection (Conservative)</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { period: 'Month 6', arr: '$12K ARR', pct: 5, users: '35 paying users', color: '#f59e0b' },
                { period: 'Month 12', arr: '$48K ARR', pct: 20, users: '140 paying users', color: '#f59e0b' },
                { period: 'Month 18', arr: '$120K ARR', pct: 50, users: '350 paying users + 2 enterprise', color: '#4ade80' },
                { period: 'Month 24', arr: '$300K ARR', pct: 80, users: '800 paying users + 5 enterprise', color: '#4ade80' },
                { period: 'Month 36', arr: '$1M ARR', pct: 100, users: '2,500 users + 15 enterprise + PM marketplace', color: '#60a5fa' },
              ].map(p => (
                <div key={p.period} style={{ display: 'grid', gridTemplateColumns: '80px 1fr 120px', gap: 16, alignItems: 'center' }}>
                  <span style={{ fontSize: 11, color: '#484f58' }}>{p.period}</span>
                  <div>
                    <div className="bar-track">
                      <div className="bar-fill" style={{ width: `${p.pct}%`, background: p.color }} />
                    </div>
                    <div style={{ fontSize: 10, color: '#484f58', marginTop: 4 }}>{p.users}</div>
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 700, color: p.color, textAlign: 'right' }}>{p.arr}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── SUPPORT TIERS ────────────────────────────────────── */}
      <div id="support" style={{ borderBottom: '1px solid #21262d' }}>
        <div className="section" style={{ position: 'relative', zIndex: 3 }}>
          <div className="ai-panel" style={{ marginBottom: 18 }}>
            <div className="ai-topline">
              <div className="ai-sys">BRIEF</div>
              <div className="ai-chip">ACTION: SUPPORT</div>
            </div>
            <div className="ai-prompt">SUMMARY</div>
            <div style={{ color: '#c9d1d9', fontSize: 13, lineHeight: 1.7 }}>
              Support CPOS as a user, a supporter, or a partner. Each option helps fund development and accelerate delivery of new modules.
            </div>
          </div>
          <div className="ai-response">SECTION OVERVIEW</div>
          <div className="label amber" style={{ marginBottom: 16 }}>Support CPOS</div>
          <h2 className="h2" style={{ fontSize: 36, color: '#e6edf3', marginBottom: 12 }}>
            Back the platform. Shape the future.
          </h2>
          <p style={{ color: '#6e7681', fontSize: 14, marginBottom: 40, maxWidth: 600 }}>
            Whether you are a contractor who wants a better tool, an investor who sees the opportunity, or someone who just wants to see this built — there is a way to help.
          </p>
          <div className="grid3">
            {[
              {
                tier: 'SUPPORTER',
                amount: '$10 – $50',
                color: '#6e7681',
                featured: false,
                perks: [
                  'Name in the credits',
                  'Early access to new features',
                  'Supporter badge on your profile',
                  'Our genuine gratitude',
                ],
                cta: 'Donate',
                href: 'mailto:uddi.cpos@gmail.com?subject=CPOS%20Supporter%20Donation',
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
                  'Priority email support',
                ],
                cta: 'Subscribe Now',
                href: '/pricing?tier=pro',
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
                  'First right of refusal on Series A',
                ],
                cta: 'Get in Touch',
                href: 'mailto:uddi.cpos@gmail.com?subject=CPOS%20Investment%20Inquiry',
              },
            ].map(t => (
              <div key={t.tier} className={`tier-card ${t.featured ? 'featured' : ''}`}>
                <div className="label" style={{ color: t.color, marginBottom: 8 }}>{t.tier}</div>
                <div className="h2" style={{ fontSize: 28, color: '#e6edf3', marginBottom: 4 }}>{t.amount}</div>
                <div style={{ height: 1, background: '#21262d', margin: '16px 0' }} />
                {t.perks.map(p => (
                  <div key={p} style={{ display: 'flex', gap: 10, marginBottom: 10, fontSize: 12, color: '#c9d1d9' }}>
                    <span style={{ color: t.color }}>✓</span><span>{p}</span>
                  </div>
                ))}
                <div style={{ marginTop: 20 }}>
                  <a href={t.href} className="btn-amber" style={{
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
                    textDecoration: 'none',
                  }}>
                    {t.cta} →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* One-time donation nudge */}
          <div className="card" style={{ marginTop: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#e6edf3', marginBottom: 4 }}>Just want to buy us a coffee?</div>
              <div style={{ fontSize: 12, color: '#484f58' }}>Even a small one-time donation keeps the servers running and the founder caffeinated.</div>
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {['$5', '$10', '$25', '$50'].map(amt => (
                <a key={amt} href={`mailto:uddi.cpos@gmail.com?subject=CPOS%20Donation%20${amt}`} style={{
                  padding: '10px 20px', borderRadius: 8, border: '1px solid #30363d',
                  background: '#161b22', color: '#c9d1d9', textDecoration: 'none',
                  fontSize: 13, fontWeight: 700,
                }}>
                  {amt}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── ROADMAP ──────────────────────────────────────────── */}
      <div style={{ borderBottom: '1px solid #21262d', background: '#0a0c0e' }}>
        <div className="section" style={{ position: 'relative', zIndex: 3 }}>
          <div className="ai-panel" style={{ marginBottom: 18 }}>
            <div className="ai-topline">
              <div className="ai-sys">BRIEF</div>
              <div className="ai-chip">HORIZON: 2026 → 2027</div>
            </div>
            <div className="ai-prompt">SUMMARY</div>
            <div style={{ color: '#c9d1d9', fontSize: 13, lineHeight: 1.7 }}>
              A phased roadmap: finalize the MVP, improve mobile UX, expand collaboration, then build enterprise integrations and a marketplace ecosystem.
            </div>
          </div>
          <div className="ai-response">SECTION OVERVIEW</div>
          <div className="label green" style={{ marginBottom: 16 }}>Roadmap</div>
          <h2 className="h2" style={{ fontSize: 36, color: '#e6edf3', marginBottom: 32 }}>What we are building next</h2>
          <div className="grid2">
            {[
              { phase: 'Q2 2026 — NOW', color: '#f59e0b', tag: 'IN PROGRESS', items: ['Excel VBA UserForm for offline data entry', 'SOW module full feature completion', 'M-Pesa payment integration (live)', 'Public demo project'] },
              { phase: 'Q3 2026', color: '#4ade80', tag: 'NEXT', items: ['Mobile-responsive redesign', 'Push notifications & alerts', 'Multi-user project collaboration', 'Bulk import from Excel template'] },
              { phase: 'Q4 2026', color: '#60a5fa', tag: 'PLANNED', items: ['React Native mobile app (iOS + Android)', 'Procore / Autodesk data bridge', 'AI-powered schedule risk detection', 'White-label enterprise deployments'] },
              { phase: '2027', color: '#c084fc', tag: 'VISION', items: ['BIM integration (IFC viewer)', 'Automated progress reporting via drone/photo AI', 'Marketplace for subcontractors and suppliers', 'Series A fundraise'] },
            ].map(p => (
              <div key={p.phase} className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                  <div className="h2" style={{ fontSize: 15, color: p.color }}>{p.phase}</div>
                  <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: '.1em', color: p.color, background: p.color + '18', padding: '3px 8px', borderRadius: 4 }}>{p.tag}</span>
                </div>
                {p.items.map(i => (
                  <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 8, fontSize: 12, color: '#c9d1d9' }}>
                    <span style={{ color: p.color }}>→</span><span>{i}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CLOSING CTA ──────────────────────────────────────── */}
      <div style={{ padding: '80px 24px', textAlign: 'center', background: 'radial-gradient(800px 400px at 50% 100%, rgba(245,158,11,.1), transparent 60%)', position: 'relative', zIndex: 3 }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🏗</div>
          <h2 className="h1" style={{ fontSize: 40, color: '#f9fafb', marginBottom: 16 }}>
            Help us build the future of construction management
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(229,231,235,.7)', lineHeight: 1.7, marginBottom: 32 }}>
            CPOS is being built by people who have lived the pain of managing construction projects with spreadsheets. We know what needs to be built. We just need the runway to build it.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/pricing?tier=pro" className="btn-amber">Subscribe — $29/mo</a>
            <a href="mailto:uddi.cpos@gmail.com?subject=CPOS%20Investment%20Inquiry" className="btn-outline">Talk to the Founder</a>
          </div>
          <div style={{ marginTop: 24, fontSize: 12, color: '#484f58' }}>
            Questions? Email <span style={{ color: '#f59e0b' }}>uddi.cpos@gmail.com</span>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ borderTop: '1px solid #21262d', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <div style={{ fontSize: 11, color: '#30363d' }}>© 2026 CPOS — Construction Project Operating System</div>
        <div style={{ display: 'flex', gap: 16, fontSize: 11 }}>
          <a href="/" style={{ color: '#484f58', textDecoration: 'none' }}>Home</a>
          <a href="/pricing" style={{ color: '#484f58', textDecoration: 'none' }}>Pricing</a>
          <a href={`/dashboard/e03418fd-0ef2-4080-90c6-f18009bb12d1`} style={{ color: '#484f58', textDecoration: 'none' }}>Demo</a>
        </div>
      </div>
    </main>
  )
}
