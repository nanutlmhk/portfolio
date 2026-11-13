import { useState } from 'react'
import { RESUME_URL } from '../data/portfolioData'
import type { Locale, NavItem, ThemeMode } from '../types/portfolio'

type HeaderProps = {
  navItems: NavItem[]
  resumeButton: string
  controls: {
    english: string
    thai: string
  }
  theme: ThemeMode
  onThemeChange: (theme: ThemeMode) => void
  locale: Locale
  onLocaleChange: (locale: Locale) => void
}

const iconButton =
  'inline-flex h-9 w-9 items-center justify-center border border-line bg-panel text-muted transition hover:border-accent hover:text-accent'

export function Header({
  navItems,
  resumeButton,
  controls,
  theme,
  onThemeChange,
  locale,
  onLocaleChange,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const localeButton = (value: Locale, label: string) => (
    <button
      type="button"
      onClick={() => onLocaleChange(value)}
      aria-pressed={locale === value}
      className={`h-full px-2.5 font-mono text-xs font-medium transition ${
        locale === value ? 'bg-accent text-on-accent' : 'text-muted hover:text-ink'
      }`}
    >
      {label}
    </button>
  )

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between gap-3">
          <a href="#home" className="flex min-w-0 items-center gap-2 font-mono text-sm font-medium text-ink">
            <span className="pulse-dot h-2 w-2 shrink-0 rounded-full bg-accent" />
            <span className="truncate">nanut.lertmahakiat</span>
          </a>

          <div className="flex items-center gap-2">
            <nav className="mr-2 hidden items-center gap-5 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="whitespace-nowrap font-mono text-xs uppercase tracking-wider text-muted transition hover:text-accent"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              type="button"
              onClick={() => onThemeChange(theme === 'light' ? 'dark' : 'light')}
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              className={iconButton}
            >
              {theme === 'light' ? (
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                  <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                  <circle cx="12" cy="12" r="4" />
                  <path
                    d="M12 2v2.2M12 19.8V22M4.93 4.93l1.56 1.56M17.5 17.5l1.57 1.57M2 12h2.2M19.8 12H22M4.93 19.07l1.56-1.56M17.5 6.5l1.57-1.57"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>

            <div className="flex h-9 shrink-0 items-stretch border border-line bg-panel">
              {localeButton('en', controls.english)}
              {localeButton('th', controls.thai)}
            </div>

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden h-9 items-center border border-accent px-3.5 font-mono text-xs font-medium uppercase tracking-wider text-accent transition hover:bg-accent hover:text-on-accent md:inline-flex"
            >
              {resumeButton} ↓
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className={`${iconButton} lg:hidden`}
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                {mobileMenuOpen ? (
                  <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen ? (
          <nav className="grid border-t border-line py-2 lg:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-1 py-2.5 font-mono text-sm uppercase tracking-wider text-body transition hover:text-accent"
              >
                {item.label}
              </a>
            ))}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="px-1 py-2.5 font-mono text-sm uppercase tracking-wider text-accent"
            >
              {resumeButton} ↓
            </a>
          </nav>
        ) : null}
      </div>
    </header>
  )
}
