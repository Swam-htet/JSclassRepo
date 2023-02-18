const fs = require("fs"); // The "fs" module has filesystem-related APIs
let options = {
  // An object to hold options for our program
  // default options would go here
};
// Read a configuration file, then call the callback function
fs.readFile("/.git/packed-refs", "utf-8", (err, text) => {
  if (err) {
    // If there was an error, display a warning, but continue
    console.warn("Could not read config file:", err.toString());
  } else {
    // Otherwise, parse the file contents and assign to the options object
    console.log("text >> " , text.toString());
  }
  // In either case, we can now start running the program
});
