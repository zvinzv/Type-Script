"use strict";
const compar = (n1, n2) => {
    if (n1 === n2) {
        return 0;
    }
    else if (n1 > n2) {
        return 1;
    }
    else {
        return -1;
    }
};
console.log(compar(25, 20));
console.log(compar(20, 20));
console.log(compar(15, 20));
let myNumber1 = 1;
let myNumber2 = 0;
let myNumber3 = -1;
//# sourceMappingURL=main.js.map