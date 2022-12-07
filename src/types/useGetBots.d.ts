import { Bot } from "./Bots"

type TGetBots = () => Promise<any>

type TReturnBots = {
    bots: Bot[] | null;
    isLoading: boolean;
    error: string | null;
}

type TUseGetBots = () => TReturnBots

export {
    TGetBots,
    TUseGetBots,
    TReturnBots
}