async function runOne() {
  console.log("Run One is running");
  let data = await fetch("https://fakestoreapi.com/products/1");
  let json = await data.json();
  console.log("Final Data >> ", json);
}

async function runTwo() {
  console.log("Run Two is running");
  let data = await fetch("https://fakestoreapi.com/products/2");
  let json = await data.json();
  console.log("Final Data >> ", json);
}

runOne();
runTwo();
