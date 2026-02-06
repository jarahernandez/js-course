'use strict';

// Scores
const totalScoreP1 = document.querySelector('.total-score-p1');
const totalScoreP2 = document.querySelector('.total-score-p2');
const currentScoreP1 = document.querySelector('.current-score-p1');
const currentScoreP2 = document.querySelector('.current-score-p2');

// Variables
let playerTurn = true; // true for player#1 - false for player#2
let currentScore = 0;

// Buttons
const newGameBtn = document.querySelector('.new-game');
const rollDiceBtn = document.querySelector('.roll-dice');
const holdBtn = document.querySelector('.hold');

// Player header
const playerHeader1 = document.querySelector('.p1-header');
const playerHeader2 = document.querySelector('.p2-header');

// Dice
const dice = document.querySelector('.dice');

// Rolling dice logic
const rollDice = () => {
    return Math.floor(Math.random() * 6) + 1;
};

// Rolling dice event
rollDiceBtn.addEventListener('click', () => {
    const diceValue = rollDice();
    dice.textContent = diceValue;
    if (diceValue === 1) {
        hold();
        // playerTurn = !playerTurn;
        return;
    }
    currentScore += diceValue;
    playerTurn
        ? (currentScoreP1.textContent = currentScore)
        : (currentScoreP2.textContent = currentScore);
});

// Hold functionality
holdBtn.addEventListener('click', () => {
    // Set current value to total value
    playerTurn
        ? (totalScoreP1.textContent = currentScoreP1.textContent)
        : (totalScoreP2.textContent = currentScoreP2.textContent);

    hold();
});

// Funtion to reset current score for player that just holded or for player that rolled a 1
const hold = () => {
    currentScore = 0;
    playerTurn
        ? (currentScoreP1.textContent = currentScore)
        : (currentScoreP2.textContent = currentScore);
    playerTurn = !playerTurn;
    activePlayer();
};

// Change visual on active player
const activePlayer = () => {
    playerHeader1.classList.toggle('active-player');
    playerHeader2.classList.toggle('active-player');
};
