const fs = require("fs");

// first read
fs.readFile("./fileName.txt", (error, fileName) => {
  // error
  if (error) {
    console.log("Error >> ", error.toString());
  } else {
    // data
    console.log("Reading File Name is ok.");

    // second read
    fs.readFile(fileName, (error, content) => {
      // second error
      if (error) {
        console.log("error >> ", error.toString());
      } else {
        // second data
        console.log("content >> ", content.toString());
      }
    });
  }
});
