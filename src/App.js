import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import { ForgotPassword } from "./ForgotPassword";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="row">
      <div className="App">
        {
          currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : currentForm === "forgotpwd" ? <ForgotPassword onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
        }
      </div>
      <div className="sideImage"></div>
    </div>
  );
}

export default App;
