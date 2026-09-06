const express=require('express');
const {myBooking}=require('../controllers/controllers');
const myBookings=express.Router();
myBookings.get('/myBookings',myBooking);


module.exports=myBookings;