"use strict";
function isHeOld(age) {
    if (typeof age !== "number") {
        return "Error";
    }
    else {
        if (age > 40) {
            return "Yes";
        }
        else if (age < 40) {
            return "No";
        }
        else {
            return "UnError";
        }
    }
}
console.log(isHeOld("100"));
console.log(isHeOld(45));
console.log(isHeOld(30));
//# sourceMappingURL=main.js.map