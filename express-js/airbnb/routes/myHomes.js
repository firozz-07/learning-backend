const express=require('express');
const {myHome}=require('../controllers/controllers');
const myHomes=express.Router();
myHomes.get('/myHomes',myHome);


module.exports=myHomes;