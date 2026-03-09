export default function GlowOrb({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute w-[320px] h-[320px] rounded-full blur-[80px] animate-orb-pulse ${className}`}
      style={{
        background:
          "radial-gradient(circle, #F2994A 0%, #F2994A 30%, rgba(242, 153, 74, 0.15) 70%, transparent 100%)",
        boxShadow:
          "0 0 100px rgba(242, 153, 74, 0.15), 0 0 200px rgba(242, 153, 74, 0.05)",
      }}
    />
  )
}
