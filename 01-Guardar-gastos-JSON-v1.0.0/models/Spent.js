import { v4 as uuidv4 } from 'uuid';

export class Spent{

  id = '';
  description = '';
  amount = 0;
  debited = null;

  constructor(description = '', amount = 0){
    this.id = uuidv4();
    this.description = description;
    this.amount = parseInt(amount);
    this.debited = true;
  };
};