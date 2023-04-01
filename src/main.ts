/*
  Data Types
  - Union And Intersection Types
  --- Union Type
  ------ The | Symbol Is Used To Create The Union => "Or"

  --- Intersection Type
  ------ Is A Type That Combines Several Types Into One
  ------ The & Symbol Is Used To Create An Intersection => "And"

  --- If A Union Is An OR, Then An Intersection Is An AND.
*/

// let all: number | string = 100;

type A = {
  one: string;
  two: number;
  three: boolean;
};
type B = A & {
  four: number;
};
type C = {
  five: boolean;
};

type mix = A & C;

const getActions = (btns: mix) => {
  return [
    `Hello ${btns.one}`,
    `Hello ${btns.two}`,
    `Hello ${btns.three}`,
    `Hello ${btns.five}`,
  ];
};

console.log(
  getActions({
    one: "ZVINZV",
    two: 0,
    three: false,
    five: true,
  })
);
