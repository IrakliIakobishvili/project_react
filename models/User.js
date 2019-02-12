const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  birthDay: String,
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female", "other"]
  },
  address: {
    other: String,
    street: Number,
    city: String
  },
  date: {
    type: String,
    default: new Date(Date.now()).toLocaleString()
  }
});

module.exports = mongoose.model("user", UserSchema);
