import { useState, useEffect } from "react";

function App2() {
    const [time, setTime] = useState(0);
    useEffect(() => {
        const interval = setInterval(
            () => {
                setTime(prev => prev + 1)
            }, 1000);

        return () => clearInterval(interval)
    }, []);

    const [color, setColor] = useState('');
    const showColor = (e) => { setColor(e.target.value) }

    const [hover, setHover] = useState(false);

    const [dark, setDark] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <h1>TIMER</h1>
            <h1>{time}</h1>
            <hr />

            <h1>COLOR</h1>
            <select onChange={showColor}>
                <option value="">Choose</option>
                <option value="Red">Red</option>
                <option value="Green">Green</option>
                <option value="Blue">Blue</option>
            </select>
            <p>{color}</p>
            <hr />

            <h1>HOVERED</h1>
            <div
                style={{ color: hover ? "red" : "black" }}
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}
            >
                Future Minds Academy!</div>
            <hr />

            <h1>Toggle-dark</h1>
            <div style={{ backgroundColor: dark ? "black" : "white", color: dark ? "white" : "black", height: "100vh" }}>
                <button onClick={() => setDark(!dark)}
                >Toggle Theme</button>
            </div>
            <hr />

            <h1>SHOW PASSWORD</h1>
            <input type={showPassword ? "text" : "password"} />
            <button onClick={() => setShowPassword(!showPassword)}>{showPassword ? "Hide" : "Show"}</button>
        </>
    )
}

export default App2