import React, { useState } from "react";

export const Login = (props) => {
    const [id, setID] = useState('');
    const [pass, setPass] = useState('');
    const [rememberMe, setRememberMe] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(id);
    }

    return (
        <div>
            <div className="huTitle">
                <img src="https://upload.wikimedia.org/wikipedia/tr/thumb/2/28/Hacettepe_%C3%9Cniversitesi_Logosu.svg/1200px-Hacettepe_%C3%9Cniversitesi_Logosu.svg.png" alt="logo" className="logo" />
                <h1>CIES</h1>
            </div>
            <div className="auth-form-container">
                <h3>Welcome back to CIES</h3>
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="id">Student ID</label>
                    <input value={id} onChange={(e) => setID(e.target.value)} placeholder="Student ID" id="id" name="id" />
                    <label htmlFor="password">Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Your Password" id="password" name="password" />
                    <div>
                        <input value={rememberMe} onChange={(e) => setRememberMe(!rememberMe)} type="checkbox" id="rememberMe" name="rememberMe" />
                        <label id="rememberMe" htmlFor="rememberMe"> Remember me </label>
                        <button className="link-btn-forgot-pwd" onClick={() => props.onFormSwitch('forgotpwd')}>Forgot password?</button>
                    </div>
                    <button className="submits" type="submit">Log In</button>
                </form>
                <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Enroll here.</button>
            </div>
        </div>
    )
}