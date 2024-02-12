const express=require("express");
const cors=require("cors")
const app=express();

//OJO ESTO ES MUCHO MUY IMPORTANTE
app.use(express.json());//. Este código se encarga de configurar Express para que pueda manejar datos en formato JSON en las solicitudes HTTP
//express.json(): Este método es un middleware de Express que analiza las solicitudes entrantes con un tipo de contenido JSON y transforma el cuerpo del JSON en un objeto JavaScript, que luego estará disponible en req.body

app.use(express.urlencoded({extended: true })); // express.urlencoded(). Este middleware es responsable de analizar las solicitudes entrantes con datos codificados en la URL (por ejemplo, formularios HTML enviados mediante el método POST). El objeto extended se establece en true para indicar que se pueden analizar objetos complejos codificados en la URL (como aquellos que provienen de formularios HTML que tienen campos de array o anidados).

app.use(cors());

const projectRoutes=require('./routers/routers')
app.use('/',projectRoutes);
module.exports=app;