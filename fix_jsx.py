with open('src/components/case-study/sections.tsx', 'r') as f:
    lines = f.readlines()

new_lines = []
for i, line in enumerate(lines):
    # Line 1004 (index 1003) should be </GlassCard>
    if i == 1003 and line.strip() == '</div>':
        new_lines.append('          </GlassCard>\n')
    else:
        new_lines.append(line)

with open('src/components/case-study/sections.tsx', 'w') as f:
    f.writelines(new_lines)
