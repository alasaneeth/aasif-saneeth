import React from "react";
import SectionTitle from "./ui/SectionTitle";
import { PROFILE } from "../data/content";
import { C } from "../styles/theme";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionTitle eyebrow="About" title="DevOps on Microsoft Azure" />
        <div className="flex flex-col gap-4 max-w-3xl">
          {PROFILE.about.map((p, i) => (
            <p key={i} className="text-base md:text-lg" style={{ color: C.dim }}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
