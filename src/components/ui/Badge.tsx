interface BadgeProps {
  label: string
  variant?: 'default' | 'cyan'
}

export function Badge({ label, variant = 'default' }: BadgeProps) {
  const variants = {
    default: 'bg-charcoal text-muted border border-neutral/10',
    cyan:    'bg-cyan/10 text-cyan border border-cyan/20',
  }

  return (
    <span className={`inline-block font-mono text-xs px-2.5 py-1 rounded-sm ${variants[variant]}`}>
      {label}
    </span>
  )
}
