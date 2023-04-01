/*
  Data Types
  - Void
  --- Function That Will Return Nothing
  --- Function In JavaScript That Not Return A Value Will Show undefined
  --- undefined is not void
  - Never
  --- Return Type Never Returns
  --- The Function Doesn't Have A Normal Completion
  --- It Throws An Error Or Never Finishes Running At All "Infinite Loop"
*/

const logging = (msg: string): void => {
  console.log(msg);
  return;
};

console.log(logging("Iam A Message."));
console.log("test");

const fail = (msg: string) => {
  throw new Error(msg);
  // return 16;
};

const alwaysLog = (name: string): never => {
  while (true) {
    console.log(name);
  }
  // return 16;
};
alwaysLog("ZVINZV");
// console.log("test");
