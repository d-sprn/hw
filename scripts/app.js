// Task #1

void (function () {
  const func1 = (n) => {
    if (n < 1) return 1;
    return n * func1(n - 1);
  };
})();

// Task #2

void (function () {
  const func2 = (n, pow) => {
    if (pow === 1) {
      return n;
    }
    return n * func2(n, pow - 1);
  };

  func2(2, 5);
})();

// Task #3

void (function() {
  const func3 = (a, b) => {
    if (b === 0) return a;
    return func3(a + 1, b - 1);
  };
})
