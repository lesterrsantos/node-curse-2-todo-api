const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

  //Count all document into Users collection
  db.collection("Users")
    .find()
    .count()
    .then(
      (count) => {
        console.log(`Users count: ${count}`);
      },
      (err) => {
        console.log("Unable to fetch users", err);
      }
    );

  // Find an user by name field return an Array of users Document
  db.collection("Users")
    .find({
      name: "Andrew",
    })
    .toArray()
    .then(
      (docs) => {
        console.log("Users");
        console.log(JSON.stringify(docs, undefined, 2));
      },
      (err) => {
        console.log("Unable to fetch users", err);
      }
    );

  // Find an user by _id return an Array to one user Document
  db.collection("Users")
    .find({
      _id: new ObjectID("636e5fcb6c36d94a6d4a5afe"),
    })
    .toArray()
    .then(
      (docs) => {
        console.log("Users by _id");
        console.log(JSON.stringify(docs, undefined, 2));
      },
      (err) => {
        console.log("Unable to fetch users", err);
      }
    );
});
