// function printInfo(valueOne, valueTwo) {
//   return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
// }

// console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
// console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
// console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work


// Solve Assignment 03


function printInfo(valueOne: number | string, valueTwo: number | string) {
  return `Value One Is ${typeof valueOne == "number" ? valueOne : `"${valueOne}"`}, Value Two Is ${typeof valueTwo == "number" ? valueTwo : `"${valueTwo}"`}`;
}

console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
// console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work