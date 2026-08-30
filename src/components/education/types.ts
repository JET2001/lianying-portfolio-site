import { type Link } from "../../types"
export interface EducationItem {
    id: string
    institution: string
    degree: string
    date: string
    details: Link[]
}
