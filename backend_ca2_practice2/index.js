const express=require('express')
const app=express()

const PORT=3000

app.get('/assistant/greet',(req,res)=>{
    const name= req.query.name
    const day=new Date().getDay()
    if(day==1){
        return res.status(200).json({
            welcomeMessage: `Hello, ${name}! Welcome to our assistant app!`,
            dayMessage: "Happy Monday! Start your week with energy!"
          })
    }
    else if(day==5){
        return res.status(200).json({
            welcomeMessage: `Hello, ${name}! Welcome to our assistant app!`,
            dayMessage: "It's Friday! The weekend is near!"
          })
    }
    else {
        return res.status(200).json({
            welcomeMessage: `Hello, ${name}! Welcome to our assistant app!`,
            dayMessage: "Have a wonderful day!"
          })
    }
})




app.listen(PORT,()=>{
    console.log(`server is running in ${PORT}`)
})

