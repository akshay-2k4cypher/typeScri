"use strict";
let funct = (a, b, c) => {
    if (typeof (c) === 'undefined')
        return a * b;
    return a * b * c;
};
funct(10, 20);
let func2 = (a, b, c = 20) => {
    return a * b * c;
};
func2(3, 4);
// alternate way
let funct2 = (a, b, c = 10) => {
    return a * b * c;
};
funct2(7, 8);
let func3 = (a, b, c = 20) => {
    return a * b * c;
};
console.log(func3(2, 3));
let func4 = (...m) => {
    return m;
};
console.log(func4(33, 5, 4, 3));
// normal function
function lol(n) {
    return 3;
}
let cann = function lol(...n) {
    return n;
};
console.log(cann(7, 8, 9, 7));
