'use strict'

void (function () {
  const calculator = {

    first: 0,
    second: 0,

    read(){
      this.first = +prompt('Write first number');
      this.second = +prompt('write second number');
      if (!isNaN(this.first) && !isNaN(this.second)){
        return  { first: this.first, second: this.second}
      } else { return console.log('Write number') }
    },

    sum(){
      return this.first + this.second;
    },

    mul(){
      return this.first * this.second
    }
  }


  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );
})()





