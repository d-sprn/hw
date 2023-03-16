"use strict";


// Task #1


let x = 10, y = 7;

x > y ? alert('x more then y'):alert('x less than y')


// Task #2


const num = +prompt('Enter number');
const checkNum = num % 2;

if (checkNum === 0) {
  alert(`Number ${num} is even`);
} else {
  alert(`Number ${num} is odd`);
}


// Task #3



const num1= +prompt('Ender negative or positive number');
const checkNum2 = num1 < 0;

let checkedNum = null;

if(checkNum2 === true){
  checkedNum = `Number ${num1} is negative!`;
} else {
  checkedNum = `Number ${num1} is positive!!`;
}


alert(`${checkedNum}`)

// Task #4

const num2 = +prompt('Enter the three-digit number');
const numString = String(num2);

let numStringResult = null;



if(numString.slice(0, 1) > numString.slice(1, 2) && numString.slice(0, 1) > numString.slice(2, 3)){
  numStringResult = `Largest number is ${numString.slice(0, 1)}!!`;
}
else if(numString.slice(1, 2) > numString.slice(0, 1) && numString.slice(1, 2) > numString.slice(2, 3)){
  numStringResult = `Largest number is ${numString.slice(1, 2)}!!`;
}
else if(numString.slice(2, 3) > numString.slice(0, 1) && numString.slice(2, 3) > numString.slice(1, 2)){
  numStringResult = `Largest number is ${numString.slice(2, 3)}!!`;
}
else if(numString.slice(0, 1) === numString.slice(1, 2) && numString.slice(0, 1) === numString.slice(2, 3) && numString.slice(1, 2) === numString.slice(2, 3)) {
  numStringResult = 'All number is same!!!';
}
else{
  numStringResult = 'Try again :(';
}


alert(`${numStringResult} \n The number of symbols: ${(numString.length)}!!`)


// Task #5


const a = +prompt('Write first length');
const b = +prompt('Write second length');
const c = +prompt('Write third length');


let result = null;


if(a + b > c && a + c > b && c + b > a){
  result = 'Triangle done!!';
} else {
  result = 'Triangle broke :('
}


alert(`${result}`)
