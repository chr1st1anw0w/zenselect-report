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
    <div className={`${deep ? 'glass-card-deep' : 'glass-card'} p-8 ${className}`}>
      {children}
    </div>
  )
}
