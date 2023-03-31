"use strict";
const printInConsole = (type, ...data) => {
    console.log(`==================================================\nStart - ${type}\n==================================================`);
    for (let item of data) {
        console.log(`The Value Is '${item}' And The Type Is '${typeof item}'.`);
    }
    return (`==================================================\nEnd - ${type}\n==================================================\n\n`);
};
console.log(printInConsole("Number's", 1, 2, 3, 4, 5));
console.log(printInConsole("Strings", "A", "B", "C"));
console.log(printInConsole("Boolens", true, false, false, true, true));
//# sourceMappingURL=main.js.map