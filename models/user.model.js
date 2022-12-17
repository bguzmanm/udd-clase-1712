const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  username: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  active: {
    type: Boolean,
    default: true
  }
});

const user = mongoose.model("users", userSchema);
module.exports = user; 