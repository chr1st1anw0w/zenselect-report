"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Target,
  Users,
  Sparkles,
  Zap,
  Heart
} from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { HMW_STATEMENTS } from "@/data/research-data";

// ─── Animated Line Chart (Mini) ───────────────────────────────────
export const AnimatedLineChart = () => {
  const data = [20, 35, 25, 45, 60, 55, 85];
  const width = 400;
  const height = 150;
  const padding = 20;

  const points = data.map((d, i) => ({
    x: padding + (i / (data.length - 1)) * (width - padding * 2),
    y: height - padding - (d / 100) * (height - padding * 2),
  }));

  const pathD = points.reduce(
    (acc, p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`),
    ""
  );

  return (
    <div className="w-full bg-white/10 rounded-[40px] p-8 border border-white/20 shadow-glass">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full">
        <motion.path
          d={pathD}
          fill="none"
          stroke="#8B7355"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        {points.map((p, i) => (
          <motion.circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="4"
            fill="white"
            stroke="#8B7355"
            strokeWidth="2"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 * i }}
          />
        ))}
      </svg>
      <div className="flex justify-between mt-6 font-mono text-[10px] text-ink/40 uppercase font-bold tracking-widest">
        <span>Q1</span>
        <span>Q2</span>
        <span>Q3</span>
        <span>Q4 (PROJECTED)</span>
      </div>
    </div>
  );
};

// ─── Emotion Swimlane ──────────────────────────────────────────────
export const EmotionSwimlane = () => {
  const { lang } = useLanguage();
  const phases = [
    { label: lang === "en" ? "Landing" : "首頁登陸", score: 6.5, color: "bg-stone/20" },
    { label: lang === "en" ? "Category" : "分類瀏覽", score: 5.2, color: "bg-stone/40" },
    { label: lang === "en" ? "Story" : "職人敘事", score: 8.8, color: "bg-cedar" },
    { label: lang === "en" ? "Checkout" : "流暢結帳", score: 7.4, color: "bg-stone/60" },
    { label: lang === "en" ? "Post-buy" : "購後驚喜", score: 9.2, color: "bg-accent_orange" },
  ];

  return (
    <div className="w-full space-y-6">
      {phases.map((p, i) => (
        <div key={i} className="flex items-center gap-6 group">
          <div className="w-24 font-mono text-[10px] font-bold text-ink/40 uppercase tracking-widest">{p.label}</div>
          <div className="flex-1 h-3 bg-white/10 rounded-full overflow-hidden border border-white/20">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${p.score * 10}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`h-full ${p.color} transition-all group-hover:brightness-110 shadow-glass`}
            />
          </div>
          <div className="w-12 text-right font-display italic font-bold text-cedar">{p.score}</div>
        </div>
      ))}
    </div>
  );
};

// ─── Competitor Radar Chart ───────────────────────────────────────
const RADAR_COLORS: Record<string, string> = {
  ZenSelect: "#8B7355",
  MUJI: "#A1A1A1",
  HAY: "#5C8BC7",
  Pinkoi: "#5A8A5A",
};

export const CompetitorRadarChart = () => {
  const [hoveredBrand, setHoveredBrand] = React.useState<string | null>(null);

  const axis = ["Narrative", "UX Efficiency", "Trust Signal", "Uniqueness", "Material Transparency"];
  const competitors = [
    { name: "ZenSelect", values: [9, 8, 9, 8, 10], highlight: true },
    { name: "MUJI", values: [4, 9, 7, 5, 6] },
    { name: "HAY", values: [6, 7, 6, 9, 5] },
    { name: "Pinkoi", values: [5, 5, 4, 7, 4] },
  ];

  const cx = 150, cy = 150, r = 120;
  const getPolygonPoints = (comp: typeof competitors[0]) => {
    return comp.values
      .map((val, i) => {
        const angle = (Math.PI * 2 * i) / axis.length - Math.PI / 2;
        const x = cx + Math.cos(angle) * r * (val / 10);
        const y = cy + Math.sin(angle) * r * (val / 10);
        return `${x},${y}`;
      })
      .join(" ");
  };

  return (
    <div className="w-full glass-card bg-white/20 border border-white/60 p-8 md:p-16 rounded-[40px] shadow-glass">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1">
          <h4 className="font-mono text-xs text-cedar font-bold tracking-[0.3em] uppercase mb-6">Strategic Positioning Matrix</h4>
          <p className="text-sm font-sans-cn font-light opacity-60 leading-relaxed mb-10 max-w-md">
            透過雷達圖可視化發現，ZenSelect 在「敘事力」與「材質透明度」具備絕對差異化優勢，而「UX 效率」則透過本次改版追平 MUJI 等一線工業品牌。
          </p>
          <div className="grid grid-cols-2 gap-6">
            {axis.map((a, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cedar/30" />
                <span className="font-mono text-[9px] font-bold text-ink/40 uppercase tracking-widest">{a}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex flex-col lg:flex-row gap-12 items-center">
          <svg width="300" height="300" className="overflow-visible">
            {/* Grid */}
            {[0.2, 0.4, 0.6, 0.8, 1].map((step) => (
              <circle key={step} cx={cx} cy={cy} r={r * step} fill="none" stroke="#000" strokeOpacity="0.05" strokeDasharray="4 4" />
            ))}
            {axis.map((_, i) => {
              const angle = (Math.PI * 2 * i) / axis.length - Math.PI / 2;
              return <line key={i} x1={cx} y1={cy} x2={cx + Math.cos(angle) * r} y2={cy + Math.sin(angle) * r} stroke="#000" strokeOpacity="0.05" />;
            })}

            {/* Polygons */}
            {competitors.map((comp) => {
              const isZen = comp.name === "ZenSelect";
              const isHovered = hoveredBrand === comp.name;
              const color = RADAR_COLORS[comp.name];
              const opacity = hoveredBrand ? (isHovered ? 0.3 : 0.05) : (isZen ? 0.2 : 0.08);
              const strokeOpacity = hoveredBrand ? (isHovered ? 1 : 0.1) : (isZen ? 0.9 : 0.4);
              return (
                <motion.polygon
                  key={comp.name}
                  points={getPolygonPoints(comp)}
                  fill={color} fillOpacity={opacity}
                  stroke={color} strokeWidth={isZen ? 3 : 1.5} strokeOpacity={strokeOpacity}
                  strokeLinejoin="round"
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                  transition={{ duration: 1, delay: competitors.indexOf(comp) * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={() => setHoveredBrand(comp.name)}
                  onMouseLeave={() => setHoveredBrand(null)}
                  className="cursor-pointer transition-all duration-300"
                />
              );
            })}
          </svg>

          {/* Legend */}
          <div className="flex flex-wrap lg:flex-col gap-4 font-mono text-[10px] font-bold">
            {competitors.map((comp) => (
              <button
                key={comp.name}
                onMouseEnter={() => setHoveredBrand(comp.name)}
                onMouseLeave={() => setHoveredBrand(null)}
                className={`flex items-center gap-3 px-5 py-3 rounded-full border transition-all text-left uppercase tracking-widest ${
                  hoveredBrand === comp.name ? "border-cedar/50 bg-cedar/10 text-cedar" : "border-white/60 bg-white/40 backdrop-blur-md"
                } ${comp.highlight ? "shadow-glass" : ""}`}
              >
                <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: RADAR_COLORS[comp.name] }} />
                <span>{comp.name}</span>
                {comp.highlight && <span className="text-[8px] bg-cedar text-white px-2 py-0.5 rounded ml-2 tracking-tighter">TARGET</span>}
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
      <div className="mb-10 flex justify-between items-end">
        <div>
          <p className="font-mono text-xs text-cedar font-bold tracking-[0.3em] uppercase mb-2">
            {lang === "en" ? "HMW Opportunity Matrix — Impact × Effort" : "HMW 核心機會矩陣 — 影響力 × 執行難度"}
          </p>
          <p className="font-mono text-[10px] text-ink/40 font-medium">
            {lang === "en"
              ? "8 HMW questions prioritized by Impact vs Effort framework"
              : "8 個核心 HMW 問題依「影響力」×「執行難度」分類"}
          </p>
        </div>
      </div>

      <div className="relative bg-white/20 border border-white/60 p-6 md:p-12 mb-10 rounded-[40px] shadow-glass backdrop-blur-3xl overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
           <Zap className="w-64 h-64 text-cedar" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {/* Quick Win */}
          <div className="border border-sage/20 bg-sage/5 p-8 rounded-[32px] hover:bg-sage/10 transition-colors group">
            <div className="flex items-center gap-3 mb-6">
               <Zap className="w-4 h-4 text-sage" />
               <p className="font-mono text-[10px] font-bold text-sage tracking-[0.3em] uppercase">
                 {lang === "en" ? "QUICK WIN — High Impact / Low Effort" : "速贏 — 高影響 / 低難度"}
               </p>
            </div>
            {quadrantMap["Quick Win"].map((item) => (
              <motion.div key={item.id}
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                transition={{ delay: item.id * 0.06 }}
                className="text-xs font-sans-cn text-ink/80 bg-white/80 border border-sage/10 p-5 mb-4 shadow-sm rounded-2xl group-hover:shadow-md transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                   <span className="font-mono text-[9px] text-sage font-bold tracking-widest uppercase bg-sage/5 px-2 py-0.5 rounded">HMW {item.id}</span>
                   <div className="flex gap-3">
                     <span className="font-mono text-[8px] text-cedar font-bold">IMP: {item.impact}</span>
                     <span className="font-mono text-[8px] text-ink/30 font-bold">EFF: {item.effort}</span>
                   </div>
                </div>
                <p className="leading-relaxed font-light">{item.statement}</p>
              </motion.div>
            ))}
          </div>

          {/* Strategic */}
          <div className="border border-cedar/20 bg-cedar/5 p-8 rounded-[32px] hover:bg-cedar/10 transition-colors group">
            <div className="flex items-center gap-3 mb-6">
               <Target className="w-4 h-4 text-cedar" />
               <p className="font-mono text-[10px] font-bold text-cedar tracking-[0.3em] uppercase">
                 {lang === "en" ? "STRATEGIC — High Impact / High Effort" : "策略性 — 高影響 / 高難度"}
               </p>
            </div>
            {quadrantMap["Strategic"].map((item) => (
              <motion.div key={item.id}
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                transition={{ delay: item.id * 0.06 }}
                className="text-xs font-sans-cn text-ink/80 bg-white/80 border border-cedar/10 p-5 mb-4 shadow-sm rounded-2xl group-hover:shadow-md transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                   <span className="font-mono text-[9px] text-cedar font-bold tracking-widest uppercase bg-cedar/5 px-2 py-0.5 rounded">HMW {item.id}</span>
                   <div className="flex gap-3">
                     <span className="font-mono text-[8px] text-cedar font-bold">IMP: {item.impact}</span>
                     <span className="font-mono text-[8px] text-ink/30 font-bold">EFF: {item.effort}</span>
                   </div>
                </div>
                <p className="leading-relaxed font-light">{item.statement}</p>
              </motion.div>
            ))}
          </div>

          {/* Long-term */}
          <div className="md:col-span-2 border border-blue-200/30 bg-blue-50/5 p-8 rounded-[32px] hover:bg-blue-50/10 transition-colors group">
            <div className="flex items-center gap-3 mb-6">
               <Sparkles className="w-4 h-4 text-blue-400" />
               <p className="font-mono text-[10px] font-bold text-blue-500 tracking-[0.3em] uppercase">
                 {lang === "en" ? "LONG-TERM BETS — Lower Impact / Very High Effort" : "長期投資 — 中等影響 / 極高難度"}
               </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {quadrantMap["Long-term"].map((item) => (
                <motion.div key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                  transition={{ delay: item.id * 0.06 }}
                  className="text-xs font-sans-cn text-ink/80 bg-white/80 border border-blue-200/20 p-5 shadow-sm flex-1 min-w-[280px] rounded-2xl group-hover:shadow-md transition-all"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-mono text-[9px] text-blue-400 font-bold tracking-widest uppercase bg-blue-500/5 px-2 py-0.5 rounded">HMW {item.id}</span>
                    <div className="flex gap-3">
                      <span className="font-mono text-[8px] text-cedar font-bold">IMP: {item.impact}</span>
                      <span className="font-mono text-[8px] text-ink/30 font-bold">EFF: {item.effort}</span>
                    </div>
                  </div>
                  <p className="leading-relaxed font-light">{item.statement}</p>
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
      icon: <TrendingUp className="w-6 h-6 text-cedar"/>,
      growth: "+14.2% YoY",
      detail: "Driven by 'Slow Living' trends in Tier 1 Asian cities.",
      secondaryIcon: <Sparkles className="w-5 h-5 text-cedar/40" />
    },
    {
      label: "Conversion Gap",
      value: "92%",
      sub: "Drop-off during Comparison",
      icon: <Target className="w-6 h-6 text-cedar"/>,
      trend: "Friction Point",
      detail: "High cognitive load during technical specs evaluation.",
      secondaryIcon: <Zap className="w-5 h-5 text-cedar/40" />
    },
    {
      label: "Story ROI",
      value: "3.5x",
      sub: "LTV of Narrative Shoppers",
      icon: <Users className="w-6 h-6 text-cedar"/>,
      trend: "Value Driver",
      detail: "Artisan-backed products retain users 240% longer.",
      secondaryIcon: <Heart className="w-5 h-5 text-cedar/40" />
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 mb-20 md:p-8">
      {insights.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: i * 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -15, scale: 1.02, transition: { duration: 0.4 } }}
          className="bg-white/20 border border-white/60 p-10 shadow-glass hover:shadow-glass-deep transition-all duration-700 group relative overflow-hidden rounded-[40px] backdrop-blur-3xl"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-cedar/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-1000" />

          <div className="flex justify-between items-start mb-10 relative z-10">
            <div className="p-4 bg-white/40 rounded-2xl group-hover:bg-cedar/10 transition-colors shadow-glass border border-white/60">
              {item.icon}
            </div>
            <span className="font-mono text-[10px] font-bold text-cedar tracking-[0.3em] uppercase bg-cedar/10 px-4 py-2 rounded-full border border-cedar/20">
              {item.growth || item.trend}
            </span>
          </div>

          <p className="font-mono text-[10px] opacity-40 mb-3 uppercase tracking-[0.3em] font-bold relative z-10">{item.label}</p>

          <div className="flex items-baseline gap-4 mb-4 relative z-10">
            <p className="text-5xl font-display text-ink group-hover:text-cedar transition-colors duration-700 tracking-tighter font-bold">{item.value}</p>
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 3, delay: i * 0.5 }}>
              {item.secondaryIcon}
            </motion.div>
          </div>

          <p className="text-base font-sans-cn font-bold text-ink/80 mb-4 relative z-10 leading-tight">{item.sub}</p>
          <p className="text-xs font-sans-cn font-light opacity-60 leading-relaxed relative z-10 group-hover:opacity-100 transition-opacity font-medium">{item.detail}</p>
        </motion.div>
      ))}
    </div>
  );
};
