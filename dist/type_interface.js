"use strict";
var _a, _b;
let bi = {
    he: 44,
    she: 55,
    it: 444
};
console.log(bi.it);
const gigi = {
    He: 2323,
    She: 33,
    sco: true,
    fun: () => {
        console.log("hello World!");
    }
};
(_a = gigi === null || gigi === void 0 ? void 0 : gigi.fun) === null || _a === void 0 ? void 0 : _a.call(gigi); //we should do optional chaining correctly to access optional
let ken = {
    func: (a, b) => {
        console.log(a, b);
    },
};
// calling optional property
(_b = ken === null || ken === void 0 ? void 0 : ken.func) === null || _b === void 0 ? void 0 : _b.call(ken, 4, 5);
