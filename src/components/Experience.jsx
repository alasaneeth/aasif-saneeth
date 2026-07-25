import React from "react";
import SectionTitle from "./ui/SectionTitle";
import { EXPERIENCE } from "../data/content";
import { C, fontDisplay, fontMono } from "../styles/theme";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-6 md:px-8"
      style={{ backgroundColor: C.panel, borderTop: `1px solid ${C.panelBorder}`, borderBottom: `1px solid ${C.panelBorder}` }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionTitle eyebrow="Experience" title="Where I've worked" />
        <div className="flex flex-col">
          {EXPERIENCE.map((e, i) => (
            <div
              key={e.role}
              className="tl-row grid md:grid-cols-[140px_20px_1fr] gap-4 md:gap-6 py-6"
              style={{ borderTop: i === 0 ? "none" : `1px solid ${C.panelBorder}` }}
            >
              <div className="text-sm" style={{ fontFamily: fontMono, color: C.faint }}>
                {e.period}
              </div>
              <div className="hidden md:flex justify-center">
                <span
                  className="tl-dot w-2.5 h-2.5 rounded-full mt-1.5"
                  style={{ backgroundColor: e.current ? C.accent : C.faint }}
                />
              </div>
              <div>
                <h3 className="text-lg md:text-xl" style={{ fontFamily: fontDisplay, fontWeight: 700, color: C.text }}>
                  {e.role} <span style={{ color: C.dim, fontWeight: 500 }}>· {e.org}</span>
                </h3>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {e.points.map((p, idx) => (
                    <li key={idx} className="text-sm" style={{ color: C.dim }}>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
