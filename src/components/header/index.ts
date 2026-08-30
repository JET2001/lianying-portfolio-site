import  '../../style.css' 
import './header.css'
import { type Bio } from './types'
import { type UiStrings } from '../../i18n/types'

export function Header(
  bio: Bio,
  t: UiStrings,
): string {
  const links = bio.links
    .map(({ label, href, external }) => {
      const attributes = external
        ? ' target="_blank" rel="noreferrer"'
        : ''

      return `<a href="${href}"${attributes}>${label}</a>`
    })
    .join('')

  return `
    <header class="bio-hero">
      <img
        class="bio-photo"
        src="/images/lianying.png"
        alt=""
        aria-hidden="true"
      />

      <div class="bio-overlay"></div>

      <div class="bio-content">
        <div class="bio-topline">
          <div>
            <h1>${bio.name}</h1>
            <div class="bio-subtitle">${bio.subtitle}</div>
          </div>

          <div class="bio-meta">
            <button
              class="language-toggle"
              type="button"
              data-language-toggle
              aria-label="Switch language"
            >
              ${t.language.switch}
            </button>
          </div>
        </div>

        <div class="bio-bottom">
          <div class="intro">
            ${bio.intro}
          </div>

          <nav class="links" aria-label="Profile links">
            ${links}
          </nav>
        </div>
      </div>
    </header>
  `
}