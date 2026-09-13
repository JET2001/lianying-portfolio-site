import './experience.css'

import type { ExperienceItem } from './types'
import type { UiStrings } from '../../i18n/types'

export function Experience(items: ExperienceItem[], t: UiStrings): string {
  const content = items
    .map(({ id, company, role, date, links }) => `
      <li class="experience-item" id="experience-${id}">
        <div class="experience-date">${date}</div>
        <div class="experience-content">
          <h3 class="experience-company">${company}</h3>
          <div class="experience-role">${role}</div>
          ${links.length > 0 ? `
            <ul class="experience-links">
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
    <section class="experience" aria-labelledby="experience-heading">
      <h2 class="section-title" id="experience-heading">${t.sections.experience}</h2>
      <ol class="experience-list">${content}</ol>
    </section>
  `
}
