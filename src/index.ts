/*
  Type Annotations With Multidimensional Arrays
*/

let arry1: number[] = [1,2,3,4];
let arry2: string[] = ["A", "B", "C", "D"];
let arry3: (string | number)[] = [1, 2, 3, 4, "A", "B", "C", "D"];

let arry4: (string | number | (any)[])[] = [1, 2, 3, 4, "A", "B", ["C", "D"], "E", [1, "2", true]]