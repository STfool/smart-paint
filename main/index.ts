import { app, BrowserWindow, globalShortcut, webContents } from "electron";
import { getLoadUrl } from "./utils";

function createWindow() {
  const win = new BrowserWindow({
    width: 1366,
    height: 900,
  });

  win.loadURL(getLoadUrl());
}

app.whenReady().then(() => {
  globalShortcut.register("ctrl+l", () => {
    webContents.getFocusedWebContents()?.openDevTools();
  });
  createWindow();
});
