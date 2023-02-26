var express = require("express");
var router = express.Router();

// import user controller
var users = require("./../controller/userController");

// original code
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/", users.registerUser);

// get by user id
router.get("/:userId", users.getUserById);

// create new user

// user login
router.post("/login", users.login);

module.exports = router;
