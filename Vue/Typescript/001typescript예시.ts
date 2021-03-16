/**
 * Typescript 특징
 * 정적타입 -> 타입을 명확하게 지정 가능
 * 도구의 지원 -> Javascript보다 개발이 편리(Code Assistant, Type check 기능)
 * Angular의 기본언어로 채택
 */

// 다른 파일의 함수명과 같으면 오류가 난다.
function sum(a: number,b: number){
    return a+b;
}

console.log(sum(1,2));