import type { Theme, ThemeMode } from './types'

export const THEME_KEY = 'altisly-theme'

function systemTheme(): Theme {
  return typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function resolveTheme(mode: ThemeMode): Theme {
  return mode === 'system' ? systemTheme() : mode
}

export function getThemeMode(): ThemeMode {
  const v = typeof localStorage !== 'undefined' ? localStorage.getItem(THEME_KEY) : null
  return v === 'light' || v === 'dark' || v === 'system' ? v : 'system'
}

export function setThemeMode(mode: ThemeMode): void {
  try {
    localStorage.setItem(THEME_KEY, mode)
  } catch {
    /* ignore */
  }
  document.documentElement.setAttribute('data-theme', resolveTheme(mode))
}

let themeListenerBound = false
export function initTheme(): void {
  document.documentElement.setAttribute('data-theme', resolveTheme(getThemeMode()))
  if (themeListenerBound || typeof window === 'undefined') return
  themeListenerBound = true
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (getThemeMode() === 'system') {
      document.documentElement.setAttribute('data-theme', resolveTheme('system'))
    }
  })
}

export function cycleTheme(): ThemeMode {
  const cur = getThemeMode()
  const next: ThemeMode = cur === 'light' ? 'dark' : cur === 'dark' ? 'system' : 'light'
  setThemeMode(next)
  return next
}

export function formatCurrency(value: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(value)
}
