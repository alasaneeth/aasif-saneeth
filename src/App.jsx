import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Menu, X, ArrowUpRight } from "lucide-react";
import PROFILE_IMG from "./assets/profile.jpg";

/* ---------------------------------------------------------
   DESIGN TOKENS — dark, minimal, one accent
--------------------------------------------------------- */
const C = {
  bg: "#0A0A0C",
  panel: "#131317",
  panelBorder: "#232329",
  text: "#F4F4F6",
  dim: "#9797A3",
  faint: "#5C5C66",
  accent: "#6366F1",
  accentDim: "rgba(99,102,241,0.14)",
  accentSoft: "rgba(99,102,241,0.45)",
};


const fontDisplay = "'Sora', sans-serif";
const fontBody = "'Inter', sans-serif";
const fontMono = "'JetBrains Mono', monospace";

/* ---------------------------------------------------------
   DATA — trimmed to the essentials
--------------------------------------------------------- */
const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const EXPERIENCE = [
  {
    role: "Software Engineer",
    org: "Infora Tech",
    period: "Sep 2025 — Present",
    current: true,
    points: [
      "Build ERP modules with ASP.NET Core, React & Angular using Clean Architecture.",
      "Own CI/CD pipelines and Azure deployments end to end.",
    ],
  },
  {
    role: "Associate Software Engineer",
    org: "Titum",
    period: "Nov 2023 — Sep 2025",
    current: false,
    points: [
      "Built and scaled backend APIs and React/TypeScript UIs for an ERP platform.",
      "Deployed to Azure App Services, Azure SQL and Storage.",
    ],
  },
  {
    role: "Software Engineer Intern",
    org: "Titum",
    period: "May 2023 — Oct 2023",
    current: false,
    points: ["Built React components on ASP.NET Web APIs; tested and debugged features."],
  },
];

const PROJECTS = [
  {
    name: "HLChitFund",
    subtitle: "Chit Fund Management System",
    stack: ["Angular 21", ".NET 8", "SQL Server", "JWT"],
    repo: "https://github.com/alasaneeth/chit-fund-tracker",
    points: [
      "Full-stack build across 9 sprints — Clean Architecture backend, zoneless Angular frontend.",
      "Role-based auth (Admin, Cashier, Customer) enforced at API and UI layers.",
      "25-test Jasmine/Karma suite covering services, guards and components.",
    ],
  },
  {
    name: "HopperFlow",
    subtitle: "String Hopper Business Management System",
    stack: ["React 18", "TypeScript", ".NET 8", "Redux Toolkit"],
    repo: "https://github.com/alasaneeth/hopper-flow",
    points: [
      "RBAC across 6 roles with granular endpoint-level authorization.",
      "Sales, billing, credit tracking and auto-generated invoices.",
      "Payroll with attendance, advances and auto-generated payslips.",
    ],
  },
];

const SKILLS = [
  { group: "Backend", items: ["C#", ".NET Core", "ASP.NET Core", "EF Core", "CQRS + MediatR"] },
  { group: "Frontend", items: ["React.js", "Angular", "TypeScript", "Redux Toolkit", "Tailwind CSS"] },
  { group: "Data & Cloud", items: ["SQL Server", "Azure", "Docker", "GitHub Actions"] },
  { group: "Testing", items: ["xUnit", "Jest", "Cypress", "Playwright"] },
  { group: "Practices", items: ["Clean Architecture", "SOLID", "REST / GraphQL", "JWT Auth"] },
];

const EDUCATION = [
  { deg: "BEng (Hons), Computer Software Engineering", school: "London Metropolitan University", year: "2024" },
  { deg: "HND, Software Development", school: "Buckinghamshire New University", year: "2023" },
];

/* ---------------------------------------------------------
   PRIMITIVES
--------------------------------------------------------- */
const Eyebrow = ({ children }) => (
  <div
    className="text-xs uppercase mb-4"
    style={{ fontFamily: fontMono, color: C.accent, letterSpacing: "0.18em" }}
  >
    {children}
  </div>
);

const SectionTitle = ({ eyebrow, title }) => (
  <div className="mb-12">
    <Eyebrow>{eyebrow}</Eyebrow>
    <h2 className="text-3xl sm:text-4xl md:text-5xl" style={{ fontFamily: fontDisplay, fontWeight: 700, color: C.text }}>
      {title}
    </h2>
  </div>
);

