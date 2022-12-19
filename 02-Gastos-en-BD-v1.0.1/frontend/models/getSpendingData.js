export const getSpendingData = (e)=>{
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