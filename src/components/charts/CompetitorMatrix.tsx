"use client";

import { motion } from "framer-motion";
import { COMPETITOR_DATA } from "@/data/research-data";

const Star = ({ filled }: { filled: boolean }) => (
  <span className={filled ? "text-cedar" : "text-ink/20"}>★</span>
);

const ScoreBar = ({ value, max = 5, highlight }: { value: number; max?: number; highlight: boolean }) => (
  <div className="flex gap-1">
    {Array.from({ length: max }).map((_, i) => (
      <Star key={i} filled={i < value} />
    ))}
  </div>
);

export function CompetitorMatrix() {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full font-mono text-xs border-collapse min-w-[900px]">
        <thead>
          <tr className="bg-ink text-canvas">
            <th className="text-left p-4 font-bold tracking-widest border-r border-white/10">品牌 Brand</th>
            <th className="text-left p-4 font-bold tracking-widest border-r border-white/10">定位 Tier</th>
            <th className="text-left p-4 font-bold tracking-widest border-r border-white/10">設計風格</th>
            <th className="text-center p-4 font-bold tracking-widest border-r border-white/10">品牌敘事</th>
            <th className="text-center p-4 font-bold tracking-widest border-r border-white/10">永續性</th>
            <th className="text-center p-4 font-bold tracking-widest border-r border-white/10">UX Score</th>
            <th className="text-left p-4 font-bold tracking-widest border-r border-white/10">台灣市場</th>
            <th className="text-left p-4 font-bold tracking-widest">目標客群</th>
          </tr>
        </thead>
        <tbody>
          {COMPETITOR_DATA.map((comp, i) => (
            <motion.tr
              key={comp.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={
                comp.highlight
                  ? "bg-cedar/10 border-l-4 border-cedar"
                  : i % 2 === 0
                  ? "bg-white/60"
                  : "bg-white/30"
              }
            >
              <td className="p-4 border-r border-ink/5">
                <span className={`font-bold text-sm ${comp.highlight ? "text-cedar" : "text-ink"}`}>
                  {comp.name}
                </span>
                {comp.highlight && (
                  <span className="ml-2 bg-cedar text-white text-[9px] px-2 py-0.5 font-bold tracking-widest uppercase">
                    TARGET
                  </span>
                )}
                <div className="text-ink/40 text-[10px] mt-0.5">{comp.nameCN}</div>
              </td>
              <td className="p-4 border-r border-ink/5">
                <span
                  className={`px-2 py-1 text-[10px] font-bold tracking-wider ${
                    comp.tier === "Premium"
                      ? "bg-cedar/20 text-cedar"
                      : comp.tier === "Mid-Premium"
                      ? "bg-sage/20 text-sage"
                      : comp.tier === "Mid"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-ink/10 text-ink/60"
                  }`}
                >
                  {comp.tier}
                </span>
              </td>
              <td className="p-4 border-r border-ink/5 text-ink/70">{comp.designStyle}</td>
              <td className="p-4 border-r border-ink/5 text-center">
                <ScoreBar value={comp.storytelling} highlight={comp.highlight} />
              </td>
              <td className="p-4 border-r border-ink/5 text-center">
                <ScoreBar value={comp.sustainability} highlight={comp.highlight} />
              </td>
              <td className="p-4 border-r border-ink/5 text-center">
                <div className="relative w-full">
                  <div className="text-sm font-bold text-cedar mb-1">{comp.uxScore}</div>
                  <div className="h-1.5 bg-ink/10 w-full">
                    <motion.div
                      className="h-full bg-cedar"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${comp.uxScore}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.08 }}
                    />
                  </div>
                </div>
              </td>
              <td className="p-4 border-r border-ink/5 text-ink/70 text-[11px]">{comp.taiwanPresence}</td>
              <td className="p-4 text-ink/70 text-[11px]">{comp.targetAudience}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex gap-6 text-[10px] font-mono text-ink/40 px-2">
        <span>★★★★★ = Excellent</span>
        <span>★★★★ = Good</span>
        <span>★★★ = Average</span>
        <span>★★ = Below Average</span>
        <span>★ = Poor</span>
      </div>
      <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-3 text-[10px] font-mono text-ink/50 border-t border-ink/10 pt-3">
        <span>Source: Mordor Intelligence, Statista 2024</span>
        <span>MUJI: 70 stores in TW, net profit +47% FY2025</span>
        <span>Pinkoi: 6.25M members, USD 27.2M revenue</span>
      </div>
    </div>
  );
}
