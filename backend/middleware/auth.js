// import jwt and bcrypt
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// config
const { config } = require("./../config/Config");

// verify moddleware function
const verifyUserToken = (req, res, next) => {
  // carry token req.header
  let token = req.headers.authorization;
  //console.log('Token ',token);

  if (!token)
    return res.status(401).send("Access Denied / Unauthorized request");

  try {
    // split the token string and second element
    token = token.split(" ")[1]; // Remove Bearer from string

    // no token condition
    if (token === "null" || !token)
      return res.status(401).send("Unauthorized request");

    // if token is present
    // check token
    // if token true >> return payload information
    let verifiedUser = jwt.verify(token, config.TOKEN_SECRET); // config.TOKEN_SECRET => 'secretKey'

    // if fail
    if (!verifiedUser) return res.status(401).send("Unauthorized request");

    // if pass req.user payload
    req.user = verifiedUser; // user_id

    // call next for another middleware
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send("Invalid Token");
  }
};

// module export
module.exports = {
  verifyUserToken,
};
