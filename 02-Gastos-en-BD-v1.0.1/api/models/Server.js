import express from 'express';
import cors from 'cors';

import 'dotenv/config.js';
import { dbConnection } from '../database/dbConnection.js';
import { expenseRoute } from '../routes/expenseRoute.js';

export class Server{

  app = null;
  port = null;
  usuariosRoutePath = null;
  paths = null;

  constructor(){
    this.app = express();
    this.port = process.env.PORT;

    // this.paths = {
    //   auth: '/api/auth',
    //   usuariosRoute: '/api/usuarios',
    //   categorias: '/api/categorias'
    // };

    this.paths = {
      createExpense: '/expense'
    };

    // Conectar a BD
    this.conectarDB();

    // Middlewares => funciones que se ejecutan
    // cuando se levanta un servidor
    this.middlewares();

    // Rutas de nuestra aplicación.
    this.routes();
  };

  async conectarDB(){
    await dbConnection();
  };

  middlewares(){
    // CORS => siempre es importante configurar
    // el CORS. 
    this.app.use(cors());

    // Lectura y Parseo del body
    this.app.use(express.json());

    // Directorio público.
    this.app.use(express.static('public'));
  };

  routes(){
    // Middleware casero...
    this.app.use(this.paths.createExpense, expenseRoute);
  };

  listen(){
    this.app.listen(this.port, ()=>{
    console.log(`Servidor corriendo en puerto: ${this.port}`);
    });
  };
};