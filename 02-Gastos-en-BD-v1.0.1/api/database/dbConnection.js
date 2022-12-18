import mongoose from 'mongoose';

mongoose.set('strictQuery', true);

export const dbConnection = async ()=>{
  try {
    await mongoose.connect(process.env.MONGO_DB_ALTAS_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('Base de datos online');

  } catch (error) {
    console.log(error);
    throw new Error('Error en la conexión a la Base de datos');
  }
};