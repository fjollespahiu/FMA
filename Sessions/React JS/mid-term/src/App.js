import React from "react";
import { useState } from "react";
import App2 from "./App2";

function App() {
  const [inputValue, setInputValue] = useState('');
  const handleOnChange = (e) => setInputValue(e.target.value)

  const [isVisible, setIsVisible] = useState(true);

  const [movies, setMovies] = useState([
    'Inception',
    'The Matrix',
    'Interstellar',
    'The Dark Knight',
    'Pulp Fiction']);

  const [i, setI] = useState(1);

  const [inputName, setInputName] = useState('');

  return (
    <div>
      <h1>INPUT</h1>
      <input type="text" placeholder="Enter text here" value={inputValue} onChange={handleOnChange} />
      <h1>{inputValue}</h1>

      <hr />

      <h1>TOGGLE</h1>
      {isVisible ? <h1> I am visible </h1> : <h1></h1>}
      <button onClick={() => setIsVisible(!isVisible)}> Toggle </button>
      <hr />

      <h1>Movie Array</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            Movie:{movie}
          </li>
        ))}
      </ul>

      <button onClick={() => {
        setI(prev => prev + 1);
        setMovies([...movies, i])
      }}>Add Movie</button>

      <hr />

      <h1>FORM</h1>
      <form action="" onSubmit={(e) => {
        e.preventDefault();
        console.log('Form submitted: ' + inputName);
      }}>
        <input type='text' placeholder='Enter name' value={inputName} onChange={(e) => setInputName(e.target.value)} />
        <button type='submit'>Submit</button>
      </form>

      <hr />
      <App2 />
    </div>
  );
}

export default App;
