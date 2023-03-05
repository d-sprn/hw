"use strict";

let a = Number(prompt('Write first number'))


let b = Number(prompt('Write second number'))

function plus(){
    return  a + b;
}

function minus(){
    return a - b;
}

function multiply(){
    return a * b;
}

function divide(){
    return a / b;
}

console.log('Result:', a, '+', b, '=', plus())
console.log('Result:', a, '-', b, '=', minus())
console.log('Result:', a, '*', b, '=', multiply())
console.log('Result:', a, '/', b, '=', divide())
