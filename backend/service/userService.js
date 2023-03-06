// // create express framework
// const express = require("express");
//
// const {config} = require("../config/Config");
//
// // import jsonwebtoken and bcrypt module
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
//
// // express.router
// const router = express.Router();
//
// // user model import
// const User = require("../model/user");
//
// // new user register
// const register = async (userName, password) => {
//     // generate salt
//     const salt = await bcrypt.genSalt(10);
//
//     // password >> hash(password+salt)
//     const hashPassword = await bcrypt.hash(password, salt);
//
//     // create new user in db
//     let user = new User({
//         username: userName,
//         password: hashPassword,
//     });
//
//     // reutrn new user
//     return user.save();
// };
//
// // user login
// const login = async (userName, password) => {
//
//     // create object
//     const filter = {
//         username: userName,
//     };
//     console.log("Filter ", filter);
//
//     // find the first user with input username from db
//     const user = await User.findOne(filter);
//     if (user) {
//         // valide user
//         console.log('Username ',userName, " Password ",user.password);
//
//         // compare input password and db password
//         const validPass = await bcrypt.compare(password, user.password);
//
//         // if pass
//         if (validPass) {
//
//             // return user
//             return user;
//         } else {
//
//             // invalid user
//             throw Error("Invalid user or password");
//         }
//     }
//
//     // else invalid user
//     throw Error("Invalid user or password");
// };
//
// // get use by id
// const getUserById = (userId) => {
//     return {
//         userId: userId,
//         name: "Some data from DB",
//     };
// };
//
// // module export
// module.exports = {
//     getUserById,
//     register,
//     login,
// };


// config import
let {config} = require("./../config/Config");

// user model import
let User = require("./../model/user");

// bcrypt and jwtToken library import
let bcrypt = require("bcrypt");
let JWT = require("jsonwebtoken");

// user register
async function register(userName, password) {

    // generate salt
    let salt = await bcrypt.genSalt(10);

    // hashing
    let hash = await bcrypt.hash(password, salt);

    // store to the db
    let user = new User({
        username: userName,
        password: hash,
    });
    return user.save();
}


// user login
async function login(userName, password) {
    // filter
    let filter = {
        username: userName
    };

    // find user with username
    let user = await User.findOne(filter);

    // if user or not
    if (user) {
        console.log(`Username : ${userName}, password : ${password}`);
        const valid = await bcrypt.compare(password, user.password);
        if (valid) {
            return user;
        } else {
            throw Error("Invalid User or password.");
        }
    } else {
        throw Error("Invalid User or password.");
    }
}


// // check user by id
// async function getUserByID(id){
//     return User.findById(id);
// }

module.exports = {
    register,
    login
}