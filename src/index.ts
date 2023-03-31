/*
  Type Annotations With Functions

  - noImplicitAny

  - noImplicitReturns
  --- Will Check All Code Paths In A Function To Ensure They Return A Value

  - noUnusedLocals
  --- Report Errors On Unused Local Variables

  - noUnusedParameters
  --- Report Errors On Unused Parameters In Functions.
*/


let showMsg = true;

function showDetails(name: string, age: number, salary: number): string { // output string || input string-number
  let test = 10;
  if (showMsg) {
    return `Hello ${name}, Age Is ${age}, Salary Is ${salary} , Test Varabel ${test}`;
  }
  return `No Data To Show`
}

console.log(showDetails("Osama", 40, 3000));