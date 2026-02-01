'use strict';

const randomNumber = () => Math.floor(Math.random() * 20) + 1;

let myNumber = randomNumber();
console.log(myNumber);

let currentScore = Number(document.querySelector('.score').textContent);
// console.log(currentScore);

let highScore = Number(document.querySelector('.highscore').textContent);
// console.log(highScore);

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const body = document.querySelector('body');
const secretNum = document.querySelector('.number');

checkBtn.addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    const gameMsg = document.querySelector('.message');
    const score = document.querySelector('.score');

    if (!guess) {
        gameMsg.textContent = '⛔ No number!';
    } else if (guess === myNumber) {
        gameMsg.textContent = '🎉 Correct Number!';
        highScore = currentScore > highScore ? currentScore : highScore;
        document.querySelector('.highscore').textContent = highScore;
        checkBtn.textContent = "⏪ Click 'Again!' for another game";
        body.style.backgroundColor = '#60b347';
        secretNum.textContent = myNumber;
        secretNum.style.width = '30rem';
    } else {
        gameMsg.textContent = guess > myNumber ? '☝ Too High!' : '👇 Too Low!';
        currentScore--;
        score.textContent = currentScore;
        // Treat currentScore => single source of truth / DOM => just a reflection
        // Previous version:
        // if (Number(score.textContent) <= 0)...
        if (currentScore <= 0) {
            gameMsg.textContent = '💥 Game Over!';
            checkBtn.disabled = true;
            checkBtn.textContent = "⏪ Click 'Again!' for another game";
            body.style.backgroundColor = '#EE4B2B';
        }
    }
});

againBtn.addEventListener('click', () => {
    myNumber = randomNumber();
    console.log(myNumber);
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = 20;
    currentScore = 20;
    document.querySelector('.message').textContent = 'Start guessing...';
    checkBtn.disabled = false;
    checkBtn.textContent = 'Check!';
    body.style.backgroundColor = '#222';
    secretNum.textContent = '?';
    secretNum.style.width = '15rem';
});
