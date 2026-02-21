'use strict';

// const myTag = document.querySelector('.message').textContent;
// console.log(myTag);
// document.querySelector('.message').textContent = 'Kike';

// let score = Number(document.querySelector('.score').textContent);
// // console.log(typeof score);

// const myInput = document.querySelector('.check');
// console.log(myInput);

// myInput.addEventListener('click', () => {
//     score--;
//     document.querySelector('.score').textContent = score;
//     console.log(typeof score);
// });

const randomNumber = () => Math.floor(Math.random() * 20) + 1;

let myNumber = randomNumber();
console.log(myNumber);

let highScore = 0;
let score = document.querySelector('.score');
console.log(score);

const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');

let scoreValue = Number(score.textContent);

checkButton.addEventListener('click', () => {
    // Taking user input and casting it
    const userGuess = Number(document.querySelector('.guess').value);
    // Getting game message
    let gameMsg = document.querySelector('.message');
    // Validations
    if (userGuess == myNumber) {
        gameMsg.textContent = 'You win';
        highScore = scoreValue > highScore ? scoreValue : highScore;
        document.querySelector('.highscore').textContent = highScore;
        return;
    }
    if (!userGuess) {
        gameMsg.textContent = 'Invalid input!';
        return;
    }
    if (scoreValue > 1) {
        scoreValue--;
        gameMsg.textContent = userGuess > myNumber ? 'Too High' : 'Too low';
        score.textContent = scoreValue;
    } else {
        gameMsg.textContent = 'Game Over';
        score.textContent = 0;
    }
});

againButton.addEventListener('click', () => {
    myNumber = randomNumber();
    score.textContent = 20;
    scoreValue = 20;
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
});
