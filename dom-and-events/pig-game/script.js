'use strict';

// Scores
const totalScoreP1 = document.querySelector('.total-score-p1');
const totalScoreP2 = document.querySelector('.total-score-p2');
const currentScoreP1 = document.querySelector('.current-score-p1');
const currentScoreP2 = document.querySelector('.current-score-p2');

// Variables
let playerTurn = true; // true for player#1 - false for player#2
let currentScore = 0;
let playerScore1 = Number(totalScoreP1.textContent);
let playerScore2 = Number(totalScoreP2.textContent);

// Buttons
const newGameBtn = document.querySelector('.new-game');
const rollDiceBtn = document.querySelector('.roll-dice');
const holdBtn = document.querySelector('.hold');

// Player header
const playerHeader1 = document.querySelector('.p1-header');
const playerHeader2 = document.querySelector('.p2-header');

// Dice
const dice = document.querySelector('.dice');
const diceImg = document.querySelector('.dice-img');

// Winner
const winner = document.querySelector('.winner');

// ---------------------- Game Logic ----------------------
// Rolling dice logic
const rollDice = () => {
    return Math.floor(Math.random() * 6) + 1;
};

// Rolling dice event
rollDiceBtn.addEventListener('click', () => {
    const diceValue = rollDice();
    diceImg.src = `static/${diceValue}.png`;
    dice.textContent = diceValue;
    if (diceValue === 1) {
        hold();
        changeActivePlayer();
        return;
    }
    currentScore += diceValue;
    playerTurn
        ? (currentScoreP1.textContent = currentScore)
        : (currentScoreP2.textContent = currentScore);
});

// Hold event
holdBtn.addEventListener('click', () => {
    // Add current value to total value
    if (playerTurn) {
        playerScore1 += currentScore;
        totalScoreP1.textContent = playerScore1;
    } else {
        playerScore2 += currentScore;
        totalScoreP2.textContent = playerScore2;
    }
    hold();
    // Check for winner
    if (checkWinner()) {
        checkWinner();
        return;
    }
    changeActivePlayer();
});

// Funtion to reset current score for player that just holded or for player that rolled a 1
const hold = () => {
    currentScore = 0;
    playerTurn
        ? (currentScoreP1.textContent = currentScore)
        : (currentScoreP2.textContent = currentScore);
};

// Change visual on active player
const changeActivePlayer = () => {
    playerTurn = !playerTurn;
    playerHeader1.classList.toggle('active-player');
    playerHeader2.classList.toggle('active-player');
};

// Win condition
const checkWinner = () => {
    if (playerTurn) {
        if (playerScore1 >= 100) {
            winner.classList.remove('hidden');
            winner.textContent = 'WINNER: PLAYER 1';
            return true;
        } else {
            return false;
        }
    } else {
        if (playerScore2 >= 100) {
            winner.classList.remove('hidden');
            winner.textContent = 'WINNER: PLAYER 2';
            return true;
        } else {
            return false;
        }
    }
};
