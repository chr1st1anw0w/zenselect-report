"use client";

import { motion } from "framer-motion";
import { DESIGN_SYSTEM_COMPONENTS, UX_BENCHMARKS } from "@/data/research-data";
import { CheckCircle2, Circle } from "lucide-react";

export function DesignSystemMatrix() {
  return (
    <div className="w-full">
      {/* ROI Banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-ink text-canvas p-6 mb-6 flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <div>
          <p className="font-mono text-xs text-cedar font-bold tracking-widest mb-1">DESIGN SYSTEM ROI</p>
          <p className="font-sans-cn text-sm text-canvas/70">建立設計系統的投資回報 · Based on Forrester/Etsy benchmark</p>
        </div>
        <div className="flex gap-8 text-center">
          <div>
            <p className="font-display text-4xl font-light text-cedar">{UX_BENCHMARKS.designSystemROI}%</p>
            <p className="font-mono text-[9px] text-white/40 uppercase tracking-wider">3-Year ROI</p>
          </div>
          <div className="w-px bg-white/10" />
          <div>
            <p className="font-display text-4xl font-light text-cedar">-35%</p>
            <p className="font-mono text-[9px] text-white/40 uppercase tracking-wider">Dev Cost Reduction</p>
          </div>
          <div className="w-px bg-white/10" />
          <div>
            <p className="font-display text-4xl font-light text-cedar">+38%</p>
            <p className="font-mono text-[9px] text-white/40 uppercase tracking-wider">Design Efficiency</p>
          </div>
        </div>
      </motion.div>

      {/* Component table */}
      <div className="overflow-x-auto">
        <table className="w-full font-mono text-xs border-collapse min-w-[560px]">
          <thead>
            <tr className="bg-ink/5 border-b border-ink/10">
              <th className="text-left p-3 font-bold tracking-widest border-r border-ink/10">元件 Component</th>
              <th className="text-center p-3 font-bold tracking-widest border-r border-ink/10">覆蓋率 Coverage</th>
              <th className="text-center p-3 font-bold tracking-widest border-r border-ink/10">WCAG AA</th>
              <th className="text-left p-3 font-bold tracking-widest">應用範疇 Usage</th>
            </tr>
          </thead>
          <tbody>
            {DESIGN_SYSTEM_COMPONENTS.map((comp, i) => (
              <motion.tr
                key={comp.component}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className={`border-b border-ink/5 ${i % 2 === 0 ? "bg-white/60" : "bg-canvas/40"} hover:bg-white transition-colors`}
              >
                <td className="p-3 border-r border-ink/5 font-bold text-ink">{comp.component}</td>
                <td className="p-3 border-r border-ink/5">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-ink/10">
                      <motion.div
                        className={`h-full ${comp.coverage === 100 ? "bg-sage" : comp.coverage >= 85 ? "bg-cedar" : "bg-amber-400"}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${comp.coverage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.05 }}
                      />
                    </div>
                    <span className={`font-bold text-[10px] w-8 text-right ${comp.coverage === 100 ? "text-sage" : "text-cedar"}`}>
                      {comp.coverage}%
                    </span>
                  </div>
                </td>
                <td className="p-3 border-r border-ink/5 text-center">
                  {comp.wcagAA ? (
                    <CheckCircle2 className="w-4 h-4 text-sage mx-auto" />
                  ) : (
                    <Circle className="w-4 h-4 text-ink/20 mx-auto" />
                  )}
                </td>
                <td className="p-3 text-ink/60 font-sans-cn text-[11px]">{comp.usage}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex gap-6 text-[9px] font-mono text-ink/30">
        <span>Source: Forrester Total Economic Impact™ Study · Etsy Design System Case Study</span>
        <span className="ml-auto">WCAG AA = Web Content Accessibility Guidelines 2.1 Level AA</span>
      </div>
    </div>
  );
}
