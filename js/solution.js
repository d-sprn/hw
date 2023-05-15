'use strict'

void function() {
  const list = document.querySelector('#ulId');

  const listAttributes = [];
  for (const  attribute of list.attributes) {
    listAttributes.push(attribute.value);
  }
  console.log(listAttributes);

  const listAttributesName = [];
  for (const attribute of list.attributes) {
    listAttributesName.push(attribute.name);
  }
  console.log(listAttributesName);

  const liItems = list.querySelectorAll('li')
  const lastItem = liItems[liItems.length - 1];
  lastItem.textContent = 'Hello, my name is Dima'
  console.log(lastItem);

  const firstItem = liItems[0];
  firstItem.setAttribute('data-my-name', 'Dima')

  list.removeAttribute('data-dog-tail')
}()


