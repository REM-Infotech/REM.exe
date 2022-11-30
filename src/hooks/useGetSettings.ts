import useSettingsStore from "../context/settingsStore";

const useGetSettings = () => {
    const { fontSize } = useSettingsStore(state => ({ fontSize: state.fontSize }))
    const settings = {
        fontSize: fontSize
    }

    return settings
}

export default useGetSettings;