'use strict'

import { app, BrowserWindow, Tray } from 'electron'
var path = require('path')

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:${require('../../../config').port}`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  mainWindow.on('blur', () => {
    console.log('hiding')
    app.hide()
  })
  // eslint-disable-next-line no-console
  console.log('mainWindow opened')
}
let tray = null
app.on('ready', () => {
  let iconPath = path.join(__dirname, '../../icons/tray_logo.png')
  tray = new Tray(iconPath)

  tray.on('click', (event) => {
    (mainWindow === null) ? createWindow() : app.focus()
  })
})
app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
console.log('daPath', app.getPath('userData'))
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
