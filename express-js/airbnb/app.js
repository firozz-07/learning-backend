const express=require('express');
const path=require('path');
const host = require('./routes/host');
const rent = require('./routes/rent');
const submit = require('./routes/submit');
const rootDir = require("./utils/pathUtils");
const app=express();
app.use(express.static(path.join(rootDir, 'public')))
app.use("/host",host);
app.use("/user",rent);
app.use("/host",submit);
app.get('/',(req,res,next)=>{
  res.sendFile(path.join(__dirname,'/views','/home.html'))
});

app.use((req,res,next)=>{
res.sendFile(path.join(__dirname,'/views','404.html'))
})

const port=3000;
app.listen(port);