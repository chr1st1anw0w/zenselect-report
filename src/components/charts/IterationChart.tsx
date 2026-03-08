"use client";

import { motion } from "framer-motion";
import { USABILITY_RESULTS } from "@/data/research-data";

const CHART_H = 160;
const CHART_W = 560;
const PAD = { top: 20, right: 30, bottom: 40, left: 50 };
const ROUNDS = ["Baseline", "Round 1", "Round 2", "Final"];

function normalize(val: number, min: number, max: number, higherIsBetter: boolean) {
  if (higherIsBetter) return (val - min) / (max - min);
  return (max - val) / (max - min);
}

const SERIES_COLORS = ["#8B7355", "#5C8BC7", "#5A8A5A", "#E57373", "#9575CD", "#FFB74D"];

export function IterationChart() {
  const metrics = USABILITY_RESULTS.slice(0, 4); // Show top 4 metrics for clarity

  const seriesData = metrics.map((m, mi) => {
    const values = [m.baseline, m.round1, m.round2, m.final];
    const min = Math.min(...values) * 0.9;
    const max = Math.max(...values) * 1.05;
    const normalized = values.map((v) => normalize(v, min, max, m.higherIsBetter));
    return {
      ...m,
      normalizedValues: normalized,
      rawValues: values,
      color: SERIES_COLORS[mi],
    };
  });

  const plotW = CHART_W - PAD.left - PAD.right;
  const plotH = CHART_H - PAD.top - PAD.bottom;

  function toSVGX(i: number) {
    return PAD.left + (i / (ROUNDS.length - 1)) * plotW;
  }

  function toSVGY(normalizedVal: number) {
    return PAD.top + (1 - normalizedVal) * plotH;
  }

  return (
    <div className="w-full">
      <div className="mb-6">
        <p className="font-mono text-xs text-cedar font-bold tracking-widest uppercase mb-1">
          迭代改善追蹤 Iteration Improvement Tracking
        </p>
        <p className="font-mono text-[10px] text-ink/40">
          3 輪可用性測試各關鍵指標改善曲線 (正規化呈現，向上為改善方向)
        </p>
      </div>

      <div className="bg-white/60 border border-ink/5 p-6 overflow-x-auto">
        <svg viewBox={`0 0 ${CHART_W} ${CHART_H + 20}`} className="w-full" style={{ minWidth: 400 }}>
          {/* Grid */}
          {[0, 0.25, 0.5, 0.75, 1].map((pct) => (
            <line
              key={pct}
              x1={PAD.left}
              y1={toSVGY(pct)}
              x2={CHART_W - PAD.right}
              y2={toSVGY(pct)}
              stroke="#1C1A18"
              strokeOpacity={0.05}
              strokeWidth={1}
              strokeDasharray={pct === 0 || pct === 1 ? "none" : "4 4"}
            />
          ))}

          {/* Vertical round lines */}
          {ROUNDS.map((_, i) => (
            <line
              key={i}
              x1={toSVGX(i)}
              y1={PAD.top}
              x2={toSVGX(i)}
              y2={PAD.top + plotH}
              stroke="#1C1A18"
              strokeOpacity={0.06}
              strokeWidth={1}
            />
          ))}

          {/* Series */}
          {seriesData.map((series, si) => {
            const pathD = series.normalizedValues
              .map((v, i) => {
                const x = toSVGX(i);
                const y = toSVGY(v);
                if (i === 0) return `M ${x} ${y}`;
                const prevX = toSVGX(i - 1);
                const prevY = toSVGY(series.normalizedValues[i - 1]);
                const cpx = (prevX + x) / 2;
                return `C ${cpx} ${prevY}, ${cpx} ${y}, ${x} ${y}`;
              })
              .join(" ");

            return (
              <g key={series.metric}>
                <motion.path
                  d={pathD}
                  fill="none"
                  stroke={series.color}
                  strokeWidth={2}
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: si * 0.15, ease: "easeOut" }}
                />
                {series.normalizedValues.map((v, i) => (
                  <motion.g key={i}>
                    <motion.circle
                      cx={toSVGX(i)}
                      cy={toSVGY(v)}
                      r={5}
                      fill={series.color}
                      stroke="white"
                      strokeWidth={1.5}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: si * 0.15 + (i / ROUNDS.length) * 1.2 }}
                    />
                    {/* Value label on final point */}
                    {i === ROUNDS.length - 1 && (
                      <motion.text
                        x={toSVGX(i) + 8}
                        y={toSVGY(v) + 4}
                        fontSize={8}
                        fill={series.color}
                        fontFamily="JetBrains Mono, monospace"
                        fontWeight="bold"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: si * 0.15 + 1.2 }}
                      >
                        {series.rawValues[i]}{series.unit}
                      </motion.text>
                    )}
                  </motion.g>
                ))}
              </g>
            );
          })}

          {/* X axis labels */}
          {ROUNDS.map((round, i) => (
            <text
              key={round}
              x={toSVGX(i)}
              y={PAD.top + plotH + 18}
              textAnchor="middle"
              fontSize={9}
              fill="#1C1A18"
              fillOpacity={0.5}
              fontFamily="JetBrains Mono, monospace"
              fontWeight="bold"
            >
              {round}
            </text>
          ))}

          {/* Y axis labels */}
          <text x={PAD.left - 6} y={toSVGY(1) + 3} textAnchor="end" fontSize={8} fill="#5A8A5A" fillOpacity={0.7} fontFamily="JetBrains Mono, monospace">Better</text>
          <text x={PAD.left - 6} y={toSVGY(0) + 3} textAnchor="end" fontSize={8} fill="#E57373" fillOpacity={0.7} fontFamily="JetBrains Mono, monospace">Base</text>
        </svg>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mt-4 font-mono text-[10px]">
          {seriesData.map((s) => (
            <div key={s.metric} className="flex items-center gap-2">
              <div className="w-4 h-0.5" style={{ backgroundColor: s.color }} />
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: s.color }} />
              <span style={{ color: s.color }}>{s.metric}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Summary improvement cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
        {seriesData.map((s, i) => {
          const diff = s.rawValues[3] - s.rawValues[0];
          const pct = Math.round(Math.abs(diff / s.rawValues[0]) * 100);
          const isGood = s.higherIsBetter ? diff > 0 : diff < 0;
          return (
            <motion.div
              key={s.metric}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white/60 border-t-4 p-4"
              style={{ borderColor: s.color }}
            >
              <p className="font-mono text-[9px] text-ink/40 mb-1">{s.metricCN}</p>
              <p className="font-display text-2xl font-light" style={{ color: s.color }}>
                {isGood ? "+" : ""}{Math.round(diff * 10) / 10}{s.unit}
              </p>
              <p className="font-mono text-[10px] font-bold" style={{ color: isGood ? "#5A8A5A" : "#E57373" }}>
                {pct}% {isGood ? "改善↑" : "↓"}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
