import { app, BrowserWindow, ipcMain } from 'electron';
import Main from './Main';

Main.main(app, BrowserWindow, ipcMain);