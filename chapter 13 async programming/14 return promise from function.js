let run = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data return");
      resolve(1000);
    }, 2000);
  });
};

console.log("Before run");
run()
  .then((data) =>
    console.log("Return promise data from run function >> ", data)
  )
  .catch((error) => console.log(error));

console.log("After run");
