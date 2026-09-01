const express=require('express');
const path=require('path');
const submit=express.Router();
const homes=[];
submit.post('/submit',(req,res,next)=>{
  homes.push(req.body.housename);
res.sendFile(path.join(__dirname,'..','views','submit.html'))
});
module.exports={homes:homes,submit:submit};