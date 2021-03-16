// 함수 선언식
function plus(x:number, y:number) {
    return x+y;
}

// 함수 표현식
const minus = (x:number,y:number): number => x-y;

console.log(plus(1,2));
console.log(minus(1,2));