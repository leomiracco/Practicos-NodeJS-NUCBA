import { inquirerMenu, leerInput, pausa } from "./helpers/inquirer.js";
import { readDatabase } from "./helpers/readDatabase.js";
import { saveDatabase } from "./helpers/SaveDatabase.js";
import { ExpensesList } from "./models/ExpensesList.js";

const main = async ()=>{

  let object = 0;
  const expensesList = new ExpensesList();

  const tryToReadDb = readDatabase();

  if(tryToReadDb) expensesList.loadListOfExpensesFromExternalFile(tryToReadDb);

  do {
    object = await inquirerMenu();

    switch (object.option) {
      case 1:
        const description = await leerInput('Descripción del gasto:');
        const amount = await leerInput('Ingrese el monto del gasto:');
        expensesList.createList(description, amount);
        break;
      case 2:
        expensesList.getShowExpenseList(expensesList.getArrayOfExpenses);
        break;
      case 3:
        expensesList.getTotalSpend(expensesList.getArrayOfExpenses);
        break;
    }

    saveDatabase(expensesList.getArrayOfExpenses);

    if(object.option !== 0) await pausa();

  } while (object.option !== 0);

};

main();