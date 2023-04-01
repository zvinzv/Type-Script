// function isHeOld(age: number | string[]) : custom | number {
//   return age > 40;
// }

// // Do Not Edit Here
// console.log(isHeOld("100")); // Error
// console.log(isHeOld(45)); // "Yes"
// console.log(isHeOld(30)); // "No"

// Solve Assignment 05

type custom = "Yes" | "No" | "Error" | "UnError";
function isHeOld(age: number | string): custom {
  if (typeof age !== "number") {
    return "Error";
  } else {
    if (age > 40) {
      return "Yes";
    } else if (age < 40) {
      return "No";
    } else {
      return "UnError";
    }
  }
}

// Do Not Edit Here
console.log(isHeOld("100")); // Error
console.log(isHeOld(45)); // "Yes"
console.log(isHeOld(30)); // "No"
