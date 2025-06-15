import { useState } from 'react';
import { UserList } from './userList';
import { FilterFruit } from './Fruit';
import FruitCard from './destructure';
import setUsers from './spreadOperator';

function App() {

  const users = ['Ana', ' Blerina', 'Driton']

  const fruits = [
    { name: 'Apple', taste: 'sour' },
    { name: 'Banana', taste: 'sweet' },
    { name: 'Strawberry', taste: 'sweet' }
  ];

  const sweetFruits = fruits.filter((fruit) => fruit.taste === 'sweet');

  const [user, setUsers] = useState(['Ermira', 'Arta'])

  return (
    <>
      <UserList names={users} />
      <FilterFruit fruits={fruits} />
      <FruitCard fruit={fruits[0]} />
    </>
  );
}

export default App;
