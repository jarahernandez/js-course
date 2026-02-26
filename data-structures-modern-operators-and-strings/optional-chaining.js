'use strict';
import { restaurant } from './enhanced-obj-literals.js';

if (restaurant.openingHours && restaurant.openingHours.mon)
    console.log(restaurant.openingHours.mon.open);

// Without optional chaining
// console.log(restaurant.openingHours.mon.open); // Error

// With optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of weekdays) {
    // console.log(day);
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ fName: 'Jonas', email: 'hello@jonas.com' }];

console.log(users[0]?.fName ?? 'User array empty');
console.log(users[1]?.fName ?? 'User array empty');

if (users.length > 0) console.log(users[0].fName);
else console.log('user array empty');
