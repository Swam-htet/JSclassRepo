// create express framework
const express = require("express");

const { config } = require("../config/Config");

// import jsonwebtoken and bcrypt module
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// express.router
const router = express.Router();

// user model
const User = require("../model/user");

// new user register
const register = async (userName, password) => {
  // generate salt
  const salt = await bcrypt.genSalt(10);

  // password >> hash(password+salt)
  const hashPassword = await bcrypt.hash(password, salt);

  // create new user in db
  let user = new User({
    username: userName,
    password: hashPassword,
  });

  // reutrn new user
  return user.save();
};

// user login
const login = async (userName, password) => {
  
  // create object 
  const filter = {
    username: userName,
  };
  console.log("Filter ", filter);

  // find username from db 
  const user = await User.findOne(filter);
  if (user) {
    // valide user
    //console.log('Username ',userName, " Password ",user.password);

    // compare input password and db password 
    const validPass = await bcrypt.compare(password, user.password);

    // if pass
    if (validPass) {

      // return user
      return user;
    } else {

      // invalid user
      throw Error("Invalid user or password");
    }
  }

  // else invalid user
  throw Error("Invalid user or password");
};

// get use by id
const getUserById = (userId) => {
  return {
    userId: userId,
    name: "Some data from DB",
  };
};

// module export
module.exports = {
  getUserById,
  register,
  login,
};
