import React from "react";
import { useState } from "react";

export const FormComponent = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Sumbitted: ", {name, email})
    };

    return (
        <>
            <h1>User Form</h1>

            <form className="flex" onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                />
                <input
                type="email"
                placeholder="Email"
                onChange={(e)=>setEmail(e.target.value)}
                value={email}/>
                <button type="submit">Log in</button>
            </form>
        </>
    )
}