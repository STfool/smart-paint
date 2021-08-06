"use strict";

var _electron = require("electron");

var _utils = require("./utils");

function createWindow() {
  var win = new _electron.BrowserWindow({
    width: 1366,
    height: 900
  });
  win.loadURL((0, _utils.getLoadUrl)());
}

_electron.app.whenReady().then(function () {
  _electron.globalShortcut.register("ctrl+l", function () {
    var _webContents$getFocus;

    (_webContents$getFocus = _electron.webContents.getFocusedWebContents()) === null || _webContents$getFocus === void 0 ? void 0 : _webContents$getFocus.openDevTools();
  });

  createWindow();
});