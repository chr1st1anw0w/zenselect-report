import React from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
}

export default function PillInput({
  placeholder,
  className = "",
  ...props
}: Props) {
  return (
    <input
      placeholder={placeholder}
      className={`pill-input w-full px-6 py-3 bg-white/40 backdrop-blur-md border border-white/20 rounded-full outline-none focus:ring-2 focus:ring-accent_orange/30 transition-all ${className}`}
      {...props}
    />
  )
}
