'use strict'

const express = require('express');
const Stripe = require('stripe'),
		app = express()

const cors = require('cors');

const stripe = new Stripe("sk_test_51L8EuNHKsPF0nmZbf6JHakNVUHQFuNYAhBEnmqRUzsQUSYbfsZMMMZV5pTWs3RnQDju8aDYyS6RiUu6VFavTL4BG00PH263eg6");

app.use(cors({origin: 'http://localhost:3000'}))

app.use(express.json())

app.post('/api/checkout', async (req,res)=>{
    //console.log(req.body);
    const {id, amount} = req.body;
    try
    {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "MXN",
            description: "prueba con Pesos",
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
	
	.listen(5000)

console.log('Iniciando Express en el puerto 5000')