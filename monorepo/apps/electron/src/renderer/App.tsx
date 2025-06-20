//컴포넌트 작성
import { useEffect, useState } from "react"

export function App(){
  const [text, setText]=useState('')

  useEffect(()=>{
    fetch('http://localhost:3000/hello')
    .then(res=>res.json())
    .then(data=> setText(data.text))
    .catch(err=>console.error('데이터 오류',err))
  },[])

  return <h1>{text}</h1>
}