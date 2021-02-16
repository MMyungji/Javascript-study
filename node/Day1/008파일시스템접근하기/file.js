const fs = require('fs'); // node에서 제공해주는 모듈, file system - fs

fs.readFile("./content.txt", (err,data) => {
    if(err) {
        throw err;
    }
    console.log(data);              // <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64 21 21> - 16진수로 표현
    console.log(data.toString());   // hello world!!
});

// 위 코드와 동일한 결과 출력
// promise적용한 코드, then&catch
const fs1 = require('fs').promises;

fs1.readFile("./content.txt").then((data) => {
    console.log(data);
    console.log(data.toString());
}).catch(err => console.error(err));