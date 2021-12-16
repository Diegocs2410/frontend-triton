import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/bootstrap.min.css";
import "./styles/index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./views/Signup";
import Navbar from "./components/Navbar";
import Login from "./views/Login";
import axios from "axios";
import { AuthProvider } from "./context/UserContext";
import Faena from "./views/Faena";
import FaenaSingle from "./views/FaenaSingle";

axios.defaults.baseURL = "http://localhost:4000/api";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="faena" element={<Faena />}></Route>
          <Route path="faena/:faenaId" element={<FaenaSingle />} />
        </Routes>
      </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
