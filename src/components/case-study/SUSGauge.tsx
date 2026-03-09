"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";

export function SUSGauge({ score = 78 }: { score?: number }) {
  const { lang } = useLanguage();
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center p-12 bg-white/20 backdrop-blur-3xl rounded-[40px] border border-white/80 shadow-glass transition-all hover:shadow-glass-deep">
      <div className="relative w-48 h-48 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="96"
            cy="96"
            r={radius}
            stroke="currentColor"
            strokeWidth="12"
            fill="transparent"
            className="text-stone/20"
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
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-accent_orange"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-ink">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-6xl font-display font-bold"
          >
            {score}
          </motion.span>
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40 font-bold">/ 100</span>
        </div>
      </div>
      <div className="mt-10 text-center">
        <h4 className="font-sans-cn font-bold text-xl mb-2 tracking-tight">
          {lang === 'en' ? 'System Usability Scale' : '系統可用性評分 (SUS)'}
        </h4>
        <p className="text-[10px] text-ink/40 font-mono uppercase tracking-[0.2em] font-bold bg-ink/5 px-4 py-1.5 rounded-full inline-block">
          {lang === 'en' ? 'Target: 85/100 · Industry Avg: 68' : '目標: 85/100 · 行業平均: 68'}
        </p>
      </div>
    </div>
  );
}
