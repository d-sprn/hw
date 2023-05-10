"use strict";

void (function () {
  function createTable() {
    const table = document.createElement("table");
    let count = 1;

    for (let i = 0; i < 10; i++) {
      const tr = document.createElement("tr");
      for (let j = 0; j < 10; j++) {
        const td = document.createElement("td");
        td.textContent = count;
        tr.appendChild(td);
        count++;
      }
      table.appendChild(tr);
    }

    return table;
  }

  const table = createTable();
  document.body.appendChild(table);
})();
