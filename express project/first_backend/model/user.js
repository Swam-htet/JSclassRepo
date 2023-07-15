//Filename: Posts.js
// mongoose import 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  username: {
    type: "String",
    required: true,
    // remove space right and left of the user name
    trim: true,
    unique: true,
  },
  password: {
    type: "String",
    required: true,
    // remove space right and left of the password
    trim: true,
  },
});

module.exports = mongoose.model("User", UserSchema);


