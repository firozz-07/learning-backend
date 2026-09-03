const express=require('express');
const {homes}=require('./submit');
const myHomes=express.Router();
myHomes.get('/myHomes',(req,res,next)=>{
res.render('myHomes',{homes});
});


module.exports=myHomes;