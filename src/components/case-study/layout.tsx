"use client";

import { Activity } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export const Header = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = ["process", "discovery", "definition", "architecture", "outcome"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: "process", label: "00. Flow" },
    { id: "discovery", label: "01. Research" },
    { id: "definition", label: "02. Personas" },
    { id: "architecture", label: "03. IA" },
    { id: "outcome", label: "04. Metrics" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-canvas/90 backdrop-blur-xl border-b border-ink/10 px-8 py-5">
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-cedar origin-left"
        style={{ scaleX }}
      />
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-6">
          <Activity className="text-cedar w-6 h-6" />
          <p className="font-mono text-sm font-bold tracking-tighter text-ink">ZEN_SELECT // ANALYSIS_CORE</p>
          <div className="w-px h-5 bg-ink/20 hidden md:block"></div>
          <p className="font-mono text-xs opacity-50 hidden md:block tracking-widest text-ink">ACCESS_LEVEL: EXPERT_ONLY // v2026.03.08</p>
        </div>
        <nav className="flex gap-8 font-mono text-xs font-bold uppercase tracking-widest">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`transition-all duration-300 hover:text-cedar ${
                activeSection === item.id ? "text-cedar opacity-100 scale-110" : "text-ink opacity-70 hover:opacity-100"
              } ${item.id === "process" ? "hidden lg:block" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export const Footer = () => (
  <footer className="border-t border-ink/5 mt-20 p-16 bg-white/60">
     <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 font-mono text-xs tracking-widest font-bold">
        <p className="opacity-50">© 2026 ZENSELECT STRATEGY. REACT + FRAMER MOTION ARCHITECTURE.</p>
        <p className="opacity-50 text-cedar">ENGINEERED FOR EXPERT REVIEW.</p>
     </div>
  </footer>
);
