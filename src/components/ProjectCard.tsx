import type { Project } from '../types/portfolio'

type ProjectCardProps = {
  project: Project
  labels: {
    problemSolved: string
    systemDelivered: string
    outcomeFocus: string
    systems: string
  }
}

export function ProjectCard({ project, labels }: ProjectCardProps) {
  return (
    <article className="group rounded-[1.75rem] border border-slate-200/80 bg-white p-5 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.28)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_-28px_rgba(8,145,178,0.24)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-[0_22px_70px_-35px_rgba(2,8,23,0.85)] sm:rounded-[2rem] sm:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:bg-cyan-950/40 dark:text-cyan-200">
          {project.category}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-2xl">{project.title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">{project.summary}</p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-800">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            {labels.problemSolved}
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-200">{project.challenge}</p>
        </div>
        <div className="rounded-3xl bg-cyan-50/70 p-5 dark:bg-cyan-950/25">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">
            {labels.systemDelivered}
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-200">{project.delivery}</p>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            {labels.outcomeFocus}
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700 dark:text-slate-200">
            {project.impact.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-cyan-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            {labels.systems}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.systems.map((system) => (
              <span
                key={system}
                className="rounded-full border border-slate-200 px-3 py-2 text-sm text-slate-700 dark:border-slate-700 dark:text-slate-200"
              >
                {system}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-slate-500 dark:bg-slate-800 dark:text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
