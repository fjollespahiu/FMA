import { useState } from "react";

// Parent component
function Parent() {
  const data = "Hello from parent";
  const [name, setName] = useState("Fjolla");

  return (
    <Child message={data} username={name} />
  );
}

// Child component
function Child({ message, username }) {
  return (
    <>
      <div>{message}</div>
      <div>{username}</div>
    </>
  );
}

export default Parent;
