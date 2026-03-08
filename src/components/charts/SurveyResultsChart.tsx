"use client";

import { motion } from "framer-motion";
import { SURVEY_RESULTS } from "@/data/research-data";

export function SurveyResultsChart() {
  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="font-mono text-xs text-accent font-bold tracking-widest uppercase">
            用戶訪談 & 問卷調查結果
          </p>
          <p className="font-mono text-[10px] text-ink/40 mt-1">
            N=50+ · 台灣都市居民 · 月收入 40,000+ TWD · Semi-structured Interview + Quantitative Survey
          </p>
        </div>
        <div className="text-right font-mono text-[10px] text-ink/40">
          <div>APAC Benchmark →</div>
          <div className="flex items-center justify-end gap-1 mt-1">
            <div className="w-3 h-1 bg-sage/60 border border-sage" />
            <span>Industry ref.</span>
          </div>
        </div>
      </div>

      {SURVEY_RESULTS.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07, duration: 0.5 }}
          className="group"
        >
          <div className="flex items-center justify-between mb-1.5">
            <p className="font-sans-cn text-xs font-medium text-ink/80 leading-tight max-w-[70%]">
              {item.label}
            </p>
            <span className="font-mono text-sm font-bold text-accent">{item.value}%</span>
          </div>
          <div className="relative h-6 bg-ink/5">
            {/* Benchmark line */}
            {item.benchmark !== null && (
              <div
                className="absolute top-0 bottom-0 w-px bg-sage z-10"
                style={{ left: `${item.benchmark}%` }}
              >
                <div className="absolute -top-4 left-1 font-mono text-[8px] text-sage whitespace-nowrap">
                  {item.benchmark}% APAC
                </div>
              </div>
            )}
            {/* Value bar */}
            <motion.div
              className="h-full bg-accent relative"
              initial={{ width: 0 }}
              whileInView={{ width: `${item.value}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: i * 0.07 + 0.2, ease: "easeOut" }}
            >
              <div className="absolute inset-y-0 right-0 w-1 bg-accent/60" />
            </motion.div>
          </div>
          <p className="font-mono text-[9px] text-ink/30 mt-1 truncate">{item.labelEN}</p>
        </motion.div>
      ))}

      <div className="border-t border-ink/10 pt-4 mt-6 grid grid-cols-3 gap-4 font-mono text-[9px] text-ink/40">
        <span>Source: Primary Research (ZenSelect UX Team)</span>
        <span>Benchmark: Bain & Co. APAC 2024</span>
        <span>Methodology: Mixed-methods (N=50 interviews + 200+ survey)</span>
      </div>
    </div>
  );
}
