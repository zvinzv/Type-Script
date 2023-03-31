// // Write The Function Here

// // Using The Function => Do Not Edit
// console.log(printInConsole(1, 2, 3, 4, 5));
// console.log(printInConsole("A", "B", "C"));
// console.log(printInConsole(true, false, false, true, true));

// // Output
// The Value Is 1 And Type Is number
// The Value Is 2 And Type Is number
// The Value Is 3 And Type Is number
// The Value Is 4 And Type Is number
// The Value Is 5 And Type Is number
// Done
// The Value Is A And Type Is string
// The Value Is B And Type Is string
// The Value Is C And Type Is string
// Done
// The Value Is true And Type Is boolean
// The Value Is false And Type Is boolean
// The Value Is false And Type Is boolean
// The Value Is true And Type Is boolean
// The Value Is true And Type Is boolean
// Done

// Solve Assignment 08




// Write The Function Here

const printInConsole = (type: string ,...data: any[]) => {
  console.log(`==================================================\nStart - ${type}\n==================================================`)
  for (let item of data) 
  {
    console.log(`The Value Is '${item}' And The Type Is '${typeof item}'.`)
  }
  return (`==================================================\nEnd - ${type}\n==================================================\n\n`)
}


// Using The Function => Do Not Edit
console.log(printInConsole("Number's",1, 2, 3, 4, 5));
console.log(printInConsole("Strings","A", "B", "C"));
console.log(printInConsole("Boolens",true, false, false, true, true));