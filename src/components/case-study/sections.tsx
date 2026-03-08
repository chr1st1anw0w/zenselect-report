"use client";

import { motion, Variants } from "framer-motion";
import {
  Fingerprint, Activity, Network, Eye, GitCommitHorizontal,
  FileText, CheckCircle2, Target, Leaf, LayoutGrid, Wind,
  Search, Users, MessageSquare, BarChart3, Layers, MousePointerClick,
  TrendingUp, HeartHandshake, CheckSquare, Wrench, Compass, Map as MapIcon,
  ChevronRight, Globe2, AlertCircle, Zap, ShieldCheck
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AnimatedLineChart, EmotionSwimlane, MarketInsightGrid } from "./charts";
import { IACoreMap } from "./ia-map";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const hoverScale: Variants = {
  hover: { scale: 1.02, transition: { duration: 0.3 } }
};

export const Hero = () => (
  <motion.section
    variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
    className="mb-32"
  >
    <div className="grid lg:grid-cols-12 gap-24 items-end">
      <motion.div variants={itemVariants} className="lg:col-span-8">
        <div className="font-mono text-sm text-cedar font-bold mb-6 flex items-center gap-3 tracking-widest uppercase">
          <motion.span
            className="w-3 h-3 bg-cedar rounded-full"
            animate={{ opacity: [1, 0.4, 1], scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          PROJECT_SUMMARY_v1.0 // EXPERT_REPORT
        </div>
        <h1 className="font-display text-7xl lg:text-[10rem] font-light leading-[0.8] mb-12 tracking-tight">Artisan<br/>Logic.</h1>
        <p className="text-2xl lg:text-3xl font-sans-cn leading-snug text-ink/80 max-w-3xl border-l-4 border-cedar pl-8 py-4 bg-white/40 shadow-sm backdrop-blur-sm">
          透過數據與資訊架構轉化感性——<br/>
          <span className="text-cedar font-medium">將「間 (Ma)」之哲學編碼為具備高商業轉換效率的數位選品空間。</span>
        </p>
        <div className="flex flex-wrap gap-x-16 gap-y-10 mt-16">
            <motion.div whileHover="hover" variants={hoverScale}><p className="font-mono opacity-40 mb-3 text-[10px] flex items-center gap-2 uppercase tracking-widest font-bold"><Leaf className="w-3 h-3" /> Primary DNA</p><p className="text-2xl font-bold font-sans-cn">靜 · 選 · 留白 · 永續</p></motion.div>
            <div className="v-line h-12 hidden sm:block"></div>
            <motion.div whileHover="hover" variants={hoverScale}><p className="font-mono opacity-40 mb-3 text-[10px] flex items-center gap-2 uppercase tracking-widest font-bold"><Network className="w-3 h-3" /> Core Methodology</p><p className="text-2xl font-bold italic font-display">Story-Driven UX Optimization</p></motion.div>
            <div className="v-line h-12 hidden lg:block"></div>
            <motion.div whileHover="hover" variants={hoverScale}><p className="font-mono opacity-40 mb-3 text-[10px] flex items-center gap-2 uppercase tracking-widest font-bold"><Target className="w-3 h-3" /> Market Fit</p><p className="text-2xl font-bold italic font-display">Urban New Middle Class</p></motion.div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="lg:col-span-4">
        <div className="bg-ink p-10 text-canvas shadow-2xl relative overflow-hidden group">
          <Fingerprint className="absolute top-4 right-4 w-28 h-28 opacity-5 group-hover:scale-110 transition-transform duration-700" />
          <p className="font-mono text-xs text-cedar mb-8 opacity-70 tracking-[0.2em] font-bold flex items-center gap-2 uppercase"><Layers className="w-4 h-4" /> Design DNA Integration</p>
          <Accordion className="w-full">
            {[
              { id: "dna-1", icon: <Compass className="w-5 h-5 text-cedar/70 shrink-0"/>, title: "01. 台灣本土敘事 (Vernacular)", content: "針對「職人崇拜」整合霧靄綠 (#5A8A5A) 與檜木棕 (#8B7355)，強調在地溯源。打破進口品牌缺乏土地連結感的痛點。" },
              { id: "dna-2", icon: <LayoutGrid className="w-5 h-5 text-cedar/70 shrink-0"/>, title: "02. 北歐功能架構 (Scandi)", content: "運用 Grid-based Layout 降低高單價資訊的認知負荷。無襯線與等寬字型的交替使用，建立專家級的信任感。" },
              { id: "dna-3", icon: <Wind className="w-5 h-5 text-cedar/70 shrink-0"/>, title: "03. 東亞禪意空間 (Ma)", content: "負空間哲學。利用大量 Whitespace 與不對稱美學，營造數位空間的呼吸感，減少用戶的視覺壓迫。" }
            ].map((item) => (
              <AccordionItem key={item.id} value={item.id} className="border-white/10 group/item">
                <AccordionTrigger className="hover:text-cedar hover:no-underline font-sans-cn text-lg py-4 font-semibold flex gap-3 justify-start text-left">
                  {item.icon}
                  <span className="transition-transform group-hover/item:translate-x-1 duration-300">{item.title}</span>
                </AccordionTrigger>
                <AccordionContent className="text-sm opacity-80 font-sans-cn leading-relaxed font-light pb-6 pl-8">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </motion.div>
    </div>
  </motion.section>
);

export const Process = () => (
  <motion.section id="process" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mb-48 border-y border-ink/10 py-24 bg-white/30">
    <div className="mb-16 flex items-center gap-6 max-w-screen-xl mx-auto">
      <span className="font-mono text-cedar text-sm font-bold tracking-widest uppercase">Master Flow // 12-Week Sprint Architecture</span>
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
        <motion.div
          key={phase.id}
          variants={itemVariants}
          whileHover={{ y: -10 }}
          className="relative group cursor-default"
        >
          <div className={`h-full p-6 border transition-all duration-500 ${phase.highlight ? 'bg-ink text-canvas border-ink shadow-2xl' : 'bg-white border-ink/10 hover:border-cedar/50 hover:shadow-xl'} relative z-10`}>
            <div className="flex items-center gap-2 mb-4">
              <span className={`font-mono text-[10px] font-bold px-2 py-1 ${phase.highlight ? 'bg-cedar text-white' : 'bg-ink/5 text-ink/60'}`}>{phase.id}</span>
            </div>
            <h4 className={`font-sans-cn font-bold text-lg mb-1 ${phase.highlight ? 'text-white' : 'text-ink'}`}>{phase.title}</h4>
            <p className={`font-mono text-[10px] opacity-50 tracking-wider uppercase mb-6 ${phase.highlight ? 'text-white' : 'text-ink'}`}>{phase.sub}</p>

            <div className={`space-y-3 pt-4 border-t ${phase.highlight ? 'border-white/10' : 'border-ink/5'}`}>
              {phase.tasks.map((task, i) => (
                <div key={i} className="flex items-start gap-2 group/task">
                  <GitCommitHorizontal className={`w-3.5 h-3.5 mt-0.5 shrink-0 transition-transform group-hover/task:scale-125 ${phase.highlight ? 'text-cedar' : 'text-cedar opacity-60'}`} />
                  <p className={`text-xs font-sans-cn leading-tight transition-colors group-hover/task:text-cedar ${phase.highlight ? 'opacity-80 text-white' : 'opacity-70 text-ink'}`}>{task}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export const Discovery = () => (
  <motion.section id="discovery" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mb-56">
    <div className="mb-16 flex items-center gap-6">
      <span className="font-mono text-cedar text-sm font-bold tracking-widest flex items-center gap-2 uppercase"><Search className="w-4 h-4"/> Section 01 // 科學化使用者調研 (Scientific Research)</span>
      <div className="flex-1 h-px bg-ink/10"></div>
    </div>

    <MarketInsightGrid />

    <div className="grid lg:grid-cols-12 gap-10 mb-16">
      <motion.div variants={itemVariants} whileHover={{ scale: 1.01 }} className="lg:col-span-7 bg-white/40 border border-ink/5 p-10 flex flex-col shadow-sm transition-all duration-500 hover:shadow-xl hover:bg-white/60">
         <h4 className="font-mono text-cedar text-base font-bold mb-6 tracking-widest flex items-center gap-2 uppercase">
           <FileText className="w-5 h-5"/> Research Protocol Document
         </h4>
         <p className="text-sm font-sans-cn font-light opacity-80 mb-8 leading-relaxed">
           為確保調研具備統計顯著性與深度，我們設定了嚴格的篩選條件與 45 分鐘的半結構化訪談大綱。
         </p>

         <div className="grid md:grid-cols-2 gap-8 font-sans-cn">
           <div className="bg-canvas p-6 border border-ink/10 relative overflow-hidden group/box">
             <Users className="absolute -right-4 -bottom-4 w-24 h-24 opacity-5 text-ink transition-transform duration-700 group-hover/box:scale-125 group-hover/box:-rotate-12" />
             <p className="font-mono text-xs text-ink/40 mb-4 font-bold tracking-widest uppercase">受訪者篩選條件 (Screening)</p>
             <ul className="text-xs space-y-3 opacity-80 leading-relaxed font-medium relative z-10">
               {[
                 { t: "25–42 歲、居住台灣都市", i: <Globe2 className="w-3.5 h-3.5"/> },
                 { t: "過去 6 個月有線上購物經驗", i: <MousePointerClick className="w-3.5 h-3.5"/> },
                 { t: "月收入 40,000+ TWD", i: <BarChart3 className="w-3.5 h-3.5"/> },
                 { t: "習慣使用 IG/Pinterest 靈感", i: <Search className="w-3.5 h-3.5"/> }
               ].map((item, i) => (
                 <li key={i} className="flex gap-2 group/li items-center">
                   <span className="text-cedar opacity-60 group-hover/li:opacity-100 transition-opacity">{item.i}</span>
                   <span className="group-hover/li:text-cedar transition-colors">{item.t}</span>
                 </li>
               ))}
             </ul>
           </div>

           <div className="bg-ink text-canvas p-6 shadow-xl relative group/box overflow-hidden">
             <MessageSquare className="absolute -right-4 -bottom-4 w-24 h-24 opacity-5 text-white transition-transform duration-700 group-hover/box:scale-125 group-hover/box:rotate-12" />
             <p className="font-mono text-xs text-cedar mb-4 font-bold tracking-widest uppercase">45-Min Interview Guide</p>
             <div className="space-y-4 relative z-10">
               {[
                 { p: "P1: 開場與行為 (20m)", q: "「描述目前住的空間... 上次購買是在什麼情境？」" },
                 { p: "P2: 痛點挖掘 (15m)", q: "「網路買居家品超難的經歷？你怎麼判斷品質？」" },
                 { p: "P3: 理想情境 (10m)", q: "「完全懂你品味的選品助理應如何運作？」" }
               ].map((item, i) => (
                 <div key={i} className="border-l-2 border-cedar pl-3 group/item">
                   <p className="text-[10px] font-mono text-cedar mb-1 uppercase font-bold">{item.p}</p>
                   <p className="text-xs italic leading-tight opacity-80 group-hover/item:opacity-100 transition-opacity">{item.q}</p>
                 </div>
               ))}
             </div>
           </div>
         </div>
      </motion.div>

      <motion.div variants={itemVariants} whileHover={{ scale: 1.01 }} className="lg:col-span-5 bg-white border border-ink/5 p-10 flex flex-col shadow-sm transition-all duration-500 hover:shadow-xl">
        <p className="font-mono text-xs opacity-40 mb-8 tracking-widest uppercase font-bold flex items-center gap-2"><BarChart3 className="w-4 h-4"/> Comparative Market Growth</p>
        <div className="flex-1 relative">
           <AnimatedLineChart />
        </div>
        <div className="grid grid-cols-2 gap-8 border-t border-ink/5 pt-8 mt-4">
           <div className="group/stat">
              <p className="text-6xl font-display text-cedar transition-transform group-hover/stat:-translate-y-1 duration-300">82%</p>
              <p className="font-sans-cn font-bold text-sm mt-2">永續材質優先</p>
              <p className="font-mono text-[9px] opacity-40 uppercase mt-1">Material Over Brand</p>
           </div>
           <div className="group/stat">
              <p className="text-6xl font-display text-cedar transition-transform group-hover/stat:-translate-y-1 duration-300">65%</p>
              <p className="font-sans-cn font-bold text-sm mt-2">視覺故事驅動</p>
              <p className="font-mono text-[9px] opacity-40 uppercase mt-1">Social Discovery</p>
           </div>
        </div>
      </motion.div>
    </div>

    <motion.div variants={itemVariants} className="bg-white/30 border border-ink/10 backdrop-blur-md">
      <div className="bg-ink p-6 flex justify-between px-10 text-white items-center">
        <span className="font-mono text-sm font-bold tracking-widest flex items-center gap-3 uppercase">
           <Network className="w-5 h-5 text-cedar" />
           Competitor Intelligence Matrix v3.0
        </span>
        <motion.span
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="font-mono text-[10px] text-cedar uppercase tracking-widest"
        >
          Expand for strategic insight
        </motion.span>
      </div>
      <Accordion className="w-full">
        {[
          { name: "MUJI", pos: "Global Minimalist", flaw: "視覺過於冷靜理智，缺乏情感共鳴與職人深度故事。產品淪為單純的日用品。", opp: "導入高情感份量的生活情境攝影與職人訪談，將購買提升為生活品味認同與情感投資。" },
          { name: "HAY", pos: "Nordic Designer", flaw: "在地文化連結感不足，北歐價格門檻帶來強烈的階級距離感。", opp: "強化台灣本土工藝（如鶯歌陶瓷）融合北歐極簡框架，建立專屬台灣新中產階級的高端美學。" },
          { name: "Bloomingville", pos: "Danish Premium", flaw: "情境圖極美，但電商購買路徑極度不流暢，跨境運費門檻與語言造成高阻力。", opp: "吸取其情境攝影優勢，但提供極致流暢的本地化『一鍵結帳』與『空間選購』體驗。" },
          { name: "Pinkoi", pos: "Designer Market", flaw: "平台視覺過於繁雜，各品牌品質參差不齊，難以建立統一的高端信任感。", opp: "採取『嚴格策展 (Curated Edit)』模式，以極簡介面統一個別設計師的視覺語彙，降低決策疲勞。" },
          { name: "Shopee Home", pos: "Mass Market", flaw: "絕對的價格戰導向，充滿促銷標籤與彈出視窗，毫裝美感與信任基礎。", opp: "極致的『反向操作』：移除所有彈出廣告與促銷標籤，用大面積留白建立『安心感』與『高級感』。" }
        ].map((comp, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`} className="border-ink/5 px-10 bg-white/50 hover:bg-white transition-all duration-300">
            <AccordionTrigger className="hover:no-underline py-6 group/trigger">
              <div className="flex w-full text-left font-sans-cn pr-8 items-center gap-8">
                <div className="w-[15%] font-bold text-xl group-hover/trigger:text-cedar transition-colors">{comp.name}</div>
                <div className="w-[20%]"><span className="font-mono text-[10px] font-bold bg-ink/5 px-3 py-1.5 rounded-full text-ink/70 tracking-widest uppercase group-hover/trigger:bg-cedar/10 group-hover/trigger:text-cedar transition-colors">{comp.pos}</span></div>
                <div className="w-[65%] text-sm font-light opacity-80 truncate group-hover/trigger:opacity-100">痛點: {comp.flaw}</div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="bg-canvas border-l-4 border-cedar ml-4 pl-10 py-8 my-6 font-sans-cn">
              <p className="font-mono text-xs text-cedar mb-3 tracking-widest font-bold flex items-center gap-2 uppercase">
                 <Eye className="w-4 h-4" /> ZenSelect Strategic Opportunity
              </p>
              <p className="text-xl italic text-ink leading-relaxed font-medium">「{comp.opp}」</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  </motion.section>
);

export const Persona = () => (
  <motion.section id="definition" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mb-56">
    <div className="mb-16 flex items-center gap-6">
      <span className="font-mono text-cedar text-sm font-bold tracking-widest uppercase">Section 02 // 目標用戶定義與痛點挖掘 (Personas)</span>
      <div className="flex-1 h-px bg-ink/10"></div>
    </div>

    <div className="grid lg:grid-cols-3 gap-8 mb-16">
       {[
         {
           name: "Sofia, 32",
           sub: "Urban Minimalist / 品牌行銷 Manager",
           img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
           frustrations: ["選品太多不知如何搭配風格", "無法傳達材質觸感", "怕買到實品不如預期的廉價品"],
           motivations: ["在忙碌生活中建立療癒空間", "建立獨特美學品味"],
           details: ["居住環境：台北大安區 15坪公寓。", "常透過 IG / Pinterest 購物。"]
         },
         {
           name: "Danny, 28",
           sub: "New Homeowner / 軟體工程師",
           img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop",
           frustrations: ["預算有限，對美感搭配缺乏信心", "怕買錯風格破壞客廳視覺", "繁雜的物流追蹤流程"],
           motivations: ["以合理預算打造有品味的家", "高效、流暢的數位購物流程"],
           details: ["居住環境：新北新裝潢自有房 30坪。", "常看 YouTube 佈置影片比價。"]
         },
         {
           name: "Mei, 38",
           sub: "Eco-Activist / 瑜珈老師",
           img: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?q=80&w=600&auto=format&fit=crop",
           frustrations: ["難尋環保透明度並重的職人平台", "資訊過於碎片化", "包裝材料過度浪費"],
           motivations: ["減塑、環境永續消費", "支持在地小農與工藝職人"],
           details: ["居住環境：台中老屋改造 / 空間植物控。", "「產品溯源故事」是結帳關鍵。"],
           highlight: true
         }
       ].map((persona, i) => (
         <motion.div
           key={i}
           variants={itemVariants}
           whileHover={{ y: -10 }}
           className={`bg-white/60 border border-ink/5 p-8 flex flex-col hover:border-cedar/30 hover:shadow-2xl transition-all duration-500 ${persona.highlight ? 'border-b-8 border-b-cedar' : ''}`}
         >
            <div className="aspect-[4/5] bg-mist mb-8 grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden relative group/img">
               <motion.div
                 className="w-full h-full"
                 whileHover={{ scale: 1.1 }}
                 style={{ backgroundImage: `url('${persona.img}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
               />
               <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <div className="bg-ink/80 backdrop-blur-md p-2 rounded-full shadow-lg opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                    <Target className="w-4 h-4 text-cedar" />
                  </div>
               </div>
            </div>
            <h4 className="font-sans-cn font-bold text-3xl text-cedar mb-2">{persona.name}</h4>
            <p className="font-mono text-xs opacity-50 mb-6 tracking-widest uppercase font-bold">{persona.sub}</p>

            <div className="space-y-6 text-sm font-sans-cn font-light opacity-80 leading-relaxed border-t border-ink/5 pt-6">
               <div>
                  <p className="font-mono text-[10px] text-destructive/70 mb-2 uppercase font-bold flex items-center gap-2">
                    <AlertCircle className="w-3.5 h-3.5"/> Frustrations
                  </p>
                  <ul className="space-y-2">
                    {persona.frustrations.map((f, idx) => (
                      <li key={idx} className="flex gap-2 items-start text-xs leading-tight">
                        <span className="text-destructive opacity-40 mt-1 shrink-0">✕</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
               </div>

               <div>
                  <p className="font-mono text-[10px] text-sage mb-2 uppercase font-bold flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5"/> Motivations
                  </p>
                  <ul className="space-y-2">
                    {persona.motivations.map((m, idx) => (
                      <li key={idx} className="flex gap-2 items-start text-xs leading-tight">
                        <span className="text-sage opacity-60 mt-1 shrink-0">✓</span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
               </div>

               <div className="pt-4 border-t border-ink/5">
                 {persona.details.map((detail, j) => (
                   <p key={j} className="text-xs opacity-60 italic mb-1">{detail}</p>
                 ))}
               </div>
            </div>
         </motion.div>
       ))}
    </div>

    <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} className="bg-white/80 p-24 text-center border border-ink/5 shadow-sm transition-all duration-700 hover:shadow-2xl hover:bg-white cursor-default group">
       <p className="font-mono text-sm text-cedar mb-10 tracking-[0.4em] font-bold uppercase transition-spacing group-hover:tracking-[0.6em] duration-700">CORE HYPOTHESIS // HOW MIGHT WE</p>
       <h3 className="text-4xl lg:text-5xl font-sans-cn font-medium leading-relaxed max-w-5xl mx-auto">
         我們如何透過「數位觸點」與「敘事引導」建立空間的呼吸感，在降低決策焦慮的同時，深度傳遞台灣職人工藝的<span className="text-cedar border-b-4 border-cedar pb-2 transition-all duration-700 group-hover:pb-4 group-hover:px-4">情感溢價</span>？
       </h3>
    </motion.div>
  </motion.section>
);

export const Architecture = () => (
  <motion.section id="architecture" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mb-56">
    <div className="mb-16 flex items-center gap-6">
      <span className="font-mono text-cedar text-sm font-bold tracking-widest flex items-center gap-2 uppercase"><MapIcon className="w-5 h-5"/> Section 03 // 資訊架構與旅程流 (Architecture & Flow)</span>
      <div className="flex-1 h-px bg-ink/10"></div>
    </div>

    <div className="grid lg:grid-cols-1 gap-16">
       <motion.div variants={itemVariants} whileHover={{ scale: 1.01 }} className="bg-white/50 border border-ink/5 p-12 lg:p-20 shadow-sm transition-all duration-500 hover:shadow-2xl">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-12 gap-8">
            <div className="max-w-4xl">
              <h4 className="text-4xl font-sans-cn font-bold mb-6">雙軸心導覽策略 (Dual-Axis Navigation)</h4>
              <p className="text-lg font-sans-cn font-light opacity-80 leading-relaxed">
                 根據卡片分類法 (Card Sorting) 的洞察，多數用戶在購買家具時是以「空間搭配」為思考核心。因此我們捨棄傳統大賣場的「商品海」分類，引入水平軸<strong className="font-medium text-ink">「空間 Shop by Room」</strong>以滿足場景功能需求，垂直軸<strong className="font-medium text-ink">「故事 Artisan Stories」</strong>建立高單價信任感與品牌認同。
              </p>
            </div>
            <span className="font-mono text-xs opacity-60 tracking-widest bg-ink/5 px-6 py-3 rounded-full font-bold whitespace-nowrap flex items-center gap-2 uppercase"><Network className="w-4 h-4"/> IA Blueprint v2.0</span>
          </div>

          <div className="bg-white border border-ink/10 rounded-sm p-10 pt-16 relative shadow-inner overflow-x-auto group/map">
             <div className="transition-transform duration-700 group-hover/map:scale-[1.02]">
                <IACoreMap />
             </div>
          </div>
       </motion.div>

       <motion.div variants={itemVariants} whileHover={{ scale: 1.01 }} className="bg-white/50 border border-ink/5 p-12 lg:p-20 shadow-sm transition-all duration-500 hover:shadow-2xl">
          <p className="font-mono text-sm opacity-40 mb-12 tracking-widest uppercase font-bold flex items-center gap-2"><TrendingUp className="w-4 h-4"/> Emotional User Journey Swimlane</p>
          <EmotionSwimlane />
          <div className="mt-20 border-t border-ink/10 pt-12 grid grid-cols-4 gap-10 font-sans-cn text-base font-light">
             {[
               { title: "1. 靈感觸及", content: "運用極簡視覺留白與高質感攝影，降低廣告侵略感，建立平靜、高級的第一印象。", icon: <Zap className="w-4 h-4"/> },
               { title: "2. 深度評估", content: "提供高解析度材質特寫 (Micro-textures) 與職人影音訪談，建立關鍵的「數位觸感」。", icon: <Search className="w-4 h-4"/> },
               { title: "3. 有意識決策", content: "將「永續標籤」與「在地材質數據」前置化於商品圖旁，賦予高單價合理的價值支撐。", icon: <ShieldCheck className="w-4 h-4"/> },
               { title: "4. 無摩擦結帳", content: "設計一鍵式漸進表單 (Progressive Disclosure Form)，大幅減少輸入阻力，降低購物車放棄率。", icon: <MousePointerClick className="w-4 h-4"/> }
             ].map((step, i) => (
               <motion.div
                 key={i}
                 whileHover={{ y: -5 }}
                 className="group/step"
               >
                 <div className="text-cedar mb-4 transition-transform group-hover/step:translate-x-1 duration-300">
                    {step.icon}
                 </div>
                 <strong className="block mb-4 font-bold text-lg text-cedar group-hover/step:translate-x-1 transition-transform duration-300">{step.title}</strong>
                 <p className="opacity-80 group-hover:opacity-100 transition-opacity">{step.content}</p>
               </motion.div>
             ))}
          </div>
       </motion.div>
    </div>
  </motion.section>
);

export const Outcome = () => (
  <motion.section id="outcome" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
    <div className="mb-16 flex items-center gap-6">
      <span className="font-mono text-cedar text-sm font-bold tracking-widest flex items-center gap-2 uppercase"><Activity className="w-5 h-5"/> Section 04 // 實驗驗證與商業成效 (Metrics & KPIs)</span>
      <div className="flex-1 h-px bg-ink/10"></div>
    </div>

    <div className="grid lg:grid-cols-1 gap-12 mb-16">
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.01 }}
        className="bg-ink text-canvas p-12 border border-ink/5 flex flex-col md:flex-row justify-between items-center gap-10 shadow-2xl relative overflow-hidden group/card"
      >
         <motion.div
           className="absolute inset-0 bg-cedar opacity-0 group-hover/card:opacity-[0.03] transition-opacity duration-700"
         />
         <div className="max-w-2xl relative z-10">
           <p className="font-mono text-xs text-cedar font-bold tracking-widest mb-4 flex items-center gap-3 uppercase"><Activity className="w-5 h-5"/> A/B Testing Insight</p>
           <h4 className="text-2xl font-sans-cn font-medium leading-relaxed mb-4">結帳流程優化：單頁手風琴 (Accordion) 漸進展開</h4>
           <p className="text-base font-sans-cn font-light opacity-80 leading-relaxed">
             在 Checkout 流程中，透過眼動儀 (Eye-tracking) 熱區模擬發現，傳統多頁跳轉會打斷用戶的「Z-Pattern」閱讀流。測試了單頁設計後，實驗數據顯示跳出率降低了 <strong>22%</strong>。
           </p>
         </div>
         <div className="bg-canvas/10 p-8 text-center min-w-[200px] border border-canvas/10 relative z-10 group-hover/card:bg-cedar/20 transition-colors duration-700">
           <motion.p
             initial={{ scale: 0.8 }}
             whileInView={{ scale: 1 }}
             className="text-6xl font-display italic text-cedar mb-2"
           >
             -22%
           </motion.p>
           <p className="font-mono text-[10px] uppercase tracking-widest opacity-60">Cart Abandonment</p>
         </div>
      </motion.div>
    </div>

    <div className="grid lg:grid-cols-3 gap-10">
      {[
        { title: "UX 指標 (Usability)", icon: <MousePointerClick className="w-5 h-5"/>, metrics: [
          { label: "Task Completion Rate", val: "85%", target: "85%", delay: 0 },
          { label: "SUS Score", val: "78/100", target: "75", delay: 0.2 },
          { label: "Avg. Time to Item", val: "1.4m", sub: "預估 3.2 分鐘 → 實際 1.4 分鐘", trend: "(~53% ↓)", trendColor: "text-sage" }
        ]},
        { title: "商業指標 (Business)", icon: <TrendingUp className="w-5 h-5"/>, metrics: [
          { label: "Add-to-Cart Rate", val: "8.5%", target: "8%", delay: 0.4 },
          { label: "Return Visit Rate", val: "32%", target: "30%", delay: 0.6 },
          { label: "Checkout Completion", val: "68%", sub: "預估 42% → 實際 68%", trend: "(~62% ↑)", trendColor: "text-sage" }
        ]},
        { title: "品牌指標 (Brand)", icon: <HeartHandshake className="w-5 h-5"/>, metrics: [
          { label: "5s Brand Recognition", val: "72%", target: "70% CORRECT", delay: 0.8 },
          { label: "Trust/Calm Association", val: "81%", target: "75%", delay: 1.0 }
        ]}
      ].map((cat, i) => (
        <motion.div
          key={i}
          variants={itemVariants}
          whileHover={{ y: -5 }}
          className="bg-white/60 p-10 border border-ink/5 shadow-sm transition-all duration-500 hover:shadow-xl"
        >
           <h4 className="font-mono text-sm text-cedar mb-10 font-bold tracking-widest flex items-center gap-2 uppercase">{cat.icon} {cat.title}</h4>
           <div className="space-y-10">
             {cat.metrics.map((m, j) => (
               <div key={j} className="group/metric">
                 <div className="flex justify-between font-mono text-xs mb-3 group-hover/metric:text-cedar transition-colors">
                   <span>{m.label}</span>
                   <span className="text-cedar font-bold">{m.val}</span>
                 </div>
                 {m.target ? (
                   <>
                     <div className="h-1.5 bg-ink/5 rounded-full overflow-hidden">
                       <motion.div
                         className="h-full bg-cedar"
                         initial={{ width: 0 }}
                         whileInView={{ width: m.val.includes('/') ? (parseInt(m.val)/100)*100 + '%' : m.val }}
                         viewport={{ once: true }}
                         transition={{ duration: 1.5, delay: m.delay, ease: "circOut" }}
                       />
                     </div>
                     <p className="text-[9px] font-mono opacity-40 mt-2 uppercase tracking-tighter">TARGET: {m.target}</p>
                   </>
                 ) : (
                   <p className="text-sm font-sans-cn font-medium">
                     {m.sub} <span className={m.trendColor}>{m.trend}</span>
                   </p>
                 )}
               </div>
             ))}
           </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export const PortfolioStrategy = () => (
  <motion.section id="portfolio" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mt-48 pt-24 border-t border-ink/10">
    <div className="mb-16 flex items-center gap-6">
      <span className="font-mono text-cedar text-sm font-bold tracking-widest flex items-center gap-2 uppercase"><CheckSquare className="w-5 h-5"/> Section 05 // 作品集呈現策略 (Portfolio Output Strategy)</span>
      <div className="flex-1 h-px bg-ink/10"></div>
    </div>

    <div className="grid lg:grid-cols-12 gap-16 items-start">
       <motion.div variants={itemVariants} whileHover={{ scale: 1.01 }} className="lg:col-span-5 transition-transform duration-500">
          <div className="p-12 bg-white/50 border border-ink/5 shadow-sm hover:shadow-2xl transition-all duration-500">
            <h4 className="text-2xl font-bold font-sans-cn mb-6 flex items-center gap-3 uppercase"><Layers className="w-6 h-6 text-cedar"/> UI Sandwich 結構</h4>
            <p className="text-base font-light opacity-80 leading-relaxed mb-10">
              基於 NotebookLM UX Guide 2026，本報告採用「三明治結構」：首尾以高保真視覺模型 (High-Fidelity Visuals) 建立第一眼印象，中間夾層 (Middle Layer) 則專注於展示嚴謹的研究與推導過程 (Research & Process)。
            </p>
            <div className="space-y-4 font-mono text-xs uppercase tracking-widest font-bold">
              {[
                { icon: <Eye className="w-4 h-4"/>, text: "Top: Visual Hook (Hero)", active: true },
                { icon: <Network className="w-5 h-5"/>, text: "Middle: Research & Architecture" },
                { icon: <TrendingUp className="w-4 h-4"/>, text: "Bottom: Final Prototype / Impact" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 10 }}
                  className={`p-5 flex items-center justify-center gap-2 transition-colors duration-300 ${item.active ? 'bg-ink text-canvas' : 'bg-canvas border border-ink/10 text-ink/50 hover:text-ink hover:border-cedar/50'}`}
                >
                  {item.icon} {item.text}
                </motion.div>
              ))}
            </div>
          </div>
       </motion.div>
       <motion.div variants={itemVariants} className="lg:col-span-7">
          <div className="grid sm:grid-cols-2 gap-8">
            <motion.div whileHover={{ y: -5 }} className="p-10 border border-ink/10 bg-white/30 hover:border-cedar/30 transition-all duration-500 shadow-sm hover:shadow-xl">
               <p className="font-mono text-sm text-cedar mb-6 font-bold tracking-widest flex items-center gap-2 uppercase"><CheckCircle2 className="w-4 h-4"/> 必備元素 Checklist</p>
               <ul className="text-sm font-sans-cn font-medium space-y-5 opacity-80">
                 {[
                   "Tag Cloud TL;DR 供快速掃描",
                   "可量化成果 (62% Conversion Lift)",
                   "設計決策說明 (IA 雙軸心策略)",
                   "可及性標註 (WCAG AA 規範)",
                   "Clickable Prototype 連結"
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-3 group/li">
                     <span className="text-cedar font-bold group-hover/li:scale-125 transition-transform duration-300">✓</span>
                     <span className="group-hover/li:text-cedar transition-colors duration-300">{item}</span>
                   </li>
                 ))}
               </ul>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="p-10 border border-ink/10 bg-white/30 hover:border-cedar/30 transition-all duration-500 flex flex-col justify-between shadow-sm hover:shadow-xl group/tools">
               <div>
                 <p className="font-mono text-sm text-cedar mb-6 font-bold tracking-widest flex items-center gap-2 uppercase"><Wrench className="w-4 h-4"/> Toolstack Integration</p>
                 <ul className="text-xs font-mono space-y-5 opacity-70 uppercase tracking-wider font-bold">
                   {[
                     { l: "[RESEARCH]", r: "Otter.ai / ChatGPT" },
                     { l: "[DESIGN]", r: "Figma / FigJam" },
                     { l: "[TESTING]", r: "Maze / UsabilityHub" },
                     { l: "[DEV]", r: "Next.js / Framer" }
                   ].map((tool, i) => (
                     <li key={i} className="flex justify-between border-b border-ink/5 pb-2 group-hover/tools:border-cedar/20 transition-colors">
                       <span className="group-hover/tools:text-cedar transition-colors">{tool.l}</span>
                       <span className={`transition-colors ${tool.l === '[DEV]' ? 'text-cedar' : 'group-hover/tools:text-ink'}`}>{tool.r}</span>
                     </li>
                   ))}
                 </ul>
               </div>
               <motion.button
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="mt-12 bg-ink text-canvas py-4 px-6 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] font-bold group/btn"
               >
                 View Prototype <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
               </motion.button>
            </motion.div>
          </div>
       </motion.div>
    </div>
  </motion.section>
);
