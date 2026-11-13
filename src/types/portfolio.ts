export type Locale = 'en' | 'th'
export type ThemeMode = 'light' | 'dark'

export type NavItem = {
  label: string
  href: string
}

export type Stat = {
  value: string
  label: string
}

export type StatusTone = 'live' | 'progress' | 'demo'

export type EvidenceRow = {
  area: string
  evidence: string
}

export type CareerRole = {
  organization: string
  role: string
  period: string
  bullets: string[]
}

export type PlatformRow = {
  platform: string
  purpose: string
  status: string
  tone: StatusTone
}

export type NetworkGroup = {
  kind: 'client' | 'partner'
  label: string
  names: string[]
}

export type SkillGroup = {
  area: string
  items: string[]
}

export type ContactAction = {
  kind: 'email' | 'phone' | 'github'
  title: string
  description: string
  href: string
  cta: string
}

export type PortfolioContent = {
  navItems: NavItem[]
  resumeButton: string
  hero: {
    name: string
    headline: string
    summary: string
    location: string
    cvCta: string
    contactCta: string
    githubCta: string
    highlightsTitle: string
    highlights: string[]
    twin: {
      note: string
      legend: { staff: string; patient: string; journey: string }
    }
  }
  stats: Stat[]
  bring: {
    eyebrow: string
    title: string
    rows: EvidenceRow[]
  }
  management: {
    eyebrow: string
    title: string
    rows: EvidenceRow[]
  }
  platforms: {
    eyebrow: string
    title: string
    rows: PlatformRow[]
  }
  experience: {
    eyebrow: string
    title: string
    roles: CareerRole[]
  }
  clients: {
    eyebrow: string
    title: string
    groups: NetworkGroup[]
  }
  skills: {
    eyebrow: string
    title: string
    groups: SkillGroup[]
    note: string
    educationTitle: string
    degree: string
    school: string
    languagesTitle: string
    languages: string
  }
  contact: {
    eyebrow: string
    title: string
    actions: ContactAction[]
  }
  controls: {
    english: string
    thai: string
  }
}
