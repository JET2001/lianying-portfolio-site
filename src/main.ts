import './style.css'

import { Header } from './components/header'
import { Education } from './components/education'
import { ui } from './i18n'
import type { Locale, UiStrings } from './i18n/types'
import type { Bio } from './components/header/types'

let locale = getInitialLocale()

async function render(): Promise<void> {
  const app = document.querySelector<HTMLDivElement>('#app')

  if (!app) {
    throw new Error('#app element not found')
  }

  try {
    const data = await loadPageData(locale)
    const ui_language : UiStrings = ui[locale]

    setDocumentLanguage(locale)

    app.innerHTML = `
      <div class="wrap">
        ${Header(data.bio, ui_language)}
        <main>
        ${Education(data.education, ui_language)}
        </main>      
      </div>
      
    `

    document
      .querySelector<HTMLButtonElement>('[data-language-toggle]')
      ?.addEventListener('click', () => {
        locale = locale === 'en' ? 'zh' : 'en'
        saveLocale(locale)
        void render()
      })
  } catch (error) {
    console.error(error)

    app.innerHTML = `
      <div class="load-error">
        Unable to load portfolio data.
      </div>
    `
  }
}

void render()

// =========================================================================

function getInitialLocale(): Locale {
  const params = new URLSearchParams(window.location.search)
  const urlLocale = params.get('lang')

  if (urlLocale === 'en' || urlLocale === 'zh') {
    return urlLocale
  }

  const savedLocale = localStorage.getItem('locale')

  if (savedLocale === 'en' || savedLocale === 'zh') {
    return savedLocale
  }

  return navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en'
}

async function loadJson<T>(
  locale: Locale,
  file: string,
): Promise<T> {
  const response = await fetch(`/data/${locale}/${file}.json`)

  if (!response.ok) {
    throw new Error(`Failed to load /data/${locale}/${file}.json`)
  }

  return response.json() as Promise<T>
}

async function loadPageData(locale: Locale) {
  const [bio, education] = await Promise.all([
    loadJson<Bio>(locale, 'bio'),
    loadJson<EducationItem[]>(locale, 'education'),
  ])

  return {
    bio,
    education,
  }
}

function saveLocale(locale: Locale): void {
  localStorage.setItem('locale', locale)

  const url = new URL(window.location.href)
  url.searchParams.set('lang', locale)

  window.history.replaceState({}, '', url)
}

function setDocumentLanguage(locale: Locale): void {
  document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en'
}