const mongoose = require('mongoose')

const projectSchema=new mongoose.Schema({
   place:{
    type:String,
    required:true
   },
   days:{
    type:String,
    required:true
   },
   
   facilities:{
    type:String,
    required:true
   },
   rate:{
    type:String,
    required:true
   },
   photo:{
    type:String,
    required:true
   },
})
const packages = mongoose.model('packages',projectSchema)
module.exports=packages