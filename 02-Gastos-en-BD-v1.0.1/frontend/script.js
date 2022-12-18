const getSpendingData = (e)=>{
  const elements = e.target.elements;
  // const id = elements.id.value;
  const description = elements.description.value;
  const amount = parseInt(elements.amount.value);
  return{
    /* id: id, */
    description: description,
    amount: amount
  }
};

const requestPost = async (spendingData)=>{

  try {
    
    const response = await fetch(`http://localhost:8080/expense`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(spendingData)
    });
  
    // if(response.ok){
    //   const jsonResponse = await response.json();
    // }

  } catch (error) {
    console.log(error);
  }

};

const getSpentsFromApi = async ()=>{
  try {
    
    const response = await fetch(`http://localhost:8080/expense`);
  
    const data = await response.json();

    return data;

    // if(response.ok){
    //   const jsonResponse = await response.json();
    // }

  } catch (error) {
    console.log(error);
  }
};

const addSpentToTable = (spent)=>{
  const tbody = document.querySelector('#expense-table-body');

  const row = tbody.insertRow(-1);

  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);

  cell1.innerHTML = spent._id;
  cell2.innerHTML = spent.description;
  cell3.innerHTML = spent.amount;
};

const drawSpentsTable = (spents)=>{

  spents.forEach((spent) => {
    addSpentToTable(spent);
  });
};

const refreshTable = async ()=>{
  const {spents} = await getSpentsFromApi();

  document.querySelector('#expense-table-body').innerHTML = '';

  drawSpentsTable(spents);
};

document.addEventListener('DOMContentLoaded', ()=>{
  const form = document.querySelector('#createExpenseForm');

  // refresh table
  refreshTable();

  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    
    const spendingData = getSpendingData(e);

    await requestPost(spendingData);
    
    // refresh table
    refreshTable();
    // debugger;
  });
});