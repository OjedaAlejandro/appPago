const{model,Schema}=require('mongoose');

const userShema=new Schema({
    name:String,
    description:String,
    unit_amount:String,//precio
})

module.exports=model('Producto',userShema);