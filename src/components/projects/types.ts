import type { Link } from '../../types'

export interface ProjectItem {
  id: string
  title: string
  context: string
  date: string
  links: Link[]
}
