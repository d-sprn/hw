"use strict";

// Task #1

const a = Number(prompt('Write first number'))

const b = Number(prompt('Write second number'))

function equalityOne(a, b){
    return a === b;
}

console.log(equalityOne(a, b))
alert(equalityOne(a, b))


// Task #2

function equalityTwo(a, b){
    return (a + b) === 10;
}

console.log(equalityTwo(a, b))
alert(equalityTwo(a, b))


// Task 3

const c = Number(prompt('Write number'))


function negative(c){
    return c < 0;
}

console.log(negative(c))
alert(negative(c))