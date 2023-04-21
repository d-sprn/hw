'use strict';

void (function() {
  const func1 = () => {
    let num = 0;
    return (y) => {
      num += y;
      return num;
    };
  };
  const add5 = func1(5);
  return add5(4);
})();
