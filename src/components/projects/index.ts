import './projects.css'

import type { ProjectItem } from './types'
import type { UiStrings } from '../../i18n/types'

export function Projects(items: ProjectItem[], t: UiStrings): string {
  const content = items
    .map(({ id, title, context, date, links }) => `
      <li class="project-item" id="project-${id}">
        <div class="project-date">${date}</div>
        <div class="project-content">
          <h3 class="project-title">${title}</h3>
          <div class="project-context">${context}</div>
          ${links.length > 0 ? `
            <ul class="project-links">
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
    <section class="project" aria-labelledby="project-heading">
      <h2 class="section-title" id="project-heading">${t.sections.selectedWork}</h2>
      <ol class="project-list">${content}</ol>
    </section>
  `
}
