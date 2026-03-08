"use client";

import { motion } from "framer-motion";
import { UX_BENCHMARKS } from "@/data/research-data";

interface SUSGaugeProps {
  score?: number;
  label?: string;
}

const ARC_RADIUS = 80;
const STROKE_W = 14;
const CX = 110;
const CY = 110;

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function arcPath(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const s = polarToCartesian(cx, cy, r, startAngle);
  const e = polarToCartesian(cx, cy, r, endAngle);
  const large = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${s.x} ${s.y} A ${r} ${r} 0 ${large} 1 ${e.x} ${e.y}`;
}

const START_ANGLE = -150;
const END_ANGLE = 150;
const RANGE = END_ANGLE - START_ANGLE;

function scoreToAngle(score: number) {
  return START_ANGLE + (score / 100) * RANGE;
}

export function SUSGauge({ score = 78 }: SUSGaugeProps) {
  const scoreAngle = scoreToAngle(score);
  const avgAngle = scoreToAngle(UX_BENCHMARKS.susIndustryAvg);
  const targetAngle = scoreToAngle(85);

  const zones = [
    { start: START_ANGLE, end: scoreToAngle(50), color: "#E57373", label: "Poor" },
    { start: scoreToAngle(50), end: scoreToAngle(68), color: "#FFB74D", label: "OK" },
    { start: scoreToAngle(68), end: scoreToAngle(80), color: "#AED581", label: "Good" },
    { start: scoreToAngle(80), end: scoreToAngle(90), color: "#5A8A5A", label: "Excellent" },
    { start: scoreToAngle(90), end: END_ANGLE, color: "#3D6B3D", label: "Best-in-class" },
  ];

  const SVG_SIZE = 220;
  const needleTip = polarToCartesian(CX, CY, ARC_RADIUS - 10, scoreAngle);

  return (
    <div className="flex flex-col items-center">
      <svg viewBox={`0 0 ${SVG_SIZE} 150`} className="w-full max-w-xs">
        {/* Zone arcs */}
        {zones.map((z, i) => (
          <path
            key={i}
            d={arcPath(CX, CY, ARC_RADIUS, z.start, z.end)}
            fill="none"
            stroke={z.color}
            strokeWidth={STROKE_W}
            strokeLinecap="butt"
            opacity={0.25}
          />
        ))}

        {/* Score arc (animated) */}
        <motion.path
          d={arcPath(CX, CY, ARC_RADIUS, START_ANGLE, scoreAngle)}
          fill="none"
          stroke="#8B7355"
          strokeWidth={STROKE_W}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Industry average marker */}
        {(() => {
          const p1 = polarToCartesian(CX, CY, ARC_RADIUS - STROKE_W / 2 - 2, avgAngle);
          const p2 = polarToCartesian(CX, CY, ARC_RADIUS + STROKE_W / 2 + 2, avgAngle);
          return (
            <line x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke="#1C1A18" strokeWidth={2} strokeOpacity={0.5} strokeDasharray="3 2" />
          );
        })()}

        {/* Target marker */}
        {(() => {
          const p1 = polarToCartesian(CX, CY, ARC_RADIUS - STROKE_W / 2 - 4, targetAngle);
          const p2 = polarToCartesian(CX, CY, ARC_RADIUS + STROKE_W / 2 + 4, targetAngle);
          return (
            <line x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke="#5A8A5A" strokeWidth={2} />
          );
        })()}

        {/* Needle */}
        <motion.line
          x1={CX}
          y1={CY}
          x2={CX}
          y2={CY}
          stroke="#8B7355"
          strokeWidth={2.5}
          strokeLinecap="round"
          animate={{ x2: needleTip.x, y2: needleTip.y }}
          initial={{ x2: polarToCartesian(CX, CY, ARC_RADIUS - 10, START_ANGLE).x, y2: polarToCartesian(CX, CY, ARC_RADIUS - 10, START_ANGLE).y }}
          whileInView={{ x2: needleTip.x, y2: needleTip.y }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <circle cx={CX} cy={CY} r={5} fill="#8B7355" />

        {/* Score text */}
        <text x={CX} y={CY + 28} textAnchor="middle" fontSize={32} fontWeight="300" fill="#8B7355" fontFamily="'Playfair Display', Georgia, serif">
          {score}
        </text>
        <text x={CX} y={CY + 42} textAnchor="middle" fontSize={9} fill="#1C1A18" fillOpacity={0.5} fontFamily="JetBrains Mono, monospace" fontWeight="bold">
          SUS SCORE
        </text>
      </svg>

      <div className="w-full mt-4 space-y-2 font-mono text-[10px]">
        {[
          { label: "ZenSelect (Current)", value: score, color: "#8B7355", bold: true },
          { label: "Industry Average", value: UX_BENCHMARKS.susIndustryAvg, color: "#1C1A18", bold: false },
          { label: "Target (Good Threshold)", value: 85, color: "#5A8A5A", bold: false },
        ].map((item) => (
          <div key={item.label} className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2" style={{ backgroundColor: item.color }} />
              <span className={item.bold ? "font-bold" : ""} style={{ color: item.color }}>{item.label}</span>
            </div>
            <span className="font-bold" style={{ color: item.color }}>{item.value}/100</span>
          </div>
        ))}
      </div>

      <div className="w-full mt-4 flex gap-2 flex-wrap">
        {[
          { range: "< 50", label: "Poor", color: "#E57373" },
          { range: "50–68", label: "OK", color: "#FFB74D" },
          { range: "68–80", label: "Good", color: "#AED581" },
          { range: "80–90", label: "Excellent", color: "#5A8A5A" },
          { range: "90+", label: "Best-in-class", color: "#3D6B3D" },
        ].map((z) => (
          <div key={z.range} className="flex items-center gap-1 font-mono text-[8px]">
            <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: z.color, opacity: 0.7 }} />
            <span className="text-ink/50">{z.range}: {z.label}</span>
          </div>
        ))}
      </div>
      <p className="font-mono text-[9px] text-ink/30 mt-2 text-center">
        Source: MeasuringU SUS Benchmark Database · UX Metrics 2024
      </p>
    </div>
  );
}
