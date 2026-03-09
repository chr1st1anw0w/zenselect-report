import re

with open('src/components/case-study/sections.tsx', 'r') as f:
    content = f.read()

# Replace <GlassCard ...> ... </div> with <GlassCard ...> ... </GlassCard>
# We look for the <GlassCard and its corresponding closing </div>
# This is hard for regex. I'll use a stack-based approach for specific sections.

# Let's target the PortfolioStrategy section specifically
lines = content.split('\n')
new_lines = []
for line in lines:
    if '<GlassCard' in line:
        # Check if it has a self-closing tag or ends in </div> on the same line (rare here)
        new_lines.append(line)
        continue
    # This is too complex. I'll just manually fix the 3 occurrences I know.
    new_lines.append(line)

# Simpler: replace </div> that follow a GlassCard block.
# But let's just use a string replacement for the specific ending patterns.

content = content.replace('</motion.button>\n            </div>', '</motion.button>\n            </GlassCard>')
content.replace('</ul>\n            </div>', '</ul>\n            </GlassCard>')
content.replace('</motion.div>\n            </div>', '</motion.div>\n            </GlassCard>')

with open('src/components/case-study/sections.tsx', 'w') as f:
    f.write(content)
