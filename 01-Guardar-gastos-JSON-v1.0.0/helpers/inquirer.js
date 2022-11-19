import inquirer from 'inquirer';

// import colors from 'colors';
import 'colors';

const questionsMenu = [
  {
    type: 'list',
    name: 'option',
    message: `¿Qué desea hacer?`,
    choices: [
      {
        value: 1,
        name: `${'1'.green}. Registro del gasto(s) realizado(s)`
      },
      {
        value: 2,
        name: `${'2'.green}. Lista de gastos`
      },
      {
        value: 3,
        name: `${'3'.green}. Gasto total`
      },
      {
        value: 0,
        name: `${'4'.green}. Salir`
      }
    ]
  }
];

export const inquirerMenu = async ()=>{
  console.clear();

  console.log('=========================='.green);
  console.log('  Seleccione una opción:  '.red);
  console.log('==========================\n'.green);
  
  const option = await inquirer.prompt(questionsMenu);

  return option;
};

export const pausa = async ()=>{
  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `Presione ${'ENTER'.green} para continuar`
    }
  ];

  console.log(`\n`);
  await inquirer.prompt(question);
};

export const leerInput = async (text = '')=>{
  const question = [
    {
      type: 'input',
      name: 'description',
      message: text,
      validate(value){
        if(value.length === 0){
          return 'La entrada es obligatoria'
        }
        return true;
      }
    }
  ];
  const {description} = await inquirer.prompt(question);
  return description;
};

