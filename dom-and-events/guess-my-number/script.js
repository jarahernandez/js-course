'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 21;

document.querySelector('.guess').value = 2;
console.log(document.querySelector('.guess').value);
*/

const randomNumber = () => Math.floor(Math.random() * 20) + 1;

let myNumber = randomNumber();
console.log(myNumber);

let currentScore = Number(document.querySelector('.score').textContent);
// console.log(currentScore);

let highScore = Number(document.querySelector('.highscore').textContent);
// console.log(highScore);

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No number!';
    } else if (guess > myNumber) {
        document.querySelector('.message').textContent = '☝ Too High!';
        currentScore--;
        document.querySelector('.score').textContent = currentScore;
    } else if (guess < myNumber) {
        document.querySelector('.message').textContent = '👇 Too Low!';
        currentScore--;
        document.querySelector('.score').textContent = currentScore;
    } else {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        highScore = currentScore > highScore ? currentScore : highScore;
        document.querySelector('.highscore').textContent = highScore;
    }
});

document.querySelector('.again').addEventListener('click', () => {
    myNumber = randomNumber();
    console.log(myNumber);
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = 20;
    currentScore = 20;
    document.querySelector('.message').textContent = 'Start guessing...';
});
