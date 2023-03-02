// list
let people = [
  {
    id: 1,
    name: "Swam Htet",
    age: 32,
  },
  {
    id: 2,
    name: "Hla Hla",
    age: 21,
  },
  {
    id: 3,
    name: "Mya Mya",
    age: 20,
  },
];

// refactoring the parameter function for map
function PersonList(para) {
  // click handler and event binding
  let clickHandle = () => {
    console.log(para);
  };

  return (
    <li key={para.id}>
      <p>
        Person Name : {para.name}
        Person age : {para.age}
      </p>
      <button className={"btn btn-outline-warning"} onClick={clickHandle}>
        CLick Me
      </button>
    </li>
  );
}

// list demo
export default function ListDemo() {
  return (
    <div>
      <h1>Person List</h1>
      <ul>{people.map((p) => PersonList(p))}</ul>
    </div>
  );
}
