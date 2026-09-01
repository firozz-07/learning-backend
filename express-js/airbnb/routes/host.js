const express=require('express');
const path=require('path');
const host=express.Router();
const homes=[];
host.get('/add-bnb',(req,res,next)=>{
console.log(req.body);
res.sendFile(path.join(__dirname, '../', 'views', 'host.html'))
});


exports.host=host;
exports.homes=homes;