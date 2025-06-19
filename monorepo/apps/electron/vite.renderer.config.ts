// vite 설정 파일
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root:path.resolve(__dirname,'src/renderer'),
  build:{
    outDir:'../../../../dist/apps/electron/renderer',
    emptyOutDir:true,
  },
  plugins:[react()],
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'src/renderer')
    }
  },
  base:'./' //index.html에서 모든 리소스가 상대경로로 참조
})