"use client";

import { Header, Footer } from "@/components/case-study/layout";
import { 
  Hero,
  Process,
  Discovery,
  Persona,
  Architecture,
  Outcome,
  PortfolioStrategy
} from "@/components/case-study/sections";
import GlowOrb from "@/components/ui/GlowOrb";
import { motion } from "framer-motion";

export default function CaseStudyPage() {
  return (
    <div className="min-h-screen bg-sand text-ink overflow-hidden pb-40 relative">
      {/* Ambient Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <GlowOrb className="top-[-100px] left-[-100px] opacity-40 blur-[120px]" />
        <GlowOrb className="bottom-[-150px] right-[-100px] opacity-30 blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/20 rounded-full blur-[160px]" />
      </div>

      {/* Background Watermark */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-[0.03] flex items-center justify-center select-none">
        <p className="text-[40vw] font-sans-cn font-bold leading-none text-ink">間</p>
      </div>

      <Header />

      <main className="relative z-10 max-w-screen-2xl mx-auto px-8 lg:px-20 pt-48">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Hero />
          <Process />
          <Discovery />
          <Persona />
          <Architecture />
          <Outcome />
          <PortfolioStrategy />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
