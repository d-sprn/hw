'use strict';

void (function () {
  const array = [1, 2, 3, 4, 5, [1, 2, 3, [1, 2, 3]] ]

  const func = (arr, newArr = []) => {

    for (const item of arr){
      if (!Array.isArray(item)){
        newArr.push(item)
      } else {
        func(item, newArr)
      }
    }

    return newArr

  }
})();





