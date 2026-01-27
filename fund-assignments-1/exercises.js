
// Values and variables
const country = 'United States';
const continent = 'North America';
let population = 343;

const isIsland = false;
let language;

console.log(`Country: ${country}\nContinent: ${continent}\nPopulation: ${population}`);


// Data types
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);

language = 'English';
// country = 'Mexico';


// Basic operators | String and template literals
console.log(population/2);
population++;
console.log(population);
console.log(population > 600000 ? `${country} has more people than Finland` : `${country} has less population than Finland`);
console.log(population > 33000000 ? `${country} has more people than the average country` : `${country} has less population than the average country`);

let description = `${country} is in ${continent}, and its ${population-1} million people speak various languages.`;
console.log(description);


// If-else statements
if( population > 33 ) {
    console.log(`${country}'s population is ${population-33} million above average`);
} else {
    console.log(`${country}'s population is ${33 - population} million below average`)
}


// Type conversion and coercion
console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> '617'
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143


// Equality operators: == vs ===
// let numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// if( numNeighbours === 1 ) console.log('Only 1 border');
// else if( numNeighbours > 1 ) console.log('More than 1 border');
// else console.log('No borders');


// Logical operators
if( language === 'English' && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet you criteria :(`);
}


// The switch statement
switch(language) {
    case 'Chinese':
    case 'Mandarin':
        console.log('Most number of native speakers');
        break;
    case 'Spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'English':
        console.log('3rd place');
        break;
    case 'Hindi':
        console.log('4th place');
        break;
    case 'Arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too!');
}


// Ternary operator
// console.log(population > 33 ? `${country}'s population is above average` : `${country}'s population is below avergare`);
console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`);