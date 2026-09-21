import React from "react";
import { ArrowUpRight } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import Reveal from "./ui/Reveal";
import { PROJECTS } from "../data/content";
import { C, fontDisplay, fontMono } from "../styles/theme";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionTitle eyebrow="Projects" title="Selected projects" />
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 100}
              className="card p-7 rounded-2xl"
              style={{ backgroundColor: C.panel, border: `1px solid ${C.panelBorder}` }}
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl md:text-2xl" style={{ fontFamily: fontDisplay, fontWeight: 700, color: C.text }}>
                  {p.name}
                </h3>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.name} repo`}
                  className="project-arrow w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ border: `1px solid ${C.panelBorder}` }}
                >
                  <ArrowUpRight size={16} color={C.text} />
                </a>
              </div>
              <p className="text-sm mb-4" style={{ color: C.dim }}>
                {p.subtitle}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="stack-chip text-[11px] px-2.5 py-1 rounded-full"
                    style={{ fontFamily: fontMono, backgroundColor: C.accentDim, color: C.accent }}
                  >
                    {s}
                  </span>
                ))}
              </div>

              <ul className="flex flex-col gap-2">
                {p.points.map((pt, i) => (
                  <li key={i} className="text-sm" style={{ color: C.dim }}>
                    · {pt}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
