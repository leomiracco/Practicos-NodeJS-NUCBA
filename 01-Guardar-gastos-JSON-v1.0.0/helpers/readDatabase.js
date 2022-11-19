import fs from 'fs';

export const readDatabase = ()=>{
  const path = './db/data.json';

  if(!fs.existsSync(path)) return;

  const info = fs.readFileSync(path, {encoding: 'utf-8'});
  const infoJson = JSON.parse(info);

  return infoJson;
};