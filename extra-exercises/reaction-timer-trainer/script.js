'use strict';

const start = document.querySelector('.start');
const body = document.querySelector('body');
const bodyCL = body.classList;

// const timer1 = () => {
//     console.time('timer')
//     setTimeout(() => {
//         console.log('timer:');
//     }, 3000);
//     console.time('timer')
//     return endTime - startTime;
// };

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function startHandler() {
    await sleep(3000);
    bodyCL.toggle('waiting');
    bodyCL.toggle('ready');
    const startTime = performance.now();
    console.log(`in async function: ${startTime}`);
    return startTime;
}

start.addEventListener('click', () => {
    bodyCL.toggle('idle');
    bodyCL.toggle('waiting');
    const startTime = startHandler();
    console.log(startTime);
});
