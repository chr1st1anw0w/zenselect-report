interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
}

export default function PillInput({
  placeholder,
  ...props
}: Props) {
  return (
    <input
      placeholder={placeholder}
      className="pill-input w-full"
      {...props}
    />
  )
}
