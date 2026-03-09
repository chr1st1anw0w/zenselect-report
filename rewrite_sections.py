import sys

with open('src/components/case-study/sections.tsx', 'r') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    # Insert PersonaMatrix in Persona section
    if '{/* Horizontal scroll persona cards */}' in line:
        new_lines.append(line)
        new_lines.append('    <div className="mb-20"><PersonaMatrix /></div>\n')
        continue

    # Insert EmotionalJourneyChart in Architecture section
    if '<div className="grid lg:grid-cols-1 gap-20">' in line:
        new_lines.append(line)
        new_lines.append('       <div className="mb-20"><EmotionalJourneyChart /></div>\n')
        continue

    new_lines.append(line)

with open('src/components/case-study/sections.tsx', 'w') as f:
    f.writelines(new_lines)
