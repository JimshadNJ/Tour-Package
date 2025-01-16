//1 load .env file
require('dotenv').config()
//2 express import
const express=require('express')
//6 import cors
const cors=require('cors')
require('./Db/connection')
const router = require('./Routes/router')


//3 create an app using express
const tpServer=express()
//4 port creation
const PORT = 3000 || process.env.PORT

//7
tpServer.use(cors())
tpServer.use(express.json())
tpServer.use(router)

//image export to frontend
tpServer.use('/uploads',express.static('./uploads'))
//5 App
tpServer.listen((PORT),()=>{
    console.log('tpServer listening on the port '+PORT);
    
})
tpServer.get('/',(req,res)=>{
    res.send("Welcome to tpServer")
})