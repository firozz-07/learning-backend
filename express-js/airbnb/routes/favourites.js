const express=require('express');
const { homes } = require('./submit');
const { favourite } = require('./host');
const favourites=express.Router();

favourites.get('/favourites',(req,res,next)=>{
const favHome=homes.filter(home=>
  favourite.includes(home.id)
);
res.render('favourites',{favHome});
});
module.exports=favourites;