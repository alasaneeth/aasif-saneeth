import React from "react";
import SectionTitle from "./ui/SectionTitle";
import { SKILLS, EDUCATION } from "../data/content";
import { C, fontMono } from "../styles/theme";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-8"
      style={{ backgroundColor: C.panel, borderTop: `1px solid ${C.panelBorder}`, borderBottom: `1px solid ${C.panelBorder}` }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionTitle eyebrow="Skills" title="What I work with" />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {SKILLS.map((s) => (
            <div key={s.group}>
              <div className="text-sm mb-3" style={{ color: C.text, fontWeight: 600 }}>
                {s.group}
              </div>
              <div className="flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <span
                    key={it}
                    className="text-xs px-3 py-1.5 rounded-full"
                    style={{ border: `1px solid ${C.panelBorder}`, color: C.dim }}
                  >
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
              <div className="text-xs mb-1.5" style={{ fontFamily: fontMono, color: C.accent }}>
                {e.year}
              </div>
              <div className="text-sm" style={{ color: C.text, fontWeight: 600 }}>
                {e.deg}
              </div>
              <div className="text-xs mt-1" style={{ color: C.dim }}>
                {e.school}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
