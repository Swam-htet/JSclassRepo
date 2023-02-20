const fs = require("fs");

fs.promises
  .readFile("./fileName.xt")
  .then((data) => console.log("File Name >> ", data.toString()))
  .catch((err) => console.log("Error >> ", err.toString()));
