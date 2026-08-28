const http=require('http');
const express=require('express');
const app=express();
app.get('/',(req,res,next)=>{
  res.send('<P>welcome to the home page</p>');
});

app.get('/submit',(req,res,next)=>{
  res.send('<P>welcome to the submit page </p>');
});

server=http.createServer(app);
const Port=3000;
server.listen(Port);