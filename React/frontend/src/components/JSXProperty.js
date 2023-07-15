export function Sample({ data }) {
  console.log("Data ", data);
  function run() {
    console.log("data");
  }
  return (
    <div>
      <h3>Data</h3>
      <span>Code : {data.code.toUpperCase()}</span>
      <span> | Importand : {data.important}</span>
      <button className={`btn btn-outline-danger`} onClick={run}>
        Click Me
      </button>
    </div>
  );
}

export default function JSXPropery() {
  let information = {
    code: "This is code",
    important: "Yes",
  };
  return (
    <div>
      <Sample data={information} />
    </div>
  );
}
