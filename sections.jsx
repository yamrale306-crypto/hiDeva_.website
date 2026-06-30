/* eslint-disable */
const { useEffect: useEff, useRef: useR, useState: useS, useMemo: useM } = React;

/* ========================================================
   HERO
======================================================== */
function Hero() {
  const [typed, setTyped] = useS("");
  const phrases = useM(
    () => [
      "Automate every phone call with AI.",
      "Your AI employee answers 24/7.",
      "Never miss another call.",
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
        <div className="flex flex-col items-center text-center">
          <a href="#" className="badge reveal">
            <span className="dot" />
            AI Call Assistant · Now live
            <Icon name="arrow-right" size={12} className="text-ink-2" />
          </a>

          <h1
            className="mt-8 font-display text-5xl md:text-7xl font-bold leading-[1.05] text-grad max-w-4xl reveal"
            data-delay="1"
          >
            <span className="block">
              <span className="caret">{typed}</span>
            </span>
            <span className="block text-aurora mt-4">Transform phone calls into intelligent business interactions.</span>
          </h1>

          <p className="mt-8 text-ink-2 text-lg md:text-xl max-w-2xl leading-relaxed reveal" data-delay="2">
            hiDeva Call Assistant is an enterprise-grade AI voice platform that automates inbound and outbound phone communications through natural, human-like conversations.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-3 reveal" data-delay="3">
            <a href="#cta" className="btn btn-primary px-6 py-3.5 text-[15px]">
              Get started free
              <Icon name="arrow-right" size={15} />
            </a>
            <a href="#showcase" className="btn btn-ghost px-6 py-3.5 text-[15px]">
              <Icon name="play" size={14} />
              Watch the demo
            </a>
          </div>

          <p className="mt-6 text-ink-3 text-xs reveal" data-delay="4">
            Free forever for small businesses · No credit card required
          </p>
        </div>

        <div className="mt-24 reveal" data-delay="3">
          <CallPreview />
        </div>

        <TrustedBy />
        <div className="mt-16 relative overflow-hidden reveal" data-delay="5">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...TRUSTED, ...TRUSTED].map((n, i) => (
              <span key={`${n}-${i}`} className="font-display text-2xl text-ink-2/40 tracking-tight">
                {n}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-24 grid md:grid-cols-3 gap-8 reveal" data-delay="1">
          <div className="glass rounded-2xl p-6">
            <div className="text-3xl font-display font-bold text-aurora">10k+</div>
            <div className="text-ink-2 text-sm mt-1">business calls automated</div>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-3xl font-display font-bold text-aurora">98%</div>
            <div className="text-ink-2 text-sm mt-1">customer satisfaction</div>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-3xl font-display font-bold text-aurora">24/7</div>
            <div className="text-ink-2 text-sm mt-1">always available</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CallPreview() {
   return (
     <div className="relative">
       <div
         aria-hidden
         className="absolute -inset-x-20 -top-10 h-72 blur-3xl opacity-60"
         style={{ background: "radial-gradient(60% 60% at 50% 30%, #4f7cff66 0%, transparent 70%)" }}
       />
       <div className="relative glass-strong rounded-2xl ring-aurora overflow-hidden max-w-3xl mx-auto">
         <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 reveal" data-delay="1">
           <div className="flex items-center gap-2">
             <span className="win-dot bg-[#ff5f57]" />
             <span className="win-dot bg-[#febc2e]" />
             <span className="win-dot bg-[#28c840]" />
           </div>
           <div className="flex items-center gap-2 text-ink-3 text-xs font-mono">
             <Icon name="phone" size={11} />
             call.hideva.com / dashboard
           </div>
           <div className="flex items-center gap-2 reveal" data-delay="1">
             <Icon name="settings" size={13} className="text-ink-3" />
           </div>
         </div>
         <div className="p-6 md:p-8">
           <div className="flex items-center gap-4 mb-6">
             <div className="w-12 h-12 rounded-xl glass-strong flex items-center justify-center text-cyan">
               <Icon name="phone" size={24} />
             </div>
             <div>
               <div className="font-display text-xl font-bold">Inbound Call</div>
               <div className="text-ink-3 text-xs">+1 (555) 123-4567 · 2 min ago</div>
             </div>
             <span className="ml-auto text-[11px] font-mono px-2 py-1 rounded-full bg-emerald-400/10 text-emerald-300">
               completed
             </span>
           </div>
           <div className="grid md:grid-cols-3 gap-4">
             <div className="glass rounded-xl p-4">
               <div className="text-[10px] uppercase tracking-widest text-ink-3 mb-2">Intent</div>
               <div className="text-ink font-medium">Schedule appointment</div>
             </div>
             <div className="glass rounded-xl p-4">
               <div className="text-[10px] uppercase tracking-widest text-ink-3 mb-2">Action</div>
               <div className="text-ink font-medium">Calendar booked</div>
             </div>
             <div className="glass rounded-xl p-4">
               <div className="text-[10px] uppercase tracking-widest text-ink-3 mb-2">Sentiment</div>
               <div className="text-emerald-400 font-medium">Positive</div>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
 }

/* ========================================================
   FEATURES
======================================================== */
const FEATURES = [
  { i: "mic", n: "Intelligent Voice", d: "Human-like conversations with real-time speech recognition and natural interruption handling.", highlight: true },
  { i: "inbox", n: "Inbound Automation", d: "Answers calls, understands intent, schedules appointments, and processes requests autonomously." },
  { i: "phone-outgoing", n: "Outbound Automation", d: "Proactively calls for reminders, follow-ups, lead qualification, and surveys." },
  { i: "camera", n: "Snapshot System", d: "Automatic call recording, transcription, and intelligence extraction for every conversation.", highlight: true },
  { i: "brain", n: "AI Memory", d: "Persistent customer history and conversation context for personalized interactions." },
  { i: "book-text", n: "Knowledge Engine", d: "Upload documents, websites, and FAQs for real-time intelligent responses." },
  { i: "workflow", n: "Workflow Engine", d: "Execute business actions during calls: bookings, payments, tickets, emails." },
  { i: "calendar", n: "Calendar Management", d: "Integrates with Google, Outlook, and Apple Calendar for appointment scheduling." },
  { i: "users-round", n: "CRM Integration", d: "Connects with Salesforce, HubSpot, Zoho, and Pipedrive for seamless data sync." },
  { i: "shield", n: "Call Screening", d: "Spam detection, VIP recognition, and intelligent call routing." },
  { i: "globe", n: "Multilingual", d: "Supports 20+ languages with live translation and accent recognition." },
  { i: "bar-chart-3", n: "Analytics", d: "Call volume, resolution rates, satisfaction scores, and AI performance metrics." },
];
function Features() {
  return (
    <section id="features" className="relative py-28 overflow-hidden">
      <div className="aurora-stage opacity-40"><div className="aurora-blob b2" /></div>
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="Capabilities"
          title="Everything you need for AI-powered calls."
          sub="From intelligent voice conversations to workflow automation, all in one enterprise-grade platform."
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
                <span className="text-ink-3 text-xs font-mono">{String(idx + 1).padStart(2, '0')}</span>
              </div>
              <h3 className={`mt-${f.highlight ? 6 : 5} font-display ${f.highlight ? "text-2xl" : "text-lg"} font-bold text-ink`}>{f.n}</h3>
              <p className="mt-2 text-ink-2 text-sm leading-relaxed">{f.d}</p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================================
   INBOUND CALLS
======================================================== */
function InboundPanel() {
  const items = [
    { n: "Calls answered", v: "24", icon: "phone" },
    { n: "Appointments scheduled", v: "18", icon: "calendar" },
    { n: "Tickets created", v: "12", icon: "ticket" },
    { n: "Avg response time", v: "3s", icon: "zap" },
  ];
  return (
    <div className="glass-strong rounded-3xl ring-aurora p-8">
      <div className="text-[10px] uppercase tracking-widest text-ink-3 mb-3">Inbound Automation</div>
      <h3 className="font-display text-3xl font-bold text-grad mb-6">Never miss a call again.</h3>
      <p className="text-ink-2 mb-8">The AI automatically answers incoming calls and handles customer requests 24/7.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((it) => (
          <div key={it.n} className="glass rounded-xl p-4 text-center">
            <Icon name={it.icon} size={20} className="text-cyan mx-auto mb-2" />
            <div className="font-display text-2xl font-bold text-aurora">{it.v}</div>
            <div className="text-ink-2 text-xs mt-1">{it.n}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ========================================================
   OUTBOUND CALLS
======================================================== */
function OutboundPanel() {
  const calls = [
    { t: "Appointment reminder", s: "sent", i: "calendar" },
    { t: "Payment follow-up", s: "delivered", i: "credit-card" },
    { t: "Customer survey", s: "completed", i: "clipboard" },
  ];
  return (
    <div className="glass-strong rounded-3xl ring-aurora p-8">
      <div className="text-[10px] uppercase tracking-widest text-ink-3 mb-3">Outbound Automation</div>
      <h3 className="font-display text-3xl font-bold text-grad mb-6">Proactive customer engagement.</h3>
      <p className="text-ink-2 mb-8">Initiate calls for appointments, follow-ups, and more.</p>
      <div className="space-y-3">
        {calls.map((c) => (
          <div key={c.t} className="glass rounded-xl px-4 py-3 flex items-center gap-3">
            <Icon name={c.i} size={16} className="text-violet" />
            <div className="flex-1 text-ink text-sm">{c.t}</div>
            <span className="text-[10px] font-mono px-2 py-1 rounded-full bg-emerald-400/10 text-emerald-300">{c.s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ========================================================
   KNOWLEDGE ENGINE
======================================================== */
function KnowledgePanel() {
  const sources = [
    { n: "Product FAQs", t: "127 docs", i: "file-text" },
    { n: "Pricing guides", t: "24 pages", i: "dollar-sign" },
    { n: "Policies", t: "8 docs", i: "shield" },
  ];
  return (
    <div className="glass-strong rounded-3xl ring-aurora p-8">
      <div className="text-[10px] uppercase tracking-widest text-ink-3 mb-3">Knowledge Base</div>
      <h3 className="font-display text-3xl font-bold text-grad mb-6">Instant answers, always accurate.</h3>
      <p className="text-ink-2 mb-8">Upload documents and FAQs for the AI to retrieve during calls.</p>
      <div className="space-y-3">
        {sources.map((s) => (
          <div key={s.n} className="glass rounded-xl px-4 py-3 flex items-center gap-3">
            <Icon name={s.i} size={16} className="text-cyan" />
            <div>
              <div className="text-ink font-medium text-sm">{s.n}</div>
              <div className="text-ink-2 text-xs">{s.t}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ========================================================
   WORKFLOW ENGINE
======================================================== */
function WorkflowPanel() {
  const actions = [
    { i: "calendar", t: "Booked appointment for Dr. Smith" },
    { i: "send", t: "Email confirmation sent to customer" },
    { i: "ticket", t: "Support ticket #1247 created" },
  ];
  return (
    <div className="glass-strong rounded-3xl ring-aurora p-8">
      <div className="text-[10px] uppercase tracking-widest text-ink-3 mb-3">Workflow Engine</div>
      <h3 className="font-display text-3xl font-bold text-grad mb-6">Actions that follow through.</h3>
      <p className="text-ink-2 mb-8">Execute business operations during conversations.</p>
      <div className="space-y-3">
        {actions.map((a) => (
          <div key={a.t} className="glass rounded-xl px-4 py-3 flex items-center gap-3">
            <Icon name={a.i} size={16} className="text-violet" />
            <div className="text-ink-2 text-sm">{a.t}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ========================================================
   SNAPSHOT SYSTEM — Call Intelligence
======================================================== */
function SnapshotsPanel() {
  const snapshots = [
    { t: "Call Summary", d: "Customer called about appointment rescheduling. Successfully moved from Tuesday to Thursday.", i: "file-text" },
    { t: "Transcript", d: "Full conversation transcript with timestamps and speaker identification.", i: "message-square" },
    { t: "Action Items", d: "Follow-up email sent, calendar updated, SMS confirmation dispatched.", i: "check-square" },
    { t: "Sentiment", d: "Positive (0.87) - Customer satisfied with new appointment time.", i: "smile" },
  ];
  return (
    <div className="glass-strong rounded-3xl ring-aurora p-8">
      <div className="text-[10px] uppercase tracking-widest text-ink-3 mb-3">Call Snapshots</div>
      <h3 className="font-display text-3xl font-bold text-grad mb-6">Every call, captured and actionable.</h3>
      <p className="text-ink-2 mb-8">Automatic recording, transcription, and intelligence extraction for every conversation.</p>
      <div className="grid md:grid-cols-2 gap-4">
        {snapshots.map((s) => (
          <div key={s.t} className="glass rounded-xl p-4 flex items-start gap-3">
            <Icon name={s.i} size={18} className="text-violet shrink-0 mt-0.5" />
            <div>
              <div className="text-ink font-medium text-sm">{s.t}</div>
              <div className="text-ink-2 text-xs mt-1">{s.d}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ========================================================
   PRODUCT SHOWCASE — with tabs for Call Assistant features
======================================================== */
function Showcase() {
  const tabs = ["Inbound", "Outbound", "Knowledge", "Workflow", "Snapshots", "Analytics"];
  const [t, setT] = useS(0);
  return (
    <section id="showcase" className="relative py-28 overflow-hidden">
      <div className="aurora-stage opacity-50"><div className="aurora-blob b3" /></div>
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="Platform"
          title="One platform. Every conversation."
          sub="From answering calls to generating insights, hiDeva handles it all autonomously."
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
          {t === 0 && <InboundPanel />}
          {t === 1 && <OutboundPanel />}
          {t === 2 && <KnowledgePanel />}
          {t === 3 && <WorkflowPanel />}
          {t === 4 && <SnapshotsPanel />}
          {t === 5 && <AnalyticsPanel />}
        </div>
      </div>
    </section>
  );
}

function AnalyticsPanel() {
  const stats = [
    { n: "84%", l: "resolution rate" },
    { n: "2.1m", l: "total calls" },
    { n: "4.2/5", l: "satisfaction" },
  ];
  return (
    <div className="glass-strong rounded-3xl ring-aurora p-8">
      <div className="text-[10px] uppercase tracking-widest text-ink-3 mb-3">Analytics Dashboard</div>
      <h3 className="font-display text-3xl font-bold text-grad mb-6">Data-driven insights.</h3>
      <p className="text-ink-2 mb-8">Track performance and identify opportunities.</p>
      <div className="grid grid-cols-3 gap-4">
        {stats.map((s) => (
          <div key={s.l} className="glass rounded-xl py-4 text-center">
            <div className="font-display text-2xl font-bold text-aurora">{s.n}</div>
            <div className="text-ink-3 text-xs uppercase tracking-widest mt-1">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ========================================================
   WHY hiDeva CALL ASSISTANT
======================================================= */
const WHYS = [
  { i: "clock", n: "24/7 Availability", d: "Never miss a call. The AI answers around the clock with zero wait time." },
  { i: "phone", n: "Natural Conversations", d: "Human-like dialogue that understands context and handles interruptions gracefully." },
  { i: "zap", n: "Instant Setup", d: "Connect your phone number in minutes. No infrastructure to manage." },
  { i: "shield", n: "Enterprise Security", d: "End-to-end encryption, role-based access, SOC 2 compliant." },
  { i: "globe", n: "Multi-language", d: "Support for 20+ languages with live translation capabilities." },
  { i: "workflow", n: "Full Automation", d: "From call to action — bookings, payments, tickets, all handled." },
];
function Why() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="Why hiDeva"
          title="Calls that work for you."
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
  { n: "Connect", i: "phone", d: "Link your phone number or get a new one instantly." },
  { n: "Configure", i: "settings", d: "Set up knowledge base, workflows, and business hours." },
  { n: "Deploy", i: "rocket", d: "AI goes live and starts handling calls immediately." },
  { n: "Learn", i: "bar-chart-3", d: "Analytics and insights help optimize performance." },
];
function Workflow() {
  return (
    <section id="workflow" className="relative py-28 overflow-hidden">
      <div className="aurora-stage opacity-40"><div className="aurora-blob b1" /></div>
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="The workflow"
          title="From setup to autopilot."
          sub="Get your AI call assistant running in minutes."
        />
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
          <div className="grid grid-cols-4 relative">
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
  { n: "Dr. Sarah Kim", r: "Clinic Director · HealthFirst", a: "SK", c: "violet",
    q: "We went from 30% missed calls to zero. Patients love the 24/7 availability and we saved 15 hours a week.", s: 5 },
  { n: "Raj Patel", r: "CEO · TechSolutions", a: "RP", c: "blue",
    q: "The outbound survey feature increased our NPS by 23 points. Setup took less than an hour.", s: 5 },
  { n: "Maria Santos", r: "Support Lead · RetailCorp", a: "MS", c: "cyan",
    q: "Reduced our call handling time by 60% while improving customer satisfaction. The CRM integration is seamless.", s: 5 },
  { n: "James Liu", r: "Practice Manager · LawFirm", a: "JL", c: "violet",
    q: "Multi-language support helped us serve our Spanish-speaking clients better. Receptionist Agent handles intake perfectly.", s: 5 },
  { n: "Anika Rao", r: "Director · EduCenter", a: "AR", c: "blue",
    q: "Parent inquiries are now handled instantly. The appointment scheduling saved our staff hours of back-and-forth emails.", s: 5 },
  { n: "Tom Bradley", r: "Operations · LogisticsPro", a: "TB", c: "cyan",
    q: "Order confirmations and delivery updates are fully automated. 40% reduction in customer service calls.", s: 5 },
];
function Testimonials() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="aurora-stage opacity-40"><div className="aurora-blob b3" /></div>
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="Trusted by businesses"
          title="Teams save hours, customers get better service."
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
    n: "Starter", p: "$0", per: "forever",
    d: "For small businesses and solo professionals.",
    f: ["1 phone number", "100 minutes/month", "Basic knowledge base", "Email support"],
    cta: "Start free",
    featured: false,
  },
  {
    n: "Professional", p: "$49", per: "per user / month", featured: true,
    d: "For growing teams with higher volume needs.",
    f: ["Unlimited phone numbers", "Unlimited minutes", "Advanced workflows", "CRM integration", "Priority support"],
    cta: "Start trial",
  },
  {
    n: "Enterprise", p: "Custom", per: "talk to sales",
    d: "For large organizations with compliance requirements.",
    f: ["White-label deploy", "SOC 2 / HIPAA", "Custom integrations", "Dedicated CSM", "SLA guarantees"],
    cta: "Contact sales",
    featured: false,
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
          sub="Free for small businesses. Predictable pricing for teams. Custom for enterprises."
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
            const price = p.p === "$49" && !yearly ? "$59" : p.p;
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
  { q: "How does the AI handle phone calls?",
    a: "The platform uses low-latency speech recognition and synthesis to enable real-time conversations. The AI understands intent, retrieves relevant knowledge, and executes workflows during calls." },
  { q: "Which phone providers do you support?",
    a: "We integrate with Twilio, Exotel, Plivo, and WhatsApp Business for global calling capabilities." },
  { q: "Can I customize the AI's responses?",
    a: "Yes. Upload your own knowledge base, set business rules, and configure workflows. You can also create custom AI personas for different departments." },
  { q: "How accurate is the speech recognition?",
    a: "We use frontier models with industry-leading accuracy. Multi-language support includes automatic accent adaptation for better recognition." },
  { q: "What integrations are available?",
    a: "Calendar (Google, Outlook, Apple), CRM (Salesforce, HubSpot, Zoho), and 20+ business tools including Slack, Gmail, and Stripe." },
  { q: "Is my call data secure?",
    a: "Yes. End-to-end encryption, SOC 2 compliance, and configurable data retention policies. Enterprise plans include HIPAA compliance." },
];
function FAQ() {
  const [open, setOpen] = useS(0);
  return (
    <section id="faq" className="relative py-28 overflow-hidden">
      <div className="relative mx-auto max-w-3xl px-5">
        <SectionHead
          eyebrow="FAQ"
          title="Questions, answered."
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
            <span className="badge"><span className="dot" /> Free trial · No credit card</span>
            <h2 className="mt-6 font-display text-4xl md:text-6xl font-bold text-grad leading-[1.05] max-w-3xl mx-auto">
              Transform your phone communications today.
            </h2>
            <p className="mt-5 text-ink-2 text-base md:text-lg max-w-xl mx-auto">
              Start with 100 minutes free. Connect your phone number in minutes.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="#" className="btn btn-primary px-6 py-3 text-[15px]">
                Start free trial
                <Icon name="arrow-right" size={15} />
              </a>
              <a href="#showcase" className="btn btn-ghost px-6 py-3 text-[15px]">
                <Icon name="play" size={14} />
                Watch demo
              </a>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto text-center">
              <Stat n="24/7" l="availability" />
              <Stat n="98%" l="satisfaction" />
              <Stat n="40k+" l="calls" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- expose ---------- */
Object.assign(window, {
  Hero, Features, Showcase, Why, Workflow, Testimonials, Pricing, FAQ, FinalCTA, SnapshotsPanel,
});