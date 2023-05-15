'use strict'

void function() {


  const form = document.querySelector('#form')

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const userData = {};

    const formInputs = form.getElementsByTagName('input');

    for (const input of formInputs) {
      userData[input.name] = input.value;
    }

    console.log(userData);
  })



}()
