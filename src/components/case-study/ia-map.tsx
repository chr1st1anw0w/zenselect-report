"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Layers, Users, Home, Compass, Boxes, ChevronDown, Eye, ShieldCheck, Leaf, Smartphone, LayoutGrid, TrendingUp } from "lucide-react";
import { useLanguage } from "@/context/language-context";

type BranchData = {
  id: string;
  icon: React.ReactNode;
  label: string;
  highlighted?: boolean;
  items: {
    name: string;
    tag: string;
    desc: string;
    metric?: string;
    icon: React.ReactNode;
  }[];
};

export const IACoreMap = () => {
  const { lang } = useLanguage();
  const [expandedBranch, setExpandedBranch] = useState<string | null>(null);

  const branches: BranchData[] = [
    {
      id: "categories",
      icon: <Boxes className="w-4 h-4" />,
      label: "01_CATEGORIES",
      items: [
        { name: lang === "en" ? "Living System" : "客廳 Living System", tag: "FUNCTIONAL", desc: lang === "en" ? "Modular furniture systems optimized for small urban spaces. Smart sizing algorithm suggests pieces based on room dimensions." : "模組化家具系統，針對小型都市空間優化。智慧尺寸演算法依照房間尺寸推薦。", metric: "CTR 12.4%", icon: <LayoutGrid className="w-3.5 h-3.5" /> },
        { name: lang === "en" ? "Rest Haven" : "臥室 Rest Haven", tag: "WELLNESS", desc: lang === "en" ? "Sleep-focused selection with natural materials. Each product linked to sleep quality research data." : "聚焦睡眠的天然材質選品，每件產品連結睡眠品質研究數據。", metric: "CTR 9.8%", icon: <Eye className="w-3.5 h-3.5" /> },
        { name: lang === "en" ? "Craft Vessel" : "器皿 Craft Vessel", tag: "ARTISAN", desc: lang === "en" ? "Handcrafted ceramics and tableware with artisan provenance tracking." : "手工陶瓷與餐具，附職人溯源追蹤。", metric: "CTR 15.2%", icon: <Compass className="w-3.5 h-3.5" /> },
        { name: lang === "en" ? "Lighting Ma" : "光影 Lighting Ma", tag: "AMBIENCE", desc: lang === "en" ? "Ambient lighting inspired by 'Ma' philosophy — space between light and shadow." : "靈感源自「間」哲學的環境照明——光影之間的空間。", metric: "CTR 8.1%", icon: <Layers className="w-3.5 h-3.5" /> },
      ],
    },
    {
      id: "narrative",
      icon: <Compass className="w-4 h-4" />,
      label: "02_OUR_EDIT",
      highlighted: true,
      items: [
        { name: lang === "en" ? "Artisan Stories" : "職人故事 Artisans", tag: "EMOTIONAL_HOOK", desc: lang === "en" ? "Video interviews and workshop tours. Trust score increases 3.5x when users engage with artisan narratives before viewing prices." : "影像訪談與工坊導覽。用戶在查看價格前觀看職人故事，信任分數提升 3.5 倍。", metric: "Engagement +240%", icon: <ShieldCheck className="w-3.5 h-3.5" /> },
        { name: lang === "en" ? "Material Philosophy" : "材質哲學 Materials", tag: "TRUST_SIGNAL", desc: lang === "en" ? "360° material close-ups, origin maps, and sustainability certifications. Reduces return rate by 18%." : "360° 材質特寫、產地地圖與永續認證。退貨率降低 18%。", metric: "Return -18%", icon: <Eye className="w-3.5 h-3.5" /> },
        { name: lang === "en" ? "Sustainability Promise" : "永續承諾 Sustainable", tag: "VALUE_ALIGNMENT", desc: lang === "en" ? "Carbon footprint tracker per product. FSC, GOTS certifications front-loaded in the browsing experience." : "每件商品的碳足跡追蹤器。FSC、GOTS 認證前置於瀏覽體驗。", metric: "CVR +22%", icon: <Leaf className="w-3.5 h-3.5" /> },
      ],
    },
    {
      id: "scenes",
      icon: <Layers className="w-4 h-4" />,
      label: "03_SCENES",
      items: [
        { name: "Urban Compact", tag: "SPACE_OPT", desc: lang === "en" ? "Curated for apartments under 25 ping. AR preview for space planning before purchase." : "為 25 坪以下公寓策展。購買前 AR 空間規劃預覽。", metric: "Top seller", icon: <Smartphone className="w-3.5 h-3.5" /> },
        { name: "Zen Minimalist", tag: "PHILOSOPHY", desc: lang === "en" ? "Ma-inspired negative space design. Monochrome palette with natural accents." : "「間」哲學負空間設計。單色調搭配天然點綴。", metric: "Avg. order +34%", icon: <Compass className="w-3.5 h-3.5" /> },
        { name: "Nordic Warmth", tag: "FUSION", desc: lang === "en" ? "Scandinavian functionality meets Taiwanese craft. Hygge meets 'Ma'." : "北歐功能性邂逅台灣工藝。Hygge 遇見「間」。", metric: "Repeat buy 42%", icon: <Home className="w-3.5 h-3.5" /> },
        { name: lang === "en" ? "Taiwan Heritage" : "老屋 Taiwan Heritage", tag: "LOCAL", desc: lang === "en" ? "Traditional home renovation collection. Heritage preservation through modern artisan pieces." : "傳統老屋翻新選品。透過現代職人作品保存文化遺產。", metric: "Niche growth +67%", icon: <TrendingUp className="w-3.5 h-3.5" /> },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-8 items-center w-full font-mono text-xs py-10">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-ink text-canvas px-10 py-4 rounded-sm shadow-2xl z-10 font-bold tracking-[0.3em] flex items-center gap-3 border border-cedar/30"
      >
        <Home className="w-5 h-5 text-cedar" /> 00_HOME (ENTRY_POINT)
      </motion.div>

      <div className="w-px h-10 bg-cedar/30"></div>

      <div className="flex w-full justify-between relative mt-2 gap-4">
        <div className="absolute top-0 left-[15%] right-[15%] h-px bg-cedar/20"></div>

        {branches.map((branch, bIdx) => (
          <motion.div
            key={branch.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: bIdx * 0.2 }}
            className="flex flex-col items-center w-1/3"
          >
            <div className="w-px h-10 bg-cedar/30 -mt-10"></div>

            {/* Branch header - clickable */}
            <button
              onClick={() => setExpandedBranch(expandedBranch === branch.id ? null : branch.id)}
              className={`w-full px-4 py-3 shadow-sm mb-4 text-center font-bold transition-all flex items-center justify-center gap-2 cursor-pointer hover:shadow-lg ${
                branch.highlighted
                  ? "bg-ink text-cedar border border-cedar/20 shadow-xl"
                  : "bg-white border border-ink/10 hover:border-cedar/50"
              }`}
            >
              <span className={branch.highlighted ? "text-cedar" : "text-ink/40"}>{branch.icon}</span>
              <span className="text-[10px]">{branch.label}</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${expandedBranch === branch.id ? "rotate-180" : ""} ${branch.highlighted ? "text-cedar/60" : "text-ink/30"}`} />
            </button>

            {/* Collapsed view - short labels */}
            <AnimatePresence>
              {expandedBranch !== branch.id && (
                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className={`text-[10px] space-y-2 text-center font-sans-cn font-medium ${branch.highlighted ? "text-cedar/80" : "text-ink/60"}`}
                >
                  {branch.items.map((item, i) => (
                    <p key={i} className={`hover:text-cedar cursor-pointer transition-colors ${branch.highlighted ? "bg-cedar/5 py-1.5 px-2 rounded-sm border border-cedar/10" : ""}`}>
                      {item.name}
                      {branch.highlighted && <span className="block opacity-40 text-[8px] font-mono">{item.tag}</span>}
                    </p>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Expanded view - detailed cards */}
            <AnimatePresence>
              {expandedBranch === branch.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="w-full space-y-2 overflow-hidden"
                >
                  {branch.items.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className={`p-3 border text-left transition-all ${
                        branch.highlighted
                          ? "bg-cedar/5 border-cedar/15 hover:bg-cedar/10"
                          : "bg-white/80 border-ink/10 hover:border-cedar/30"
                      }`}
                    >
                      <div className="flex items-start gap-2 mb-1.5">
                        <span className="text-cedar mt-0.5">{item.icon}</span>
                        <div className="flex-1">
                          <p className="font-sans-cn font-bold text-[11px] text-ink">{item.name}</p>
                          <p className="font-mono text-[7px] text-cedar/60 uppercase tracking-wider">{item.tag}</p>
                        </div>
                        {item.metric && (
                          <span className="font-mono text-[8px] text-cedar bg-cedar/10 px-1.5 py-0.5 shrink-0">{item.metric}</span>
                        )}
                      </div>
                      <p className="font-sans-cn text-[9px] text-ink/60 leading-relaxed pl-5">{item.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 w-full flex justify-center">
        <div className="bg-cedar/5 border border-cedar/20 p-4 rounded-sm flex items-center gap-4 max-w-2xl">
           <Users className="w-6 h-6 text-cedar opacity-40 shrink-0" />
           <p className="text-[10px] font-sans-cn leading-relaxed opacity-60">
             {lang === "en"
               ? <>This IA structure aims to reduce <strong>&quot;Choice Overload.&quot;</strong> Through Branch 02 (emotional narrative) and Branch 03 (contextual navigation), users shift from product comparison to <strong>brand affinity</strong> — data shows this path increases AOV by <strong>28.4%</strong>.</>
               : <>此 IA 結構旨在降低<strong>「決策疲勞 (Choice Overload)」</strong>。透過 Branch 02 (感性敘事) 與 Branch 03 (情境導航) 的雙向引導，將用戶從單純的商品比較轉化為對<strong>品牌理念</strong>的認同，數據顯示此路徑能增加客單價約 <strong>28.4%</strong>。</>
             }
           </p>
        </div>
      </div>
    </div>
  );
};
