"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";

export function SUSGauge({ score = 78 }: { score?: number }) {
  const { lang } = useLanguage();
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white/30 backdrop-blur-md rounded-32 border border-white/40 shadow-glass">
      <div className="relative w-48 h-48 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="96"
            cy="96"
            r={radius}
            stroke="currentColor"
            strokeWidth="12"
            fill="transparent"
            className="text-stone/30"
          />
          <motion.circle
            cx="96"
            cy="96"
            r={radius}
            stroke="currentColor"
            strokeWidth="12"
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-accent_orange"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-ink">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl font-display font-bold"
          >
            {score}
          </motion.span>
          <span className="text-[10px] font-mono uppercase tracking-widest opacity-40">/ 100</span>
        </div>
      </div>
      <div className="mt-6 text-center">
        <h4 className="font-sans-cn font-bold text-lg mb-1">
          {lang === 'en' ? 'System Usability Scale' : '系統可用性評分 (SUS)'}
        </h4>
        <p className="text-xs text-ink/60 font-mono uppercase tracking-tighter">
          {lang === 'en' ? 'Target: 85/100 · Industry Avg: 68' : '目標: 85/100 · 行業平均: 68'}
        </p>
      </div>
    </div>
  );
}
