'use strict';

const passanger = 'jOnAS';
const passangerLower = passanger.toLowerCase();
const passangerCorrect =
    passangerLower[0].toUpperCase() + passangerLower.slice(1);
console.log(passangerCorrect);

const correctCapitalization = function (str) {
    const strLower = str.toLowerCase();
    const strCorrect = strLower[0].toUpperCase() + strLower.slice(1);
    console.log(strCorrect);
};

correctCapitalization('edGar');
correctCapitalization('AYLin');
correctCapitalization('EnRQUe');
correctCapitalization('LoGAN');

// Comparing emails
const email = 'hello@edgar.io';
const loginEmail = '  Hello@Edgar.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// We can chain these methods (less lines of code)
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replacing
const priceGB = '288,97E';
const priceUS = priceGB.replace('E', '$').replace(',', '.');
console.log(priceUS);

const announcement =
    'All passangers come to boargind door 23. Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));

// Boolean
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
    console.log('Part of the new Airbus family');
}

// Practice exercise
const checkBaggage = function (items) {
    const baggage = items.toLowerCase();
    if (baggage.includes('knife') || baggage.includes('gun')) {
        console.log('You are not allowed on board');
    } else {
        console.log('Welcome aboard!');
    }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
