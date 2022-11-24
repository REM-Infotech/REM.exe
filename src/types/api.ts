export interface User{
    id: number,
    token: string,
    name: string,
    admin: number | boolean | string,
    access: number | boolean | string
}

export interface Res {
    data: any,
    error: string
}