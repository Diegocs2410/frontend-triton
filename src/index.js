import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/bootstrap.min.css";
import "./styles/index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./views/Signup";
import Navbar from "./components/Navbar";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
