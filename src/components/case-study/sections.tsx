"use client";

import { motion, Variants } from "framer-motion";
import {
  Fingerprint,
  Activity,
  Network,
  Eye,
  GitCommitHorizontal,
  FileText,
  CheckCircle2,
  Target,
  Leaf,
  LayoutGrid,
  Wind,
  Search,
  Users,
  MessageSquare,
  BarChart3,
  Layers,
  MousePointerClick,
  TrendingUp,
  CheckSquare,
  Wrench,
  Compass,
  Map as MapIcon,
  ChevronRight,
  Globe2,
  AlertCircle,
  Zap,
  ShieldCheck,
  Microscope,
  Lightbulb,
  Rocket,
  Quote,
  ArrowRight,
  Smartphone,
  Monitor,
  Database,
  Brain,
  Heart,
  Sparkles,
  ShoppingBag,
  Truck,
  BadgeCheck,
  Clock
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AnimatedLineChart, EmotionSwimlane, MarketInsightGrid, CompetitorRadarChart, HMWMatrix } from "./charts";
import { IACoreMap } from "./ia-map";
import { useLanguage } from "@/context/language-context";
import { t } from "@/lib/translations";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const hoverScale: Variants = {
  hover: { scale: 1.02, transition: { duration: 0.3 } }
};

export const ResearchMethodology = () => (
  <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-4 gap-6 mb-20 md:p-12 pb-8 scrollbar-thin scrollbar-thumb-cedar/20 scrollbar-track-transparent">
    {[
      { label: "Qualitative", value: "50", sub: "Deep Interviews", icon: <MessageSquare className="w-5 h-5 text-cedar"/>, detail: "1-on-1 sessions exploring emotional triggers." },
      { label: "Quantitative", value: "500+", sub: "Survey Respondents", icon: <BarChart3 className="w-5 h-5 text-cedar"/>, detail: "Market validation across demographics." },
      { label: "Behavioral", value: "1.2k", sub: "Heatmap Sessions", icon: <MousePointerClick className="w-5 h-5 text-cedar"/>, detail: "Tracking scroll depth and click patterns." },
      { label: "Usability", value: "15", sub: "Task Success Tests", icon: <CheckCircle2 className="w-5 h-5 text-cedar"/>, detail: "Iterative testing of low-fi prototypes." }
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.15 }}
        whileHover={{ scale: 1.05, borderColor: "#8B7355", boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}
        className="snap-center flex-shrink-0 w-[280px] md:w-auto bg-white border border-ink/5 p-8 flex flex-col items-center text-center shadow-sm transition-all duration-300 group"
      >
        <div className="p-4 bg-canvas rounded-lg mb-6 group-hover:bg-cedar/10 transition-colors">
          {item.icon}
        </div>
        <p className="text-5xl font-display text-ink mb-2 group-hover:text-cedar transition-colors">{item.value}</p>
        <p className="font-mono text-[10px] font-bold text-cedar uppercase tracking-widest mb-4">{item.sub}</p>
        <div className="h-px w-8 bg-cedar/20 mb-4" />
        <p className="text-xs opacity-60 font-sans-cn font-light leading-relaxed">{item.detail}</p>
      </motion.div>
    ))}
  </div>
);

export const SentimentAnalysis = () => (
  <motion.div variants={itemVariants} className="mt-20 bg-white border border-ink/5 p-6 md:p-12 shadow-sm">
    <div className="flex items-center gap-4 mb-12">
      <Brain className="w-6 h-6 text-cedar" />
      <h4 className="font-mono text-sm text-cedar font-bold tracking-[0.3em] uppercase">Qualitative Sentiment Analysis</h4>
    </div>
    <div className="grid md:grid-cols-3 gap-12">
      {[
        { label: "Craftsmanship", score: 92, insight: "Users frequently praised the 'Artisan' storytelling.", color: "bg-sage" },
        { label: "Trustworthiness", score: 88, insight: "Transparency in material sourcing built high brand trust.", color: "bg-cedar" },
        { label: "Ease of Use", score: 85, insight: "Simplified checkout significantly reduced friction.", color: "bg-ink" }
      ].map((item, i) => (
        <div key={i} className="space-y-6">
          <div className="flex justify-between items-end">
            <div>
              <p className="font-mono text-[10px] opacity-40 uppercase tracking-widest mb-1">{item.label}</p>
              <p className="text-4xl font-display text-ink">{item.score}%</p>
            </div>
            <Sparkles className="w-5 h-5 text-cedar/30" />
          </div>
          <div className="h-1 bg-ink/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${item.score}%` }}
              className={`h-full ${item.color}`}
              transition={{ duration: 1.5, delay: i * 0.2 }}
            />
          </div>
          <p className="text-xs font-sans-cn font-light opacity-60 leading-relaxed italic">&quot;{item.insight}&quot;</p>
        </div>
      ))}
    </div>
  </motion.div>
);

