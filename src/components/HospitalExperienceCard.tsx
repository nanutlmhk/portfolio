import type { HospitalExperience } from '../types/portfolio'

type HospitalExperienceCardProps = {
  experience: HospitalExperience
}

export function HospitalExperienceCard({ experience }: HospitalExperienceCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-[0_18px_50px_-35px_rgba(15,23,42,0.35)] dark:border-slate-800 dark:bg-slate-900">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{experience.organization}</h3>
          <p className="mt-1 text-sm font-medium text-cyan-700 dark:text-cyan-300">{experience.role}</p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:bg-slate-800 dark:text-slate-300">
          {experience.period}
        </span>
      </div>

      <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{experience.description}</p>

      <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700 dark:text-slate-200">
        {experience.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-cyan-500" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}
