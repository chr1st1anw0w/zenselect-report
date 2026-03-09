"use client";

import { motion } from "framer-motion";
import { JOURNEY_POINTS } from "@/data/research-data";
import { useLanguage } from "@/context/language-context";

const CHART_H = 240;
const CHART_W = 850;
const PAD_X = 80;
const PAD_Y = 50;
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
    <div className="w-full bg-white rounded-[40px] p-6 md:p-10 shadow-glass border border-white/80 relative overflow-hidden transition-all duration-500 hover:shadow-glass-deep">
      <div className="relative overflow-x-auto scrollbar-hide pb-6">
        <svg viewBox={`0 0 ${CHART_W} ${CHART_H + 110}`} className="w-full min-w-[780px]">
          {/* zones */}
          <line x1={PAD_X} y1={toY(8)} x2={CHART_W-PAD_X} y2={toY(8)} stroke="#E2E8F0" strokeDasharray="6 6" strokeOpacity="0.8" />
          <text x={PAD_X + 10} y={toY(8) - 12} fontSize="10" className="fill-stone-400 font-mono italic font-bold uppercase tracking-widest">DELIGHT ZONE</text>

          <line x1={PAD_X} y1={toY(4)} x2={CHART_W-PAD_X} y2={toY(4)} stroke="#FEE2E2" strokeDasharray="6 6" strokeOpacity="0.8" />
          <text x={PAD_X + 10} y={toY(4) + 20} fontSize="10" className="fill-red-200 font-mono italic font-bold uppercase tracking-widest">FRICTION ZONE</text>

          {/* Grid labels */}
          {[2, 4, 6, 8, 10].map((v) => (
            <text key={v} x={PAD_X - 25} y={toY(v) + 4} textAnchor="end" fontSize={11} className="fill-stone-300 font-mono font-bold">
              {v}
            </text>
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
                  strokeWidth={4}
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.65 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
                />
                {points.map((p, i) => (
                  <motion.circle
                    key={i}
                    cx={toX(p.idx, total)}
                    cy={toY(p.val)}
                    r={7}
                    fill="white"
                    stroke={persona.color}
                    strokeWidth={3}
                    className="shadow-sm"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i / total) * 1.8 + 0.5, duration: 0.4 }}
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
                y1={CHART_H - PAD_Y + 15}
                x2={toX(i, total)}
                y2={CHART_H - PAD_Y + 35}
                stroke="#F1F5F9"
                strokeWidth="2"
              />
              <text
                x={toX(i, total)}
                y={CHART_H - PAD_Y + 55}
                textAnchor="middle"
                fontSize={13}
                className="fill-stone-800 font-bold"
              >
                {lang === 'en' ? jp.stage : jp.stageCN}
              </text>
              <text
                x={toX(i, total)}
                y={CHART_H - PAD_Y + 72}
                textAnchor="middle"
                fontSize={10}
                className="fill-stone-400 font-mono uppercase tracking-widest font-bold"
              >
                {jp.stage}
              </text>
              <text
                x={toX(i, total)}
                y={CHART_H - PAD_Y + 88}
                textAnchor="middle"
                fontSize={9}
                className="fill-stone-300 italic font-medium"
              >
                {i === 0 ? "IG / Pinterest..." : i === 1 ? "Product Page B..." : i === 2 ? "Competitor Com..." : i === 3 ? "Artisan Story ..." : i === 4 ? "Add to Cart" : i === 5 ? "Checkout Flow" : "Unboxing + Rev..."}
              </text>
            </g>
          ))}

          <text x={CHART_W - PAD_X} y={CHART_H + 100} textAnchor="end" fontSize={11} className="fill-stone-400 font-mono font-bold opacity-40 tracking-widest uppercase">
            {lang === 'en' ? 'Y: EMOTIONAL INDEX (1-10) · X: TOUCHPOINTS' : 'Y軸：情感指數 (1-10) · X軸：旅程觸點'}
          </text>
        </svg>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-12 mt-10 border-t border-stone-100/50 pt-8 font-mono text-[12px]">
        {PERSONAS.map((p) => (
          <div key={p.key} className="flex items-center gap-4 group cursor-default">
            <div className="w-14 h-1 rounded-full opacity-30" style={{ backgroundColor: p.color }} />
            <div className="w-4 h-4 rounded-full border-2 border-white shadow-md transition-transform group-hover:scale-125" style={{ backgroundColor: p.color }} />
            <span className="text-stone-600 font-bold tracking-[0.2em] uppercase">{p.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
