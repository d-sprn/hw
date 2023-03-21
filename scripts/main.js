"use strict";

function padString(string, number, symbol = '*', boolean = true){

    let funcString = null;
    let symbolCalc = null;
    const funcArr = [];
    let funcString2 = null;

    if (string === undefined || string === null){
        return console.log('String - some error');
    } else if (number === undefined || number === null){
        return console.log('Number - some error');
    }
    if (string.length > number){
        funcString = string.substr(0, number);
    } else if (string.length < number){
        symbolCalc = number - string.length
        for (let i = 0; i < symbolCalc; i++) {
            funcArr.push(i);
            funcArr[i] = symbol;
        }

        funcString2 = funcArr.join('');

        if( boolean === true){
            funcString = string + funcString2;
        } else if (boolean === false){
            funcString = funcString2 + string;
        }
    }
    console.log(funcString)
}

padString('dima', 14, '*', true)