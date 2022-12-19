import { validationResult } from 'express-validator';

export const validateFields = (request, response, next)=>{
  const errors = validationResult(request);
  if(!errors.isEmpty()) {
    console.log(response.status(400).json(errors));
    return response.status(400).json(errors);
  }

  // Si llega a este punto que siga hacia otro
  // middleware, si no hay más middlewares,
  // entonces que continúe con el siguiente
  // controlador. Es decir, ('routes' => 'user.js')
  // las funciones 'check()' también son
  // middlewares.
  next();
};