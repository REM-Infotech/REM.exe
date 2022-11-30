import create from 'zustand';
import {devtools, persist} from 'zustand/middleware';

const settingsStore = (set: any) => ({
    fontSize: 14,
    setSettings: (settings: SettingsValues) => set((state: SettingsStore) => ({
        fontSize: settings.fontSize
    })),
    reset: () => set({
        fontSize: 14 
    })
})

const useSettingsStore = create(
    devtools(
        persist<SettingsStore>(settingsStore, {
            name: 'settings'
        })
    )
)

export default useSettingsStore;