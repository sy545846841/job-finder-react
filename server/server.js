const express = require("express");
const utils = require("utility");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userRouter = require("./user");
const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use("/user", userRouter);
app.listen(9093, () => {
  console.log("node app start at port 9093");
});
