import { isMaximized as isMax } from "../service/electron-remote"

const useIsMaximized = () => {

    const isMaximized = () => {
        return isMax
    }

    return isMaximized
}

export default useIsMaximized;