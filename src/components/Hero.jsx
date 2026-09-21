import React from "react";
import PROFILE_IMG from "../assets/profile.jpg";
import { PROFILE } from "../data/content";
import { C, fontDisplay, fontMono } from "../styles/theme";

export default function Hero({ onNavigate }) {
  return (
    <section id="top" className="pt-40 pb-24 px-6 md:px-8">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_auto] gap-12 items-center">
        <div className="fade-up">
          <div className="flex items-center gap-2 mb-6" style={{  }}>
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#34D399" }} />
            <span className="text-xs" style={{ fontFamily: fontMono, color: C.dim, letterSpacing: "0.08em" }}>
              {PROFILE.status}
            </span>
          </div>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl leading-[1.05]"
            style={{ fontFamily: fontDisplay, fontWeight: 800, color: C.text, animation: "fadeUp 0.7s ease 0.12s both" }}
          >
            {PROFILE.name}
          </h1>
          <p
            className="mt-5 text-lg md:text-xl max-w-xl"
            style={{ color: C.dim, animation: "fadeUp 0.7s ease 0.2s both" }}
          >
            {PROFILE.role} {PROFILE.tagline}{" "}
            <span style={{ color: C.text }}>{PROFILE.taglineHighlight}</span>
          </p>

          <div className="flex flex-wrap gap-3 mt-8" style={{ animation: "fadeUp 0.7s ease 0.3s both" }}>
            <button
              onClick={() => onNavigate("projects")}
              className="btn-primary text-sm px-5 py-3 rounded-full"
              style={{ backgroundColor: C.accent, color: "#04121F" }}
            >
              View Projects
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className="btn-secondary text-sm px-5 py-3 rounded-full"
              style={{ border: `1px solid ${C.panelBorder}`, color: C.text }}
            >
              Get in touch
            </button>
          </div>
        </div>

        <div className="fade-up flex justify-center md:justify-end" style={{ animationDelay: "0.15s" }}>
          <div
            className="avatar-frame rounded-3xl overflow-hidden flex-shrink-0"
            style={{
              width: 220,
              height: 264,
              border: `1px solid ${C.panelBorder}`,
              boxShadow: `0 0 0 6px ${C.accentDim}`,
            }}
          >
            <img src={PROFILE_IMG} alt={PROFILE.name} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
