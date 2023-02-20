// async always return promis
// normal function return promise
let run = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data return");
      resolve(1000);
    }, 2000);
  });
};

async function check() {
  console.log("This is async function ");
  let data = await run();
  console.log("output : ", data);
  return data;
}

check();
