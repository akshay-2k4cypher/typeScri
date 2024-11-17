var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var hii = /** @class */ (function () {
    // private height;
    // weight;  if not declared here i have to say public in constructer
    function hii(height, weight, sport) {
        var _this = this;
        this.height = height;
        this.weight = weight;
        this.sport = sport;
        this.myFunc = function () {
            return _this.height; //the only way to access private things
        };
        this.height = height;
        this.weight = weight;
    }
    return hii;
}());
var f1 = new hii(2, 3, 'f');
// console.log(height)  //gives error but works in js as there is no private type in JS
console.log(f1.myFunc());
var hii2 = /** @class */ (function () {
    function hii2(height, weight, sport) {
        this.height = height;
        this.weight = weight;
        this.sport = sport;
    }
    return hii2;
}());
var hello = /** @class */ (function (_super) {
    __extends(hello, _super);
    function hello(height, weight, sport) {
        return _super.call(this, height, weight, sport) || this;
    }
    return hello;
}(hii2));
var f2 = new hii(2, 3, 'f');
f2.weight;
