

import express from 'express';
import Stripe from 'stripe';
import dotenv from "dotenv";
import { dirname, join } from "path";
import { fileURLToPath } from "url";		
import cors from 'cors';

const app = express();

dotenv.config();

        /* fs = require('fs'),
        https = require('https'); */

const __dirname = dirname(fileURLToPath(import.meta.url));


const stripe = new Stripe(process.env.SK_STRIPE);


app.use(cors({origin: 'https://ror2022.github.io'}))

app.use(express.json())
app.use('/face',express.static(join(__dirname, "/index.html")));

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
    .listen(5000,()=>console.log('Server is Running on port:..5000'));



/*  https.createServer({
    cert: fs.readFileSync('server.crt'),
    key: fs.readFileSync('server.key')
}, app).listen(5000, function(){
    console.log('Iniciando Express en el puerto 5000');
}) */

