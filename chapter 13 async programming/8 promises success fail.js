const fs = require("fs");

fs.promises.readFile("./helloword.txt").then(
  (data) => console.log(data.toString()),
  (err) => console.error(error.toString())
);
