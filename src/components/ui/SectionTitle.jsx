import React from "react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { fontDisplay, C } from "../../styles/theme";

export default function SectionTitle({ eyebrow, title }) {
  return (
    <Reveal className="mb-12">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        className="text-3xl sm:text-4xl md:text-5xl"
        style={{ fontFamily: fontDisplay, fontWeight: 700, color: C.text }}
      >
        {title}
      </h2>
    </Reveal>
  );
}
