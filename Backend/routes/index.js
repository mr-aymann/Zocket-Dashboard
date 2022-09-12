const express=require('express')
const router=express.Router()

const campainListRouter=require('./campainList')
const findrouter=require('./find')

router.get('/',(req,res)=>{
    res.send("This api is reserved for Zocket Dashboard")
})

router.use('/campainList',campainListRouter)
router.use('/find',findrouter)

module.exports=router;