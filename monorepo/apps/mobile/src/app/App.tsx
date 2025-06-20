/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native'
import { TestBtn } from '@monorepo/ui'

export const App = () => {
  const [text, setText] = useState('')
  const [isShow, setIsShow] = useState(false)

  useEffect(()=>{
    console.log('실행 중...');
    
    fetch('http://10.0.2.2:3000/hello')
    .then(res=>{ console.log('응답',res.ok); return res.json()})
    .then(data=> {setText(data.text); console.log('data',data)})
    .catch(err=>console.error(err))
  },[])

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: '#fff'}}>
      <TestBtn onClick={()=> setIsShow(!isShow)}/>
        {isShow && <Text style={{color:'#000'}}>{text}</Text>}
      
    </View>
  )
};

export default App;
