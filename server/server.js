const { MongoClient } = require("mongodb");
require("dotenv").config();
//get the connection string from the .env file
const CONNECTION_STRING = process.env.CONNECTION_STRING;
// create a new MongoClient
const client = new MongoClient(CONNECTION_STRING);
// connect to the databasegit
try {
  client.connect();
  console.log("Connected to the database");
} 
catch (e) {
  console.error(e);
}
// lets access the sample_airbnb database
const db = client.db("sample_airbnb");
const collection = db.collection("listingsAndReviews");

// lets find all the listings that have a review score of 100
const query = { "review_scores.review_scores_rating": 100 };
const cursor = collection.find(query);
// print the results
cursor.forEach(
  function(doc) {
    console.log(doc.name);
  },
  function(err) {
    client.close();
  }
);
 
