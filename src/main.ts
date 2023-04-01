// function yesOrNo(val: number | boolean) : "Yes" | "No" {
//   return val > 10;
// }

// // Do Not Edit Here
// console.log(yesOrNo("100")); // Error
// console.log(yesOrNo(30)); // True
// console.log(yesOrNo(8)); // False

// Solve Assignment 04

type csx = "Yes" | "No" | "Error" | "UnError";

function yesOrNo(val: number | string): csx {
  if (typeof val !== "number") {
    return "Error";
  } else {
    if (val > 10) {
      return "Yes";
    } else if (val < 10) {
      return "No";
    } else {
      return "UnError";
    }
  }
}

// Do Not Edit Here
console.log(yesOrNo("100")); // Error
console.log(yesOrNo(30)); // True
console.log(yesOrNo(8)); // False
