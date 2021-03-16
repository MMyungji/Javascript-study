function sum1(a,b){
    return a+b;
}

console.log(sum1('x','y'));  // 'xy'
// 오류가 나지 않는 이유
// 자바스크립트는 '동적'프로그래밍 언어 <-> '정적'프로그래밍
// 자바스크립트: 데이터 타입의 용도를 스스로 파악하여 동작하는 동적 프로그래밍 언어

// 정적함수로 바꾸기, Typescript
// 데이터타입을 지정, 의도하지 않은 코드 사용을 사전에 막을 수 있다
// function sum(a: number,b: number){
//     return a+b;
// }


