"use strict";
const getHardSeconds = () => {
    return 3;
};
var Kids;
(function (Kids) {
    Kids[Kids["Five"] = 25] = "Five";
    Kids[Kids["Seven"] = 20] = "Seven";
    Kids[Kids["Ten"] = 15] = "Ten";
})(Kids || (Kids = {}));
var Level;
(function (Level) {
    Level[Level["Kid"] = 15] = "Kid";
    Level[Level["Easy"] = 9] = "Easy";
    Level[Level["Medium"] = 6] = "Medium";
    Level[Level["Hard"] = 3] = "Hard";
    Level[Level["Extrem"] = 2] = "Extrem";
    Level[Level["init"] = +true] = "init";
})(Level || (Level = {}));
const levels = ["Kids", "Easy", "Medium", "Hard", "Extrem"];
const newLevels = levels.map((level) => {
    return level.toLocaleLowerCase();
});
const Paly = (level) => {
    let lvl = level.toLowerCase();
    if (newLevels.includes(lvl)) {
        return `The Level Is ${level} And Number Of Seconds Is ${lvl === "kids"
            ? Level.Kid
            : lvl === "easy"
                ? Level.Easy
                : lvl === "medium"
                    ? Level.Medium
                    : lvl === "hard"
                        ? Level.Hard
                        : lvl === "extrem"
                            ? Level.Extrem
                            : undefined}`;
    }
    else {
        return `Sorry That Not Found.`;
    }
};
console.log(Paly("HaRd"));
//# sourceMappingURL=main.js.map