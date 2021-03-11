// server.js -> 기본적인 서버의 역할

const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = 8000;

// 둘이 같은 코드 -> 라우트 생성
// const routes = require("./routes/index");
const routes = require("./routes");

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(morgan("dev"));

//1차 라우터 /로 들어옴, 모든 라우터는 /를 거쳐 들어온다
app.use("/",routes);


app.listen(PORT,()=> console.log(`this server listening on ${PORT}`));