import useSettingsStore from "../context/settingsStore";

const useSetSettings = () => {
    const { setSettings } = useSettingsStore(state => ({ setSettings: state.setSettings }))

    const set = (settings: SettingsValues) => {
        setSettings(settings)
    }

    return set
}

export default useSetSettings;