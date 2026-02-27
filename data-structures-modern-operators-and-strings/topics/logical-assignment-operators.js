'use strict';

const restaurant1 = {
    restName: 'Capri',
    // numGuest: 20,
    numGuest: 0,
};

const restaurant2 = {
    restName: 'La Piazza',
    owner: 'Giovanni Rossi',
};

// OR assignment operator
// restaurant1.numGuest = restaurant1.numGuest || 10;
// restaurant2.numGuest = restaurant2.numGuest || 10;
// restaurant1.numGuest ||= 10;
// restaurant2.numGuest ||= 10;

// Nullish assignment operator (null or undefined)
restaurant1.numGuest ??= 10;
restaurant2.numGuest ??= 10;

// AND assignment operator
// restaurant2.owner = restaurant2.owner && '<ANONYMOUS>';
// restaurant1.owner = restaurant1.owner && '<ANONYMOUS>';
restaurant2.owner &&= '<ANONYMOUS>';
restaurant1.owner &&= '<ANONYMOUS>';

console.log(restaurant1);
console.log(restaurant2);
