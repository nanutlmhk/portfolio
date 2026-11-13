import type { ReactNode } from 'react'
import type { StatusTone } from '../types/portfolio'

const toneClass: Record<StatusTone, string> = {
  live: 'text-accent',
  progress: 'text-warn',
  demo: 'text-info',
}

export function StatusBadge({ tone, children }: { tone: StatusTone; children: ReactNode }) {
  return (
    <span className={`inline-flex items-center gap-2 font-mono text-xs ${toneClass[tone]}`}>
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
      {children}
    </span>
  )
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="border border-line bg-raised px-2 py-1 font-mono text-xs text-body">{children}</span>
  )
}

export function Label({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-mono text-[11px] font-medium uppercase tracking-widest text-muted ${className}`}>
      {children}
    </p>
  )
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-sm leading-6 text-body">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-0.5 shrink-0 font-mono text-accent">›</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

type SectionProps = {
  id: string
  index: string
  eyebrow: string
  title: string
  description?: string
  children: ReactNode
}

export function Section({ id, index, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-accent">
        <span>{index}</span>
        <span className="h-px w-8 bg-accent" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="mt-4 max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
        {title}
      </h2>
      {description ? <p className="mt-3 max-w-2xl text-base leading-7 text-muted">{description}</p> : null}
      <div className="mt-10">{children}</div>
    </section>
  )
}
