import 'colors';
import { Spent } from "./Spent.js";

export class ExpensesList{

  listOfExpenses = {};

  constructor(){
    this.listOfExpenses = {};
  };

  get getArrayOfExpenses(){
    const arrayOfExpenses = [];

    for (const property in this.listOfExpenses) {
      // console.log(`${property}: ${this.listOfExpenses[property]}`);
      arrayOfExpenses.push(this.listOfExpenses[property]);
    };

    return arrayOfExpenses;
  };

  createList(description = '', amount = 0){

    const spent = new Spent(description, amount);

    this.listOfExpenses[spent.id] = spent;
  };

  getShowExpenseList(expenseList = []){
    console.log();

    expenseList.map((spent, i)=>{
      const index = `${i + 1}.`.green;
      const {description, amount} = spent;

      const amountStyle = `${amount}`.green;
      const arrowStyle = `=>`.blue;
      const pesosSignStyle = `$`.red;

      console.log(`${index} ${description} ${arrowStyle} ${pesosSignStyle}${amountStyle}`);

    });
  };

  getTotalSpend(expenseList = []){
    console.log();

    let totalAmount = 0;
    expenseList.map((spent)=>{
      totalAmount += spent.amount;
    });
    const arrowStyle = `=>`.blue;
    const pesosSignStyle = `$`.red;
    const totalAmountStyle = `${totalAmount}`.green;

    console.log(`El monto total de los gastos es ${arrowStyle} ${pesosSignStyle}${totalAmountStyle}`);
  };

  loadListOfExpensesFromExternalFile(expenseList = []){
    expenseList.map((spent)=>{
      this.listOfExpenses[spent.id] = spent;
    });
  };
};