export const Hero = () => {
  return (
  <motion.section
    variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
    className="mb-40"
  >
    <div className="grid lg:grid-cols-12 gap-4 md:p-8 md:p-16 lg:gap-6 md:p-10 md:p-24 items-end">
      <motion.div variants={itemVariants} className="lg:col-span-8">
        <div className="font-mono text-xs md:text-sm text-cedar font-bold mb-8 flex items-center gap-3 tracking-[0.3em] uppercase">
          <motion.span
            className="w-3 h-3 bg-cedar rounded-full"
            animate={{ opacity: [1, 0.4, 1], scale: [1, 1.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          EXPERT_CASE_STUDY_v2.0 // ARTISAN_LOGIC
        </div>
        <h1 className="font-display text-5xl md:text-7xl lg:text-[7rem] font-light leading-[0.85] mb-12 tracking-tighter">
          Artisan<br/>
          <span className="text-cedar italic">Logic.</span>
        </h1>
        <div className="relative">
          <p className="text-lg md:text-xl font-sans-cn leading-relaxed text-ink/90 max-w-3xl border-l-4 border-cedar pl-8 py-6 bg-white/50 backdrop-blur-md shadow-sm">
            透過數據與資訊架構轉化感性——<br/>
            <span className="text-cedar font-medium">將「間 (Ma)」之哲學編碼為具備高商業轉換效率的數位選品空間。</span>
          </p>
          <motion.div
            className="absolute -left-4 top-0 bottom-0 w-1 bg-cedar"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>

        <div className="flex flex-wrap gap-x-12 md:gap-x-20 gap-y-10 mt-20">
            <motion.div whileHover="hover" variants={hoverScale} className="group">
              <p className="font-mono opacity-40 mb-3 text-[10px] flex items-center gap-2 uppercase tracking-widest font-bold group-hover:text-cedar transition-colors">
                <Leaf className="w-3 h-3" /> Brand DNA
              </p>
              <p className="text-lg md:text-xl font-bold font-sans-cn">靜 · 選 · 留白 · 永續</p>
            </motion.div>
            <div className="w-px h-12 bg-ink/10 hidden sm:block"></div>
            <motion.div whileHover="hover" variants={hoverScale} className="group">
              <p className="font-mono opacity-40 mb-3 text-[10px] flex items-center gap-2 uppercase tracking-widest font-bold group-hover:text-cedar transition-colors">
                <Network className="w-3 h-3" /> Core Methodology
              </p>
              <p className="text-lg md:text-xl font-bold italic font-display">Data-Driven Storytelling</p>
            </motion.div>
            <div className="w-px h-12 bg-ink/10 hidden lg:block"></div>
            <motion.div whileHover="hover" variants={hoverScale} className="group">
              <p className="font-mono opacity-40 mb-3 text-[10px] flex items-center gap-2 uppercase tracking-widest font-bold group-hover:text-cedar transition-colors">
                <Target className="w-3 h-3" /> Market Target
              </p>
              <p className="text-lg md:text-xl font-bold italic font-display">Urban New Middle Class</p>
            </motion.div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="lg:col-span-4">
        <div className="bg-ink p-4 md:p-8 md:p-6 md:p-12 text-canvas shadow-2xl relative overflow-hidden group">
          <Fingerprint className="absolute -top-6 -right-6 w-32 h-32 opacity-5 group-hover:scale-125 transition-transform duration-1000 text-cedar" />
          <p className="font-mono text-[10px] text-cedar mb-10 opacity-70 tracking-[0.3em] font-bold flex items-center gap-2 uppercase">
            <Layers className="w-4 h-4" /> Philosophy Integration
          </p>
          <Accordion className="w-full">
            {[
              { id: "dna-1", icon: <Compass className="w-5 h-5 text-cedar/80 shrink-0"/>, title: "01. 台灣本土敘事 (Vernacular)", content: "針對「職人崇拜」整合霧靄綠 (#5A8A5A) 與檜木棕 (#8B7355)，強調在地溯源。打破進口品牌缺乏土地連結感的痛點。" },
              { id: "dna-2", icon: <LayoutGrid className="w-5 h-5 text-cedar/80 shrink-0"/>, title: "02. 北歐功能架構 (Scandi)", content: "運用 Grid-based Layout 降低高單價資訊的認知負荷。無襯線與等寬字型的交替使用，建立專家級的信任感。" },
              { id: "dna-3", icon: <Wind className="w-5 h-5 text-cedar/80 shrink-0"/>, title: "03. 東亞禪意空間 (Ma)", content: "負空間哲學。利用大量 Whitespace 與不對稱美學，營造數位空間的呼吸感，減少用戶的視覺壓迫。" }
            ].map((dna) => (
              <AccordionItem key={dna.id} value={dna.id} className="border-white/10 last:border-0">
                <AccordionTrigger className="text-xs md:text-sm font-sans-cn font-bold hover:no-underline hover:text-cedar py-6 transition-colors">
                  <div className="flex items-center gap-4 text-left">
                    {dna.icon} {dna.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-xs font-sans-cn font-light opacity-60 leading-relaxed pb-8">
                  {dna.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </motion.div>
    </div>
  </motion.section>
  );
};

export const Process = () => {
  const { lang } = useLanguage();
  return (
  <motion.section id="process" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mb-56">
    <div className="mb-20 flex items-center gap-4 md:p-8">
      <span className="font-mono text-cedar text-sm font-bold tracking-[0.4em] flex items-center gap-3 uppercase">
        <GitCommitHorizontal className="w-5 h-5"/> {t("process.section", lang)}
      </span>
      <div className="flex-1 h-px bg-ink/10"></div>
    </div>

    <div className="relative">
      <div className="absolute top-1/2 left-0 right-0 h-px bg-ink/5 -translate-y-1/2 hidden lg:block" />
      <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-5 gap-6 md:p-10 pb-12 scrollbar-thin scrollbar-thumb-cedar/20 scrollbar-track-transparent">
        {[
          { id: "W1-W3", title: "研究階段", sub: "Discover", icon: <Search className="w-4 h-4"/>, tasks: ["市場競品分析", "深度訪談 (N=50+)", "親和圖 (Affinity Map)"] },
          { id: "W4-W5", title: "定義階段", sub: "Define", icon: <Target className="w-4 h-4"/>, tasks: ["Persona 建立", "體驗旅程 (Journey Map)", "HMW 核心機會點"] },
          { id: "W6-W8", title: "設計階段", sub: "Develop", icon: <LayoutGrid className="w-4 h-4"/>, tasks: ["IA 雙軸心架構", "低保真 Wireframes", "Design System 2.0"] },
          { id: "W9-W10", title: "驗證階段", sub: "Validate", icon: <ShieldCheck className="w-4 h-4"/>, tasks: ["Hi-Fi 原型測試", "眼動儀模擬 (Heatmap)", "UX 指標迭代"] },
          { id: "W11-W12", title: "交付階段", sub: "Deliver", icon: <Rocket className="w-4 h-4"/>, tasks: ["Dev Handoff 規格", "Case Study 視覺化", "原型發佈"], highlight: true },
        ].map((phase, idx) => (
          <motion.div
            key={phase.id}
            variants={itemVariants}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -15, scale: 1.02 }}
            className="snap-center flex-shrink-0 w-[300px] md:w-auto relative group cursor-default"
          >
            <div className={`h-full p-4 md:p-8 border transition-all duration-700 ${phase.highlight ? 'bg-ink text-canvas border-ink shadow-2xl scale-105 z-20' : 'bg-white border-ink/10 hover:border-cedar/50 hover:shadow-xl'}`}>
              <div className="flex items-center justify-between mb-6">
                <span className={`font-mono text-[10px] font-bold px-3 py-1.5 ${phase.highlight ? 'bg-cedar text-white' : 'bg-ink/5 text-ink/60'}`}>{phase.id}</span>
                <span className={phase.highlight ? 'text-cedar' : 'text-cedar/40'}>{phase.icon}</span>
              </div>
              <h4 className={`font-sans-cn font-bold text-xl mb-1 ${phase.highlight ? 'text-white' : 'text-ink'}`}>{phase.title}</h4>
              <p className={`font-mono text-[10px] opacity-50 tracking-wider uppercase mb-8 ${phase.highlight ? 'text-white' : 'text-ink'}`}>{phase.sub}</p>

              <div className={`space-y-4 pt-6 border-t ${phase.highlight ? 'border-white/10' : 'border-ink/5'}`}>
                {phase.tasks.map((task, i) => (
                  <div key={i} className="flex items-start gap-3 group/task">
                    <motion.div
                      animate={phase.highlight ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
                    >
                      <GitCommitHorizontal className={`w-4 h-4 mt-0.5 shrink-0 ${phase.highlight ? 'text-cedar' : 'text-cedar/60'}`} />
                    </motion.div>
                    <p className={`text-xs font-sans-cn leading-tight transition-colors group-hover/task:text-cedar ${phase.highlight ? 'opacity-90 text-white' : 'opacity-70 text-ink'}`}>{task}</p>
                  </div>
                ))}
              </div>
            </div>
            {idx < 4 && (
              <div className="hidden md:flex absolute -right-4 top-6 md:p-10 items-center justify-center z-30 pointer-events-none">
                <ChevronRight className="w-8 h-8 text-ink/10" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
      <div className="flex lg:hidden justify-center mt-8 gap-2 font-mono text-[10px] text-cedar/40 uppercase tracking-widest">
        <ArrowRight className="w-3 h-3" /> Scroll to view project timeline
      </div>
    </div>
  </motion.section>
  );
};

export const Discovery = () => {
  const { lang } = useLanguage();
  return (
  <motion.section id="discovery" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mb-56">
    <div className="mb-20 flex items-center gap-4 md:p-8">
      <span className="font-mono text-cedar text-sm font-bold tracking-[0.4em] flex items-center gap-3 uppercase">
        <Microscope className="w-5 h-5"/> {t("discovery.section", lang)}
      </span>
      <div className="flex-1 h-px bg-ink/10"></div>
    </div>

    <MarketInsightGrid />
    <ResearchMethodology />

    <div className="grid lg:grid-cols-12 gap-6 md:p-12 mb-20">
      <motion.div variants={itemVariants} className="lg:col-span-7 bg-white/60 border border-ink/5 p-6 md:p-12 shadow-sm transition-all duration-700 hover:shadow-2xl hover:bg-white relative overflow-hidden group">
         <div className="absolute top-0 right-0 w-32 h-32 bg-cedar/5 rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000" />

         <h4 className="font-mono text-cedar text-base font-bold mb-8 tracking-widest flex items-center gap-3 uppercase">
           <FileText className="w-5 h-5"/> Research Protocol & Insights
         </h4>
         <p className="text-lg font-sans-cn font-light opacity-80 mb-12 leading-relaxed max-w-2xl">
           透過親和圖 (Affinity Map) 分析，我們發現用戶在購買高單價居家品時，<strong>「信任感的建立」</strong>遠比<strong>「折扣」</strong>更能驅動轉化。
         </p>

         <div className="grid md:grid-cols-2 gap-4 md:p-8 font-sans-cn">
           <div className="bg-canvas p-4 md:p-8 border border-ink/10 relative group/box">
             <Users className="w-6 h-6 text-cedar mb-6" />
             <p className="font-mono text-xs text-ink/50 mb-4 font-bold tracking-widest uppercase">受訪者輪廓 (N=50)</p>
             <ul className="text-sm space-y-4 opacity-90 leading-relaxed font-medium">
               {[
                 { t: "25–42 歲、都市白領", i: <Globe2 className="w-4 h-4"/> },
                 { t: "月均家居支出 8k+ TWD", i: <BarChart3 className="w-4 h-4"/> },
                 { t: "重視永續材質與故事性", i: <Leaf className="w-4 h-4"/> },
                 { t: "高頻使用 IG 尋找靈感", i: <Smartphone className="w-4 h-4"/> }
               ].map((item, i) => (
                 <li key={i} className="flex gap-3 items-center group/li">
                   <span className="text-cedar transition-transform group-hover/li:scale-110">{item.i}</span>
                   <span className="group-hover/li:text-cedar transition-colors">{item.t}</span>
                 </li>
               ))}
             </ul>
           </div>

           <div className="bg-ink text-canvas p-4 md:p-8 shadow-2xl relative group/box overflow-hidden">
             <MessageSquare className="w-6 h-6 text-cedar mb-6" />
             <p className="font-mono text-xs text-cedar mb-6 font-bold tracking-widest uppercase">Interview Key Insights</p>
             <div className="space-y-6">
               {[
                 { p: "「觸感」數位化", q: "「我不知道這木頭摸起來是什麼感覺...」", icon: <Search className="w-3 h-3"/> },
                 { p: "決策過載", q: "「選項太多我反而會直接關掉頁面。」", icon: <AlertCircle className="w-3 h-3"/> },
                 { p: "職人認同", q: "「知道是誰做的會讓我更想擁有它。」", icon: <ShieldCheck className="w-3 h-3"/> },
                 { p: "期待驚喜", q: "「開箱的瞬間應該像是一場藝術饗宴。」", icon: <Sparkles className="w-3 h-3"/> }
               ].map((item, i) => (
                 <div key={i} className="border-l-2 border-cedar/40 pl-4 group/item hover:border-cedar transition-colors">
                   <p className="text-[10px] font-mono text-cedar mb-1 uppercase font-bold flex items-center gap-2">{item.icon} {item.p}</p>
                   <p className="text-sm italic leading-snug opacity-80 group-hover/item:opacity-100 transition-opacity">&ldquo;{item.q}&rdquo;</p>
                 </div>
               ))}
             </div>
           </div>
         </div>
      </motion.div>

      <motion.div variants={itemVariants} className="lg:col-span-5 bg-white border border-ink/5 p-6 md:p-12 shadow-sm transition-all duration-700 hover:shadow-2xl">
        <p className="font-mono text-xs text-cedar mb-10 tracking-[0.3em] uppercase font-bold flex items-center gap-3">
          <BarChart3 className="w-5 h-5"/> Comparative Growth Analysis
        </p>
        <div className="flex-1 relative mb-12">
           <AnimatedLineChart />
        </div>
        <div className="grid grid-cols-2 gap-6 md:p-10 border-t border-ink/5 pt-10">
           <div className="group/stat">
              <div className="flex items-center gap-2 mb-3">
                <Leaf className="w-4 h-4 text-cedar" />
                <p className="text-4xl font-display text-cedar">82%</p>
              </div>
              <p className="font-sans-cn font-bold text-base">永續材質優先</p>
              <p className="font-mono text-[10px] opacity-40 uppercase mt-1 tracking-wider">Material Over Brand</p>
           </div>
           <div className="group/stat">
              <div className="flex items-center gap-2 mb-3">
                <Eye className="w-4 h-4 text-cedar" />
                <p className="text-4xl font-display text-cedar">65%</p>
              </div>
              <p className="font-sans-cn font-bold text-base">視覺故事驅動</p>
              <p className="font-mono text-[10px] opacity-40 uppercase mt-1 tracking-wider">Social Discovery</p>
           </div>
        </div>
      </motion.div>
    </div>

    {/* Competitor Radar Chart */}
    <div className="mb-16">
      <CompetitorRadarChart />
    </div>

    <motion.div variants={itemVariants} className="bg-white/30 border border-ink/10 backdrop-blur-xl">
      <div className="bg-ink p-4 md:p-6 flex flex-col md:flex-row justify-between px-8 md:px-12 text-white items-center gap-4">
        <span className="font-mono text-xs font-bold tracking-[0.3em] flex items-center gap-3 uppercase">
           <Network className="w-5 h-5 text-cedar" />
           {t("discovery.matrix", lang)}
        </span>
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="font-mono text-[10px] text-cedar uppercase tracking-[0.2em] flex items-center gap-2"
        >
          <MousePointerClick className="w-3 h-3" /> {t("discovery.clickReveal", lang)}
        </motion.div>
      </div>
      <Accordion className="w-full">
        {[
          { icon: <Database className="w-5 h-5"/>, name: "MUJI", pos: "Global Minimalist", flaw: "視覺過於理智，缺乏情感共鳴與職人深度故事。", opp: "導入高情感份量的生活情境攝影與職人訪談，將購買提升為生活品味認同。" },
          { icon: <Globe2 className="w-5 h-5"/>, name: "HAY", pos: "Nordic Designer", flaw: "在地文化連結感不足，北歐價格門檻帶來階級距離感。", opp: "強化台灣本土工藝融合北歐極簡框架，建立專屬台灣新中產階級的高端美學。" },
          { icon: <Search className="w-5 h-5"/>, name: "Bloomingville", pos: "Danish Premium", flaw: "情境圖美，但電商購買路徑極度不流暢。", opp: "吸取其情境攝影優勢，但提供極致流暢的本地化『一鍵結帳』體驗。" },
          { icon: <LayoutGrid className="w-5 h-5"/>, name: "Pinkoi", pos: "Designer Market", flaw: "平台視覺繁雜，難以建立統一的高端信任感。", opp: "採取『嚴格策展』模式，以極簡介面統一個別品牌視覺語彙。" }
        ].map((comp, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`} className="border-ink/5 px-12 bg-white/50 hover:bg-white transition-all duration-500">
            <AccordionTrigger className="hover:no-underline py-8 group/trigger">
              <div className="flex w-full text-left font-sans-cn pr-8 items-center gap-6 md:p-10">
                <div className="w-[20%] flex items-center gap-4">
                  <span className="text-cedar/30 group-hover/trigger:text-cedar transition-colors">{comp.icon}</span>
                  <span className="font-bold text-2xl group-hover/trigger:text-cedar transition-colors">{comp.name}</span>
                </div>
                <div className="w-[20%]"><span className="font-mono text-[10px] font-bold bg-ink/5 px-4 py-2 rounded-full text-ink/70 tracking-widest uppercase group-hover/trigger:bg-cedar/10 group-hover/trigger:text-cedar transition-all">{comp.pos}</span></div>
                <div className="w-[60%] text-sm font-light opacity-80 truncate group-hover/trigger:opacity-100">痛點: {comp.flaw}</div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="bg-canvas border-l-4 border-cedar ml-6 pl-12 py-10 my-8 font-sans-cn relative overflow-hidden">
              <Quote className="absolute -top-4 -left-4 w-24 h-24 opacity-5 text-cedar rotate-12" />
              <p className="font-mono text-[10px] text-cedar mb-4 tracking-[0.3em] font-bold flex items-center gap-3 uppercase">
                 <Lightbulb className="w-4 h-4" /> ZenSelect Strategic Opportunity
              </p>
              <p className="text-2xl italic text-ink leading-relaxed font-medium relative z-10">「{comp.opp}」</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  </motion.section>
  );
};

export const Persona = () => {
  const { lang } = useLanguage();
  return (
  <motion.section id="definition" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mb-56">
    <div className="mb-20 flex items-center gap-4 md:p-8">
      <span className="font-mono text-cedar text-sm font-bold tracking-[0.4em] uppercase flex items-center gap-3">
        <Users className="w-5 h-5"/> {t("persona.section", lang)}
      </span>
      <div className="flex-1 h-px bg-ink/10"></div>
    </div>

    {/* Horizontal scroll persona cards */}
    <div className="relative mb-20">
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 px-2 scrollbar-thin scrollbar-thumb-cedar/20 scrollbar-track-transparent" style={{ scrollbarWidth: 'thin' }}>
       {[
         {
           name: "Sofia, 35",
           sub: "Urban Minimalist",
           role: lang === "en" ? "Brand Marketing Manager" : "品牌行銷經理",
           img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
           frustrations: [
             lang === "en" ? "Too many options, hard to mix & match" : "選品太多不知如何搭配",
             lang === "en" ? "Can't feel material texture online" : "無法感受材質真實觸感",
             lang === "en" ? "E-commerce info density too high" : "電商資訊密度過高"
           ],
           motivations: [
             lang === "en" ? "Build a healing high-quality space" : "建立高質感的療癒空間",
             lang === "en" ? "Support brands with local roots" : "支持具有土地連結感的品牌"
           ],
           stats: { trust: 85 },
           icon: <Brain className="w-5 h-5" />
         },
         {
           name: "Danny, 28",
           sub: "New Homeowner",
           role: lang === "en" ? "Software Engineer" : "軟體開發工程師",
           img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop",
           frustrations: [
             lang === "en" ? "Fear of wrong style ruining living room" : "怕買錯風格破壞客廳視覺",
             lang === "en" ? "Logistics lacks real-time transparency" : "物流配送缺乏即時透明度",
             lang === "en" ? "Mobile checkout flow too complex" : "手機操作流程過於繁瑣"
           ],
           motivations: [
             lang === "en" ? "Minimal, efficient shopping experience" : "追求極簡、高效的購物體驗",
             lang === "en" ? "Prioritize specs & functionality" : "重視產品的規格與功能性"
           ],
           stats: { trust: 65 },
           icon: <Activity className="w-5 h-5" />
         },
         {
           name: "Mei, 32",
           sub: "Eco-Activist",
           role: lang === "en" ? "Yoga Studio Founder" : "瑜珈工作室創辦人",
           img: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?q=80&w=600&auto=format&fit=crop",
           frustrations: [
             lang === "en" ? "Hard to find eco-transparent platforms" : "難尋環保透明度高的職人平台",
             lang === "en" ? "Excessive packaging waste" : "包裝材料過度浪費",
             lang === "en" ? "Distrust fast-fashion home brands" : "不信任快時尚家居"
           ],
           motivations: [
             lang === "en" ? "Plastic-free, sustainable consumption" : "減塑消費、環境永續",
             lang === "en" ? "Build emotional bond with artisans" : "與職人建立情感連結"
           ],
           stats: { trust: 92 },
           highlight: true,
           icon: <Heart className="w-5 h-5" />
         },
         {
           name: "Liam, 45",
           sub: "Interior Designer",
           role: lang === "en" ? "Senior Interior Designer" : "資深室內設計師",
           img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=600&auto=format&fit=crop",
           frustrations: [
             lang === "en" ? "Limited B2B sourcing options" : "B2B 採購選項有限",
             lang === "en" ? "Inconsistent product imagery" : "產品圖片品質不一致",
             lang === "en" ? "No bulk ordering discounts" : "缺乏大量訂購優惠"
           ],
           motivations: [
             lang === "en" ? "Source unique pieces for clients" : "為客戶採購獨特單品",
             lang === "en" ? "Build vendor partnerships" : "建立供應商合作關係"
           ],
           stats: { trust: 78 },
           icon: <Compass className="w-5 h-5" />
         },
         {
           name: "Yuki, 26",
           sub: "Digital Nomad",
           role: lang === "en" ? "Remote UX Writer" : "遠端 UX 寫手",
           img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop",
           frustrations: [
             lang === "en" ? "Need portable, versatile furniture" : "需要可攜帶、多功能家具",
             lang === "en" ? "International shipping is expensive" : "國際運費太貴",
             lang === "en" ? "Hard to visualize in small spaces" : "小空間難以想像實際效果"
           ],
           motivations: [
             lang === "en" ? "Aesthetic workspace anywhere" : "在任何地方打造美學工作空間",
             lang === "en" ? "Compact, multi-functional design" : "小巧多功能設計"
           ],
           stats: { trust: 70 },
           icon: <Smartphone className="w-5 h-5" />
         },
         {
           name: "Chen Wei, 55",
           sub: "Craft Collector",
           role: lang === "en" ? "Traditional Art Collector" : "傳統工藝收藏家",
           img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=600&auto=format&fit=crop",
           frustrations: [
             lang === "en" ? "Authenticity verification lacking" : "缺乏真品驗證機制",
             lang === "en" ? "No provenance documentation" : "無溯源證明文件",
             lang === "en" ? "Mass-produced items mixed in" : "量產品混雜其中"
           ],
           motivations: [
             lang === "en" ? "Preserve traditional craftsmanship" : "保存傳統工藝技法",
             lang === "en" ? "Investment-grade artisan pieces" : "收藏等級的職人作品"
           ],
           stats: { trust: 88 },
           icon: <ShieldCheck className="w-5 h-5" />
         }
       ].map((persona, i) => (
         <motion.div
           key={i}
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ delay: i * 0.1 }}
           className={`snap-center flex-shrink-0 w-[320px] md:w-[360px] bg-white/60 border border-ink/5 p-6 flex flex-col hover:shadow-2xl transition-all duration-500 ${persona.highlight ? 'border-b-4 border-b-cedar' : ''}`}
         >
            <div className="aspect-[3/2] bg-mist mb-6 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden relative group/img">
               <motion.div
                 className="w-full h-full"
                 whileHover={{ scale: 1.1 }}
                 style={{ backgroundImage: `url('${persona.img}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
               />
               <div className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-md rounded-full text-cedar shadow-lg opacity-0 group-hover/img:opacity-100 transition-all">
                 {persona.icon}
               </div>
            </div>
            <h4 className="font-sans-cn font-bold text-lg text-ink mb-1">{persona.name}</h4>
            <div className="flex items-center gap-2 mb-6">
              <span className="font-mono text-[10px] text-cedar font-bold tracking-widest uppercase">{persona.sub}</span>
              <span className="w-1 h-1 bg-ink/20 rounded-full"></span>
              <span className="text-[11px] font-sans-cn opacity-50">{persona.role}</span>
            </div>

            <div className="space-y-5 text-sm font-sans-cn font-light opacity-90 leading-relaxed border-t border-ink/5 pt-6 mb-6 flex-1">
               <div>
                  <p className="font-mono text-[9px] text-destructive/80 mb-2 uppercase font-bold flex items-center gap-2">
                    <AlertCircle className="w-3 h-3"/> {lang === "en" ? "Frustrations" : "痛點"}
                  </p>
                  <ul className="space-y-1.5">
                    {persona.frustrations.map((f, idx) => (
                      <li key={idx} className="flex gap-2 items-start text-[11px]">
                        <span className="text-destructive/40 mt-0.5 shrink-0 text-[10px]">✕</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
               </div>
               <div>
                  <p className="font-mono text-[9px] text-sage mb-2 uppercase font-bold flex items-center gap-2">
                    <Zap className="w-3 h-3"/> {lang === "en" ? "Motivations" : "動機"}
                  </p>
                  <ul className="space-y-1.5">
                    {persona.motivations.map((m, idx) => (
                      <li key={idx} className="flex gap-2 items-start text-[11px]">
                        <span className="text-sage/60 mt-0.5 shrink-0 text-[10px]">✓</span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
               </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-ink/5">
              <div className="flex justify-between items-center text-[9px] font-mono font-bold uppercase tracking-widest text-ink/40">
                <span>Story Affinity</span>
                <span className="text-cedar">{persona.stats.trust}%</span>
              </div>
              <div className="h-1 bg-ink/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${persona.stats.trust}%` }}
                  transition={{ duration: 1.5, ease: "circOut" }}
                  className="h-full bg-cedar"
                />
              </div>
            </div>
         </motion.div>
       ))}
      </div>
      {/* Scroll hint */}
      <div className="flex justify-center mt-4 gap-2">
        <span className="font-mono text-[10px] text-ink/30 uppercase tracking-widest flex items-center gap-2">
          <ArrowRight className="w-3 h-3" /> {lang === "en" ? "Scroll to explore all personas" : "滑動瀏覽所有人物誌"}
        </span>
      </div>
    </div>

    {/* Core Hypothesis */}
    <motion.div variants={itemVariants} className="bg-ink p-6 md:p-12 lg:p-16 text-center relative overflow-hidden group mb-20">
       <Fingerprint className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] opacity-[0.03] text-cedar group-hover:scale-110 transition-transform duration-1000" />
       <p className="font-mono text-xs text-cedar mb-8 tracking-[0.4em] font-bold uppercase relative z-10">{t("hypothesis.label", lang)}</p>
       <h3 className="text-lg md:text-xl lg:text-2xl font-sans-cn font-medium leading-[1.5] text-canvas max-w-5xl mx-auto relative z-10 mb-8">
         {lang === "en"
           ? <>How might we create a sense of spatial breathing through &quot;digital touchpoints&quot; and &quot;narrative guidance,&quot; reducing decision anxiety while deeply conveying the <span className="text-cedar italic">emotional premium</span> of Taiwanese artisan craftsmanship?</>
           : <>我們如何透過「數位觸點」與「敘事引導」建立空間的呼吸感，在降低決策焦慮的同時，深度傳遞台灣職人工藝的<span className="text-cedar italic">情感溢價</span>？</>
         }
       </h3>

       {/* Sub-hypotheses */}
       <div className="grid md:grid-cols-3 gap-4 mt-10 text-left relative z-10 max-w-5xl mx-auto">
         {[
           { icon: <Eye className="w-5 h-5" />, title: lang === "en" ? "Hypothesis 1: Visual Breathing Space" : "假設一：視覺呼吸空間", desc: lang === "en" ? "If we increase whitespace by 40% and reduce options per viewport, users will spend 2x more time engaging with product stories." : "若增加 40% 留白空間並減少每個視窗的選項，用戶將花 2 倍時間閱讀產品故事。" },
           { icon: <Heart className="w-5 h-5" />, title: lang === "en" ? "Hypothesis 2: Artisan Trust Bridge" : "假設二：職人信任橋樑", desc: lang === "en" ? "If artisan origin stories are surfaced before pricing, purchase confidence will increase by 30%+." : "若在價格前展示職人溯源故事，購買信心將提升 30% 以上。" },
           { icon: <ShoppingBag className="w-5 h-5" />, title: lang === "en" ? "Hypothesis 3: Progressive Checkout" : "假設三：漸進式結帳", desc: lang === "en" ? "If checkout uses progressive disclosure with 40% fewer fields, cart abandonment will drop by 20%+." : "若結帳採用漸進式展開並減少 40% 欄位，購物車放棄率將下降 20% 以上。" }
         ].map((hyp, i) => (
           <motion.div key={i}
             initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
             transition={{ delay: i * 0.15 }}
             className="bg-white/5 border border-white/10 p-5 backdrop-blur-sm hover:bg-white/10 transition-colors"
           >
             <div className="text-cedar mb-3">{hyp.icon}</div>
             <p className="font-mono text-[10px] text-cedar font-bold mb-2 uppercase tracking-wider">{hyp.title}</p>
             <p className="text-xs text-canvas/70 font-sans-cn font-light leading-relaxed">{hyp.desc}</p>
           </motion.div>
         ))}
       </div>
    </motion.div>

    {/* HMW Opportunity Matrix */}
    <HMWMatrix />

    {/* Explore Solution Directions */}
    <motion.div variants={itemVariants} className="mt-12 grid md:grid-cols-2 gap-6">
      {[
        { icon: <Lightbulb className="w-6 h-6" />, title: lang === "en" ? "Solution Direction 1: Narrative Commerce" : "解決方向一：敘事型電商", items: lang === "en" ? ["Artisan video portraits on product pages", "Material provenance timeline", "Behind-the-scenes craft process gallery", "Seasonal editorial curation"] : ["商品頁嵌入職人影像訪談", "材質溯源時間軸", "幕後工藝過程展示", "季節性編輯策展"] },
        { icon: <LayoutGrid className="w-6 h-6" />, title: lang === "en" ? "Solution Direction 2: Cognitive Load Reduction" : "解決方向二：認知負荷降低", items: lang === "en" ? ["Dual-axis navigation (Room × Artisan)", "Smart comparison max 3 items", "Progressive disclosure on checkout", "Visual-first product filtering"] : ["雙軸心導覽（場景 × 職人）", "智慧比較最多 3 件商品", "結帳漸進式展開", "視覺優先的產品篩選"] },
      ].map((sol, i) => (
        <motion.div key={i} whileHover={{ y: -8 }}
          className="bg-white/60 border border-ink/5 p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500"
        >
          <div className="text-cedar mb-4">{sol.icon}</div>
          <h4 className="font-sans-cn font-bold text-base mb-4">{sol.title}</h4>
          <ul className="space-y-2">
            {sol.items.map((item, idx) => (
              <li key={idx} className="flex gap-2 items-start text-xs font-sans-cn opacity-80">
                <ChevronRight className="w-3 h-3 text-cedar mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  </motion.section>
  );
};

export const Architecture = () => {
  const { lang } = useLanguage();
  return (
  <motion.section id="architecture" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mb-56">
    <div className="mb-20 flex items-center gap-4 md:p-8">
      <span className="font-mono text-cedar text-sm font-bold tracking-[0.4em] flex items-center gap-3 uppercase">
        <MapIcon className="w-6 h-6"/> {t("arch.section", lang)}
      </span>
      <div className="flex-1 h-px bg-ink/10"></div>
    </div>

    <div className="grid lg:grid-cols-1 gap-20">
       <motion.div variants={itemVariants} className="bg-white/50 border border-ink/5 p-6 md:p-12 md:p-6 md:p-10 md:p-24 shadow-sm transition-all duration-700 hover:shadow-2xl">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-6 md:p-12">
            <div className="max-w-4xl">
              <h4 className="text-2xl md:text-3xl lg:text-4xl font-sans-cn font-bold mb-6">
                {lang === "en" ? "Dual-Axis Navigation Strategy" : "雙軸心導覽策略 (Dual-Axis Navigation)"}
              </h4>
              <p className="text-base font-sans-cn font-light opacity-80 leading-relaxed mb-8">
                {lang === "en"
                  ? <>Abandoning the traditional &quot;product sea&quot; taxonomy, we introduce a horizontal axis <strong className="font-medium text-ink">&quot;Shop by Room&quot;</strong> and a vertical axis <strong className="font-medium text-ink">&quot;Artisan Stories.&quot;</strong> Experiments prove this architecture effectively reduces search friction and increases high-AOV bundle purchases.</>
                  : <>捨棄傳統大賣場的「商品海」分類，引入水平軸<strong className="font-medium text-ink">「場景 Shop by Room」</strong>與垂直軸<strong className="font-medium text-ink">「職人 Artisan Stories」</strong>。實驗證明此架構能有效降低「搜尋阻力 (Search Friction)」，提升高客單價組合購買率。</>
                }
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  { t: lang === "en" ? "Logic-Based Taxonomy" : "邏輯分類法", i: <Database className="w-4 h-4"/>, m: "CTR +12%" },
                  { t: lang === "en" ? "Reduced Cognitive Load" : "降低認知負荷", i: <Zap className="w-4 h-4"/>, m: "-56% search time" },
                  { t: lang === "en" ? "Enhanced Trust Signals" : "強化信任訊號", i: <ShieldCheck className="w-4 h-4"/>, m: "+3.5x trust" },
                  { t: lang === "en" ? "AOV Increase" : "客單價提升", i: <TrendingUp className="w-4 h-4"/>, m: "+28.4%" }
                ].map((tag, i) => (
                  <span key={i} className="bg-ink/5 px-4 py-2.5 rounded-full font-mono text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 hover:bg-cedar/10 transition-colors">
                    {tag.i} {tag.t} <span className="text-cedar">{tag.m}</span>
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-end gap-4">
              <span className="font-mono text-[10px] opacity-40 tracking-widest font-bold uppercase">Revision Status</span>
              <span className="bg-cedar text-white px-5 py-2 font-mono text-[10px] font-bold tracking-widest uppercase">STABLE v2.4.0</span>
            </div>
          </div>

          <div className="bg-white border border-ink/10 rounded-sm p-6 md:p-12 md:p-20 relative shadow-inner overflow-x-auto group/map">
             <div className="min-w-[800px] transition-transform duration-1000 group-hover/map:scale-[1.01]">
                <IACoreMap />
             </div>
          </div>
       </motion.div>

       <motion.div variants={itemVariants} className="bg-white/50 border border-ink/5 p-6 md:p-12 md:p-6 md:p-10 md:p-24 shadow-sm transition-all duration-700 hover:shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 md:p-12 pointer-events-none">
            <Activity className="w-32 h-32 opacity-[0.03] text-cedar" />
          </div>
          <p className="font-mono text-xs text-cedar mb-12 tracking-[0.3em] uppercase font-bold flex items-center gap-3">
            <TrendingUp className="w-5 h-5"/> {t("arch.swimlane", lang)}
          </p>
          <EmotionSwimlane />
          <div className="mt-16 border-t border-ink/10 pt-12 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 font-sans-cn">
             {[
               { title: lang === "en" ? "1. Inspiration Touch" : "1. 靈感觸及", content: lang === "en" ? "Minimal visual whitespace and high-quality photography to establish the first impression." : "運用極簡視覺留白與高質感攝影，建立第一印象。", icon: <Sparkles className="w-5 h-5"/>, metric: "Avg. 4.2s View" },
               { title: lang === "en" ? "2. Deep Evaluation" : "2. 深度評估", content: lang === "en" ? "High-resolution material close-ups and artisan interviews to build digital touch and professional trust." : "提供高解析度材質特寫與職人訪談，建立數位觸感與專業信任。", icon: <Microscope className="w-5 h-5"/>, metric: "72% Depth Read" },
               { title: lang === "en" ? "3. Conscious Decision" : "3. 有意識決策", content: lang === "en" ? "Front-loading sustainability labels and local data to justify premium pricing." : "將「永續標籤」與「在地數據」前置化，賦予高單價合理的價值感。", icon: <BadgeCheck className="w-5 h-5"/>, metric: "CVR Boost 18%" },
               { title: lang === "en" ? "4. Frictionless Checkout" : "4. 無摩擦結帳", content: lang === "en" ? "Progressive forms reducing 40% of input fields, minimizing checkout friction." : "設計漸進式表單，減少 40% 輸入欄位，將結帳阻力降至最低。", icon: <ShoppingBag className="w-5 h-5"/>, metric: "Bounce rate -22%" }
             ].map((step, i) => (
               <motion.div
                 key={i}
                 whileHover={{ y: -6 }}
                 className="group/step"
               >
                 <div className="text-cedar mb-4 group-hover/step:translate-x-1 transition-transform duration-500">
                    {step.icon}
                 </div>
                 <strong className="block mb-3 font-bold text-base text-ink">{step.title}</strong>
                 <p className="text-xs font-light opacity-70 mb-4 leading-relaxed">{step.content}</p>
                 <div className="font-mono text-[9px] text-cedar font-bold bg-cedar/5 px-2.5 py-1 inline-block uppercase tracking-widest">
                   {step.metric}
                 </div>
               </motion.div>
             ))}
          </div>
       </motion.div>
    </div>
  </motion.section>
  );
};

export const Outcome = () => {
  const { lang } = useLanguage();
  return (
  <motion.section id="outcome" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mb-56">
    <div className="mb-20 flex items-center gap-4 md:p-8">
      <span className="font-mono text-cedar text-sm font-bold tracking-[0.4em] flex items-center gap-3 uppercase">
        <Activity className="w-6 h-6"/> {t("outcome.section", lang)}
      </span>
      <div className="flex-1 h-px bg-ink/10"></div>
    </div>

    {/* Checkout Optimization - Complete Experiment Section */}
    <div className="mb-20">
      {/* Header card */}
      <motion.div variants={itemVariants}
        className="bg-ink text-canvas p-6 md:p-10 border border-ink/5 shadow-2xl relative overflow-hidden mb-8"
      >
        <div className="absolute inset-0 bg-cedar opacity-[0.03]" />
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-full border border-cedar/30 flex items-center justify-center">
              <Activity className="w-5 h-5 text-cedar" />
            </div>
            <p className="font-mono text-xs text-cedar font-bold tracking-[0.3em] uppercase">{t("outcome.verification", lang)}</p>
          </div>
          <h4 className="text-lg md:text-xl lg:text-2xl font-sans-cn font-medium leading-snug mb-4">
            {lang === "en" ? "Experiment: Single-Page Progressive Checkout (Checkout Optimization)" : "優化實驗：單頁漸進式結帳流程 (Checkout Optimization)"}
          </h4>
          <p className="text-sm font-sans-cn font-light opacity-80 leading-relaxed max-w-3xl">
            {lang === "en"
              ? <>Using <strong>Bayesian A/B Testing</strong>, we applied &quot;visual noise reduction&quot; to the checkout form. Complex shipping info was converted to <strong>Progressive Disclosure</strong>, revealing fields only when needed.</>
              : <>基於 <strong>Bayesian A/B Testing</strong> 模型，我們針對結帳表單進行了「視覺降噪」處理。將繁雜的運送資訊改為「分段展開 (Progressive Disclosure)」。</>
            }
          </p>
        </div>
      </motion.div>

      {/* Before / After Comparison */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Before */}
        <motion.div variants={itemVariants} className="bg-white/60 border border-ink/10 p-6">
          <p className="font-mono text-[10px] text-destructive/70 font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
            <AlertCircle className="w-3 h-3" /> {lang === "en" ? "BEFORE — Traditional 3-Step Checkout" : "BEFORE — 傳統三步驟結帳"}
          </p>
          <div className="space-y-3">
            {[
              { step: "1", label: lang === "en" ? "Cart Review" : "購物車確認", fields: lang === "en" ? "12 fields visible" : "12 個欄位可見", status: "84% abandon" },
              { step: "2", label: lang === "en" ? "Shipping & Billing" : "運送與帳單", fields: lang === "en" ? "18 fields visible" : "18 個欄位可見", status: "68% abandon" },
              { step: "3", label: lang === "en" ? "Payment & Confirm" : "付款與確認", fields: lang === "en" ? "8 fields visible" : "8 個欄位可見", status: "45% abandon" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-ink/5 border border-ink/5">
                <span className="w-6 h-6 rounded-full bg-ink/10 flex items-center justify-center font-mono text-[10px] font-bold shrink-0">{s.step}</span>
                <div className="flex-1">
                  <p className="font-sans-cn text-xs font-bold">{s.label}</p>
                  <p className="font-mono text-[9px] text-ink/40">{s.fields}</p>
                </div>
                <span className="font-mono text-[9px] text-destructive/60 font-bold">{s.status}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-ink/10 flex justify-between font-mono text-[10px]">
            <span className="text-ink/40">{lang === "en" ? "Total fields: 38" : "總欄位數: 38"}</span>
            <span className="text-destructive/70 font-bold">{lang === "en" ? "Overall abandon: 84%" : "整體放棄率: 84%"}</span>
          </div>
        </motion.div>

        {/* After */}
        <motion.div variants={itemVariants} className="bg-white/60 border border-cedar/20 p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-cedar/5 rounded-bl-full" />
          <p className="font-mono text-[10px] text-sage font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-3 h-3" /> {lang === "en" ? "AFTER — Progressive Disclosure Flow" : "AFTER — 漸進式展開流程"}
          </p>
          <div className="space-y-3">
            {[
              { step: "1", label: lang === "en" ? "Smart Cart + Instant Preview" : "智慧購物車 + 即時預覽", fields: lang === "en" ? "6 fields, auto-fill" : "6 個欄位，自動填入", status: "92% continue" },
              { step: "2", label: lang === "en" ? "Progressive Shipping (expand on demand)" : "漸進式運送（按需展開）", fields: lang === "en" ? "4 visible, 6 on-demand" : "4 個可見，6 個按需展開", status: "85% continue" },
              { step: "3", label: lang === "en" ? "One-Tap Payment" : "一鍵付款", fields: lang === "en" ? "Saved methods, 2 taps" : "已儲存付款，2 次點擊", status: "78% complete" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-cedar/5 border border-cedar/10">
                <span className="w-6 h-6 rounded-full bg-cedar text-white flex items-center justify-center font-mono text-[10px] font-bold shrink-0">{s.step}</span>
                <div className="flex-1">
                  <p className="font-sans-cn text-xs font-bold">{s.label}</p>
                  <p className="font-mono text-[9px] text-cedar/60">{s.fields}</p>
                </div>
                <span className="font-mono text-[9px] text-sage font-bold">{s.status}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-cedar/10 flex justify-between font-mono text-[10px]">
            <span className="text-ink/40">{lang === "en" ? "Total fields: 14 (visible)" : "總欄位數: 14 (可見)"}</span>
            <span className="text-sage font-bold">{lang === "en" ? "Overall abandon: 62%" : "整體放棄率: 62%"}</span>
          </div>
        </motion.div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: lang === "en" ? "Cart Abandonment" : "購物車放棄率", value: "-22%", color: "text-cedar" },
          { label: lang === "en" ? "Checkout Time" : "結帳時間", value: "-53%", color: "text-sage" },
          { label: lang === "en" ? "Form Error Rate" : "表單錯誤率", value: "-41%", color: "text-sage" },
          { label: lang === "en" ? "Mobile CVR Lift" : "手機轉換提升", value: "+28%", color: "text-cedar" },
        ].map((m, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="bg-ink text-canvas p-5 text-center border border-ink/5"
          >
            <motion.p initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
              className={`text-3xl md:text-4xl font-display italic ${m.color} mb-2`}
            >
              {m.value}
            </motion.p>
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] font-bold text-canvas/60">{m.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Experiment details */}
      <div className="flex flex-wrap gap-6 font-mono text-[10px] text-ink/40 uppercase tracking-widest">
        <span>{t("outcome.sampleSize", lang)}: N = 2,400</span>
        <span>{t("outcome.confidence", lang)}: 98.4%</span>
        <span>{lang === "en" ? "Method: Bayesian A/B Test" : "方法: Bayesian A/B Test"}</span>
        <span>{lang === "en" ? "Duration: 21 days" : "持續: 21 天"}</span>
      </div>
    </div>

    <div className="grid lg:grid-cols-3 gap-6 md:p-12">
      {[
        { title: "UX 指標 (Usability)", icon: <MousePointerClick className="w-6 h-6"/>, metrics: [
          { label: "Task Completion Rate", val: "85%", target: "85%", trend: "Optimal", color: "text-sage", icon: <Target className="w-3 h-3"/> },
          { label: "SUS Score", val: "78/100", target: "75", trend: "+4%", color: "text-sage", icon: <CheckCircle2 className="w-3 h-3"/> },
          { label: "Time to Discovery", val: "1.4m", target: "3.2m", trend: "-56%", color: "text-sage", icon: <Clock className="w-3 h-3"/> }
        ]},
        { title: "商業指標 (Business)", icon: <TrendingUp className="w-6 h-6"/>, metrics: [
          { label: "Add-to-Cart Rate", val: "8.5%", target: "8%", trend: "+6.2%", color: "text-sage", icon: <ShoppingBag className="w-3 h-3"/> },
          { label: "Return Visit Rate", val: "32%", target: "30%", trend: "+6.6%", color: "text-sage", icon: <Users className="w-3 h-3"/> },
          { label: "Conversion Rate", val: "4.2%", target: "3.5%", trend: "+20%", color: "text-sage", icon: <TrendingUp className="w-3 h-3"/> }
        ]},
        { title: "配送指標 (Logistics)", icon: <Truck className="w-6 h-6"/>, metrics: [
          { label: "Logistics Transparency", val: "94%", target: "90%", trend: "Excellent", color: "text-sage", icon: <Eye className="w-3 h-3"/> },
          { label: "Package Safety Rating", val: "4.8/5", target: "4.5", trend: "High", color: "text-sage", icon: <ShieldCheck className="w-3 h-3"/> },
          { label: "Sustainable Packaging", val: "100%", target: "100%", trend: "Verified", color: "text-sage", icon: <Leaf className="w-3 h-3"/> }
        ]}
      ].map((cat, i) => (
        <motion.div
          key={i}
          variants={itemVariants}
          whileHover={{ y: -10 }}
          className="bg-white/60 p-6 md:p-12 border border-ink/5 shadow-sm transition-all duration-700 hover:shadow-2xl hover:bg-white"
        >
           <div className="flex items-center gap-4 mb-12">
             <div className="text-cedar transition-transform group-hover:scale-110 duration-500">
               {cat.icon}
             </div>
             <h4 className="font-mono text-sm text-cedar font-bold tracking-[0.3em] uppercase">{cat.title}</h4>
           </div>
           <div className="space-y-12">
             {cat.metrics.map((m, j) => (
               <div key={j} className="group/metric">
                 <div className="flex justify-between font-mono text-xs mb-4 group-hover/metric:text-cedar transition-colors">
                   <span className="font-bold flex items-center gap-2">{m.icon} {m.label}</span>
                   <div className="flex items-center gap-3">
                     <span className={`text-[10px] ${m.color} bg-sage/5 px-2 py-0.5 rounded`}>{m.trend}</span>
                     <span className="text-cedar font-bold text-lg">{m.val}</span>
                   </div>
                 </div>
                 <div className="h-1.5 bg-ink/5 rounded-full overflow-hidden">
                   <motion.div
                     className="h-full bg-cedar"
                     initial={{ opacity: 0 }}
                     whileInView={{ width: m.val.includes('/') ? (parseInt(m.val.split('/')[0])/parseInt(m.val.split('/')[1]))*100 + '%' : m.val }}
                     viewport={{ once: true }}
                     transition={{ duration: 1.5, delay: i * 0.2 + j * 0.1, ease: "circOut" }}
                   />
                 </div>
                 <div className="flex justify-between mt-3">
                   <p className="text-[9px] font-mono opacity-40 uppercase tracking-[0.2em]">Target Benchmark: {m.target}</p>
                 </div>
               </div>
             ))}
           </div>
        </motion.div>
      ))}
    </div>
    <SentimentAnalysis />
  </motion.section>
  );
};

export const PortfolioStrategy = () => {
  const { lang } = useLanguage();
  return (
  <motion.section id="portfolio" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mt-48 pt-32 border-t border-ink/10 pb-40">
    <div className="mb-20 flex items-center gap-4 md:p-8">
      <span className="font-mono text-cedar text-sm font-bold tracking-[0.4em] flex items-center gap-3 uppercase">
        <CheckSquare className="w-6 h-6"/> {t("portfolio.section", lang)}
      </span>
      <div className="flex-1 h-px bg-ink/10"></div>
    </div>

    <div className="grid lg:grid-cols-12 gap-20 items-start">
       <motion.div variants={itemVariants} className="lg:col-span-5">
          <div className="p-6 md:p-12 md:p-4 md:p-8 md:p-16 bg-white border border-ink/10 shadow-sm hover:shadow-2xl transition-all duration-700 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-cedar opacity-20 group-hover:opacity-100 transition-opacity" />
            <h4 className="text-lg md:text-2xl font-bold font-sans-cn mb-8 flex items-center gap-4 uppercase"><Layers className="w-8 h-8 text-cedar"/> UI Sandwich 結構</h4>
            <p className="text-lg font-sans-cn font-light opacity-80 leading-relaxed mb-12">
              本報告採用「三明治結構」：首尾以高保真視覺建立強烈印象，中層則專注於展示嚴謹的研究推導過程。確保招聘經理能同時看到<strong>感性美學</strong>與<strong>理性思考</strong>。
            </p>
            <div className="space-y-6 font-mono text-xs uppercase tracking-[0.3em] font-bold">
              {[
                { icon: <Monitor className="w-5 h-5"/>, text: "Visual Hook (Hero Section)", active: true },
                { icon: <Network className="w-5 h-5"/>, text: "Process & Data Insights" },
                { icon: <Smartphone className="w-5 h-5"/>, text: "Impact & Final Prototype" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 15 }}
                  className={`p-6 flex items-center gap-4 transition-all duration-500 border-l-4 ${item.active ? 'bg-ink text-canvas border-cedar shadow-xl' : 'bg-canvas border-transparent text-ink/40 hover:text-ink hover:bg-white hover:border-cedar/30'}`}
                >
                  {item.icon} {item.text}
                </motion.div>
              ))}
            </div>
          </div>
       </motion.div>
       <motion.div variants={itemVariants} className="lg:col-span-7">
          <div className="grid md:grid-cols-2 gap-6 md:p-10">
            <motion.div whileHover={{ y: -10 }} className="p-6 md:p-12 border border-ink/10 bg-white/40 hover:border-cedar/30 transition-all duration-700 shadow-sm hover:shadow-xl group">
               <p className="font-mono text-xs text-cedar mb-8 font-bold tracking-[0.3em] flex items-center gap-4 uppercase"><CheckCircle2 className="w-5 h-5"/> Portfolio Checklist</p>
               <ul className="text-sm font-sans-cn font-medium space-y-6 opacity-90">
                 {[
                   "可量化商業成果 (CVR, Abandonment)",
                   "設計決策說明 (IA 策略 vs 傳統模型)",
                   "可及性標註 (WCAG 2.1 AA 規範)",
                   "響應式斷點測試 (Mobile First Logic)",
                   "職人故事的敘事架構推導"
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-4 group/li">
                     <span className="text-cedar font-bold group-hover/li:scale-125 transition-transform">✓</span>
                     <span className="group-hover/li:text-cedar transition-colors leading-snug">{item}</span>
                   </li>
                 ))}
               </ul>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="p-6 md:p-12 border border-ink/10 bg-ink text-canvas flex flex-col justify-between transition-all duration-700 shadow-2xl group/tools relative overflow-hidden">
               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cedar/10 rounded-full blur-3xl" />
               <div className="relative z-10">
                 <p className="font-mono text-xs text-cedar mb-10 font-bold tracking-[0.3em] flex items-center gap-4 uppercase"><Wrench className="w-5 h-5"/> Technical Stack</p>
                 <ul className="text-xs font-mono space-y-6 opacity-80 uppercase tracking-[0.2em] font-bold">
                   {[
                     { l: "[UX RESEARCH]", r: "Maze / UserTesting" },
                     { l: "[UI DESIGN]", r: "Figma (Tokens Studio)" },
                     { l: "[VISUALS]", r: "Midjourney / C4D" },
                     { l: "[PROTOTYPE]", r: "Framer / Next.js" }
                   ].map((tool, i) => (
                     <li key={i} className="flex justify-between border-b border-white/10 pb-3 group-hover/tools:border-cedar/40 transition-colors">
                       <span className="group-hover/tools:text-cedar">{tool.l}</span>
                       <span className={`text-cedar`}>{tool.r}</span>
                     </li>
                   ))}
                 </ul>
               </div>
               <motion.button
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="mt-16 bg-cedar text-white py-5 px-8 flex items-center justify-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold group/btn relative z-10 shadow-lg hover:shadow-cedar/20"
               >
                 View Prototype <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
               </motion.button>
            </motion.div>
          </div>
       </motion.div>
    </div>
  </motion.section>
  );
};
