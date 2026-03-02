'use strict';

console.log('a+very+nice+string'.split('+'));
console.log('Edgar Jara'.split(' '));

// Split and join
const [firstName, lastName] = 'Edgar Jara'.split(' ');
console.log(firstName);
console.log(lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const passanger = 'jessica ann smith davis';

const capitalizeName = function (str) {
    const splitStr = str.split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i][0].toUpperCase() + splitStr[i].slice(1);
    }
    console.log(splitStr.join(' '));
};

capitalizeName(passanger);
capitalizeName('edgar daniel jara hernandez');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Edgar'.padStart(20, '+').padEnd(30, '+'));

const maskCredirCard = function (cardNum) {
    const str = cardNum + '';
    const maskedCC = str.slice(-4).padStart(str.length, '*');
    console.log(maskedCC);
};

maskCredirCard(123456789);

// Repeat
const message2 = 'Bad weather... All departures delayed...';
console.log(message2.repeat(5));

const planesInLine = function (numPlanes) {
    console.log(
        `There are ${numPlanes} planes in line ${'✈️'.repeat(numPlanes)}`,
    );
};

planesInLine(10);
planesInLine(12);
planesInLine(5);
