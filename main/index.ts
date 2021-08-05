import { app, BrowserWindow } from "electron";

function createWindow() {
  const win = new BrowserWindow({
    width: 1366,
    height: 900,
  });

  win.webContents.openDevTools();

  win.loadURL("http://localhost:8080");
}

app.whenReady().then(() => {
  createWindow();
});
