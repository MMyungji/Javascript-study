"use strict";
var Hello = /** @class */ (function () {
    function Hello(hello) {
        this.hello = hello;
    }
    Hello.prototype.sayHello = function () {
        return "Hello, " + this.hello;
    };
    return Hello;
}());
var helloworld = new Hello('hi');
console.log(helloworld.sayHello());
