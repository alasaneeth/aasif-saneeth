/* ---------------------------------------------------------
   DESIGN TOKENS — dark, minimal, one accent
--------------------------------------------------------- */
export const C = {
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

export const fontDisplay = "'Sora', sans-serif";
export const fontBody = "'Inter', sans-serif";
export const fontMono = "'JetBrains Mono', monospace";

/* Global CSS injected once from App.jsx */
export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  ::selection { background: ${C.accent}; color: #fff; }
  a:focus-visible, button:focus-visible { outline: 2px solid ${C.accent}; outline-offset: 3px; }
  @media (prefers-reduced-motion: reduce) {
    * { animation-duration: 0.001ms !important; transition-duration: 0.001ms !important; scroll-behavior: auto !important; }
    .reveal, .reveal-scale { opacity: 1 !important; transform: none !important; }
  }

  /* ---------- entrance animations ---------- */
  @keyframes fadeUp { from { opacity: 0; transform: translateY(12px);} to { opacity: 1; transform: translateY(0);} }
  .fade-up { animation: fadeUp 0.7s cubic-bezier(0.16,0.84,0.44,1) both; }

  .reveal {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.75s cubic-bezier(0.16,0.84,0.44,1), transform 0.75s cubic-bezier(0.16,0.84,0.44,1);
    will-change: opacity, transform;
  }
  .reveal.in-view { opacity: 1; transform: translateY(0); }

  .reveal-scale { opacity: 0; transform: translateY(20px) scale(0.96); transition: opacity 0.65s cubic-bezier(0.16,0.84,0.44,1), transform 0.65s cubic-bezier(0.16,0.84,0.44,1); }
  .reveal-scale.in-view { opacity: 1; transform: translateY(0) scale(1); }

  /* ---------- ambient / looping ---------- */
  @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.35; } }
  .pulse-dot { animation: pulse 2s ease-in-out infinite; }

  @keyframes floatY { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
  .float { animation: floatY 5s ease-in-out infinite; }

  @keyframes gradientMove { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
  .gradient-text {
    background: linear-gradient(90deg, ${C.text}, ${C.accent}, ${C.text});
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: gradientMove 6s ease-in-out infinite;
  }

  @keyframes slideDown { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }
  .mobile-menu { animation: slideDown 0.25s cubic-bezier(0.16,0.84,0.44,1) both; }

  /* ---------- interactive hover ---------- */
  .card { transition: transform 0.35s cubic-bezier(0.16,0.84,0.44,1), border-color 0.35s ease, box-shadow 0.35s ease; }
  .card:hover { border-color: ${C.accentSoft}; transform: translateY(-6px); box-shadow: 0 16px 40px -20px rgba(99,102,241,0.35); }

  .project-arrow { transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), background-color 0.3s ease, border-color 0.3s ease; }
  .card:hover .project-arrow { transform: rotate(45deg) scale(1.08); background-color: ${C.accent}; border-color: ${C.accent}; }
  .card:hover .project-arrow svg { stroke: #fff; }

  .stack-chip { transition: transform 0.25s ease, background-color 0.25s ease; }
  .card:hover .stack-chip { transform: translateY(-1px); }

  .tl-dot { transition: all 0.25s cubic-bezier(0.34,1.56,0.64,1); }
  .tl-row:hover .tl-dot { background: ${C.accent}; box-shadow: 0 0 0 5px ${C.accentDim}; transform: scale(1.25); }
  .tl-row { transition: transform 0.25s ease; }
  .tl-row:hover { transform: translateX(4px); }

  .nav-link { position: relative; transition: color 0.2s ease; }
  .nav-link::after { content:''; position:absolute; left:0; bottom:-4px; width:0; height:1px; background:${C.accent}; transition: width 0.25s cubic-bezier(0.16,0.84,0.44,1); }
  .nav-link:hover { color: ${C.text} !important; }
  .nav-link:hover::after { width:100%; }

  .btn-primary { transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease, background-color 0.25s ease; }
  .btn-primary:hover { transform: translateY(-2px) scale(1.03); box-shadow: 0 10px 30px -10px ${C.accentSoft}; }
  .btn-primary:active { transform: translateY(0) scale(0.98); }

  .btn-secondary { transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), border-color 0.25s ease, color 0.25s ease, background-color 0.25s ease; }
  .btn-secondary:hover { transform: translateY(-2px); border-color: ${C.accentSoft} !important; color: ${C.accent} !important; background-color: ${C.accentDim}; }
  .btn-secondary:active { transform: translateY(0); }

  .skill-chip { transition: transform 0.2s ease, border-color 0.2s ease, color 0.2s ease, background-color 0.2s ease; }
  .skill-chip:hover { transform: translateY(-3px); border-color: ${C.accentSoft} !important; color: ${C.text} !important; background-color: ${C.accentDim}; }

  .edu-card { transition: transform 0.3s cubic-bezier(0.16,0.84,0.44,1), border-color 0.3s ease, box-shadow 0.3s ease; }
  .edu-card:hover { transform: translateY(-4px); border-color: ${C.accentSoft}; box-shadow: 0 14px 34px -20px rgba(99,102,241,0.35); }

  .social-link { transition: transform 0.25s ease, color 0.25s ease; display: inline-flex; }
  .social-link:hover { transform: translateX(4px); color: ${C.accent} !important; }
  .social-link svg { transition: transform 0.25s ease; }
  .social-link:hover svg { transform: scale(1.15); }

  .avatar-frame { transition: transform 0.4s cubic-bezier(0.16,0.84,0.44,1); }
  .avatar-frame:hover { transform: translateY(-4px) rotate(-1deg); }
  .avatar-frame img { transition: transform 0.5s cubic-bezier(0.16,0.84,0.44,1); }
  .avatar-frame:hover img { transform: scale(1.06); }

  .logo-mark { transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1); display: inline-block; }
  .logo-mark:hover { transform: rotate(-6deg) scale(1.08); }

  .scroll-progress { position: fixed; top: 0; left: 0; height: 2px; background: ${C.accent}; z-index: 60; transition: width 0.1s linear; }
`;
