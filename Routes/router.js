//1 import express
const express = require('express')

//2 create router from express
const router = express.Router()

//4 import user controller
const userController = require('../Controllers/userController')
const packageController = require('../Controllers/packageController')
const bookingController =require('../Controllers/bookingController')


const jwtMiddleware=require('../Middlewares/jwtMiddleware')

const multerMiddleware=require('../Middlewares/multerMiddleware')

//3 create route for each requests

// 1 register request : http://localhost:3000/api/register
router.post('/api/register',userController.register)

//2 login request : http://localhost:3000/api/login
router.post('/api/login',userController.login)
router.put('/api/updateProfile',jwtMiddleware,multerMiddleware.single('profilePic'),userController.updateProfile)

//3 add package
router.post('/api/addPackage',jwtMiddleware,multerMiddleware.single('photo'),packageController.addPackage)

//get packages
router.get('/api/getPackages',packageController.getPackages)

//get all  packages
router.get('/api/getAllPackages',jwtMiddleware,packageController.getAllPackage)


//update package
router.put('/api/updatePackage/:packageId',jwtMiddleware,multerMiddleware.single('photo'),packageController.updatePackage)

//delete a package
router.delete('/api/deletePackage/:packageId',jwtMiddleware,packageController.deletePackage)

//add booking
router.post('/api/addBooking',jwtMiddleware,bookingController.addBooking)
module.exports=router

//get all  bookings
router.get('/api/getBookings',jwtMiddleware,bookingController.getBooking)


