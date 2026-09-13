import './publications.css'

import type { PublicationItem } from './types'
import type { UiStrings } from '../../i18n/types'

export function Publications(items: PublicationItem[], t: UiStrings): string {
  const content = items
    .map(({ id, title, scholarUrl, authors, journal, year, links }) => `
      <li class="publication-item" id="publication-${id}">
        <div class="publication-year">${year}</div>
        <div class="publication-content">
          <h3 class="publication-title">
            <a href="${scholarUrl}" target="_blank" rel="noopener noreferrer">${title}</a>
          </h3>
          <div class="publication-authors">${authors}</div>
          <div class="publication-journal">${journal}</div>
          ${links.length > 0 ? `
            <ul class="publication-links">
              ${links.map(({ label, href, external }) => `
                <li>
                  <a href="${href}"${external ? ' target="_blank" rel="noopener noreferrer"' : ''}>${label}</a>
                </li>
              `).join('')}
            </ul>
          ` : ''}
        </div>
      </li>
    `)
    .join('')

  return `
    <section class="publications" aria-labelledby="publications-heading">
      <h2 class="section-title" id="publications-heading">${t.sections.publications}</h2>
      <ol class="publication-list">${content}</ol>
    </section>
  `
}
