/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import { NewAppScreen } from '@react-native/new-app-screen';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

function App() {

  const [message, setMessage] = useState('')

  useEffect(()=>{
    fetch('http://192.168.0.108:3001/hello')
    .then(res=>res.json())
    .then(data => setMessage(data.message))
    .catch(err=>console.log('데이터 불러오기 실패',err))
  },[])

  return (
    <View >
      {message || '로딩중...'}
    </View>
  );
}

export default App;
