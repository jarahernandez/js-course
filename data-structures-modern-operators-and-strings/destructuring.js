'use strict';

const restaurant = {
    restName: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    // We can do seatructuring inmediately in the parameters
    orderDelivery: function ({
        starterIndex = 1,
        mainIndex = 0,
        time = '20:00',
        address,
    }) {
        console.log(
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
        );
    },
};

restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
});

restaurant.orderDelivery({
    address: 'Via del Sole, 21',
    starterIndex: 1,
});

// --------------------Array destructuring--------------------
const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

const [x, y, z] = arr; // Destructuring assignment
// console.log(x, y, z);
// console.log(arr);

// const [first, second] = restaurant.categories; // No need to take all the elements of the array
// console.log(first, second); --> Italian Pizzeria

let [main, , secondary] = restaurant.categories; // No need to take all the elements of the array
// console.log(main, secondary); // --> Italian Vegetarian

// Switching variables

// // Without destructuring
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary); // --> Vegetarian Italian

// With destructuring
[main, secondary] = [secondary, main];
// console.log(main, secondary); // --> Vegetarian Italian

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
const [num1, , [num2, num3]] = nested;
// console.log(num1, num2, num3);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// --------------------Object destructuring--------------------
const { restName, openingHours, categories } = restaurant;
// console.log(restName, openingHours, categories);

// Give properties different names
const {
    restName: RestaurantName,
    openingHours: hours,
    categories: tags,
} = restaurant;
// console.log(restName, openingHours, categories);

// Default values (and combining renaming properties)
const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = {
    a: 23,
    b: 7,
    c: 14,
};

// We need parenthesis because if we only use curly braces at the start of the line, JS expects a code block. Code blocks cannot be assigned to anything.
({ a, b } = obj);
// console.log(a, b);

// Nested objects
const {
    fri: { open: o, close: c },
} = openingHours;
// console.log(o, c);
