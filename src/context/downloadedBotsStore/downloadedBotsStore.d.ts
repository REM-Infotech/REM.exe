type DownloadedBotsState = {
    saved: {
        [key: string]: Boolean
    },
    setSaved: (botId: Number) => void
}