type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
  theme?: 'light' | 'dark'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  theme = 'light',
}: SectionHeadingProps) {
  const eyebrowClass = theme === 'dark' ? 'text-cyan-300' : 'text-cyan-700 dark:text-cyan-300'
  const titleClass = theme === 'dark' ? 'text-white' : 'text-slate-950 dark:text-white'
  const descriptionClass = theme === 'dark' ? 'text-slate-200' : 'text-slate-600 dark:text-slate-300'

  return (
    <div className="max-w-3xl">
      <p className={`text-sm font-semibold uppercase tracking-[0.32em] ${eyebrowClass}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-4 text-3xl font-semibold tracking-tight md:text-4xl ${titleClass}`}>
        {title}
      </h2>
      <p className={`mt-4 text-base leading-7 md:text-lg ${descriptionClass}`}>{description}</p>
    </div>
  )
}
