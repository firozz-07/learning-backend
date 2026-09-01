const express=require('express');
const path=require('path');
const {homes}=require('../routes/submit');
const rent=express.Router();
rent.get('/rent',(req,res,next)=>{
res.render('rent',{homes});
});


module.exports=rent;