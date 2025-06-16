// 모듈
import express from 'express';
import cors from 'cors';

// 포트
const app = express()
const PORT = 3001;

// cors 설정
app.use(cors())

// 경로 지정
app.get('/hello',(_,res)=>{
  res.json({message:'TEST 성공'})
})

// 실행
app.listen(PORT, ()=>{
  console.log(`서버 : http://localhost:${PORT}`)
})