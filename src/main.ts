import { BrowserWindow } from "electron";
import { MESSAGES } from "./constants";

const path = require('path');
const ConfigService = require('./modules/config/config.module');

export default class Main {
  public static mainWindow: Electron.BrowserWindow;
  public static application: Electron.App;
  public static BrowserWindow: any;
  public static ipcMain: Electron.IpcMain;

  public static main(app: Electron.App, browserWindow: typeof BrowserWindow, ipcMain: Electron.IpcMain) {
    Main.BrowserWindow = browserWindow;
    Main.application = app;
    Main.ipcMain = ipcMain;

    app.on('ready', Main.onReady);
    app.on('window-all-closed', Main.onClose);
  }

  private static onReady() {
    console.log(`ready - preload ${path.resolve(path.join(__dirname, 'preload.js'))}`);

    Main.ipcMain.on(MESSAGES.GET_CONFIG, (event, args) => {
      console.log('main got sth!')
      console.log('event', event);
      console.log('args', args);
      win.webContents.send(MESSAGES.GET_CONFIG, ConfigService.getAllProducts());
    });

    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
        enableRemoteModule: false,
        preload: path.resolve(path.join(__dirname, 'preload.js')),
      }
    });

    win.loadFile(path.join(__dirname, 'windows/dashboard/dashboard.html'));
  }

  private static onClose() {
  }
}