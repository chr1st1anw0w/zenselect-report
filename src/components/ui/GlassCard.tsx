import { ReactNode } from "react"

export default function GlassCard({
  children,
  className = ""
}:{
  children: ReactNode
  className?: string
}){
  return (
    <div className={`glass-card p-8 ${className}`}>
      {children}
    </div>
  )
}
