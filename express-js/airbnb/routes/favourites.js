const express=require('express');
const { homes } = require('./submit');
const favourites=express.Router();
favourites.get('/favourites',(req,res,next)=>{
res.render('favourites',{homes});
});
module.exports=favourites;