const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const _ = require("lodash");

// var user = {
//   email: 'leste@datys.cu',
//   password: 'asdasdafsdgfsdfgfgg',
//   tokens: [{
//     access: 'auth',
//     token: "skdgfsdfkhsdkhfjhdfsdf"
//   }]
// }

// the unique: true property is not a validator instead is a field for create an index
// in mongoDb if the collection has an index by the field and the user try to add
// new document with the same value as previous it throw an Exception
var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "{VALUE} is not a valid email",
    },
  },
  password: {
    type: String,
    require: true,
    minlength: 6,
  },
  tokens: [
    {
      access: {
        type: String,
        require: true,
      },
      token: {
        type: String,
        require: true,
      },
    },
  ],
});

UserSchema.methods.toJSON = function () {
  var user = this;
  var userObject = user.toObject();

  return _.pick(userObject, ["_id", "email"]);
};

UserSchema.methods.generateAuthToken = function () {
  var user = this;
  var access = "auth";
  var token = jwt
    .sign({ _id: user._id.toHexString(), access }, "abc123")
    .toString();

  // user.tokens.push({access, token});

  user.tokens = user.tokens.concat([{ access, token }]);

  return user.save().then(() => {
    return token;
  });
};

UserSchema.statics.findByToken = function (token) {
  var User = this;
  var decoded;

  try {
    decoded = jwt.verify(token, "abc123");
  } catch (e) {}

  return User.findOne({
    _id: decoded._id,
    "tokens.token": token,
    "tokens.access": "auth",
  });
};

var User = mongoose.model("User", UserSchema);

module.exports = { User };
