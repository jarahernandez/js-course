'use strict';
import { restaurant } from './rest-pattern.js';

// Use ANY data type, return ANY data type, short-circuting (shor circuit evaluation)

// OR operator returns the first truthy value of all the operands or the last if all of them are falsy
console.log('---------- OR ----------');
console.log(3 || 'Edgar');
console.log('' || 'Edgar');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuest = 23;
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10; // Won't work if restaurant.numGuest == 0
console.log(guest1);

const guest2 = restaurant.numGuest || 10; // Won't work if restaurant.numGuest == 0
console.log(guest2);

// AND operator returns the first falsy value of all the operands or the last if all of them are truthy
console.log('---------- AND ----------');
console.log(0 && 'Edgar');
console.log(7 && 'Edgar');

console.log('Hello' && 23 && null && 'Edgar');

// Practical example
if (restaurant.orderPizza) {
    restaurant.orderPizza('pepperoni', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('pepperoni', 'mushrooms');

// Practical examples OR / AND operator:
// OR can be used to set default values
// AND can be used to execute code in the second operand if the first one is true
