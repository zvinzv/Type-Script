/*
  Type Annotations With Object
*/

let myObject: {
  readonly username: string;
  id: number;
  hire?: boolean;
  skills: {
    one: string;
    two: string;
  };
} = {
  username: "ZVINZV",
  id: 1090,
  skills: {
    one: "Photoshop",
    two: "After Effect",
  },
};

// myObject.username = "DEV";
myObject.id = 313;
myObject.skills.one = "HTML";
myObject.skills.two = "CSS";

console.log(myObject.username);
console.log(myObject.id);
console.log(myObject.hire);
console.log(myObject.skills.one);
console.log(myObject.skills.two);
