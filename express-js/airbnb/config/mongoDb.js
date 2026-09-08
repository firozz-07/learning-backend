const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGODB_URI);

async function connectDB() {
  await client.connect();
  console.log("MongoDB connected");

  return client.db("airbnb");
}

module.exports = connectDB;