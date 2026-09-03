const express=require('express');
const path=require('path');
const host=express.Router();
host.get('/add-bnb',(req,res,next)=>{
res.render('host');
});


exports.host=host;