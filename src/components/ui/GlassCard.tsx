import { ReactNode } from "react"

export default function GlassCard({
  children,
  className = "",
  deep = false
}:{
  children: ReactNode
  className?: string
  deep?: boolean
}){
  return (
    <div className={`transition-all duration-500 rounded-[40px] border border-white/80 p-10 ${deep ? 'bg-white/40 backdrop-blur-3xl shadow-glass-deep' : 'bg-white/20 backdrop-blur-2xl shadow-glass hover:shadow-glass-deep'} ${className}`}>
      {children}
    </div>
  )
}
