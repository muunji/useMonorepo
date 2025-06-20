console.log('Hello World');
// React 렌더러 로드
import { app, BrowserWindow } from 'electron'

function createWindow(){
  const win = new BrowserWindow({
    width:800,
    height:600,
    webPreferences:{
      nodeIntegration:false, //보안상 
      contextIsolation:false},
  })

  // React가 빌드되어 있는 파일 경로 지정
  win.loadURL('http://localhost:4200')
}
// console.log(__dirname)
app.whenReady().then(createWindow)