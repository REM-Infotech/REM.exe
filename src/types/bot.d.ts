export interface Bot {
    id: number,
    title: string,
    description: string,
    type: string,
    plataform?: string,
    link: string
}

export interface Chip {
    label: string,
    link: string
}