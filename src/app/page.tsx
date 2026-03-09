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

export default function CaseStudyPage() {
  return (
    <div className="min-h-screen text-ink overflow-hidden pb-40">
      {/* Background Watermark */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-[0.02] flex items-center justify-center select-none">
        <p className="text-[40vw] font-sans-cn font-bold leading-none text-ink">間</p>
      </div>

      <Header />

      <main className="relative z-10 max-w-screen-2xl mx-auto px-8 lg:px-20 pt-48">
        <Hero />
        <Process />
        <Discovery />
        <Persona />
        <Architecture />
        <Outcome />
        <PortfolioStrategy />
      </main>

      <Footer />
    </div>
  );
}
