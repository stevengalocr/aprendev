'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'
import { Locale, translations, t as translate } from './index'

interface I18nContextValue {
  locale: Locale
  setLocale: (l: Locale) => void
  t: (section: keyof typeof translations.es, key: string, vars?: Record<string, string | number>) => string
}

const I18nContext = createContext<I18nContextValue>({
  locale: 'es',
  setLocale: () => {},
  t: (section, key) => key,
})

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('es')

  useEffect(() => {
    const saved = localStorage.getItem('aprendev_locale') as Locale | null
    if (saved && ['es', 'en', 'pt'].includes(saved)) setLocaleState(saved)
  }, [])

  const setLocale = (l: Locale) => {
    setLocaleState(l)
    localStorage.setItem('aprendev_locale', l)
  }

  const t = (section: keyof typeof translations.es, key: string, vars?: Record<string, string | number>) =>
    translate(locale, section, key, vars)

  return <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  return useContext(I18nContext)
}
