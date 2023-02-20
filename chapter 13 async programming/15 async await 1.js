async function run() {
  console.log("Rur is running");
  let data = await fetch("https://fakestoreapi.com/products");
  let json = await data.json();
  console.log("Final Data >> ", json);
}

run();
