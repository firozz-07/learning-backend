

require('dotenv').config();

const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

const mongo_URL = process.env.MONGODB_URI;
let _db;
const mongoConnect = (callback) => {
  mongoClient.connect(mongo_URL).then(client => {
    console.log('MongoDB connected');
    _db=client.db("airbnb");
    callback();
  }).catch(err => {
    console.log('MongoDB connection error:', err);
  });
};
const getdb=()=>{return _db}

module.exports = mongoConnect;