"use strict";
function yesOrNo(val) {
    if (typeof val !== "number") {
        return "Error";
    }
    else {
        if (val > 10) {
            return "Yes";
        }
        else if (val < 10) {
            return "No";
        }
        else {
            return "UnError";
        }
    }
}
console.log(yesOrNo("100"));
console.log(yesOrNo(30));
console.log(yesOrNo(8));
//# sourceMappingURL=main.js.map