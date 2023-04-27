'use strict';

void (function () {
  const counter = (initial = 0) => {
    let count = initial;
    let increase = 0;
    let decrease = 0;
    let getCount = 0;

    const  increaseFunc = () => {
      count++;
      increase++;
    }
    const  decreaseFunc = () => {
      count--;
      decrease++;
    }
    const countFunc = () => {
      getCount++;
      return count
    }
    const statFunc = () => {
      return { increase, decrease, getCount, }
    }
    const reset = () => {
      count = initial;
      increase = 0;
      decrease = 0;
      getCount = 0;
    }

    return {increaseFunc, decreaseFunc, statFunc, reset, countFunc}
  }



  const checkCount = counter(10);
  checkCount.increaseFunc();
  checkCount.increaseFunc();
  checkCount.increaseFunc();
  checkCount.decreaseFunc();
  checkCount.decreaseFunc();

  console.log(checkCount.statFunc());
  console.log(checkCount.countFunc());

})();


