import React from "react"
import { useState } from "react";

export const CounterComponent = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(prevCount => prevCount < 10 && prevCount + 1)
        // setCount(count+1)
    }
    const handleDecrement = () => setCount(prevCount => prevCount > 0 && prevCount - 1)

    return (
        <>
            <h1>Counter Example</h1>

            <div className="flex">
                <button onClick={handleIncrement}>Increment</button>
                <p>{count}</p>
                <button onClick={handleDecrement}>Decrement</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </>
    )
}


