/*
  Data Types
  - Enums => Enumerations
  --- Enum Can Refer To Other Enum
  --- Enum Can Refer To Same Enum
  --- Enum Can Have Calculations
  --- Enum Can Have Functions
*/

const getHardSeconds = (): number => {
  return 3;
};

enum Kids {
  Five = 25,
  Seven = 20,
  Ten = 15,
}

enum Level {
  Kid = Kids.Ten,
  Easy = 9,
  Medium = Easy - 3,
  Hard = 3,
  Extrem = 2,
  init = +true,
}

const levels: string[] = ["Kids", "Easy", "Medium", "Hard", "Extrem"];

const newLevels: string[] = levels.map((level) => {
  return level.toLocaleLowerCase();
});

const Paly = (level: string): string => {
  let lvl = level.toLowerCase();
  if (newLevels.includes(lvl)) {
    return `The Level Is ${level} And Number Of Seconds Is ${
      lvl === "kids"
        ? Level.Kid
        : lvl === "easy"
        ? Level.Easy
        : lvl === "medium"
        ? Level.Medium
        : lvl === "hard"
        ? Level.Hard
        : lvl === "extrem"
        ? Level.Extrem
        : undefined
    }`;
  } else {
    return `Sorry That Not Found.`;
  }
};

console.log(Paly("HaRd"));
