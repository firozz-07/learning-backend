const express=require('express');
const rent=express.Router();
rent.get('/rent',(req,res,next)=>{
res.send(`
  <h1>browse our bnb's : </h1>
  `)
});


module.exports=rent;