"use client";

import { motion } from "framer-motion";
import { USABILITY_RESULTS } from "@/data/research-data";

function DeltaBadge({ baseline, final, higherIsBetter, unit }: { baseline: number; final: number; higherIsBetter: boolean; unit: string }) {
  const diff = final - baseline;
  const pct = Math.round(Math.abs(diff / baseline) * 100);
  const isPositive = higherIsBetter ? diff > 0 : diff < 0;
  return (
    <span
      className={`font-mono text-[10px] font-bold px-2 py-0.5 ${isPositive ? "bg-sage/20 text-sage" : "bg-red-100 text-red-600"}`}
    >
      {isPositive ? "+" : ""}{Math.round(diff * 10) / 10}{unit} ({pct}%{isPositive ? "↑" : "↓"})
    </span>
  );
}

function MiniSparkline({ values, higherIsBetter }: { values: number[]; higherIsBetter: boolean }) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const W = 80;
  const H = 24;
  const pts = values.map((v, i) => ({
    x: (i / (values.length - 1)) * W,
    y: H - ((v - min) / range) * H,
  }));
  const pathD = pts.map((p, i) => (i === 0 ? `M${p.x},${p.y}` : `L${p.x},${p.y}`)).join(" ");
  const color = higherIsBetter ? "#5A8A5A" : "#8B7355";

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-20 h-6">
      <motion.path
        d={pathD}
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      {pts.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={2} fill={color} />
      ))}
    </svg>
  );
}

export function UsabilityMatrix() {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full font-mono text-xs border-collapse min-w-[700px]">
        <thead>
          <tr className="bg-ink text-canvas">
            <th className="text-left p-4 font-bold tracking-widest border-r border-white/10">指標 Metric</th>
            <th className="text-center p-4 font-bold tracking-widest border-r border-white/10">基準 Baseline</th>
            <th className="text-center p-4 font-bold tracking-widest border-r border-white/10">R1</th>
            <th className="text-center p-4 font-bold tracking-widest border-r border-white/10">R2</th>
            <th className="text-center p-4 font-bold tracking-widest border-r border-white/10 text-cedar">最終 Final</th>
            <th className="text-center p-4 font-bold tracking-widest border-r border-white/10">業界均值 Avg</th>
            <th className="text-center p-4 font-bold tracking-widest border-r border-white/10">目標 Target</th>
            <th className="text-center p-4 font-bold tracking-widest border-r border-white/10">趨勢 Trend</th>
            <th className="text-center p-4 font-bold tracking-widest">改善幅度</th>
          </tr>
        </thead>
        <tbody>
          {USABILITY_RESULTS.map((row, i) => {
            const barFinalPct =
              row.higherIsBetter
                ? Math.min((row.final / (row.target * 1.1)) * 100, 100)
                : Math.min(((row.target * 0.9) / row.final) * 100, 100);
            return (
              <motion.tr
                key={row.metric}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className={i % 2 === 0 ? "bg-white/60" : "bg-canvas/60"}
              >
                <td className="p-4 border-r border-ink/5">
                  <div className="font-bold text-ink">{row.metric}</div>
                  <div className="text-[9px] text-ink/40 font-sans-cn mt-0.5">{row.metricCN}</div>
                </td>
                <td className="p-4 border-r border-ink/5 text-center text-ink/50">
                  {row.baseline}{row.unit}
                </td>
                <td className="p-4 border-r border-ink/5 text-center text-ink/60">
                  {row.round1}{row.unit}
                </td>
                <td className="p-4 border-r border-ink/5 text-center text-ink/70">
                  {row.round2}{row.unit}
                </td>
                <td className="p-4 border-r border-ink/5 text-center">
                  <div className="font-bold text-cedar text-base">{row.final}{row.unit}</div>
                  <div className="mt-1.5 h-1.5 bg-ink/10 w-full">
                    <motion.div
                      className="h-full bg-cedar"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${barFinalPct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.08 }}
                    />
                  </div>
                </td>
                <td className="p-4 border-r border-ink/5 text-center text-ink/50">
                  {row.industryAvg}{row.unit}
                </td>
                <td className="p-4 border-r border-ink/5 text-center">
                  <span className="text-sage font-bold">{row.target}{row.unit}</span>
                </td>
                <td className="p-4 border-r border-ink/5 text-center">
                  <MiniSparkline
                    values={[row.baseline, row.round1, row.round2, row.final]}
                    higherIsBetter={row.higherIsBetter}
                  />
                </td>
                <td className="p-4 text-center">
                  <DeltaBadge
                    baseline={row.baseline}
                    final={row.final}
                    higherIsBetter={row.higherIsBetter}
                    unit={row.unit}
                  />
                </td>
              </motion.tr>
            );
          })}
        </tbody>
      </table>

      <div className="mt-4 flex gap-6 text-[9px] font-mono text-ink/40">
        <span>R1 = 第一輪測試 · R2 = 第二輪測試 · Final = 第三輪 (最終)</span>
        <span className="ml-auto">Source: ZenSelect Usability Testing · Maze + UsabilityHub · N=12 per round</span>
      </div>
    </div>
  );
}
