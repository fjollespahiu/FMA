import React, { useState, useEffect } from 'react'

function Condition() {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 1000);

        return () => clearInterval(interval)

    }, [isRunning])

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => setIsRunning(true)}>Start</button>
            <button onClick={() => setIsRunning(false)}>Stop</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </>
    );
}

export default Condition;