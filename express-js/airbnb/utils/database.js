require('dotenv').config();

const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

const mongo_URL = process.env.MONGODB_URI;

const mongoConnect = (callback) => {
  mongoClient.connect(mongo_URL).then(client => {
    console.log('MongoDB connected');
    callback(client);
  }).catch(err => {
    console.log('MongoDB connection error:', err);
  });
};

module.exports = mongoConnect;