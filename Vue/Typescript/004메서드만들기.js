"use strict";
var Lunch = /** @class */ (function () {
    function Lunch(myLunch) {
        this.myLunch = myLunch;
    }
    Lunch.prototype.mc = function () {
        return this.myLunch;
    };
    Lunch.prototype.kfc = function (n1, n2, n3) {
        return n1 + n2 + n3;
    };
    return Lunch;
}());
var todayLunch = new Lunch('김밥');
console.log(todayLunch.mc());
console.log(todayLunch.kfc(1, 2, 3));
