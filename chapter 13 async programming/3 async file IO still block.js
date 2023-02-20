const fs = require("fs");

let start = new Date();

fs.readFile("./helloworld.txt", (err, data) => {
  err ? console.log(err.toString()) : console.log(data.toString());
});

fs.readFile("./1 why call back.js", (err, data) => {
  err ? console.log(err.toString()) : console.log(data.toString());
});

let end = new Date();
let time = end - start;
console.log("Time ", time);
