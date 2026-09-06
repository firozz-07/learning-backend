const express=require('express');
const path=require('path');
const {homes}=require('../routes/submit');
const {rents}=require('../controllers/controllers');
const rent=express.Router();
rent.get('/rent',rents);


module.exports=rent;