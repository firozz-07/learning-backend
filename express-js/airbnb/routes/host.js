const express=require('express');
const host=express.Router();
host.get('/add-bnb',(req,res,next)=>{
res.send(`
  <h1>register your bnb</h1>
  <form action="/submit" method="post">
  <input name="housename" type="text" placeholder="enter the housename" ><br>
  <input type="submit" value="submit">
  </form>
  `)
});


module.exports=host;