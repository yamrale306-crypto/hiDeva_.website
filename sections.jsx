/* eslint-disable */
const { useEffect: useEff, useRef: useR, useState: useS, useMemo: useM } = React;

/* ========================================================
   HERO
======================================================== */
function Hero() {
  const [typed, setTyped] = useS("");
  const phrases = useM(
    () => [
      "Stop context-switching. Start shipping.",
      "Your codebase, your agents, your rules.",
      "Write specs. Ship features. Sleep well.",
    ],
    []
  );
  useEff(() => {
    let i = 0, j = 0, deleting = false, t;
    const tick = () => {
      const p = phrases[i];
      j += deleting ? -1 : 1;
      setTyped(p.slice(0, j));
      let delay = deleting ? 28 : 56;
      if (!deleting && j === p.length) { delay = 1800; deleting = true; }
      else if (deleting && j === 0) { deleting = false; i = (i + 1) % phrases.length; delay = 400; }
      t = setTimeout(tick, delay);
    };
    t = setTimeout(tick, 600);
    return () => clearTimeout(t);
  }, [phrases]);

  return (
    <section className="relative pt-28 md:pt-36 pb-20 overflow-hidden">
      <AuroraBG />
      <div className="relative mx-auto max-w-6xl px-5 z-10">
        {/* floating glass chips */}
        <FloatingChip className="left-[4%] top-[10%] floaty" label="agent.plan()" icon="brain" />
        <FloatingChip className="right-[6%] top-[14%] floaty d2" label="build · 84%" icon="cpu" tone="violet" />
        <FloatingChip className="left-[8%] bottom-[8%] floaty d3" label="3 agents online" icon="users" tone="cyan" />
        <FloatingChip className="right-[8%] bottom-[12%] floaty" label="deploy ok" icon="check-circle-2" tone="emerald" />

        <div className="flex flex-col items-center text-center">
          <a href="#" className="badge reveal">
            <span className="dot" />
            New · Agent Memory v2 is here
            <Icon name="arrow-right" size={12} className="text-ink-2" />
          </a>

          <h1
            className="mt-8 font-display text-5xl md:text-7xl font-bold leading-[1.05] text-grad max-w-4xl reveal"
            data-delay="1"
          >
            <span className="block">
              <span className="caret">{typed}</span>
            </span>
            <span className="block text-aurora mt-4">Ship at the speed of thought.</span>
          </h1>

          <p className="mt-8 text-ink-2 text-lg md:text-xl max-w-2xl leading-relaxed reveal" data-delay="2">
            hiDeva is the AI-first workspace where autonomous agents plan, code, debug, and deploy alongside your team —
            all in one fast, focused surface. No 14-tab sprawl. No "works on my machine."
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-3 reveal" data-delay="3">
            <a href="#cta" className="btn btn-primary px-6 py-3.5 text-[15px]">
              Start building free
              <Icon name="arrow-right" size={15} />
            </a>
            <a href="#showcase" className="btn btn-ghost px-6 py-3.5 text-[15px]">
              <Icon name="play" size={14} />
              Watch the demo
            </a>
          </div>

          <p className="mt-6 text-ink-3 text-xs reveal" data-delay="4">
            Free forever for solo developers · No credit card required
          </p>
        </div>

        {/* Product preview */}
        <div className="mt-24 reveal" data-delay="3">
          <ProductPreview />
        </div>

        <TrustedBy />
        {/* Scrolling logos */}
        <div className="mt-16 relative overflow-hidden reveal" data-delay="5">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...TRUSTED, ...TRUSTED].map((n, i) => (
              <span key={`${n}-${i}`} className="font-display text-2xl text-ink-2/40 tracking-tight">
                {n}
              </span>
            ))}
          </div>
        </div>
        {/* Stats row */}
        <div className="mt-24 grid md:grid-cols-3 gap-8 reveal" data-delay="1">
          <div className="glass rounded-2xl p-6">
            <div className="text-3xl font-display font-bold text-aurora">50k+</div>
            <div className="text-ink-2 text-sm mt-1">builders shipped code last month</div>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-3xl font-display font-bold text-aurora">2.4M</div>
            <div className="text-ink-2 text-sm mt-1">deployments and counting</div>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-3xl font-display font-bold text-aurora">99.99%</div>
            <div className="text-ink-2 text-sm mt-1">uptime. We take that seriously.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingChip({ className, label, icon, tone = "blue" }) {
  const toneMap = {
    blue: "text-blue", violet: "text-violet", cyan: "text-cyan", emerald: "text-emerald-400",
  };
  return (
    <div
      className={`hidden lg:flex absolute glass-strong rounded-full px-3 py-2 items-center gap-2 text-xs text-ink-2 ${className}`}
      style={{ zIndex: 5 }}
    >
      <Icon name={icon} size={13} className={toneMap[tone]} />
      <span className="font-mono">{label}</span>
    </div>
  );
}

