const mongoose = require("mongoose");
//connet mongodb
const DB_URL = "mongodb://localhost:27017";
mongoose.connect(DB_URL);

const models = {
  user: {
    username: { type: String, require: true },
    password: { type: String, require: true },
    identity: { type: String, require: true },
    avatar: { type: String },
    description: { type: String },
    title: { type: String },
    company: { type: String },
    salary: { type: String },
  },
  chat: {},
};

for (let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]));
}
module.exports = {
  getModel: (name) => {
    return mongoose.model(name);
  },
};
