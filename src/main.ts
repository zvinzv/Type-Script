/*
  Data Types
  - Literal Types
*/

type nums = 0 | 1 | -1;

const compar = (n1: number, n2: number): nums => {
  if (n1 === n2) {
    return 0;
  }
  else if(n1 > n2){
    return 1;
  }
  else {
    return -1;
  }
}

console.log(compar(25,20))
console.log(compar(20,20))
console.log(compar(15,20))


let myNumber1: nums = 1
let myNumber2: nums = 0
let myNumber3: nums = -1

// let myNumber: nums = "ZVINZV" X
// let myNumber: nums = true X
// let myNumber: nums = 99 X