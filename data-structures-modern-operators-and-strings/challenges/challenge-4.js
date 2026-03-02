'use strict';

// Coding Challenge #4

/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!
*/

const textArea = document.querySelector('textarea');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const myText = textArea.value;
    underScoreToCamel(myText);
});

const underScoreToCamel = function (text) {
    const variables = text.split('\n');
    let maxLen = 0;

    for (const variable of variables) {
        maxLen = variable.length > maxLen ? variable.length : maxLen;
    }
    maxLen += 5;

    for (const [i, variable] of variables.entries()) {
        const normalizedVar = variable.toLowerCase().trim();
        let [word1, word2] = normalizedVar.split('_');
        word2 = word2[0].toUpperCase() + word2.slice(1);
        const camelVar = word1 + word2;
        console.log(`${camelVar.padEnd(maxLen, ' ')}${'✅'.repeat(i + 1)}`);
    }
};
