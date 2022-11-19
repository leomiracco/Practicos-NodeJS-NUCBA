import fs from 'fs';

export const saveDatabase = (data = [])=>{
  const path = './db/data.json';

  // ojo que la data es un arreglo, lo debemos
  // transformar en un string, de la siguiente manera.

  fs.writeFileSync(path, JSON.stringify(data));

};