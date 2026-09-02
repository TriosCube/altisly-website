export type Theme = 'light' | 'dark'

export type ThemeMode = Theme | 'system'

export interface NavLink {
  label: string
  href: string
}

export interface OnboardingState {
  company: string
  entity: string
  region: string
  currency: string
  role: string
  modules: string[]
  team: { email: string; role: string }[]
}

export interface BentoCardVariant {
  type: 'default' | 'dark' | 'lime' | 'globe'
  span?: 'wide' | 'tall' | 'globe'
}

export interface Testimonial {
  avatar: string
  name: string
  role: string
  company: string
  quote: string
  stats: { value: string; label: string }[]
}

export type ProjectStatus = 'Active' | 'Shipped' | 'Maintained'

export interface DiagramNode {
  label: string
  note?: string
  accent?: boolean
}

export interface DiagramLayer {
  label: string
  nodes: DiagramNode[]
}

export interface Diagram {
  caption: string
  layers: DiagramLayer[]
}

export interface Decision {
  title: string
  body: string
  rejected: string
}

export interface BuildRow {
  component: string
  detail: string
}

export interface Project {
  slug: string
  name: string
  tagline: string
  role: string
  period: string
  status: ProjectStatus
  scale?: string
  summary: string
  problem: string[]
  decisions: Decision[]
  build: BuildRow[]
  outcome: string[]
  stack: string[]
  diagram?: Diagram
  image?: string
  featured?: boolean
}
