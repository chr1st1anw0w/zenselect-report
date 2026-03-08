"use client";

import { motion, Variants } from "framer-motion";
import {
  Fingerprint, Activity, Network, Eye, GitCommitHorizontal,
  FileText, CheckCircle2, Target, Leaf, LayoutGrid, Wind,
  Search, Users, MessageSquare, PieChart, Layers, MousePointerClick,
  TrendingUp, HeartHandshake, CheckSquare, Wrench, Compass, Map as MapIcon
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Research Phase Charts
import { CompetitorMatrix } from "@/components/charts/CompetitorMatrix";
import { MarketTrendsChart } from "@/components/charts/MarketTrendsChart";
import { SurveyResultsChart } from "@/components/charts/SurveyResultsChart";
import { AffinityMap } from "@/components/charts/AffinityMap";

// Define Phase Charts
import { PersonaMatrix } from "@/components/charts/PersonaMatrix";
import { EmotionalJourneyChart } from "@/components/charts/EmotionalJourneyChart";
import { HMWMatrix } from "@/components/charts/HMWMatrix";

// Design & Validation Phase Charts
import { SUSGauge } from "@/components/charts/SUSGauge";
import { UsabilityMatrix } from "@/components/charts/UsabilityMatrix";
import { IterationChart } from "@/components/charts/IterationChart";
import { DesignSystemMatrix } from "@/components/charts/DesignSystemMatrix";

// --- Framer Motion Shared Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

// --- Reusable Animated Charts ---
const AnimatedLineChart = () => (
  <motion.svg viewBox="0 0 400 100" className="w-full h-32 overflow-visible">
    <motion.path
      d="M0,80 Q100,80 150,50 T300,30 T400,10"
      fill="none"
      stroke="#8B7355"
      strokeWidth="4"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
    <motion.circle 
      cx="400" cy="10" r="6" fill="#8B7355"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1.4, duration: 0.3 }}
    />
    <motion.text x="360" y="30" className="font-mono text-sm fill-cedar font-bold"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1.6, duration: 0.5 }}
    >
      +35% YoY
    </motion.text>
  </motion.svg>
);

const EmotionSwimlane = () => (
  <motion.svg viewBox="0 0 800 140" className="w-full h-40 overflow-visible">
    {/* Grid lines */}
    <line x1="0" y1="70" x2="800" y2="70" stroke="#1C1A18" strokeOpacity="0.05" strokeWidth="1" />
    
    <motion.path
      d="M 50 70 C 150 20, 250 110, 350 50 S 550 90, 750 30"
      fill="none"
      stroke="#5A8A5A"
      strokeWidth="3"
      strokeDasharray="6 6"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2, ease: "easeOut" }}
    />
    {[
      { cx: 50, cy: 70, label: "Touchpoint: IG Ad", val: "Neutral" },
      { cx: 200, cy: 65, label: "Browse: Catalog", val: "Anxious" },
      { cx: 350, cy: 50, label: "Read: Artisan Story", val: "Engaged" },
      { cx: 550, cy: 70, label: "Action: Add to Cart", val: "Confident" },
      { cx: 750, cy: 30, label: "Post-Purchase", val: "Delighted" }
    ].map((point, i) => (
      <motion.g key={i}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.4 + 0.5 }}
      >
        <circle cx={point.cx} cy={point.cy} r="8" fill="#8B7355" />
        <circle cx={point.cx} cy={point.cy} r="20" fill="none" stroke="#8B7355" strokeWidth="1" opacity="0.3" />
        <text x={point.cx - 40} y={point.cy - 30} className="font-mono text-[11px] fill-ink font-semibold">{point.label}</text>
      </motion.g>
    ))}
  </motion.svg>
);

