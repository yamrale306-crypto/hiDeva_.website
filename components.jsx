const { useEffect, useRef, useState, useMemo, useCallback } = React;

/* ---------- Icon helper (lucide via global) ---------- */
function Icon({ name, size = 18, className = "", strokeWidth = 1.75, style }) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current && window.lucide?.createIcons) {
      ref.current.innerHTML = "";
      const i = document.createElement("i");
      i.setAttribute("data-lucide", name);
      ref.current.appendChild(i);
      window.lucide.createIcons({
        attrs: { "stroke-width": strokeWidth, width: size, height: size },
        nameAttr: "data-lucide",
      });
    }
  }, [name, size, strokeWidth]);
  return <span ref={ref} className={`inline-flex ${className}`} style={style} aria-hidden="true" />;
}

/* ---------- Logo ---------- */
function Logo({ size = 28 }) {
  return (
    <a href="#" className="flex items-center gap-2 group">
      <span className="relative inline-block" style={{ width: size, height: size }}>
        <svg viewBox="0 0 32 32" width={size} height={size}>
          <defs>
            <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#4f7cff" />
              <stop offset=".5" stopColor="#9d5cff" />
              <stop offset="1" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
          <path
            d="M16 2 4 8v11.6c0 5.8 4.8 9.7 12 11.4 7.2-1.7 12-5.6 12-11.4V8z"
            fill="url(#lg)"
            opacity="0.95"
          />
          <path
            d="M11 11v10M21 11v10M11 16h10"
            stroke="#0b0b14"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
        <span
          aria-hidden
          className="absolute inset-0 rounded-full blur-md opacity-60 group-hover:opacity-90 transition"
          style={{ background: "radial-gradient(circle, rgba(79,124,255,.6), transparent 60%)" }}
        />
      </span>
      <span className="font-display font-bold text-[17px] tracking-tight">
        hi<span className="text-aurora">Deva</span>
      </span>
    </a>
  );
}

