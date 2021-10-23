const express = require("express");
const utils = require("utility");
const Router = express.Router();
const model = require("./model");
const User = model.getModel("user");
const _filter = { password: 0, __v: 0 };

Router.get("/list", (req, res) => {
  //REMOVE ALL USER!
  //User.remove({}, (err, doc) => {});
  User.find({}, (err, doc) => {
    return res.json(doc);
  });
});
Router.post("/login", (req, res) => {
  const { username, password } = req.body;
  User.findOne(
    { username, password: md5Password(password) },
    _filter,
    (err, doc) => {
      if (!doc) {
        return res.json({
          code: 1,
          msg: "The password or username you've entered is incorrect.",
        });
      }
      res.cookie("userid", doc._id);
      return res.json({ code: 0, data: doc });
    }
  );
});
Router.post("/register", (req, res) => {
  const { username, password, identity } = req.body;
  User.findOne({ username: username }, _filter, (err, doc) => {
    if (doc) {
      return res.json({ code: 1, msg: "username has already been used" });
    }
    User.create(
      { username, password: md5Password(password), identity },
      (err, doc) => {
        if (err) {
          return res.json({ code: 1, msg: "server error" });
        }
        return res.json({ code: 0 });
      }
    );
  });
});
Router.get("/info", (req, res) => {
  const { userid } = req.cookies;
  if (!userid) {
    return res.json({ code: 1 });
  }
  User.findOne({ _id: userid }, _filter, (err, doc) => {
    if (err) {
      return res.json({ code: 1, msg: "server error" });
    }
    if (doc) {
      return res.json({ code: 0, data: doc });
    }
  });
});
const md5Password = (password) => {
  const salt = "enhanced_password_sad~23@2dD#GWvX~WEe&23dx";
  return utils.md5(utils.md5(password + salt));
};
module.exports = Router;