// --- IA Tree Diagram ---
const IACoreMap = () => {
  return (
    <div className="flex flex-col gap-6 items-center w-full font-mono text-xs">
      <div className="bg-ink text-canvas px-8 py-3 rounded-md shadow-lg z-10 font-bold tracking-widest">00_HOME (首頁)</div>
      <div className="w-px h-6 bg-ink/20 -my-6 z-0"></div>
      
      <div className="flex w-full justify-between relative mt-4">
        {/* Horizontal connection line */}
        <div className="absolute top-0 left-[16%] right-[16%] h-px bg-ink/20 -z-10"></div>
        
        {/* Branch 1 */}
        <div className="flex flex-col items-center w-1/3">
          <div className="w-px h-6 bg-ink/20 -mt-6"></div>
          <div className="bg-white border border-ink/10 px-6 py-3 shadow-sm mb-4 w-11/12 text-center font-bold">01_CATEGORIES</div>
          <div className="text-[10px] text-ink/60 space-y-2 text-center">
            <p>🛋️ 客廳 (Living)</p>
            <p>🛏️ 臥室 (Bedroom)</p>
            <p>🍳 廚房 (Kitchen)</p>
            <p>🪴 植物與器皿</p>
            <p>🕯️ 香氛燭台</p>
          </div>
        </div>

        {/* Branch 2 */}
        <div className="flex flex-col items-center w-1/3">
          <div className="w-px h-6 bg-ink/20 -mt-6"></div>
          <div className="bg-white border border-cedar text-cedar px-6 py-3 shadow-sm mb-4 w-11/12 text-center font-bold">02_OUR_EDIT</div>
          <div className="text-[10px] text-ink/60 space-y-2 text-center">
            <p>職人故事 (Artisans)</p>
            <p>材質哲學 (Materials)</p>
            <p>永續承諾 (Sustainability)</p>
          </div>
        </div>

        {/* Branch 3 */}
        <div className="flex flex-col items-center w-1/3">
          <div className="w-px h-6 bg-ink/20 -mt-6"></div>
          <div className="bg-white border border-ink/10 px-6 py-3 shadow-sm mb-4 w-11/12 text-center font-bold">03_ROOMS</div>
          <div className="text-[10px] text-ink/60 space-y-2 text-center">
            <p>25坪以下小空間</p>
            <p>北歐風格搭配</p>
            <p>禪意日式空間</p>
            <p>台灣老屋改造</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CaseStudyPage() {
  return (
    <div className="min-h-screen text-ink overflow-hidden pb-40">
      {/* Background Watermark */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-[0.02] flex items-center justify-center select-none">
        <p className="text-[40vw] font-sans-cn font-bold leading-none text-ink">間</p>
      </div>

      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-canvas/90 backdrop-blur-xl border-b border-ink/10 px-8 py-5">
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Activity className="text-cedar w-6 h-6" />
            <p className="font-mono text-sm font-bold tracking-tighter">ZEN_SELECT // ANALYSIS_CORE</p>
            <div className="w-px h-5 bg-ink/20 hidden md:block"></div>
            <p className="font-mono text-xs opacity-50 hidden md:block tracking-widest">ACCESS_LEVEL: EXPERT_ONLY // v2026.03.08</p>
          </div>
          <nav className="flex gap-8 font-mono text-xs font-bold uppercase tracking-widest opacity-70">
             <a href="#process" className="hover:text-cedar transition-colors hidden lg:block">00. Flow</a>
             <a href="#discovery" className="hover:text-cedar transition-colors">01. Research</a>
             <a href="#definition" className="hover:text-cedar transition-colors">02. Personas</a>
             <a href="#architecture" className="hover:text-cedar transition-colors">03. IA</a>
             <a href="#outcome" className="hover:text-cedar transition-colors">04. Metrics</a>
             <a href="/prd" className="hover:opacity-100 transition-all text-cedar border border-cedar/40 px-3 py-1 opacity-100">PRD →</a>
          </nav>
        </div>
      </header>

      <main className="relative z-10 max-w-screen-2xl mx-auto px-8 lg:px-20 pt-48">
        
        {/* 00 Abstract */}
        <motion.section 
          variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="mb-32"
        >
          <div className="grid lg:grid-cols-12 gap-24 items-end">
            <motion.div variants={itemVariants} className="lg:col-span-8">
              <div className="font-mono text-sm text-cedar font-bold mb-6 flex items-center gap-3 tracking-widest">
                <span className="w-3 h-3 bg-cedar rounded-full animate-pulse"></span>
                PROJECT_SUMMARY_v1.0
              </div>
              <h1 className="font-display text-7xl lg:text-[10rem] font-light leading-[0.8] mb-12 tracking-tight">Artisan<br/>Logic.</h1>
              <p className="text-2xl lg:text-3xl font-sans-cn leading-snug text-ink/80 max-w-3xl border-l-4 border-cedar pl-8 py-4 bg-white/40 shadow-sm backdrop-blur-sm">
                透過數據與資訊架構轉化感性——<br/>
                <span className="text-cedar font-medium">將「間 (Ma)」之哲學編碼為具備高商業轉換效率的數位選品空間。</span>
              </p>
              <div className="flex flex-wrap gap-x-16 gap-y-10 mt-16">
                  <div><p className="font-mono opacity-40 mb-3 text-[10px] flex items-center gap-2"><Leaf className="w-3 h-3" /> Primary DNA</p><p className="text-2xl font-bold font-sans-cn">靜 · 選 · 留白 · 永續</p></div>
                  <div className="v-line h-12 hidden sm:block"></div>
                  <div><p className="font-mono opacity-40 mb-3 text-[10px] flex items-center gap-2"><Network className="w-3 h-3" /> Core Methodology</p><p className="text-2xl font-bold italic font-display">Story-Driven UX Optimization</p></div>
                  <div className="v-line h-12 hidden lg:block"></div>
                  <div><p className="font-mono opacity-40 mb-3 text-[10px] flex items-center gap-2"><Target className="w-3 h-3" /> Market Fit</p><p className="text-2xl font-bold italic font-display">Urban New Middle Class</p></div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-4">
              <div className="bg-ink p-10 text-canvas shadow-2xl relative overflow-hidden group">
                <Fingerprint className="absolute top-4 right-4 w-28 h-28 opacity-5 group-hover:scale-110 transition-transform duration-700" />
                <p className="font-mono text-xs text-cedar mb-8 opacity-70 tracking-[0.2em] font-bold flex items-center gap-2"><Layers className="w-4 h-4" /> Design DNA Integration</p>
                <Accordion className="w-full">
                  <AccordionItem value="dna-1" className="border-white/10">
                    <AccordionTrigger className="hover:text-cedar hover:no-underline font-sans-cn text-lg py-4 font-semibold flex gap-3 justify-start"><Compass className="w-5 h-5 text-cedar/70 shrink-0"/> 01. 台灣本土敘事 (Vernacular)</AccordionTrigger>
                    <AccordionContent className="text-sm opacity-80 font-sans-cn leading-relaxed font-light pb-6 pl-8">
                      針對「職人崇拜」整合霧靄綠 (#5A8A5A) 與檜木棕 (#8B7355)，強調在地溯源。打破進口品牌缺乏土地連結感的痛點。
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="dna-2" className="border-white/10">
                    <AccordionTrigger className="hover:text-cedar hover:no-underline font-sans-cn text-lg py-4 font-semibold flex gap-3 justify-start"><LayoutGrid className="w-5 h-5 text-cedar/70 shrink-0"/> 02. 北歐功能架構 (Scandi)</AccordionTrigger>
                    <AccordionContent className="text-sm opacity-80 font-sans-cn leading-relaxed font-light pb-6 pl-8">
                      運用 Grid-based Layout 降低高單價資訊的認知負荷。無襯線與等寬字型的交替使用，建立專家級的信任感。
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="dna-3" className="border-white/10 border-b-0">
                    <AccordionTrigger className="hover:text-cedar hover:no-underline font-sans-cn text-lg py-4 font-semibold flex gap-3 justify-start"><Wind className="w-5 h-5 text-cedar/70 shrink-0"/> 03. 東亞禪意空間 (Ma)</AccordionTrigger>
                    <AccordionContent className="text-sm opacity-80 font-sans-cn leading-relaxed font-light pb-6 pl-8">
                      負空間哲學。利用大量 Whitespace 與不對稱美學，營造數位空間的呼吸感，減少用戶的視覺壓迫。
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Master Flow: 12-Week Gantt Chart */}
        <motion.section id="process" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-48 border-y border-ink/10 py-24 bg-white/30">
          <div className="mb-16 flex items-center gap-6 max-w-screen-xl mx-auto">
            <span className="font-mono text-cedar text-sm font-bold tracking-widest">Master Flow // 12-Week Sprint Architecture</span>
            <div className="flex-1 h-px bg-ink/10"></div>
          </div>
          
          <div className="max-w-screen-xl mx-auto grid md:grid-cols-5 gap-6 relative">
            <div className="absolute top-8 left-0 w-full h-px bg-ink/10 hidden md:block"></div>
            
            {[
              { id: "W1-W3", title: "研究階段", sub: "Discover & Analysis", tasks: ["競品分析 & 市場趨勢", "用戶訪談 & 問卷 (N=50+)", "親和圖整理 (Affinity Map)"] },
              { id: "W4-W5", title: "定義階段", sub: "Define & Strategy", tasks: ["Persona 人物誌建立", "使用者旅程 (Journey Map)", "HMW 核心機會定義"] },
              { id: "W6-W8", title: "設計階段", sub: "Develop & Prototyping", tasks: ["資訊架構 (IA) & Sitemap", "低保真線框圖 (Wireframes)", "設計系統建立 (Design System)"] },
              { id: "W9-W10", title: "驗證階段", sub: "Validation & Iteration", tasks: ["高保真原型 (Hi-Fi)", "可用性測試 (Usability Testing)", "迭代修改 (Iteration)"] },
              { id: "W11-W12", title: "交付與輸出", sub: "Deliver & Portfolio", tasks: ["開發交付規格 (Dev Handoff)", "Case Study 撰寫", "Portfolio 上架發佈"], highlight: true },
            ].map((phase) => (
              <motion.div key={phase.id} variants={itemVariants} className="relative group">
                <div className={`h-full p-6 border transition-all ${phase.highlight ? 'bg-ink text-canvas border-ink shadow-lg' : 'bg-white border-ink/10 hover:border-cedar/50'} relative z-10`}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`font-mono text-[10px] font-bold px-2 py-1 ${phase.highlight ? 'bg-cedar text-white' : 'bg-ink/5 text-ink/60'}`}>{phase.id}</span>
                  </div>
                  <h4 className={`font-sans-cn font-bold text-lg mb-1 ${phase.highlight ? 'text-white' : 'text-ink'}`}>{phase.title}</h4>
                  <p className={`font-mono text-[10px] opacity-50 tracking-wider uppercase mb-6 ${phase.highlight ? 'text-white' : 'text-ink'}`}>{phase.sub}</p>
                  
                  <div className={`space-y-3 pt-4 border-t ${phase.highlight ? 'border-white/10' : 'border-ink/5'}`}>
                    {phase.tasks.map((task, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <GitCommitHorizontal className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${phase.highlight ? 'text-cedar' : 'text-cedar opacity-60'}`} />
                        <p className={`text-xs font-sans-cn leading-tight ${phase.highlight ? 'opacity-80 text-white' : 'opacity-70 text-ink'}`}>{task}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 01 Discovery & Scientific Research */}
        <motion.section id="discovery" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-56">
          <div className="mb-16 flex items-center gap-6">
            <span className="font-mono text-cedar text-sm font-bold tracking-widest flex items-center gap-2"><Search className="w-4 h-4"/> Section 01 // 科學化使用者調研 (Scientific Research)</span>
            <div className="flex-1 h-px bg-ink/10"></div>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            {/* Research Protocol Document */}
            <motion.div variants={itemVariants} className="lg:col-span-7 bg-white/40 border border-ink/5 p-10 flex flex-col shadow-sm">
               <h4 className="font-mono text-cedar text-base font-bold mb-6 tracking-widest flex items-center gap-2">
                 <FileText className="w-5 h-5"/> Research Protocol Document
               </h4>
               <p className="text-sm font-sans-cn font-light opacity-80 mb-8 leading-relaxed">
                 為確保調研具備統計顯著性與深度，我們設定了嚴格的篩選條件與 45 分鐘的半結構化訪談大綱。
               </p>
               
               <div className="grid md:grid-cols-2 gap-8 font-sans-cn">
                 <div className="bg-canvas p-6 border border-ink/10 relative overflow-hidden">
                   <Users className="absolute -right-4 -bottom-4 w-24 h-24 opacity-5 text-ink" />
                   <p className="font-mono text-xs text-ink/40 mb-4 font-bold tracking-widest">受訪者篩選條件 (Screening)</p>
                   <ul className="text-xs space-y-3 opacity-80 leading-relaxed font-medium relative z-10">
                     <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-cedar shrink-0"/> 25–42 歲、居住台灣都市</li>
                     <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-cedar shrink-0"/> 過去 6 個月有線上購買居家品經驗</li>
                     <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-cedar shrink-0"/> 月收入 40,000+ TWD</li>
                     <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-cedar shrink-0"/> 習慣使用 IG/Pinterest 尋找靈感</li>
                   </ul>
                 </div>
                 
                 <div className="bg-ink text-canvas p-6 shadow-xl relative group overflow-hidden">
                   <MessageSquare className="absolute -right-4 -bottom-4 w-24 h-24 opacity-5 text-white" />
                   <p className="font-mono text-xs text-cedar mb-4 font-bold tracking-widest">45-Min Interview Guide</p>
                   <div className="space-y-4 relative z-10">
                     <div className="border-l-2 border-cedar pl-3">
                       <p className="text-[10px] font-mono text-cedar mb-1">P1: 開場與行為 (20m)</p>
                       <p className="text-xs italic leading-tight opacity-80">「描述目前住的空間... 上次購買是在什麼情境？」</p>
                     </div>
                     <div className="border-l-2 border-cedar pl-3">
                       <p className="text-[10px] font-mono text-cedar mb-1">P2: 痛點挖掘 (15m)</p>
                       <p className="text-xs italic leading-tight opacity-80">「網路買居家品超難的經歷？你怎麼判斷品質？」</p>
                     </div>
                     <div className="border-l-2 border-cedar pl-3">
                       <p className="text-[10px] font-mono text-cedar mb-1">P3: 理想情境 (10m)</p>
                       <p className="text-xs italic leading-tight opacity-80">「完全懂你品味的選品助理應如何運作？」</p>
                     </div>
                   </div>
                 </div>
               </div>
            </motion.div>

            {/* Data Chart */}
            <motion.div variants={itemVariants} className="lg:col-span-5 bg-white border border-ink/5 p-10 flex flex-col shadow-sm">
              <p className="font-mono text-xs opacity-40 mb-8 tracking-widest uppercase font-bold flex items-center gap-2"><PieChart className="w-4 h-4"/> Quantitative Validation</p>
              <div className="flex-1 relative">
                 <AnimatedLineChart />
              </div>
              <div className="grid grid-cols-2 gap-8 border-t border-ink/5 pt-8 mt-4">
                 <div>
                    <p className="text-6xl font-display text-cedar">82%</p>
                    <p className="font-sans-cn font-bold text-sm mt-2">永續材質優先</p>
                    <p className="font-mono text-[9px] opacity-40 uppercase mt-1">Material Over Brand</p>
                 </div>
                 <div>
                    <p className="text-6xl font-display text-cedar">65%</p>
                    <p className="font-sans-cn font-bold text-sm mt-2">視覺故事驅動</p>
                    <p className="font-mono text-[9px] opacity-40 uppercase mt-1">Social Discovery</p>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* ── Market Trends Chart ── */}
          <motion.div variants={itemVariants} className="mb-16 bg-white/30 border border-ink/10 p-10 backdrop-blur-md">
            <div className="mb-6 flex items-center gap-4">
              <TrendingUp className="w-5 h-5 text-cedar" />
              <span className="font-mono text-sm font-bold tracking-widest text-cedar">市場趨勢數據 Market Trends Data</span>
              <div className="flex-1 h-px bg-ink/10" />
              <span className="font-mono text-[10px] text-ink/30 uppercase tracking-widest">W4–W5 // Discover Phase</span>
            </div>
            <MarketTrendsChart />
          </motion.div>

          {/* ── Survey Results Chart ── */}
          <motion.div variants={itemVariants} className="mb-16 bg-white/30 border border-ink/10 p-10 backdrop-blur-md">
            <div className="mb-6 flex items-center gap-4">
              <Users className="w-5 h-5 text-cedar" />
              <span className="font-mono text-sm font-bold tracking-widest text-cedar">用戶訪談 & 問卷結果 Survey Results</span>
              <div className="flex-1 h-px bg-ink/10" />
              <span className="font-mono text-[10px] text-ink/30 uppercase tracking-widest">N=50+ // Quantitative</span>
            </div>
            <SurveyResultsChart />
          </motion.div>

          {/* ── Affinity Map ── */}
          <motion.div variants={itemVariants} className="mb-16 bg-white/30 border border-ink/10 p-10 backdrop-blur-md">
            <AffinityMap />
          </motion.div>

          {/* Expanded Interactive Matrix */}
          <motion.div variants={itemVariants} className="bg-white/30 border border-ink/10 backdrop-blur-md">
            <div className="bg-ink p-6 flex justify-between px-10 text-white items-center">
              <span className="font-mono text-sm font-bold tracking-widest flex items-center gap-3">
                 <Network className="w-5 h-5 text-cedar" />
                 Competitor Intelligence Matrix v3.0
              </span>
              <span className="font-mono text-[10px] text-cedar animate-pulse uppercase tracking-widest">Expand for strategic insight</span>
            </div>
            <Accordion className="w-full">
              {[
                { name: "MUJI", pos: "Global Minimalist", flaw: "視覺過於冷靜理智，缺乏情感共鳴與職人深度故事。產品淪為單純的日用品。", opp: "導入高情感份量的生活情境攝影與職人訪談，將購買提升為生活品味認同與情感投資。" },
                { name: "HAY", pos: "Nordic Designer", flaw: "在地文化連結感不足，北歐價格門檻帶來強烈的階級距離感。", opp: "強化台灣本土工藝（如鶯歌陶瓷）融合北歐極簡框架，建立專屬台灣新中產階級的高端美學。" },
                { name: "Bloomingville", pos: "Danish Premium", flaw: "情境圖極美，但電商購買路徑極度不流暢，跨境運費門檻與語言造成高阻力。", opp: "吸取其情境攝影優勢，但提供極致流暢的本地化『一鍵結帳』與『空間選購』體驗。" },
                { name: "Pinkoi", pos: "Designer Market", flaw: "平台視覺過於繁雜，各品牌品質參差不齊，難以建立統一的高端信任感。", opp: "採取『嚴格策展 (Curated Edit)』模式，以極簡介面統一個別設計師的視覺語彙，降低決策疲勞。" },
                { name: "Shopee Home", pos: "Mass Market", flaw: "絕對的價格戰導向，充滿促銷標籤與彈出視窗，毫無美感與信任基礎。", opp: "極致的『反向操作』：移除所有彈出廣告與促銷標籤，用大面積留白建立『安心感』與『高級感』。" }
              ].map((comp, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-ink/5 px-10 bg-white/50 hover:bg-white transition-colors">
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex w-full text-left font-sans-cn pr-8 items-center gap-8">
                      <div className="w-[15%] font-bold text-xl">{comp.name}</div>
                      <div className="w-[20%]"><span className="font-mono text-[10px] font-bold bg-ink/5 px-3 py-1.5 rounded-full text-ink/70 tracking-widest">{comp.pos}</span></div>
                      <div className="w-[65%] text-sm font-light opacity-80 truncate">痛點: {comp.flaw}</div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-canvas border-l-4 border-cedar ml-4 pl-10 py-8 my-6 font-sans-cn">
                    <p className="font-mono text-xs text-cedar mb-3 tracking-widest font-bold flex items-center gap-2">
                       <Eye className="w-4 h-4" /> ZenSelect Strategic Opportunity
                    </p>
                    <p className="text-xl italic text-ink leading-relaxed font-medium">「{comp.opp}」</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* ── Competitor Matrix Visual ── */}
          <motion.div variants={itemVariants} className="mt-10 bg-white/30 border border-ink/10 p-10 backdrop-blur-md">
            <div className="mb-6 flex items-center gap-4">
              <PieChart className="w-5 h-5 text-cedar" />
              <span className="font-mono text-sm font-bold tracking-widest text-cedar">競品量化矩陣 Competitive Scoring Matrix</span>
              <div className="flex-1 h-px bg-ink/10" />
            </div>
            <CompetitorMatrix />
          </motion.div>
        </motion.section>

        {/* 02 Definition & Deep Personas */}
        <motion.section id="definition" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-56">
          <div className="mb-16 flex items-center gap-6">
            <span className="font-mono text-cedar text-sm font-bold tracking-widest">Section 02 // 目標用戶定義與痛點挖掘 (Personas)</span>
            <div className="flex-1 h-px bg-ink/10"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
             {/* Persona 1 */}
             <motion.div variants={itemVariants} className="bg-white/60 border border-ink/5 p-8 flex flex-col hover:border-cedar/30 hover:shadow-xl transition-all">
                <div className="aspect-[4/5] bg-mist mb-8 grayscale hover:grayscale-0 transition-all duration-700" style={{backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                <h4 className="font-sans-cn font-bold text-3xl text-cedar mb-2">Sofia, 32</h4>
                <p className="font-mono text-xs opacity-50 mb-6 tracking-widest uppercase font-bold">Urban Minimalist / 品牌行銷 Manager</p>
                <div className="space-y-5 text-sm font-sans-cn font-light opacity-80 leading-relaxed border-t border-ink/5 pt-6">
                   <p><strong className="opacity-100 font-semibold block mb-1 text-ink">居住環境：</strong>台北大安區 15坪公寓。</p>
                   <p><strong className="opacity-100 font-semibold block mb-1 text-ink">核心痛點：</strong>選品太多不知如何搭配風格。數位圖片無法傳達材質觸感，怕買到實品不如預期的廉價品。</p>
                   <p><strong className="opacity-100 font-semibold block mb-1 text-ink">行為目標：</strong>在忙碌生活中建立療癒空間。常透過 IG / Pinterest 購物。</p>
                </div>
             </motion.div>
             {/* Persona 2 */}
             <motion.div variants={itemVariants} className="bg-white/60 border border-ink/5 p-8 flex flex-col hover:border-cedar/30 hover:shadow-xl transition-all">
                <div className="aspect-[4/5] bg-mist mb-8 grayscale hover:grayscale-0 transition-all duration-700" style={{backgroundImage: "url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                <h4 className="font-sans-cn font-bold text-3xl text-cedar mb-2">Danny, 28</h4>
                <p className="font-mono text-xs opacity-50 mb-6 tracking-widest uppercase font-bold">New Homeowner / 軟體工程師</p>
                <div className="space-y-5 text-sm font-sans-cn font-light opacity-80 leading-relaxed border-t border-ink/5 pt-6">
                   <p><strong className="opacity-100 font-semibold block mb-1 text-ink">居住環境：</strong>新北新裝潢自有房 30坪。</p>
                   <p><strong className="opacity-100 font-semibold block mb-1 text-ink">核心痛點：</strong>預算有限，對美感搭配缺乏信心，怕買錯風格破壞客廳視覺。</p>
                   <p><strong className="opacity-100 font-semibold block mb-1 text-ink">行為目標：</strong>高度依賴情境示範圖，以合理預算打造有品味的家。常看 YouTube 佈置影片比價。</p>
                </div>
             </motion.div>
             {/* Persona 3 */}
             <motion.div variants={itemVariants} className="bg-white/60 border border-ink/5 p-8 flex flex-col hover:border-cedar/30 hover:shadow-xl transition-all border-b-8 border-b-cedar">
                <div className="aspect-[4/5] bg-mist mb-8 grayscale hover:grayscale-0 transition-all duration-700" style={{backgroundImage: "url('https://images.unsplash.com/photo-1449247709967-d4461a6a6103?q=80&w=600&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                <h4 className="font-sans-cn font-bold text-3xl text-cedar mb-2">Mei, 38</h4>
                <p className="font-mono text-xs opacity-50 mb-6 tracking-widest uppercase font-bold">Eco-Activist / 瑜珈老師</p>
                <div className="space-y-5 text-sm font-sans-cn font-light opacity-80 leading-relaxed border-t border-ink/5 pt-6">
                   <p><strong className="opacity-100 font-semibold block mb-1 text-ink">居住環境：</strong>台中老屋改造 / 空間植物控。</p>
                   <p><strong className="opacity-100 font-semibold block mb-1 text-ink">核心痛點：</strong>市場上難尋美感與環保透明度並重的職人平台，資訊過於碎片化。</p>
                   <p><strong className="opacity-100 font-semibold block mb-1 text-ink">動機關鍵：</strong>「產品溯源故事」與「減塑消費」是推動她結帳的絕對關鍵。</p>
                </div>
             </motion.div>
          </div>

          {/* ── Persona Comparison Matrix ── */}
          <motion.div variants={itemVariants} className="mb-16 bg-white/30 border border-ink/10 p-10 backdrop-blur-md">
            <div className="mb-6 flex items-center gap-4">
              <Users className="w-5 h-5 text-cedar" />
              <span className="font-mono text-sm font-bold tracking-widest text-cedar">Persona 屬性比較矩陣 Persona Comparison Matrix</span>
              <div className="flex-1 h-px bg-ink/10" />
              <span className="font-mono text-[10px] text-ink/30 uppercase tracking-widest">W6–W8 // Define Phase</span>
            </div>
            <PersonaMatrix />
          </motion.div>

          {/* ── Emotional Journey Chart ── */}
          <motion.div variants={itemVariants} className="mb-16 bg-white/30 border border-ink/10 p-10 backdrop-blur-md">
            <EmotionalJourneyChart />
          </motion.div>

          {/* ── HMW Matrix ── */}
          <motion.div variants={itemVariants} className="mb-16 bg-white/30 border border-ink/10 p-10 backdrop-blur-md">
            <HMWMatrix />
          </motion.div>

          {/* HMW Proposition */}
          <motion.div variants={itemVariants} className="bg-white/80 p-24 text-center border border-ink/5 shadow-sm">
             <p className="font-mono text-sm text-cedar mb-10 tracking-[0.4em] font-bold">CORE HYPOTHESIS // HOW MIGHT WE</p>
             <h3 className="text-4xl lg:text-5xl font-sans-cn font-medium leading-relaxed max-w-5xl mx-auto">
               我們如何透過「數位觸點」與「敘事引導」建立空間的呼吸感，在降低決策焦慮的同時，深度傳遞台灣職人工藝的<span className="text-cedar border-b-4 border-cedar pb-2">情感溢價</span>？
             </h3>
          </motion.div>
        </motion.section>

        {/* 03 Architecture & IA */}
        <motion.section id="architecture" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-56">
          <div className="mb-16 flex items-center gap-6">
            <span className="font-mono text-cedar text-sm font-bold tracking-widest flex items-center gap-2"><MapIcon className="w-5 h-5"/> Section 03 // 資訊架構與旅程流 (Architecture & Flow)</span>
            <div className="flex-1 h-px bg-ink/10"></div>
          </div>

          <div className="grid lg:grid-cols-1 gap-16">
             <motion.div variants={itemVariants} className="bg-white/50 border border-ink/5 p-12 lg:p-20 shadow-sm">
                <div className="flex flex-col lg:flex-row justify-between items-start mb-12 gap-8">
                  <div className="max-w-4xl">
                    <h4 className="text-4xl font-sans-cn font-bold mb-6">雙軸心導覽策略 (Dual-Axis Navigation)</h4>
                    <p className="text-lg font-sans-cn font-light opacity-80 leading-relaxed">
                       根據卡片分類法 (Card Sorting) 的洞察，多數用戶在購買家具時是以「空間搭配」為思考核心。因此我們捨棄傳統大賣場的「商品海」分類，引入水平軸<strong className="font-medium text-ink">「空間 Shop by Room」</strong>以滿足場景功能需求，垂直軸<strong className="font-medium text-ink">「故事 Artisan Stories」</strong>建立高單價信任感與品牌認同。
                    </p>
                  </div>
                  <span className="font-mono text-xs opacity-60 tracking-widest bg-ink/5 px-6 py-3 rounded-full font-bold whitespace-nowrap flex items-center gap-2"><Network className="w-4 h-4"/> IA Blueprint v2.0</span>
                </div>
                
                <div className="bg-white border border-ink/10 rounded-sm p-10 pt-16 relative shadow-inner overflow-x-auto">
                   <IACoreMap />
                </div>
             </motion.div>

             <motion.div variants={itemVariants} className="bg-white/50 border border-ink/5 p-12 lg:p-20 shadow-sm">
                <p className="font-mono text-sm opacity-40 mb-12 tracking-widest uppercase font-bold flex items-center gap-2"><TrendingUp className="w-4 h-4"/> Emotional User Journey Swimlane</p>
                <EmotionSwimlane />
                <div className="mt-20 border-t border-ink/10 pt-12 grid grid-cols-4 gap-10 font-sans-cn text-base font-light">
                   <div>
                     <strong className="block mb-4 font-bold text-lg text-cedar">1. 靈感觸及</strong>
                     運用極簡視覺留白與高質感攝影，降低廣告侵略感，建立平靜、高級的第一印象。
                   </div>
                   <div>
                     <strong className="block mb-4 font-bold text-lg text-cedar">2. 深度評估</strong>
                     提供高解析度材質特寫 (Micro-textures) 與職人影音訪談，建立關鍵的「數位觸感」。
                   </div>
                   <div>
                     <strong className="block mb-4 font-bold text-lg text-cedar">3. 有意識決策</strong>
                     將「永續標籤」與「在地材質數據」前置化於商品圖旁，賦予高單價合理的價值支撐。
                   </div>
                   <div>
                     <strong className="block mb-4 font-bold text-lg text-cedar">4. 無摩擦結帳</strong>
                     設計一鍵式漸進表單 (Progressive Disclosure Form)，大幅減少輸入阻力，降低購物車放棄率。
                   </div>
                </div>
             </motion.div>
          </div>
        </motion.section>

        {/* ── Design System Matrix ── */}
        <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-24 -mt-24">
          <motion.div variants={itemVariants} className="bg-white/30 border border-ink/10 p-10 backdrop-blur-md">
            <div className="mb-6 flex items-center gap-4">
              <Layers className="w-5 h-5 text-cedar" />
              <span className="font-mono text-sm font-bold tracking-widest text-cedar">設計系統覆蓋率矩陣 Design System Coverage Matrix</span>
              <div className="flex-1 h-px bg-ink/10" />
              <span className="font-mono text-[10px] text-ink/30 uppercase tracking-widest">W9–W10 // Design Phase</span>
            </div>
            <DesignSystemMatrix />
          </motion.div>
        </motion.section>

        {/* 04 Outcomes / KPI */}
        <motion.section id="outcome" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="mb-16 flex items-center gap-6">
            <span className="font-mono text-cedar text-sm font-bold tracking-widest flex items-center gap-2"><Activity className="w-5 h-5"/> Section 04 // 實驗驗證與商業成效 (Metrics & KPIs)</span>
            <div className="flex-1 h-px bg-ink/10"></div>
          </div>

          <div className="grid lg:grid-cols-1 gap-12 mb-16">
            <motion.div variants={itemVariants} className="bg-ink text-canvas p-12 border border-ink/5 flex flex-col md:flex-row justify-between items-center gap-10 shadow-2xl">
               <div className="max-w-2xl">
                 <p className="font-mono text-xs text-cedar font-bold tracking-widest mb-4 flex items-center gap-3"><Activity className="w-5 h-5"/> A/B Testing Insight</p>
                 <h4 className="text-2xl font-sans-cn font-medium leading-relaxed mb-4">結帳流程優化：單頁手風琴 (Accordion) 漸進展開</h4>
                 <p className="text-base font-sans-cn font-light opacity-80 leading-relaxed">
                   在 Checkout 流程中，透過眼動儀 (Eye-tracking) 熱區模擬發現，傳統多頁跳轉會打斷用戶的「Z-Pattern」閱讀流。測試了單頁設計後，實驗數據顯示跳出率降低了 <strong>22%</strong>。
                 </p>
               </div>
               <div className="bg-canvas/10 p-8 text-center min-w-[200px]">
                 <p className="text-6xl font-display italic text-cedar mb-2">-22%</p>
                 <p className="font-mono text-[10px] uppercase tracking-widest opacity-60">Cart Abandonment</p>
               </div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* UX KPI */}
            <motion.div variants={itemVariants} className="bg-white/60 p-10 border border-ink/5 shadow-sm">
               <h4 className="font-mono text-sm text-cedar mb-10 font-bold tracking-widest flex items-center gap-2"><MousePointerClick className="w-5 h-5"/> UX 指標 (Usability)</h4>
               <div className="space-y-10">
                 <div>
                   <div className="flex justify-between font-mono text-xs mb-3"><span>Task Completion Rate</span><span className="text-cedar font-bold">85%</span></div>
                   <div className="h-2 bg-ink/10 rounded-full"><motion.div className="h-full bg-cedar rounded-full" initial={{width:0}} whileInView={{width:'85%'}} viewport={{once:true}} transition={{duration:1}}/></div>
                   <p className="text-[10px] mono opacity-40 mt-2">TARGET: &gt;85%</p>
                 </div>
                 <div>
                   <div className="flex justify-between font-mono text-xs mb-3"><span>SUS Score</span><span className="text-cedar font-bold">78/100</span></div>
                   <div className="h-2 bg-ink/10 rounded-full"><motion.div className="h-full bg-cedar rounded-full" initial={{width:0}} whileInView={{width:'78%'}} viewport={{once:true}} transition={{duration:1, delay:0.2}}/></div>
                   <p className="text-[10px] mono opacity-40 mt-2">TARGET: &gt;75</p>
                 </div>
                 <div>
                   <div className="flex justify-between font-mono text-xs mb-3"><span>Avg. Time to Item</span><span className="text-cedar font-bold">1.4m</span></div>
                   <p className="text-sm font-sans-cn font-medium">預估 3.2 分鐘 → 實際 1.4 分鐘 <span className="text-sage">(~53% ↓)</span></p>
                 </div>
               </div>
            </motion.div>

            {/* BIZ KPI */}
            <motion.div variants={itemVariants} className="bg-white/60 p-10 border border-ink/5 shadow-sm">
               <h4 className="font-mono text-sm text-cedar mb-10 font-bold tracking-widest flex items-center gap-2"><TrendingUp className="w-5 h-5"/> 商業指標 (Business)</h4>
               <div className="space-y-10">
                 <div>
                   <div className="flex justify-between font-mono text-xs mb-3"><span>Add-to-Cart Rate</span><span className="text-cedar font-bold">8.5%</span></div>
                   <div className="h-2 bg-ink/10 rounded-full"><motion.div className="h-full bg-cedar rounded-full" initial={{width:0}} whileInView={{width:'85%'}} viewport={{once:true}} transition={{duration:1}}/></div>
                   <p className="text-[10px] mono opacity-40 mt-2">TARGET: &gt;8%</p>
                 </div>
                 <div>
                   <div className="flex justify-between font-mono text-xs mb-3"><span>Return Visit Rate</span><span className="text-cedar font-bold">32%</span></div>
                   <div className="h-2 bg-ink/10 rounded-full"><motion.div className="h-full bg-cedar rounded-full" initial={{width:0}} whileInView={{width:'32%'}} viewport={{once:true}} transition={{duration:1, delay:0.2}}/></div>
                   <p className="text-[10px] mono opacity-40 mt-2">TARGET: &gt;30%</p>
                 </div>
                 <div>
                   <div className="flex justify-between font-mono text-xs mb-3"><span>Checkout Completion</span><span className="text-cedar font-bold">68%</span></div>
                   <p className="text-sm font-sans-cn font-medium">預估 42% → 實際 68% <span className="text-sage">(~62% ↑)</span></p>
                 </div>
               </div>
            </motion.div>

            {/* BRAND KPI */}
            <motion.div variants={itemVariants} className="bg-white/60 p-10 border border-ink/5 shadow-sm">
               <h4 className="font-mono text-sm text-cedar mb-10 font-bold tracking-widest flex items-center gap-2"><HeartHandshake className="w-5 h-5"/> 品牌指標 (Brand)</h4>
               <div className="space-y-10">
                 <div>
                   <div className="flex justify-between font-mono text-xs mb-3"><span>5s Brand Recognition</span><span className="text-cedar font-bold">72%</span></div>
                   <div className="h-2 bg-ink/10 rounded-full"><motion.div className="h-full bg-cedar rounded-full" initial={{width:0}} whileInView={{width:'72%'}} viewport={{once:true}} transition={{duration:1}}/></div>
                   <p className="text-[10px] mono opacity-40 mt-2">TARGET: &gt;70% CORRECT</p>
                 </div>
                 <div>
                   <div className="flex justify-between font-mono text-xs mb-3"><span>Trust/Calm Association</span><span className="text-cedar font-bold">81%</span></div>
                   <div className="h-2 bg-ink/10 rounded-full"><motion.div className="h-full bg-cedar rounded-full" initial={{width:0}} whileInView={{width:'81%'}} viewport={{once:true}} transition={{duration:1, delay:0.2}}/></div>
                   <p className="text-[10px] mono opacity-40 mt-2">TARGET: &gt;75%</p>
                 </div>
               </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ── SUS Gauge + Usability Matrix + Iteration Chart ── */}
        <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-16 mb-32">
          <div className="mb-10 flex items-center gap-4">
            <span className="font-mono text-cedar text-sm font-bold tracking-widest">驗證階段數據儀表板 Validation Dashboard</span>
            <div className="flex-1 h-px bg-ink/10" />
            <span className="font-mono text-[10px] text-ink/30 uppercase tracking-widest">W9–W10 // Validation & Iteration</span>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 mb-16">
            <motion.div variants={itemVariants} className="bg-white/60 border border-ink/5 p-10 shadow-sm">
              <p className="font-mono text-xs text-cedar mb-6 font-bold tracking-widest flex items-center gap-2">
                <Activity className="w-4 h-4" /> SUS Score Gauge
              </p>
              <SUSGauge score={78} />
            </motion.div>
            <motion.div variants={itemVariants} className="lg:col-span-2 bg-white/60 border border-ink/5 p-10 shadow-sm">
              <p className="font-mono text-xs text-cedar mb-6 font-bold tracking-widest flex items-center gap-2">
                <TrendingUp className="w-4 h-4" /> 迭代改善追蹤 Iteration Chart
              </p>
              <IterationChart />
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="bg-white/30 border border-ink/10 p-10 backdrop-blur-md">
            <div className="mb-6 flex items-center gap-4">
              <CheckSquare className="w-5 h-5 text-cedar" />
              <span className="font-mono text-sm font-bold tracking-widest text-cedar">可用性測試完整結果矩陣 Usability Test Results Matrix</span>
              <div className="flex-1 h-px bg-ink/10" />
            </div>
            <UsabilityMatrix />
          </motion.div>
        </motion.section>

        {/* 05 Portfolio Strategy (Meta) */}
        <motion.section id="portfolio" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-48 pt-24 border-t border-ink/10">
          <div className="mb-16 flex items-center gap-6">
            <span className="font-mono text-cedar text-sm font-bold tracking-widest flex items-center gap-2"><CheckSquare className="w-5 h-5"/> Section 05 // 作品集呈現策略 (Portfolio Output Strategy)</span>
            <div className="flex-1 h-px bg-ink/10"></div>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-16 items-start">
             <motion.div variants={itemVariants} className="lg:col-span-5">
                <div className="p-12 bg-white/50 border border-ink/5 shadow-sm">
                  <h4 className="text-2xl font-bold font-sans-cn mb-6 flex items-center gap-3"><Layers className="w-6 h-6 text-cedar"/> UI Sandwich 結構</h4>
                  <p className="text-base font-light opacity-80 leading-relaxed mb-10">
                    基於 NotebookLM UX Guide 2026，本報告採用「三明治結構」：首尾以高保真視覺模型 (High-Fidelity Visuals) 建立第一眼印象，中間夾層 (Middle Layer) 則專注於展示嚴謹的研究與推導過程 (Research & Process)。
                  </p>
                  <div className="space-y-4 font-mono text-xs uppercase tracking-widest font-bold">
                    <div className="p-5 bg-ink text-canvas text-center flex items-center justify-center gap-2"><Eye className="w-4 h-4"/> Top: Visual Hook (Hero)</div>
                    <div className="p-10 bg-canvas border border-ink/10 text-center text-ink/50 flex flex-col items-center gap-3"><Network className="w-5 h-5"/> Middle: Research & Architecture</div>
                    <div className="p-5 bg-ink text-canvas text-center flex items-center justify-center gap-2"><TrendingUp className="w-4 h-4"/> Bottom: Final Prototype / Impact</div>
                  </div>
                </div>
             </motion.div>
             <motion.div variants={itemVariants} className="lg:col-span-7">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="p-10 border border-ink/10 bg-white/30 hover:border-cedar/30 transition-colors shadow-sm">
                     <p className="font-mono text-sm text-cedar mb-6 font-bold tracking-widest flex items-center gap-2"><CheckCircle2 className="w-4 h-4"/> 必備元素 Checklist</p>
                     <ul className="text-sm font-sans-cn font-medium space-y-5 opacity-80">
                       <li className="flex items-start gap-3"><span className="text-cedar font-bold">✓</span> Tag Cloud TL;DR 供快速掃描</li>
                       <li className="flex items-start gap-3"><span className="text-cedar font-bold">✓</span> 可量化成果 (62% Conversion Lift)</li>
                       <li className="flex items-start gap-3"><span className="text-cedar font-bold">✓</span> 設計決策說明 (IA 雙軸心策略)</li>
                       <li className="flex items-start gap-3"><span className="text-cedar font-bold">✓</span> 可及性標註 (WCAG AA 規範)</li>
                       <li className="flex items-start gap-3"><span className="text-cedar font-bold">✓</span> Clickable Prototype 連結</li>
                     </ul>
                  </div>
                  <div className="p-10 border border-ink/10 bg-white/30 hover:border-cedar/30 transition-colors flex flex-col justify-between shadow-sm">
                     <div>
                       <p className="font-mono text-sm text-cedar mb-6 font-bold tracking-widest flex items-center gap-2"><Wrench className="w-4 h-4"/> Toolstack Integration</p>
                       <ul className="text-xs font-mono space-y-5 opacity-70 uppercase tracking-wider font-bold">
                         <li className="flex justify-between border-b border-ink/5 pb-2"><span>[RESEARCH]</span> <span>Otter.ai / ChatGPT</span></li>
                         <li className="flex justify-between border-b border-ink/5 pb-2"><span>[DESIGN]</span> <span>Figma / FigJam</span></li>
                         <li className="flex justify-between border-b border-ink/5 pb-2"><span>[TESTING]</span> <span>Maze / UsabilityHub</span></li>
                         <li className="flex justify-between pb-2"><span>[DEV]</span> <span className="text-cedar">Next.js / Framer</span></li>
                       </ul>
                     </div>
                  </div>
                </div>
             </motion.div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t border-ink/5 mt-20 p-16 bg-white/60">
         <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 font-mono text-xs tracking-widest font-bold">
            <p className="opacity-50">© 2026 ZENSELECT STRATEGY. REACT + FRAMER MOTION ARCHITECTURE.</p>
            <p className="opacity-50 text-cedar">ENGINEERED FOR EXPERT REVIEW.</p>
         </div>
      </footer>
    </div>
  );
}