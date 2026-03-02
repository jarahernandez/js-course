'use strict';
import { game } from './challenge-1.js';

// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
*/

// 1:
const goalsScored = game.scored;

for (const [goal, player] of goalsScored.entries()) {
    console.log(`Goal ${goal + 1}: ${player}`);
}

// 2:
const odds = Object.entries(game.odds);
let avgOdd = 0;

for (const [, num] of odds) {
    avgOdd += num;
}
avgOdd /= odds.length;
console.log(`Average odd: ${avgOdd}`);

// 3:
for (const [team, odd] of odds) {
    console.log(
        `Odd of ${game[team] != undefined ? 'victory ' : ''}${game[team] ?? 'draw'}: ${odd}`,
    );
}

// Bonus:
const scorers = {};
for (const scorer of game.scored) {
    scorers[scorer] ? scorers[scorer]++ : (scorers[scorer] = 1);
}
console.log(scorers);
