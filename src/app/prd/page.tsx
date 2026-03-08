"use client";

import { motion, Variants } from "framer-motion";
import {
  FileText, Target, Users, Activity, CheckCircle2, AlertTriangle,
  TrendingUp, Shield, Layers, Smartphone, Clock, Star
} from "lucide-react";
import { MARKET_DATA, UX_BENCHMARKS, USABILITY_RESULTS } from "@/data/research-data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function SectionHeader({ id, label, title }: { id: string; label: string; title: string }) {
  return (
    <div className="mb-10 pb-6 border-b border-ink/10" id={id}>
      <span className="font-mono text-cedar text-xs font-bold tracking-widest uppercase">{label}</span>
      <h2 className="text-3xl font-display font-light mt-2">{title}</h2>
    </div>
  );
}

function MoSCoWRow({ items, label, color }: { items: string[]; label: string; color: string }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-3">
        <span className="font-mono text-[10px] font-bold px-3 py-1 tracking-widest" style={{ background: color + "20", color }}>
          {label}
        </span>
      </div>
      <div className="space-y-2">
        {items.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="flex items-start gap-3 p-3 bg-white/60 border border-ink/5 hover:border-cedar/20 transition-colors"
          >
            <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: color }} />
            <p className="font-sans-cn text-sm text-ink/80 leading-relaxed">{item}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function PRDPage() {
  return (
    <div className="min-h-screen text-ink bg-canvas pb-32">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-canvas/90 backdrop-blur-xl border-b border-ink/10 px-8 py-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <FileText className="text-cedar w-5 h-5" />
            <p className="font-mono text-sm font-bold tracking-tighter">ZEN_SELECT // PRD_v1.0</p>
            <div className="w-px h-4 bg-ink/20 hidden md:block" />
            <p className="font-mono text-xs opacity-40 hidden md:block">Product Requirements Document</p>
          </div>
          <nav className="flex gap-6 font-mono text-[10px] font-bold uppercase tracking-widest opacity-60">
            <a href="#summary" className="hover:text-cedar transition-colors hidden lg:block">Summary</a>
            <a href="#problem" className="hover:text-cedar transition-colors hidden lg:block">Problem</a>
            <a href="#goals" className="hover:text-cedar transition-colors">Goals</a>
            <a href="#features" className="hover:text-cedar transition-colors">Features</a>
            <a href="#timeline" className="hover:text-cedar transition-colors">Timeline</a>
            <a href="/" className="hover:text-cedar transition-colors text-cedar border border-cedar/30 px-3 py-1">← Report</a>
          </nav>
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto px-8 lg:px-16 pt-36">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 border-b border-ink/10 pb-16"
        >
          <div className="font-mono text-sm text-cedar font-bold mb-4 flex items-center gap-3 tracking-widest">
            <span className="w-2 h-2 bg-cedar animate-pulse" />
            PRODUCT REQUIREMENTS DOCUMENT
          </div>
          <h1 className="font-display text-6xl lg:text-8xl font-light leading-[0.85] mb-8 tracking-tight">
            ZenSelect<br />
            <span className="text-cedar">PRD</span>
          </h1>
          <p className="text-xl font-sans-cn font-light text-ink/70 max-w-3xl leading-relaxed mb-10">
            台灣都市新中產階級高端家居選品平台的完整產品需求文件——結合數據驅動的 UX 研究、市場分析、功能規格與驗收標準。
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "文件版本 Version", value: "v1.0" },
              { label: "最後更新 Updated", value: "2026-03-08" },
              { label: "狀態 Status", value: "Active Review" },
              { label: "負責人 Owner", value: "ZenSelect UX Team" },
            ].map((meta) => (
              <div key={meta.label} className="bg-white/60 border border-ink/5 p-4">
                <p className="font-mono text-[9px] text-ink/40 tracking-widest uppercase mb-1">{meta.label}</p>
                <p className="font-mono text-sm font-bold text-cedar">{meta.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Table of Contents */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20 bg-ink text-canvas p-10"
        >
          <p className="font-mono text-xs text-cedar font-bold tracking-widest mb-6">TABLE OF CONTENTS</p>
          <div className="grid md:grid-cols-2 gap-3 font-mono text-sm">
            {[
              { num: "01", title: "Executive Summary", anchor: "#summary" },
              { num: "02", title: "Problem Statement", anchor: "#problem" },
              { num: "03", title: "Market Opportunity", anchor: "#market" },
              { num: "04", title: "Target Users & Segments", anchor: "#users" },
              { num: "05", title: "Goals & Success Metrics", anchor: "#goals" },
              { num: "06", title: "Feature Requirements (MoSCoW)", anchor: "#features" },
              { num: "07", title: "Non-Functional Requirements", anchor: "#nfr" },
              { num: "08", title: "Design Principles", anchor: "#design" },
              { num: "09", title: "Project Timeline", anchor: "#timeline" },
              { num: "10", title: "Risks & Mitigations", anchor: "#risks" },
            ].map((item) => (
              <motion.a
                key={item.num}
                href={item.anchor}
                variants={fadeUp}
                className="flex items-center gap-4 p-3 border border-white/5 hover:border-cedar/30 hover:bg-white/5 transition-all group"
              >
                <span className="text-cedar font-bold opacity-70 group-hover:opacity-100">{item.num}.</span>
                <span className="opacity-70 group-hover:opacity-100 group-hover:text-cedar transition-colors">{item.title}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* 01 Executive Summary */}
        <motion.section
          id="summary"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <SectionHeader id="summary" label="Section 01" title="Executive Summary" />
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div variants={fadeUp} className="lg:col-span-2 space-y-6">
              <div className="bg-white/60 border border-ink/5 p-8">
                <p className="font-mono text-xs text-cedar font-bold tracking-widest mb-4 flex items-center gap-2">
                  <Target className="w-4 h-4" /> Project Vision
                </p>
                <p className="font-sans-cn text-lg leading-relaxed text-ink/80">
                  ZenSelect 是一個以「台灣職人美學 × 北歐極簡功能 × 東亞禪意空間」為核心的高端家居電商選品平台，專為台灣都市新中產階級（HENRY 族群）設計。透過數據驅動的 UX 研究與故事驅動的設計策略，將購物體驗從「功能性交易」提升為「生活品味投資」。
                </p>
              </div>
              <div className="bg-white/60 border border-ink/5 p-8">
                <p className="font-mono text-xs text-cedar font-bold tracking-widest mb-4 flex items-center gap-2">
                  <FileText className="w-4 h-4" /> PRD 目的 Purpose
                </p>
                <p className="font-sans-cn text-base leading-relaxed text-ink/80">
                  本文件定義 ZenSelect 平台的產品願景、目標用戶、功能需求（MoSCoW 優先序）、成功指標（KPIs）、設計原則與專案時程。作為設計師、工程師、PM 及利害關係人的唯一真實信息來源（Single Source of Truth）。
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-4">
              <div className="bg-cedar text-canvas p-8">
                <p className="font-mono text-[10px] text-white/50 tracking-widest mb-2">MARKET OPPORTUNITY</p>
                <p className="font-display text-4xl font-light mb-1">USD 1.5B</p>
                <p className="font-sans-cn text-sm text-white/70">台灣家居市場規模 2024</p>
                <div className="border-t border-white/20 my-4" />
                <p className="font-mono text-[10px] text-white/50 tracking-widest mb-2">PROJECTED GROWTH</p>
                <p className="font-display text-3xl font-light mb-1">USD 1.9B</p>
                <p className="font-sans-cn text-sm text-white/70">2032 預測市場規模 (+4% CAGR)</p>
              </div>
              <div className="bg-sage text-canvas p-6">
                <p className="font-mono text-[10px] text-white/60 tracking-widest mb-2">PREMIUM SEGMENT</p>
                <p className="font-display text-3xl font-light">USD 342</p>
                <p className="font-sans-cn text-sm text-white/70 mt-1">台灣人均奢侈品支出 (East Asia #1)</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* 02 Problem Statement */}
        <motion.section
          id="problem"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <SectionHeader id="problem" label="Section 02" title="Problem Statement" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <AlertTriangle className="w-6 h-6 text-red-400" />,
                title: "高購物車放棄率",
                titleEN: "High Cart Abandonment",
                stat: "70–78%",
                desc: "全球電商平均棄購率。台灣手機端高達 80.2%。主因：不透明的額外費用（39%）、複雜結帳流程（18%）與安全疑慮（19%）。",
                source: "Baymard Institute 2025",
              },
              {
                icon: <Users className="w-6 h-6 text-amber-500" />,
                title: "決策疲勞",
                titleEN: "Decision Fatigue",
                stat: "78%",
                desc: "受訪用戶表示在現有家居電商平台感受到「選品過多無所適從」的認知超載。現行平台缺乏策展邏輯與情感引導。",
                source: "ZenSelect Primary Research N=50+",
              },
              {
                icon: <Activity className="w-6 h-6 text-blue-500" />,
                title: "品質信任感缺失",
                titleEN: "Trust Deficit",
                stat: "65%",
                desc: "用戶無法從現有電商的商品圖判斷材質與做工品質。視覺故事不足導致高單價商品轉換率偏低。",
                source: "ZenSelect User Interviews",
              },
              {
                icon: <Smartphone className="w-6 h-6 text-purple-500" />,
                title: "手機→桌機購物斷裂",
                titleEN: "Cross-Device Journey Break",
                stat: "55.1%",
                desc: "台灣手機電商佔比已達55.1%，但用戶在手機瀏覽後往往切換桌機才敢完成高單價結帳，跨裝置體驗不連貫形成轉換漏斗漏洞。",
                source: "Statista Taiwan E-commerce 2024",
              },
              {
                icon: <Shield className="w-6 h-6 text-green-500" />,
                title: "永續資訊透明度不足",
                titleEN: "Sustainability Opacity",
                stat: "82%",
                desc: "受訪者優先選擇永續材質，但市場上大多數平台缺乏可信的產品溯源資訊，形成「漂綠」疑慮，尤其影響 Eco-conscious 消費者。",
                source: "ZenSelect Survey + APAC Bain & Co.",
              },
              {
                icon: <Star className="w-6 h-6 text-cedar" />,
                title: "在地品牌曝光不足",
                titleEN: "Local Brand Discovery Gap",
                stat: "6.25M",
                desc: "Pinkoi 的成功驗證台灣本地設計師市場潛力。但現有平台視覺過雜、品質參差，缺乏統一高端策展視覺語彙。",
                source: "Pinkoi / Crunchbase 2024",
              },
            ].map((prob, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white/60 border border-ink/5 p-7 hover:border-cedar/30 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  {prob.icon}
                  <div>
                    <h4 className="font-sans-cn font-bold text-base">{prob.title}</h4>
                    <p className="font-mono text-[9px] text-ink/40 tracking-wider uppercase">{prob.titleEN}</p>
                  </div>
                </div>
                <p className="font-display text-3xl font-light text-cedar mb-3">{prob.stat}</p>
                <p className="font-sans-cn text-sm text-ink/70 leading-relaxed mb-4">{prob.desc}</p>
                <p className="font-mono text-[9px] text-ink/30 border-t border-ink/5 pt-3">Source: {prob.source}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 03 Market Opportunity */}
        <motion.section
          id="market"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <SectionHeader id="market" label="Section 03" title="Market Opportunity" />
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeUp} className="bg-white/60 border border-ink/5 p-8">
              <p className="font-mono text-xs text-cedar font-bold tracking-widest mb-6">TAIWAN HOME MARKET</p>
              <div className="space-y-4">
                {[
                  { label: "家居市場規模 (2024)", value: `USD ${MARKET_DATA.taiwanFurnitureMarket2024}B`, note: "Mordor Intelligence" },
                  { label: "預測市場規模 (2032)", value: `USD ${MARKET_DATA.taiwanFurnitureMarket2032}B`, note: "CAGR 4%" },
                  { label: "電商市場規模 (2024)", value: `NTD 653B (USD ${MARKET_DATA.taiwanEcommerce2024USD}B)`, note: "Statista" },
                  { label: "電商預測成長 (2025)", value: `+${MARKET_DATA.taiwanEcommerceGrowth2025}% YoY`, note: "US Trade.gov" },
                  { label: "奢侈品市場 (Taiwan)", value: `USD ${MARKET_DATA.taiwanLuxuryMarket}B`, note: "Euromonitor" },
                  { label: "人均奢侈品消費", value: `USD ${MARKET_DATA.taiwanLuxuryPerCapita}/person`, note: "East Asia #1" },
                  { label: "新屋竣工 H1 2024", value: `${MARKET_DATA.newHousingUnitsH12024.toLocaleString()} units`, note: "5-year high" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-start py-3 border-b border-ink/5 last:border-b-0">
                    <div>
                      <p className="font-sans-cn text-sm font-medium">{item.label}</p>
                      <p className="font-mono text-[9px] text-ink/30">{item.note}</p>
                    </div>
                    <p className="font-mono text-sm font-bold text-cedar">{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-6">
              <div className="bg-ink text-canvas p-8">
                <p className="font-mono text-xs text-cedar font-bold tracking-widest mb-6">TARGET SEGMENT: HENRYs</p>
                <p className="font-sans-cn text-base text-white/70 leading-relaxed mb-4">
                  <strong className="text-white">High Earners, Not Rich Yet</strong> — 台灣 25–42 歲、在半導體、科技與金融業工作的新中產階級。月收入 NT$40,000+，追求 CP 值與品牌意義並重的消費體驗。
                </p>
                <div className="space-y-3 font-mono text-xs">
                  {[
                    "偏好日本、北歐設計美學",
                    "比傳統奢侈品消費者更注重 CP 值",
                    "受 IG / Pinterest 視覺文化驅動",
                    "具備強烈永續消費意識",
                    "居住 25–30 坪都市小坪數空間",
                  ].map((trait, i) => (
                    <div key={i} className="flex items-center gap-2 text-white/70">
                      <CheckCircle2 className="w-3 h-3 text-cedar shrink-0" />
                      {trait}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-cedar/10 border border-cedar/20 p-6">
                <p className="font-mono text-xs text-cedar font-bold tracking-widest mb-3">COMPETITIVE WINDOW</p>
                <p className="font-sans-cn text-sm text-ink/80 leading-relaxed">
                  MUJI（70 家實體店，缺乏情感深度）與 Pinkoi（6.25M 會員，視覺過雜）各佔市場一角，但尚無品牌能同時提供「嚴格策展 + 深度職人敘事 + 流暢本地化電商體驗」——這正是 ZenSelect 的戰略空間。
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* 04 Target Users */}
        <motion.section
          id="users"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <SectionHeader id="users" label="Section 04" title="Target Users & Segments" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Sofia", age: 35, role: "品牌行銷 Manager", income: "NT$85,000/mo",
                needs: ["嚴格策展降低決策疲勞", "高質感情境圖傳遞材質感", "明確的品牌美學一致性"],
                painPoints: ["選品太多不知搭配", "數位圖無法展現材質", "時間稀缺、不容錯誤"],
                color: "#8B7355",
              },
              {
                name: "Danny", age: 28, role: "軟體工程師", income: "NT$55,000/mo",
                needs: ["情境示範圖建立信心", "合理預算的品味搭配建議", "清晰的尺寸與材質規格"],
                painPoints: ["美感搭配缺乏信心", "預算有限怕買錯", "依賴 YouTube 比價研究"],
                color: "#5C8BC7",
              },
              {
                name: "Mei", age: 32, role: "瑜珈老師", income: "NT$70,000/mo",
                needs: ["可信的永續溯源資訊", "在地職人工藝透明度", "減塑 & 環保包裝"],
                painPoints: ["難尋環保兼具美感的平台", "漂綠資訊難辨真偽", "資訊過於碎片化"],
                color: "#5A8A5A",
              },
            ].map((persona, i) => (
              <motion.div
                key={persona.name}
                variants={fadeUp}
                className="border-t-4 bg-white/60 border border-ink/5 p-7"
                style={{ borderTopColor: persona.color }}
              >
                <h3 className="font-display text-2xl font-light mb-1" style={{ color: persona.color }}>
                  {persona.name}, {persona.age}
                </h3>
                <p className="font-mono text-[10px] text-ink/40 tracking-wider uppercase mb-1">{persona.role}</p>
                <p className="font-mono text-xs text-cedar mb-5">{persona.income}</p>

                <div className="space-y-4">
                  <div>
                    <p className="font-mono text-[10px] text-ink/40 tracking-widest uppercase mb-2">核心需求</p>
                    {persona.needs.map((n, j) => (
                      <div key={j} className="flex items-start gap-2 mb-2">
                        <CheckCircle2 className="w-3 h-3 mt-0.5 shrink-0" style={{ color: persona.color }} />
                        <p className="font-sans-cn text-xs text-ink/80">{n}</p>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-ink/5 pt-4">
                    <p className="font-mono text-[10px] text-ink/40 tracking-widest uppercase mb-2">Pain Points</p>
                    {persona.painPoints.map((p, j) => (
                      <div key={j} className="flex items-start gap-2 mb-2">
                        <span className="text-red-400 text-xs mt-0.5 shrink-0">✕</span>
                        <p className="font-sans-cn text-xs text-ink/70">{p}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 05 Goals & Success Metrics */}
        <motion.section
          id="goals"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <SectionHeader id="goals" label="Section 05" title="Goals & Success Metrics" />
          <div className="overflow-x-auto">
            <table className="w-full font-mono text-xs border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-ink text-canvas">
                  <th className="text-left p-4 font-bold tracking-widest border-r border-white/10">目標類別</th>
                  <th className="text-left p-4 font-bold tracking-widest border-r border-white/10">指標 KPI</th>
                  <th className="text-center p-4 font-bold tracking-widest border-r border-white/10">基準 Baseline</th>
                  <th className="text-center p-4 font-bold tracking-widest border-r border-white/10">業界均值</th>
                  <th className="text-center p-4 font-bold tracking-widest text-cedar">目標 Target</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { cat: "UX 體驗", kpi: "Task Completion Rate", baseline: "72%", avg: "78%", target: "90%", catColor: "#8B7355" },
                  { cat: "UX 體驗", kpi: "SUS Score", baseline: "71/100", avg: "68/100", target: "85/100", catColor: "#8B7355" },
                  { cat: "UX 體驗", kpi: "Avg. Time-to-Item", baseline: "2.1 min", avg: "2.5 min", target: "< 1.5 min", catColor: "#8B7355" },
                  { cat: "商業轉換", kpi: "Cart Abandonment Rate", baseline: "84%", avg: "70–78%", target: "< 60%", catColor: "#5C8BC7" },
                  { cat: "商業轉換", kpi: "Add-to-Cart Rate", baseline: "5.2%", avg: "3–4%", target: "10%", catColor: "#5C8BC7" },
                  { cat: "商業轉換", kpi: "Checkout Completion", baseline: "42%", avg: "55%", target: "68%", catColor: "#5C8BC7" },
                  { cat: "用戶留存", kpi: "Return Visit Rate", baseline: "21%", avg: "25–30%", target: "35%", catColor: "#5A8A5A" },
                  { cat: "品牌感知", kpi: "5s Brand Recognition", baseline: "—", avg: "60%", target: "72%", catColor: "#E57373" },
                  { cat: "品牌感知", kpi: "Trust/Calm Association", baseline: "—", avg: "65%", target: "81%", catColor: "#E57373" },
                  { cat: "永續指標", kpi: "Eco-Certified Products", baseline: "0%", avg: "N/A", target: "80% 商品溯源標章", catColor: "#5A8A5A" },
                ].map((row, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className={i % 2 === 0 ? "bg-white/60" : "bg-canvas/40"}
                  >
                    <td className="p-4 border-r border-ink/5">
                      <span className="font-bold text-[10px] px-2 py-1 tracking-widest" style={{ color: row.catColor, backgroundColor: row.catColor + "15" }}>
                        {row.cat}
                      </span>
                    </td>
                    <td className="p-4 border-r border-ink/5 font-sans-cn text-sm text-ink/80 font-medium">{row.kpi}</td>
                    <td className="p-4 border-r border-ink/5 text-center text-ink/50">{row.baseline}</td>
                    <td className="p-4 border-r border-ink/5 text-center text-ink/60">{row.avg}</td>
                    <td className="p-4 text-center font-bold text-cedar">{row.target}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-mono text-[9px] text-ink/30 mt-3">
            Sources: Baymard Institute · MeasuringU SUS Benchmark · ZenSelect Usability Testing · Industry Benchmarks 2024–2026
          </p>
        </motion.section>

        {/* 06 Feature Requirements MoSCoW */}
        <motion.section
          id="features"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <SectionHeader id="features" label="Section 06" title="Feature Requirements (MoSCoW)" />
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div variants={fadeUp}>
              <MoSCoWRow
                label="MUST HAVE — 核心必備"
                color="#E57373"
                items={[
                  "策展首頁：精選 12–18 件以下的嚴格選品，避免選擇過載",
                  "雙軸心導覽：水平「空間 Shop by Room」× 垂直「職人故事 Artisan Stories」",
                  "職人故事頁：每件商品附帶生產者訪談影片與材質溯源資訊",
                  "一頁式手風琴結帳 (Progressive Disclosure Form)，最多 12–14 個表單欄位",
                  "多元行動支付：LINE Pay、街口、Apple Pay、信用卡分期",
                  "永續標章系統：材質來源、環保認證、減塑包裝資訊前置顯示",
                  "高解析度材質特寫（Micro-texture 攝影）與多角度 360° 商品圖",
                  "RWD 跨裝置設計（Mobile-first），WCAG AA 無障礙規範",
                ]}
              />
              <MoSCoWRow
                label="SHOULD HAVE — 應有功能"
                color="#FFB74D"
                items={[
                  "跨裝置購物車同步（手機瀏覽 → 桌機繼續購物）",
                  "「我的空間」收藏板：支援用戶儲存並分享搭配組合",
                  "智慧搜尋：按材質、顏色、風格、尺寸多維篩選",
                  "Email 棄購車追蹤系統（預期開信率 45%+）",
                  "會員點數 & 永續積分回饋機制",
                  "空間搭配推薦（基於已瀏覽商品的 Rule-based 推薦）",
                ]}
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <MoSCoWRow
                label="COULD HAVE — 可選功能"
                color="#AED581"
                items={[
                  "AR 虛擬試放家具（需手機 ARKit/ARCore 支援）",
                  "職人直播選品活動（限量商品首發直播）",
                  "訂閱制「每季選品盒」服務",
                  "社群分享功能（IG 友善的空間美照格式）",
                  "在地設計師招募計畫頁面",
                ]}
              />
              <MoSCoWRow
                label="WON'T HAVE (v1) — 本版不做"
                color="#B0BEC5"
                items={[
                  "自建倉儲物流系統（v1 使用第三方物流合作夥伴）",
                  "開放式設計師平台（v1 採封閉策展模式）",
                  "即時客服 AI 聊天機器人（v2 規劃）",
                  "國際版多語系（v1 專注台灣市場）",
                ]}
              />
            </motion.div>
          </div>
        </motion.section>

        {/* 07 Non-Functional Requirements */}
        <motion.section
          id="nfr"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <SectionHeader id="nfr" label="Section 07" title="Non-Functional Requirements" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: <Activity className="w-5 h-5 text-cedar" />,
                title: "Performance",
                items: [
                  "LCP (Largest Contentful Paint) < 2.5s",
                  "FID (First Input Delay) < 100ms",
                  "CLS (Cumulative Layout Shift) < 0.1",
                  "商品圖 WebP 格式，Next.js Image 最佳化",
                ],
              },
              {
                icon: <Shield className="w-5 h-5 text-cedar" />,
                title: "Accessibility",
                items: [
                  "WCAG 2.1 Level AA 全面合規",
                  "鍵盤導覽完整支援",
                  "螢幕閱讀器（NVDA/VoiceOver）相容",
                  "色彩對比比率 ≥ 4.5:1 (AA) / 7:1 (AAA)",
                ],
              },
              {
                icon: <Smartphone className="w-5 h-5 text-cedar" />,
                title: "Mobile-First",
                items: [
                  "手機優先響應式設計（breakpoints: 390/768/1280px）",
                  "Touch target ≥ 44×44px（WCAG 2.5.5）",
                  "手勢操作支援（Swipe gallery、Pull-to-refresh）",
                  "PWA 離線瀏覽支援（Wishlist & 最近瀏覽）",
                ],
              },
              {
                icon: <Shield className="w-5 h-5 text-cedar" />,
                title: "Security",
                items: [
                  "HTTPS 全站強制加密",
                  "PCI DSS Level 1 支付安全規範",
                  "OWASP Top 10 漏洞防護",
                  "台灣個資法（PDPA）合規",
                ],
              },
              {
                icon: <TrendingUp className="w-5 h-5 text-cedar" />,
                title: "Scalability",
                items: [
                  "支援 10,000 同時線上用戶",
                  "商品上架量擴展至 5,000 SKU",
                  "Next.js ISR 靜態生成 + CDN 快取",
                  "Vercel / AWS 雲端彈性擴展架構",
                ],
              },
              {
                icon: <Layers className="w-5 h-5 text-cedar" />,
                title: "Design System",
                items: [
                  "ZenSelect Token-based 設計系統",
                  "元件覆蓋率目標 ≥ 95%",
                  "Figma ↔ Code 同步（Design Tokens）",
                  "671% ROI（Forrester 設計系統效益基準）",
                ],
              },
            ].map((req, i) => (
              <motion.div
                key={req.title}
                variants={fadeUp}
                className="bg-white/60 border border-ink/5 p-7 hover:border-cedar/20 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  {req.icon}
                  <h4 className="font-mono font-bold tracking-widest text-sm">{req.title}</h4>
                </div>
                <ul className="space-y-2">
                  {req.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-cedar text-xs mt-0.5">—</span>
                      <p className="font-sans-cn text-xs text-ink/70 leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 08 Design Principles */}
        <motion.section
          id="design"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <SectionHeader id="design" label="Section 08" title="Design Principles" />
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                num: "01",
                title: "台灣本土敘事 Vernacular",
                color: "#8B7355",
                principles: [
                  "每件商品必附本地職人故事（生產者姓名、地點、工法）",
                  "整合台灣在地材質（鶯歌陶、台灣檜木、苗栗竹編）",
                  "中文優先設計（Noto Sans TC 主字體）",
                  "色彩呼應台灣自然景觀（霧靄綠 #5A8A5A、檜木棕 #8B7355）",
                ],
              },
              {
                num: "02",
                title: "北歐功能架構 Scandinavian",
                color: "#5C8BC7",
                principles: [
                  "Grid-based 嚴格佈局降低認知負荷",
                  "無圓角的銳利邊緣創造工業精準感",
                  "等寬字型（JetBrains Mono）強化技術信任度",
                  "最多 3 層資訊層級，避免視覺層疊",
                ],
              },
              {
                num: "03",
                title: "東亞禪意空間 Ma (間)",
                color: "#5A8A5A",
                principles: [
                  "負空間留白率 ≥ 60%（頁面留白哲學）",
                  "動態元素最小化（無自動輪播、無彈出廣告）",
                  "每頁焦點商品 ≤ 6 件（策展嚴格度）",
                  "所有動畫緩動曲線使用 easeInOut（呼吸感）",
                ],
              },
            ].map((p, i) => (
              <motion.div
                key={p.num}
                variants={fadeUp}
                className="border-t-4 bg-ink text-canvas p-8"
                style={{ borderTopColor: p.color }}
              >
                <p className="font-mono text-xs font-bold tracking-widest mb-1" style={{ color: p.color }}>{p.num}</p>
                <h4 className="font-sans-cn font-bold text-lg mb-5">{p.title}</h4>
                <ul className="space-y-3">
                  {p.principles.map((pr, j) => (
                    <li key={j} className="flex items-start gap-2 text-white/70 text-sm font-sans-cn">
                      <span style={{ color: p.color }} className="mt-1 shrink-0">›</span>
                      {pr}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 09 Timeline */}
        <motion.section
          id="timeline"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <SectionHeader id="timeline" label="Section 09" title="Project Timeline" />
          <div className="space-y-4">
            {[
              {
                weeks: "W1–W3", phase: "研究階段", phaseEN: "DISCOVER & ANALYSIS",
                color: "#8B7355",
                deliverables: ["競品分析矩陣 (MUJI/HAY/Pinkoi/Shopee)", "50+ 用戶半結構化訪談 & 問卷", "親和圖整理 (Affinity Map, FigJam)", "市場趨勢報告（Taiwan Home Market USD 1.5B）"],
                gate: "Research Readout → Define Phase Green Light",
              },
              {
                weeks: "W4–W5", phase: "定義階段", phaseEN: "DEFINE & STRATEGY",
                color: "#5C8BC7",
                deliverables: ["3 個 Persona（Sofia/Danny/Mei）建立", "使用者旅程情感弧線 (7 觸點)", "HMW 機會矩陣（Impact × Effort 2×2）", "核心 HMW 假說確立"],
                gate: "Strategy Alignment → Design Phase Green Light",
              },
              {
                weeks: "W6–W8", phase: "設計階段", phaseEN: "DEVELOP & PROTOTYPING",
                color: "#5A8A5A",
                deliverables: ["資訊架構雙軸心設計 & Sitemap", "低保真線框圖（Wireframes, Figma）", "ZenSelect 設計系統建立（Token-based）", "設計評審 (Design Critique) & 修訂"],
                gate: "Design Review → Hi-Fi Production",
              },
              {
                weeks: "W9–W10", phase: "驗證階段", phaseEN: "VALIDATION & ITERATION",
                color: "#9575CD",
                deliverables: ["高保真互動原型 (Figma Hi-Fi)", "可用性測試 R1/R2/R3（N=12/round, Maze）", "迭代修改（3 輪）", "最終 SUS 評分 78/100 → target 85/100"],
                gate: "Usability Sign-off → Handoff",
              },
              {
                weeks: "W11–W12", phase: "交付階段", phaseEN: "DELIVER & PORTFOLIO",
                color: "#E57373",
                deliverables: ["工程交付規格 (Dev Handoff, Zeplin/Tokens)", "Case Study 撰寫 & Portfolio 上架", "ZenSelect 報告網站（Next.js + Framer Motion）", "最終成效追蹤計畫"],
                gate: "Final Delivery ✓",
                highlight: true,
              },
            ].map((phase, i) => (
              <motion.div
                key={phase.weeks}
                variants={fadeUp}
                className={`border-l-4 p-6 ${phase.highlight ? "bg-ink text-canvas" : "bg-white/60"} flex flex-col md:flex-row gap-6`}
                style={{ borderColor: phase.color }}
              >
                <div className="shrink-0 w-28">
                  <span
                    className="font-mono text-[10px] font-bold px-2 py-1 tracking-widest"
                    style={{ backgroundColor: phase.color + "20", color: phase.color }}
                  >
                    {phase.weeks}
                  </span>
                  <h4 className={`font-sans-cn font-bold text-lg mt-3 ${phase.highlight ? "text-white" : "text-ink"}`}>{phase.phase}</h4>
                  <p className="font-mono text-[8px] opacity-40 uppercase tracking-widest mt-1">{phase.phaseEN}</p>
                </div>
                <div className="flex-1 grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    {phase.deliverables.map((d, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 mt-0.5 shrink-0" style={{ color: phase.color }} />
                        <p className={`text-xs font-sans-cn leading-tight ${phase.highlight ? "text-white/70" : "text-ink/70"}`}>{d}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="md:border-l md:border-ink/10 md:pl-4 flex items-center">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-widest opacity-40 mb-1">Phase Gate</p>
                      <p className={`font-sans-cn text-sm font-medium ${phase.highlight ? "text-cedar" : "text-cedar"}`}>
                        {phase.gate}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 10 Risks */}
        <motion.section
          id="risks"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <SectionHeader id="risks" label="Section 10" title="Risks & Mitigations" />
          <div className="overflow-x-auto">
            <table className="w-full font-mono text-xs border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-ink text-canvas">
                  <th className="text-left p-4 font-bold tracking-widest border-r border-white/10">風險 Risk</th>
                  <th className="text-center p-4 font-bold tracking-widest border-r border-white/10">可能性</th>
                  <th className="text-center p-4 font-bold tracking-widest border-r border-white/10">影響</th>
                  <th className="text-left p-4 font-bold tracking-widest">緩解策略 Mitigation</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    risk: "用戶訪談樣本偏差（Sampling Bias）",
                    prob: "Medium", impact: "High",
                    mitigation: "擴大招募管道（LinkedIn + 社群 + 實體場所），確保 3 個 Persona 各至少 15 位受訪者，使用驗證性問卷（N=200+）補充定量數據",
                  },
                  {
                    risk: "手機棄購率居高不下（80.2%）",
                    prob: "High", impact: "High",
                    mitigation: "優先實施一頁式手風琴結帳；提供 Apple/Google Pay；免除強制會員註冊；手機 A/B 測試結帳流程（Maze）",
                  },
                  {
                    risk: "職人內容製作成本過高",
                    prob: "Medium", impact: "Medium",
                    mitigation: "與攝影工作室建立長期合約（分攤成本）；設計職人自助上傳模板；初期聚焦 5–8 位核心職人深度經營",
                  },
                  {
                    risk: "漂綠指控損害品牌信任",
                    prob: "Low", impact: "High",
                    mitigation: "建立第三方驗證合作（台灣永續標章、GOTS 認證）；公開供應鏈資訊；設計透明度頁面（Transparency Page）",
                  },
                  {
                    risk: "競品快速模仿策展模式",
                    prob: "Medium", impact: "Medium",
                    mitigation: "深化職人社群護城河（不可複製的關係）；持續迭代設計系統；以 IP 化內容（短片、Podcast）建立差異化",
                  },
                  {
                    risk: "設計系統維護成本",
                    prob: "Low", impact: "Medium",
                    mitigation: "採用 Design Tokens（Style Dictionary）實現設計到程式碼的自動同步；設計系統 ROI 基準 671%（Forrester）支持投資",
                  },
                ].map((row, i) => {
                  const probColor = row.prob === "High" ? "#E57373" : row.prob === "Medium" ? "#FFB74D" : "#AED581";
                  const impactColor = row.impact === "High" ? "#E57373" : row.impact === "Medium" ? "#FFB74D" : "#AED581";
                  return (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      className={i % 2 === 0 ? "bg-white/60" : "bg-canvas/40"}
                    >
                      <td className="p-4 border-r border-ink/5 font-sans-cn text-sm text-ink/80">{row.risk}</td>
                      <td className="p-4 border-r border-ink/5 text-center">
                        <span className="font-bold px-2 py-1 text-[10px] tracking-wider" style={{ color: probColor, backgroundColor: probColor + "20" }}>
                          {row.prob}
                        </span>
                      </td>
                      <td className="p-4 border-r border-ink/5 text-center">
                        <span className="font-bold px-2 py-1 text-[10px] tracking-wider" style={{ color: impactColor, backgroundColor: impactColor + "20" }}>
                          {row.impact}
                        </span>
                      </td>
                      <td className="p-4 font-sans-cn text-xs text-ink/70 leading-relaxed">{row.mitigation}</td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Sign-off */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-ink text-canvas p-12 text-center"
        >
          <p className="font-mono text-xs text-cedar tracking-widest mb-4">PRD SIGN-OFF</p>
          <p className="font-sans-cn text-2xl font-light mb-2">此文件需設計、PM、工程三方確認後方可進入開發</p>
          <p className="font-mono text-sm text-white/40">ZenSelect UX Team · v1.0 · 2026-03-08</p>
          <div className="flex justify-center gap-8 mt-10 font-mono text-[10px] text-white/30">
            <div className="text-center border border-white/10 p-4 min-w-[120px]">
              <p className="mb-6">UX Lead</p>
              <div className="border-b border-white/20 w-24 mx-auto" />
              <p className="mt-2">簽名</p>
            </div>
            <div className="text-center border border-white/10 p-4 min-w-[120px]">
              <p className="mb-6">Product Manager</p>
              <div className="border-b border-white/20 w-24 mx-auto" />
              <p className="mt-2">簽名</p>
            </div>
            <div className="text-center border border-white/10 p-4 min-w-[120px]">
              <p className="mb-6">Engineering Lead</p>
              <div className="border-b border-white/20 w-24 mx-auto" />
              <p className="mt-2">簽名</p>
            </div>
          </div>
        </motion.div>
      </main>

      <footer className="border-t border-ink/5 mt-20 p-10 bg-white/40">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center font-mono text-xs tracking-widest font-bold">
          <p className="opacity-40">© 2026 ZENSELECT STRATEGY. PRD v1.0</p>
          <a href="/" className="text-cedar hover:opacity-70 transition-opacity">← Back to Case Study Report</a>
        </div>
      </footer>
    </div>
  );
}
