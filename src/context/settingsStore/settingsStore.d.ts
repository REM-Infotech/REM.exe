interface SettingsStore {
    fontSize: number;
    setSettings: (SettingsValues) => void,
    reset: () => void
}

interface SettingsValues {
    fontSize: number
}