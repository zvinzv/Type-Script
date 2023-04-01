/*
  Data Types
  - Advanced Type Alias
*/

type Buttons = {
  up: string,
  right: string,
  down: string,
  left: string,
}

type Last = Buttons & {
  x: boolean
}
const getActions = (btns: Last) => {
  return [`Action For Button Up Is ${btns.up}`,`Action For Button Right Is ${btns.right}`,`Action For Button Down Is ${btns.down}`,`Action For Button Left Is ${btns.left}`,`Action For Button Boolen Is ${btns.x}`] as const
}

const [a,b,c,d, e] = getActions({
  up: "90px",
  right: "10px",
  down: "40px",
  left: "20px",
  x: true
})

console.log(a,b,c,d,e)