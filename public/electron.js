const { join } = require('path')

const { app, BrowserWindow, Menu } = require('electron')
const isDev = require('electron-is-dev')

let mainWindow

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 450,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow
    .loadURL(
      isDev
        ? 'http://localhost:3000'
        : `file://${join(__dirname, '../build/index.html')}`
    ).then()

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.whenReady().then(() => {
  createWindow()
  Menu.setApplicationMenu(null)
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) createWindow()
})
