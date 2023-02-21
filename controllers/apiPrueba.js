import fs from 'fs';
import { __dirname } from '../app.js';


export const prueba = (req,res)=>{
  const objRes = {
    msg: 'Esta es una prueba del backend:..'
  }
  res.json(objRes);
}

export const getAllResenas = async(req,res)=>{
  try {
    const dataResenas= await leerDatos();
    const jsonDataResenas = JSON.parse(dataResenas);
    return res.json(jsonDataResenas);
  } catch (error) {
    console.log(error);
    return res.json(error)
  }
}

export const postResena = async (req,res)=>{
  const resena = req.body;
  resena.id= myId();
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
  console.log('newDataResenas:..',newDataResenas);
  return res.json(objRes)
} catch (error) {
  console.log(error);
  return res.json(error)
}
}

export const deleteResena = async (req,res)=>{
  const {id}= req.params;
  try {
    const dataResenas= await leerDatos();
    const jsonDataResenas = JSON.parse(dataResenas);
    const newDataResenas = jsonDataResenas.filter((item)=>item.id!==id);
    const actualizarDataResenas = await escribirDatos(JSON.stringify(newDataResenas));
    
    const objRes ={
      msg: 'Eliminando Reseña:..',
      id,
      newDataResenas,
      actualizarDataResenas
    }
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

export const myId = () => {
  let id = [];
  let base = "0123456789ABCDEF";

  for (let i = 0; i < 8; i++) {
    let numero = (Math.random() * 15).toFixed(0);
    id.push(base[numero]);
  }
  return id.join("");
};