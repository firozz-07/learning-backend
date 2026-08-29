const express=require('express');
const app=express();

app.use((req,res,next)=>{
  res.send('<p>hiiiii</p>');
});


const port=3000;
app.listen(port);