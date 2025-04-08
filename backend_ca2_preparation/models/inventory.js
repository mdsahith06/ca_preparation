const mongoose=require('mongoose')

const inventorySchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    price:{
        type:Number,
        required:true,
        min:0

    },
    stock:{
        type:Number,
        required:true,
        min:0
    },
    description:{
        type:String,
        
    },
    category:{
        type:String,
        enum:["electronics","household supply","kitchen supply"]

    }
    
})

const inventory=mongoose.model("inventory",inventorySchema)
module.exports=inventory