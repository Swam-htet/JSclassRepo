// let success = Promise.resolve("Success data").then(data => console.log(data), err => console.log(err));
// let fail = Promise.reject("Fail data").then(data => console.log(data), err => console.log(err));

div = (a, b) => {
  if (b == 0) {
    return Promise.reject(new Error("Input error"));
  } else {
    return Promise.resolve(a / b);
  }
};

console.log("Before div");
div(10, 0)
  .then((data) => console.log("Success data , ", data))
  .catch((error) => console.log("Input error"));

console.log("After div");
