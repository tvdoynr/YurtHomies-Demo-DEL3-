import React, { useState } from "react";

export const Login = (props) => {
    const [id, setID] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(id);
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="id">Student ID</label>
                <input value={id} onChange={(e) => setID(e.target.value)} placeholder="Student ID" id="id" name="id" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Your Password" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Enroll here.</button>
            <button className="link-btn-forgot-pwd" onClick={() => props.onFormSwitch('forgotpwd')}>Forgot password?</button>
        </div>
    )
}