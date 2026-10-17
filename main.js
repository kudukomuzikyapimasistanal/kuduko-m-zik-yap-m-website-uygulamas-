const { app, BrowserWindow, shell, Menu } = require('electron');

const URL_ADRESI = 'https://kudukomuzikyapimdijitalmuzikplatform.42web.io/home.php';

function pencereOlustur() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    title: 'Kuduko Müzik Yapım',
    autoHideMenuBar: true,
    webPreferences: { contextIsolation: true, nodeIntegration: false }
  });
  Menu.setApplicationMenu(null);
  win.loadURL(URL_ADRESI);

  // Dış bağlantıları varsayılan tarayıcıda aç
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (!url.startsWith('https://kudukomuzikyapimdijitalmuzikplatform.42web.io')) {
      shell.openExternal(url);
      return { action: 'deny' };
    }
    return { action: 'allow' };
  });
}

app.whenReady().then(pencereOlustur);
app.on('window-all-closed', () => app.quit());
