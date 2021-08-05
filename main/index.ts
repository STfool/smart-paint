import { app, BrowserWindow, globalShortcut, webContents } from "electron";

function createWindow() {
  const win = new BrowserWindow({
    width: 1366,
    height: 900,
  });

  win.loadURL("http://localhost:8080");
}

app.whenReady().then(() => {
  globalShortcut.register("ctrl+l", () => {
    webContents.getFocusedWebContents()?.openDevTools();
  });
  createWindow();
});
