const express=require('express');
const {addbnb}=require('../controllers/controllers');
const {favourites}=require('../controllers/controllers');
const path=require('path');
const host=express.Router();
const favourite=[];
host.get('/add-bnb',addbnb);
host.post('/favourites/:id',favourites);

exports.host=host;
exports.favourite=favourite;