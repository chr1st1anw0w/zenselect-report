# ZenSelect Report System // Artisan Logic v2.0

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
