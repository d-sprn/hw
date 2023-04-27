// Task #1

void (function () {
  const getFactorial = (n) => {
    if (n < 1) return 1;
    return n * getFactorial(n - 1);
  };
})();

// Task #2

void (function () {
  const powFunc = (n, pow) => {
    if (pow === 1) {
      return n;
    }
    return n * powFunc(n, pow - 1);
  };

  func2(2, 5);
})();

// Task #3

void (function() {
  const recursionAdd = (a, b) => {
    if (b === 0) return a;
    return recursionAdd(a + 1, b - 1);
  };
})
