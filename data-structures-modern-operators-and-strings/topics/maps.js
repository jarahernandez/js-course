'use strict';
import { openingHours } from './enhanced-obj-literals.js';

// Data structure to map values to keys (key-value like objects)
// Difference between objects and maps:
//      -> Keys in maps can have any type (object, array, other maps, ints, strings, etc.)
//      -> In objects, keys are ALWAYS strings

const restaurant = new Map();

// .set(key, value) method is used to populate a map (it returns the actual map)
restaurant.set('restName', 'Classico Italiano'); // First parameter is the key, second parameter is the value
restaurant.set(1, 'Firenze, Italy');
// console.log(restaurant.set(2, 'Lisbon, Portugal'));

// Since set returns the map, we can chain methods
restaurant
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open :D')
    .set(false, 'We are closed :(');

// .get(key) to read data from a map
// console.log(restaurant.get('restName')); // Pass the name of the key as parameter
// console.log(restaurant.get(true));
// console.log(restaurant.get('true')); // type of key matters (this returns undefined)

const time = 9;
// console.log(
//     restaurant.get(
//         restaurant.get('open') < time && restaurant.get('close') > time,
//     ),
// );

// .has(key) to check if a map has a certain key
// console.log(restaurant.has('categories')); // Pass key as parameter

// .delete(key) to delete elements from map
restaurant.delete(2); // Pass key as parameter
// console.log(restaurant);

// .size property to get map size
// console.log(restaurant.size);

// .clear() to remove ALL elements from a map
restaurant.clear();
// console.log(restaurant);

// -------Using arrays and objects as map keys-------
// ----Arrays----
restaurant.set([1, 2], 'Test');
// console.log(restaurant);

// Hard coding the array will not work becuase we are referencing another array in the heap
// This will return undefined
// console.log(restaurant.get([1, 2]));

// Resetting map
restaurant.clear();

// Solution
// Here we create a variable to store an array and we use that variable to reference the same array in the .get()
const arr = [1, 2];
restaurant.set(arr, 'Test');
// console.log(restaurant.get(arr));

// Resetting map
restaurant.clear();

// ----Objects----
// reference script in index.html
// restaurant.set(document.querySelector('h1'), 'Heading');
// console.log(restaurant);

// -----------Maps iteration-----------
const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct ✅'],
    [false, 'Try Again!'],
]);
// console.log(question);

// Convert object to map
// console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// Iteration
console.log(question.get('question'));
for (const [key, value] of question) {
    if (typeof key == 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

// const answer = Number(prompt('Your answer: '));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Conver map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
