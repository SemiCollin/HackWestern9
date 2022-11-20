import "./App.css";
import React from "react";
// import Home from "./pages/home/Home";
// import { Route, Routes } from "react-router-dom";

// import Login from "./components/Login";
// import HomePage from "./components/HomePage";
// import Navbar from "./components/Navbar";
// import Timeline from "./components/Timeline";
// import Explore from "./components/Explore";
// import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
// import Register from "./pages/register/Register";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Profile />
      {/* <header className="App-header">
        <h1>BeSuccessful</h1>

        <p>{!data ? "Loading..." : data}</p>
      </header> */}
    </div>
  );
}

export default App;
