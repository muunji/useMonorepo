console.log('Hello World');
// React 렌더러 로드
import { app, BrowserWindow } from 'electron'
import * as path from 'path';

function createWindow(){
  const win = new BrowserWindow({
    width:800,
    height:600,
    webPreferences:{nodeIntegration:true, contextIsolation:false},
  })

  // React가 빌드되어 있는 파일 경로 지정
  win.loadFile(path.join(__dirname,'renderer','index.html'))
}
// console.log(__dirname)
app.whenReady().then(createWindow)