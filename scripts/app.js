"use strict";



const pow = (number, power) => {
    const powerResult = number**power;
    return alert(`${number} raised to power of ${power} equal ${powerResult}`);
}

const multiply = (number, power) => {
    const multiplyResult = number * power;
    return alert(`${number} multiply ${power} equal ${multiplyResult}`);
}

const division = (number, power) =>{
    const divisionResult = number / power;
    return alert(`${number} division ${power} equal ${divisionResult}`);
}

const modulo = (number, power) =>{
    const moduloResult = number % power;
    return alert(`${number} modulo ${power} equal ${moduloResult}`);
}



const mainFunction = (callback) =>{
    if (callback === 'string' ) return alert('Some error!');
    if(callback !== pow && callback !== multiply && callback !== division && callback !== modulo) {
        return 'Write functions argument';
    }

    const number = Number(prompt('Write number.'));
    const power = Number(prompt('Write second number'));
    if ( number === isNaN(number) || number === isFinite(number) ) return 'Please write number!!';


    if (callback === pow)  return pow(number, power);
    if (callback === multiply)  return multiply(number, power);
    if (callback === division)  return division(number, power);
    if (callback === modulo)  return modulo(number, power);
}

mainFunction(multiply);
