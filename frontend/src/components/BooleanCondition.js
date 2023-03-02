let admin = (
  <div>
    <h1>Admin</h1>
    <p>This is admin</p>
  </div>
);

let user = (
  <div>
    <h1>User</h1>
    <p>This is user</p>
  </div>
);

// condition
let condition = false;

// conditional rendering
function Condition() {
  //   return(
  //     condition && admin
  //   );
  return condition || user;
}
export default Condition;
