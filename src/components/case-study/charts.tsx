"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  TrendingUp, Sparkles,
  Target, Users, Zap,
  Heart
} from "lucide-react";
import { JOURNEY_POINTS, COMPETITOR_DATA, HMW_STATEMENTS } from "@/data/research-data";
import { useLanguage } from "@/context/language-context";
import { t } from "@/lib/translations";

export const AnimatedLineChart = () => (
  <motion.svg viewBox="0 0 400 150" className="w-full h-48 overflow-visible">
    <defs>
      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#8B7355" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#8B7355" stopOpacity="0.05" />
      </linearGradient>
    </defs>

    {[0, 25, 50, 75, 100].map((tick) => (
      <line
        key={tick}
        x1="40" y1={120 - tick} x2="380" y2={120 - tick}
        stroke="#1C1A18" strokeOpacity="0.05" strokeWidth="1"
      />
    ))}

    <text x="0" y="125" className="font-mono text-[9px] fill-ink/40">Q1_START</text>
    <text x="360" y="125" className="font-mono text-[9px] fill-ink/40">Q4_END</text>

    <motion.path
      d="M40,110 L380,105"
      fill="none" stroke="#1C1A18" strokeWidth="2" strokeOpacity="0.2" strokeDasharray="4 4"
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />

    <motion.path
      d="M40,110 Q140,110 200,80 T380,20 L380,120 L40,120 Z"
      fill="url(#chartGradient)"
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
      transition={{ duration: 2, delay: 0.5 }}
    />

    <motion.path
      d="M40,110 Q140,110 200,80 T380,20"
      fill="none" stroke="#8B7355" strokeWidth="4" strokeLinecap="round"
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
      transition={{ duration: 2, ease: "easeOut" }}
    />

    <motion.circle
      cx="380" cy="20" r="6" fill="#8B7355"
      initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
      transition={{ delay: 1.8, duration: 0.3 }}
    />

    <motion.g
      initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
      transition={{ delay: 2.1, duration: 0.5 }}
    >
      <rect x="330" y="35" width="65" height="22" fill="#1C1A18" rx="4" />
      <text x="362" y="50" textAnchor="middle" className="font-mono text-[10px] fill-cedar font-bold">+42.8% ROI</text>
    </motion.g>
  </motion.svg>
);

// ─── Professional Emotional Journey Chart ───────────────────────────
const CHART_H = 200;
const CHART_W = 720;
const PAD_X = 65;
const PAD_Y = 25;
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

const PERSONAS_LINE = [
  { key: "sofia" as const, label: "Sofia", color: "#8B7355" },
  { key: "danny" as const, label: "Danny", color: "#5C8BC7" },
  { key: "mei" as const, label: "Mei", color: "#5A8A5A" },
];

