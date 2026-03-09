"use client";

import { motion } from "framer-motion";
import { PERSONA_DATA } from "@/data/research-data";
import { useLanguage } from "@/context/language-context";

function DeviceBar({ mobile, desktop }: { mobile: number; desktop: number }) {
  return (
    <div className="w-full h-1.5 bg-ink/5 rounded-full overflow-hidden flex">
      <div className="h-full bg-accent_orange" style={{ width: `${mobile}%` }} />
      <div className="h-full bg-stone" style={{ width: `${desktop}%` }} />
    </div>
  );
}

function ScoreCircle({ value, color }: { value: number; color: string }) {
  return (
    <div className="relative w-8 h-8 flex items-center justify-center">
      <svg className="w-full h-full transform -rotate-90">
        <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="3" fill="transparent" className="text-ink/5" />
        <motion.circle
          cx="16" cy="16" r="14" stroke={color} strokeWidth="3" fill="transparent"
          strokeDasharray={2 * Math.PI * 14}
          initial={{ strokeDashoffset: 2 * Math.PI * 14 }}
          whileInView={{ strokeDashoffset: 2 * Math.PI * 14 * (1 - value / 100) }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-[8px] font-mono font-bold" style={{ color }}>{value}</span>
    </div>
  );
}

export function PersonaMatrix() {
  const { lang } = useLanguage();

  const rows = [
    { label: "Age", labelCN: "年齡", key: "age", format: (v: number) => `${v}y` },
    { label: "Role", labelCN: "角色", key: "role", format: (v: string) => v },
    { label: "Decision", labelCN: "決策動機", key: "decisionDriver", format: (v: string) => v },
    { label: "Pain Point", labelCN: "痛點", key: "painPoint", format: (v: string) => v },
    { label: "Frequency", labelCN: "購買頻率", key: "purchaseFrequency", format: (v: string) => v },
  ];

  return (
    <div className="w-full overflow-hidden">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <p className="font-mono text-xs text-accent_orange font-bold tracking-widest uppercase mb-1">
            {lang === 'en' ? 'Persona Intelligence Matrix' : '使用者畫像決策矩陣'}
          </p>
          <p className="font-mono text-[10px] text-ink/40">
            {lang === 'en' ? 'Core demographic & psychographic attributes' : '核心人口統計與心理行為特徵'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 border border-ink/5 rounded-24 overflow-hidden bg-white/20 backdrop-blur-sm">
        {/* Header row */}
        <div className="grid grid-cols-4 bg-ink text-canvas">
          <div className="p-4 font-mono text-[10px] font-bold tracking-widest uppercase border-r border-white/5 flex items-center">Attribute</div>
          {PERSONA_DATA.map((p) => (
            <div key={p.name} className="p-4 border-r border-white/5 last:border-r-0 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: p.color }} />
              <span className="font-display font-bold tracking-tight">{p.name}</span>
            </div>
          ))}
        </div>

        {/* Dynamic rows */}
        {rows.map((row, i) => (
          <motion.div
            key={row.label}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="grid grid-cols-4 border-b border-ink/5 last:border-b-0 hover:bg-white/40 transition-colors"
          >
            <div className="p-4 font-mono text-[10px] font-bold text-ink/60 tracking-wider border-r border-ink/5 flex items-center bg-stone/10">
              {lang === 'en' ? row.label : row.labelCN}
            </div>
            {PERSONA_DATA.map((p) => {
              const val = p[row.key as keyof typeof p];
              return (
                <div key={p.name} className="p-4 font-sans-cn text-xs text-ink/80 border-r border-ink/5 last:border-r-0 flex items-center">
                  {row.format(val as never)}
                </div>
              );
            })}
          </motion.div>
        ))}

        {/* Device split visual row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-4 border-b border-ink/5 bg-white/40"
        >
          <div className="p-4 font-mono text-[10px] font-bold text-ink/60 tracking-wider border-r border-ink/5 flex items-center">
            {lang === 'en' ? 'Device Usage' : '裝置分佈'}
          </div>
          {PERSONA_DATA.map((p) => (
            <div key={p.name} className="p-4 border-r border-ink/5 last:border-r-0">
              <DeviceBar mobile={p.deviceMobile} desktop={p.deviceDesktop} />
              <div className="flex justify-between font-mono text-[9px] text-ink/40 mt-1">
                <span style={{ color: p.color }}>📱 {p.deviceMobile}%</span>
                <span>🖥 {p.deviceDesktop}%</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scores row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-4 bg-stone/40"
        >
          <div className="p-4 font-mono text-[10px] font-bold text-ink/60 tracking-wider border-r border-ink/5 flex items-center">
            {lang === 'en' ? 'Eco & Tech Scores' : '永續 & 科技分數'}
          </div>
          {PERSONA_DATA.map((p) => (
            <div key={p.name} className="p-4 border-r border-ink/5 last:border-r-0 flex gap-3 items-center">
              <div className="text-center">
                <ScoreCircle value={p.sustainabilityScore} color="#5A8A5A" />
                <p className="font-mono text-[8px] text-ink/40 mt-1">Eco</p>
              </div>
              <div className="text-center">
                <ScoreCircle value={p.techSavvy} color={p.color} />
                <p className="font-mono text-[8px] text-ink/40 mt-1">Tech</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <p className="font-mono text-[9px] text-ink/30 mt-3">
        {lang === 'en' ? 'Personas represent archetypes of ZenSelect primary user segments' : '基於 50+ 用戶訪談歸納 · 代表 ZenSelect 的核心使用者群體'}
      </p>
    </div>
  );
}
