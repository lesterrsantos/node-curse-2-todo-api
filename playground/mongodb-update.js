const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

  //findOneAndUpdate
  db.collection("Users")
    .findOneAndUpdate(
      {
        _id: new ObjectID("636e5ff48919414ad432729e"),
      },
      {
        $set: {
          name: "Lester",
          age: 31,
        },
      },
      {
        returnOriginal: false,
      }
    )
    .then(
      (result) => {
        console.log(result);
      },
      (err) => {
        console.log("Unable to fetch users", err);
      }
    );

  //findOneAndUpdate
  db.collection("Users")
    .findOneAndUpdate(
      {
        _id: new ObjectID("636e617fa18c704d13f25c89"),
      },
      {
        $set: {
          name: "Pedro",
        },
        $inc: {
          age: 1,
        },
      },
      {
        returnOriginal: false,
      }
    )
    .then(
      (result) => {
        console.log(result);
      },
      (err) => {
        console.log("Unable to fetch users", err);
      }
    );
});
