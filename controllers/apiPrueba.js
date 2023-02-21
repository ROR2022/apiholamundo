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
  const newDataResenas = JSON.stringify(jsonDataResenas);
  const actualizarDataResenas = await escribirDatos(newDataResenas);

  const objRes= {
    msg: 'Reseña recibida con exito:..',
    resena,
    dataResenas,
    jsonDataResenas,
    actualizarDataResenas
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

//writeFile('message.txt', 'Hello Node.js', 'utf8', callback);

const escribirDatos = async(data) =>{
  return new Promise ((resolve,reject)=>{
    fs.writeFile(`${__dirname}/data/resenas.json`, data, 'utf-8',(err)=>{
      if(err) return reject(err);
      return resolve('Archivo Actualizado:..');
    })
  })
}