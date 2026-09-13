import type { Link } from '../../types'

export interface PublicationItem {
  id: string
  title: string
  scholarUrl: string
  authors: string
  journal: string
  year: string
  links: Link[]
}
