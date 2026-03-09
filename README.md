
# ZenSelect 報告系統 // Artisan Logic v2.0

> [!重要]
> 本資料庫收錄一份針對 **ZenSelect** 開發的高保真、數據導向的使用者體驗分析與電子商務策略報告。  
> 全案採用「**玻璃擬態 × 侘寂美學 (Glassmorphism × Wabi-Sabi)**」設計系統，旨在展現專業設計工程與策略思維的整合落地。

## 📋 專案 PRD（產品需求文件）

### 1. 願景與策略  
此專案的核心目標是將傳統電商瀏覽體驗，轉化為具「職人工藝敘事性」的策展式旅程。  
藉由將「間 (Ma)」的哲學概念嵌入數位資訊架構中，降低使用者的認知負荷，同時強化品牌信任感與轉換率。

### 2. 技術架構  
- **前端框架 (Framework)：** 採用 Next.js 14（App Router）以優化伺服端渲染 (SSR) 與路由效率。  
- **樣式系統 (Styling)：** 使用 Tailwind CSS，透過自訂主題設定展現「玻璃擬態」質感（透明層次、模糊效果、砂岩與陶土色調）。  
- **動效系統 (Animations)：** 以 Framer Motion 實現基於狀態的 UI 過場及 SVG 路徑動畫。  
- **狀態管理 (State Management)：** 利用 React Context API 進行語言與介面狀態的輕量化全域管理。

### 3. 數據與邏輯整合  
- **集中式資料模型 (`src/data/research-data.ts`)：**  
  - 為所有研究數據、競品得分與角色模型提供唯一可信資料源。  
  - 採型別安全設計以確保圖表與表格間數據一致性。  
- **多語系實作 (`src/lib/translations.ts`)：**  
  - 透過 key-value 映射支援英文與繁體中文之間的動態切換。  
  - 整合自訂的 `t()` 函式與 `useLanguage` hook。  
- **核心元件協作：**  
  - `MindMap`：視覺化呈現研究洞察與最終介面成果間的邏輯關聯。  
  - `EmotionSwimlane`：將使用者情緒的質性資料映射至體驗旅程的量化節點。

### 4. 響應邏輯  
- **行動優先設計 (Mobile-First Design)：** 所有元件皆透過 Tailwind 響應式類別（如 `md:grid-cols-4`）實現跨裝置適配。  
- **水平互動 (Horizontal Interaction)：** 大量資料的研究或流程區段，於小螢幕採用 `snap-x` 橫向捲動設計，避免垂直資訊過載。

***

## 🔬 Obsidian 風格使用者體驗研究報告

### [[#階段一：科學研究]]
> [!資訊] 方法論概述  
> 進行超過 50 次深度用戶訪談，並分析 1,200+ 次熱點圖 (heatmap) 交互紀錄，以奠定行為分析基準。

- **核心洞察：**「信任」為主要轉換驅動因子。82% 使用者重視材質來源甚於品牌折扣。  
- **摩擦點發現：** 傳統三步驟結帳流程導致 84% 放棄率。需透過敘事脈絡來合理化高價位策略。

### [[#階段二：策略定義]]
> [!待辦] 主要 HMW (How Might We) 問題  
> 如何透過「數位觸點」創造留白與呼吸感，同時深刻傳遞台灣職人精神的情感價值？

- **核心假設：** 若提高版面留白 40%，並於價格前先呈現職人故事，可使購買信心提升 30% 以上。  
- **機會矩陣：** 依「影響力 × 實現成本」優先排序功能（快速收益項目：職人故事敘事化、漸進式結帳）。

### [[#階段三：資訊架構 (IA)]]
> [!引言] 雙軸策略  
> 捨棄傳統「商品海」分類法，改以水平軸（依空間購物 Shop by Room）與垂直軸（職人故事 Artisan Stories）並行。  
>
> *實驗結果：* 搜尋摩擦下降 56%。

### [[#階段四：設計與迭代]]
- **視覺語彙 (Visual Language)：** 採玻璃擬態風格傳達「透明與深度」；24px 圓角 (3xl) 表現有機觸感。  
- **微互動設計 (Micro-Interactions)：** 分層漸進動畫引導資訊層級感，避免使用者的認知負擔。

### [[#階段五：量化成效]]
| 指標 | 初始值 | 優化後 | 變化幅度 |
| :--- | :--- | :--- | :--- |
| 行動裝置轉換率 (CVR) | 2.1% | 2.7% | **+28%** |
| 結帳用時 | 180 秒 | 85 秒 | **-53%** |
| SUS 滿意度指數 | 62 | 78 | **+25%** |

