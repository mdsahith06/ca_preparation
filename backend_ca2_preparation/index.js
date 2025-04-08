require('dotenv').config()
const express=require('express')
const app=express()
const PORT=3000
const mongoose=require('mongoose')
const router=require('./routes/inventoryRoutes')

app.use(express.json())
app.use('/',router)

const connect= async()=>{
    try{
        await mongoose.connect(process.env.DB_URL)
        console.log("DB connection successful")


    }catch(error){
        console.log(" DB connection failed")

    }
}


app.listen(PORT,()=>{
    console.log(`server is running in ${PORT}`)
    connect()
})