
'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;

// Exercise with objects
const edgar = {
    firstName : 'Edgar',
    lastName : 'Jara',
    friends : ['Aylin', 'Kike', 'Logan'],
    age: 23,
    job : 'Admin',
    location : 'USA',
    hasDriversLicense : true,

    getSummary : function () { // This is an object method
        return `${this.firstName} is a ${this.age}-year old, and he has ${this.hasDriversLicense?'a': 'no'} driver's license.`;
    }
}

console.log(`${edgar.firstName} has ${edgar.friends.length} friends, and his best friend is called ${edgar.friends[0]}.`)
console.log(edgar.getSummary());