"use client";

import { motion } from "framer-motion";
import { JOURNEY_POINTS } from "@/data/research-data";
import { useLanguage } from "@/context/language-context";

const CHART_H = 180;
const CHART_W = 700;
const PAD_X = 60;
const PAD_Y = 20;
const MIN_VAL = 1;
const MAX_VAL = 10;

function toY(val: number) {
  return PAD_Y + ((MAX_VAL - val) / (MAX_VAL - MIN_VAL)) * (CHART_H - PAD_Y * 2);
}

function toX(i: number, total: number) {
  return PAD_X + (i / (total - 1)) * (CHART_W - PAD_X * 2);
}

function buildPath(points: { val: number; idx: number }[], total: number) {
  return points
    .map((p, i) => {
      const x = toX(p.idx, total);
      const y = toY(p.val);
      if (i === 0) return `M ${x} ${y}`;
      const prevX = toX(points[i - 1].idx, total);
      const prevY = toY(points[i - 1].val);
      const cpx = (prevX + x) / 2;
      return `C ${cpx} ${prevY}, ${cpx} ${y}, ${x} ${y}`;
    })
    .join(" ");
}

const PERSONAS = [
  { key: "sofia" as const, label: "Sofia", color: "#8B7355" },
  { key: "danny" as const, label: "Danny", color: "#5C8BC7" },
  { key: "mei" as const, label: "Mei", color: "#5A8A5A" },
];

export function EmotionalJourneyChart() {
  const { lang } = useLanguage();
  const total = JOURNEY_POINTS.length;

  return (
    <div className="w-full">
      <div className="mb-6">
        <p className="font-mono text-xs text-accent_orange font-bold tracking-widest uppercase mb-1">
          {lang === 'en' ? 'Emotional Journey Arc' : '使用者旅程情感弧線'}
        </p>
        <p className="font-mono text-[10px] text-ink/40">
          {lang === 'en'
            ? 'Emotional index across 7 touchpoints (1=Low / 10=High) · Modeled from usability data'
            : '各 Persona 於 7 個旅程觸點的情感指數 (1=最低 / 10=最高) · 依可用性測試數據建模'}
        </p>
      </div>

      <div className="bg-white/30 backdrop-blur-md rounded-32 border border-white/40 shadow-glass p-6 overflow-x-auto">
        <svg viewBox={`0 0 ${CHART_W} ${CHART_H + 80}`} className="w-full" style={{ minWidth: 500 }}>
          {/* Grid horizontal lines */}
          {[2, 4, 6, 8, 10].map((v) => (
            <g key={v}>
              <line
                x1={PAD_X}
                y1={toY(v)}
                x2={CHART_W - PAD_X}
                y2={toY(v)}
                stroke="#1C1A18"
                strokeOpacity={0.05}
                strokeWidth={1}
              />
              <text x={PAD_X - 8} y={toY(v) + 4} textAnchor="end" fontSize={9} fill="#1C1A18" fillOpacity={0.35} fontFamily="monospace">
                {v}
              </text>
            </g>
          ))}

          {/* Persona lines */}
          {PERSONAS.map((persona) => {
            const points = JOURNEY_POINTS.map((jp, idx) => ({
              val: jp[persona.key],
              idx,
            }));
            const pathD = buildPath(points, total);
            return (
              <g key={persona.key}>
                <motion.path
                  d={pathD}
                  fill="none"
                  stroke={persona.color}
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                {points.map((p, i) => (
                  <motion.circle
                    key={i}
                    cx={toX(p.idx, total)}
                    cy={toY(p.val)}
                    r={5}
                    fill={persona.color}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i / total) * 1.8 + 0.3, duration: 0.3 }}
                  />
                ))}
              </g>
            );
          })}

          {/* X axis stage labels */}
          {JOURNEY_POINTS.map((jp, i) => (
            <g key={jp.stage}>
              <line
                x1={toX(i, total)}
                y1={CHART_H - PAD_Y}
                x2={toX(i, total)}
                y2={CHART_H - PAD_Y + 5}
                stroke="#1C1A18"
                strokeOpacity={0.15}
              />
              <text
                x={toX(i, total)}
                y={CHART_H - PAD_Y + 18}
                textAnchor="middle"
                fontSize={8.5}
                fontWeight="bold"
                fill="#1C1A18"
                fillOpacity={0.6}
              >
                {lang === 'en' ? jp.stage : jp.stageCN}
              </text>
              <text
                x={toX(i, total)}
                y={CHART_H - PAD_Y + 32}
                textAnchor="middle"
                fontSize={7.5}
                fill="#1C1A18"
                fillOpacity={0.35}
                fontFamily="monospace"
              >
                {jp.stage}
              </text>
            </g>
          ))}
        </svg>

        {/* Legend */}
        <div className="flex flex-wrap gap-6 mt-4 font-mono text-[10px]">
          {PERSONAS.map((p) => (
            <div key={p.key} className="flex items-center gap-2">
              <div className="w-6 h-0.5" style={{ backgroundColor: p.color }} />
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
              <span style={{ color: p.color }}>{p.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
