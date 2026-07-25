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
`;
