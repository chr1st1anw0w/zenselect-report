"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Zap,
  Search,
  Target,
  LayoutGrid,
  ShieldCheck,
  Rocket,
  ChevronRight,
  Maximize2,
  Minimize2,
  MousePointer2,
  ArrowRight,
  Fingerprint
} from "lucide-react";
import { useLanguage } from "@/context/language-context";
// import { t } from "@/lib/translations";

type MindMapNode = {
  id: string;
  type: "root" | "phase" | "insight" | "outcome";
  label: string;
  labelCN: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  descriptionCN: string;
  children?: string[];
  parentId?: string;
};

const NODES: Record<string, MindMapNode> = {
  root: {
    id: "root",
    type: "root",
    label: "Artisan Logic Core",
    labelCN: "職人邏輯核心",
    icon: <Fingerprint className="w-5 h-5" />,
    color: "#8B7355",
    description: "The central thesis of the project: Transforming artisan craftsmanship into digital efficiency.",
    descriptionCN: "本專案的核心命題：將職人工藝轉化為具備商業效率的數位空間。",
    children: ["research", "strategy", "design", "validation"]
  },
  research: {
    id: "research",
    type: "phase",
    label: "Scientific Research",
    labelCN: "科學化調研",
    icon: <Search className="w-4 h-4" />,
    color: "#5C8BC7",
    description: "Quantitative & qualitative data collection to build the design foundation.",
    descriptionCN: "透過定量與定性數據收集，建立設計基礎。",
    parentId: "root",
    children: ["n50", "affinity"]
  },
  n50: {
    id: "n50",
    type: "insight",
    label: "N=50 Deep Interviews",
    labelCN: "50+ 深度訪談",
    icon: <Zap className="w-3 h-3" />,
    color: "#5C8BC7",
    description: "Discovered 'Trust' is the primary driver over 'Price'.",
    descriptionCN: "發現「信任感」是比「價格」更強大的驅動力。",
    parentId: "research"
  },
  affinity: {
    id: "affinity",
    type: "insight",
    label: "Affinity Mapping",
    labelCN: "親和圖分析",
    icon: <LayoutGrid className="w-3 h-3" />,
    color: "#5C8BC7",
    description: "Clustered behavioral patterns into 4 strategic areas.",
    descriptionCN: "將行為模式分類為 4 個戰略領域。",
    parentId: "research"
  },
  strategy: {
    id: "strategy",
    type: "phase",
    label: "UX Strategy",
    labelCN: "UX 策略定義",
    icon: <Target className="w-4 h-4" />,
    color: "#E57373",
    description: "Defining the core HMW and solution framework.",
    descriptionCN: "定義核心 HMW 與解決方案框架。",
    parentId: "root",
    children: ["hmw", "dual-axis"]
  },
  hmw: {
    id: "hmw",
    type: "insight",
    label: "HMW Matrix",
    labelCN: "HMW 核心機會矩陣",
    icon: <Zap className="w-3 h-3" />,
    color: "#E57373",
    description: "Prioritized solutions based on Impact vs Effort.",
    descriptionCN: "依據影響力與執行難度排定優先順序。",
    parentId: "strategy"
  },
  "dual-axis": {
    id: "dual-axis",
    type: "insight",
    label: "Dual-Axis Navigation",
    labelCN: "雙軸心導覽架構",
    icon: <LayoutGrid className="w-3 h-3" />,
    color: "#E57373",
    description: "Revolutionary IA combining Shop by Room & Artisan Stories.",
    descriptionCN: "結合「場景選購」與「職人故事」的創新架構。",
    parentId: "strategy"
  },
  design: {
    id: "design",
    type: "phase",
    label: "Iterative Design",
    labelCN: "迭代設計階段",
    icon: <LayoutGrid className="w-4 h-4" />,
    color: "#5A8A5A",
    description: "From low-fi sketches to high-fidelity 'Glassmorphism' UI.",
    descriptionCN: "從低保真草圖到高保真的「玻態美學」UI。",
    parentId: "root",
    children: ["glass", "motion"]
  },
  glass: {
    id: "glass",
    type: "insight",
    label: "Glassmorphism UI",
    labelCN: "玻態美學系統",
    icon: <Zap className="w-3 h-3" />,
    color: "#5A8A5A",
    description: "Clean, professional, and tactile visual language.",
    descriptionCN: "潔淨、專業且具備觸感的視覺語言。",
    parentId: "design"
  },
  motion: {
    id: "motion",
    type: "insight",
    label: "Micro-interactions",
    labelCN: "動態微交互",
    icon: <Zap className="w-3 h-3" />,
    color: "#5A8A5A",
    description: "Reducing cognitive load through fluid transitions.",
    descriptionCN: "透過流暢轉場降低用戶的認知負荷。",
    parentId: "design"
  },
  validation: {
    id: "validation",
    type: "phase",
    label: "Market Validation",
    labelCN: "市場驗證與成果",
    icon: <ShieldCheck className="w-4 h-4" />,
    color: "#C5A37A",
    description: "Testing prototypes and measuring business KPIs.",
    descriptionCN: "測試原型並衡量商業關鍵指標。",
    parentId: "root",
    children: ["cvr", "sus"]
  },
  cvr: {
    id: "cvr",
    type: "outcome",
    label: "+28% Mobile CVR",
    labelCN: "+28% 手機轉換率",
    icon: <Rocket className="w-3 h-3" />,
    color: "#C5A37A",
    description: "Quantifiable lift in e-commerce performance.",
    descriptionCN: "可量化的電商績效提升。",
    parentId: "validation"
  },
  sus: {
    id: "sus",
    type: "outcome",
    label: "78 SUS Score",
    labelCN: "78 分 SUS 指標",
    icon: <ShieldCheck className="w-3 h-3" />,
    color: "#C5A37A",
    description: "High system usability confirmed by user testing.",
    descriptionCN: "可用性測試證實具備高水準系統可用性。",
    parentId: "validation"
  }
};

