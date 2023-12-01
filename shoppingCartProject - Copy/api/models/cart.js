const mongoose=require("mongoose")



const cartSchema=mongoose.Schema({
    name:String,
    price:Number,
    qty:Number,
    username:String
})


module.exports=mongoose.model("cart",cartSchema)