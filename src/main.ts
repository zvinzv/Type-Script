/*
  Data Types
  - Tuple
  --- Is Another Sort Of Array Type
  --- We knows Exactly How Many Elements It Contains
  --- We Knows Which Types It Contains At Specific Positions
*/

let article: readonly [number, string, boolean, string[]] = [112, "ZVINZV", true, ["HHH", "CV"]];
let post = article = [12, "DEV", false, ["Ali", "Jasem"]];
// article.push(100); >> remove readonly to work.

const [id, title, deploy, [a,b]] = post;
console.log(id, title, deploy, [a,b][1])
console.log(id, title, deploy, [a,b])
console.log(id, title, deploy, a,b)