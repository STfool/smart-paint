"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const utils_1 = require("./utils");
function createWindow() {
  const win = new electron_1.BrowserWindow({
    width: 1366,
    height: 900,
  });
  win.loadURL(utils_1.getLoadUrl());
}
electron_1.app.whenReady().then(() => {
  electron_1.globalShortcut.register("ctrl+l", () => {
    electron_1.webContents.getFocusedWebContents()?.openDevTools();
  });
  createWindow();
});
