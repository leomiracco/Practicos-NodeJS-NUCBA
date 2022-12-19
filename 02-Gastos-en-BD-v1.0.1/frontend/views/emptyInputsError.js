export const textErrorInDescription = ()=>{
  const descriptionContainer = document.querySelector('.description-container');

  const paragraphDescription = document.createElement("p");
  paragraphDescription.className = "description-error"; 

  paragraphDescription.innerHTML = `La descripción es obligatoria`;
  
  descriptionContainer.insertAdjacentElement("beforeend", paragraphDescription);
};

export const textErrorInAmount = ()=>{
  const amountContainer = document.querySelector('.amount-container');

  const paragraphAmount = document.createElement("p");
  paragraphAmount.className = "amount-error"; 
  
  paragraphAmount.innerHTML = `El monto es obligatorio`;

  amountContainer.insertAdjacentElement("beforeend", paragraphAmount);  
};