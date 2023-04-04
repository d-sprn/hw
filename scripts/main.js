"use strict";

// const potato = 0.3;
//
// const ltr = 48;
//
// const price = 13



const borsh = (potatoPerLtr, ltrs, price) => {
    let result = ((potatoPerLtr * ltrs) * price);
        return Math.ceil(result)
}
borsh(0.3, 48, 13)