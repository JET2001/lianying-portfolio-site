import type { Link } from '../../types'

export interface ExperienceItem {
  id: string
  company: string
  role: string
  date: string
  links: Link[]
}
