import fs from 'fs';
import { __dirname } from '../app.js';


export const prueba = (req,res)=>{
  const objRes = {
    msg: 'Esta es una prueba del backend:..'
  }
  res.json(objRes);
}

export const postResena = async (req,res)=>{
  const resena = req.body;
try {
  const dataResenas= await leerDatos();
  const jsonDataResenas = JSON.parse(dataResenas);
  jsonDataResenas.push(resena);
  const objRes= {
    msg: 'Reseña recibida con exito:..',
    resena,
    dataResenas,
    jsonDataResenas
  }
  //console.log('DataResenas:..',dataResenas);
  return res.json(objRes)
} catch (error) {
  console.log(error);
  return res.json(error)
}
}

const leerDatos = async ()=>{
 return new Promise ((resolve,reject)=>{
  fs.readFile(`${__dirname}/data/resenas.json`,'utf-8', (err, data) => {
    if (err) return reject(err);
    //console.log(data);
    return resolve(data);
  });
})
}