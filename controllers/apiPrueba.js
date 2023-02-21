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
  const dataResenas= new Promise ((resolve,reject)=>{
    fs.readFile('/data/resenas.txt', (err, data) => {
      if (err) return reject(err);
      console.log(data);
      return resolve(data);
    });
  })
   

  const objRes= {
    msg: 'Reseña recibida con exito:..',
    resena,
    dataResenas
  }
  return res.json(objRes)
} catch (error) {
  console.log(error);
  return res.json(error)
}
}