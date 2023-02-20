const fs = require("fs");

console.log("Before file read");
fs.readFile("./helloworld.txt", "utf-8", (err, text) => {
  if (err) {
    console.warn("Could not read config file:", err.toString());
  } else {
    console.log("text >> ", text.toString());
  }
});

console.log("After file read");
