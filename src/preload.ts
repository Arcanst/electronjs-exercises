import { MESSAGES } from './constants';

const {
    contextBridge,
    ipcRenderer,
} = require("electron");

contextBridge
    .exposeInMainWorld(
        "api",
        {
            getConfig: (): void => {
                ipcRenderer.send(MESSAGES.GET_CONFIG);
            },
            receiveConfig: (func: (...args: any) => void) => {
                ipcRenderer.on(MESSAGES.GET_CONFIG, (event: any, ...args: any) => func(...args));
            }
        }
    );