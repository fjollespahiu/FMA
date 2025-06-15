
import { useState } from "react";

export const CardChildComponent = ({ fruit, isEditing, onSave, onDelete }) => {
  //editingfruit
  const [editFruit, setEditFruit] = useState(fruit)

  return (
    <div style={{
      backgroundColor: '#f9f9f9',
      padding: '16px',
      borderRadius: '12px',
      width: '250px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {isEditing ?
        <>
          <input
            name="name"
            defaultValue={fruit.name}
            onChange={(e) => setEditFruit(prev => ({ ...prev, name: e.target.value }))}
          />
          <input
            name="color"
            defaultValue={fruit.color}
            onChange={(e) => setEditFruit(prev => ({ ...prev, color: e.target.value }))}
          />
          <input
            name="taste"
            defaultValue={fruit.taste}
            onChange={(e) => setEditFruit(prev => ({ ...prev, taste: e.target.value }))}
          />
          <input
            name="image"
            defaultValue={fruit.image}
            onChange={(e) => setEditFruit(prev => ({ ...prev, image: e.target.value }))}
          />
          <button onClick={() => onSave(editFruit)}>Save</button>
        </>
        :
        //kodi per edit
        <>
          <img
            src={fruit.image}
            alt={fruit.name}
            style={{
              width: '100%',
              height: '150px',
              objectFit: 'contain',
              borderRadius: '8px',
              marginBottom: '12px'
            }}
          />
          <h3>{fruit.name}</h3>
          <p style={{ color: '#222' }}><strong>Color:</strong> {fruit.color}</p>
          <p style={{ color: '#222' }}><strong>Taste:</strong> {fruit.taste}</p>
          <div style={{ marginTop: '10px' }}>
            <button onClick={() => onDelete(fruit.id)}>Delete Fruit</button>
          </div>
        </>
      }
    </div>
  );
};