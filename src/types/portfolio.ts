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

export type FocusArea = {
  title: string
  description: string
}

export type Project = {
  title: string
  category: string
  summary: string
  challenge: string
  delivery: string
  impact: string[]
  systems: string[]
  tags: string[]
}

export type HospitalExperience = {
  organization: string
  role: string
  period: string
  description: string
  highlights: string[]
}

export type ResumeHighlight = {
  title: string
  description: string
}

export type ContactAction = {
  title: string
  description: string
  href: string
  cta: string
}

export type SectionLabels = {
  problemSolved: string
  systemDelivered: string
  outcomeFocus: string
  systems: string
}

export type PortfolioContent = {
  navItems: NavItem[]
  tagline: string
  resumeButton: string
  hero: {
    title: string
    description: string
    availability: string[]
    experienceTitle: string
    skillTitle: string
    skillChips: string[]
    primaryCta: string
    secondaryCta: string
  }
  stats: Stat[]
  focusAreas: FocusArea[]
  about: {
    eyebrow: string
    title: string
    description: string
    paragraphs: string[]
    expertiseTitle: string
    expertise: string[]
    interestsTitle: string
    interestsDescription: string
  }
  experience: {
    eyebrow: string
    title: string
    description: string
    imageTitle: string
    imageDescription: string
    entries: HospitalExperience[]
  }
  projectsSection: {
    eyebrow: string
    title: string
    description: string
    labels: SectionLabels
    entries: Project[]
  }
  resume: {
    eyebrow: string
    title: string
    description: string
    downloadEyebrow: string
    downloadTitle: string
    downloadDescription: string
    downloadCta: string
    highlights: ResumeHighlight[]
    capabilitiesTitle: string
    capabilities: string[]
  }
  contact: {
    eyebrow: string
    title: string
    description: string
    actions: ContactAction[]
  }
  controls: {
    english: string
    thai: string
  }
}
