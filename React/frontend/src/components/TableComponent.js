function Row({ item }) {
  return (
    <>
      <td>{item}</td>
    </>
  );
}

// main default component
export default function Table() {
  // list
  let items = ["one", "two", "three"];
  // JSX return
  return (
    // root JSX
    <div>
      <h2 className="text text-danger">Table Component</h2>
      <table className={"table table-striped"}>
        <tbody>
          {/* list rendering  */}
          {items.map((item, index) => {
            return (
              // setting key
              <tr key={index}>
                {/* Row component with propery item */}
                <Row item={item} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
