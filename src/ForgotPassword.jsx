import React, { useState } from "react";

export const ForgotPassword = (props) => {
    const [id, setID] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(id);
    }
    return (
        <div className="auth-form-container">
            <h2>Forgot Password</h2>
            <form className="forgotpwd-form" onSubmit={handleSubmit}>
                <label htmlFor="id">Student ID</label>
                <input value={id} onChange={(e) => setID(e.target.value)} placeholder="Student ID" id="id" name="id" />
                <button type="submit" onClick={email}>Continue</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Return to Login</button>
            <h3 id="e-mail" hidden= {true}>If there is an e-mail matching with provided Student-ID, we sent an e-mail about resetting your password.</h3>
        </div>
    )
    function email(){
        document.getElementById("e-mail").hidden = false;
    }
}
