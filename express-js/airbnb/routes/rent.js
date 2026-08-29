const express=require('express');
const path=require('path');
const rent=express.Router();
rent.get('/rent',(req,res,next)=>{
res.sendFile(path.join(__dirname,'..','/views','rent.html'))
});


module.exports=rent;