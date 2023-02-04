type DownloadedBotsState = {
    saved: {
        [key: string]: boolean
    },
    setSaved: (botId: Number) => void
}