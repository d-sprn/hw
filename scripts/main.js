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



const num1= +prompt('Enter negative or positive number');
const checkNum2 = num1 < 0;
let lengthNum = String(num1).length;

let checkedNum = null;

if(checkNum2 === true){
  checkedNum = `Number ${num1} is negative!`;
} else {
  checkedNum = `Number ${num1} is positive!!`;
}


alert(`${checkedNum}, number of symbols ${lengthNum}!)`);

// Task #4

const number1 = +prompt('Write number.');
const number2 = +prompt('Write number.');
const number3 = +prompt('Write number.');


let result4 = null
if(number1 > number2 && number1 > number3){
  result4 = `Largest number is  ${number1}`;
}else if(number2 > number1 && number2 > number3){
    result4 = `Largest number is  ${number2}`;
  }else{
  result4 = `Largest number is  ${number3}`;
}

alert(result4)


// Task #5


const a = +prompt('Write first length');
const b = +prompt('Write second length');
const c = +prompt('Write third length');


let result5 = null;


if(a + b > c && a + c > b && c + b > a){
  result5 = 'Triangle done!!';
} else {
  result5 = 'Triangle broke :('
}


alert(result5)
