/*
  Interface
  - Interface Declaration
  --- Serve Like Types
  --- The Interface Describes The Shape Of An Object
  --- It Defines The Syntax To Follow

  --- Use With Object
  --- Use With Function
  --- Use Read Only And Optional Operator
*/

interface User {
  id?: number;
  readonly username: string;
  country: string;
}

let user: User = {
  username: "ZVINZV",
  country: "Iraq",
};

// user.username = "DEV";
user.country = "Egypt";

console.log(user);

function getData(data: User) {
  return `id is ${data.id}, username is ${data.username}, country is ${data.country}`;
}

console.log(getData({ id: 22, username: "ZVINZV", country: "Iraq" }));
