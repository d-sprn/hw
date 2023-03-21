"use strict";

function fib(n){

}
const number = +prompt('Write number.');
let power = +prompt('Raised to the power of?');


function pow(number, power = 1){
    if (isNaN(number)|| isNaN(power)){
        return 'some error';
    }
    return number ** power;
}

const result = pow(number, power);

alert(result);