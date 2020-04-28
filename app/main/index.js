const { app, BrowserWindow } = require('electron');

let win;
app.on('ready', () => {
  win = new BrowserWindow({
    width: 500,
    height: 500,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadURL('http://localhost:3000');
});
