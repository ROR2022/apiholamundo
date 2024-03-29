

import express from 'express';
import Stripe from 'stripe';
import dotenv from "dotenv";
import { dirname, join } from "path";
import { fileURLToPath } from "url";		
import cors from 'cors';
import { routes } from './routes/routes.js';

const app = express();

dotenv.config();

        /* fs = require('fs'),
        https = require('https'); */

export const __dirname = dirname(fileURLToPath(import.meta.url));


const stripe = new Stripe(process.env.SK_STRIPE);

//{origin: 'https://ror2022.github.io'}
app.use(cors());

app.use(express.json())
app.use(express.static(join(__dirname, "/pruebaFace.html")));
app.use(routes);

app.post('/api/checkout', async (req,res)=>{
    //console.log(req.body);
    const {id, amount, concepto} = req.body;
    try
    {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "MXN",
            description: concepto,
            payment_method: id,
            confirm: true
        })
        console.log(payment);
        res.send({message: 'Succesfull payment'});
        
    }catch (error)
    {
        //console.log(error);
        res.json({message: error.raw.message});
    }
})



app
	.get('/', (req, res) => {
		res.end('<h1>Backend ROR2022</h1>')
	})
    .listen(5000,()=>{
        console.log('Server is Running on port:..5000');
        console.log('dirname:..',__dirname);
    }
        );



/*  https.createServer({
    cert: fs.readFileSync('server.crt'),
    key: fs.readFileSync('server.key')
}, app).listen(5000, function(){
    console.log('Iniciando Express en el puerto 5000');
}) */

