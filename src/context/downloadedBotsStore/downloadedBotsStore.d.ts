type DownloadedBotsState = {
    saved: {
        [key: string]: boolean
    },
    setSaved: (botId: Number) => void,
    removeSaved: (botId: Number) => void
}

type TDownloadBotStore = (set: any) => DownloadedBotsState;