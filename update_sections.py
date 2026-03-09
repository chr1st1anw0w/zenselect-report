import os

with open('src/components/case-study/sections.tsx', 'r') as f:
    content = f.read()

# Add imports
imports = """import { PersonaMatrix } from "./PersonaMatrix";
import { EmotionalJourneyChart } from "./EmotionalJourneyChart";
import { SUSGauge } from "./SUSGauge";
import GlassCard from "@/components/ui/GlassCard";
"""
if imports not in content:
    content = imports + content

# Update Persona section to include PersonaMatrix
# Let's find the content after Persona = () => { ... return ( ... ) }
# This is fragile but let's try a simpler replacement of the inner grid.
# I'll replace the existing Persona table/grid with PersonaMatrix

# Replace the existing persona cards with PersonaMatrix
content = content.replace('<div className="grid lg:grid-cols-3 gap-12">', '<PersonaMatrix /> <div className="hidden grid lg:grid-cols-3 gap-12">', 1)

# Update Architecture section to include EmotionalJourneyChart
content = content.replace('<div className="lg:col-span-8 space-y-12">', '<div className="lg:col-span-8 space-y-12"><EmotionalJourneyChart />', 1)

# Update Outcome section to include SUSGauge
content = content.replace('<div className="grid lg:grid-cols-3 gap-6 md:p-12">', '<div className="mb-20"><SUSGauge score={78} /></div><div className="grid lg:grid-cols-3 gap-6 md:p-12">', 1)

with open('src/components/case-study/sections.tsx', 'w') as f:
    f.write(content)
