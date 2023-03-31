"use strict";
function addAll(...nums) {
    let result = 0;
    for (let num of nums) {
        result += num;
    }
    return result;
}
console.log(addAll(1, 2, 3, 4, 5, 10.5, +true));
//# sourceMappingURL=index.js.map