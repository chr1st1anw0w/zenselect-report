"use client";

import { motion } from "framer-motion";
import { HMW_STATEMENTS } from "@/data/research-data";

const QUADRANT_COLORS = {
  "Quick Win": { bg: "#E8F5E9", border: "#5A8A5A", text: "#5A8A5A", label: "Quick Win ⚡" },
  "Strategic": { bg: "#FFF8E1", border: "#8B7355", text: "#8B7355", label: "Strategic 🎯" },
  "Long-term": { bg: "#E3F2FD", border: "#5C8BC7", text: "#5C8BC7", label: "Long-term 🔭" },
};

export function HMWMatrix() {
  const quadrantMap: Record<string, typeof HMW_STATEMENTS> = {
    "Quick Win": [],
    "Strategic": [],
    "Long-term": [],
  };
  HMW_STATEMENTS.forEach((s) => quadrantMap[s.quadrant].push(s));

  return (
    <div className="w-full">
      <div className="mb-6">
        <p className="font-mono text-xs text-accent font-bold tracking-widest uppercase mb-1">
          HMW 核心機會矩陣 How Might We Opportunity Matrix
        </p>
        <p className="font-mono text-[10px] text-ink/40">
          8 個核心 HMW 問題依「影響力 (Impact)」× 「執行難度 (Effort)」分類 · 優先序決策框架
        </p>
      </div>

      {/* 2x2 visual matrix */}
      <div className="relative glass-card border border-ink/5 p-6 mb-6" style={{ minHeight: 340 }}>
        {/* Axis labels */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-2 font-mono text-[9px] text-ink/30 tracking-widest uppercase rotate-[-90deg] origin-center whitespace-nowrap">
          ← Low Impact · High Impact →
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 font-mono text-[9px] text-ink/30 tracking-widest uppercase">
          Low Effort ← → High Effort
        </div>

        {/* Quadrant grid */}
        <div className="grid grid-cols-2 gap-2 ml-4">
          {/* Top-left: High Impact, Low Effort = Quick Win */}
          <div className="border border-sage/30 bg-sage/5 p-4 min-h-[120px]">
            <p className="font-mono text-[10px] font-bold text-sage mb-3 tracking-widest">⚡ QUICK WIN</p>
            <p className="font-mono text-[9px] text-ink/30 mb-3">High Impact / Low Effort</p>
            {quadrantMap["Quick Win"].map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: item.id * 0.07 }}
                className="text-xs font-sans-cn text-ink/80 bg-white border border-sage/30 p-2 mb-2 shadow-sm"
              >
                <span className="font-mono text-[8px] text-sage mr-1">HMW{item.id}.</span>
                {item.statement}
              </motion.div>
            ))}
          </div>

          {/* Top-right: High Impact, High Effort = Strategic */}
          <div className="border border-accent/30 bg-accent/5 p-4 min-h-[120px]">
            <p className="font-mono text-[10px] font-bold text-accent mb-3 tracking-widest">🎯 STRATEGIC</p>
            <p className="font-mono text-[9px] text-ink/30 mb-3">High Impact / High Effort</p>
            {quadrantMap["Strategic"].map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: item.id * 0.07 }}
                className="text-xs font-sans-cn text-ink/80 bg-white border border-accent/30 p-2 mb-2 shadow-sm"
              >
                <span className="font-mono text-[8px] text-accent mr-1">HMW{item.id}.</span>
                {item.statement}
              </motion.div>
            ))}
          </div>

          {/* Bottom area: Long-term */}
          <div className="col-span-2 border border-blue-200 bg-blue-50/40 p-4">
            <p className="font-mono text-[10px] font-bold text-blue-500 mb-3 tracking-widest">🔭 LONG-TERM BETS</p>
            <p className="font-mono text-[9px] text-ink/30 mb-3">Low-Medium Impact / Very High Effort</p>
            <div className="flex flex-wrap gap-3">
              {quadrantMap["Long-term"].map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: item.id * 0.07 }}
                  className="text-xs font-sans-cn text-ink/80 bg-white border border-blue-200 p-2 shadow-sm flex-1 min-w-[200px]"
                >
                  <span className="font-mono text-[8px] text-blue-400 mr-1">HMW{item.id}.</span>
                  {item.statement}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Table view */}
      <div className="overflow-x-auto">
        <table className="w-full font-mono text-[10px] border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-ink/5">
              <th className="text-left p-3 font-bold tracking-widest border border-ink/10">#</th>
              <th className="text-left p-3 font-bold tracking-widest border border-ink/10">HMW Statement</th>
              <th className="text-center p-3 font-bold tracking-widest border border-ink/10">影響力 Impact</th>
              <th className="text-center p-3 font-bold tracking-widest border border-ink/10">難度 Effort</th>
              <th className="text-center p-3 font-bold tracking-widest border border-ink/10">Priority</th>
            </tr>
          </thead>
          <tbody>
            {HMW_STATEMENTS.sort((a, b) => b.impact - a.impact || a.effort - b.effort).map((item, i) => {
              const qStyle = QUADRANT_COLORS[item.quadrant as keyof typeof QUADRANT_COLORS];
              return (
                <motion.tr
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="border-b border-ink/5 hover:glass-card transition-colors"
                >
                  <td className="p-3 border border-ink/5 text-ink/40">HMW{item.id}</td>
                  <td className="p-3 border border-ink/5 font-sans-cn text-xs text-ink/80">{item.statement}</td>
                  <td className="p-3 border border-ink/5 text-center">
                    <div className="flex justify-center">
                      {Array.from({ length: 10 }).map((_, j) => (
                        <div key={j} className={`w-1.5 h-3 mx-px ${j < item.impact ? "bg-accent" : "bg-ink/10"}`} />
                      ))}
                    </div>
                    <span className="text-accent font-bold">{item.impact}/10</span>
                  </td>
                  <td className="p-3 border border-ink/5 text-center">
                    <div className="flex justify-center">
                      {Array.from({ length: 10 }).map((_, j) => (
                        <div key={j} className={`w-1.5 h-3 mx-px ${j < item.effort ? "bg-ink/40" : "bg-ink/10"}`} />
                      ))}
                    </div>
                    <span className="text-ink/60 font-bold">{item.effort}/10</span>
                  </td>
                  <td className="p-3 border border-ink/5 text-center">
                    <span
                      className="px-2 py-1 text-[9px] font-bold tracking-wider"
                      style={{ backgroundColor: qStyle.bg, color: qStyle.text, border: `1px solid ${qStyle.border}40` }}
                    >
                      {qStyle.label}
                    </span>
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
