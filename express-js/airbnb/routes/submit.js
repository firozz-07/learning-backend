const express=require('express');
const submit=express.Router();
submit.post('/submit',(req,res,next)=>{
res.send(`
  <h1>done!!! </h1>
  <a href="/">go to home </a>
  `)
});


module.exports=submit;