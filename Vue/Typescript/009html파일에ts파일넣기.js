"use strict";
var input = document.querySelector('input');
var button = document.querySelector('button');
var run = function (input) { console.log(input.value); };
// !을 붙여 null이 될 수 있음 방지
button.addEventListener('click', function () {
    run(input);
});
