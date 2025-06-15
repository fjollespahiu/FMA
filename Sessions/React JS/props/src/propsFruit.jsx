function FruitList() {
  const fruits = ['apple', 'banana', 'mango'];


  const filteredFruits = fruits.filter(fruit => fruit !== 'banana');
  console.log('Filtered Fruits:', filteredFruits);

  const newFruits = [...fruits, 'orange'];
  console.log('New Fruits:', newFruits);

  const apple = { name: 'apple', color: 'red' };
  const { name, color } = apple;
  console.log('Apple color:', color);

  const updatedApple = { ...apple, taste: 'sweet' };
  console.log('Updated Apple:', updatedApple);

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

export default FruitList;