'use strict';
import { restaurant } from './rest-pattern.js';

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, ele] of menu.entries()) {
    console.log(`${i + 1}: ${ele}`);
}
