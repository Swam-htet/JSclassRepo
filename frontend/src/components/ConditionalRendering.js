// condition
let condition = true;

// JSX as variable
let profile = (
  <div>
    <h1>Profile</h1>
    <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  </div>
);

// profile function component
function Profile() {
  // reutrn the JSX variable
  return profile;
}

// login functional component
function Login() {
  return (
    <div>
      <h1>Login Here</h1>
      <p>This is login page</p>
    </div>
  );
}

// helloworld function component
function ConditionalRendering() {
  return condition ? <Profile /> : <Login />;
}

export default ConditionalRendering;
