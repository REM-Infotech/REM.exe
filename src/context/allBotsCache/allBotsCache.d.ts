import { Bot } from "../../types/bot"

type TAllBotsCacheProviderProps = {
    children: React.ReactNode
}

type TAllBotsCacheContext = {
    bots: Bot[],
    isLoading: boolean,
    error: string
}

type TBot = Bot;