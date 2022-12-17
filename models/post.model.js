const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  body: {
    type: String,
  },
  category: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, ref: "users"
  }
});

const post = mongoose.model("post", postSchema);
module.exports = post;