"use strict";
function printInfo(valueOne, valueTwo) {
    return `Value One Is ${typeof valueOne == "number" ? valueOne : `"${valueOne}"`}, Value Two Is ${typeof valueTwo == "number" ? valueTwo : `"${valueTwo}"`}`;
}
console.log(printInfo(10, 20));
console.log(printInfo("10", "20"));
//# sourceMappingURL=main.js.map