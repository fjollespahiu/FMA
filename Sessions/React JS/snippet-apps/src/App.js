import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const increment = () => count < 10 && setCount(count + 1);
  const decrement = () => count > 0 && setCount(count - 1);

  const [isVisible, setisVisible] = useState(true);
  const toggle = () => setisVisible(!isVisible);

  const [inputValue, setinputValue] = useState('');
  const hadleChange = (e) => setinputValue(e.target.value);

  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  const [items, setItems] = useState([]);
  const addItem = () => {
    const newItem = `Item ${items.length + 1}`;
    setItems((prevItems) => [...prevItems, newItem]);
  }

  const [isChecked, setIsChecked] = useState(false);
  const toggleCheckbox = () => setIsChecked(!isChecked);

  return (
    <>
      <h1>Counting</h1>
      <hr />
      <div className="wrapper">
        <button onClick={decrement}>-</button>
        <h2 id="results">{count}</h2>
        <button onClick={increment}>+</button>
      </div>

      <h1>Toggle</h1>
      <hr />
      <button onClick={toggle}>Click</button>
      {isVisible && <p>This is a Toggled Text.</p>}

      <h1>Input field</h1>
      <hr />
      <input type="text" value={inputValue} onChange={hadleChange} />
      <p>You typed: {inputValue}</p>

      <h1>Form Handling</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+383.44.133.122"
        />
        <button type="submit">Submit</button>
      </form>

      <h1>Array of Items</h1>
      <hr />
      <div>
        <button onClick={addItem}>Add Item</button>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <h1>Checkbox Toggle</h1>
      <hr />
      <div>
        <label>
          <input type="checkbox" checked={isChecked} onChange={toggleCheckbox} />
          Check me
        </label>
        <p>{isChecked ? 'Checked' : 'Unchecked'}</p>
      </div>
    </>
  );
}

export default App;
