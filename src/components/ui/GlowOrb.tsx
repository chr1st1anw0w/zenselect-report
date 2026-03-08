export default function GlowOrb({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute w-[220px] h-[220px] rounded-full blur-sm animate-orb-pulse ${className}`}
      style={{
        background:
          "radial-gradient(circle,#FF8C2A 0%,#FF7A1A 40%,rgba(255,122,26,0.25) 70%,transparent 100%)",
        boxShadow:
          "0 0 80px rgba(255,140,42,0.55),0 0 160px rgba(255,140,42,0.25)",
      }}
    />
  )
}
