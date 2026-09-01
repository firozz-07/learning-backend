const express=require('express');
const path=require('path');
const host=express.Router();
host.get('/add-bnb',(req,res,next)=>{
res.sendFile(path.join(__dirname, '../', 'views', 'host.html'))
});


exports.host=host;