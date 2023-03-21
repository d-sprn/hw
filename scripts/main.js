"use strict";


function calcBorsh(){
    let oneLtr = 4;
    let potato = oneLtr * 0.075;
    let price = 13
    let totalLtr = 48
    let totalPrice = Math.ceil(totalLtr * potato) * price;

    console.log(totalPrice)
}

calcBorsh()