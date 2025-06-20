import express from 'express';
import cors from 'cors';
import 'dotenv/config'

console.log(process.env.HOST)

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.use(cors())

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

// 테스트용
app.get('/hello',(req,res)=>{
  res.send({text:'TEST SUCCESS'})
})

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
