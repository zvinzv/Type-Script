// const user: {
//   readonly username: string,
//   age: number,
//   website?: string,
//   skills: {
//     frontEnd: string[],
//     backEnd: string[]
//   }
// } = {
//   username: "Elzero",
//   age: 40,
//   website: "Elzero.org",
//   skills: {
//     frontEnd: ["HTML", "CSS", "JS"],
//     backEnd: ["PHP", "Python"]
//   }
// }

// // We Need To Remove Error From This Edits
// user.username = "Osama";
// user.age = "40";
// user.skills.backEnd.push(100);

// Solve Assignment 08

const user: {
  username: string;
  age: string;
  website?: string;
  skills: {
    frontEnd: string[];
    backEnd: (string | number)[];
  };
} = {
  username: "Elzero",
  age: "40",
  website: "Elzero.org",
  skills: {
    frontEnd: ["HTML", "CSS", "JS"],
    backEnd: ["PHP", "Python"],
  },
};

// We Need To Remove Error From This Edits
user.username = "Osama";
user.age = "40";
user.skills.backEnd.push(100);
