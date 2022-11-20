import "./login.css";
import React, { useState } from "react";

export default function Login() {
  const [username , setUsername] = useState();
  const [password , setPassword] = useState();
  function updateUser(event) {
    setUsername(event.target.value);
  }
  function updatePass(event) {
    setPassword(event.target.value);
  }

  function saveUser() {
    const data = {username: username , password: password};
    console.log(data);
    fetch("/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:" , data);
      })
      .catch((error) => {
        console.error("Error:" , error)
      })
  }
  
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">BeSuccessful</h3>
          <span className="loginDesc">
            Document your success journey one image at a time!
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" onChange={updateUser}/>
            <input placeholder="Password" className="loginInput" onChange={updatePass}/>
            <button className="loginButton" onClick={saveUser}>Log In</button>

            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
