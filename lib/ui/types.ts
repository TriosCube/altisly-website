import type { Component } from 'vue'

export type IcTone = 'brand' | 'positive' | 'negative' | 'warn' | 'danger' | 'muted'

export type IcAlign = 'start' | 'center' | 'end'

export type IcPrimitive = string | number | boolean

export type IcSelectOption = {
  value: string | number
  label: string
  disabled?: boolean
  image?: string
}

export type IcPhoneCountry = {
  code: string
  name: string
  flag?: string
  dial_code?: string | null
  dialCode?: string | null
}

export type IcDataTableColumn<T = unknown> = {
  key: string
  label: string
  sortable?: boolean
  align?: 'left' | 'right' | 'center'
  width?: string
  className?: string
  headerClassName?: string
  sortAccessor?: (row: T) => string | number | null | undefined
  format?: (row: T) => string
  hidden?: boolean
  fixed?: 'left' | 'right'
}

export type IcDataTableSort = { key: string; dir: 'asc' | 'desc' } | null

export type IcDataTablePinState = Record<string, 'left' | 'right' | undefined>

export type IcMetricTone = 'default' | 'positive' | 'negative' | 'warn' | 'brand'
export type IcMetricMetaTone = 'muted' | 'positive' | 'negative' | 'warn'
export type IcMetricDeltaDir = 'pos' | 'neg' | 'flat'

export type IcMetricItem = {
  label: string
  value: string | number
  meta?: string
  valueTone?: IcMetricTone
  metaTone?: IcMetricMetaTone
  delta?: string
  deltaDir?: IcMetricDeltaDir
  money?: boolean
}

export type IcMetricColumns =
  | number
  | { base?: number; sm?: number; md?: number; lg?: number; xl?: number }

export type IcMetricGap = '2' | '2.5' | '3' | '4'

export type IcCalendarMode = 'day' | 'day-range' | 'week' | 'week-range'

export type IcDateRange = { start: string; end: string }

export type IcCalendarValue = string | IcDateRange | null

export type IcDropdownItem = {
  kind?: 'item'
  value: string | number
  label: string
  hint?: string
  icon?: Component
  disabled?: boolean
}

export type IcDropdownSeparator = { kind: 'separator' }
export type IcDropdownLabel = { kind: 'label'; label: string }

export type IcDropdownOption = IcDropdownItem | IcDropdownSeparator | IcDropdownLabel

export type IcDropdownNormalizedOption =
  | (IcDropdownItem & { kind: 'item' })
  | IcDropdownSeparator
  | IcDropdownLabel

export type IcActionMenuItem =
  | {
      kind?: 'item'
      value: string | number
      label: string
      icon?: Component
      danger?: boolean
      disabled?: boolean
    }
  | { kind: 'separator' }

export type IcTabOption<T> = { value: T; label: string; disabled?: boolean }

export type IcEmptyStateKind =
  | 'default'
  | 'search'
  | 'notFound'
  | 'construction'
  | 'celebration'
  | 'error'

export type IcDrawerSkeletonShape = 'form' | 'detail' | 'list' | 'generic'

export type IcChartDatum = { label: string; value: number; tone?: IcTone }

export type IcDonutItem = IcChartDatum & { color?: string }

export type IcChartLegendItem = { label: string; tone: IcTone }

export type IcBarGroup = { label: string; bars: { value: number; tone: IcTone }[] }

export type EvidenceSource = 'BANK_API' | 'EMAIL' | 'STATEMENT' | 'SCRAPE' | 'MANUAL'

export type ReconState = 'UNMATCHED' | 'SUGGESTED' | 'LIKELY' | 'CONFIRMED' | 'RECONCILED'

export interface IcBillingCardValue {
  name: string
  number: string
  expiry: string
  cvc: string
}

export type IcBillingCardField = keyof IcBillingCardValue

export type CookieChoice = 'accepted' | 'declined'
export type CookieBannerMode = 'choice' | 'essential'

export type CookieConsentPersister = (payload: {
  choice: CookieChoice
  mode: CookieBannerMode
}) => void | Promise<unknown>

export interface IcSearchPaletteItem {
  id: string
  label: string
  section?: string
  pageTitle?: string
  summary?: string
  icon?: string
  keywords?: string[]
  highlights?: { heading: string; snippet: string }[]
}

export interface IcSearchPaletteRow {
  item: IcSearchPaletteItem
  kind: 'page' | 'highlight'
  heading: string
  snippet: string
  score: number
}

export interface KeneExample {
  short: string
  full: string
}

export interface KeneLane {
  key: string
  label: string
  disabled?: boolean
  hint?: string
}

export interface KeneModelOption {
  key: string
  label: string
  disabled?: boolean
  hint?: string
}

export interface KeneImageAttachment {
  mimeType: string
  dataBase64: string
  dataUrl: string
  name?: string
  sizeBytes: number
}

export interface KeneAudioAttachment {
  mimeType: string
  dataBase64: string
  durationMs: number
}

export interface KeneTurn {
  prompt: string
  images?: KeneImageAttachment[]
  audio?: KeneAudioAttachment
  model?: string
}

export interface AgentChatAction {
  id: string
  label: string
  icon?: string
  meta?: Record<string, unknown>
}

export type AgentChatRole = 'user' | 'agent' | 'event'

export interface AgentChatMessage {
  id: string
  role: AgentChatRole
  text: string
  streaming?: boolean
  actions?: AgentChatAction[]
  status?: 'pending' | 'done' | 'failed'
  images?: { dataUrl: string }[]
  audioSeconds?: number
  at: number
}

export interface AgentChatTurn {
  prompt: string
  images?: KeneImageAttachment[]
  audio?: KeneAudioAttachment
}

export interface AgentChatSuggestion {
  title: string
  prompt: string
}

export type IcApplicationBadgePosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

export type IcFactorKind = 'authenticator' | 'passkey' | 'recovery'
export type IcPasskeyAuthenticator = 'this-device' | 'security-key'
