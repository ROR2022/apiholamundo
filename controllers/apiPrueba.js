
export const prueba = (req,res)=>{
  const objRes = {
    msg: 'Esta es una prueba del backend:..'
  }
  res.json(objRes);
}

export const postResena = async (req,res)=>{
  const resena = req.body;
try {
  const objRes= {
    msg: 'Reseña recibida con exito:..',
    resena
  }
  return res.json(objRes)
} catch (error) {
  console.log(error);
  return res.json(error)
}
}