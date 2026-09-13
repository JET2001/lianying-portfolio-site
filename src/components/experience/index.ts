import './experience.css'

import type { ExperienceItem } from './types'
import type { UiStrings } from '../../i18n/types'

export function Experience(items: ExperienceItem[], t: UiStrings): string {
  const content = items
    .map(({ id, company, role, date, links }) => `
      <li class="experience-item entry-item" id="experience-${id}">
        <div class="experience-date entry-date">${date}</div>
        <div class="experience-content entry-content">
          <h3 class="experience-company entry-title">${company}</h3>
          <div class="experience-role entry-subtitle">${role}</div>
          ${links.length > 0 ? `
            <ul class="experience-links document-links entry-links">
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
    <section class="experience entry-section" aria-labelledby="experience-heading">
      <h2 class="section-title" id="experience-heading">${t.sections.experience}</h2>
      <ol class="experience-list entry-list">${content}</ol>
    </section>
  `
}
