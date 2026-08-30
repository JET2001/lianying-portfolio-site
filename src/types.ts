export interface Link {
    label: string
    href: string
    external?: boolean
}

export interface EvidenceEntry {
    label: string
    text: string
}

export interface WorkItem {
    id: string
    title: string
    date: string
    description: string
    links: Link[]
    evidence: EvidenceEntry[]
}

export interface EducationItem {
    id: string
    institution: string
    degree: string
    date: string
    details: string[]
}
