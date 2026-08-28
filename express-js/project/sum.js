const express=require('express');
const sum=express.Router();

sum.use((req,res,next)=>{
      const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
  res.send(`${num1+num2}`);
});
module.exports=sum;