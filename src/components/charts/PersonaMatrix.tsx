"use client";

import { motion } from "framer-motion";
import { PERSONA_DATA } from "@/data/research-data";

const DeviceBar = ({ mobile, desktop }: { mobile: number; desktop: number }) => (
  <div className="flex h-3 w-full overflow-hidden">
    <div className="h-full bg-accent transition-all" style={{ width: `${mobile}%` }} title={`Mobile ${mobile}%`} />
    <div className="h-full bg-ink/20 transition-all" style={{ width: `${desktop}%` }} title={`Desktop ${desktop}%`} />
  </div>
);

const ScoreCircle = ({ value, max = 100, color }: { value: number; max?: number; color: string }) => {
  const pct = value / max;
  const r = 18;
  const circ = 2 * Math.PI * r;
  const dashoffset = circ * (1 - pct);
  return (
    <svg width={44} height={44} viewBox="0 0 44 44" className="shrink-0">
      <circle cx={22} cy={22} r={r} fill="none" stroke="#1C1A180D" strokeWidth={4} />
      <motion.circle
        cx={22}
        cy={22}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={4}
        strokeDasharray={circ}
        strokeLinecap="square"
        strokeDashoffset={circ}
        whileInView={{ strokeDashoffset: dashoffset }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ transformOrigin: "center", transform: "rotate(-90deg)" }}
      />
      <text x={22} y={26} textAnchor="middle" fontSize={10} fontWeight="bold" fill={color} fontFamily="JetBrains Mono, monospace">
        {value}
      </text>
    </svg>
  );
};

const ROWS = [
  { label: "年齡 Age", key: "age", format: (v: number) => `${v} 歲` },
  { label: "月收入 Income", key: "income", format: (v: number) => `NT$${v.toLocaleString()}` },
  { label: "決策驅動 Driver", key: "decisionDriver", format: (v: string) => v },
  { label: "核心痛點 Pain", key: "painPoint", format: (v: string) => v },
  { label: "偏好裝置 Device", key: "device", format: (v: string) => v },
  { label: "購買頻率 Purchase", key: "purchaseFrequency", format: (v: string) => v },
];

export function PersonaMatrix() {
  return (
    <div className="w-full overflow-x-auto">
      {/* Header row with persona names */}
      <div className="grid grid-cols-4 mb-0 min-w-[600px]">
        <div className="p-4 bg-ink text-canvas font-mono text-xs font-bold tracking-widest">
          屬性 Attribute
        </div>
        {PERSONA_DATA.map((p) => (
          <div
            key={p.name}
            className="p-4 font-mono text-xs font-bold tracking-widest text-center"
            style={{ backgroundColor: p.color, color: "#F5F0EB" }}
          >
            <div className="text-lg font-display font-light">{p.name}</div>
            <div className="text-[9px] opacity-70 uppercase mt-1">{p.role}</div>
          </div>
        ))}
      </div>

      {/* Data rows */}
      <div className="min-w-[600px]">
        {ROWS.map((row, ri) => (
          <motion.div
            key={row.key}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ri * 0.07, duration: 0.4 }}
            className={`grid grid-cols-4 border-b border-ink/5 ${ri % 2 === 0 ? "glass-card" : "bg-stone/60"}`}
          >
            <div className="p-4 font-mono text-[10px] font-bold text-ink/60 tracking-wider border-r border-ink/5 flex items-center">
              {row.label}
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
            裝置分佈 Split
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
            永續 & Tech 分數
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
        基於 50+ 用戶訪談歸納 · Personas represent archetypes of ZenSelect&apos;s primary user segments
      </p>
    </div>
  );
}
