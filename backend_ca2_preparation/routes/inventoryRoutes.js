const express=require('express')
const getinventory=require('../controllers/inventoryController')
const router=express.Router()


router.get('/',getinventory)

module.exports=router
