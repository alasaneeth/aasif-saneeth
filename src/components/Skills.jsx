import React from "react";
import SectionTitle from "./ui/SectionTitle";
import Reveal from "./ui/Reveal";
import { SKILLS } from "../data/content";
import { C } from "../styles/theme";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-8"
      style={{ backgroundColor: C.panel, borderTop: `1px solid ${C.panelBorder}`, borderBottom: `1px solid ${C.panelBorder}` }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionTitle eyebrow="Skills" title="Technical skills" />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {SKILLS.map((s, i) => (
            <Reveal key={s.group} delay={i * 80}>
              <div className="text-sm mb-3" style={{ color: C.text, fontWeight: 600 }}>
                {s.group}
              </div>
              <div className="flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <span
                    key={it}
                    className="skill-chip text-xs px-3 py-1.5 rounded-full"
                    style={{ border: `1px solid ${C.panelBorder}`, color: C.dim }}
                  >
                    {it}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
