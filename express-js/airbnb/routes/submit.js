const express=require('express');
const homes = require('../data/data');
const {submits}=require('../controllers/controllers');
const submit=express.Router();
submit.post('/submit',submits);
module.exports = {
  homes: homes,
  submit: submit
};