import './publications.css'

import type { PublicationItem } from './types'
import type { UiStrings } from '../../i18n/types'

export function Publications(items: PublicationItem[], t: UiStrings): string {
  const content = items
    .map(({ id, title, scholarUrl, authors, journal, year, links }) => `
      <li class="publication-item entry-item" id="publication-${id}">
        <div class="publication-year entry-date">${year}</div>
        <div class="publication-content entry-content">
          <h3 class="publication-title entry-title">
            <a href="${scholarUrl}" target="_blank" rel="noopener noreferrer">${title}</a>
          </h3>
          <div class="publication-authors entry-subtitle">${authors}</div>
          <div class="publication-journal">${journal}</div>
          ${links.length > 0 ? `
            <ul class="publication-links document-links entry-links">
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
    <section class="publications entry-section" aria-labelledby="publications-heading">
      <h2 class="section-title" id="publications-heading">${t.sections.publications}</h2>
      <ol class="publication-list entry-list">${content}</ol>
    </section>
  `
}
