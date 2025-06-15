export const FilterFruit = ({ fruits }) => {
    const sweetFruits = fruits.filter(fruit => fruit.taste === 'sweet');
    return (
        <>
            <h1>Filtered Fruit</h1>
            {sweetFruits.map(fruit => <p key={fruit.name}>{fruit.name}</p>)}
        </>
    );
};
