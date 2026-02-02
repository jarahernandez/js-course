'use strict';

const start = document.querySelector('.start');
const stop = document.querySelector('.stop')
const reset = document.querySelector('.reset')
const body = document.querySelector('body');
const bodyCL = body.classList;
const instructionCL = document.querySelector('.instruction').classList;
const currentTimeE = document.querySelector('.current-time');
const recordTimeE = document.querySelector('.record-time');
let earlyStart = true;
let timeOutId = 0;
let startTime = 0;
let endTime = 0;

const randomDelayGen = () => Math.floor(Math.random() * 5000) + 1000;
let randomDelay = randomDelayGen();

start.addEventListener('click', () => {
    bodyCL.toggle('idle');
    bodyCL.toggle('waiting');
    timeOutId = setTimeout(() => {
        bodyCL.toggle('waiting')
        bodyCL.toggle('ready')
        earlyStart = false;
        startTime = performance.now();
    }, randomDelay)
    start.disabled = true;
    stop.disabled = false;
});

stop.addEventListener('click', () => {
    if (earlyStart) {
        clearTimeout(timeOutId);
        instructionCL.toggle('hidden');
        bodyCL.contains('ready') ? bodyCL.toggle('ready') : '';
        bodyCL.contains('waiting') ? bodyCL.toggle('waiting') : '';
        bodyCL.toggle('finished');
        stop.disabled = true;
    } else {
        endTime = performance.now();
        bodyCL.contains('ready') ? bodyCL.toggle('ready') : '';
        bodyCL.contains('waiting') ? bodyCL.toggle('waiting') : '';
        bodyCL.toggle('finished');
        stop.disabled = true;
        console.log(`Start time: ${startTime}ms\nEnd Time: ${endTime}ms`);
        let reactionTimeInSecs = (endTime-startTime)/1000;
        reactionTimeInSecs = reactionTimeInSecs.toFixed(3);
        console.log(`Reaction time: ${reactionTimeInSecs}s`);
        let recordTimeNum = Number(recordTimeE.textContent);
        currentTimeE.textContent = reactionTimeInSecs;

        if (recordTimeNum === 0) {
            console.log('record is 0');
            recordTimeE.textContent = reactionTimeInSecs;
            return;
        }
        recordTimeE.textContent = reactionTimeInSecs < recordTimeNum ? reactionTimeInSecs : recordTimeNum;
    }
})

reset.addEventListener('click', () => {
    body.setAttribute('class', '');
    bodyCL.add('idle');
    if(!instructionCL.contains('hidden')){
        instructionCL.toggle('hidden');
    }
    start.disabled = false;
    stop.disabled = true;
    currentTimeE.textContent = '0.0'
    startTime = 0;
    endTime = 0;
    earlyStart = true;
    randomDelay = randomDelayGen();
})
