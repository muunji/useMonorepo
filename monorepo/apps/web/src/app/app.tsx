// import NxWelcome from './nx-welcome';
import { useState, useEffect } from "react";
import { TestBtn } from '@monorepo/ui'

export function App() {
  const [text, setText] = useState('')
  const [isShow, setIsShow]= useState(false)

  useEffect(()=>{
    fetch('http://localhost:3000/hello')
    .then(res=>res.json())
    .then(data=> setText(data.text))
    .catch(err=>console.error('데이터 오류',err))
  },[])

  return (
    <div>
      {/* <NxWelcome title="web" /> */}
      <TestBtn onPress={()=>setIsShow(!isShow)}/>
        {isShow && <h1>{text}</h1>}
      
    </div>
  );
}

export default App;
