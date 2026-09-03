const express=require('express');
const path=require('path');
const submit=express.Router();
const homes=[];
submit.post('/submit',(req,res,next)=>{
  const home = {
        housename: req.body.housename,
        price: req.body.price,
        location:req.body.location,
        theme:req.body.theme
    };
  homes.push(home);
res.render('submit')
});
module.exports={homes:homes,submit:submit};