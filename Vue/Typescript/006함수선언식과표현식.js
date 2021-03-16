"use strict";
// 함수 선언식
function plus(x, y) {
    return x + y;
}
// 함수 표현식
var minus = function (x, y) { return x - y; };
console.log(plus(1, 2));
console.log(minus(1, 2));
