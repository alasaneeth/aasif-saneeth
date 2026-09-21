import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import Eyebrow from "./ui/Eyebrow";
import Reveal from "./ui/Reveal";
import { CONTACT } from "../data/content";
import { C, fontDisplay, fontMono } from "../styles/theme";

export default function Contact() {
  return (
    <footer id="contact" className="py-24 px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl max-w-xl"
            style={{ fontFamily: fontDisplay, fontWeight: 800, color: C.text }}
          >
            Open to DevOps & Cloud roles.
          </h2>
        </Reveal>

        <Reveal delay={120} className="grid sm:grid-cols-2 gap-4 mt-10 max-w-xl">
          <a href={`mailto:${CONTACT.email}`} className="social-link items-center gap-3 text-sm" style={{ color: C.text }}>
            <Mail size={16} color={C.accent} /> {CONTACT.email}
          </a>
          <a href={`tel:${CONTACT.phoneHref}`} className="social-link items-center gap-3 text-sm" style={{ color: C.text }}>
            <Phone size={16} color={C.accent} /> {CONTACT.phone}
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link items-center gap-3 text-sm"
            style={{ color: C.text }}
          >
            <Linkedin size={16} color={C.accent} /> LinkedIn
          </a>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link items-center gap-3 text-sm"
            style={{ color: C.text }}
          >
            <Github size={16} color={C.accent} /> GitHub
          </a>
          <div className="flex items-center gap-3 text-sm sm:col-span-2" style={{ color: C.dim }}>
            <MapPin size={16} color={C.accent} /> {CONTACT.location}
          </div>
        </Reveal>

        <Reveal
          delay={200}
          as="div"
          className="mt-16 pt-6 text-xs"
          style={{ borderTop: `1px solid ${C.panelBorder}`, fontFamily: fontMono, color: C.faint }}
        >
          © {new Date().getFullYear()} Al. Aasif Saneeth
        </Reveal>
      </div>
    </footer>
  );
}
