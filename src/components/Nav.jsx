import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "../data/content";
import { C, fontMono, fontBody } from "../styles/theme";

export default function Nav({ onNavigate }) {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setNavOpen(false);
    onNavigate(id);
  };

  return (
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
        <button
          onClick={() => go("top")}
          className="text-sm"
          style={{ fontFamily: fontMono, color: C.text, letterSpacing: "0.05em" }}
        >
          AS<span style={{ color: C.accent }}>.</span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className="nav-link text-sm"
              style={{ fontFamily: fontBody, color: C.dim }}
            >
              {n.label}
            </button>
          ))}
        </nav>

        <button className="md:hidden" onClick={() => setNavOpen((v) => !v)} aria-label="Toggle menu">
          {navOpen ? <X color={C.text} size={22} /> : <Menu color={C.text} size={22} />}
        </button>
      </div>

      {navOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ backgroundColor: C.bg, borderBottom: `1px solid ${C.panelBorder}` }}
        >
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className="text-left text-sm py-1"
              style={{ color: C.dim }}
            >
              {n.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
