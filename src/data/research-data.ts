// ============================================================
// ZenSelect Research Data — Centralized Market Intelligence
// Sources: Mordor Intelligence, Statista, Baymard, MeasuringU,
//          Crunchbase, Bain & Co., Forrester
// Last updated: 2026-03-08
// ============================================================

// --- Market Size & Growth ---
export const MARKET_DATA = {
  taiwanFurnitureMarket2024: 1.5,    // USD Billion
  taiwanFurnitureMarket2032: 1.9,    // USD Billion projected
  taiwanFurnitureCAGR: 4.0,          // % CAGR 2024–2032
  taiwanEcommerce2024NTD: 653.3,     // NTD Billion
  taiwanEcommerce2024USD: 20.9,      // USD Billion
  taiwanEcommerceGrowth2025: 7.9,    // % YoY projected
  taiwanLuxuryMarket: 8.1,           // USD Billion
  taiwanLuxuryPerCapita: 342,        // USD per person (highest in East Asia)
  newHousingUnitsH12024: 53646,      // Units (5-year high)
};

// --- Competitor Data ---
export const COMPETITOR_DATA = [
  {
    name: "ZenSelect",
    nameCN: "ZenSelect",
    tier: "Premium",
    priceTier: 5,
    storytelling: 5,
    sustainability: 5,
    uxScore: 85, // target
    targetAudience: "Urban HENRYs",
    designStyle: "Zen / Nordic",
    taiwanPresence: "Digital-first",
    keyMetric: "Target: 85 SUS",
    keyMetricValue: 85,
    highlight: true,
  },
  {
    name: "MUJI",
    nameCN: "無印良品",
    tier: "Mid-Premium",
    priceTier: 3,
    storytelling: 4,
    sustainability: 4,
    uxScore: 72,
    targetAudience: "Mass mid-market",
    designStyle: "Minimal Japanese",
    taiwanPresence: "70 stores in Taiwan",
    keyMetric: "Net profit +47% FY2025",
    keyMetricValue: 47,
    highlight: false,
  },
  {
    name: "HAY",
    nameCN: "HAY",
    tier: "Premium",
    priceTier: 4,
    storytelling: 4,
    sustainability: 4,
    uxScore: 68,
    targetAudience: "Design enthusiasts",
    designStyle: "Scandinavian",
    taiwanPresence: "Select retailers",
    keyMetric: "Niche premium segment",
    keyMetricValue: 15,
    highlight: false,
  },
  {
    name: "Bloomingville",
    nameCN: "Bloomingville",
    tier: "Premium",
    priceTier: 4,
    storytelling: 3,
    sustainability: 3,
    uxScore: 58,
    targetAudience: "Western expats",
    designStyle: "Nordic Rustic",
    taiwanPresence: "Online only",
    keyMetric: "High shipping barrier",
    keyMetricValue: 8,
    highlight: false,
  },
  {
    name: "Pinkoi",
    nameCN: "Pinkoi",
    tier: "Mid",
    priceTier: 2,
    storytelling: 3,
    sustainability: 3,
    uxScore: 71,
    targetAudience: "Young creatives",
    designStyle: "Local Artisan",
    taiwanPresence: "6.25M members",
    keyMetric: "USD 27.2M revenue",
    keyMetricValue: 27.2,
    highlight: false,
  },
  {
    name: "Shopee Home",
    nameCN: "蝦皮家居",
    tier: "Budget",
    priceTier: 1,
    storytelling: 1,
    sustainability: 1,
    uxScore: 55,
    targetAudience: "Price-conscious",
    designStyle: "Trend-driven",
    taiwanPresence: "Market dominant",
    keyMetric: "31.17M pageviews/mo",
    keyMetricValue: 31.17,
    highlight: false,
  },
];

