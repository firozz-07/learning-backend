const express=require('express');
const { homes } = require('./submit');
const { favourite } = require('./host');
const { Getfav } = require('../controllers/controllers');
const favourites=express.Router();

favourites.get('/favourites',Getfav);
module.exports=favourites;