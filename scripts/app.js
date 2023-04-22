'use strict';

void (function () {
  const randomNumber = () => {
    const usedNumbers = [];

    const generateNumber = () => {
      const number = Math.floor(Math.random() * 100) + 1;

      if (usedNumbers.includes(number)) {
        return generateNumber();
      }
      usedNumbers.push(number);
      return number;
    };

    return generateNumber;
  };

  const randomNumberArray = randomNumber();

  for (let i = 0; i < 100; i++) {
    randomNumberArray();
  }
})();
