export default function GlowOrb({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute w-[400px] h-[400px] rounded-full blur-[100px] animate-orb-pulse ${className}`}
      style={{
        background:
          "radial-gradient(circle, rgba(139, 115, 85, 0.15) 0%, rgba(139, 115, 85, 0.08) 40%, transparent 70%)",
        boxShadow:
          "0 0 120px rgba(139, 115, 85, 0.05)",
      }}
    />
  )
}
