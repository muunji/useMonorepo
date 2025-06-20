/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native'

export const App = () => {
  const [text, setText] = useState('')

  useEffect(()=>{
    console.log('실행 중...');
    
    fetch('http://10.0.2.2:3000/hello')
    .then(res=>res.json())
    .then(data=> {setText(data.text); console.log('data',data)})
    .catch(err=>console.error(err))
  },[])

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: '#fff'}}>
      <Text style={{color:'#000'}}>{text}</Text>
    </View>
  )
};

export default App;
