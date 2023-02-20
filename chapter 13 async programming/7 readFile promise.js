const fs = require("fs");

fs.promises
  .readFile("./fileName.txt")
  .then((data) => fs.promises.readFile(data))
  .then((data) => console.log("Content >> ", data.toString()));
