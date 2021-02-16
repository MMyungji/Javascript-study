// npm i express
// express 모듈이 없다고 경고창이 뜨면 express 설치

const express = require('express');
const app = express();

app.get("/", (req,res) => {
    // console.log(__dirname);
    try{
        // express로 코드를 간단하게 작성
        // express안쓰면, res.writeHead/res.write/res.end 사용해야함 - 코드가 길어짐
        return res.sendFile(__dirname+"/index.html"); // 경로명 주의 "./index.html"아님

    } catch(err) {
        return res.send("404 Not Found");
    }
});

app.listen(7897, () => console.log("this app listening on 7897 port"));