"use client";

import { motion } from "framer-motion";
import { MARKET_TRENDS, MARKET_DATA } from "@/data/research-data";

const CHART_HEIGHT = 160;
const CHART_WIDTH = 560;
const BAR_GROUP_WIDTH = 80;
const BAR_WIDTH = 18;
const GAP = 6;

const maxFurniture = 2.0;
const maxSustainability = 80;
const maxMobile = 80;

function toBarHeight(value: number, max: number) {
  return (value / max) * CHART_HEIGHT;
}

export function MarketTrendsChart() {
  const displayYears = MARKET_TRENDS.filter((d) => d.year !== "2025" && d.year !== "2023");

  return (
    <div className="w-full space-y-10">
      {/* Key Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          {
            value: `USD ${MARKET_DATA.taiwanFurnitureMarket2024}B`,
            label: "台灣家居市場 2024",
            sub: "Home Furnishings Market",
            delta: `→ USD ${MARKET_DATA.taiwanFurnitureMarket2032}B by 2032`,
          },
          {
            value: `${MARKET_DATA.taiwanFurnitureCAGR}%`,
            label: "CAGR 年複合成長率",
            sub: "2024–2032 Projected",
            delta: "Mordor Intelligence",
          },
          {
            value: `NTD 653B`,
            label: "台灣電商市場 2024",
            sub: "E-commerce Revenue",
            delta: `+${MARKET_DATA.taiwanEcommerceGrowth2025}% projected 2025`,
          },
          {
            value: `55.1%`,
            label: "手機電商佔比",
            sub: "Mobile GMV Share 2024",
            delta: "80%+ mobile abandonment",
          },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="bg-stone border border-ink/10 p-5"
          >
            <p className="text-3xl font-display text-accent font-light mb-1">{stat.value}</p>
            <p className="font-sans-cn text-xs font-bold text-ink mb-1">{stat.label}</p>
            <p className="font-mono text-[9px] text-ink/40 uppercase tracking-wider">{stat.sub}</p>
            <p className="font-mono text-[9px] text-sage mt-2">{stat.delta}</p>
          </motion.div>
        ))}
      </div>

      {/* Grouped Bar Chart */}
      <div className="glass-card border border-ink/5 p-8">
        <p className="font-mono text-xs text-ink/40 mb-6 tracking-widest font-bold uppercase">
          市場趨勢圖 Market Growth Trends (2022–2032P)
        </p>
        <div className="overflow-x-auto">
          <svg
            viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT + 80}`}
            className="w-full"
            style={{ minWidth: 480 }}
          >
            {/* Y axis grid lines */}
            {[0, 0.25, 0.5, 0.75, 1].map((pct) => (
              <line
                key={pct}
                x1={40}
                y1={CHART_HEIGHT - pct * CHART_HEIGHT}
                x2={CHART_WIDTH - 10}
                y2={CHART_HEIGHT - pct * CHART_HEIGHT}
                stroke="#1C1A18"
                strokeOpacity={0.06}
                strokeWidth={1}
              />
            ))}

            {displayYears.map((d, i) => {
              const x = 50 + i * BAR_GROUP_WIDTH;
              const fH = toBarHeight(d.furnitureMarket, maxFurniture);
              const sH = toBarHeight(d.sustainabilityAdoption, maxSustainability);
              const mH = toBarHeight(d.mobileCommerce, maxMobile);
              const isProjected = d.year.includes("P");

              return (
                <g key={d.year}>
                  {/* Furniture Market Bar */}
                  <motion.rect
                    x={x}
                    y={CHART_HEIGHT - fH}
                    width={BAR_WIDTH}
                    height={0}
                    fill="#8B7355"
                    initial={{ height: 0, y: CHART_HEIGHT }}
                    whileInView={{ height: fH, y: CHART_HEIGHT - fH }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                    opacity={isProjected ? 0.5 : 1}
                  />

                  {/* Sustainability Bar */}
                  <motion.rect
                    x={x + BAR_WIDTH + GAP}
                    y={CHART_HEIGHT - sH}
                    width={BAR_WIDTH}
                    height={0}
                    fill="#5A8A5A"
                    initial={{ height: 0, y: CHART_HEIGHT }}
                    whileInView={{ height: sH, y: CHART_HEIGHT - sH }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1 + 0.1, ease: "easeOut" }}
                    opacity={isProjected ? 0.5 : 1}
                  />

                  {/* Mobile Commerce Bar */}
                  <motion.rect
                    x={x + (BAR_WIDTH + GAP) * 2}
                    y={CHART_HEIGHT - mH}
                    width={BAR_WIDTH}
                    height={0}
                    fill="#5C8BC7"
                    initial={{ height: 0, y: CHART_HEIGHT }}
                    whileInView={{ height: mH, y: CHART_HEIGHT - mH }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1 + 0.2, ease: "easeOut" }}
                    opacity={isProjected ? 0.5 : 1}
                  />

                  {/* Year Label */}
                  <text
                    x={x + BAR_WIDTH + GAP}
                    y={CHART_HEIGHT + 18}
                    textAnchor="middle"
                    fill="#1C1A18"
                    fillOpacity={0.5}
                    fontSize={9}
                    fontFamily="JetBrains Mono, monospace"
                    fontWeight="bold"
                  >
                    {d.year}
                  </text>
                  {isProjected && (
                    <text
                      x={x + BAR_WIDTH + GAP}
                      y={CHART_HEIGHT + 30}
                      textAnchor="middle"
                      fill="#8B7355"
                      fillOpacity={0.7}
                      fontSize={8}
                      fontFamily="JetBrains Mono, monospace"
                    >
                      (Projected)
                    </text>
                  )}
                </g>
              );
            })}

            {/* X axis line */}
            <line x1={40} y1={CHART_HEIGHT} x2={CHART_WIDTH - 10} y2={CHART_HEIGHT} stroke="#1C1A18" strokeOpacity={0.12} strokeWidth={1} />
          </svg>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-6 mt-4 font-mono text-[10px] text-ink/60">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-accent" />
            <span>家居市場規模 (USD B) — max: $2B</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-sage" />
            <span>永續消費採納率 (%) — APAC benchmark</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3" style={{ background: "#5C8BC7" }} />
            <span>手機電商佔比 (%)</span>
          </div>
        </div>
        <p className="font-mono text-[9px] text-ink/30 mt-3">
          Sources: Mordor Intelligence 2024 · Bain & Co. APAC Sustainability Report 2024 · Statista Taiwan E-commerce
        </p>
      </div>
    </div>
  );
}
