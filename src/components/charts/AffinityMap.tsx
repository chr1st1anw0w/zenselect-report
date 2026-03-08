"use client";

import { motion } from "framer-motion";
import { AFFINITY_CLUSTERS } from "@/data/research-data";

export function AffinityMap() {
  return (
    <div className="w-full">
      <div className="mb-6">
        <p className="font-mono text-xs text-cedar font-bold tracking-widest uppercase mb-1">
          親和圖整理 Affinity Map
        </p>
        <p className="font-mono text-[10px] text-ink/40">
          基於 50+ 用戶訪談語錄歸納出的 4 大主題叢集 · W4 Workshop Output · FigJam
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {AFFINITY_CLUSTERS.map((cluster, ci) => (
          <motion.div
            key={cluster.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.12, duration: 0.6 }}
            className="flex flex-col"
            style={{ borderTop: `4px solid ${cluster.color}` }}
          >
            <div
              className="px-5 py-4"
              style={{ backgroundColor: cluster.bgColor }}
            >
              <p className="font-sans-cn font-bold text-sm mb-0.5" style={{ color: cluster.color }}>
                {cluster.label}
              </p>
              <p className="font-mono text-[9px] text-ink/40 uppercase tracking-wider">
                {cluster.labelEN}
              </p>
            </div>

            <div className="flex-1 bg-white border border-ink/5 border-t-0 p-4 space-y-2">
              {cluster.items.map((item, ii) => (
                <motion.div
                  key={ii}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: ci * 0.12 + ii * 0.06, duration: 0.4 }}
                  className="flex items-start gap-2 p-2 bg-white shadow-sm border border-ink/5 hover:border-cedar/30 transition-colors"
                  style={{ borderLeft: `3px solid ${cluster.color}40` }}
                >
                  <span
                    className="text-[8px] font-mono font-bold mt-0.5 shrink-0"
                    style={{ color: cluster.color }}
                  >
                    #{String(ii + 1).padStart(2, "0")}
                  </span>
                  <p className="font-sans-cn text-xs text-ink/80 leading-tight">{item}</p>
                </motion.div>
              ))}
            </div>

            <div
              className="px-4 py-2 text-center font-mono text-[9px] font-bold tracking-wider"
              style={{ backgroundColor: cluster.bgColor, color: cluster.color }}
            >
              {cluster.items.length} INSIGHTS
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 font-mono text-[9px] text-ink/30 flex gap-6">
        <span>Tool: FigJam Affinity Mapping</span>
        <span>Participants: 50+ Urban Taiwan Residents</span>
        <span>Analysis: Thematic Clustering</span>
      </div>
    </div>
  );
}
