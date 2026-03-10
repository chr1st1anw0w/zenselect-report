"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Boxes,
  Compass,
  Layers,
  LayoutGrid,
  Eye,
  ShieldCheck,
  Leaf,
  Smartphone,
  TrendingUp,
  Users,
  MoveRight
} from "lucide-react";
import { useLanguage } from "@/context/language-context";

type BranchItem = {
  name: string;
  tag: string;
  desc: string;
  metric?: string;
  icon: React.ReactNode;
};

type BranchData = {
  id: string;
  icon: React.ReactNode;
  label: string;
  highlighted?: boolean;
  items: BranchItem[];
};

export const IACoreMap = () => {
  const { lang } = useLanguage();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const branches: BranchData[] = [
    {
      id: "categories",
      icon: <Boxes className="w-4 h-4" />,
      label: "01_CATEGORIES",
      items: [
        {
          name: lang === "en" ? "Living System" : "客廳 Living",
          tag: "FUNCTIONAL",
          desc: lang === "en"
            ? "Modular furniture systems optimized for small urban spaces. Smart sizing algorithm suggests pieces based on room dimensions."
            : "模組化家具系統，針對小型都市空間優化。智慧尺寸演算法依照房間尺寸推薦。",
          metric: "CTR 12.4%",
          icon: <LayoutGrid className="w-3.5 h-3.5" />,
        },
        {
          name: lang === "en" ? "Rest Haven" : "臥室 Rest",
          tag: "WELLNESS",
          desc: lang === "en"
            ? "Sleep-focused selection with natural materials. Each product linked to sleep quality research data."
            : "聚焦睡眠的天然材質選品，每件產品連結睡眠品質研究數據。",
          metric: "CTR 9.8%",
          icon: <Eye className="w-3.5 h-3.5" />,
        },
        {
          name: lang === "en" ? "Craft Vessel" : "器皿 Craft",
          tag: "ARTISAN",
          desc: lang === "en"
            ? "Handcrafted ceramics and tableware with artisan provenance tracking."
            : "手工陶瓷與餐具，附職人溯源追蹤。",
          metric: "CTR 15.2%",
          icon: <Compass className="w-3.5 h-3.5" />,
        },
        {
          name: lang === "en" ? "Lighting Ma" : "光影 Lighting",
          tag: "AMBIENCE",
          desc: lang === "en"
            ? "Ambient lighting inspired by 'Ma' philosophy — space between light and shadow."
            : "靈感源自「間」哲學的環境照明——光影之間的空間。",
          metric: "CTR 8.1%",
          icon: <Layers className="w-3.5 h-3.5" />,
        },
      ],
    },
    {
      id: "narrative",
      icon: <Compass className="w-4 h-4" />,
      label: "02_OUR_EDIT",
      highlighted: true,
      items: [
        {
          name: lang === "en" ? "Artisan Stories" : "職人故事",
          tag: "EMOTIONAL_HOOK",
          desc: lang === "en"
            ? "Video interviews and workshop tours. Trust score increases 3.5x when users engage with artisan narratives before viewing prices."
            : "影像訪談與工坊導覽。用戶在查看價格前觀看職人故事，信任分數提升 3.5 倍。",
          metric: "Engagement +240%",
          icon: <ShieldCheck className="w-3.5 h-3.5" />,
        },
        {
          name: lang === "en" ? "Material Philosophy" : "材質哲學",
          tag: "TRUST_SIGNAL",
          desc: lang === "en"
            ? "360° material close-ups, origin maps, and sustainability certifications. Reduces return rate by 18%."
            : "360° 材質特寫、產地地圖與永續認證。退貨率降低 18%。",
          metric: "Return -18%",
          icon: <Eye className="w-3.5 h-3.5" />,
        },
        {
          name: lang === "en" ? "Sustainability Promise" : "永續承諾",
          tag: "VALUE_ALIGNMENT",
          desc: lang === "en"
            ? "Carbon footprint tracker per product. FSC, GOTS certifications front-loaded in the browsing experience."
            : "每件商品的碳足跡追蹤器。FSC、GOTS 認證前置於瀏覽體驗。",
          metric: "CVR +22%",
          icon: <Leaf className="w-3.5 h-3.5" />,
        },
      ],
    },
    {
      id: "scenes",
      icon: <Layers className="w-4 h-4" />,
      label: "03_SCENES",
      items: [
        {
          name: "Urban Compact",
          tag: "SPACE_OPT",
          desc: lang === "en"
            ? "Curated for apartments under 25 ping. AR preview for space planning before purchase."
            : "為 25 坪以下公寓策展。購買前 AR 空間規劃預覽。",
          metric: "Top seller",
          icon: <Smartphone className="w-3.5 h-3.5" />,
        },
        {
          name: "Zen Minimalist",
          tag: "PHILOSOPHY",
          desc: lang === "en"
            ? "Ma-inspired negative space design. Monochrome palette with natural accents."
            : "「間」哲學負空間設計。單色調搭配天然點綴。",
          metric: "Avg. order +34%",
          icon: <Compass className="w-3.5 h-3.5" />,
        },
        {
          name: "Nordic Warmth",
          tag: "FUSION",
          desc: lang === "en"
            ? "Scandinavian functionality meets Taiwanese craft. Hygge meets 'Ma'."
            : "北歐功能性邂逅台灣工藝。Hygge 遇見「間」。",
          metric: "Repeat buy 42%",
          icon: <Home className="w-3.5 h-3.5" />,
        },
        {
          name: lang === "en" ? "Taiwan Heritage" : "老屋 Heritage",
          tag: "LOCAL",
          desc: lang === "en"
            ? "Traditional home renovation collection. Heritage preservation through modern artisan pieces."
            : "傳統老屋翻新選品。透過現代職人作品保存文化遺產。",
          metric: "Niche growth +67%",
          icon: <TrendingUp className="w-3.5 h-3.5" />,
        },
      ],
    },
  ];

  return (
    <div className="w-full font-mono py-6">
      {/* Mobile scroll hint */}
      <motion.div
        className="flex items-center gap-2 mb-5 lg:hidden"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <MoveRight className="w-4 h-4 text-cedar" />
        <span className="text-[12px] font-bold text-cedar/70 uppercase tracking-[0.2em]">
          {lang === "en" ? "Swipe to explore IA structure" : "水平滑動探索架構"}
        </span>
      </motion.div>

      {/* Map container — horizontal scroll on mobile */}
      <div
        className="overflow-x-auto pb-4"
        style={{ scrollbarWidth: "thin", scrollbarColor: "#8B7355 transparent" }}
      >
        <div className="min-w-[820px] lg:min-w-0">

          {/* ── HOME root node ── */}
          <div className="flex items-center gap-0 mb-10">
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="bg-ink text-canvas px-8 py-4 rounded-full shadow-xl flex items-center gap-3 border border-cedar/30 flex-shrink-0 z-10"
            >
              <Home className="w-4 h-4 text-cedar" />
              <span className="text-[12px] tracking-[0.3em] font-bold">00_HOME</span>
            </motion.div>
            <div className="h-px w-16 bg-cedar/20 flex-shrink-0" />
            <span className="text-[11px] text-ink/25 font-bold tracking-[0.3em] uppercase italic">
              ENTRY_POINT
            </span>
          </div>

          {/* ── Branch rows — horizontal axis ── */}
          <div className="relative ml-4 border-l border-cedar/20">
            {branches.map((branch, bIdx) => {
              const isLast = bIdx === branches.length - 1;
              return (
                <motion.div
                  key={branch.id}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: bIdx * 0.15, duration: 0.6 }}
                  className={`flex items-start gap-0 relative ${!isLast ? "mb-8" : ""}`}
                >
                  {/* Connector dot + horizontal line */}
                  <div className="absolute -left-[5px] top-[14px] flex items-center gap-0 pointer-events-none">
                    <div className="w-2.5 h-2.5 rounded-full bg-cedar/40 border border-cedar/20" />
                    <div className="h-px w-5 bg-cedar/20" />
                  </div>

                  {/* Branch label pill */}
                  <div className="pl-8 flex items-start gap-4 w-full">
                    <button
                      className={`flex items-center gap-2.5 px-5 py-3 rounded-full border flex-shrink-0 text-[12px] font-bold tracking-wider uppercase whitespace-nowrap self-start transition-all duration-200 ${
                        branch.highlighted
                          ? "bg-ink text-cedar border-cedar/30 shadow-lg hover:shadow-xl"
                          : "bg-white/50 border-white/60 text-ink/70 hover:border-cedar/40 hover:bg-white/70 backdrop-blur-md"
                      }`}
                    >
                      <span className={branch.highlighted ? "text-cedar" : "text-cedar/50"}>
                        {branch.icon}
                      </span>
                      {branch.label}
                    </button>

                    {/* Connector to items */}
                    <div className="h-px w-5 bg-cedar/15 flex-shrink-0 self-start mt-[18px]" />

                    {/* ── Items: horizontal row with hover expand ── */}
                    <div className="flex gap-3 flex-wrap">
                      {branch.items.map((item, iIdx) => {
                        const itemKey = `${branch.id}-${iIdx}`;
                        const isHovered = hoveredItem === itemKey;

                        return (
                          <div
                            key={iIdx}
                            className="relative flex-shrink-0"
                            onMouseEnter={() => setHoveredItem(itemKey)}
                            onMouseLeave={() => setHoveredItem(null)}
                          >
                            {/* Item pill */}
                            <motion.div
                              whileHover={{ y: -2 }}
                              className={`px-4 py-2.5 rounded-2xl border cursor-pointer transition-all duration-200 flex items-center gap-2 ${
                                branch.highlighted
                                  ? `bg-cedar/5 border-cedar/20 text-cedar hover:bg-cedar/15 hover:border-cedar/40 ${isHovered ? "shadow-lg" : ""}`
                                  : `bg-white/60 border-white/50 hover:border-cedar/40 hover:bg-white/85 text-ink/80 ${isHovered ? "shadow-md border-cedar/30" : ""}`
                              }`}
                            >
                              <span className={`flex-shrink-0 ${branch.highlighted ? "text-cedar" : "text-cedar/60"}`}>
                                {item.icon}
                              </span>
                              <span className="font-sans-cn font-medium text-[13px] whitespace-nowrap">
                                {item.name}
                              </span>
                              {item.metric && (
                                <span className={`text-[11px] font-mono font-bold ml-0.5 ${branch.highlighted ? "text-cedar/80" : "text-cedar/55"}`}>
                                  · {item.metric}
                                </span>
                              )}
                            </motion.div>

                            {/* ── Hover tooltip: expanded card ── */}
                            <AnimatePresence>
                              {isHovered && (
                                <motion.div
                                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                                  transition={{ duration: 0.18, ease: "easeOut" }}
                                  className="absolute top-full left-0 mt-2 w-[240px] z-50 pointer-events-none"
                                >
                                  <div
                                    className="bg-white/96 backdrop-blur-2xl border border-white/70 p-5 shadow-2xl rounded-2xl"
                                    style={{ boxShadow: "0 24px 64px rgba(28,26,24,0.14), 0 4px 16px rgba(28,26,24,0.08)" }}
                                  >
                                    {/* Header */}
                                    <div className="flex items-start gap-3 mb-3">
                                      <div className={`p-1.5 rounded-lg flex-shrink-0 ${branch.highlighted ? "bg-cedar/10" : "bg-ink/5"}`}>
                                        <span className="text-cedar">{item.icon}</span>
                                      </div>
                                      <div>
                                        <p className="font-sans-cn font-bold text-[13px] text-ink leading-tight">
                                          {item.name}
                                        </p>
                                        <p className="font-mono text-[11px] text-cedar/65 uppercase tracking-widest font-bold mt-0.5">
                                          {item.tag}
                                        </p>
                                      </div>
                                    </div>

                                    {/* Description */}
                                    <p className="font-sans-cn text-[12px] text-ink/65 leading-relaxed mb-3">
                                      {item.desc}
                                    </p>

                                    {/* Metric bar */}
                                    {item.metric && (
                                      <div className="pt-2.5 border-t border-ink/6 flex items-center justify-between">
                                        <span className="font-mono text-[12px] text-cedar font-bold">
                                          {item.metric}
                                        </span>
                                        <span className="text-[11px] text-ink/30 font-mono font-bold uppercase tracking-widest">
                                          VERIFIED
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Summary insight note */}
      <div className="mt-10 w-full">
        <div className="bg-white/20 border border-white/60 p-5 md:p-6 rounded-[28px] flex items-start gap-5 backdrop-blur-3xl shadow-glass">
          <div className="w-10 h-10 bg-cedar/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
            <Users className="w-5 h-5 text-cedar opacity-60" />
          </div>
          <p className="text-[12px] font-sans-cn leading-relaxed opacity-65 font-light">
            {lang === "en" ? (
              <>
                This IA structure reduces <strong className="font-semibold text-ink/80">&ldquo;Choice Overload.&rdquo;</strong>{" "}
                Branch 02 (emotional narrative) + Branch 03 (contextual navigation) shifts users from product comparison to{" "}
                <strong className="font-semibold text-ink/80">brand affinity</strong> — data shows this path increases AOV by{" "}
                <strong className="text-cedar font-bold">28.4%</strong>.
              </>
            ) : (
              <>
                此 IA 結構旨在降低<strong className="font-semibold text-ink/80">「決策疲勞 (Choice Overload)」</strong>。
                透過 Branch 02 (感性敘事) 與 Branch 03 (情境導航) 的雙向引導，將用戶從商品比較轉化為對
                <strong className="font-semibold text-ink/80">品牌理念</strong>的認同，
                數據顯示此路徑能增加客單價約 <strong className="text-cedar font-bold">28.4%</strong>。
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
