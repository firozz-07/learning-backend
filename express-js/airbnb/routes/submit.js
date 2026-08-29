const express=require('express');
const path=require('path');
const submit=express.Router();
submit.post('/submit',(req,res,next)=>{
res.sendFile(path.join(__dirname,'..','views','submit.html'))
});


module.exports=submit;