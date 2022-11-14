const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '6372883ec62bcb5c705a1892'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('6372883ec62bcb5c705a1892').then((todo) => {
  console.log(todo);
});
