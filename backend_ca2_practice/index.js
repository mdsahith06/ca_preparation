const express=require('express')
const app=express()
const PORT=3000


app.get('/day',(req,res)=>{
    const day =parseInt(req.query.date)

    if(day== 1){
        return res.status(200).json({message:'monday'})
    }
    else if(day==2){
        return res.status(200).json({message:'tuesday'})
    }
    else if(day==3){
        return res.status(200).json({message:'wednesday'})
    }
    else if(day==4){
        return res.status(200).json({message:'thursday'})
    }
    else if(day==5){
        return res.status(200).json({message:'friday'})
    }
    else if(day==6){
        return res.status(200).json({message:'saturday'})
    }
    else if(day==7){
        return res.status(200).json({message:'sunday'})
    }
    else{
        return res.status(400).json({message:'invalid day, enter number between 1-7'})
    }


})


app.listen(PORT,()=>{
    console.log(`server is running${PORT}`)
})





