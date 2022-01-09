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
  cause: [
    {
      title: {
        type: String,
        required: true,
      },
      prob: {
        type: Arrays,
        required: true,
      },
    },
  ],
  sol: [
    {
      topic: {
        tyep: String,
        required: true,
      },
      solu: {
        type: Arrays,
        required: true,
      },
    },
  ],
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
