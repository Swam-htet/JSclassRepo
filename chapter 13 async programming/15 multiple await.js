async function run() {
  console.log("Rur is running");

  let dataOne = await fetch("https://fakestoreapi.com/products/1");
  console.log("After running one");

  let dataTwo = await fetch("https://fakestoreapi.com/products/2");
  console.log("After running two");

  let jsonOne = await dataOne.json();
  let jsonTwo = await dataTwo.json();

  console.log("Final DataOne >> ", jsonOne);
  console.log("Final DataTwo >> ", jsonTwo);
}

run();
