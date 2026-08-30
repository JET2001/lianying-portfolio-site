import { en } from './en'
import { zh } from './zh'

export type Locale = 'en' | 'zh'
export type UiStrings = typeof en

export const ui: Record<Locale, UiStrings> = {
  en,
  zh,
}