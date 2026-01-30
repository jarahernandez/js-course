/*
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

Create an array called bills containing all 10 test bill values.

Create empty arrays for the tips and the totals (tips and totals)

Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

BONUS:

Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

Call the function with the totals array.
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = bill => {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
};

for (let bill = 0; bill < bills.length; bill++) {
    tips.push(calcTip(bills[bill]));
    let tip = tips[bill];
    totals.push(tip + bills[bill]);
}
console.log(bills, tips, totals);

// Bonus
const calcAverage = arr => {
    let average = 0;
    for (let i = 0; i < arr.length; i++) {
        average += arr[i];
    }
    return average / arr.length;
};

console.log(`Average total bill: $${calcAverage(totals)}`);
