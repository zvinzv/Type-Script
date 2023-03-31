/*
  Function
  - Optional and Default Parameters

  - In JavaScript, Every Parameter Is Optional => "undefined" If You Didnt Use It
  - "?" Optional Parameter
*/

function showData(name?: string, age?: number, contry?: string){
  return `${name} - ${age} - ${contry}`
}
console.log(showData())