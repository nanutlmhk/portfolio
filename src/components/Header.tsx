import { useState } from 'react'
import type { NavItem, ThemeMode } from '../types/portfolio'

type HeaderProps = {
  navItems: NavItem[]
  resumeButton: string
  controls: {
    english: string
    thai: string
  }
  theme: ThemeMode
  onThemeChange: (theme: ThemeMode) => void
  locale: 'en' | 'th'
  onLocaleChange: (locale: 'en' | 'th') => void
}

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

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/78">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          <a href="#home" className="shrink-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300 sm:text-sm sm:tracking-[0.28em]">
              Nanut Lertmahakiat
            </p>
          </a>

          <div className="flex min-w-0 items-center gap-2">
            <nav className="hidden items-center gap-4 lg:flex xl:gap-5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="whitespace-nowrap text-sm font-medium text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onThemeChange(theme === 'light' ? 'dark' : 'light')}
                aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-cyan-300 hover:text-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-cyan-500 dark:hover:text-white sm:h-10 sm:w-10"
              >
                {theme === 'light' ? (
                  <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-none stroke-current stroke-2">
                    <path
                      d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-none stroke-current stroke-2">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2.2M12 19.8V22M4.93 4.93l1.56 1.56M17.5 17.5l1.57 1.57M2 12h2.2M19.8 12H22M4.93 19.07l1.56-1.56M17.5 6.5l1.57-1.57" strokeLinecap="round" />
                  </svg>
                )}
              </button>

              <div className="flex shrink-0 items-center rounded-full border border-slate-200 bg-white p-1 dark:border-slate-700 dark:bg-slate-900">
                <button
                  type="button"
                  onClick={() => onLocaleChange('en')}
                  className={`rounded-full px-2 py-1.5 text-[11px] font-semibold transition sm:px-2.5 sm:text-xs ${
                    locale === 'en'
                      ? 'bg-cyan-600 text-white'
                      : 'text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white'
                  }`}
                >
                  {controls.english}
                </button>
                <button
                  type="button"
                  onClick={() => onLocaleChange('th')}
                  className={`rounded-full px-2 py-1.5 text-[11px] font-semibold transition sm:px-2.5 sm:text-xs ${
                    locale === 'th'
                      ? 'bg-cyan-600 text-white'
                      : 'text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white'
                  }`}
                >
                  {controls.thai}
                </button>
              </div>

              <a
                href="/assets/Nanut_Lertmahakiat_Resume_CV2026.pdf"
                target="_blank"
                rel="noreferrer"
                className="hidden w-fit rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-900 transition hover:border-cyan-300 hover:bg-cyan-100 dark:border-cyan-800 dark:bg-cyan-950/40 dark:text-cyan-100 dark:hover:bg-cyan-900/50 md:inline-flex"
              >
                {resumeButton}
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen((open) => !open)}
                aria-label="Toggle navigation menu"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-cyan-300 hover:text-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-cyan-500 dark:hover:text-white lg:hidden"
              >
                <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-none stroke-current stroke-2">
                  {mobileMenuOpen ? (
                    <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
                  ) : (
                    <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen ? (
          <nav className="mt-3 grid gap-2 rounded-2xl border border-slate-200/80 bg-white/90 p-3 dark:border-slate-800 dark:bg-slate-900/90 lg:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/assets/Nanut_Lertmahakiat_Resume_CV2026.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl px-3 py-2 text-sm font-medium text-cyan-700 transition hover:bg-cyan-50 dark:text-cyan-300 dark:hover:bg-slate-800"
            >
              {resumeButton}
            </a>
          </nav>
        ) : null}
      </div>
    </header>
  )
}
