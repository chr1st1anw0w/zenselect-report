"use client";

import GlowOrb from "@/components/ui/GlowOrb";
import { motion, Variants } from "framer-motion";
import {
  Target,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Users,
  ZapIcon
} from "lucide-react";

// Import Charts
import { CompetitorMatrix } from "@/components/charts/CompetitorMatrix";
import { PersonaMatrix } from "@/components/charts/PersonaMatrix";
import { EmotionalJourneyChart } from "@/components/charts/EmotionalJourneyChart";
import { SUSGauge } from "@/components/charts/SUSGauge";

// --- Framer Motion Shared Variants ---
const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.45, 0.32, 0.9] } },
};

// --- Sub-components ---
const SectionHeader = ({ id, label, title }: { id: string; label: string; title: string }) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-2">
      <div className="w-10 h-[1px] bg-accent/30" />
      <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-accent uppercase">
        {label}
      </span>
    </div>
    <h2 id={id} className="text-4xl font-light tracking-tight text-ink font-display">
      {title}
    </h2>
  </div>
);

const MetricBox = ({ label, value, unit, trend }: { label: string; value: string; unit?: string; trend?: string }) => (
  <div className="glass-card p-6 border-l-4 border-accent">
    <p className="font-mono text-[10px] uppercase tracking-widest text-ink/40 mb-2">{label}</p>
    <div className="flex items-baseline gap-1">
      <span className="text-3xl font-light text-ink">{value}</span>
      {unit && <span className="text-xs text-ink/40 font-mono">{unit}</span>}
    </div>
    {trend && (
      <p className="mt-2 text-[10px] font-bold text-accent font-mono">{trend}</p>
    )}
  </div>
);

