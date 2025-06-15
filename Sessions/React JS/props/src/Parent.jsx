import { useState } from "react";
import { CardChildComponent } from "./CardChildComponent";
import { AddFruitForm } from "./AddFruitForm";

const initialFruits = [
  {
    id: 1,
    name: 'Bananja',
    color: 'yellow',
    taste: 'sweet',
    image: 'https://www.cuisinelangelique.com/infotheque/wp-content/uploads/2023/03/banane-1a-1200x838.jpg'
  },
  {
    id: 2,
    name: 'Apple',
    color: 'Green',
    taste: 'sour',
    image: 'https://healthiersteps.com/wp-content/uploads/2021/12/green-apple-benefits.jpeg'
  },
  {
    id: 3,
    name: 'Strawberry',
    color: 'red',
    taste: 'sweet',
    image: 'https://weresmartworld.com/sites/default/files/styles/full_screen/public/2021-05/aardbeien-3.jpg?itok=VKyyMjjg'
  }
];

export const ParentComponent = () => {
  const [fruits, setFruits] = useState(initialFruits);
  const [editFruit, setEditFruit] = useState(true);


  const handleAddFruit = (fruitToAdd) => {
    setFruits(prev => [...prev, fruitToAdd])
  }

  const handleEditFruit = (updateFruit) => {
    setFruits(prev => prev.map(fruit => fruit.id === updateFruit.id ? updateFruit : fruit))

    setEditFruit(null)
  }

  const handleDeleteFruit = (idToDelete) => {
    setFruits(prev => prev.filter(fruit => fruit.id !== idToDelete))
  }

  return (
    <>
      <h1>Fruit Cards</h1>
      <AddFruitForm onAdd={handleAddFruit} />
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {fruits.map(fruit => (
          <CardChildComponent
            key={fruit.id}
            fruit={fruit}
            isEditing={editFruit}
            onEdit={() => setEditFruit(fruit.id)}
            onSave={handleEditFruit}
            onDelete={handleDeleteFruit}
          />
        ))}
      </div>
    </>
  );
};