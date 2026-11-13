import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { IntegrationMap } from './components/IntegrationMap'
import { BulletList, Label, Section, StatusBadge, Tag } from './components/ui'
import { GITHUB_URL, LOGOS, portfolioContent, RESUME_URL } from './data/portfolioData'
import type { ContactAction, Locale, ThemeMode } from './types/portfolio'

const THEME_KEY = 'portfolio-theme'
const LOCALE_KEY = 'portfolio-locale'

function ContactIcon({ kind }: { kind: ContactAction['kind'] }) {
  if (kind === 'github') {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.8 1.2 1.8 1.2 1 .1 2.1-.7 2.6-1.1.1-.7.4-1.2.7-1.5-2.7-.3-5.5-1.3-5.5-6A4.7 4.7 0 0 1 5.4 6c-.1-.3-.6-1.6.1-3.3 0 0 1-.3 3.4 1.3a11.4 11.4 0 0 1 6.2 0c2.3-1.6 3.4-1.3 3.4-1.3.7 1.7.2 3 .1 3.3a4.7 4.7 0 0 1 1.2 3.2c0 4.7-2.8 5.7-5.5 6 .4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
      </svg>
    )
  }

  if (kind === 'phone') {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
        <path
          d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2 4.1 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7l.4 2.6a2 2 0 0 1-.6 1.8l-1.9 1.9a16 16 0 0 0 6 6l1.9-1.9a2 2 0 0 1 1.8-.6l2.6.4A2 2 0 0 1 22 16.9Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
      <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m22 7-10 7L2 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const secondaryButton =
  'border border-line bg-panel px-5 py-3 text-center font-mono text-sm font-medium text-ink transition hover:border-accent hover:text-accent'

function App() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') {
      return 'dark'
    }

    return window.localStorage.getItem(THEME_KEY) === 'light' ? 'light' : 'dark'
  })

  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === 'undefined') {
      return 'en'
    }

    return window.localStorage.getItem(LOCALE_KEY) === 'th' ? 'th' : 'en'
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
  const { hero, bring, platforms, experience, clients, skills, contact } = content

  return (
    <div className="min-h-screen overflow-x-hidden">
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
        <section id="home" className="mx-auto max-w-6xl px-4 pb-10 pt-12 sm:px-6 lg:px-8 lg:pt-20">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
            <div className="min-w-0">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
                {hero.name}
              </h1>
              <p className="mt-4 font-mono text-sm uppercase tracking-widest text-accent sm:text-base">
                {hero.headline}
              </p>
              <p className="mt-6 max-w-xl text-base leading-7 text-body sm:text-lg sm:leading-8">{hero.summary}</p>

              <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-accent px-5 py-3 text-center font-mono text-sm font-medium text-on-accent transition hover:opacity-85"
                >
                  {hero.cvCta} ↓
                </a>
                <a href="#contact" className={secondaryButton}>
                  {hero.contactCta}
                </a>
                <a href={GITHUB_URL} target="_blank" rel="noreferrer" className={secondaryButton}>
                  {hero.githubCta} ↗
                </a>
              </div>

              <p className="mt-6 font-mono text-xs text-muted">{hero.location}</p>
            </div>

            <IntegrationMap labels={hero.mapLabels} />
          </div>

          <dl className="mt-12 grid grid-cols-2 border-l border-t border-line bg-panel lg:grid-cols-4">
            {content.stats.map((stat) => (
              <div key={stat.label} className="border-b border-r border-line p-4 sm:p-5">
                <dd className="font-mono text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  {stat.value}
                </dd>
                <dt className="mt-2 text-sm leading-5 text-muted">{stat.label}</dt>
              </div>
            ))}
          </dl>

          <div className="mt-8">
            <Label className="mb-3">{hero.highlightsTitle}</Label>
            <BulletList items={hero.highlights} />
          </div>
        </section>

        <Section id="bring" index="01" eyebrow={bring.eyebrow} title={bring.title}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {bring.rows.map((row, index) => (
              <article key={row.area} className="border border-line bg-panel p-4 sm:p-5">
                <p className="font-mono text-xs text-muted">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-2 text-base font-semibold text-ink">{row.area}</h3>
                <p className="mt-2 text-sm leading-6 text-body">{row.evidence}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="platforms" index="02" eyebrow={platforms.eyebrow} title={platforms.title}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {platforms.rows.map((row) => (
              <article key={row.platform} className="border border-line bg-panel">
                <div className="border-b border-line px-4 py-2.5 sm:px-5">
                  <StatusBadge tone={row.tone}>{row.status}</StatusBadge>
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-base font-semibold text-ink">{row.platform}</h3>
                  <p className="mt-2 text-sm leading-6 text-body">{row.purpose}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="experience" index="03" eyebrow={experience.eyebrow} title={experience.title}>
          <ol className="border-l border-line">
            {experience.roles.map((role) => (
              <li key={role.organization} className="relative pb-10 pl-6 last:pb-0 sm:pl-8">
                <span className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] bg-accent" />
                <p className="font-mono text-xs uppercase tracking-widest text-accent">{role.period}</p>
                <h3 className="mt-2 text-lg font-semibold text-ink sm:text-xl">{role.organization}</h3>
                <p className="mt-1 text-sm text-muted">{role.role}</p>
                <div className="mt-4 max-w-3xl">
                  <BulletList items={role.bullets} />
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="clients" index="04" eyebrow={clients.eyebrow} title={clients.title}>
          <div className="grid gap-8">
            {clients.groups.map((group) => (
              <div key={group.kind}>
                <Label className="mb-3">{group.label}</Label>
                <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  {group.names.map((name) =>
                    LOGOS[name] ? (
                      <li
                        key={name}
                        title={name}
                        className="logo-tile flex h-24 items-center justify-center border border-line bg-panel px-5 py-4"
                      >
                        <img
                          src={`/logos/${LOGOS[name]}`}
                          alt={name}
                          loading="lazy"
                          className="logo max-h-full max-w-[68%] object-contain"
                        />
                      </li>
                    ) : (
                      <li
                        key={name}
                        className="flex items-center border border-line bg-panel px-4 py-3 text-sm font-medium leading-5 text-ink"
                      >
                        {name}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="skills" index="05" eyebrow={skills.eyebrow} title={skills.title}>
          <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="border border-line bg-panel">
              {skills.groups.map((group) => (
                <div
                  key={group.area}
                  className="grid gap-3 border-b border-line px-4 py-4 sm:grid-cols-[11rem_1fr] sm:gap-4 sm:px-5"
                >
                  <p className="font-mono text-xs font-medium leading-7 text-accent">{group.area}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </div>
              ))}
              <p className="px-4 py-3 text-sm text-muted sm:px-5">{skills.note}</p>
            </div>

            <div className="self-start border border-line bg-panel">
              <div className="border-b border-line px-4 py-4 sm:px-5">
                <Label>{skills.educationTitle}</Label>
                <p className="mt-2 font-medium text-ink">{skills.degree}</p>
                <p className="mt-1 text-sm leading-6 text-muted">{skills.school}</p>
              </div>
              <div className="px-4 py-4 sm:px-5">
                <Label>{skills.languagesTitle}</Label>
                <p className="mt-2 text-ink">{skills.languages}</p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="contact" index="06" eyebrow={contact.eyebrow} title={contact.title}>
          <div className="grid gap-4 md:grid-cols-3">
            {contact.actions.map((action) => (
              <a
                key={action.kind}
                href={action.href}
                target={action.kind === 'github' ? '_blank' : undefined}
                rel={action.kind === 'github' ? 'noreferrer' : undefined}
                className="group border border-line bg-panel p-4 transition hover:border-accent sm:p-5"
              >
                <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted">
                  <ContactIcon kind={action.kind} />
                  {action.title}
                </span>
                <span className="mt-3 block break-all font-mono text-sm text-ink">{action.description}</span>
                <span className="mt-4 block font-mono text-xs text-accent">{action.cta} →</span>
              </a>
            ))}
          </div>
        </Section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-6 font-mono text-xs text-muted sm:px-6 lg:px-8">
          <span>© {new Date().getFullYear()} Nanut Lertmahakiat</span>
          <span>{hero.location}</span>
        </div>
      </footer>
    </div>
  )
}

export default App
