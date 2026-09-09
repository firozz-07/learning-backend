const express = require('express');

const { Getfav, removeFavourite } = require('../controllers/controllers');

const favourites = express.Router();

favourites.delete('/favourites/:id', removeFavourite);

favourites.get('/favourites', Getfav);

module.exports = favourites;