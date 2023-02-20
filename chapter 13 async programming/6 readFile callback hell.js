const fs = require("fs");
fs.readFile("./fileName.txt", (error, fileName) => {
  if (error) {
    console.log("Error >> ", error.toString());
  } else {
    console.log("Reading File Name is ok.");
    fs.readFile(fileName, (error, content) => {
      if (error) {
        console.log("error >> ", error.toString());
      } else {
        console.log("content >> ", content.toString());
      }
    });
  }
});
