"use strict";

// Task #1

const age = +prompt('Write your age.');
const ageCheck = (!isNaN(age))?  age : alert('Write correct age.');

function ends(ageCheck){
    let result = null;
    let calc = ageCheck % 100;
    if (calc >= 5 && calc <=20) { result = 'Let' }
    else {
        calc = calc % 10;
        if (calc === 1) { result = 'god' }
        else if (calc >= 2 && calc <= 4) { result = 'gode' }
        else { result = 'let'}
    }
    return result
}


alert( `Your age ${ageCheck} ${ends(ageCheck)}`)


