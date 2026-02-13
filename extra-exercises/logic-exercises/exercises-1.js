'use strict';

// Array frequency counter
// Given an array of integers, return and object containing the frequency of each integer.

const nums = [1, 2, 2, 3, 3, 3, 4];

const arrFrequency = (arr) => {
    const numFrequency = {};

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in numFrequency) {
            numFrequency[arr[i]]++;
        } else {
            numFrequency[arr[i]] = 1;
        }
    }

    return numFrequency;
};

console.log(arrFrequency(nums));

// Find the first Non-repeating character
const str = 'aabbcddeff';

const firstNonrepeatingChar = (str) => {
    const letterFreq = arrFrequency(str);

    for (let letter of str) {
        if (letterFreq[letter] === 1) {
            return letter;
        } else {
            continue;
        }
    }

    return null;
};

console.log(firstNonrepeatingChar(str));
