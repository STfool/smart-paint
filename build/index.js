"use strict";

var _electron = require("electron");

function createWindow() {
  var win = new _electron.BrowserWindow({
    width: 1366,
    height: 900
  });
  win.webContents.openDevTools();
  win.loadURL("http://localhost:8080");
}

await _electron.app.whenReady();
createWindow();