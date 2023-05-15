import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginNav from "./Components/Login/LoginNav";
import Login from "./Components/Login/Login";
import Signup from "./Components/Login/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginNav />} />
        <Route path="/login" element={<><LoginNav /><Login /></>} />
        <Route path="/signup" element={<><LoginNav /><Signup /></>} />
      </Routes>
    </Router>
  );
}

export default App;
