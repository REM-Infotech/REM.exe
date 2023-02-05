import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const downloadedBotsStore: TDownloadBotStore = (set: any) => <DownloadedBotsState>({
    saved: {},
    setSaved: (botId: Number) => set((state: DownloadedBotsState) => {
        let newSaved = {
            ...state.saved
        }
        newSaved[botId.toString()] = true;

        return ({
            saved: {
                ...newSaved
            }
        })
    }),
    removeSaved: (botId: Number) => set((state: DownloadedBotsState) => {
        let newSaved = {
            ...state.saved
        }
        newSaved[botId.toString()] = false;

        return ({
            saved: {
                ...newSaved
            }
        })
    })
})

const useDownloadedBotsStore = create(
    devtools(
        persist<DownloadedBotsState>(downloadedBotsStore, {
            name: 'downloadedBots'
        })
    )
)

export default useDownloadedBotsStore;