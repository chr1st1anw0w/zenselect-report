import React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}

export default function PrimaryButton({
  label,
  className = "",
  ...props
}: Props) {
  return (
    <button
      className={`primary-button px-8 py-3 bg-ink text-canvas hover:bg-ink/90 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-ink/20 ${className}`}
      {...props}
    >
      {label}
    </button>
  )
}
