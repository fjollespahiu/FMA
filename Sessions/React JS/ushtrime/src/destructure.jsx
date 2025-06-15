export default function FruitCard({ fruit }) {
    return (
        <div>
            <h1>{fruit.name}</h1>
            <p>{fruit.taste}</p>
        </div>
    );
}
