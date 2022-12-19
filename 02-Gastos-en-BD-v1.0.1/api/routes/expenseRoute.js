import {Router} from 'express';
import { check } from 'express-validator';

import { getExpenses, postExpenses } from '../controller/expensesController.js';
import { validateFields } from '../middlewares/validateFields.js';

export const expenseRoute = Router();

expenseRoute.get('/', getExpenses);

expenseRoute.post('/', [
  check('description', 'La descripción es obligatoria').not().isEmpty(),
  check('amount', 'El monto es obligatorio').not().isEmpty(),
  validateFields
], postExpenses);