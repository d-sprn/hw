"use strict";

// Task #1



const value = Number(prompt('Write number between 0 and 10'));
console.log(value)


if(value > 0 && !isNaN(value) && value < 10){
    alert("Right");
} else{
    alert('try again');
}



// Task #2



let numOrStr = prompt('input number or string');
console.log(numOrStr)


switch (numOrStr){
    case null:
        console.log('Canceled');
        break;
    case '':
        console.log('Empty String');
        break;
    case NaN:
        console.log(' number is Ba_NaN');
        break;
    default:
        console.log('OK!')
}