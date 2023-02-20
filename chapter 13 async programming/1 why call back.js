function getData(fn) {
  setTimeout(() => {
    console.log("Get data is completed");
    // return fn("Data");
    return fn(100);
  }, 1000);
}

console.log("Before get data");
getData((x) => console.log(x));
console.log("After get data");
