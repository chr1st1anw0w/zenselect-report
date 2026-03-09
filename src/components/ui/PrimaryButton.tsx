interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}

export default function PrimaryButton({
  label,
  ...props
}: Props) {
  return (
    <button
      className="primary-button"
      {...props}
    >
      {label}
    </button>
  )
}
