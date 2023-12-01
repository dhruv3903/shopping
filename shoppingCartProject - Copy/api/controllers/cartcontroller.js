const Cart=require("../models/cart")
const Product=require('../models/products')


exports.cartvalue=async(req,res)=>{
    try{
    const {items}=req.body
    const username=req.params.username
    //console.log(items)
    for(let key in items){
        //console.log(key,items[key])
        const record=await Product.findById(key)
        const newcart=new Cart({name:record.name,price:record.price,qty:items[key],username:username})
        newcart.save()
        console.log(newcart)
        //console.log(record)
    }
    res.status(201).json({
        status:201
    })
    }catch(error){
        res.status(400).json({
            status:400,
            message:error.message
        })
    }
}

exports.userdata=async(req,res)=>{
    try{
    const username=req.params.username
    const record=await Cart.find({username:username})
    res.status(200).json({
        status:200,
        apiData:record
    })
    }catch(error){
        res.status(500).json({
            status:500,
            message:error.message
        })
    }
}
