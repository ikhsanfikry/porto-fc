import { type ReactNode } from 'react'

interface SectionTitleProps {
  label: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  children?: ReactNode
}

export function SectionTitle({ label, title, subtitle, align = 'left', children }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}>
      <span className="text-cyan text-small font-mono tracking-widest uppercase mb-2 block">
        // {label}
      </span>
      <h2 className="text-h2 md:text-h1 font-bold text-neutral leading-tight mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted text-body max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  )
}
