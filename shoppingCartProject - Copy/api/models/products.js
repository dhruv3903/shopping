const mongoose=require('mongoose')




const productSchema=mongoose.Schema({
    name:String,
    desc:String,
    mdesc:String,
    price:String,
    img:String,
    quantity:String,
    createdDate:{type:Date,default:new Date()},
    status:{type:String,default:'IN STOCK'}
})




module.exports=mongoose.model('product',productSchema)