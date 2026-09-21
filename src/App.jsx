import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { Expertise, Certifications, Education, Links } from "./components/Extras";
import { C, fontBody, globalStyles } from "./styles/theme";

export default function App() {
  const navigate = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{ backgroundColor: C.bg, color: C.text, fontFamily: fontBody, minHeight: "100vh" }}>
      <style>{globalStyles}</style>

      <Nav onNavigate={navigate} />
      <Hero onNavigate={navigate} />
      <About />
      <Skills />
      <Expertise />
      <Experience />
      <Projects />
      <Certifications />
      <Education />
      <Links />
      <Contact />
    </div>
  );
}
