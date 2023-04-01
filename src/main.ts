/*
  Data Types
  - Type Assertions
  --- Sometime Compiler Doesnt Know The Information We Do
  --- TypeScript Is Not Performing Any Check To Make Sure Type Assertion Is Valid
*/
// let myImag = document.getElementById("my_img") as HTMLImageElement;
// let myImag = <HTMLImageElement>document.getElementById("my_img");
// console.log(myImag.src);

let data: any = "1000";
console.log((data as string).repeat(2));
