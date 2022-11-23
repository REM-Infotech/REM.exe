import { windowOptions } from "../constants/window";

const remote = require('@electron/remote')

const closeWindow: Function = () => {
    // const wd = window;
    // wd.close();
    const window = remote.getCurrentWindow();
    window.close();
}
const minimizeWindow: Function = () => {
    const window = remote.getCurrentWindow();
    window.minimize();
}
const maximizeWindow: Function = () => {
    const window = remote.getCurrentWindow();
    if(window.isMaximized()) {
        console.log(window)
        window.unmaximize()
        return 
    }
    window.maximize();
}

const isMaximized = () => {
    const window = remote.getCurrentWindow();
    return window.isMaximized()
}

export {
    closeWindow, 
    minimizeWindow,
    maximizeWindow,
    isMaximized
}
