'use strict'

void (function () {
  const palindrome = (num, steps = 0) => {
    if (isPalindrome(num)) {
      return { result: num, steps };
    } else {
      const reversedNum = reverse(num);
      return palindrome(num + reversedNum, steps + 1);
    }
  }

  const isPalindrome = (num) => {
    const str = num.toString();
    const len = str.length;

    for (let i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }

    return true;
  }

  const reverse = (num) => {
    const str = num.toString();
    const len = str.length;
    let result = '';

    for (let i = len - 1; i >= 0; i--) {
      result += str[i];
    }

    return parseInt(result);
  }
})();





