import React from "react";
import { fontMono, C } from "../../styles/theme";

export default function Eyebrow({ children }) {
  return (
    <div
      className="text-xs uppercase mb-4"
      style={{ fontFamily: fontMono, color: C.accent, letterSpacing: "0.18em" }}
    >
      {children}
    </div>
  );
}