// --- Market Trends (for bar chart) ---
export const MARKET_TRENDS = [
  { year: "2022", furnitureMarket: 1.35, sustainabilityAdoption: 43.3, mobileCommerce: 49.2 },
  { year: "2023", furnitureMarket: 1.42, sustainabilityAdoption: 43.8, mobileCommerce: 51.8 },
  { year: "2024", furnitureMarket: 1.50, sustainabilityAdoption: 44.9, mobileCommerce: 55.1 },
  { year: "2025", furnitureMarket: 1.60, sustainabilityAdoption: 46.5, mobileCommerce: 58.4 },
  { year: "2026P", furnitureMarket: 1.68, sustainabilityAdoption: 48.0, mobileCommerce: 61.2 },
  { year: "2032P", furnitureMarket: 1.90, sustainabilityAdoption: 55.0, mobileCommerce: 74.0 },
];

// --- Survey Results (N=50+) ---
export const SURVEY_RESULTS = [
  { label: "永續材質優先 (Sustainable Materials First)", labelEN: "Prioritize sustainable/natural materials", value: 82, benchmark: 44.9 },
  { label: "視覺故事影響購買 (Visual Story → Purchase)", labelEN: "Driven to purchase by brand narrative", value: 65, benchmark: null },
  { label: "購物車因模糊定價放棄 (Unclear Pricing → Abandon)", labelEN: "Abandon cart due to unclear pricing", value: 71, benchmark: 70 },
  { label: "視覺敘事不足感到挫折 (Poor Visual Storytelling)", labelEN: "Frustrated by poor visual storytelling", value: 78, benchmark: null },
  { label: "高價值品項偏好桌機 (Desktop for High-Value)", labelEN: "Prefer desktop for high-value purchases", value: 68, benchmark: null },
  { label: "主動做永續選擇 (Active Eco Choice, APAC)", labelEN: "Actively making sustainable choices (APAC benchmark)", value: 54.6, benchmark: null },
  { label: "願意為永續溢價 Gen Z", labelEN: "Gen Z willing to pay sustainability premium", value: 72, benchmark: null },
  { label: "願意為永續溢價 Millennials", labelEN: "Millennials willing to pay sustainability premium", value: 70, benchmark: null },
];

// --- Affinity Map Clusters ---
export const AFFINITY_CLUSTERS = [
  {
    id: "emotional",
    label: "情感痛點",
    labelEN: "Emotional Pain Points",
    color: "#E57373",
    bgColor: "#FFEBEE",
    borderColor: "#E57373",
    items: [
      "決策疲勞 (Decision Fatigue)",
      "選擇過多無所適從",
      "品牌信任感不足",
      "數位圖片無法傳達質感",
      "高單價帶來焦慮",
    ],
  },
  {
    id: "functional",
    label: "功能需求",
    labelEN: "Functional Needs",
    color: "#5C8BC7",
    bgColor: "#E3F2FD",
    borderColor: "#5C8BC7",
    items: [
      "清晰透明的定價資訊",
      "快速確認物流時程",
      "簡單的退換貨流程",
      "明確的尺寸與材質說明",
      "多元行動支付選項",
    ],
  },
  {
    id: "aspirational",
    label: "渴望價值",
    labelEN: "Aspirational Values",
    color: "#5A8A5A",
    bgColor: "#E8F5E9",
    borderColor: "#5A8A5A",
    items: [
      "永續 & 環保透明度",
      "台灣本地職人工藝",
      "空間美學與呼吸感",
      "在地材質溯源故事",
      "慢設計 × 品味生活",
    ],
  },
  {
    id: "behavioral",
    label: "行為模式",
    labelEN: "Behavioral Patterns",
    color: "#8B7355",
    bgColor: "#FFF8E1",
    borderColor: "#8B7355",
    items: [
      "手機瀏覽靈感 → 桌機購買",
      "IG/Pinterest 社群發現",
      "深夜衝動瀏覽高峰",
      "比價行為 (PChome/蝦皮)",
      "朋友推薦 > 廣告",
    ],
  },
];

