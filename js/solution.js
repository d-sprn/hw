"use strict";

void (function () {
  const li = document.getElementsByTagName("li");
  console.log(li);

  const textArray = [];
  for (const item of li) {
    textArray.push(item.innerHTML);
  }

  console.log(textArray);
})();
