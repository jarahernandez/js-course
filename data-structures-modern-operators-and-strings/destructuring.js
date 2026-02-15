'use strict';

const restaurant = {
    restName: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; // Destructuring assignment
console.log(x, y, z);
console.log(arr);

// const [first, second] = restaurant.categories; // No need to take all the elements of the array
// console.log(first, second); --> Italian Pizzeria

let [main, , secondary] = restaurant.categories; // No need to take all the elements of the array
console.log(main, secondary); // --> Italian Vegetarian

// Switching variables

// // Without destructuring
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary); // --> Vegetarian Italian

// With destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary); // --> Vegetarian Italian

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
const [num1, , [num2, num3]] = nested;
console.log(num1, num2, num3);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
