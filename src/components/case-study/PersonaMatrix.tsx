"use client";

import { motion } from "framer-motion";
import { PERSONA_DATA } from "@/data/research-data";
import { useLanguage } from "@/context/language-context";

function DeviceBar({ mobile, desktop }: { mobile: number; desktop: number }) {
  return (
    <div className="w-full h-2 bg-ink/5 rounded-full overflow-hidden flex">
      <div className="h-full bg-accent_orange opacity-80" style={{ width: `${mobile}%` }} />
      <div className="h-full bg-stone" style={{ width: `${desktop}%` }} />
    </div>
  );
}

function ScoreCircle({ value, color }: { value: number; color: string }) {
  return (
    <div className="relative w-10 h-10 flex items-center justify-center">
      <svg className="w-full h-full transform -rotate-90">
        <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="3.5" fill="transparent" className="text-ink/5" />
        <motion.circle
          cx="20" cy="20" r="16" stroke={color} strokeWidth="3.5" fill="transparent"
          strokeDasharray={2 * Math.PI * 16}
          initial={{ strokeDashoffset: 2 * Math.PI * 16 }}
          whileInView={{ strokeDashoffset: 2 * Math.PI * 16 * (1 - value / 100) }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          strokeOpacity={0.8}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-[9px] font-mono font-bold" style={{ color }}>{value}</span>
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
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="min-w-[800px]">
        <div className="mb-10 flex justify-between items-end px-4">
          <div>
            <p className="font-mono text-xs text-accent_orange font-bold tracking-[0.3em] uppercase mb-2">
              {lang === 'en' ? 'Persona Intelligence Matrix' : '使用者畫像決策矩陣'}
            </p>
            <p className="font-mono text-[10px] text-ink/40 font-medium tracking-wide">
              {lang === 'en' ? 'Core demographic & psychographic attributes' : '核心人口統計與心理行為特徵'}
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-accent_orange" />
               <span className="font-mono text-[9px] text-ink/40 uppercase font-bold tracking-widest">Mobile</span>
            </div>
            <div className="flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-stone" />
               <span className="font-mono text-[9px] text-ink/40 uppercase font-bold tracking-widest">Desktop</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 border border-white/80 rounded-[40px] overflow-hidden bg-white/20 backdrop-blur-3xl shadow-glass transition-all hover:shadow-glass-deep">
          {/* Header row */}
          <div className="grid grid-cols-4 bg-ink text-canvas">
            <div className="p-8 font-mono text-[10px] font-bold tracking-[0.3em] uppercase border-r border-white/10 flex items-center">Attribute</div>
            {PERSONA_DATA.map((p) => (
              <div key={p.name} className="p-8 border-r border-white/10 last:border-r-0 flex items-center gap-4">
                <div className="w-4 h-4 rounded-full border-2 border-white/20" style={{ backgroundColor: p.color }} />
                <span className="font-display text-xl font-bold tracking-tight">{p.name}</span>
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
              className="grid grid-cols-4 border-b border-ink/5 last:border-b-0 hover:bg-white/40 transition-colors group"
            >
              <div className="p-8 font-mono text-[10px] font-bold text-ink/60 tracking-[0.2em] border-r border-ink/5 flex items-center bg-stone/5 group-hover:bg-stone/10 transition-colors uppercase">
                {lang === 'en' ? row.label : row.labelCN}
              </div>
              {PERSONA_DATA.map((p) => {
                const val = p[row.key as keyof typeof p];
                return (
                  <div key={p.name} className="p-8 font-sans-cn text-sm text-ink/80 border-r border-ink/5 last:border-r-0 flex items-center leading-relaxed font-light">
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
            <div className="p-8 font-mono text-[10px] font-bold text-ink/60 tracking-[0.2em] border-r border-ink/5 flex items-center uppercase">
              {lang === 'en' ? 'Device Usage' : '裝置分佈'}
            </div>
            {PERSONA_DATA.map((p) => (
              <div key={p.name} className="p-8 border-r border-ink/5 last:border-r-0 flex flex-col justify-center">
                <DeviceBar mobile={p.deviceMobile} desktop={p.deviceDesktop} />
                <div className="flex justify-between font-mono text-[9px] text-ink/40 mt-3 font-bold tracking-widest">
                  <span style={{ color: p.color }}>{p.deviceMobile}% MOB</span>
                  <span>{p.deviceDesktop}% DSK</span>
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
            className="grid grid-cols-4 bg-stone/20"
          >
            <div className="p-8 font-mono text-[10px] font-bold text-ink/60 tracking-[0.2em] border-r border-ink/5 flex items-center uppercase">
              {lang === 'en' ? 'Eco & Tech Scores' : '永續 & 科技分數'}
            </div>
            {PERSONA_DATA.map((p) => (
              <div key={p.name} className="p-8 border-r border-ink/5 last:border-r-0 flex gap-10 items-center">
                <div className="text-center group/score">
                  <ScoreCircle value={p.sustainabilityScore} color="#5A8A5A" />
                  <p className="font-mono text-[9px] text-ink/40 mt-3 font-bold uppercase tracking-widest group-hover/score:text-[#5A8A5A] transition-colors">Eco</p>
                </div>
                <div className="text-center group/score">
                  <ScoreCircle value={p.techSavvy} color={p.color} />
                  <p className="font-mono text-[9px] text-ink/40 mt-3 font-bold uppercase tracking-widest transition-colors" style={{ color: 'var(--hover-color)' }}>Tech</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-between items-center mt-6 px-4">
           <p className="font-mono text-[9px] text-ink/30 font-bold tracking-widest uppercase">
             {lang === 'en' ? 'Personas represent archetypes of ZenSelect primary user segments' : '基於 50+ 用戶訪談歸納 · 代表 ZenSelect 的核心使用者群體'}
           </p>
           <div className="h-px w-32 bg-ink/10" />
        </div>
      </div>
    </div>
  );
}
