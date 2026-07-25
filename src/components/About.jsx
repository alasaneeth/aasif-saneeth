import React from "react";
import SectionTitle from "./ui/SectionTitle";
import { PROFILE } from "../data/content";
import { C } from "../styles/theme";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionTitle eyebrow="About" title="A little about me" />
        <p className="text-base md:text-lg max-w-2xl" style={{ color: C.dim }}>
          {PROFILE.about}
        </p>
      </div>
    </section>
  );
}
