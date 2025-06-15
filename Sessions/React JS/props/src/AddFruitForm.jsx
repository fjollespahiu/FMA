import { useState } from "react";

export const AddFruitForm = ({onAdd}) => {
    const [newFruit, setNewFruit] = useState({
        name: '',
        color: '',
        taste: '',
        image: ''
    })

    // form submitted
    const handleSubmit=()=>{
        //new object
        const fruitToAdd={
            id: Date.now(), 
            ...newFruit
        }
        //method to create new object
        //fruitToAdd is a new object to be passed as a parameter
        onAdd(fruitToAdd)
    }
    

    return (
        <div style={{ display: 'flex'}}>
            <input type="text"
                placeholder="Fruit name"
                value={newFruit.name}
                onChange={(e)=>setNewFruit({...newFruit.name, name:e.target.value})}
            />
            <input type="text"
                placeholder="Color"
                value={newFruit.color}
                onChange={(e)=>setNewFruit({...newFruit.color, color:e.target.value})}
            />
            <input type="text"
                placeholder="Taste"
                value={newFruit.taste}
                onChange={(e)=>setNewFruit({...newFruit.taste, taste:e.target.value})}
            />
            <input type="text"
                placeholder="Image"
                value={newFruit.image}
                onChange={(e)=>setNewFruit({...newFruit.image, image:e.target.value})}
            />
            <button onClick={handleSubmit}>Add new fruit</button>
        </div>

    )
}