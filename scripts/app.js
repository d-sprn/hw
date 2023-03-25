"use strict";


const number = Number(prompt('Write the number'));

const checkFunction = (number) => {
    let minDiv = null;
    const arr = [];

    if (isNaN(number) || !isFinite(number)) return 'It is not number';
    if (number <= 1) return NaN

    for (let i = 2; i <= number; i++){
        if (number % i === 0) { arr.push(i)}
    }
    return minDiv = +arr[0];
}

console.log(checkFunction(number));