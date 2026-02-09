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
let winner = false;
const winningScore = 100;

// Buttons
const newGameBtn = document.querySelector('.new-game');
const rollDiceBtn = document.querySelector('.roll-dice');
const holdBtn = document.querySelector('.hold');

// Player information card
const playerInfo1 = document.querySelector('.player-1');
const playerInfo2 = document.querySelector('.player-2');

// Dice
const diceImg = document.querySelector('.dice-img');

// Winner
const winnerMsg = document.querySelector('.winner');

// ---------------------- Game Logic ----------------------
// Rolling dice logic
const rollDice = () => {
    return Math.floor(Math.random() * 6) + 1;
};

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
    if (playerTurn) {
        playerInfo1.classList.remove('standby');
        playerInfo1.classList.add('active');
        playerInfo2.classList.remove('active');
        playerInfo2.classList.add('standby');
    } else {
        playerInfo1.classList.remove('active');
        playerInfo1.classList.add('standby');
        playerInfo2.classList.remove('standby');
        playerInfo2.classList.add('active');
    }
};

// Win condition
const checkWinner = () => {
    if (playerTurn) {
        if (playerScore1 >= winningScore) {
            winnerMsg.classList.remove('hidden');
            winnerMsg.textContent = 'WINNER: PLAYER 1';
            winner = true;
        }
    } else {
        if (playerScore2 >= winningScore) {
            winnerMsg.classList.remove('hidden');
            winnerMsg.textContent = 'WINNER: PLAYER 2';
            winner = true;
        }
    }
};

// New game function
const newGame = () => {
    // Reset JS variables
    playerTurn = true;
    currentScore = 0;
    playerScore1 = 0;
    playerScore2 = 0;
    winner = false;

    // Reset active player
    playerInfo1.classList.remove('standby');
    playerInfo1.classList.add('active');
    playerInfo2.classList.remove('active');
    playerInfo2.classList.add('standby');

    // Reset DOM
    totalScoreP1.textContent = 0;
    totalScoreP2.textContent = 0;
    currentScoreP1.textContent = 0;
    currentScoreP2.textContent = 0;
    diceImg.src = 'static/default.png';
    winnerMsg.classList.add('hidden');
    disableBtns();
};

// Enable/disable buttons
const disableBtns = () => {
    rollDiceBtn.disabled = winner;
    holdBtn.disabled = winner;
};

// ---------------------- Events ----------------------
// Rolling dice event
rollDiceBtn.addEventListener('click', () => {
    const diceValue = rollDice();
    diceImg.src = `static/${diceValue}.png`;
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
    checkWinner();
    if (winner) {
        disableBtns();
        return;
    }
    changeActivePlayer();
});

// New game event
newGameBtn.addEventListener('click', () => {
    newGame();
});
