import { Router } from "express";
import { deleteResena, getAllResenas, postResena, prueba } from "../controllers/apiPrueba.js";

export const routes = Router();

routes.get('/probando',prueba);

routes.post('/postresena',postResena);

routes.get('/getAllResenas',getAllResenas);

routes.delete('/deleteResena/:id',deleteResena);