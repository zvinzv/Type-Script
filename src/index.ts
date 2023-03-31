/*
  Function
  - Rest Parameter
  - What About Float => All Is Under Type Number
*/

function addAll (...nums: number[]): number{
  let result = 0;
  for(let num of nums){result += num}
  return result;
}

console.log(addAll(1,2,3,4,5, 10.5,+true))