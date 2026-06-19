import type { ContactAction } from '../types/portfolio'

type ContactCardProps = {
  action: ContactAction
}

function ContactIcon({ title }: { title: string }) {
  if (title.toLowerCase().includes('github')) {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.8 1.2 1.8 1.2 1 .1 2.1-.7 2.6-1.1.1-.7.4-1.2.7-1.5-2.7-.3-5.5-1.3-5.5-6A4.7 4.7 0 0 1 5.4 6c-.1-.3-.6-1.6.1-3.3 0 0 1-.3 3.4 1.3a11.4 11.4 0 0 1 6.2 0c2.3-1.6 3.4-1.3 3.4-1.3.7 1.7.2 3 .1 3.3a4.7 4.7 0 0 1 1.2 3.2c0 4.7-2.8 5.7-5.5 6 .4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
      </svg>
    )
  }

  if (title.toLowerCase().includes('phone') || title.includes('โทร')) {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
        <path
          d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2 4.1 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7l.4 2.6a2 2 0 0 1-.6 1.8l-1.9 1.9a16 16 0 0 0 6 6l1.9-1.9a2 2 0 0 1 1.8-.6l2.6.4A2 2 0 0 1 22 16.9Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
      <path
        d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="m22 7-10 7L2 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ContactCard({ action }: ContactCardProps) {
  return (
    <article className="rounded-[1.25rem] border border-white/70 bg-white/90 p-4 shadow-[0_18px_44px_-32px_rgba(15,23,42,0.32)] dark:border-slate-700 dark:bg-slate-900/90 sm:rounded-[1.5rem] sm:p-5">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/12 text-cyan-700 dark:bg-cyan-400/15 dark:text-cyan-300 sm:h-11 sm:w-11 sm:rounded-2xl">
          <ContactIcon title={action.title} />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-slate-950 dark:text-white sm:text-lg">{action.title}</h3>
          <p className="mt-1 break-all text-sm leading-6 text-slate-600 dark:text-slate-300">
            {action.description}
          </p>
        </div>
      </div>
      <a
        href={action.href}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex text-sm font-semibold text-cyan-700 transition hover:text-cyan-800 dark:text-cyan-300 dark:hover:text-cyan-200"
      >
        {action.cta} →
      </a>
    </article>
  )
}
