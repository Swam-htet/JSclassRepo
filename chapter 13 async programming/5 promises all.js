const fs = require("fs");

let start = new Date();

let dataOne = fs.promises.readFile("./1 why call back.js");
let dataTwo = fs.promises.readFile("./4 promise file read.js");

Promise.all([dataOne, dataTwo]).then(() => {
  let end = new Date();

  let time = end - start;
  console.log("Amount of time >> ", time);
});
