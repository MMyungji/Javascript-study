// 서버 여는 작업
const http = require('http');

const server = http.createServer((req,res) => {
    res.writeHead(200,"text/html: charset=utf-8");
    //응답에 대한 정보를 기록하는 메서드
    
    res.write("<h1>Hello, World!</h1>");
    // 클라이언트로 보낼 데이터

    res.end("<p>Hello Server!!</p>");
    // 응답을 종료하는 메서드

});

server.listen(8000, () => {
    console.log("this server is listening on 8000 port");
});