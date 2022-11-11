const {ObjectID} = require('mongodb');

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

var id = "636eb511dc8749f3683ec3ca";
var invalidId = "636eb511dc8749f3683ec3ca11";

if (!ObjectID.isValid(invalidId)){
    console.log('ID not valid');
}

Todo.find({
  _id: id,
}).then((todos) => {
  console.log("Todos", JSON.stringify(todos, undefined, 2));
});

Todo.findOne({
  _id: id,
}).then((todo) => {
  console.log("Todo", JSON.stringify(todo, undefined, 2));
});

Todo.findById(invalidId).then((todo) => {
  if (!todo) {
    return console.log("Id not found");
  }
  console.log("Todo", JSON.stringify(todo, undefined, 2));
}).catch((err) => {
    console.log(err);
});

User.findById("636e85f715057b5279f95f00").then((user) => {
    if (!user) {
      return console.log("Unable to find user");
    }
    console.log("User", JSON.stringify(user, undefined, 2));
  }, (err) => {
    console.log(err);
  });
