"use strict";


const borsh = (potatoPerLtr, ltrs, price) => {
    const result = Math.ceil((potatoPerLtr * ltrs) * price);
        return result
}

console.log(borsh(0.3, 48, 13));
