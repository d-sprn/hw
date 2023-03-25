"use strict";


const padString = (string, number, symbol, boolean = true) => {
    if (typeof string !== 'string') return 'It is not string';


    if (typeof number !== 'number' || Number.isNaN(number) || !isFinite(number) ) {
        return 'It is not number';
    }


    if (string.length === number) return string;
    if (string.length > number) return string.substring(0, number);


    if (typeof symbol !== 'string' || symbol.length !== 1) return 'Write only one symbol';
    if (typeof boolean !== 'boolean')  return  'right is not bool';


    const symbols = symbol.repeat(number - string.length);
    return boolean ? string + symbols : symbols + string;
}


console.log(padString('hello', 2, '*', false) );
