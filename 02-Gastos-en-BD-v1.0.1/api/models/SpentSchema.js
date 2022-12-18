import { model, Schema } from 'mongoose';

const SpentSchema = Schema({
  description: {
    type: String,
    require: [true, 'La descripción es obligatoria']
  },
  amount: {
    type: Number,
    require: [true, 'El monto es obligatorio']
  },
  debited: {
    type: Boolean,
    default: true
  }
});

// SpentSchema.methods.toJSON = function(){
//   const {__v, password, _id, ...restoPropiedadesUsuario} = this.toObject();
//   restoPropiedadesUsuario.uid = _id;
//   return restoPropiedadesUsuario;
// };

export const Spent = model('Spent', SpentSchema);