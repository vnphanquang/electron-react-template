import { app, BrowserWindow, Notification } from 'electron';
import path from 'path';
import url from 'url';

const development = process.env.NODE_ENV === 'development';
const port = process.env.PORT || 4343;

function createWindow() {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  if (development) {
    win.loadURL(`http://localhost:${port}`);
  } else {
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true,
    }));
  }
}

function showNotification () {
  const notification = {
    title: 'Basic Notification',
    body: 'Notification from the Main process'
  }
  new Notification(notification).show()
}

app.whenReady().then(createWindow).then(showNotification)
