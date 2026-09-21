import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import { EXPERTISE, CERTIFICATIONS, EDUCATION, CONTACT } from "../data/content";
import { C, fontMono } from "../styles/theme";

const box = { backgroundColor: C.panel, border: `1px solid ${C.panelBorder}` };

export function Expertise() {
  return (
    <section id="expertise" className="py-20 px-6 md:px-8" style={{ borderTop: `1px solid ${C.panelBorder}` }}>
      <div className="max-w-5xl mx-auto">
        <SectionTitle eyebrow="DevOps & Cloud" title="What I do" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {EXPERTISE.map((e) => (
            <div key={e.title} className="p-6 rounded-xl" style={box}>
              <h3 className="text-base mb-2" style={{ color: C.text, fontWeight: 600 }}>{e.title}</h3>
              <p className="text-sm" style={{ color: C.dim }}>{e.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Certifications() {
  if (!CERTIFICATIONS.length) return null;
  return (
    <section id="certifications" className="py-20 px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionTitle eyebrow="Certifications" title="Credentials" />
        <div className="grid sm:grid-cols-2 gap-4">
          {CERTIFICATIONS.map((c) => (
            <div key={c.name} className="p-5 rounded-xl" style={box}>
              <div className="text-xs mb-1.5" style={{ fontFamily: fontMono, color: C.accent }}>{c.year}</div>
              <div className="text-sm" style={{ color: C.text, fontWeight: 600 }}>{c.name}</div>
              <div className="text-xs mt-1" style={{ color: C.dim }}>{c.issuer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="py-20 px-6 md:px-8" style={{ borderTop: `1px solid ${C.panelBorder}` }}>
      <div className="max-w-5xl mx-auto">
        <SectionTitle eyebrow="Education" title="Academic background" />
        <div className="grid sm:grid-cols-2 gap-4">
          {EDUCATION.map((e) => (
            <div key={e.deg} className="p-5 rounded-xl" style={box}>
              <div className="text-xs mb-1.5" style={{ fontFamily: fontMono, color: C.accent }}>{e.year}</div>
              <div className="text-sm" style={{ color: C.text, fontWeight: 600 }}>{e.deg}</div>
              <div className="text-xs mt-1" style={{ color: C.dim }}>{e.school}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Links() {
  const items = [
    [Github, "GitHub", CONTACT.github],
    [Linkedin, "LinkedIn", CONTACT.linkedin],
    [Mail, "Email", `mailto:${CONTACT.email}`],
  ];
  return (
    <section id="links" className="py-14 px-6 md:px-8" style={{ backgroundColor: C.panel, borderTop: `1px solid ${C.panelBorder}` }}>
      <div className="max-w-5xl mx-auto flex flex-wrap items-center gap-4">
        <span className="text-xs mr-2" style={{ fontFamily: fontMono, color: C.faint }}>PROFESSIONAL LINKS</span>
        {items.map(([Icon, label, href]) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer"
             className="btn-secondary inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full"
             style={{ border: `1px solid ${C.panelBorder}`, color: C.text }}>
            <Icon size={16} color={C.accent} /> {label}
          </a>
        ))}
      </div>
    </section>
  );
}
