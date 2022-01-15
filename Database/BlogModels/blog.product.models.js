const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
    unique: true,
  },
  desc: {
    type: String,
    required: true,
  },
  
  Category: {
    type: String,
    required: true,
  },
  tags: {
    type: Arrays,
    required: true,
  },
  img: {
    type: String,
    reuired: true,
  },
  username: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("BlogP", userSchema);
