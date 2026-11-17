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

export type Offer = {
  tag: string
  title: string
  text: string
  items: string[]
  cta: string
  href: string
}

export type SkillGroup = {
  area: string
  items: string[]
}

export type ContactAction = {
  kind: 'email' | 'phone' | 'github' | 'linkedin'
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
    openTo: string
    cvCta: string
    contactCta: string
    githubCta: string
    linkedinCta: string
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
  about: {
    eyebrow: string
    title: string
    photoAlt: string
    paragraphs: string[]
    principles: { title: string; text: string }[]
  }
  work: {
    eyebrow: string
    title: string
    intro: string
    hire: Offer
    consult: Offer
    processTitle: string
    process: { title: string; text: string }[]
    note: string
  }
  management: {
    eyebrow: string
    title: string
    rows: EvidenceRow[]
  }
  platforms: {
    eyebrow: string
    title: string
    note: string
    artLabel: string
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
