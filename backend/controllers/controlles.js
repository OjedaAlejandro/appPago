const Stripe=require("stripe")
const Producto=require("../models/project.model")
const stripe=new Stripe(process.env.daraStripe)

const controller={
    home:(req,res)=>{
        res.send("holaaa")
    },
    createSession:async (req,res)=>{
        const product=new Producto();
        const Data=req.body
        product.name=Data.name;
        product.description=Data.description;
        product.unit_amount=Data.unit_amount;
        console.log(product)
        try{
            const session=await stripe.checkout.sessions.create({
                line_items:[
                    {
                        price_data:{
                          product_data:{
                            name:product.name,
                            description:product.description
                          },
                          currency:'usd',
                          unit_amount:product.unit_amount,
                        },
                        quantity:1,
                    },
                  
                ],
                mode:'payment',//pago de una sola vez
                success_url: 'https://simuladordepagos.web.app/ok', // URL a la que Stripe redirigirá después de un pago exitoso
            })
            console.log(session)
            return res.json(session)
        }
        catch(err){
            res.send({mensajeDeError:err})
        }
    }
};

module.exports=controller;