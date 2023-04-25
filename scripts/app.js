'use strict';

void (function () {
  function bind(fn, context, ...rest) {
    return function(...args) {
      const id = Date.now().toString();
      context[id] = fn;
      const res = context[id](...rest, ...args);
      delete context[id];
      return res;
    }
  }

  const user = {
    firstName: '',
    lastName: '',
    name() {
      return `${this.firstName} ${this.lastName}`
    }
  }

  function fullName(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    return this.name();
  }


  console.log(bind(fullName, user)('aaaaa', 'bbbbb'));
})();




