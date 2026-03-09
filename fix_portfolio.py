import re

with open('src/components/case-study/sections.tsx', 'r') as f:
    content = f.read()

# Fix the first GlassCard
content = content.replace(
    '<GlassCard className="lg:col-span-5 md:p-12 relative overflow-hidden group">',
    '<GlassCard className="lg:col-span-12 md:p-12 relative overflow-hidden group">'
)

# Fix the nested div that should be GlassCard
content = content.replace(
    '<motion.div whileHover={{ y: -10 }} className="p-6 md:p-12 border border-white/30 glass-card bg-white/40/40 hover:border-cedar/30 transition-all duration-700 shadow-sm hover:shadow-xl group">',
    '<GlassCard className="p-6 md:p-12 hover:border-accent_orange/30 transition-all duration-700 shadow-sm hover:shadow-xl group">'
)

# Fix the ink card
content = content.replace(
    '<motion.div whileHover={{ y: -10 }} className="p-6 md:p-12 border border-white/30 bg-ink text-canvas flex flex-col justify-between transition-all duration-700 shadow-2xl group/tools relative overflow-hidden">',
    '<GlassCard className="p-6 md:p-12 bg-ink text-canvas flex flex-col justify-between transition-all duration-700 shadow-2xl group/tools relative overflow-hidden border-none" deep>'
)

# Close them correctly
# This is tricky because of multiple </div>. I'll just use a direct string replacement of known unique blocks.
content = content.replace('</ul>\n            </motion.div>', '</ul>\n            </GlassCard>')
content = content.replace('</motion.button>\n            </motion.div>', '</motion.button>\n            </GlassCard>')

with open('src/components/case-study/sections.tsx', 'w') as f:
    f.write(content)
