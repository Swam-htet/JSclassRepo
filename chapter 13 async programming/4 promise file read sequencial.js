const fs = require("fs");

fs.promises
  .readFile("./fileName.txt")
  .then((fileName) => fs.promises.readFile(fileName))
  .then((data) => data.toString())
  .then((output) => console.log(output))
  .catch((err) => console.log(err.toString()));
