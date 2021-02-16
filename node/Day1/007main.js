// 모듈 : 재사용하기 위한 코드조각
// 차이가 파일의 크기마다 달라지며 속도는 오히려 더좋아진다

const {n1,n2} = require('./007member');
console.log(n1,n2);

const {sum} = require('./007sum');


const result = sum(n1,n2);
console.log(result);

