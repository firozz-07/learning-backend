const express=require('express');
const myBookings=express.Router();
myBookings.get('/myBookings',(req,res,next)=>{
res.render('myBookings');
});


module.exports=myBookings;