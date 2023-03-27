"use strict";

const arr = [1, 2, 3, -1, -2, -3];


function positiveFunc(arr){
    const funcArray = [];

    if (arr.length === 0)  return 'Empty Arrow';
    if (arr.length > 0) {
        for (let i = 0 ; i < arr.length; i++){
        if ( arr[i] >= 0 ) funcArray.push(arr[i])
        }
    }
    return  funcArray.length > 0 ? funcArray : null;
}

console.log(positiveFunc(arr));

