"use strict";
const logging = (msg) => {
    console.log(msg);
    return;
};
console.log(logging("Iam A Message."));
console.log("test");
const fail = (msg) => {
    throw new Error(msg);
};
const alwaysLog = (name) => {
    while (true) {
        console.log(name);
    }
};
alwaysLog("ZVINZV");
//# sourceMappingURL=main.js.map