const MongoClient = require("mongodb").MongoClient;
require('dotenv').config();

const dbname = process.env.DB_NAME;
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const uri = "mongodb+srv://" + username + ":" + password + "@cluster0.f1vj5.mongodb.net/" + dbname + "?retryWrites=true&w=majority";
console.log(uri);

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//     const collection = client.db("test").collection("orgs");
//     // perform actions on the collection object
//     client.close();
//   });