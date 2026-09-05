const express=require('express');
const path=require('path');
const host=express.Router();
const favourite=[];
host.get('/add-bnb',(req,res,next)=>{
res.render('host');
});
host.post('/favourites/:id',(req,res)=>{
  const houseId=Number(req.params.id);
  if(!favourite.includes(houseId)){
    favourite.push(houseId);
  }
})

exports.host=host;
exports.favourite=favourite;