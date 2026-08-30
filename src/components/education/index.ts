import '../../style.css'
import './education.css'

import type { EducationItem } from '../../types'
import type { UiStrings } from '../../i18n/types'

export function Education(
  items: EducationItem[],
  t: UiStrings,
): string {
  const content = items
    .map(
      ({ institution, degree, date, details }) => `
        <li class="item">
          <div class="education-date">${date}</div>

          <div class="title">${institution}</div>
          <div class="small">${degree}</div>

          ${
            details.length > 0
              ? `
                <ul class="education-details">
                  ${details
                    .map(
                      ({ label, href, external }) => `
                        <li>
                          <a
                            href="${href}"
                            ${external ? 'target="_blank" rel="noopener noreferrer"' : ''}
                          >${label}</a>
                        </li>
                      `,
                    )
                    .join('')}
                </ul>
              `
              : ''
          }
        </li>
      `,
    )
    .join('')

  return `
    <section>
      <div class="section-title">${t.sections.education}</div>

      <ol>
        ${content}
      </ol>
    </section>
  `
}