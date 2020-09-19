const MongoClient = require("mongodb").MongoClient;
const mongoose = require('mongoose');
require('dotenv').config();

const dbname = process.env.DB_NAME;
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const uri = "mongodb+srv://" + username + ":" + password + "@cluster0.f1vj5.mongodb.net/" + dbname + "?retryWrites=true&w=majority";


try {
  mongoose.connect(uri, { useNewUrlParser: true , useUnifiedTopology: true });
  console.log("Auth succeeded!")
} catch (error) {
  console.log("Auth failed.")
}

module.exports = mongoose;

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//     const collection = client.db("test").collection("orgs");
//     // perform actions on the collection object
//     client.close();
//   });