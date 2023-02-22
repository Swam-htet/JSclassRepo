const fs = require("fs");

let start = new Date();
const run = () => {
  fs.readFile("./helloworld.txt", (err, data) => {
    if (err) {
      console.log(err.toString());
    } else {
      console.log(data.toString());
      fs.readFile("./1 why call back.js", (err, data) => {
        if (err) {
          console.log(err.toString());
        } else {
          console.log(data.toString());
          let end = new Date();
          let time = end - start;
          console.log("Time ", time);
        }
      });
    }
  });
};

run();
