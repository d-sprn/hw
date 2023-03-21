"use strict";

const number = +prompt('Write number.');
const power = +prompt('Raised to the power of?');

function pow(number = 1, power){
    if (isNaN(number)|| isNaN(power)){
        return alert('some error');
    } else { return number ** power; }
}

const result = pow(number, power);

alert(result);