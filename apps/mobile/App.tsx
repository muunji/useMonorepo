import {  Text, View } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  const [message, setMessage]= useState('')

  useEffect(()=>{
    fetch('http://192.168.0.108:3001/hello') //ip 주소 필요
    .then(res=>res.json())
    .then(data=>setMessage(data.message))
    .catch(err=>console.log('mobile 데이터 오류 발생',err))
  },[])

  return (
    <View>
      <Text>{message||'로딩중...'}</Text>
    </View>
  );
}