/* ---------- Section header ---------- */
function SectionHead({ eyebrow, title, sub, align = "center" }) {
  const aClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <div className={`flex flex-col ${aClass} max-w-2xl gap-4 mb-14`}>
      {eyebrow && (
        <span className="badge reveal">
          <span className="dot" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-4xl md:text-5xl font-bold text-grad leading-[1.05] reveal" data-delay="1">
        {title}
      </h2>
      {sub && <p className="text-ink-2 text-base md:text-lg leading-relaxed max-w-xl reveal" data-delay="2">{sub}</p>}
    </div>
  );
}

/* ---------- Trusted-by row ---------- */
const TRUSTED = ["Northwind", "Vercel", "Plaintext", "Helio", "Quanta", "Synthwave"];
function TrustedBy() {
  return (
    <div className="mt-16 reveal" data-delay="4">
      <p className="text-center text-xs uppercase tracking-[0.18em] text-ink-3 mb-5">Trusted by teams shipping faster</p>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 opacity-70">
        {TRUSTED.map((n) => (
          <span key={n} className="font-display text-ink-2 text-lg tracking-tight">
            {n}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Tilt + glow card wrapper ---------- */
function TiltCard({ children, className = "", as: As = "div" }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = (e.clientX - r.left) / r.width - 0.5;
    const my = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--mx", mx.toFixed(3));
    el.style.setProperty("--my", my.toFixed(3));
    el.style.setProperty("--gx", e.clientX - r.left + "px");
    el.style.setProperty("--gy", e.clientY - r.top + "px");
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--mx", 0);
    el.style.setProperty("--my", 0);
  };
  return (
    <As
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`tilt tilt-glow relative ${className}`}
    >
      {children}
    </As>
  );
}

/* ---------- Aurora background block ---------- */
function AuroraBG({ withGrid = true }) {
  return (
    <div className="aurora-stage">
      {withGrid && <div className="absolute inset-0 grid-bg" />}
      <div className="aurora-blob b1" />
      <div className="aurora-blob b2" />
      <div className="aurora-blob b3" />
      <div className="absolute inset-0 grain" />
    </div>
  );
}

/* ---------- Scroll reveal ---------- */
function useReveal() {
   useEffect(() => {
     const els = document.querySelectorAll(".reveal");
     const io = new IntersectionObserver(
       (entries) => {
         entries.forEach((e) => {
           if (e.isIntersecting) {
             e.target.classList.add("in");
             io.unobserve(e.target);
           }
         });
       },
       { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
     );
     els.forEach((el) => io.observe(el));
     return () => io.disconnect();
   }, []);
 }

/* ---------- Nav ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["Features", "#features"],
    ["Workspace", "#showcase"],
    ["Workflow", "#workflow"],
    ["Pricing", "#pricing"],
    ["Contact", "#contact"],
    ["Docs", "#faq"],
  ];
  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="mx-auto max-w-6xl px-5">
          <div
            className={`flex items-center justify-between rounded-2xl px-3 pl-4 transition-all duration-300 ${
              scrolled ? "glass-strong shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)]" : "bg-transparent"
            }`}
            style={{ height: 60 }}
          >
            <Logo />
            <nav className="hidden md:flex items-center gap-7">
              {links.map(([l, h]) => (
                <a key={l} href={h} className="nav-link text-sm">
                  {l}
                </a>
              ))}
            </nav>
            <div className="hidden md:flex items-center gap-2">
              <a href="#" className="nav-link text-sm px-3" onClick={(e) => { e.preventDefault(); setAuthOpen(true); }}>Sign in</a>
              <a href="#cta" className="btn btn-primary">
                Get started
                <Icon name="arrow-right" size={14} />
              </a>
            </div>
            <button
              className="md:hidden text-ink p-2"
              aria-label="Menu"
              onClick={() => setOpen((o) => !o)}
            >
              <Icon name={open ? "x" : "menu"} size={20} />
            </button>
          </div>
          {open && (
            <div className="md:hidden mt-2 glass-strong rounded-2xl p-4 flex flex-col gap-3">
              {links.map(([l, h]) => (
                <a key={l} href={h} className="nav-link text-sm" onClick={() => setOpen(false)}>
                  {l}
                </a>
              ))}
              <div className="h-px bg-white/10 my-1" />
              <a href="#" className="nav-link text-sm" onClick={(e) => { e.preventDefault(); setAuthOpen(true); }}>Sign in</a>
              <a href="#cta" className="btn btn-primary justify-center">Get started</a>
            </div>
          )}
        </div>
      </header>
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  const cols = [
    {
      h: "Product",
      l: ["Features", "Workspace", "Pricing", "Changelog", "Contact"],
    },
    {
      h: "Developers",
      l: ["Documentation", "API reference", "CLI", "Integrations", "Status"],
    },
    {
      h: "Company",
      l: ["About", "Blog", "Careers", "Press kit", "Contact"],
    },
    {
      h: "Resources",
      l: ["Community", "Templates", "Tutorials", "Support", "Security"],
    },
  ];
  const socials = ["github", "twitter", "linkedin", "youtube"];
  return (
    <footer className="relative mt-32 border-t border-white/5">
      <div className="aurora-stage opacity-50">
        <div className="aurora-blob b1" />
      </div>
      <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-10">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <Logo />
              <p className="mt-5 text-ink-2 text-sm leading-relaxed max-w-xs">
                The AI-first workspace for teams who build with autonomous agents.
              </p>
              <div className="mt-6 flex items-center gap-2">
                {socials.map((s) => (
                  <a
                    key={s}
                    href="#"
                    aria-label={s}
                    className="w-9 h-9 rounded-lg glass flex items-center justify-center text-ink-2 hover:text-ink hover:bg-white/10 transition"
                  >
                    <Icon name={s} size={16} />
                  </a>
                ))}
              </div>
              <div className="mt-6">
                <div className="text-ink-3 text-xs mb-2">Stay updated</div>
                <NewsletterSignup />
              </div>
            </div>
            <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {cols.map((c) => (
              <div key={c.h}>
                <div className="text-ink font-medium text-sm mb-4">{c.h}</div>
                <ul className="space-y-3">
                  {c.l.map((x) => (
                    <li key={x}>
                      <a href="#" className="text-ink-2 text-sm hover:text-ink transition">
                        {x}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 pt-6 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-ink-3 text-xs">© 2026 hiDeva Labs, Inc. All rights reserved.</p>
          <div className="flex items-center gap-5 text-xs text-ink-3">
            <a href="#" className="hover:text-ink">Privacy</a>
            <a href="#" className="hover:text-ink">Terms</a>
            <a href="#" className="hover:text-ink">Cookies</a>
            <a href="#" className="hover:text-ink">DPA</a>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Auth Modal ---------- */
function AuthModal({ open, onClose, initialMode = "signup" }) {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [mode, setMode] = useState(initialMode);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState("");
   const [success, setSuccess] = useState(false);
   useEffect(() => {
     if (!open) {
       setEmail("");
       setPassword("");
       setError("");
       setSuccess(false);
     }
   }, [open]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      if (mode === "signup") {
        const { error } = await window.auth.signUp(email, password);
        if (error) throw error;
        setSuccess(true);
      } else {
        const { error } = await window.auth.signIn(email, password);
        if (error) throw error;
        onClose();
      }
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div className="glass-strong rounded-2xl p-6 w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display text-xl font-bold">{mode === "signup" ? "Create account" : "Sign in"}</h3>
          <button onClick={onClose} className="text-ink-3 hover:text-ink">
            <Icon name="x" size={18} />
          </button>
        </div>
        {success ? (
          <div className="text-center py-4">
            <Icon name="check-circle-2" size={32} className="text-emerald-400 mx-auto mb-2" />
            <p className="text-ink-2">Check your email to confirm your account</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 glass rounded-lg text-sm text-ink placeholder:text-ink-3 outline-none"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 glass rounded-lg text-sm text-ink placeholder:text-ink-3 outline-none"
              />
            </div>
            {error && <p className="text-rose-400 text-xs">{error}</p>}
            <button type="submit" disabled={loading} className="btn btn-primary w-full justify-center">
              {loading ? "Loading..." : mode === "signup" ? "Sign up" : "Sign in"}
            </button>
            <div className="text-center text-xs">
              <button type="button" onClick={() => setMode(mode === "signup" ? "signin" : "signup")} className="text-ink-3 hover:text-ink">
                {mode === "signup" ? "Already have an account? Sign in" : "Need an account? Sign up"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

/* ---------- Newsletter Signup ---------- */
function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await window.db.subscribe(email);
    if (!error) setSuccess(true);
    setLoading(false);
  };

  if (success) {
    return <p className="text-emerald-400 text-sm">Thanks for subscribing!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <input
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 px-3 py-2 glass rounded-lg text-sm text-ink placeholder:text-ink-3 outline-none"
      />
      <button type="submit" disabled={loading} className="btn btn-primary px-3">
        <Icon name="send" size={14} />
      </button>
    </form>
  );
}

/* ---------- AI Chat Widget ---------- */
function AIChatWidget() {
  return (
    <a
      href="https://hideva.vercel.app/#"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full glass-strong grad-border flex items-center justify-center hover:scale-105 transition"
      aria-label="Open AI chat"
    >
      <Icon name="message-circle" size={24} className="text-aurora" />
    </a>
  );
}

function Stat({ n, l }) {
  return (
    <div className="glass rounded-xl py-3 text-center">
      <div className="font-display text-2xl font-bold text-aurora">{n}</div>
      <div className="text-ink-3 text-xs uppercase tracking-widest mt-1">{l}</div>
    </div>
  );
}

/* ---------- Expose to other babel scripts ---------- */
Object.assign(window, {
  Icon, Logo, SectionHead, TrustedBy, TiltCard, AuroraBG, useReveal, Nav, Footer, AuthModal, NewsletterSignup, AIChatWidget, Stat,
});
