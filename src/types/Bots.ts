export interface Bot {
    id: number,
    title: string,
    description: string,
    chips: Chip[]
}

export interface Chip {
    label: string,
    link: string
}