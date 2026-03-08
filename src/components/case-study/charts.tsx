"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { TrendingUp, Layers, Activity, Info,   } from "lucide-react";

export const AnimatedLineChart = () => (
  <motion.svg viewBox="0 0 400 150" className="w-full h-48 overflow-visible">
    <defs>
      <linearGradient id="chartGradient" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#8B7355" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#8B7355" stopOpacity="0.6" />
      </linearGradient>
    </defs>

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

    {/* ZenSelect Growth Curve Area */}
    <motion.path
      d="M40,110 Q140,110 200,80 T380,20 L380,120 L40,120 Z"
      fill="url(#chartGradient)"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2, delay: 0.5 }}
    />

    {/* ZenSelect Growth Curve */}
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
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 2.1, duration: 0.5 }}
    >
      <rect x="330" y="35" width="60" height="20" fill="#1C1A18" rx="2" />
      <text x="360" y="49" textAnchor="middle" className="font-mono text-[10px] fill-cedar font-bold">+35% YoY</text>
    </motion.g>

    <text x="45" y="70" className="font-mono text-[10px] fill-cedar uppercase font-bold">ZenSelect Strategy</text>
  </motion.svg>
);

export const EmotionSwimlane = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const points = [
    { cx: 50, cy: 80, label: "Touchpoint: IG Ad", insight: "Curiosity triggered", val: "Neutral", icon: "✨" },
    { cx: 200, cy: 110, label: "Browse: Catalog", insight: "Choice paralysis", val: "Anxious", icon: "🤯" },
    { cx: 350, cy: 40, label: "Read: Artisan Story", insight: "Trust established", val: "Engaged", icon: "📖" },
    { cx: 550, cy: 90, label: "Action: Add to Cart", insight: "Price hesitation", val: "Cautious", icon: "⚖️" },
    { cx: 750, cy: 20, label: "Post-Purchase", insight: "Brand loyalty", val: "Delighted", icon: "❤️" }
  ];

  return (
    <div className="relative group/swimlane">
      <motion.svg viewBox="0 0 800 200" className="w-full h-64 overflow-visible">
        {/* Background Grid */}
        <rect width="800" height="200" fill="#1C1A18" fillOpacity="0.02" rx="4" />
        <line x1="0" y1="100" x2="800" y2="100" stroke="#1C1A18" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="2 2" />

        {/* Y-Axis Labels */}
        <text x="10" y="30" className="font-mono text-[9px] fill-sage font-bold uppercase">Positive (Delighted)</text>
        <text x="10" y="180" className="font-mono text-[9px] fill-destructive/50 font-bold uppercase">Negative (Anxious)</text>

        <motion.path
          d="M 50 80 C 150 20, 250 180, 350 40 S 550 140, 750 20"
          fill="none"
          stroke="#5A8A5A"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />

        {points.map((point, i) => (
          <motion.g key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="cursor-pointer"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.3 + 0.5, type: "spring", stiffness: 200 }}
          >
            <motion.circle
              cx={point.cx} cy={point.cy} r="8"
              fill={hoveredIndex === i ? "#5A8A5A" : "#8B7355"}
              transition={{ duration: 0.3 }}
            />
            <motion.circle
              cx={point.cx} cy={point.cy} r="18"
              fill="none" stroke={hoveredIndex === i ? "#5A8A5A" : "#8B7355"}
              strokeWidth="1" opacity="0.2"
              animate={hoveredIndex === i ? { scale: [1, 1.2, 1] } : {}}
              transition={{ repeat: Infinity, duration: 2 }}
            />

            <text x={point.cx} y={point.cy + 5} textAnchor="middle" className="text-[10px] pointer-events-none">{point.icon}</text>

            <AnimatePresence>
              {hoveredIndex === i && (
                <motion.g
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <rect x={point.cx - 60} y={point.cy - 75} width="120" height="55" fill="#1C1A18" rx="4" />
                  <text x={point.cx} y={point.cy - 55} textAnchor="middle" className="font-mono text-[10px] fill-cedar font-bold">{point.label}</text>
                  <text x={point.cx} y={point.cy - 40} textAnchor="middle" className="font-sans-cn text-[9px] fill-canvas/80 font-light">{point.insight}</text>
                  <path d={`M ${point.cx} ${point.cy - 20} L ${point.cx - 5} ${point.cy - 25} L ${point.cx + 5} ${point.cy - 25} Z`} fill="#1C1A18" />
                </motion.g>
              )}
            </AnimatePresence>

            <text x={point.cx} y={point.cy + 35} textAnchor="middle" className="font-mono text-[10px] fill-ink font-bold opacity-40 group-hover/swimlane:opacity-100 transition-opacity">{point.label}</text>
          </motion.g>
        ))}
      </motion.svg>
    </div>
  );
};

export const MarketInsightGrid = () => (
  <div className="grid md:grid-cols-3 gap-8 mb-20">
    {[
      { label: "Market Opportunity", value: ".4B", sub: "Taiwan Premium Home Decor by 2027", icon: <TrendingUp className="w-5 h-5 text-cedar"/>, growth: "+12.4% CAGR", detail: "Growing demand for 'Sustainable Luxury' among millennials." },
      { label: "User Pain Point", value: "88%", sub: "Users report Information Overload", icon: <Layers className="w-5 h-5 text-cedar"/>, trend: "Critical Barrier", detail: "Complexity in decision making leads to high drop-off rates." },
      { label: "Design Impact", value: "+62%", sub: "Increase in Story Engagement", icon: <Activity className="w-5 h-5 text-cedar"/>, trend: "Conversion Catalyst", detail: "Artisan storytelling significantly boosts brand trust and LTV." }
    ].map((item, i) => (
      <motion.div
        key={i}
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
        className="bg-white/50 border border-ink/5 p-8 shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-cedar/5 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-700" />

        <div className="flex justify-between items-start mb-6 relative z-10">
          <div className="p-3 bg-canvas rounded-lg group-hover:bg-cedar/10 transition-colors">
            {item.icon}
          </div>
          <span className="font-mono text-[10px] font-bold text-cedar tracking-widest uppercase bg-cedar/5 px-2 py-1 rounded">{item.growth || item.trend}</span>
        </div>
        <p className="font-mono text-xs opacity-40 mb-2 uppercase tracking-widest font-bold relative z-10">{item.label}</p>
        <div className="flex items-baseline gap-2 mb-3 relative z-10">
          <p className="text-6xl font-display text-ink group-hover:text-cedar transition-colors duration-500">{item.value}</p>
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: i * 0.5 }}
          >
             <Info className="w-4 h-4 text-cedar/40 cursor-help" />
          </motion.div>
        </div>
        <p className="text-sm font-sans-cn font-bold text-ink/80 mb-2 relative z-10">{item.sub}</p>
        <p className="text-xs font-sans-cn font-light opacity-60 leading-relaxed relative z-10 group-hover:opacity-100 transition-opacity">{item.detail}</p>
      </motion.div>
    ))}
  </div>
);
