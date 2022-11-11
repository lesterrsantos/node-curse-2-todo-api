const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

/*   //deleteMany
  db.collection("Users")
    .deleteMany({
      age: 25,
    })
    .then(
      (result) => {
        console.log(result);
      },
      (err) => {
        console.log("Unable to fetch users", err);
      }
    ); */

/*   //deleteOne
  db.collection("Users")
    .deleteOne({
      name: "Andrew",
    })
    .then(
      (result) => {
        console.log(result);
      },
      (err) => {
        console.log("Unable to fetch users", err);
      }
    ); */

  //findOneAndDelete
  db.collection("Users")
    .findOneAndDelete({
      name: "Lester",
    })
    .then(
      (result) => {
        console.log(result);
      },
      (err) => {
        console.log("Unable to fetch users", err);
      }
    );
});
