"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  TrendingUp, Sparkles,
  Target, Users, Zap,
  Heart
} from "lucide-react";

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
      fill="none"
      stroke="#1C1A18"
      strokeWidth="2"
      strokeOpacity="0.2"
      strokeDasharray="4 4"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />

    <motion.path
      d="M40,110 Q140,110 200,80 T380,20 L380,120 L40,120 Z"
      fill="url(#chartGradient)"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2, delay: 0.5 }}
    />

    <motion.path
      d="M40,110 Q140,110 200,80 T380,20"
      fill="none"
      stroke="#8B7355"
      strokeWidth="4"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2, ease: "easeOut" }}
    />

    <motion.circle
      cx="380" cy="20" r="6" fill="#8B7355"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1.8, duration: 0.3 }}
    />

    <motion.g
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 2.1, duration: 0.5 }}
    >
      <rect x="330" y="35" width="65" height="22" fill="#1C1A18" rx="4" />
      <text x="362" y="50" textAnchor="middle" className="font-mono text-[10px] fill-cedar font-bold">+42.8% ROI</text>
    </motion.g>
  </motion.svg>
);

export const EmotionSwimlane = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const points = [
    { cx: 50, cy: 80, label: "AD_AWARE", insight: "Visual Hook", icon: "✨" },
    { cx: 200, cy: 110, label: "SEARCH", insight: "Complexity Gap", icon: "🔍" },
    { cx: 350, cy: 40, label: "STORY", insight: "Trust Surge", icon: "📜" },
    { cx: 550, cy: 90, label: "CHECKOUT", insight: "Risk Shield", icon: "🛡️" },
    { cx: 750, cy: 20, label: "LOYALTY", insight: "Value Loop", icon: "💎" }
  ];

  return (
    <div className="relative group/swimlane pt-10">
      <motion.svg viewBox="0 0 800 200" className="w-full h-64 overflow-visible">
        <rect width="800" height="200" fill="#1C1A18" fillOpacity="0.01" rx="8" />
        <line x1="0" y1="100" x2="800" y2="100" stroke="#1C1A18" strokeOpacity="0.05" strokeWidth="1" strokeDasharray="4 4" />

        <motion.path
          d="M 50 80 C 150 20, 250 180, 350 40 S 550 140, 750 20"
          fill="none"
          stroke="#5A8A5A"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />

        {points.map((point, i) => (
          <motion.g key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="cursor-pointer"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.3 + 1, type: "spring", stiffness: 200 }}
          >
            <motion.circle
              cx={point.cx} cy={point.cy} r="10"
              fill={hoveredIndex === i ? "#5A8A5A" : "#8B7355"}
              transition={{ duration: 0.3 }}
            />
            <motion.circle
              cx={point.cx} cy={point.cy} r="22"
              fill="none" stroke={hoveredIndex === i ? "#5A8A5A" : "#8B7355"}
              strokeWidth="1.5" opacity="0.1"
              animate={hoveredIndex === i ? { scale: [1, 1.3, 1], opacity: [0.1, 0.4, 0.1] } : {}}
              transition={{ repeat: Infinity, duration: 2 }}
            />

            <text x={point.cx} y={point.cy + 5} textAnchor="middle" className="text-[12px] pointer-events-none select-none">{point.icon}</text>

            <AnimatePresence>
              {hoveredIndex === i && (
                <motion.g
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                >
                  <rect x={point.cx - 70} y={point.cy - 85} width="140" height="65" fill="#1C1A18" rx="8" />
                  <text x={point.cx} y={point.cy - 62} textAnchor="middle" className="font-mono text-[11px] fill-cedar font-bold uppercase tracking-widest">{point.label}</text>
                  <text x={point.cx} y={point.cy - 42} textAnchor="middle" className="font-sans-cn text-[10px] fill-canvas/90 font-light">{point.insight}</text>
                  <path d="M -6 0 L 0 8 L 6 0 Z" fill="#1C1A18" transform={`translate(${point.cx}, ${point.cy - 25})`} />
                </motion.g>
              )}
            </AnimatePresence>

            <text x={point.cx} y={point.cy + 45} textAnchor="middle" className="font-mono text-[10px] fill-ink font-bold opacity-30 group-hover/swimlane:opacity-100 transition-opacity tracking-tighter uppercase">{point.label}</text>
          </motion.g>
        ))}
      </motion.svg>
    </div>
  );
};

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
    <div className="grid md:grid-cols-3 gap-10 mb-20 md:p-8">
      {insights.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -15, transition: { duration: 0.4 } }}
          className="bg-white border border-ink/5 p-10 shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-cedar/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />

          <div className="flex justify-between items-start mb-8 relative z-10">
            <div className="p-4 bg-canvas rounded-xl group-hover:bg-cedar/10 transition-colors shadow-inner">
              {item.icon}
            </div>
            <span className="font-mono text-[10px] font-bold text-cedar tracking-widest uppercase bg-cedar/5 px-3 py-1.5 rounded-full border border-cedar/10">
              {item.growth || item.trend}
            </span>
          </div>

          <p className="font-mono text-[10px] opacity-40 mb-3 uppercase tracking-[0.2em] font-bold relative z-10">{item.label}</p>

          <div className="flex items-baseline gap-3 mb-4 relative z-10">
            <p className="text-7xl font-display text-ink group-hover:text-cedar transition-colors duration-500 tracking-tighter">{item.value}</p>
            <motion.div
              animate={{ y: [0, -6, 0], rotate: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: i * 0.5 }}
            >
              {item.secondaryIcon}
            </motion.div>
          </div>

          <p className="text-sm font-sans-cn font-bold text-ink/80 mb-4 relative z-10 leading-tight">{item.sub}</p>
          <p className="text-xs font-sans-cn font-light opacity-60 leading-relaxed relative z-10 group-hover:opacity-100 transition-opacity max-w-[240px]">{item.detail}</p>
        </motion.div>
      ))}
    </div>
  );
};
