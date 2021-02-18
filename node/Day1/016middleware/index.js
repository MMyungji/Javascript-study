const express = require('express');
const app = express();

// 전역에서 돌아가는 라우팅, 모든 페이지에 적용됨, 전역이 제일 먼저 실행됨
// 예를 들어, 로그인 유무
app.use((req,res,next) => {
    console.log("동작합니다.");
    next(); // 다음 미들웨어로 이동
})

// 특정 페이지에 적용되는 미들웨어
const textMiddleware = (req,res,next) => {
    console.log("특정부분에서 동작합니다.");
    req.aa = "aa";
    next(); // 다음 미들웨어로 이동
}

app.get("/", (req,res) => {
    try{
        return res.sendFile(__dirname+"/index.html");
    } catch(err){
        return res.send("404 NOT FOUND");
    }
});

// 미들웨어 호출하기
// 미들웨어는 req와 res사이에서 실행됨
// /hello가 호출되면(request) app.use와 미들웨어 실행, 그리고 response실행 
// http://localhost:7412/hello 실행결과
/**
    동작합니다.
    특정부분에서 동작합니다.
    aa
**/
app.get("/hello", textMiddleware, (req,res) => {
    if(req.aa){
        console.log(req.aa)
    }
    return res.json({hello: "hello"});
});

app.listen(7412, ()=>console.log("This app listening on 7412"));