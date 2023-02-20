// async always return promise
async function returnPromise() {
  console.log("Return promise function ");
  return 2000;
}

// normal function return promise
let run = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data return");
      resolve(1000);
    }, 2000);
  });
};
// console.log("This is result >> ", returnPromise());
run();
