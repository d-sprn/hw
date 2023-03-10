"use strict";


// Task #1


console.log(Boolean(Number('10')) + 1);                     // 2

console.log('sub' + Number(false));                         // 'sub0'

console.log(16  *  '      91    ');                                // 1456

console.log(true-70);                                              // -69

console.log(Number(1 + String(1)) + 1);              // 12

// Task #2


let hour = Number(prompt('Enter the number of hours'));

alert(`In ${hour} hours ${hour*3600} seconds.`);


// Task #3

let num = 1;

num += 12;
num -= 14;
num *= 5;
num /= 7;
num++;
num--;

console.log(num)