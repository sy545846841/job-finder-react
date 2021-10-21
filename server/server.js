const express = require("express");
const mongoose = require("mongoose");

//connet mongodb
const DB_URL = "mongodb://localhost:27017";
mongoose.connect(DB_URL);
mongoose.connection.on("connected", () => {
  console.log("mongo connect success");
});
//add data
const User = mongoose.model(
  "user",
  new mongoose.Schema({
    user: { type: String, require: true },
    age: { type: Number, require: true },
  })
);
User.create(
  {
    user: "Shen",
    age: 18,
  },
  (err, doc) => {
    if (!err) {
      console.log(doc);
    } else {
      console.log(err);
    }
  }
);
//create app
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/data", (req, res) => {
  User.find({}, (err, doc) => {
    res.json(doc);
  });
});

app.listen(9093, () => {
  console.log("node app start at port 9093");
});
