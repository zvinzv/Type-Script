/*
  Type Annotations With Arrays
*/
let all: string | number | boolean;

all = "ZVINZV";
all = 112233;
all = true;
let myFriends: string[] = [":)", ":(", "112233"]

for (let friend of myFriends) {
  console.log(friend)
}