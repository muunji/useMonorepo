// 엔트리포인트
// src/main.tsx로 위임
import { AppRegistry } from 'react-native';
import App from './src/main';
import {name as appName} from './app.json'

AppRegistry.registerComponent(appName, ()=>App);