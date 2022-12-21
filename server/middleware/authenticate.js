const { model } = require("mongoose");
var { User } = require("./../models/user");

var authenticate = (req, res, next) => {
  var token = req.header("x-auth");

  //User.findByToken() is a call to model method
  User.findByToken(token)
    .then((user) => {
      if (!user) {
        Promise.reject();
      }

      req.user = user;
      req.token = token;
      next();
    })
    .catch((e) => {
      res.status(401).send();
    });
};

module.exports = { authenticate };
