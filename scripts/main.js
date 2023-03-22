"use strict";

const number = +prompt('Write number.');
let power = prompt('Raised to the power of?');
let powerCheck = null


if (power === null || power === ''){
    powerCheck = 1
} else {
    powerCheck = +power
}

function pow(number, powerCheck = 1){
    if (isNaN(number)|| isNaN(powerCheck)){
        return 'some error';
    }
    return number ** powerCheck;
}

const result = pow(number, powerCheck);

alert(result);