// --- UX Benchmarks ---
export const UX_BENCHMARKS = {
  susIndustryAvg: 68,
  susGood: 80,
  susExcellent: 90,
  taskCompletionIndustryAvg: 78,  // %
  cartAbandonmentGlobal: 70.22,   // %
  cartAbandonmentMobile: 80.2,    // %
  cartAbandonmentDesktop: 70.0,   // %
  checkoutOptimizationLift: 35.26, // % improvement possible
  designSystemROI: 671,            // % (Etsy/Forrester)
  optimalCheckoutFields: 14,       // max form elements
};

// --- Usability Test Results (3 rounds) ---
export const USABILITY_RESULTS = [
  {
    metric: "Task Completion Rate",
    metricCN: "任務完成率",
    baseline: 72,
    round1: 78,
    round2: 82,
    final: 85,
    industryAvg: 78,
    target: 90,
    unit: "%",
    higherIsBetter: true,
  },
  {
    metric: "SUS Score",
    metricCN: "系統可用性分數",
    baseline: 71,
    round1: 74,
    round2: 76,
    final: 78,
    industryAvg: 68,
    target: 85,
    unit: "/100",
    higherIsBetter: true,
  },
  {
    metric: "Time-to-Item",
    metricCN: "找到目標商品時間",
    baseline: 2.1,
    round1: 1.9,
    round2: 1.6,
    final: 1.4,
    industryAvg: 2.5,
    target: 1.5,
    unit: "min",
    higherIsBetter: false,
  },
  {
    metric: "Cart Abandonment",
    metricCN: "購物車放棄率",
    baseline: 84,
    round1: 79,
    round2: 72,
    final: 62,
    industryAvg: 70,
    target: 60,
    unit: "%",
    higherIsBetter: false,
  },
  {
    metric: "Add-to-Cart Rate",
    metricCN: "加入購物車率",
    baseline: 5.2,
    round1: 6.1,
    round2: 7.4,
    final: 8.5,
    industryAvg: 3.5,
    target: 10,
    unit: "%",
    higherIsBetter: true,
  },
  {
    metric: "Return Visit Rate",
    metricCN: "回訪率",
    baseline: 21,
    round1: 25,
    round2: 28,
    final: 32,
    industryAvg: 27,
    target: 35,
    unit: "%",
    higherIsBetter: true,
  },
];

// --- Persona Data ---
export const PERSONA_DATA = [
  {
    name: "Sofia",
    age: 35,
    role: "品牌行銷 Manager",
    income: 85000,
    decisionDriver: "品牌故事 Brand Story",
    painPoint: "時間壓力 Time Pressure",
    device: "Desktop 70%",
    deviceMobile: 30,
    deviceDesktop: 70,
    purchaseFrequency: "季度 Quarterly",
    sustainabilityScore: 70,
    techSavvy: 85,
    color: "#8B7355",
  },
  {
    name: "Danny",
    age: 28,
    role: "軟體工程師",
    income: 55000,
    decisionDriver: "價值品質 Value + Quality",
    painPoint: "預算焦慮 Budget Anxiety",
    device: "Mobile 80%",
    deviceMobile: 80,
    deviceDesktop: 20,
    purchaseFrequency: "半年 Semi-annual",
    sustainabilityScore: 50,
    techSavvy: 95,
    color: "#5C8BC7",
  },
  {
    name: "Mei",
    age: 32,
    role: "瑜珈老師",
    income: 70000,
    decisionDriver: "道德溯源 Ethics + Origin",
    painPoint: "漂綠懷疑 Greenwashing",
    device: "Equal Split",
    deviceMobile: 50,
    deviceDesktop: 50,
    purchaseFrequency: "雙月 Bi-monthly",
    sustainabilityScore: 95,
    techSavvy: 65,
    color: "#5A8A5A",
  },
];

