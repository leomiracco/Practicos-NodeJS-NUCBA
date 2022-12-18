import { Spent } from '../models/spentSchema.js';

export const getExpenses = async (request, response)=>{

  const query = {debited: true};

  const [totalRegistros, spents] = await Promise.all([

    Spent.countDocuments(query),

    Spent.find(query)
  ]);

  response.json({
    message: 'Hello World',
    type: 'get API - controller',
    totalRegistros: totalRegistros,
    spents: spents
  });
};

export const postExpenses = async (request, response)=> {

  // console.log(request.body);

  const {id, description, amount} = request.body;

  const spent = new Spent({id, description, amount});

  // Grabar el registro en BD
  await spent.save();

  response.json({
    message: 'Tomá los datos del gasto',
    type: 'post API - controller',
    spent: spent
  });
};