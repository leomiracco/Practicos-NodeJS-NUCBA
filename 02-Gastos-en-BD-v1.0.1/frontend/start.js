import { validateInputs } from './errors/validateInputs.js';
import { getSpendingData } from './models/getSpendingData.js';
import { refreshTable } from './models/refreschTable.js';
import { requestPost } from './models/requestPost.js';
import { clearErrorMessages } from './views/clearErrorMessages.js';

document.addEventListener('DOMContentLoaded', ()=>{
  const form = document.querySelector('#createExpenseForm');

  document.querySelector('#description').focus();

  // refresh table
  refreshTable();

  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    
    // borrar mensajes de error
    clearErrorMessages();

    // validar inputs vacíos...
    const thereIsAnError = validateInputs(document.querySelector('#description').value, document.querySelector('#amount').value);
    if(thereIsAnError) return;

    const spendingData = getSpendingData(e);

    // Limpiamos inputs
    document.querySelector('#description').value = '';
    document.querySelector('#amount').value = '';
    document.querySelector('#description').focus();

    await requestPost(spendingData);
    
    // refresh table
    refreshTable();
    // debugger;
  });
});