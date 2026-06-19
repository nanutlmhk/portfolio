import { useEffect, useState } from 'react'
import { ContactCard } from './components/ContactCard'
import { Header } from './components/Header'
import { HospitalExperienceCard } from './components/HospitalExperienceCard'
import { ProjectCard } from './components/ProjectCard'
import { SectionHeading } from './components/SectionHeading'
import { portfolioContent } from './data/portfolioData'
import type { Locale, ThemeMode } from './types/portfolio'

const THEME_KEY = 'portfolio-theme'
const LOCALE_KEY = 'portfolio-locale'

function StatIcon({ label }: { label: string }) {
  if (label.toLowerCase().includes('healthcare')) {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
        <path d="M12 21s-6.7-4.4-9-8.2C1.1 9.8 2.6 6 6.3 6c2.1 0 3.3 1.2 4 2.3.7-1.1 1.9-2.3 4-2.3C17.4 6 19 9.8 21 12.8 18.7 16.6 12 21 12 21Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  if (label.toLowerCase().includes('hospital') || label.includes('โรงพยาบาล')) {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
        <path d="M4 21V7a1 1 0 0 1 1-1h5v15M14 21V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v18M9 10h.01M9 14h.01M9 18h.01M17 6h.01M17 10h.01M17 14h.01" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
      <path d="M12 8v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  )
}

function App() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') {
      return 'light'
    }

    const savedTheme = window.localStorage.getItem(THEME_KEY)

    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === 'undefined') {
      return 'en'
    }

    const savedLocale = window.localStorage.getItem(LOCALE_KEY)
    return savedLocale === 'th' ? 'th' : 'en'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    window.localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = locale
    window.localStorage.setItem(LOCALE_KEY, locale)
  }, [locale])

  const content = portfolioContent[locale]

  return (
    <div className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.13),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.12),_transparent_24%),linear-gradient(180deg,_#f8fcff_0%,_#ffffff_28%,_#f8fafc_100%)] text-slate-800 transition-colors dark:bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_24%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.14),_transparent_20%),linear-gradient(180deg,_#020617_0%,_#0f172a_34%,_#020617_100%)] dark:text-slate-100">
      <Header
        navItems={content.navItems}
        resumeButton={content.resumeButton}
        controls={content.controls}
        theme={theme}
        onThemeChange={setTheme}
        locale={locale}
        onLocaleChange={setLocale}
      />

      <main>
        <section id="home" className="mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 sm:pt-14 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="max-w-5xl">
            <h1 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-slate-950 dark:text-white sm:text-4xl md:text-6xl">
              {content.hero.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8">
              {content.hero.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {content.hero.availability.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-900 dark:border-cyan-800 dark:bg-cyan-950/40 dark:text-cyan-100"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
              <a
                href="#experience"
                className="rounded-full bg-slate-950 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300"
              >
                {content.hero.primaryCta}
              </a>
              <a
                href="/assets/Nanut_Lertmahakiat_Resume_CV2026.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-200 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:border-cyan-300 hover:bg-cyan-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                {content.hero.secondaryCta}
              </a>
            </div>

            <div className="mt-12">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                {content.hero.experienceTitle}
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {content.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.5rem] border border-white/80 bg-white/85 p-5 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.35)] dark:border-slate-800 dark:bg-slate-900/90 dark:shadow-[0_18px_48px_-32px_rgba(2,8,23,0.95)]"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/12 text-cyan-700 dark:bg-cyan-400/15 dark:text-cyan-300">
                      <StatIcon label={stat.label} />
                    </div>
                    <p className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                {content.hero.skillTitle}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {content.hero.skillChips.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_10px_30px_-24px_rgba(15,23,42,0.45)] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow={content.about.eyebrow}
            title={content.about.title}
            description={content.about.description}
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="rounded-[1.75rem] border border-slate-200/80 bg-white p-5 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.3)] dark:border-slate-800 dark:bg-slate-900 sm:rounded-[2rem] sm:p-8">
              {content.about.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-7 text-slate-700 dark:text-slate-200 sm:text-lg sm:leading-8 [&:not(:first-child)]:mt-5 sm:[&:not(:first-child)]:mt-6"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="rounded-[1.75rem] border border-slate-200/80 bg-slate-950 p-5 text-white shadow-[0_24px_70px_-40px_rgba(15,23,42,0.45)] dark:border-slate-800 dark:bg-slate-900 sm:rounded-[2rem] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                {content.about.expertiseTitle}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {content.about.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-slate-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  {content.about.interestsTitle}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {content.about.interestsDescription}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow={content.experience.eyebrow}
            title={content.experience.title}
            description={content.experience.description}
          />

          <div className="mt-12 grid gap-8 xl:grid-cols-[0.88fr_1.12fr]">
            <div className="rounded-[1.75rem] border border-slate-200/80 bg-white p-4 shadow-[0_24px_70px_-42px_rgba(15,23,42,0.34)] dark:border-slate-800 dark:bg-slate-900 sm:rounded-[2rem] sm:p-5">
              <div className="rounded-[1.25rem] border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/50 sm:rounded-[1.5rem] sm:p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
                  {content.experience.imageTitle}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {content.experience.imageDescription}
                </p>
              </div>
              <img
                src="/assets/hospital-overall2.png"
                alt="Hospital IT landscape and experience overview"
                className="mt-5 w-full rounded-[1.5rem] border border-slate-100 object-cover dark:border-slate-800"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {content.experience.entries.map((experience) => (
                <HospitalExperienceCard
                  key={experience.organization}
                  experience={experience}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow={content.projectsSection.eyebrow}
            title={content.projectsSection.title}
            description={content.projectsSection.description}
          />

          <div className="mt-12 grid gap-8">
            {content.projectsSection.entries.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                labels={content.projectsSection.labels}
              />
            ))}
          </div>
        </section>

        <section id="contact" className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-100 bg-[linear-gradient(135deg,_rgba(8,47,73,0.96),_rgba(14,116,144,0.88))] p-5 text-white shadow-[0_30px_90px_-45px_rgba(8,145,178,0.45)] dark:border-slate-800 dark:bg-[linear-gradient(135deg,_rgba(8,47,73,0.9),_rgba(12,74,110,0.96))] sm:rounded-[2.5rem] sm:p-8 lg:p-12">
            <SectionHeading
              eyebrow={content.contact.eyebrow}
              title={content.contact.title}
              description={content.contact.description}
              theme="dark"
            />

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {content.contact.actions.map((action) => (
                <ContactCard key={action.title} action={action} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
