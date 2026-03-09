type Lang = "en" | "zh";

const translations: Record<string, { en: string; zh: string }> = {
  // Header & Nav
  "nav.brand": { en: "ZenSelect // Expert View", zh: "ZenSelect // 專家視角" },
  "nav.subtitle": { en: "Analysis & Strategy Report v2.0", zh: "分析與策略報告 v2.0" },
  "nav.flow": { en: "00. Flow", zh: "00. 流程" },
  "nav.research": { en: "01. Research", zh: "01. 調研" },
  "nav.personas": { en: "02. Personas", zh: "02. 人物誌" },
  "nav.ia": { en: "03. IA", zh: "03. 架構" },
  "nav.metrics": { en: "04. Metrics", zh: "04. 成效" },
  "nav.expertReview": { en: "Expert Review Interface", zh: "專家評鑑介面" },

  // Hero
  "hero.tag": { en: "EXPERT_CASE_STUDY_v2.0 // ARTISAN_LOGIC", zh: "EXPERT_CASE_STUDY_v2.0 // ARTISAN_LOGIC" },
  "hero.brandDna": { en: "Brand DNA", zh: "品牌 DNA" },
  "hero.coreMethod": { en: "Core Methodology", zh: "核心方法論" },
  "hero.marketTarget": { en: "Market Target", zh: "市場目標" },
  "hero.philosophy": { en: "Philosophy Integration", zh: "哲學整合" },

  // Process
  "process.section": { en: "Section 00 // Project Timeline & Deliverables", zh: "Section 00 // 專案執行時程與交付" },
  "process.discover": { en: "Discover", zh: "Discover" },
  "process.define": { en: "Define", zh: "Define" },
  "process.develop": { en: "Develop", zh: "Develop" },
  "process.validate": { en: "Validate", zh: "Validate" },
  "process.deliver": { en: "Deliver", zh: "Deliver" },

  // Discovery
  "discovery.section": { en: "Section 01 // Scientific User Research", zh: "Section 01 // 科學化使用者調研" },
  "discovery.protocol": { en: "Research Protocol & Insights", zh: "Research Protocol & Insights" },
  "discovery.growth": { en: "Comparative Growth Analysis", zh: "Comparative Growth Analysis" },
  "discovery.matrix": { en: "Competitor Intelligence Matrix v3.0", zh: "Competitor Intelligence Matrix v3.0" },
  "discovery.clickReveal": { en: "Click rows to reveal strategy", zh: "點擊列展開策略" },
  "discovery.materialFirst": { en: "Material Over Brand", zh: "Material Over Brand" },
  "discovery.socialDiscovery": { en: "Social Discovery", zh: "Social Discovery" },

  // Persona
  "persona.section": { en: "Section 02 // User Definition & Core Assumptions", zh: "Section 02 // 使用者定義與核心假設" },
  "persona.storyAffinity": { en: "Story Affinity", zh: "Story Affinity" },
  "persona.frustrations": { en: "Key Frustrations", zh: "Key Frustrations" },
  "persona.motivations": { en: "Core Motivations", zh: "Core Motivations" },

  // Core Hypothesis
  "hypothesis.label": { en: "CORE HYPOTHESIS // HOW MIGHT WE", zh: "CORE HYPOTHESIS // HOW MIGHT WE" },
  "hypothesis.explore": { en: "Explore Solution", zh: "探索解決方案" },

  // Architecture
  "arch.section": { en: "Section 03 // Information Architecture & Emotion Journey", zh: "Section 03 // 資訊架構與情緒旅程" },
  "arch.swimlane": { en: "Emotional User Journey Swimlane", zh: "Emotional User Journey Swimlane" },
  "arch.revisionStatus": { en: "Revision Status", zh: "版本狀態" },

  // Outcome
  "outcome.section": { en: "Section 04 // Experiment Validation & Business Impact", zh: "Section 04 // 實驗驗證與商業成效" },
  "outcome.verification": { en: "Scientific Verification", zh: "Scientific Verification" },
  "outcome.sampleSize": { en: "Sample Size", zh: "Sample Size" },
  "outcome.confidence": { en: "Confidence", zh: "Confidence" },
  "outcome.cartAbandonment": { en: "Cart Abandonment", zh: "Cart Abandonment" },

  // Portfolio
  "portfolio.section": { en: "Section 05 // Portfolio Presentation Strategy & Tools", zh: "Section 05 // 作品集呈現策略與工具" },
  "portfolio.checklist": { en: "Portfolio Checklist", zh: "Portfolio Checklist" },
  "portfolio.techStack": { en: "Technical Stack", zh: "Technical Stack" },
  "portfolio.viewPrototype": { en: "View Prototype", zh: "查看原型" },

  // Footer
  "footer.backToTop": { en: "Back to Top", zh: "回到頂端" },

  // Charts
  "chart.emotionLevel": { en: "Emotion Level", zh: "情緒強度" },
  "chart.journeyPhase": { en: "User Journey Phase", zh: "使用者旅程階段" },
  "chart.high": { en: "High", zh: "高" },
  "chart.medium": { en: "Medium", zh: "中" },
  "chart.low": { en: "Low", zh: "低" },
};

export function t(key: string, lang: Lang): string {
  return translations[key]?.[lang] ?? key;
}