export default function PRDPage() {
  return (
    <div className="min-h-screen bg-sand text-ink selection:bg-accent selection:text-white font-sans-cn">
      <GlowOrb className="fixed -top-24 -right-24 opacity-30 pointer-events-none" />
      <GlowOrb className="fixed -bottom-24 -left-24 opacity-20 pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card rounded-none border-t-0 border-x-0 bg-white/40 px-6 py-4 flex justify-between items-center backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-ink rounded-full flex items-center justify-center">
            <span className="text-white font-mono text-xs font-bold">ZS</span>
          </div>
          <span className="font-display font-medium tracking-tighter text-lg">ZenSelect PRD</span>
        </div>
        <div className="hidden md:flex gap-8 font-mono text-[10px] uppercase tracking-widest font-bold text-ink/60">
          <a href="#summary" className="hover:text-accent transition-colors">Summary</a>
          <a href="#research" className="hover:text-accent transition-colors">Research</a>
          <a href="#persona" className="hover:text-accent transition-colors">Persona</a>
          <a href="#strategy" className="hover:text-accent transition-colors">Strategy</a>
          <a href="#risks" className="hover:text-accent transition-colors">Risks</a>
        </div>
        <PrimaryButton label="Sign-off Document" onClick={() => {}} />
      </nav>

      <main className="max-w-screen-xl mx-auto px-6 pt-32 pb-24">
        {/* Hero Section */}
        <motion.section
          variants={container}
          initial="hidden"
          animate="visible"
          className="mb-32"
        >
          <motion.div variants={fadeUp} className="max-w-3xl">
            <h1 className="text-6xl md:text-8xl font-light tracking-tighter leading-[0.9] mb-8 font-display">
              Product Requirements <br />
              <span className="text-accent italic font-serif">Document</span>
            </h1>
            <div className="flex flex-wrap gap-4 items-center">
              <span className="px-3 py-1 bg-ink text-white font-mono text-[10px] tracking-widest uppercase">
                v1.0.4 Release
              </span>
              <span className="text-ink/40 font-mono text-[10px] tracking-widest">
                LAST UPDATED: 2026-03-08
              </span>
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-sand bg-stone" />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* 01 Project Summary */}
        <motion.section
          id="summary"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-40"
        >
          <SectionHeader id="summary" label="Section 01" title="Executive Summary" />
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-xl font-light leading-relaxed text-ink/80">
                ZenSelect 致力於解決高階家居電商中「信任建立」與「購買決策」的斷點。
                透過職人故事敘事與數據驅動的設計系統，打造從觸點到轉化的全鏈路奢華體驗。
              </p>
              <div className="grid grid-cols-2 gap-4">
                <MetricBox label="目標轉化提升" value="+35" unit="%" trend="Target YoY" />
                <MetricBox label="SUS 評分目標" value="85" unit="/100" trend="Current: 78" />
              </div>
            </div>
            <div className="glass-card p-8 space-y-4">
              <h4 className="font-display font-medium text-lg mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-accent" />
                Core Value Propositions
              </h4>
              <ul className="space-y-4">
                {[
                  { t: "Authenticity", d: "透明的職人供應鏈與故事化包裝" },
                  { t: "Precision", d: "基於 Persona 的高度個人化推薦路徑" },
                  { t: "Seamlessness", d: "一頁式無阻礙結帳與頂級售後關懷" },
                ].map((item) => (
                  <li key={item.t} className="flex gap-4">
                    <span className="font-mono text-[10px] text-accent font-bold mt-1">[{item.t}]</span>
                    <p className="text-sm text-ink/60">{item.d}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* 02 Market & Research */}
        <motion.section
          id="research"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-40"
        >
          <SectionHeader id="research" label="Section 02" title="Market Insight & Benchmarking" />
          <div className="grid gap-12">
            <div className="glass-card p-0 overflow-hidden">
              <div className="bg-ink p-4 flex justify-between items-center">
                <h3 className="text-white font-mono text-[10px] tracking-widest uppercase">Competitor Comparison Matrix</h3>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                </div>
              </div>
              <CompetitorMatrix />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-card p-6">
                <TrendingUp className="w-6 h-6 text-accent mb-4" />
                <h4 className="font-bold mb-2">Market Opportunity</h4>
                <p className="text-xs text-ink/60 leading-relaxed">
                  台灣高階家居電商年產值達 15 億美金，其中「故事溢價」轉換率較傳統模式高出 2.4 倍。
                </p>
              </div>
              <div className="glass-card p-6">
                <Users className="w-6 h-6 text-accent mb-4" />
                <h4 className="font-bold mb-2">User Behavior</h4>
                <p className="text-xs text-ink/60 leading-relaxed">
                  目標受訪者（N=50）中，84% 表示「產品背後的職人資訊」會直接影響其對高單價商品的信任感。
                </p>
              </div>
              <div className="glass-card p-6">
                <ZapIcon className="w-6 h-6 text-accent mb-4" />
                <h4 className="font-bold mb-2">Technical Gap</h4>
                <p className="text-xs text-ink/60 leading-relaxed">
                  現有競品在手機端的結帳流程平均耗時 4.2 分鐘，ZenSelect 目標壓縮至 1.8 分鐘以內。
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 03 Persona & Journey */}
        <motion.section
          id="persona"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-40"
        >
          <SectionHeader id="persona" label="Section 03" title="Target Persona & Emotional Arc" />
          <div className="grid gap-12">
            <div className="glass-card p-8">
              <PersonaMatrix />
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="glass-card p-8">
                <EmotionalJourneyChart />
              </div>
              <div className="space-y-8">
                <div className="border-l-4 border-accent pl-6">
                  <h4 className="text-lg font-bold mb-2 font-display italic">The &quot;Aha!&quot; Moment</h4>
                  <p className="text-sm text-ink/70 leading-relaxed">
                    當 Persona (Mei) 在職人頁面看到「手工打磨過程」的 15 秒短片時，其信任指數從 4 激增至 9，這是我們全站導購的核心策略。
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card p-4">
                    <p className="text-[10px] font-mono opacity-40 uppercase mb-2">Pain Point</p>
                    <p className="text-xs font-bold">產品資訊碎片化</p>
                  </div>
                  <div className="glass-card p-4">
                    <p className="text-[10px] font-mono opacity-40 uppercase mb-2">Solution</p>
                    <p className="text-xs font-bold">沉浸式職人故事</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 04 Strategy & Roadmap */}
        <motion.section
          id="strategy"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-40"
        >
          <SectionHeader id="strategy" label="Section 04" title="Strategic Roadmap" />
          <div className="space-y-6">
            {[
              {
                weeks: "W1–W3", phase: "研究階段", phaseEN: "DISCOVER & ANALYSIS",
                color: "#FF7A1A",
                deliverables: ["競品分析矩陣 (MUJI/HAY/Pinkoi/Shopee)", "50+ 用戶半結構化訪談 & 問卷", "親和圖整理 (Affinity Map)", "市場趨勢報告"],
                gate: "Research Readout → Define Phase Green Light",
              },
              {
                weeks: "W4–W5", phase: "定義階段", phaseEN: "DEFINE & STRATEGY",
                color: "#E6DED3",
                deliverables: ["3 個 Persona（Sofia/Danny/Mei）建立", "使用者旅程情感弧線 (7 觸點)", "HMW 機會矩陣", "核心 HMW 假說確立"],
                gate: "Strategy Alignment → Design Phase Green Light",
              },
              {
                weeks: "W6–W8", phase: "設計階段", phaseEN: "DEVELOP & PROTOTYPING",
                color: "#D9CFC4",
                deliverables: ["資訊架構雙軸心設計", "低保真線框圖", "ZenSelect 設計系統建立", "設計評審 & 修訂"],
                gate: "Design Review → Hi-Fi Production",
              },
              {
                weeks: "W9–W10", phase: "驗證階段", phaseEN: "VALIDATION & ITERATION",
                color: "#1E1A16",
                deliverables: ["高保真互動原型", "可用性測試 R1/R2/R3", "迭代修改", "最終 SUS 評分 78/100 → target 85/100"],
                gate: "Usability Sign-off → Handoff",
                highlight: true,
              },
            ].map((phase) => (
              <motion.div
                key={phase.weeks}
                variants={fadeUp}
                className={`glass-card p-6 ${phase.highlight ? "bg-ink text-sand" : ""} flex flex-col md:flex-row gap-6`}
                style={{ borderLeft: `4px solid ${phase.color}` }}
              >
                <div className="shrink-0 w-28">
                  <span
                    className="font-mono text-[10px] font-bold px-2 py-1 tracking-widest bg-accent/10 text-accent"
                  >
                    {phase.weeks}
                  </span>
                  <h4 className={`font-display font-bold text-lg mt-3 ${phase.highlight ? "text-white" : "text-ink"}`}>{phase.phase}</h4>
                  <p className="font-mono text-[8px] opacity-40 uppercase tracking-widest mt-1">{phase.phaseEN}</p>
                </div>
                <div className="flex-1 grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    {phase.deliverables.map((d, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 mt-0.5 shrink-0 text-accent" />
                        <p className={`text-xs leading-tight ${phase.highlight ? "text-sand/70" : "text-ink/70"}`}>{d}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="md:border-l md:border-black/5 md:pl-4 flex items-center">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-widest opacity-40 mb-1">Phase Gate</p>
                      <p className={`text-sm font-medium text-accent`}>
                        {phase.gate}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 05 Risks & Validation */}
        <motion.section
          id="risks"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-40"
        >
          <SectionHeader id="risks" label="Section 05" title="Validation & Risks" />
          <div className="grid md:grid-cols-2 gap-12 items-start">
             <div className="glass-card p-8">
               <h4 className="font-display font-medium text-lg mb-6">Usability Benchmark (SUS)</h4>
               <SUSGauge score={78} />
             </div>
             <div className="space-y-4">
                {[
                  { r: "Sampling Bias", m: "擴大招募管道，確保 3 個 Persona 各至少 15 位受訪者" },
                  { r: "Mobile Bounce", m: "優先實施一頁式結帳；提供 Apple/Google Pay；免除強制註冊" },
                  { r: "Cost Barrier", m: "與攝影工作室長期合約；初期聚焦 5–8 位核心職人" },
                ].map((risk, i) => (
                  <div key={i} className="glass-card p-4 border-l-2 border-red-400/50">
                    <p className="text-[10px] font-mono text-red-500 uppercase mb-1">Risk: {risk.r}</p>
                    <p className="text-xs text-ink/70 font-medium">{risk.m}</p>
                  </div>
                ))}
             </div>
          </div>
        </motion.section>

        {/* Sign-off */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card bg-ink text-sand p-12 text-center overflow-hidden relative"
        >
          <GlowOrb className="-top-24 -right-24 opacity-40" />
          <p className="font-mono text-xs text-accent tracking-widest mb-4">PRD SIGN-OFF</p>
          <p className="text-2xl font-light mb-2 font-display">此文件需設計、PM、工程三方確認後方可進入開發</p>
          <p className="font-mono text-sm text-sand/40">ZenSelect UX Team · v1.0.4 · 2026-03-08</p>

          <div className="flex flex-wrap justify-center gap-8 mt-10">
            <div className="glass-card bg-white/5 p-6 min-w-[160px] border-white/10">
              <p className="text-[10px] font-mono opacity-40 mb-4 uppercase">UX Lead</p>
              <div className="h-[1px] bg-white/20 w-full mb-2" />
              <p className="text-[10px] opacity-40">Signature</p>
            </div>
            <div className="glass-card bg-white/5 p-6 min-w-[160px] border-white/10">
              <p className="text-[10px] font-mono opacity-40 mb-4 uppercase">Product Manager</p>
              <div className="h-[1px] bg-white/20 w-full mb-2" />
              <p className="text-[10px] opacity-40">Signature</p>
            </div>
            <div className="glass-card bg-white/5 p-6 min-w-[160px] border-white/10">
              <p className="text-[10px] font-mono opacity-40 mb-4 uppercase">Engineering Lead</p>
              <div className="h-[1px] bg-white/20 w-full mb-2" />
              <p className="text-[10px] opacity-40">Signature</p>
            </div>
          </div>
        </motion.div>
      </main>

      <footer className="mt-20 p-12 glass-card rounded-none border-x-0 border-b-0 bg-stone/20">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-[10px] tracking-widest">
          <p className="opacity-40">© 2026 ZENSELECT STRATEGY. PRD v1.0.4 - GLASSMORPHISM EDITION</p>
          <a href="/" className="text-accent hover:opacity-70 transition-opacity flex items-center gap-2">
            <ArrowRight className="w-3 h-3 rotate-180" /> BACK TO PORTAL
          </a>
        </div>
      </footer>
    </div>
  );
}

// Reusable Components used in PRD
function PrimaryButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="primary-button text-[10px] font-mono tracking-widest uppercase font-bold"
    >
      {label}
    </button>
  );
}
