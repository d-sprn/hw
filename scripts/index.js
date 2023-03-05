"use strict";

let a = Number(prompt('Write first number'))

let b = Number(prompt('Write second number'))

let operator = prompt('Write operator: + ; - ; * ; / ;' )

function calc(){
    switch (operator){
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if(b !== 0){
                return a / b;
            } else{
                return "Write correct second number"
            }

    }
}


console.log('Result:', a, operator, b, '=', calc())