export const MindMap = () => {
  const { lang } = useLanguage();
  const [activeNodes, setActiveNodes] = useState<string[]>(["root"]);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>("root");
  const [isZoomed, setIsZoomed] = useState(false);


  const toggleNode = (id: string) => {
    if (activeNodes.includes(id)) {
      // Don't toggle root
      if (id === "root") return;
      setActiveNodes(activeNodes.filter(n => n !== id));
    } else {
      setActiveNodes([...activeNodes, id]);
    }
    setSelectedNodeId(id);
  };

  const selectedNode = selectedNodeId ? NODES[selectedNodeId] : null;

  return (
    <div className="my-32">
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 px-4">
        <div>
          <span className="font-mono text-cedar text-sm font-bold tracking-[0.4em] uppercase flex items-center gap-3">
            <LayoutGrid className="w-5 h-5"/> Project Thinking Logic Flow
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-display font-light">
            Interactive <span className="text-cedar italic">Mind Mapping.</span>
          </h2>
          <p className="mt-4 text-sm font-sans-cn font-light opacity-60 max-w-xl">
            {lang === "en"
              ? "A dynamic visualization of the project's intellectual progression. Click nodes to expand the logic and see underlying insights."
              : "專案思維演進的動態視覺化。點擊節點以展開邏輯，並查看底層的研究洞察與成果。"}
          </p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="p-3 bg-white border border-ink/10 rounded-full shadow-sm hover:border-cedar transition-colors text-ink/60"
          >
            {isZoomed ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div className={`relative bg-white border border-ink/5 overflow-hidden transition-all duration-700 ${isZoomed ? 'fixed inset-4 z-[100] bg-white/95 backdrop-blur-xl' : 'h-[600px] shadow-sm'}`}>
        {/* Background Grid */}
        <div className="absolute inset-0 blueprint-grid opacity-[0.03] pointer-events-none" />

        {/* Canvas */}
        <div className="h-full w-full overflow-auto p-12 cursor-grab active:cursor-grabbing scrollbar-hide">
          <div className="min-w-[800px] flex flex-col items-center gap-16 relative">

            {/* Root Node */}
            <Node node={NODES.root} activeNodes={activeNodes} toggleNode={toggleNode} lang={lang} />

            {/* Level 1: Phases */}
            <div className="flex gap-8 justify-center relative w-full">
              {NODES.root.children?.map(childId => (
                <div key={childId} className="flex flex-col items-center gap-12 flex-1 max-w-[200px]">
                  {/* Connection Line to Root */}
                  <div className="w-px h-16 bg-ink/5 -mt-16" />

                  <Node node={NODES[childId]} activeNodes={activeNodes} toggleNode={toggleNode} lang={lang} />

                  {/* Level 2: Insights */}
                  <AnimatePresence mode="popLayout">
                    {activeNodes.includes(childId) && (
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex flex-col items-center gap-4 w-full"
                      >
                        {NODES[childId].children?.map(insightId => (
                          <div key={insightId} className="w-full flex flex-col items-center">
                            <div className="w-px h-8 bg-ink/5" />
                            <Node node={NODES[insightId]} activeNodes={activeNodes} toggleNode={toggleNode} lang={lang} isSmall />
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Info Panel */}
        <AnimatePresence>
          {selectedNode && (
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              className="absolute right-0 top-0 bottom-0 w-[320px] bg-ink text-canvas p-8 shadow-2xl border-l border-white/10 z-20 overflow-y-auto"
            >
              <div className="mb-10 flex justify-between items-start">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-cedar">
                  {selectedNode.icon}
                </div>
                <button
                  onClick={() => setSelectedNodeId(null)}
                  className="p-2 hover:text-cedar transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <span className="font-mono text-[10px] text-cedar font-bold tracking-widest uppercase mb-2 block">
                {selectedNode.type} NODE
              </span>
              <h4 className="text-2xl font-display italic mb-6">
                {lang === "en" ? selectedNode.label : selectedNode.labelCN}
              </h4>

              <div className="h-px w-12 bg-cedar mb-8" />

              <p className="text-sm font-sans-cn font-light leading-relaxed opacity-80 mb-10">
                {lang === "en" ? selectedNode.description : selectedNode.descriptionCN}
              </p>

              {selectedNode.children && (
                <div className="space-y-4">
                  <p className="font-mono text-[9px] opacity-40 uppercase tracking-widest font-bold">Related Insights</p>
                  <div className="space-y-2">
                    {selectedNode.children.map(cid => (
                      <button
                        key={cid}
                        onClick={() => toggleNode(cid)}
                        className="w-full flex items-center justify-between p-3 bg-white/5 border border-white/5 hover:border-cedar/50 transition-all text-left group"
                      >
                        <span className="text-xs font-sans-cn opacity-70 group-hover:opacity-100 group-hover:text-cedar">
                          {lang === "en" ? NODES[cid].label : NODES[cid].labelCN}
                        </span>
                        <ChevronRight className="w-3 h-3 text-cedar opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Interaction Hint */}
        <div className="absolute bottom-6 left-6 pointer-events-none">
          <div className="flex items-center gap-3 bg-ink/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-canvas/60 font-mono text-[9px] uppercase tracking-widest">
            <MousePointer2 className="w-3 h-3 text-cedar" /> Click nodes to explore logic
          </div>
        </div>
      </div>
    </div>
  );
};

const Node = ({ node, activeNodes, toggleNode, lang, isSmall = false }: {
  node: MindMapNode,
  activeNodes: string[],
  toggleNode: (id: string) => void,
  lang: string,
  isSmall?: boolean
}) => {
  const isActive = activeNodes.includes(node.id);

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => toggleNode(node.id)}
      className={`relative flex flex-col items-center transition-all duration-500 ${isSmall ? 'w-full' : ''}`}
    >
      <div className={`
        ${isSmall ? 'px-3 py-2 border rounded-sm' : 'p-6 border-2 rounded-xl'}
        ${isActive ? 'bg-ink text-canvas border-cedar shadow-xl' : 'bg-white text-ink border-ink/10 shadow-sm'}
        flex items-center gap-3 w-full justify-center transition-all duration-500
      `}>
        <div className={`transition-colors duration-500 ${isActive ? 'text-cedar' : 'text-cedar/40'}`}>
          {node.icon}
        </div>
        <span className={`font-sans-cn font-bold ${isSmall ? 'text-[10px]' : 'text-xs md:text-sm'} whitespace-nowrap`}>
          {lang === "en" ? node.label : node.labelCN}
        </span>
      </div>

      {!isSmall && node.children && (
        <div className={`w-2 h-2 rounded-full mt-2 transition-colors ${isActive ? 'bg-cedar' : 'bg-ink/10'}`} />
      )}
    </motion.button>
  );
};