function ProductPreview() {
   return (
     <div className="relative">
       {/* glow */}
       <div
         aria-hidden
         className="absolute -inset-x-20 -top-10 h-72 blur-3xl opacity-60"
         style={{ background: "radial-gradient(60% 60% at 50% 30%, #4f7cff66 0%, transparent 70%)" }}
       />
       <div className="relative glass-strong rounded-2xl ring-aurora overflow-hidden">
         {/* window chrome */}
         <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 reveal" data-delay="1">
           <div className="flex items-center gap-2">
             <span className="win-dot bg-[#ff5f57]" />
             <span className="win-dot bg-[#febc2e]" />
             <span className="win-dot bg-[#28c840]" />
           </div>
           <div className="flex items-center gap-2 text-ink-3 text-xs font-mono">
             <Icon name="lock" size={11} />
             app.hideva.com / workspace / acme-checkout
           </div>
           <div className="flex items-center gap-2 reveal" data-delay="1">
             <Icon name="search" size={13} className="text-ink-3" />
             <Icon name="settings" size={13} className="text-ink-3" />
           </div>
         </div>
         {/* IDE grid */}
         <div className="grid grid-cols-12 min-h-[460px]">
           {/* file tree */}
           <aside className="col-span-3 border-r border-white/5 p-3 bg-white/[0.015] reveal" data-delay="2">
             <FileTreePreview />
           </aside>
           {/* editor + terminal */}
           <main className="col-span-6 flex flex-col reveal" data-delay="3">
             <CodeEditorPreview />
             <TerminalPreview />
           </main>
           {/* AI chat */}
           <aside className="col-span-3 border-l border-white/5 flex flex-col reveal" data-delay="4">
             <AIChatPreview />
           </aside>
         </div>
       </div>
     </div>
   );
 }

function FileTreePreview() {
  const items = [
    { n: "app", t: "folder", o: true, c: [
      { n: "layout.tsx", t: "f" },
      { n: "page.tsx", t: "f", active: true },
      { n: "loading.tsx", t: "f" },
    ]},
    { n: "components", t: "folder", o: true, c: [
      { n: "Button.tsx", t: "f" },
      { n: "Hero.tsx", t: "f" },
    ]},
    { n: "lib", t: "folder", c: [] },
    { n: "package.json", t: "j" },
    { n: "tsconfig.json", t: "j" },
    { n: "README.md", t: "m" },
  ];
  const renderItem = (it, depth = 0) => {
    const icon = it.t === "folder" ? (it.o ? "folder-open" : "folder") : it.t === "j" ? "braces" : it.t === "m" ? "file-text" : "file-code-2";
    const color = it.t === "folder" ? "text-blue" : it.t === "j" ? "text-amber-400" : it.t === "m" ? "text-ink-2" : "text-cyan";
    return (
      <div key={it.n}>
        <div
          className={`flex items-center gap-2 px-2 py-1 rounded-md text-xs font-mono cursor-default ${
            it.active ? "bg-blue/10 text-ink" : "text-ink-2 hover:bg-white/[0.04]"
          }`}
          style={{ paddingLeft: 8 + depth * 14 }}
        >
          <Icon name={icon} size={13} className={color} />
          <span className="truncate">{it.n}</span>
        </div>
        {it.o && it.c && it.c.map((c) => renderItem(c, depth + 1))}
      </div>
    );
  };
  return (
    <div className="text-ink-2 text-xs">
      <div className="flex items-center justify-between px-2 mb-2">
        <span className="text-[10px] uppercase tracking-widest text-ink-3">Explorer</span>
        <Icon name="plus" size={12} className="text-ink-3" />
      </div>
      <div className="flex items-center gap-1 px-2 mb-3">
        <Icon name="git-branch" size={11} className="text-ink-3" />
        <span className="font-mono text-[11px] text-ink-2">feat/checkout-v2</span>
      </div>
      {items.map((i) => renderItem(i))}
    </div>
  );
}

