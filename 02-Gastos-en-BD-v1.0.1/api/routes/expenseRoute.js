import {Router} from 'express';

import { getExpenses, postExpenses } from '../controller/expensesController.js';

export const expenseRoute = Router();

expenseRoute.get('/', getExpenses);

expenseRoute.post('/', [
  // check('nombre', 'El nombre es obligatorio').not().isEmpty(),
  // check('password', 'El password debe contener mas de 6 dígitos').isLength({min: 6}),
  // check('correo', 'El correo no es válido').isEmail(),
  // check('correo').custom(emailExiste),

  // check('rol').custom((rol) => esRoleValido(rol)),
  // validarCampos
], postExpenses);