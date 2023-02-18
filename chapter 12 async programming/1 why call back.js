function getData(fn) {
  setTimeout(() => {
    // console.log("Get data is completed");
    return fn("Data");
  }, 1000);
}

let data = getData(console.log);
console.log("Before get data");
console.log("This is data ", data);
console.log("After get data");
