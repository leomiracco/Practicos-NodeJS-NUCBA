export const clearErrorMessages = ()=>{
  if (document.body.contains(document.querySelector('.description-error'))){
    // document.body.removeChild(document.querySelector('.description-error'));
    document.querySelector('.description-error').remove();
  }

  if (document.body.contains(document.querySelector('.amount-error'))){
    // document.body.removeChild(document.querySelector('.amount-error'));
    document.querySelector('.amount-error').remove();
  }
};