// --- Emotional Journey Points ---
export const JOURNEY_POINTS = [
  { stage: "Discovery", stageCN: "靈感觸及", sofia: 5, danny: 4, mei: 6, touchpoint: "IG / Pinterest Ad", emotion: "Neutral / Curious" },
  { stage: "Research", stageCN: "深度研究", sofia: 3, danny: 4, mei: 2, touchpoint: "Product Page Browse", emotion: "Anxious / Overwhelmed" },
  { stage: "Evaluate", stageCN: "評估比較", sofia: 5, danny: 3, mei: 4, touchpoint: "Competitor Comparison", emotion: "Skeptical" },
  { stage: "Engage", stageCN: "故事投入", sofia: 8, danny: 6, mei: 9, touchpoint: "Artisan Story Read", emotion: "Engaged / Inspired" },
  { stage: "Decide", stageCN: "決策行動", sofia: 7, danny: 6, mei: 8, touchpoint: "Add to Cart", emotion: "Confident" },
  { stage: "Purchase", stageCN: "結帳", sofia: 8, danny: 7, mei: 8, touchpoint: "Checkout Flow", emotion: "Relief" },
  { stage: "Post-Buy", stageCN: "購後體驗", sofia: 9, danny: 8, mei: 10, touchpoint: "Unboxing + Review", emotion: "Delighted" },
];

// --- HMW Statements (Impact vs Effort 2x2) ---
export const HMW_STATEMENTS = [
  { id: 1, statement: "如何透過職人故事提升高單價信任感？", impact: 9, effort: 3, quadrant: "Quick Win" },
  { id: 2, statement: "如何降低選品過多導致的決策疲勞？", impact: 9, effort: 5, quadrant: "Strategic" },
  { id: 3, statement: "如何用情境圖傳遞數位無法觸及的材質感？", impact: 8, effort: 6, quadrant: "Strategic" },
  { id: 4, statement: "如何設計一鍵結帳減少放棄率？", impact: 8, effort: 4, quadrant: "Quick Win" },
  { id: 5, statement: "如何呈現永續溯源讓環保用戶安心？", impact: 7, effort: 3, quadrant: "Quick Win" },
  { id: 6, statement: "如何建立雙軸心導覽同時滿足場景與品牌？", impact: 8, effort: 7, quadrant: "Strategic" },
  { id: 7, statement: "如何設計手機→桌機跨裝置購物流？", impact: 6, effort: 8, quadrant: "Long-term" },
  { id: 8, statement: "如何運用 AR 讓用戶在家預覽家具？", impact: 5, effort: 9, quadrant: "Long-term" },
];

// --- Design System Components ---
export const DESIGN_SYSTEM_COMPONENTS = [
  { component: "Color Tokens", coverage: 100, wcagAA: true, usage: "All" },
  { component: "Typography Scale", coverage: 100, wcagAA: true, usage: "All" },
  { component: "Spacing System", coverage: 100, wcagAA: true, usage: "All" },
  { component: "Button Variants", coverage: 95, wcagAA: true, usage: "CTAs, Forms" },
  { component: "Card Components", coverage: 90, wcagAA: true, usage: "Product, Persona" },
  { component: "Accordion / Expand", coverage: 85, wcagAA: true, usage: "Competitor, FAQ" },
  { component: "Progress / Gauge", coverage: 80, wcagAA: true, usage: "KPI Metrics" },
  { component: "Form Elements", coverage: 75, wcagAA: true, usage: "Checkout, Search" },
  { component: "Navigation", coverage: 95, wcagAA: true, usage: "Header, Breadcrumb" },
  { component: "Icon System", coverage: 100, wcagAA: true, usage: "Lucide React" },
  { component: "Badge / Tag", coverage: 90, wcagAA: true, usage: "Product Labels" },
  { component: "Animation Tokens", coverage: 70, wcagAA: true, usage: "Framer Motion" },
];
