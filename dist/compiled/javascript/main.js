"use strict";
const getActions = (btns) => {
    return [
        `Hello ${btns.one}`,
        `Hello ${btns.two}`,
        `Hello ${btns.three}`,
        `Hello ${btns.five}`,
    ];
};
console.log(getActions({
    one: "ZVINZV",
    two: 0,
    three: false,
    five: true,
}));
//# sourceMappingURL=main.js.map