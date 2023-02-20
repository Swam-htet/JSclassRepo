const fs = require("fs");
let start = new Date();

try {
  console.log("Start");

  // run first sync file read
  const data = fs.readFileSync("./helloworld.txt", "utf8");
  //console.log(data);

  // run second file read
  const data2 = fs.readFileSync("./helloworld.txt", "utf8");

  // do others
  let end = new Date();
  let time = end - start;
  console.log("Time ", time);
} catch (err) {
  console.error(err);
}
