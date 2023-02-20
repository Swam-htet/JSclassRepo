const fs = require("fs");

fs.promises
  .readFile("./helloworld.txt")
  .then((data) => console.log(data.toString().length))
  .catch((err) => console.log(err.toString()));
