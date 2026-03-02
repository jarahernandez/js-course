'use strict';

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log('plane'[0]);

console.log(airline.length);
console.log('Emirates'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('ortugal'));

console.log(airline.slice(4)); // Index indicates whre the slice method will start to extract

// End index is NOT included in the string
// Length of the substring will always be endIndex - startIndex
// In this example, 7 - 4 = 3. (The length of the substring is 3)
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// Start extracting from the end
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
    // B and E are middle seats
    const midSeat = seat.slice(-1);
    if (midSeat === 'B' || midSeat === 'E') {
        console.log('Middle seat');
    } else {
        console.log('NOT middle seat');
    }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
