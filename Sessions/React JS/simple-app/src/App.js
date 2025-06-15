import logo from './logo.svg';
import './App.css';


function App() {
  const fullName = "Fjolle Spahiu";
  const colors = ['Red', 'Green', 'Blue'];

  return (
    <div>
      <h1>Hello, {fullName}</h1>
      <ul className="ngjyrat">
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
}


export default App;
