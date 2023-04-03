"use strict";
let user = {
    username: "ZVINZV",
    country: "Iraq",
};
user.country = "Egypt";
console.log(user);
function getData(data) {
    return `id is ${data.id}, username is ${data.username}, country is ${data.country}`;
}
console.log(getData({ id: 22, username: "ZVINZV", country: "Iraq" }));
//# sourceMappingURL=index.js.map