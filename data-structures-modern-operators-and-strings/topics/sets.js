'use strict';

// Iterable, only unique values, order of elements is irrelevant, no indexing
const ordersSet = new Set(['Pasta', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);

// console.log(ordersSet);

// console.log(new Set('Jonas'));
// console.log(new Set());

// console.log(ordersSet.size); // For sets we use size NOT length

// console.log(ordersSet.has('Pizza')); // Similar to the include() method in arrays
// console.log(ordersSet.has('Bread'));

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// console.log(ordersSet);

// ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(staff).size);

console.log(new Set('edgarjarahernandez').size);

// New Operations to make sets useful
const italianFoods = new Set([
    'pasta',
    'gnocchi',
    'tomatoes',
    'olive oil',
    'garlic',
    'basil',
]);

const mexicanFoods = new Set([
    'tortillas',
    'beans',
    'rice',
    'tomatoes',
    'avocado',
    'garlic',
]);

// Intersection method
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection: ', commonFoods);
console.log([...commonFoods]);

// Union method
const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log('Union: ', italianMexicanFusion);

console.log([...new Set([...italianFoods, ...mexicanFoods])]);

// Difference method
const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log('Difference italian: ', uniqueItalianFoods);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log('Difference mexican: ', uniqueMexicanFoods);

// Symmetric difference
const uniqueItalianAndMexicanFoods =
    italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianAndMexicanFoods);

// Check whether a set is completly different from another (isDisjointFrom)
console.log(italianFoods.isDisjointFrom(mexicanFoods));
