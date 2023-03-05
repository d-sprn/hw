"use strict";

const a = Number(prompt('Write first number'));

const b = Number(prompt('Write second Number'));

const operator = prompt('Write: add, sub, mult, div');


function operatorFunction(){
    switch (operator) {
        case 'add':
            return '+';
        case 'sub':
            return '-';
        case 'mult':
            return '*';
        case 'div':
            return  '/';
    }
}
function calc(){
    switch (operator) {
        case 'add':
            return a + b;
        case 'sub':
            return a - b;
        case 'mult':
            return a * b;
        case 'div':
            return  a / b;
    }
}


console.log('Result:', a, operatorFunction(), b, '=', calc())