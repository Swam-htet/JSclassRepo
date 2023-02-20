let urls = [
  "https://fakestoreapi.com/products/1",
  "https://fakestoreapi.com/products/2",
];
let promises = urls.map((url) =>
  fetch(url)
    .then((response) => response.json())
    // blocking 
    // .then((data) => console.log(data))
);

// non blocking 
let output = Promise.all(promises).then((data) => console.log(data));
