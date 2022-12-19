export const addSpentToTable = (spent)=>{
  const tbody = document.querySelector('#expense-table-body');

  const row = tbody.insertRow(-1);

  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);

  cell1.innerHTML = spent._id;
  cell2.innerHTML = spent.description;
  cell3.innerHTML = `$ ${spent.amount}`;
};