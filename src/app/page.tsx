"use client";

import GlassCard from "@/components/ui/GlassCard";
import PillInput from "@/components/ui/PillInput";
import PrimaryButton from "@/components/ui/PrimaryButton";
import GlowOrb from "@/components/ui/GlowOrb";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="min-h-screen bg-sand flex items-center justify-center relative overflow-hidden p-6">
      {/* Background Decorative Elements (Wabi-Sabi Environment) */}
      <div className="absolute top-[-100px] right-[-50px] opacity-20">
        <div className="w-[400px] h-[400px] bg-stone rounded-full blur-3xl" />
      </div>

      <GlowOrb className="bottom-[-60px] right-[-60px] opacity-80" />

      <div className="z-10 w-full max-w-[420px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <GlassCard className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-medium tracking-tight text-ink">
                ZenSelect
              </h1>
              <p className="text-sm text-ink/60 font-mono">
                Expert UX Intelligence & Analysis
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-medium ml-2 text-ink/40 uppercase tracking-widest">
                  Access Portal
                </label>
                <PillInput placeholder="Project Key" />
              </div>
              <PillInput placeholder="Authorization Code" type="password" />
            </div>

            <div className="flex flex-col gap-4 pt-2">
              <PrimaryButton label="Explore PRD →" onClick={() => window.location.href='/prd'} />
              <button
                className="text-xs text-ink/40 hover:text-accent transition-colors underline underline-offset-4"
                onClick={() => window.location.href='/prd'}
              >
                Continue to Documentation
              </button>
            </div>

            <div className="pt-6 border-t border-black/5 flex justify-between items-center">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <div className="w-2 h-2 rounded-full bg-stone" />
                <div className="w-2 h-2 rounded-full bg-clay" />
              </div>
              <span className="text-[10px] text-ink/30 font-mono uppercase tracking-tighter">
                v2.0.4 - Wabi-Sabi
              </span>
            </div>
          </GlassCard>
        </motion.div>

        {/* Floating Decorative Object (Simulated Ceramic Sphere) */}
        <motion.div
          className="absolute -left-12 bottom-12 w-24 h-24 bg-white/40 rounded-full backdrop-blur-md border border-white/20 shadow-lg"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </main>
  );
}
