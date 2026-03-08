"use client";

import { motion } from "framer-motion";

export const AnimatedLineChart = () => (
  <motion.svg viewBox="0 0 400 150" className="w-full h-48 overflow-visible">
    {/* Grid lines */}
    {[0, 25, 50, 75, 100].map((tick) => (
      <line
        key={tick}
        x1="40" y1={120 - tick} x2="380" y2={120 - tick}
        stroke="#1C1A18" strokeOpacity="0.05" strokeWidth="1"
      />
    ))}

    {/* Axis labels */}
    <text x="0" y="125" className="font-mono text-[9px] fill-ink/40">START</text>
    <text x="360" y="125" className="font-mono text-[9px] fill-ink/40">MONTH 12</text>

    {/* Baseline: Standard E-commerce (Flat) */}
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
    <text x="45" y="100" className="font-mono text-[8px] fill-ink/30 uppercase font-bold">Standard E-comm</text>

    {/* ZenSelect Growth Curve */}
    <motion.path
      d="M40,110 Q140,110 200,80 T380,20"
      fill="none"
      stroke="#8B7355"
      strokeWidth="4"
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
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 2.1, duration: 0.5 }}
    >
      <rect x="330" y="35" width="60" height="20" fill="#8B7355" rx="2" />
      <text x="360" y="49" textAnchor="middle" className="font-mono text-[10px] fill-white font-bold">+35% YoY</text>
    </motion.g>

    <text x="45" y="70" className="font-mono text-[10px] fill-cedar uppercase font-bold">ZenSelect Strategy</text>
  </motion.svg>
);

export const EmotionSwimlane = () => (
  <motion.svg viewBox="0 0 800 160" className="w-full h-48 overflow-visible">
    {/* Background Grid */}
    <rect width="800" height="160" fill="#1C1A18" fillOpacity="0.02" rx="4" />
    <line x1="0" y1="80" x2="800" y2="80" stroke="#1C1A18" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="2 2" />

    {/* Y-Axis Labels */}
    <text x="10" y="30" className="font-mono text-[9px] fill-sage font-bold uppercase">Positive (Delighted)</text>
    <text x="10" y="140" className="font-mono text-[9px] fill-destructive/50 font-bold uppercase">Negative (Anxious)</text>

    <motion.path
      d="M 50 80 C 150 20, 250 140, 350 40 S 550 100, 750 20"
      fill="none"
      stroke="#5A8A5A"
      strokeWidth="3"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2.5, ease: "easeInOut" }}
    />
    {[
      { cx: 50, cy: 80, label: "Touchpoint: IG Ad", insight: "Curiosity triggered", val: "Neutral" },
      { cx: 200, cy: 60, label: "Browse: Catalog", insight: "Choice paralysis", val: "Anxious" },
      { cx: 350, cy: 40, label: "Read: Artisan Story", insight: "Trust established", val: "Engaged" },
      { cx: 550, cy: 90, label: "Action: Add to Cart", insight: "Price hesitation", val: "Cautious" },
      { cx: 750, cy: 20, label: "Post-Purchase", insight: "Brand loyalty", val: "Delighted" }
    ].map((point, i) => (
      <motion.g key={i}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.4 + 0.5, type: "spring", stiffness: 200 }}
      >
        <circle cx={point.cx} cy={point.cy} r="6" fill="#5A8A5A" />
        <circle cx={point.cx} cy={point.cy} r="15" fill="none" stroke="#5A8A5A" strokeWidth="1" opacity="0.2" />

        <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <rect x={point.cx - 50} y={point.cy - 60} width="100" height="40" fill="white" stroke="#1C1A18" strokeOpacity="0.1" rx="2" />
        </g>

        <text x={point.cx} y={point.cy - 35} textAnchor="middle" className="font-mono text-[10px] fill-ink font-bold">{point.label}</text>
        <text x={point.cx} y={point.cy - 22} textAnchor="middle" className="font-sans-cn text-[9px] fill-ink/40">{point.insight}</text>
      </motion.g>
    ))}
  </motion.svg>
);

export const MarketInsightGrid = () => (
  <div className="grid md:grid-cols-3 gap-8 mb-20">
    {[
      { label: "Market Opportunity", value: ".4B", sub: "Taiwan Premium Home Decor by 2027", icon: <TrendingUp className="w-5 h-5 text-cedar"/>, growth: "+12.4% CAGR" },
      { label: "User Pain Point", value: "88%", sub: "Users report Information Overload", icon: <Layers className="w-5 h-5 text-cedar"/>, trend: "Critical Barrier" },
      { label: "Design Impact", value: "+62%", sub: "Increase in Story Engagement", icon: <Activity className="w-5 h-5 text-cedar"/>, trend: "Conversion Catalyst" }
    ].map((item, i) => (
      <motion.div
        key={i}
        whileHover={{ y: -5 }}
        className="bg-white/50 border border-ink/5 p-8 shadow-sm hover:shadow-xl transition-all duration-500 group"
      >
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-canvas rounded-lg group-hover:bg-cedar/10 transition-colors">
            {item.icon}
          </div>
          <span className="font-mono text-[10px] font-bold text-cedar tracking-widest uppercase">{item.growth || item.trend}</span>
        </div>
        <p className="font-mono text-xs opacity-40 mb-2 uppercase tracking-widest font-bold">{item.label}</p>
        <p className="text-5xl font-display text-ink mb-3">{item.value}</p>
        <p className="text-sm font-sans-cn font-light opacity-60 leading-relaxed">{item.sub}</p>
      </motion.div>
    ))}
  </div>
);

import { TrendingUp, Layers, Activity } from "lucide-react";