export const EmotionSwimlane = () => {
  const { lang } = useLanguage();
  const total = JOURNEY_POINTS.length;

  return (
    <div className="w-full">
      <div className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-2">
        <div>
          <p className="font-mono text-xs text-cedar font-bold tracking-widest uppercase mb-1">
            {lang === "en" ? "Emotional Journey Arc — Multi-Persona Analysis" : "使用者旅程情感弧線 — 多角色分析"}
          </p>
          <p className="font-mono text-[10px] text-ink/40">
            {lang === "en"
              ? "Emotion index (1=lowest / 10=highest) across 7 journey touchpoints · Based on usability testing"
              : "各 Persona 於 7 個旅程觸點的情感指數 (1=最低 / 10=最高) · 依可用性測試數據建模"}
          </p>
        </div>
      </div>

      <div className="bg-white/60 border border-ink/5 p-4 md:p-6 overflow-x-auto">
        <svg viewBox={`0 0 ${CHART_W} ${CHART_H + 80}`} className="w-full" style={{ minWidth: 500 }}>
          {/* Delight / Friction zone backgrounds */}
          <rect x={PAD_X} y={toY(10)} width={CHART_W - PAD_X * 2} height={toY(6) - toY(10)} fill="#5A8A5A" fillOpacity="0.03" />
          <rect x={PAD_X} y={toY(4)} width={CHART_W - PAD_X * 2} height={toY(1) - toY(4)} fill="#E57373" fillOpacity="0.03" />

          {/* Grid horizontal lines */}
          {[2, 4, 6, 8, 10].map((v) => (
            <g key={v}>
              <line x1={PAD_X} y1={toY(v)} x2={CHART_W - PAD_X} y2={toY(v)} stroke="#1C1A18" strokeOpacity={0.06} strokeWidth={1} />
              <text x={PAD_X - 10} y={toY(v) + 4} textAnchor="end" fontSize={9} fill="#1C1A18" fillOpacity={0.35} fontFamily="JetBrains Mono, monospace">{v}</text>
            </g>
          ))}

          {/* Y-axis label */}
          <text x={12} y={CHART_H / 2} textAnchor="middle" fontSize={8} fill="#1C1A18" fillOpacity={0.3} fontFamily="JetBrains Mono, monospace" transform={`rotate(-90, 12, ${CHART_H / 2})`}>
            {t("chart.emotionLevel", lang)}
          </text>

          {/* Zone labels */}
          <text x={PAD_X + 4} y={toY(9)} fontSize={8} fill="#5A8A5A" fillOpacity={0.5} fontFamily="JetBrains Mono, monospace">
            {lang === "en" ? "DELIGHT ZONE" : "愉悅區"}
          </text>
          <text x={PAD_X + 4} y={toY(2.5)} fontSize={8} fill="#E57373" fillOpacity={0.5} fontFamily="JetBrains Mono, monospace">
            {lang === "en" ? "FRICTION ZONE" : "摩擦區"}
          </text>

          {/* Persona lines */}
          {PERSONAS_LINE.map((persona) => {
            const points = JOURNEY_POINTS.map((jp, idx) => ({
              val: jp[persona.key],
              idx,
            }));
            const pathD = buildPath(points, total);
            return (
              <g key={persona.key}>
                <motion.path
                  d={pathD} fill="none" stroke={persona.color} strokeWidth={2.5} strokeLinecap="round"
                  initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                {points.map((p, i) => (
                  <motion.circle
                    key={i} cx={toX(p.idx, total)} cy={toY(p.val)} r={4.5} fill={persona.color}
                    initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}
                    transition={{ delay: (i / total) * 1.8 + 0.3, duration: 0.3 }}
                  >
                    <title>{persona.label}: {p.val}/10 — {JOURNEY_POINTS[p.idx].touchpoint}</title>
                  </motion.circle>
                ))}
              </g>
            );
          })}

          {/* X axis stage labels */}
          {JOURNEY_POINTS.map((jp, i) => (
            <g key={jp.stage}>
              <line x1={toX(i, total)} y1={CHART_H - PAD_Y} x2={toX(i, total)} y2={CHART_H - PAD_Y + 5} stroke="#1C1A18" strokeOpacity={0.15} />
              <text x={toX(i, total)} y={CHART_H - PAD_Y + 18} textAnchor="middle" fontSize={8} fontWeight="bold" fill="#1C1A18" fillOpacity={0.6} fontFamily="Noto Sans TC, sans-serif">
                {lang === "en" ? jp.stage : jp.stageCN}
              </text>
              <text x={toX(i, total)} y={CHART_H - PAD_Y + 32} textAnchor="middle" fontSize={7} fill="#1C1A18" fillOpacity={0.35} fontFamily="JetBrains Mono, monospace">
                {lang === "en" ? jp.stageCN : jp.stage}
              </text>
              <text x={toX(i, total)} y={CHART_H - PAD_Y + 48} textAnchor="middle" fontSize={6.5} fill="#8B7355" fillOpacity={0.7} fontFamily="JetBrains Mono, monospace">
                {jp.touchpoint.length > 16 ? jp.touchpoint.slice(0, 14) + "…" : jp.touchpoint}
              </text>
            </g>
          ))}

          {/* X-axis label */}
          <text x={CHART_W / 2} y={CHART_H + 68} textAnchor="middle" fontSize={8} fill="#1C1A18" fillOpacity={0.3} fontFamily="JetBrains Mono, monospace">
            {t("chart.journeyPhase", lang)}
          </text>
        </svg>

        {/* Legend */}
        <div className="flex flex-wrap gap-6 mt-4 font-mono text-[10px]">
          {PERSONAS_LINE.map((p) => (
            <div key={p.key} className="flex items-center gap-2">
              <div className="w-6 h-0.5" style={{ backgroundColor: p.color }} />
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
              <span style={{ color: p.color }}>{p.label}</span>
            </div>
          ))}
          <div className="flex items-center gap-2 text-ink/40 ml-auto">
            <span>{lang === "en" ? "Y: Emotion (1–10)" : "Y軸: 情感指數 (1–10)"}</span>
            <span>·</span>
            <span>{lang === "en" ? "X: Journey Touchpoints" : "X軸: 旅程觸點"}</span>
          </div>
        </div>
      </div>

      {/* Insight callouts */}
      <div className="mt-4 grid md:grid-cols-3 gap-3">
        {[
          { insight: lang === "en" ? "\"Research\" phase = highest friction point" : "「研究評估」階段為最高摩擦點", detail: lang === "en" ? "All 3 personas show emotion drop during comparison" : "三位 Persona 在競品比較時情感指數均下降", color: "#E57373" },
          { insight: lang === "en" ? "\"Artisan Story\" = biggest emotional uplift" : "「職人故事」為最大情感轉折點", detail: lang === "en" ? "Mei: 4→9, Sofia: 5→8 — key inflection" : "Mei 從 4→9，Sofia 從 5→8 的關鍵提升", color: "#5A8A5A" },
          { insight: lang === "en" ? "Post-purchase = brand loyalty driver" : "結帳後體驗是品牌黏著關鍵", detail: lang === "en" ? "Post-purchase reaches highest emotion peak" : "Post-purchase 達到全旅程最高情感頂點", color: "#8B7355" },
        ].map((ins, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-white/60 border-l-4 p-4" style={{ borderColor: ins.color }}
          >
            <p className="font-sans-cn text-xs font-bold text-ink mb-1">{ins.insight}</p>
            <p className="font-mono text-[9px] text-ink/50">{ins.detail}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// ─── Competitor Radar Chart ─────────────────────────────────────────
const RADAR_DIMENSIONS = [
  { key: "storytelling", label: "Storytelling", labelZh: "品牌敘事" },
  { key: "sustainability", label: "Sustainability", labelZh: "永續性" },
  { key: "uxScore", label: "UX Quality", labelZh: "UX 品質", scale: 20 },
  { key: "priceTier", label: "Price Access", labelZh: "價格可及性" },
  { key: "localCulture", label: "Local Culture", labelZh: "在地文化" },
];

const RADAR_COLORS: Record<string, string> = {
  ZenSelect: "#8B7355",
  MUJI: "#666666",
  HAY: "#4A90D9",
  Bloomingville: "#D4A574",
  Pinkoi: "#E8799A",
};

function getRadarValue(comp: typeof COMPETITOR_DATA[0], dim: typeof RADAR_DIMENSIONS[0]): number {
  if (dim.key === "uxScore") return comp.uxScore / 20;
  if (dim.key === "localCulture") {
    const localMap: Record<string, number> = { ZenSelect: 5, MUJI: 3, HAY: 2, Bloomingville: 1, Pinkoi: 4 };
    return localMap[comp.name] || 2;
  }
  return (comp as Record<string, unknown>)[dim.key] as number || 3;
}

export const CompetitorRadarChart = () => {
  const { lang } = useLanguage();
  const [hoveredBrand, setHoveredBrand] = useState<string | null>(null);
  const cx = 200, cy = 160, maxR = 120;
  const dims = RADAR_DIMENSIONS;
  const angleStep = (2 * Math.PI) / dims.length;
  const competitors = COMPETITOR_DATA.filter(c => ["ZenSelect", "MUJI", "HAY", "Bloomingville", "Pinkoi"].includes(c.name));

  function polarToXY(dimIndex: number, value: number): [number, number] {
    const angle = -Math.PI / 2 + dimIndex * angleStep;
    const r = (value / 5) * maxR;
    return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)];
  }

  function getPolygonPoints(comp: typeof COMPETITOR_DATA[0]): string {
    return dims.map((dim, i) => {
      const val = getRadarValue(comp, dim);
      const [x, y] = polarToXY(i, val);
      return `${x},${y}`;
    }).join(" ");
  }

  return (
    <div className="w-full">
      <div className="mb-6">
        <p className="font-mono text-xs text-cedar font-bold tracking-widest uppercase mb-1">
          {lang === "en" ? "Competitive Radar Analysis" : "競品雷達分析圖"}
        </p>
        <p className="font-mono text-[10px] text-ink/40">
          {lang === "en" ? "5-dimension comparison across key market players" : "五維度競爭力對比分析"}
        </p>
      </div>

      <div className="bg-white/60 border border-ink/5 p-4 md:p-8">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <svg viewBox="0 0 400 330" className="w-full lg:w-2/3" style={{ maxWidth: 500 }}>
            {/* Grid circles */}
            {[1, 2, 3, 4, 5].map((level) => {
              const r = (level / 5) * maxR;
              const points = dims.map((_, i) => {
                const angle = -Math.PI / 2 + i * angleStep;
                return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
              }).join(" ");
              return (
                <polygon key={level} points={points} fill="none" stroke="#1C1A18" strokeOpacity={0.06} strokeWidth={1} />
              );
            })}

            {/* Axis lines */}
            {dims.map((_, i) => {
              const [x, y] = polarToXY(i, 5);
              return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="#1C1A18" strokeOpacity={0.08} strokeWidth={1} />;
            })}

            {/* Dimension labels */}
            {dims.map((dim, i) => {
              const [x, y] = polarToXY(i, 5.6);
              return (
                <text key={dim.key} x={x} y={y} textAnchor="middle" dominantBaseline="middle"
                  fontSize={9} fontWeight="bold" fill="#1C1A18" fillOpacity={0.5} fontFamily="JetBrains Mono, monospace">
                  {lang === "en" ? dim.label : dim.labelZh}
                </text>
              );
            })}

            {/* Competitor polygons */}
            {competitors.map((comp) => {
              const isHovered = hoveredBrand === comp.name;
              const isZen = comp.name === "ZenSelect";
              const color = RADAR_COLORS[comp.name] || "#999";
              const opacity = hoveredBrand ? (isHovered ? 0.35 : 0.05) : (isZen ? 0.25 : 0.1);
              const strokeOpacity = hoveredBrand ? (isHovered ? 1 : 0.1) : (isZen ? 0.9 : 0.4);
              return (
                <motion.polygon
                  key={comp.name}
                  points={getPolygonPoints(comp)}
                  fill={color} fillOpacity={opacity}
                  stroke={color} strokeWidth={isZen ? 2.5 : 1.5} strokeOpacity={strokeOpacity}
                  strokeLinejoin="round"
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: competitors.indexOf(comp) * 0.15 }}
                  onMouseEnter={() => setHoveredBrand(comp.name)}
                  onMouseLeave={() => setHoveredBrand(null)}
                  className="cursor-pointer transition-all duration-300"
                />
              );
            })}

            {/* Center label */}
            <text x={cx} y={cy + 4} textAnchor="middle" fontSize={8} fill="#1C1A18" fillOpacity={0.2} fontFamily="JetBrains Mono, monospace">
              {hoveredBrand || "HOVER TO COMPARE"}
            </text>
          </svg>

          {/* Legend */}
          <div className="flex flex-wrap lg:flex-col gap-3 font-mono text-[11px]">
            {competitors.map((comp) => (
              <button
                key={comp.name}
                onMouseEnter={() => setHoveredBrand(comp.name)}
                onMouseLeave={() => setHoveredBrand(null)}
                className={`flex items-center gap-2 px-3 py-2 border transition-all text-left ${
                  hoveredBrand === comp.name ? "border-cedar/50 bg-cedar/5" : "border-ink/10 bg-white/50"
                } ${comp.highlight ? "font-bold" : ""}`}
              >
                <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ backgroundColor: RADAR_COLORS[comp.name] }} />
                <span>{comp.name}</span>
                {comp.highlight && <span className="text-[8px] bg-cedar text-white px-1.5 py-0.5 tracking-wider">TARGET</span>}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── HMW Opportunity Matrix ─────────────────────────────────────────
export const HMWMatrix = () => {
  const { lang } = useLanguage();

  const quadrantMap: Record<string, typeof HMW_STATEMENTS> = {
    "Quick Win": [],
    "Strategic": [],
    "Long-term": [],
  };
  HMW_STATEMENTS.forEach((s) => quadrantMap[s.quadrant].push(s));

  return (
    <div className="w-full">
      <div className="mb-6">
        <p className="font-mono text-xs text-cedar font-bold tracking-widest uppercase mb-1">
          {lang === "en" ? "HMW Opportunity Matrix — Impact × Effort" : "HMW 核心機會矩陣 — 影響力 × 執行難度"}
        </p>
        <p className="font-mono text-[10px] text-ink/40">
          {lang === "en"
            ? "8 HMW questions prioritized by Impact vs Effort framework"
            : "8 個核心 HMW 問題依「影響力」×「執行難度」分類"}
        </p>
      </div>

      <div className="relative bg-white/60 border border-ink/5 p-4 md:p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Quick Win */}
          <div className="border border-sage/30 bg-sage/5 p-4">
            <p className="font-mono text-[10px] font-bold text-sage mb-2 tracking-widest">
              {lang === "en" ? "QUICK WIN — High Impact / Low Effort" : "速贏 — 高影響 / 低難度"}
            </p>
            {quadrantMap["Quick Win"].map((item) => (
              <motion.div key={item.id}
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                transition={{ delay: item.id * 0.06 }}
                className="text-xs font-sans-cn text-ink/80 bg-white border border-sage/20 p-2.5 mb-2 shadow-sm"
              >
                <span className="font-mono text-[8px] text-sage mr-1 font-bold">HMW{item.id}.</span>
                {item.statement}
                <div className="flex gap-2 mt-1.5">
                  <span className="font-mono text-[8px] text-cedar">Impact: {item.impact}/10</span>
                  <span className="font-mono text-[8px] text-ink/40">Effort: {item.effort}/10</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Strategic */}
          <div className="border border-cedar/30 bg-cedar/5 p-4">
            <p className="font-mono text-[10px] font-bold text-cedar mb-2 tracking-widest">
              {lang === "en" ? "STRATEGIC — High Impact / High Effort" : "策略性 — 高影響 / 高難度"}
            </p>
            {quadrantMap["Strategic"].map((item) => (
              <motion.div key={item.id}
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                transition={{ delay: item.id * 0.06 }}
                className="text-xs font-sans-cn text-ink/80 bg-white border border-cedar/20 p-2.5 mb-2 shadow-sm"
              >
                <span className="font-mono text-[8px] text-cedar mr-1 font-bold">HMW{item.id}.</span>
                {item.statement}
                <div className="flex gap-2 mt-1.5">
                  <span className="font-mono text-[8px] text-cedar">Impact: {item.impact}/10</span>
                  <span className="font-mono text-[8px] text-ink/40">Effort: {item.effort}/10</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Long-term */}
          <div className="md:col-span-2 border border-blue-200 bg-blue-50/30 p-4">
            <p className="font-mono text-[10px] font-bold text-blue-500 mb-2 tracking-widest">
              {lang === "en" ? "LONG-TERM BETS — Lower Impact / Very High Effort" : "長期投資 — 中等影響 / 極高難度"}
            </p>
            <div className="flex flex-wrap gap-3">
              {quadrantMap["Long-term"].map((item) => (
                <motion.div key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                  transition={{ delay: item.id * 0.06 }}
                  className="text-xs font-sans-cn text-ink/80 bg-white border border-blue-200 p-2.5 shadow-sm flex-1 min-w-[220px]"
                >
                  <span className="font-mono text-[8px] text-blue-400 mr-1 font-bold">HMW{item.id}.</span>
                  {item.statement}
                  <div className="flex gap-2 mt-1.5">
                    <span className="font-mono text-[8px] text-cedar">Impact: {item.impact}/10</span>
                    <span className="font-mono text-[8px] text-ink/40">Effort: {item.effort}/10</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Market Insight Grid ────────────────────────────────────────────
export const MarketInsightGrid = () => {
  const insights = [
    {
      label: "Market TAM/SAM",
      value: "1.4B",
      sub: "Premium Living Segment",
      icon: <TrendingUp className="w-5 h-5 text-cedar"/>,
      growth: "+14.2% YoY",
      detail: "Driven by 'Slow Living' trends in Tier 1 Asian cities.",
      secondaryIcon: <Sparkles className="w-4 h-4 text-cedar/40" />
    },
    {
      label: "Conversion Gap",
      value: "92%",
      sub: "Drop-off during Comparison",
      icon: <Target className="w-5 h-5 text-cedar"/>,
      trend: "Friction Point",
      detail: "High cognitive load during technical specs evaluation.",
      secondaryIcon: <Zap className="w-4 h-4 text-cedar/40" />
    },
    {
      label: "Story ROI",
      value: "3.5x",
      sub: "LTV of Narrative Shoppers",
      icon: <Users className="w-5 h-5 text-cedar"/>,
      trend: "Value Driver",
      detail: "Artisan-backed products retain users 240% longer.",
      secondaryIcon: <Heart className="w-4 h-4 text-cedar/40" />
    }
  ];

  return (
    <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-8 mb-20 md:p-8 pb-10 scrollbar-thin scrollbar-thumb-cedar/20 scrollbar-track-transparent">
      {insights.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: i * 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -10, transition: { duration: 0.4 } }}
          className="snap-center flex-shrink-0 w-[320px] md:w-auto bg-white border border-ink/5 p-8 shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-cedar/5 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-700" />

          <div className="flex justify-between items-start mb-6 relative z-10">
            <div className="p-3 bg-canvas rounded-xl group-hover:bg-cedar/10 transition-colors shadow-inner">
              {item.icon}
            </div>
            <span className="font-mono text-[10px] font-bold text-cedar tracking-widest uppercase bg-cedar/5 px-3 py-1.5 rounded-full border border-cedar/10">
              {item.growth || item.trend}
            </span>
          </div>

          <p className="font-mono text-[10px] opacity-40 mb-2 uppercase tracking-[0.2em] font-bold relative z-10">{item.label}</p>

          <div className="flex items-baseline gap-3 mb-3 relative z-10">
            <p className="text-4xl font-display text-ink group-hover:text-cedar transition-colors duration-500 tracking-tighter">{item.value}</p>
            <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 3, delay: i * 0.5 }}>
              {item.secondaryIcon}
            </motion.div>
          </div>

          <p className="text-sm font-sans-cn font-bold text-ink/80 mb-3 relative z-10 leading-tight">{item.sub}</p>
          <p className="text-xs font-sans-cn font-light opacity-60 leading-relaxed relative z-10 group-hover:opacity-100 transition-opacity max-w-[240px]">{item.detail}</p>
        </motion.div>
      ))}
    </div>
  );
};