/* ---------------------------------------------------------
   MAIN
--------------------------------------------------------- */
export default function Portfolio() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id) => {
    setNavOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{ backgroundColor: C.bg, color: C.text, fontFamily: fontBody, minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::selection { background: ${C.accent}; color: #fff; }
        a:focus-visible, button:focus-visible { outline: 2px solid ${C.accent}; outline-offset: 3px; }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.001ms !important; transition-duration: 0.001ms !important; }
        }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(12px);} to { opacity: 1; transform: translateY(0);} }
        .fade-up { animation: fadeUp 0.6s ease both; }
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.35; } }
        .pulse-dot { animation: pulse 2s ease-in-out infinite; }
        .card:hover { border-color: ${C.accentSoft}; transform: translateY(-2px); }
        .card { transition: all 0.25s ease; }
        .tl-dot { transition: all 0.2s ease; }
        .tl-row:hover .tl-dot { background: ${C.accent}; box-shadow: 0 0 0 4px ${C.accentDim}; }
        .nav-link { position: relative; }
        .nav-link::after { content:''; position:absolute; left:0; bottom:-4px; width:0; height:1px; background:${C.accent}; transition: width 0.2s ease; }
        .nav-link:hover::after { width:100%; }
      `}</style>

      {/* NAV */}
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: scrolled ? "rgba(10,10,12,0.85)" : "transparent",
          borderBottom: scrolled ? `1px solid ${C.panelBorder}` : "1px solid transparent",
          backdropFilter: "blur(10px)",
          transition: "all 0.3s ease",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-8 flex items-center justify-between h-16">
          <button onClick={() => goTo("top")} className="text-sm" style={{ fontFamily: fontMono, color: C.text, letterSpacing: "0.05em" }}>
            AS<span style={{ color: C.accent }}>.</span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => goTo(n.id)} className="nav-link text-sm" style={{ fontFamily: fontBody, color: C.dim }}>
                {n.label}
              </button>
            ))}
          </nav>

          <button className="md:hidden" onClick={() => setNavOpen((v) => !v)} aria-label="Toggle menu">
            {navOpen ? <X color={C.text} size={22} /> : <Menu color={C.text} size={22} />}
          </button>
        </div>

        {navOpen && (
          <div className="md:hidden px-6 pb-6 flex flex-col gap-4" style={{ backgroundColor: C.bg, borderBottom: `1px solid ${C.panelBorder}` }}>
            {NAV.map((n) => (
              <button key={n.id} onClick={() => goTo(n.id)} className="text-left text-sm py-1" style={{ color: C.dim }}>
                {n.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="pt-40 pb-24 px-6 md:px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_auto] gap-12 items-center">
          <div className="fade-up">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full pulse-dot" style={{ backgroundColor: "#34D399" }} />
              <span className="text-xs" style={{ fontFamily: fontMono, color: C.dim, letterSpacing: "0.08em" }}>
                Open to opportunities
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl leading-[1.05]" style={{ fontFamily: fontDisplay, fontWeight: 800, color: C.text }}>
              Al. Aasif Saneeth
            </h1>
            <p className="mt-5 text-lg md:text-xl max-w-xl" style={{ color: C.dim }}>
              Software Engineer building full-stack ERP systems with{" "}
              <span style={{ color: C.text }}>ASP.NET Core, React &amp; Angular.</span>
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <button onClick={() => goTo("projects")} className="text-sm px-5 py-3 rounded-full" style={{ backgroundColor: C.accent, color: "#fff" }}>
                View Projects
              </button>
              <button onClick={() => goTo("contact")} className="text-sm px-5 py-3 rounded-full" style={{ border: `1px solid ${C.panelBorder}`, color: C.text }}>
                Get in touch
              </button>
            </div>
          </div>

          <div className="fade-up flex justify-center md:justify-end">
            <div
              className="rounded-3xl overflow-hidden flex-shrink-0"
              style={{
                width: 220,
                height: 264,
                border: `1px solid ${C.panelBorder}`,
                boxShadow: `0 0 0 6px ${C.accentDim}`,
              }}
            >
              <img
                src={PROFILE_IMG}
                alt="Al. Aasif Saneeth"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <SectionTitle eyebrow="About" title="A little about me" />
          <p className="text-base md:text-lg max-w-2xl" style={{ color: C.dim }}>
            3+ years designing and shipping ERP applications end to end — from Clean
            Architecture on the backend to responsive React and Angular front ends,
            deployed on Azure with CI/CD in place. I care about code that stays easy
            to change six months from now.
          </p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-20 px-6 md:px-8" style={{ backgroundColor: C.panel, borderTop: `1px solid ${C.panelBorder}`, borderBottom: `1px solid ${C.panelBorder}` }}>
        <div className="max-w-5xl mx-auto">
          <SectionTitle eyebrow="Experience" title="Where I've worked" />
          <div className="flex flex-col">
            {EXPERIENCE.map((e, i) => (
              <div key={e.role} className="tl-row grid md:grid-cols-[140px_20px_1fr] gap-4 md:gap-6 py-6" style={{ borderTop: i === 0 ? "none" : `1px solid ${C.panelBorder}` }}>
                <div className="text-sm" style={{ fontFamily: fontMono, color: C.faint }}>{e.period}</div>
                <div className="hidden md:flex justify-center">
                  <span className="tl-dot w-2.5 h-2.5 rounded-full mt-1.5" style={{ backgroundColor: e.current ? C.accent : C.faint }} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl" style={{ fontFamily: fontDisplay, fontWeight: 700, color: C.text }}>
                    {e.role} <span style={{ color: C.dim, fontWeight: 500 }}>· {e.org}</span>
                  </h3>
                  <ul className="mt-3 flex flex-col gap-1.5">
                    {e.points.map((p, idx) => (
                      <li key={idx} className="text-sm" style={{ color: C.dim }}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <SectionTitle eyebrow="Projects" title="Things I've built" />
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((p) => (
              <div key={p.name} className="card p-7 rounded-2xl" style={{ backgroundColor: C.panel, border: `1px solid ${C.panelBorder}` }}>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl md:text-2xl" style={{ fontFamily: fontDisplay, fontWeight: 700, color: C.text }}>
                    {p.name}
                  </h3>
                  <a href={p.repo} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} repo`}
                     className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                     style={{ border: `1px solid ${C.panelBorder}` }}>
                    <ArrowUpRight size={16} color={C.text} />
                  </a>
                </div>
                <p className="text-sm mb-4" style={{ color: C.dim }}>{p.subtitle}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {p.stack.map((s) => (
                    <span key={s} className="text-[11px] px-2.5 py-1 rounded-full" style={{ fontFamily: fontMono, backgroundColor: C.accentDim, color: C.accent }}>
                      {s}
                    </span>
                  ))}
                </div>

                <ul className="flex flex-col gap-2">
                  {p.points.map((pt, i) => (
                    <li key={i} className="text-sm" style={{ color: C.dim }}>· {pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 px-6 md:px-8" style={{ backgroundColor: C.panel, borderTop: `1px solid ${C.panelBorder}`, borderBottom: `1px solid ${C.panelBorder}` }}>
        <div className="max-w-5xl mx-auto">
          <SectionTitle eyebrow="Skills" title="What I work with" />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {SKILLS.map((s) => (
              <div key={s.group}>
                <div className="text-sm mb-3" style={{ color: C.text, fontWeight: 600 }}>{s.group}</div>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <span key={it} className="text-xs px-3 py-1.5 rounded-full" style={{ border: `1px solid ${C.panelBorder}`, color: C.dim }}>
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mt-14">
            {EDUCATION.map((e) => (
              <div key={e.deg} className="p-5 rounded-xl" style={{ border: `1px solid ${C.panelBorder}` }}>
                <div className="text-xs mb-1.5" style={{ fontFamily: fontMono, color: C.accent }}>{e.year}</div>
                <div className="text-sm" style={{ color: C.text, fontWeight: 600 }}>{e.deg}</div>
                <div className="text-xs mt-1" style={{ color: C.dim }}>{e.school}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="py-24 px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <Eyebrow>Contact</Eyebrow>
          <h2 className="text-4xl sm:text-5xl md:text-6xl max-w-xl" style={{ fontFamily: fontDisplay, fontWeight: 800, color: C.text }}>
            Let's build something together.
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 mt-10 max-w-xl">
            <a href="mailto:alasaneeth22@gmail.com" className="flex items-center gap-3 text-sm" style={{ color: C.text }}>
              <Mail size={16} color={C.accent} /> alasaneeth22@gmail.com
            </a>
            <a href="tel:+94740822580" className="flex items-center gap-3 text-sm" style={{ color: C.text }}>
              <Phone size={16} color={C.accent} /> +94 74 082 2580
            </a>
            <a href="https://www.linkedin.com/in/aasif-saneeth" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm" style={{ color: C.text }}>
              <Linkedin size={16} color={C.accent} /> LinkedIn
            </a>
            <a href="https://github.com/alasaneeth" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm" style={{ color: C.text }}>
              <Github size={16} color={C.accent} /> GitHub
            </a>
            <div className="flex items-center gap-3 text-sm sm:col-span-2" style={{ color: C.dim }}>
              <MapPin size={16} color={C.accent} /> Maruthamunai, Sri Lanka
            </div>
          </div>

          <div className="mt-16 pt-6 text-xs" style={{ borderTop: `1px solid ${C.panelBorder}`, fontFamily: fontMono, color: C.faint }}>
            © {new Date().getFullYear()} Al. Aasif Saneeth
          </div>
        </div>
      </footer>
    </div>
  );
}
