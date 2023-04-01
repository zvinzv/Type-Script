"use strict";
let article = [112, "ZVINZV", true, ["HHH", "CV"]];
let post = article = [12, "DEV", false, ["Ali", "Jasem"]];
const [id, title, deploy, [a, b]] = post;
console.log(id, title, deploy, [a, b][1]);
console.log(id, title, deploy, [a, b]);
console.log(id, title, deploy, a, b);
//# sourceMappingURL=main.js.map