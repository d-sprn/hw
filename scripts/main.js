"use strict";

let a = prompt('Write Number');

let b = prompt('Write second number');

let result = null;


// Task #1

if( a === 0 ){
    alert('true');
}else{
    alert('false');
}

// Task #2

if( a > 0 ){
    alert('true');
}else{
    alert('false');
}

// Task #3

if( a < 0 ){
    alert('true');
}else{
    alert('false');
}

// Task #4

if( a >= 0 ){
    alert('true');
}else{
    alert('false');
}

// Task #5

if( a <= 0 ){
    alert('true');
}else{
    alert('false');
}

// Task #6

if( a !== 0 ){
    alert('true');
}else{
    alert('false');
}

// Task #7

if( a === 'test' ){
    alert('true');
}else{
    alert('false');
}

// Task #8

if( a === '1' ){
    alert('true');
}else{
    alert('false');
}

// Task #9

if( a > 0 && a < 5  ){
    alert('true');
}else{
    alert('false');
}

// Task #10

if( a === 0 || a < 2 ){
    result = +a + 7;
    alert(result);
}else{
    result = +a / 10;
    alert(result);
}

// Task #11

if(a <= 1 && b >= 3){
    result = +a + +b;
    alert(result);
} else {
    result = +a - +b;
    alert(result);
}

// Task #12

if((a > 2 && a < 11) || (b > 6 && b < 14)){
    console.log('true')
} else {
    console.log('false')
}

// Task #13

let num = +(prompt('Write number from 1 till 4'));


switch (num){
    case 1:
        result = 'Winter';
        break;
    case 2:
        result = 'Spring';
        break;
    case 3:
        result = 'Summer';
        break;
    case 4:
        result = 'Autumn';
        break;
}

alert(result)
