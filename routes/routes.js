import { Router } from "express";
import { prueba } from "../controllers/apiPrueba.js";

export const routes = Router();

routes.get('/probando',prueba);