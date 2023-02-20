async function fetchUrls() {
  let urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/todos/3",
  ];

  let require = [];

  let promises = urls.map((url) => fetch(url));
  for await (const response of promises) {
    let data = await response.json();
    require.push(data);
  }
  console.log("This is final data >> ", require);
}
fetchUrls();
