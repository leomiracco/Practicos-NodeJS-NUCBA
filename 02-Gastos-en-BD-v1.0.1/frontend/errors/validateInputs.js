import { textErrorInAmount, textErrorInDescription } from '../views/emptyInputsError.js';

export const validateInputs = (description = '', amount = '')=>{
  if(description.length === 0 && amount.length === 0) {
    textErrorInDescription();
    textErrorInAmount();
    return true;
  }else if(description.length === 0){
    textErrorInDescription();
    return true;
  }else if(amount.length === 0){
    textErrorInAmount();
    return true;
  }else{
    return false;
  }
};