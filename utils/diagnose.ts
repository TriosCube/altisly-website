export const briefFields = [
  'business',
  'industry',
  'offering',
  'teamSize',
  'friction',
  'tools',
  'name',
  'email',
] as const

export type BriefField = (typeof briefFields)[number]

export type DiagnoseBrief = Record<BriefField, string>

export const briefFieldLimit = 400

export const requiredBriefFields: BriefField[] = [
  'business',
  'industry',
  'offering',
  'friction',
  'email',
]

export const emptyBrief: DiagnoseBrief = {
  business: '',
  industry: '',
  offering: '',
  teamSize: '',
  friction: '',
  tools: '',
  name: '',
  email: '',
}

export interface SurveyFriction {
  name: string
  symptom: string
  evidence: string
  cost: string
}

export interface DiagnoseSurvey {
  read: string
  frictions: SurveyFriction[]
  blind_spot: string
  questions: string[]
}

export interface ConceptModule {
  name: string
  does: string
}

export interface ConceptAgent {
  name: string
  owns: string
}

export interface ConceptPhase {
  stage: string
  move: string
  output: string
}

export interface DiagnoseConcept {
  system_name: string
  premise: string
  modules: ConceptModule[]
  agents: ConceptAgent[]
  phases: ConceptPhase[]
  wedge: string
  first_move: string
}

export interface DiagnoseReport {
  survey: DiagnoseSurvey
  concept: DiagnoseConcept
}

export interface DiagnoseResponse {
  report?: DiagnoseReport
  error?: string
}

export const stageOrder = ['Scan', 'Diagnose', 'Concept', 'Agents', 'Ship'] as const

export function looksLikeEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)
}
