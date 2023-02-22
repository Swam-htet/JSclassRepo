runAsync = (fn) => {
  console.log("Before 2 s");
  setTimeout(() => {
    console.log("setTimeOut in 2 s");
    return fn(1000);
  }, 2000);
};

console.log("Before running");

runAsync(data => console.log("This is using call back >> ", data));
console.log("After running");
