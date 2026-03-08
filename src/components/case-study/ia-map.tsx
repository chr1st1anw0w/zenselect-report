"use client";

import { motion } from "framer-motion";
import { Layers, Users, Home, Compass, Boxes } from "lucide-react";

export const IACoreMap = () => {
  return (
    <div className="flex flex-col gap-8 items-center w-full font-mono text-xs py-10">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-ink text-canvas px-10 py-4 rounded-sm shadow-2xl z-10 font-bold tracking-[0.3em] flex items-center gap-3 border border-cedar/30"
      >
        <Home className="w-5 h-5 text-cedar" /> 00_HOME (ENTRY_POINT)
      </motion.div>

      <div className="w-px h-10 bg-cedar/30"></div>

      <div className="flex w-full justify-between relative mt-2 gap-4">
        {/* Horizontal connection line */}
        <div className="absolute top-0 left-[15%] right-[15%] h-px bg-cedar/20"></div>

        {/* Branch 1: Functional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center w-1/3 group"
        >
          <div className="w-px h-10 bg-cedar/30 -mt-10"></div>
          <div className="bg-white border border-ink/10 group-hover:border-cedar/50 px-6 py-4 shadow-sm mb-6 w-full text-center font-bold transition-all flex items-center justify-center gap-2">
            <Boxes className="w-4 h-4 text-ink/40 group-hover:text-cedar transition-colors" /> 01_CATEGORIES
          </div>
          <div className="text-[10px] text-ink/60 space-y-3 text-center font-sans-cn font-medium">
            <p className="hover:text-cedar cursor-default transition-colors">客廳 Living System</p>
            <p className="hover:text-cedar cursor-default transition-colors">臥室 Rest Haven</p>
            <p className="hover:text-cedar cursor-default transition-colors">器皿 Craft Vessel</p>
            <p className="hover:text-cedar cursor-default transition-colors">光影 Lighting Ma</p>
          </div>
        </motion.div>

        {/* Branch 2: Narrative (Core Strategy) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center w-1/3 group"
        >
          <div className="w-px h-10 bg-cedar/30 -mt-10"></div>
          <div className="bg-ink text-cedar px-6 py-4 shadow-xl mb-6 w-full text-center font-bold border border-cedar/20 flex items-center justify-center gap-2">
            <Compass className="w-4 h-4" /> 02_OUR_EDIT
          </div>
          <div className="text-[10px] text-cedar/80 space-y-3 text-center font-sans-cn font-medium">
            <div className="bg-cedar/5 py-2 px-3 rounded-sm border border-cedar/10">
               <p className="font-bold mb-1">職人故事 Artisans</p>
               <p className="opacity-40 text-[8px] font-mono">EMOTIONAL_HOOK</p>
            </div>
            <div className="bg-cedar/5 py-2 px-3 rounded-sm border border-cedar/10">
               <p className="font-bold mb-1">材質哲學 Materials</p>
               <p className="opacity-40 text-[8px] font-mono">TRUST_SIGNAL</p>
            </div>
            <div className="bg-cedar/5 py-2 px-3 rounded-sm border border-cedar/10">
               <p className="font-bold mb-1">永續承諾 Sustainable</p>
               <p className="opacity-40 text-[8px] font-mono">VALUE_ALIGNMENT</p>
            </div>
          </div>
        </motion.div>

        {/* Branch 3: Scenario */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center w-1/3 group"
        >
          <div className="w-px h-10 bg-cedar/30 -mt-10"></div>
          <div className="bg-white border border-ink/10 group-hover:border-cedar/50 px-6 py-4 shadow-sm mb-6 w-full text-center font-bold transition-all flex items-center justify-center gap-2">
            <Layers className="w-4 h-4 text-ink/40 group-hover:text-cedar transition-colors" /> 03_SCENES
          </div>
          <div className="text-[10px] text-ink/60 space-y-3 text-center font-sans-cn font-medium">
            <p className="hover:text-cedar cursor-default transition-colors">Urban Compact (小坪數)</p>
            <p className="hover:text-cedar cursor-default transition-colors">Zen Minimalist (禪意)</p>
            <p className="hover:text-cedar cursor-default transition-colors">Nordic Warmth (北歐)</p>
            <p className="hover:text-cedar cursor-default transition-colors">Taiwan Heritage (老屋)</p>
          </div>
        </motion.div>
      </div>

      <div className="mt-12 w-full flex justify-center">
        <div className="bg-cedar/5 border border-cedar/20 p-4 rounded-sm flex items-center gap-6 max-w-2xl">
           <Users className="w-8 h-8 text-cedar opacity-40" />
           <p className="text-[10px] font-sans-cn leading-relaxed opacity-60">
             此 IA 結構旨在降低<strong>「決策疲勞 (Choice Overload)」</strong>。透過 Branch 02 (感性敘事) 與 Branch 03 (情境導航) 的雙向引導，將用戶從單純的商品比較轉化為對<strong>品牌理念</strong>的認同，數據顯示此路徑能增加客單價約 <strong>28.4%</strong>。
           </p>
        </div>
      </div>
    </div>
  );
};