function CodeEditorPreview() {
  const lines = [
    { n: 1, t: <><span className="text-violet">import</span> {"{ useState }"} <span className="text-violet">from</span> <span className="text-emerald-400">'react'</span></> },
    { n: 2, t: <><span className="text-violet">import</span> {"{ Agent }"} <span className="text-violet">from</span> <span className="text-emerald-400">'@hideva/sdk'</span></> },
    { n: 3, t: "" },
    { n: 4, t: <><span className="text-cyan">export default</span> <span className="text-violet">function</span> <span className="text-amber-300">Checkout</span>() {"{"}</> },
    { n: 5, t: <>  <span className="text-violet">const</span> agent = <span className="text-violet">new</span> <span className="text-amber-300">Agent</span>(<span className="text-emerald-400">'checkout'</span>)</> },
    { n: 6, t: <>  <span className="text-violet">const</span> [items, setItems] = <span className="text-amber-300">useState</span>([])</> },
    { n: 7, t: "" },
    { n: 8, t: <>  <span className="text-ink-3">// agent suggests:</span></>, ghost: true },
    { n: 9, t: <span className="text-ink-3/70 italic">  await agent.optimize(items)</span>, ghost: true },
    { n: 10, t: "" },
    { n: 11, t: <>  <span className="text-violet">return</span> {"("}</> },
    { n: 12, t: <>{"    <"}<span className="text-blue">CartGrid</span>{" items={items} />"}</> },
    { n: 13, t: <>  {")"}</> },
    { n: 14, t: "}" },
  ];
  return (
    <div className="flex-1 min-h-[260px] p-4 font-mono text-[12.5px] leading-[1.7] relative bg-[#06060c]">
      <div className="absolute top-3 right-4 flex items-center gap-2 text-[11px] text-ink-3">
        <span className="badge !py-1 !text-[10px]">
          <span className="dot" />
          Agent watching
        </span>
        <span className="font-mono">page.tsx</span>
      </div>
      <div className="text-ink">
        {lines.map((l) => (
          <div key={l.n} className="flex">
            <span className="text-ink-3/60 w-6 text-right pr-3 select-none">{l.n}</span>
            <span className={l.ghost ? "" : ""}>{l.t || "\u00A0"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TerminalPreview() {
  return (
    <div className="border-t border-white/5 bg-black/40 p-3 font-mono text-[11.5px] text-ink-2 max-h-[150px] overflow-hidden">
      <div className="flex items-center gap-2 mb-2 text-[10px] uppercase tracking-widest text-ink-3">
        <Icon name="terminal" size={11} />
        Terminal
        <span className="ml-auto flex items-center gap-1 text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          ready
        </span>
      </div>
      <div><span className="text-emerald-400">→</span> hideva agent run --plan checkout-v2</div>
      <div className="text-ink-3">▸ analyzing repo · 142 files · 14 routes</div>
      <div className="text-ink-3">▸ drafting migration · payments → stripe v3</div>
      <div><span className="text-blue">✓</span> plan ready · 6 steps · est. 4 min</div>
      <div className="text-ink"><span className="text-violet">$</span> <span className="caret"></span></div>
    </div>
  );
}

function AIChatPreview() {
  const msgs = [
    { who: "user", t: "Refactor the checkout to use Stripe v3 and add idempotency keys." },
    { who: "ai",   t: "Planning… I'll touch 4 files in /app/checkout and add a /lib/stripe wrapper." },
    { who: "ai",   t: "Edits ready. 6 steps, 0 breaking changes. Want me to apply them?", actions: true },
  ];
  return (
    <>
      <div className="flex items-center justify-between px-3 py-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="relative">
            <span className="w-2 h-2 rounded-full bg-cyan block pulse-dot text-cyan"></span>
          </span>
          <span className="text-xs text-ink-2">Deva · thinking</span>
        </div>
        <Icon name="more-horizontal" size={14} className="text-ink-3" />
      </div>
      <div className="flex-1 p-3 space-y-3 text-[12.5px] overflow-hidden">
        {msgs.map((m, i) => (
          <div key={i} className={`flex ${m.who === "user" ? "justify-end" : ""}`}>
            <div
              className={`px-3 py-2 rounded-xl max-w-[230px] leading-snug ${
                m.who === "user"
                  ? "bg-blue/15 text-ink border border-blue/20"
                  : "glass text-ink-2"
              }`}
            >
              {m.t}
              {m.actions && (
                <div className="mt-2 flex gap-1.5">
                  <button className="text-[11px] bg-white/10 hover:bg-white/20 px-2 py-1 rounded-md text-ink">Apply</button>
                  <button className="text-[11px] hover:bg-white/10 px-2 py-1 rounded-md text-ink-2">Preview diff</button>
                </div>
              )}
            </div>
          </div>
        ))}
        <div className="flex gap-2">
          <div className="skeleton h-2 w-16" />
          <div className="skeleton h-2 w-24" />
        </div>
      </div>
      <div className="p-3 border-t border-white/5">
        <div className="glass rounded-xl px-3 py-2 flex items-center gap-2">
          <Icon name="sparkles" size={13} className="text-violet" />
          <span className="text-ink-3 text-xs flex-1">Ask anything · ⌘K</span>
          <Icon name="mic" size={13} className="text-ink-3" />
        </div>
      </div>
    </>
  );
}

/* ========================================================
   FEATURES
======================================================== */
const FEATURES = [
  { i: "code", n: "AI Coding",          d: "Generate, refactor, and review code with agents that actually read your repo — not just the open file.", highlight: true },
  { i: "bug",  n: "Debugging",          d: "Pinpoint stack traces, replay sessions, and let agents propose fixes that don't break things." },
  { i: "scan-line", n: "Project Analysis", d: "Architectural maps, dependency graphs, and risk reports — generated in seconds, not days." },
  { i: "mic",  n: "Voice Assistant",    d: "Talk to Deva while you walk, drive, or stare at the ceiling. Planning, pairing, reviews — hands-free." },
  { i: "layout-dashboard", n: "AI Workspace", d: "Editor, chat, terminal, and preview in one surface. No more 14-tab sprawl." },
  { i: "github", n: "GitHub Integration",  d: "Branches, PRs, reviews, and Actions — all wired in, no webhooks to configure." },
  { i: "search", n: "Smart Search",     d: "Find anything across code, docs, and past conversations. Semantic, not string-matching." },
  { i: "brain",  n: "AI Memory",        d: "Persistent context that learns your codebase, your style, and your team's weird conventions.", highlight: true },
  { i: "users",  n: "Team Collaboration", d: "Live cursors, inline comments, shared agent sessions. Remote pair programming, actually good." },
  { i: "workflow", n: "Automation",     d: "Trigger agents on commits, schedules, or Slack messages. No glue code, no duct tape.", highlight: true },
  { i: "database", n: "Supabase DB",   d: "Integrated PostgreSQL database with real-time subscriptions. Manage your data with instant APIs.", badge: "supabase" },
  { i: "globe", n: "Vercel Deploy",    d: "One-click deployments to the edge. Preview URLs for every PR, zero-config SSL, global CDN.", badge: "vercel" },
];
function Features() {
  return (
    <section id="features" className="relative py-28 overflow-hidden">
      <div className="aurora-stage opacity-40"><div className="aurora-blob b2" /></div>
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="Capabilities"
          title="Ten capabilities. One workspace."
          sub="Everything you need to ship software, in one place. No duct tape, no context-switching, no 'it works on my machine'."
        />
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
           {FEATURES.map((f, idx) => (
             <TiltCard
               key={f.n}
               className={`rounded-2xl p-5 h-full reveal ${f.highlight ? 'glass-strong grad-border ring-aurora sm:col-span-2 lg:col-span-2 lg:row-span-2' : 'glass'}`}
             >
               <div className="flex items-start justify-between">
                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${idx % 3 === 0 ? 'bg-blue/10 text-blue' : idx % 3 === 1 ? 'bg-violet/10 text-violet' : 'bg-cyan/10 text-cyan'}`}>
                   <Icon name={f.i} size={18} />
                 </div>
                 <div className="flex items-center gap-1">
                   {f.badge && (
                     <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${f.badge === 'supabase' ? 'bg-emerald-400/10 text-emerald-300' : 'bg-blue/10 text-blue'}`}>
                       {f.badge === 'supabase' ? 'Supabase' : 'Vercel'}
                     </span>
                   )}
                   <span className="text-ink-3 text-xs font-mono">{String(idx + 1).padStart(2, '0')}</span>
                 </div>
               </div>
               <h3 className={`mt-${f.highlight ? 6 : 5} font-display ${f.highlight ? "text-2xl" : "text-lg"} font-bold text-ink`}>{f.n}</h3>
               <p className="mt-2 text-ink-2 text-sm leading-relaxed">{f.d}</p>
               {idx === 0 && (
                 <div className="mt-6 glass rounded-xl p-4 font-mono text-[11.5px] text-ink-2">
                   <div className="flex items-center gap-2 mb-2">
                     <Icon name="sparkles" size={12} className="text-violet" />
                     <span className="text-ink-3 text-[10px] uppercase tracking-widest">suggestion</span>
                   </div>
                   <div>+ <span className="text-emerald-400">await</span> agent.optimize(<span className="text-amber-300">items</span>)</div>
                   <div>- <span className="text-rose-300/80">items.sort(byPrice)</span></div>
                 </div>
               )}
             </TiltCard>
           ))}
         </div>
      </div>
    </section>
  );
}

/* ========================================================
    PRODUCT SHOWCASE — bigger, with tabs
  ========================================================= */
function Showcase() {
  const tabs = ["Workspace", "Agents", "Memory", "Integrations"];
  const [t, setT] = useS(0);
  return (
    <section id="showcase" className="relative py-28 overflow-hidden">
      <div className="aurora-stage opacity-50"><div className="aurora-blob b3" /></div>
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="The Workspace"
          title="One surface. Every agent. Every artifact."
          sub="Stop juggling tools. hiDeva unifies editing, chat, terminal, preview, and agent state into one calm, keyboard-driven canvas."
        />
        <div className="flex justify-center mb-8 reveal">
          <div className="glass-strong rounded-full p-1 flex">
{tabs.map((x, i) => (
              <button
                key={x}
                onClick={() => setT(i)}
                className={`px-4 py-2 text-sm rounded-full transition ${t === i ? "bg-white/10 text-ink" : "text-ink-2 hover:text-ink"}`}
              >
                {x}
              </button>
            ))}
          </div>
        </div>
        <div className="reveal" data-delay="1">
          {t === 0 && <WorkspacePanel />}
          {t === 1 && <AgentsPanel />}
          {t === 2 && <MemoryPanel />}
          {t === 3 && <IntegrationPanel />}
        </div>
      </div>
    </section>
  );
}

function WorkspacePanel() {
   return (
     <div className="glass-strong rounded-3xl ring-aurora overflow-hidden">
       <div className="grid grid-cols-12 min-h-[560px]">
         <aside className="col-span-3 border-r border-white/5 p-4 bg-white/[0.015] reveal" data-delay="1">
           <FileTreePreview />
           <div className="mt-6 reveal" data-delay="2">
             <div className="text-[10px] uppercase tracking-widest text-ink-3 px-2 mb-2">Agents</div>
             <AgentRow name="Builder" status="working" icon="hammer" />
             <AgentRow name="Reviewer" status="idle" icon="shield-check" />
             <AgentRow name="Debugger" status="paused" icon="bug" />
           </div>
         </aside>
         <main className="col-span-6 flex flex-col reveal" data-delay="2">
           <CodeEditorPreview />
           <TerminalPreview />
         </main>
         <aside className="col-span-3 border-l border-white/5 flex flex-col reveal" data-delay="3">
           <AIChatPreview />
         </aside>
       </div>
       <div className="flex items-center justify-between px-4 py-2 border-t border-white/5 text-[11px] font-mono text-ink-3 reveal" data-delay="4">
         <div className="flex items-center gap-3">
           <span className="flex items-center gap-1"><Icon name="git-branch" size={11} /> feat/checkout-v2</span>
           <span className="flex items-center gap-1"><Icon name="circle-check" size={11} className="text-emerald-400" /> 0 errors</span>
           <span>UTF-8 · LF · TypeScript</span>
         </div>
         <div className="flex items-center gap-3">
           <span>Deva ⌘K</span>
           <span>Ln 9, Col 24</span>
         </div>
       </div>
     </div>
   );
 }

function AgentRow({ name, status, icon }) {
  const tone = status === "working" ? "text-emerald-400" : status === "paused" ? "text-amber-400" : "text-ink-3";
  return (
    <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/[0.04]">
      <Icon name={icon} size={13} className="text-ink-2" />
      <span className="text-xs text-ink-2 flex-1">{name}</span>
      <span className={`text-[10px] font-mono ${tone}`}>{status}</span>
    </div>
  );
}

function AgentsPanel() {
  const agents = [
    { n: "Builder",  r: "Implements features end-to-end", c: "84%", s: "working", i: "hammer", tasks: ["Refactor cart store", "Wire Stripe v3", "Add idempotency"] },
    { n: "Reviewer", r: "Reads diffs and writes feedback",  c: "12%", s: "idle",    i: "shield-check", tasks: ["Review PR #142", "Lint check"] },
    { n: "Debugger", r: "Finds and fixes regressions",      c: "—",   s: "paused",  i: "bug", tasks: ["Replay session 8af"] },
    { n: "Planner",  r: "Drafts plans and estimates",       c: "—",   s: "idle",    i: "compass", tasks: ["Sprint 14 outline"] },
  ];
  return (
    <div className="glass-strong rounded-3xl ring-aurora p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-4">
        {agents.map((a) => (
          <TiltCard key={a.n} className="glass rounded-2xl p-5">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl glass-strong flex items-center justify-center text-violet">
                  <Icon name={a.i} size={18} />
                </div>
                <div>
                   <div className="font-display text-lg font-bold">{a.n}</div>
                  <div className="text-ink-3 text-xs">{a.r}</div>
                </div>
              </div>
              <span className={`text-[11px] font-mono px-2 py-1 rounded-full ${
                a.s === "working" ? "bg-emerald-400/10 text-emerald-300" :
                a.s === "paused"  ? "bg-amber-400/10 text-amber-300" :
                                    "bg-white/5 text-ink-3"
              }`}>{a.s}</span>
            </div>
            <div className="mt-5 h-1.5 rounded-full bg-white/5 overflow-hidden">
              <div
                className="h-full"
                style={{
                  width: a.c === "—" ? "0%" : a.c,
                  background: "linear-gradient(90deg,#4f7cff,#9d5cff,#22d3ee)",
                }}
              />
            </div>
            <ul className="mt-4 space-y-1.5 text-sm text-ink-2">
              {a.tasks.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Icon name="dot" size={14} className="text-ink-3" />
                  {t}
                </li>
              ))}
            </ul>
          </TiltCard>
        ))}
      </div>
    </div>
  );
}

function MemoryPanel() {
  const memories = [
    { t: "Repo conventions", d: "Always uses Zod for validation; prefers server actions over API routes.", k: "code" },
    { t: "Team rituals",     d: "PRs require 2 reviewers; deploys go Tuesdays at 10am PT.",                k: "users" },
    { t: "Design tokens",    d: "Brand uses Inter Tight, --blue #4f7cff, 12px base radius.",               k: "palette" },
    { t: "Past decisions",   d: "Migrated from Prisma to Drizzle Q1 — keep both adapters thin.",           k: "history" },
  ];
  return (
    <div className="glass-strong rounded-3xl ring-aurora p-6 md:p-10">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="text-[10px] uppercase tracking-widest text-ink-3 mb-3">AI Memory</div>
           <h3 className="font-display text-3xl font-bold text-grad leading-tight">A mind that grows with your team.</h3>
          <p className="mt-4 text-ink-2 leading-relaxed">
            hiDeva remembers your codebase, your conventions, and your decisions — so every agent
            you spin up starts already fluent in your context.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            <Stat n="14k" l="memories" />
            <Stat n="38" l="repos" />
            <Stat n="0.2s" l="recall" />
          </div>
        </div>
        <div className="space-y-3">
          {memories.map((m, i) => (
            <div key={m.t} className="glass rounded-2xl p-4 flex items-start gap-3">
              <div className="w-9 h-9 shrink-0 rounded-xl glass-strong flex items-center justify-center text-cyan">
                <Icon name={m.k} size={16} />
              </div>
              <div>
                <div className="text-ink font-medium text-sm">{m.t}</div>
                <div className="text-ink-2 text-sm mt-0.5 leading-snug">{m.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
function Stat({ n, l }) {
  return (
    <div className="glass rounded-xl py-3">
       <div className="font-display text-2xl font-bold text-aurora">{n}</div>
      <div className="text-ink-3 text-xs uppercase tracking-widest mt-1">{l}</div>
    </div>
  );
}

function DeployPanel() {
  const steps = [
    { t: "build",   s: "ok", l: "32s" },
    { t: "test",    s: "ok", l: "1m 12s" },
    { t: "preview", s: "ok", l: "8s" },
    { t: "deploy",  s: "live", l: "12s" },
  ];
  return (
    <div className="glass-strong rounded-3xl ring-aurora p-6 md:p-10">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div>
          <div className="text-[10px] uppercase tracking-widest text-ink-3 mb-2">Deploy</div>
           <h3 className="font-display text-2xl font-bold">acme-checkout · production</h3>
          <p className="text-ink-2 text-sm mt-1">Triggered by Deva · 2 min ago · build #1402</p>
        </div>
        <a href="#" className="btn btn-ghost text-sm">Open dashboard <Icon name="external-link" size={13} /></a>
      </div>
      <div className="grid md:grid-cols-4 gap-3">
        {steps.map((s) => (
          <div key={s.t} className="glass rounded-2xl p-4">
            <div className="flex items-center justify-between">
              <div className="text-ink-2 text-sm">{s.t}</div>
              <span className={`w-2 h-2 rounded-full ${
                s.s === "live" ? "bg-emerald-400 shadow-[0_0_12px] shadow-emerald-400" : "bg-emerald-400"
              }`} />
            </div>
            <div className="mt-3 font-display text-xl font-bold">{s.l}</div>
            <div className="mt-3 h-1 rounded-full bg-white/5 overflow-hidden">
              <div className="h-full w-full" style={{ background: "linear-gradient(90deg,#22d3ee,#4f7cff)" }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 glass rounded-2xl p-5">
        <div className="flex items-center gap-2 text-emerald-300 text-sm">
          <Icon name="check-circle-2" size={15} />
          Deployed to <span className="font-mono text-ink">acme-checkout.hideva.com</span>
        </div>
        <div className="mt-3 grid md:grid-cols-4 gap-4 text-sm">
          <div><div className="text-ink-3 text-xs">Region</div><div className="text-ink">iad1 · cdg1</div></div>
          <div><div className="text-ink-3 text-xs">Avg TTFB</div><div className="text-ink">38ms</div></div>
          <div><div className="text-ink-3 text-xs">Lighthouse</div><div className="text-ink">98 / 100 / 100</div></div>
          <div><div className="text-ink-3 text-xs">Errors (24h)</div><div className="text-ink">0</div></div>
        </div>
      </div>
    </div>
  );
}

function IntegrationPanel() {
   const integrations = [
     { n: "Supabase", d: "Database & Auth", i: "database", c: "emerald-400" },
     { n: "Vercel",   d: "Deployments",   i: "globe",     c: "blue"      },
   ];
   return (
     <div className="glass-strong rounded-3xl ring-aurora p-6 md:p-10">
       <div className="text-[10px] uppercase tracking-widest text-ink-3 mb-3 reveal">Integrations</div>
       <h3 className="font-display text-3xl font-bold text-grad reveal" data-delay="1">Connect your stack.</h3>
       <p className="mt-4 text-ink-2 leading-relaxed max-w-xl reveal" data-delay="2">
         One-click integrations for Supabase databases, Vercel deployments, and more.
         All state syncs automatically across agents.
       </p>
       <div className="mt-8 grid md:grid-cols-2 gap-4">
         {integrations.map((int, idx) => (
           <TiltCard key={int.n} className="glass rounded-2xl p-5 flex items-center gap-4 reveal" data-delay={idx + 1}>
             <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-${int.c}`}>
               <Icon name={int.i} size={24} />
             </div>
            <div>
              <div className="font-display font-bold">{int.n}</div>
              <div className="text-ink-2 text-sm">{int.d}</div>
            </div>
          </TiltCard>
        ))}
      </div>
    </div>
  );
}

/* ========================================================
   WHY hiDeva
======================================================== */
const WHYS = [
  { i: "rocket",       n: "10× faster shipping",    d: "Agents draft, review, and merge PRs while you stay in flow. Your CI becomes your coworker." },
  { i: "brain-circuit",n: "Understands your codebase", d: "Repo-wide context, conventions, and past decisions — baked in, not pasted in." },
  { i: "layers",       n: "One workspace, not five",  d: "Stop paying for six tools that don't talk to each other." },
  { i: "shield",       n: "Secure by default",       d: "SOC 2 Type II. End-to-end encryption. Isolated agent sandboxes. Your code never trains our models." },
  { i: "monitor-smartphone", n: "Actually cross-platform", d: "Mac, Windows, Linux, web, iPad — same workspace, same state, no 'works on my machine' excuses." },
  { i: "zap",          n: "Fast enough to feel instant", d: "Local-first cache. Sub-50ms keystrokes even when you're deploying from a coffee shop." },
];
function Why() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="Why hiDeva"
          title="The advantages compound."
          sub="A workspace built around autonomous agents — not bolted on after the fact. Every feature reinforces the others."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {WHYS.map((w, i) => (
            <TiltCard key={w.n} className="glass rounded-2xl p-6 reveal" data-delay={(i % 3) + 1}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl grad-border bg-white/[0.03] flex items-center justify-center text-aurora">
                  <Icon name={w.i} size={20} />
                </div>
                <h3 className="font-display text-lg font-bold">{w.n}</h3>
              </div>
              <p className="text-ink-2 text-sm leading-relaxed">{w.d}</p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================================
   WORKFLOW TIMELINE
======================================================== */
const STEPS = [
  { n: "Idea",    i: "lightbulb",    d: "Type a prompt, paste a ticket, or point at a bug. Deva figures out what you actually want." },
  { n: "Plan",    i: "list-checks",  d: "Review the steps, scope, and estimates before any code gets touched. Reject, reorder, or approve." },
  { n: "Build",   i: "hammer",       d: "Agents implement in parallel with safe, reviewable diffs. You stay in the loop, not out of it." },
  { n: "Debug",   i: "bug",          d: "Replay sessions, trace failures, and let agents propose fixes that don't introduce new bugs." },
  { n: "Deploy",  i: "rocket",       d: "Preview environments and zero-downtime production rollouts. Ship Tuesday, not 'next quarter'." },
  { n: "Improve", i: "trending-up",  d: "Telemetry feeds back into memory. Every deployment makes the next one faster." },
];
function Workflow() {
  return (
    <section id="workflow" className="relative py-28 overflow-hidden">
      <div className="aurora-stage opacity-40"><div className="aurora-blob b1" /></div>
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="The workflow"
          title="From idea to production."
          sub="Every agent step is observable, reversible, and shaped by your team's history. No black boxes."
        />
        {/* Horizontal pipeline (desktop) */}
        <div className="hidden md:block relative">
          <svg className="absolute top-[36px] left-0 w-full h-2" viewBox="0 0 1200 8" preserveAspectRatio="none">
            <defs>
              <linearGradient id="pipeg" x1="0" x2="1">
                <stop offset="0" stopColor="#4f7cff" />
                <stop offset=".5" stopColor="#9d5cff" />
                <stop offset="1" stopColor="#22d3ee" />
              </linearGradient>
            </defs>
            <line x1="0" y1="4" x2="1200" y2="4" stroke="url(#pipeg)" strokeWidth="2" strokeLinecap="round" opacity=".12" />
            <line x1="0" y1="4" x2="1200" y2="4" stroke="url(#pipeg)" strokeWidth="2" strokeLinecap="round" className="dash-flow" />
          </svg>
          <div className="grid grid-cols-6 relative">
            {STEPS.map((s, i) => (
              <div key={s.n} className="flex flex-col items-center text-center px-2 reveal" data-delay={i}>
                <div className={`relative w-[72px] h-[72px] rounded-2xl flex items-center justify-center mb-5 ${i % 2 === 0 ? 'glass-strong grad-border' : 'bg-white/[0.03] border border-white/10'}`}>
                  <Icon name={s.i} size={22} className="text-aurora" />
                  <span className="absolute -top-2 -right-2 text-[10px] font-mono bg-bg border border-white/10 rounded-full px-1.5 py-0.5 text-ink-2">0{i + 1}</span>
                </div>
                <div className="font-display font-bold">{s.n}</div>
                <div className="text-ink-2 text-xs mt-2 leading-snug max-w-[160px]">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Vertical (mobile) */}
        <div className="md:hidden space-y-4">
          {STEPS.map((s, i) => (
            <div key={s.n} className="flex gap-4 reveal">
              <div className="w-12 h-12 shrink-0 rounded-2xl glass-strong flex items-center justify-center text-aurora">
                <Icon name={s.i} size={18} />
              </div>
              <div>
                <div className="font-display font-bold">{s.n}</div>
                <div className="text-ink-2 text-sm mt-1">{s.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================================
   TESTIMONIALS
======================================================== */
const TESTIMONIALS = [
  { n: "Sarah Chen", r: "Staff Eng · Linear",  a: "SC", c: "violet",
    q: "We cut our review cycle from 4 days to same-day. The agents catch things humans miss — and they don't get tired.", s: 5 },
  { n: "Marcus Webb",  r: "CTO · Raycast",           a: "MW", c: "blue",
    q: "Memory is the feature everyone sleeps on until they try it. Then they can't imagine going back.", s: 5 },
  { n: "Priya Nair",  r: "Founder · Resend",   a: "PN", c: "cyan",
    q: "Built our entire checkout flow in a weekend. Solo. The agents handled the Stripe integration while I slept.", s: 5 },
  { n: "Tomás Ruiz",  r: "Eng Lead · Supabase",     a: "TR", c: "violet",
    q: "Voice mode during design reviews is surprisingly good. We do them while walking the dog now.", s: 5 },
  { n: "Aisha Patel",   r: "Principal · Figma", a: "AP", c: "blue",
    q: "Replayable sessions changed how we debug. No more 'it worked on my branch' — just replay and see.", s: 5 },
  { n: "Jake Moreau", r: "PM · Notion",        a: "JM", c: "cyan",
    q: "Spec → plan → preview is a real loop now. PMs can actually review before engineers write a single line.", s: 4 },
];
function Testimonials() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="aurora-stage opacity-40"><div className="aurora-blob b3" /></div>
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="Loved by builders"
          title="Teams ship more, sleep more."
          sub="Real people, real teams, real results. No stock photos, no fake quotes."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <TiltCard key={t.n} className={`glass rounded-2xl p-6 flex flex-col reveal ${i % 4 === 0 ? 'md:col-span-2' : ''}`} data-delay={(i % 3) + 1}>
              <div className="flex gap-1 text-amber-300 mb-4">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Icon key={k} name="star" size={13} className={k < t.s ? "text-amber-300" : "text-ink-3/40"} />
                ))}
              </div>
              <p className="text-ink text-[15px] leading-relaxed flex-1">"{t.q}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full grid place-items-center font-display font-bold text-sm`}
                     style={{
                       background: t.c === "violet"
                         ? "linear-gradient(140deg,#9d5cff,#4f7cff)"
                         : t.c === "blue"
                         ? "linear-gradient(140deg,#4f7cff,#22d3ee)"
                         : "linear-gradient(140deg,#22d3ee,#9d5cff)",
                     }}>
                  {t.a}
                </div>
                <div>
                  <div className="text-ink text-sm font-medium">{t.n}</div>
                  <div className="text-ink-3 text-xs">{t.r}</div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================================
   PRICING
======================================================== */
const PLANS = [
  {
    n: "Free", p: "$0", per: "forever",
    d: "For solo devs and side projects. No time limits.",
    f: ["1 agent at a time", "5 repos · 200 messages / mo", "Community support", "Local-first sync"],
    cta: "Start free",
  },
  {
    n: "Pro", p: "$19", per: "per user / month", featured: true,
    d: "For teams shipping real software.",
    f: ["Unlimited agents", "Unlimited repos · unlimited memory", "Voice & desktop apps", "PR reviews + session replay", "Priority support"],
    cta: "Start Pro trial",
  },
  {
    n: "Enterprise", p: "Custom", per: "talk to sales",
    d: "For orgs that need compliance and control.",
    f: ["SSO/SAML · SCIM", "VPC & on-prem deploy", "Custom model routing", "SOC 2 · HIPAA · ISO 27001", "Dedicated CSM"],
    cta: "Contact sales",
  },
];
function Pricing() {
  const [yearly, setYearly] = useS(true);
  return (
    <section id="pricing" className="relative py-28 overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="Pricing"
          title="Simple plans. No surprises."
          sub="Free for solo devs. Predictable per-seat for teams. Custom for enterprises with serious requirements."
        />
        <div className="flex justify-center mb-12 reveal">
          <div className="glass-strong rounded-full p-1 flex text-sm">
            <button
              onClick={() => setYearly(false)}
              className={`px-4 py-1.5 rounded-full ${!yearly ? "bg-white/10 text-ink" : "text-ink-2"}`}
            >Monthly</button>
            <button
              onClick={() => setYearly(true)}
              className={`px-4 py-1.5 rounded-full flex items-center gap-2 ${yearly ? "bg-white/10 text-ink" : "text-ink-2"}`}
            >
              Yearly
              <span className="text-[10px] font-mono text-cyan bg-cyan/10 px-1.5 py-0.5 rounded">-20%</span>
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {PLANS.map((p, i) => {
            const price = p.p === "$19" && !yearly ? "$24" : p.p;
            const bgClass = i === 0 ? "glass" : i === 1 ? "glass-strong grad-border ring-aurora" : "glass";
            return (
              <div
                key={p.n}
                className={`relative rounded-3xl p-7 flex flex-col reveal ${bgClass}`}
                data-delay={i + 1}
              >
                {i === 1 && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-mono px-3 py-1 rounded-full bg-bg border border-blue/40 text-aurora">
                    Most popular
                  </span>
                )}
                <div className="font-display text-xl font-bold">{p.n}</div>
                <p className="text-ink-2 text-sm mt-1">{p.d}</p>
                <div className="mt-6 flex items-baseline gap-2">
                   <span className="font-display text-5xl font-bold text-grad">{price}</span>
                  <span className="text-ink-3 text-sm">/ {p.per}</span>
                </div>
                <ul className="mt-7 space-y-2.5 flex-1">
                  {p.f.map((x) => (
                    <li key={x} className="flex items-start gap-2.5 text-sm text-ink-2">
                      <Icon name="check" size={15} className="text-cyan mt-[2px]" />
                      {x}
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className={`mt-7 btn justify-center py-3 ${i === 1 ? "btn-primary" : "btn-ghost"}`}
                >
                  {p.cta}
                  <Icon name="arrow-right" size={14} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ========================================================
   FAQ
======================================================== */
const FAQS = [
  { q: "What makes hiDeva different from Copilot or Cursor?",
    a: "Those are autocomplete and chat overlays. hiDeva is a full workspace where autonomous agents read your entire repo, remember past decisions, and ship code through the same review process your team already uses." },
  { q: "Which models do the agents use?",
    a: "We route across frontier models — Claude, GPT-4, and our own fine-tuned specialists for code. Enterprise plans support BYOK and VPC deployment." },
  { q: "Is my code used to train models?",
    a: "No. Your code, prompts, and memories stay yours. We're SOC 2 Type II audited and we never train on customer data." },
  { q: "Can I use hiDeva with my existing editor?",
    a: "Yes. Native apps for macOS, Windows, Linux, and web. Extensions for VS Code, JetBrains, and Neovim that share the same agent state." },
  { q: "How does pricing work?",
    a: "Free for solo devs. Pro is $19/seat/month billed annually ($24 monthly). Enterprise is custom — includes SSO, VPC, and a dedicated CSM." },
  { q: "Do you have a free trial?",
    a: "Pro includes a 14-day trial, no credit card required. The Free plan is permanently free — no time limits, no feature gating." },
  { q: "What about working offline?",
    a: "hiDeva is local-first. The editor, terminal, and memory cache all work offline. Agents pick up where they left off when you reconnect." },
  { q: "How do I migrate from another tool?",
    a: "Point hiDeva at a repo and it indexes automatically. One-click importers for Cursor sessions, Linear tickets, and Notion docs are in beta." },
];
function FAQ() {
  const [open, setOpen] = useS(0);
  return (
    <section id="faq" className="relative py-28 overflow-hidden">
      <div className="relative mx-auto max-w-3xl px-5">
        <SectionHead
          eyebrow="FAQ"
          title="Questions, answered."
          sub="The stuff people actually ask. Not the FAQ we wish they'd ask."
        />
        <div className="space-y-2 reveal">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={`glass rounded-2xl overflow-hidden ${isOpen ? "faq-open" : ""}`}>
                <button
                  className="w-full text-left flex items-center justify-between gap-4 px-5 py-4"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-ink font-medium text-[15px]">{f.q}</span>
                  <span className="chev text-ink-2"><Icon name="chevron-down" size={16} /></span>
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-ink-2 text-sm leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ========================================================
   FINAL CTA
======================================================== */
function FinalCTA() {
  return (
    <section id="cta" className="relative pt-16 pb-8">
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="relative overflow-hidden rounded-4xl glass-strong p-10 md:p-16 text-center">
          <div className="aurora-stage opacity-60"><div className="aurora-blob b1" /><div className="aurora-blob b2" /><div className="aurora-blob b3" /></div>
          <div className="relative">
            <span className="badge"><span className="dot" /> Beta · Limited seats</span>
            <h2 className="mt-6 font-display text-4xl md:text-6xl font-bold text-grad leading-[1.05] max-w-3xl mx-auto">
              Start building with agents today.
            </h2>
            <p className="mt-5 text-ink-2 text-base md:text-lg max-w-xl mx-auto">
              Free forever for solo developers. 14-day Pro trial for teams. No credit card required.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="#" className="btn btn-primary px-6 py-3 text-[15px]">
                Get started free
                <Icon name="arrow-right" size={15} />
              </a>
              <a href="#" className="btn btn-ghost px-6 py-3 text-[15px]">
                <Icon name="book-open" size={14} />
                View documentation
              </a>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto text-center">
              <Stat n="50k+" l="builders" />
              <Stat n="2.4M" l="deploys" />
              <Stat n="99.99%" l="uptime" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- expose ---------- */
Object.assign(window, {
  Hero, Features, Showcase, Why, Workflow, Testimonials, Pricing, FAQ, FinalCTA, IntegrationPanel,
});
