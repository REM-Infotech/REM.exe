export const links: Links = {
    home: '/',
    bots: {
        mov: '/bot/mov/{botID}',
        pet: '/bot/pet/{botID}',
        inf: '/bot/inf/{botID}',
        par: '/bot/par/{botID}',
        enc: '/bot/enc/{botID}',
        and: '/bot/and/{botID}'
    },
    settings: '/settings',
    logout: '/logout'
}

interface Links {
    home: string,
    bots: {
        mov: string,
        pet: string,
        inf: string,
        par: string,
        enc: string,
        and: string,
        [key: string]: string
    },
    settings: string,
    logout: string,
}