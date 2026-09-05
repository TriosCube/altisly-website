export type Theme = 'light' | 'dark'

export type ThemeMode = Theme | 'system'

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
