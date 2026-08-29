const express=require('express');
const host = require('./routes/host');
const rent = require('./routes/rent');
const submit = require('./routes/submit');
const app=express();

app.use(host);
app.use(rent);
app.use(submit);
app.get('/',(req,res,next)=>{
  res.send(`<h1>Welcome to Mybnb</h1>
  <a href="/add-bnb"> Register BNB </a><br>
  <a href="/rent"> rent  BNB </a>`)
});

const port=3000;
app.listen(port);