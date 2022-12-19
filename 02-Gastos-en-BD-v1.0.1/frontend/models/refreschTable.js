import { getSpentsFromApi } from './getSpentsFromApi.js';
import { addSpentToTable } from './addSpentToTable.js';

const drawSpentsTable = (spents)=>{
  spents.forEach((spent) => {
    addSpentToTable(spent);
  });
};

export const refreshTable = async ()=>{
  const {spents, totalRegistros} = await getSpentsFromApi();

  document.querySelector('.span-number-of-records').innerHTML = `${totalRegistros}`;

  document.querySelector('#expense-table-body').innerHTML = '';

  drawSpentsTable(spents);
};