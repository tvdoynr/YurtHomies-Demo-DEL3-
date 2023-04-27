import React, { useState } from "react";

export const Register = (props) => {
    const [name, setName] = useState('');
    const [id, setID] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(id);
    }

    return (
        <div className="auth-form-container">
            <h2>Enroll</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />
                <label htmlFor="id">Student ID</label>
                <input value={id} onChange={(e) => setID(e.target.value)} placeholder="Student ID" id="id" name="id" />
                <button className="submits" type="submit">Request to Enroll</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already enrolled? Sign in now.</button>
        </div>
    )
}