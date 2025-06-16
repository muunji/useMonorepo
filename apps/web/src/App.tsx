import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  // fetch로 가져오기
  useEffect(()=>{
    fetch('http://localhost:3001/hello')
    .then(res=>res.json())
    .then(data=>setMessage(data.message))
    .catch(err=> console.log('데이터 불러오기 실패',err))
  },[])

  return (
    <h1>{message || '로딩중...'}</h1>
  )
}

export default App
