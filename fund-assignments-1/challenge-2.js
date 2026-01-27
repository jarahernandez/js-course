
/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

Note: Don't round the BMI values. Leave them as they are.
*/

// Test data 1
// let massMark = 78;
// let heightMark = 1.69;
// let massJohn = 92;
// let heightJohn = 1.95;

// Test data 2
let massMark = 95;
let heightMark = 1.88;
let massJohn = 85;
let heightJohn = 1.76;

// BMI calculation
let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

// Bonus
let markHigherBMI = BMIMark > BMIJohn;

console.log(`Mark's BMI: ${BMIMark}\nJohn's BMI: ${BMIJohn}`);
console.log(`${markHigherBMI?"Mark's":"John's"} BMI (${markHigherBMI?BMIMark:BMIJohn}) is higher than ${markHigherBMI?"John's":"Mark's"} (${markHigherBMI?BMIJohn:BMIMark})!`);

