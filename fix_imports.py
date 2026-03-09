import os

with open('src/components/case-study/sections.tsx', 'r') as f:
    lines = f.readlines()

new_lines = []
added_imports = False
for line in lines:
    if line.strip() == '"use client";':
        if not added_imports:
            new_lines.append('"use client";\n')
            new_lines.append('import { PersonaMatrix } from "./PersonaMatrix";\n')
            new_lines.append('import { EmotionalJourneyChart } from "./EmotionalJourneyChart";\n')
            new_lines.append('import { SUSGauge } from "./SUSGauge";\n')
            new_lines.append('import GlassCard from "@/components/ui/GlassCard";\n')
            added_imports = True
        continue
    if "import { PersonaMatrix }" in line or "import { EmotionalJourneyChart }" in line or "import { SUSGauge }" in line or "import GlassCard from" in line:
        continue
    new_lines.append(line)

with open('src/components/case-study/sections.tsx', 'w') as f:
    f.writelines(new_lines)