***

## 🛠 專案執行
### 安裝  
`npm install`

### 開發  
`npm run dev`

### 上線建置與語法檢查  
`npm run lint`  
`npm run build`

***

© 2026 ZenSelect 策略研究．整合式研究與設計架構  

***

是否希望我進一步將此內容編排成視覺化的 **UX Case Study 文件樣板 (MDX / Notion 匯入格式)**？# ZenSelect Report System // Artisan Logic v2.0

> [!IMPORTANT]
> This repository contains a high-fidelity, data-driven UX analysis and e-commerce strategy report for **ZenSelect**. It leverages a "Glassmorphism × Wabi-Sabi" design system to demonstrate professional design engineering and strategic thinking.

## 📋 Project PRD (Product Requirements Document)

### 1. Vision & Strategy
To transform standard e-commerce browsing into a curated, artisan-focused narrative experience. By encoding the philosophy of "Ma" (space) into digital information architecture, we aim to reduce cognitive load while increasing brand trust and conversion.

### 2. Technical Architecture
- **Framework:** Next.js 14 (App Router) for optimized SSR and routing.
- **Styling:** Tailwind CSS with custom theme configurations for "Glassmorphism" (transparency, blurs, sand/stone/clay palette).
- **Animations:** Framer Motion for state-driven UI transitions and dynamic SVG path animations.
- **State Management:** React Context API for lightweight, project-wide language and UI state.

### 3. Data & Logic Integration
- **Centralized Data Model (`src/data/research-data.ts`):**
  - Single source of truth for all research metrics, competitor scores, and persona attributes.
  - Type-safe implementation ensures consistency across charts and tables.
- **i18n Implementation (`src/lib/translations.ts`):**
  - Key-value mapping for dynamic switching between English and Traditional Chinese.
  - Integrated via a custom `t()` helper and \`useLanguage\` hook.
- **Component Synergy:**
  - \`MindMap\`: Visualizes the logical connection between research insights and final UI outcomes.
  - \`EmotionSwimlane\`: Maps qualitative user sentiment to quantitative journey touchpoints.

### 4. Responsive Logic
- **Mobile-First Design:** All components utilize responsive Tailwind classes (e.g., \`md:grid-cols-4\`).
- **Horizontal Interaction:** Data-heavy sections (Research, Process) implement \`snap-x\` horizontal scrolling on small viewports to maintain readability without overwhelming vertical space.

---

## 🔬 Obsidian-Style UX Study Report

### [[#Phase 1: Scientific Research]]
> [!info] Methodology Overview
> We conducted 50+ deep 1-on-1 interviews and analyzed 1,200+ heatmap sessions to establish a behavioral baseline.

- **Central Insight:** "Trust" is the primary conversion driver. 82% of users prioritize material provenance over brand discounting.
- **Friction Discovery:** Traditional 3-step checkouts result in 84% abandonment. Narrative context is needed to justify premium pricing.

### [[#Phase 2: Strategic Definition]]
> [!todo] Key HMW (How Might We)
> How might we create a sense of spatial breathing through "digital touchpoints" while deeply conveying the emotional premium of Taiwanese artisan craftsmanship?

- **Core Hypothesis:** If we increase whitespace by 40% and surface artisan origin stories before pricing, purchase confidence will increase by 30%+.
- **Opportunity Matrix:** Prioritized features based on Impact vs Effort (Quick Wins: Artisan Storytelling, Progressive Checkout).

### [[#Phase 3: Information Architecture (IA)]]
> [!quote] Dual-Axis Strategy
> Abandoning the traditional "product sea" taxonomy for a horizontal axis (**Shop by Room**) and a vertical axis (**Artisan Stories**).
>
> *Experimental Result:* This structure reduced search friction by 56%.

### [[#Phase 4: Design & Iteration]]
- **Visual Language:** Glassmorphism UI to represent "clarity and depth." 24px border radii (3xl) to evoke organic, tactile forms.
- **Micro-interactions:** Staggered entry animations to guide users through the information hierarchy without cognitive overwhelm.

### [[#Phase 5: Quantifiable Impact]]
| Metric | Baseline | Optimized | Change |
| :--- | :--- | :--- | :--- |
| Mobile CVR | 2.1% | 2.7% | **+28%** |
| Checkout Time | 180s | 85s | **-53%** |
| SUS Score | 62 | 78 | **+25%** |

---

## 🛠 Project Execution
### Installation
\`npm install\`

### Development
\`npm run dev\`

### Production Build & Linting
\`npm run lint\`
\`npm run build\`

---
© 2026 ZenSelect Strategy. Integrated Research & Design Architecture.
