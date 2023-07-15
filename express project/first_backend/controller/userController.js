// // user service import
// let userService = require("../service/UserService");
//
// // config import
// const { config } = require("../config/Config");
//
// // jwt and bcrypt
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
//
// // new user register function
// const registerUser = async function (req, res, next) {
//   // req's body
//   let userName = req.body["userName"];
//   let password = req.body["password"];
//   try {
//     // do user register function from service
//     let user = await userService.register(userName, password);
//
//     // generate payload with user's id
//     let payload = { id: user._id };
//
//     // generate token
//     const token = jwt.sign(payload, config.TOKEN_SECRET);
//
//     // send status and response
//     res.status(200).send({ token });
//   } catch (err) {
//     console.log(err);
//     res.status(400).send({ message: "User already existed" });
//   }
// };
//
// // user login
// const login = async function (req, res, next) {
//   //request to name and password
//   let userName = req.body["userName"];
//   let password = req.body["password"];
//   try {
//     // login process
//     let user = await userService.login(userName, password);
//
//     // create payload
//     let payload = { id: user._id };
//
//     // generate token
//     const token = jwt.sign(payload, config.TOKEN_SECRET);
//     res.status(200).send({ token });
//   } catch (err) {
//     console.log(err);
//     // invalid user
//     res.status(401).send({ message: "Invalid user" });
//   }
// };
//
// // get user by id
// const getUserById = async function (req, res, next) {
//   console.log("Req ", req.params);
//   let userId = req.params.userId;
//   let user = userService.getUserById(userId);
//   return res.status(200).json(user);
// };
//
// // module export
// module.exports = {
//   getUserById,
//   registerUser,
//   login,
// };

// User service import
let userService = require("./../service/userService");

// import jwt and bcrypt
let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");

// import config secret
let {config} = require("./../config/Config");

// user register controller
async function register(req, res, next) {

    let userName = req.body["userName"];
    let password = req.body["password"];

    try {
        let user = await userService.register(userName, password);
        let payload = {id: user._id};
        const token = jwt.sign(payload, config.TOKEN_SECRET);
        res.status(200).send({token});

    } catch (e) {
        console.log(e);
        res.status(401).send({message: "Invalid User"});
    }
}

// user login controller
async function login(req, res, next) {
    let userName = req.body["userName"];
    let password = req.body["password"];
    try {
        // find user
        let user = await userService.login(userName, password);

        // create payload
        let payload = {id: user._id};

        // create token
        let token = jwt.sign(payload, config.TOKEN_SECRET);

        // sent response
        res.status(200).send({token});


    } catch (e) {
        console.log(e);
        await res.status(401).send({message: "Invalid User"});
    }
}

//
// // user login
// const login = async function (req, res, next) {
//     //request to name and password
//     let userName = req.body["userName"];
//     let password = req.body["password"];
//     try {
//         // login process
//         let user = await userService.login(userName, password);
//
//         // create payload
//         let payload = {id: user._id};
//
//         // generate token
//         const token = jwt.sign(payload, config.TOKEN_SECRET);
//         res.status(200).send({token});
//     } catch (err) {
//         console.log(err);
//         // invalid user
//         res.status(401).send({message: "Invalid user"});
//     }
// };


// controller export
module.exports = {
    login,
    register
}