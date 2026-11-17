import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { CountUp } from './components/CountUp'
import { HospitalTwin } from './components/HospitalTwin'
import { PlatformArt, type PlatformArtKind } from './components/PlatformArt'
import { BulletList, Label, Section, StatusBadge, Tag } from './components/ui'
import { GITHUB_URL, LINKEDIN_URL, LOGOS, portfolioContent, RESUME_URL } from './data/portfolioData'
import type { ContactAction, Locale, Offer, ThemeMode } from './types/portfolio'

const THEME_KEY = 'portfolio-theme'
const LOCALE_KEY = 'portfolio-locale'

function ContactIcon({ kind }: { kind: ContactAction['kind'] }) {
  if (kind === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    )
  }

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

// One thumbnail per platform card, in the same order as `platforms.rows` in portfolioData.ts.
const PLATFORM_ART: PlatformArtKind[] = ['chart', 'order', 'archive', 'imaging', 'locked', 'twin']

function OfferCard({ offer }: { offer: Offer }) {
  return (
    <article className="art-card flex flex-col border border-line bg-panel">
      <div className="border-b border-line px-4 py-2.5 font-mono text-xs uppercase tracking-widest text-accent sm:px-5">
        {offer.tag}
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-lg font-semibold text-ink">{offer.title}</h3>
        <p className="mt-2 text-sm leading-6 text-muted">{offer.text}</p>
        <div className="mt-4">
          <BulletList items={offer.items} />
        </div>
        <a
          href={offer.href}
          className="mt-6 self-start bg-accent px-5 py-3 font-mono text-sm font-medium text-on-accent transition hover:opacity-85"
        >
          {offer.cta} →
        </a>
      </div>
    </article>
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
    if (!('IntersectionObserver' in window)) {
      return
    }

    // Sections fade in as they scroll into view. The class is only added once
    // the observer exists, so content is never hidden if this does not run.
    document.documentElement.classList.add('js-reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -8% 0px' },
    )
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
    window.localStorage.setItem(LOCALE_KEY, locale)
  }, [locale])

  const content = portfolioContent[locale]

  // The browser tab title and description follow the selected language.
  // Link previews (LINE, LinkedIn, Facebook) read the static tags in index.html.
  useEffect(() => {
    document.title = content.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', content.meta.description)
  }, [content])
  const { hero, about, bring, management, platforms, experience, work, clients, skills, contact } = content

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
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div className="min-w-0">
              <h1 className="text-[2rem] font-semibold min-[360px]:text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
                {hero.name.split(' ').map((part) => (
                  <span key={part} className="inline-block">
                    {part}&nbsp;
                  </span>
                ))}
              </h1>
              <p className="mt-4 font-mono text-sm uppercase tracking-widest text-accent sm:text-base">
                {hero.headline}
              </p>
              <p className="mt-6 max-w-xl text-base leading-7 text-body sm:text-lg sm:leading-8">{hero.summary}</p>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="col-span-2 bg-accent px-5 py-3 text-center font-mono text-sm font-medium text-on-accent transition hover:opacity-85"
                >
                  {hero.cvCta} ↓
                </a>
                <a href="#work" className={`col-span-2 ${secondaryButton}`}>
                  {hero.contactCta}
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className={secondaryButton}>
                  {hero.linkedinCta} ↗
                </a>
                <a href={GITHUB_URL} target="_blank" rel="noreferrer" className={secondaryButton}>
                  {hero.githubCta} ↗
                </a>
              </div>

              <p className="mt-6 flex items-center gap-2 font-mono text-xs text-accent">
                <span className="pulse-dot h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {hero.openTo}
              </p>
              <p className="mt-2 font-mono text-xs text-muted">{hero.location}</p>
            </div>

            <HospitalTwin locale={locale} note={hero.twin.note} legend={hero.twin.legend} />
          </div>

          <dl className="mt-12 grid grid-cols-2 border-l border-t border-line bg-panel lg:grid-cols-4">
            {content.stats.map((stat) => (
              <div key={stat.label} className="border-b border-r border-line p-4 sm:p-5">
                <dd className="font-mono text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  <CountUp value={stat.value} />
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

        <Section id="about" index="01" eyebrow={about.eyebrow} title={about.title}>
          <div className="grid items-start gap-8 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="relative mx-auto w-full max-w-[280px] md:mx-0">
              <img
                src="/photo/nanut.jpg"
                alt={about.photoAlt}
                width={720}
                height={900}
                loading="lazy"
                className="portrait block aspect-[4/5] w-full border border-line object-cover"
              />
              <span aria-hidden="true" className="portrait-corner portrait-corner-tl" />
              <span aria-hidden="true" className="portrait-corner portrait-corner-br" />
            </div>
            <div className="max-w-2xl">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-7 text-body [&:not(:first-child)]:mt-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <div className="stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {about.principles.map((item) => (
                <article key={item.title} className="border border-line border-l-2 border-l-accent bg-panel p-4 sm:p-5">
                  <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-body">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section id="bring" index="02" eyebrow={bring.eyebrow} title={bring.title}>
          <div className="stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {bring.rows.map((row, index) => (
              <article key={row.area} className="border border-line bg-panel p-4 sm:p-5">
                <p className="font-mono text-xs text-muted">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-2 text-base font-semibold text-ink">{row.area}</h3>
                <p className="mt-2 text-sm leading-6 text-body">{row.evidence}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="management" index="03" eyebrow={management.eyebrow} title={management.title}>
          <div className="stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {management.rows.map((row) => (
              <article key={row.area} className="border border-line border-l-2 border-l-accent bg-panel p-4 sm:p-5">
                <h3 className="text-base font-semibold text-ink">{row.area}</h3>
                <p className="mt-2 text-sm leading-6 text-body">{row.evidence}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="platforms"
          index="04"
          eyebrow={platforms.eyebrow}
          title={platforms.title}
          description={platforms.note}
        >
          <div className="stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {platforms.rows.map((row, index) => (
              <article key={row.platform} className="art-card border border-line bg-panel">
                <PlatformArt kind={PLATFORM_ART[index] ?? 'locked'} label={`${row.platform}: ${platforms.artLabel}`}
                  locale={locale}
                />
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

        <Section id="experience" index="05" eyebrow={experience.eyebrow} title={experience.title}>
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

        <Section id="work" index="06" eyebrow={work.eyebrow} title={work.title} description={work.intro}>
          <div className="stagger grid gap-4 lg:grid-cols-2">
            <OfferCard offer={work.hire} />
            <OfferCard offer={work.consult} />
          </div>

          <div className="mt-10">
            <Label className="mb-4">{work.processTitle}</Label>
            <ol className="stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {work.process.map((step, index) => (
                <li key={step.title} className="border border-line bg-panel p-4 sm:p-5">
                  <p className="font-mono text-xs text-accent">{String(index + 1).padStart(2, '0')}</p>
                  <h4 className="mt-2 text-base font-semibold text-ink">{step.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-body">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-6 text-muted">{work.note}</p>
        </Section>

        <Section id="clients" index="07" eyebrow={clients.eyebrow} title={clients.title}>
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

        <Section id="skills" index="08" eyebrow={skills.eyebrow} title={skills.title}>
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

        <Section id="contact" index="09" eyebrow={contact.eyebrow} title={contact.title}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contact.actions.map((action) => (
              <a
                key={action.kind}
                href={action.href}
                target={action.kind === 'github' || action.kind === 'linkedin' ? '_blank' : undefined}
                rel={action.kind === 'github' || action.kind === 'linkedin' ? 'noreferrer' : undefined}
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
          <span>
            © {new Date().getFullYear()} {hero.name}
          </span>
          <span>{hero.location}</span>
        </div>
      </footer>
    </div>
  )
}

export default App
