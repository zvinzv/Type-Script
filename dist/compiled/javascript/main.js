"use strict";
const getInsane = (insa, type) => type - insa;
var Game;
(function (Game) {
    Game[Game["Easy"] = 100] = "Easy";
    Game[Game["Medium"] = 80] = "Medium";
    Game[Game["Hard"] = 30] = "Hard";
    Game[Game["Insane"] = getInsane(Game.Hard - (Game.Easy - Game.Medium), Game.Hard)] = "Insane";
})(Game || (Game = {}));
console.log(Game.Easy);
console.log(Game.Medium);
console.log(Game.Hard);
console.log(Game.Insane);
//# sourceMappingURL=main.js.map