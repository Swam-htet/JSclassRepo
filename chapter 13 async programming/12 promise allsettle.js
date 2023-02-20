let urls = [
  "https://fakestoreapi.com/products/1",
  "https://fakestoreapi.com/product1",
];
let promises = urls.map(
  (url) => fetch(url).then((response) => response.json())
  // blocking
  // .then((data) => console.log(data))
);

// non blocking
let output = Promise.allSettled(promises)
  .then((data) => console.log(data))
  .catch((error) => console.log("Catching error >> ", error.toString()));
