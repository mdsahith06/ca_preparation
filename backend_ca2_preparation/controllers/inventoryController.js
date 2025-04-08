const inventory=require('../models/inventory')

const getinventory=async(req,res)=>{
    try{
        const data= await inventory.find()
        if(!data){
            return res.status(404).json({message:"data not found"})

        }
        return res.status(200).json({message:"data is fetched successfully",data})

    }catch(error){
        return res.status(500).json({error:"internal server error",error})

    }

}

module.exports=getinventory