import { useState } from 'react';
import './App.css';

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
    <input type={show ? "text" : "password"}/>
    <button onClick={()=>setShow(!show)}>{ show ? "Hide" : "Show"}</button>
    </>
  )
}

export default App;
