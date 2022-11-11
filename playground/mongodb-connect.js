//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

// var obj = new ObjectID();
// console.log('Generated ObjectID ', obj);
// console.log('ObjectID getTimestamp ', obj.getTimestamp());

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

  // Insert new doc into Users (name, age, location)
  db.collection("Users").insertOne(
    {
      //_id: 123, //Define an _id field by hand
      name: "Andrew",
      age: 25,
      location: "Philadelphia",
    },
    (err, result) => {
      if (err) {
        return console.log("Unable to insert user", err);
      }

      console.log(result.ops);
      console.log(result.ops[0]._id.getTimestamp());
    }
  );

  db.close();
});
