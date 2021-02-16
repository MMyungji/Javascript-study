// 서버 여는 작업
const http = require('http');
const fs = require('fs').promises;

// promise를 사용해주기 위해, async-await 사용, 에러났을 경우 처리를 해줘야하기 때문에 try-catch
const server = http.createServer(async (req, res) => {
    try {
        const data = await fs.readFile('./index.html');

        res.writeHead(200, "text/html: charset=utf-8");
        //응답에 대한 정보를 기록하는 메서드

        res.end(data);
        // 응답을 종료하는 메서드
    } catch {
        console.error(err);
        res.writeHead(200, "text/html: charset=utf-8");
        res.end(err);
    }

});

server.listen(8900, () => {
    console.log("this server is listening on 8900 port");
});