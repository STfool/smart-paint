const { app, BrowserWindow } = require('electron');
const { resolve } = require('path');

const isProd = process.env.NODE_ENV === 'production';
const url = isProd ? resolve(__dirname, '../../.build/index.html') : 'http://localhost:3000';

let win;
app.on('ready', () => {
  win = new BrowserWindow({
    width: 500,
    height: 500,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadURL(url);
});
