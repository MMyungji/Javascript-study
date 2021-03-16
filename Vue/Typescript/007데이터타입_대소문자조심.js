"use strict";
/**
 * string: ts가 기본으로 제공하는 원시타입(문자열)
 *
 * String: string 생성자 함수로 생성된 String 래퍼 객체
 *
 * string -> String 타입 할당 에러 발생
 * String -> string 에러 발생 안함
 */
var primiteveStr;
primiteveStr = 'hello';
console.log(primiteveStr);
// primiteveStr = new String('hello');
var objectStr;
objectStr = 'hello1';
console.log(objectStr);
objectStr = new String('hello2');
console.log(objectStr);
