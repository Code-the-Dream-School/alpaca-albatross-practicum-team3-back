import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./App";
import './index.css';
import './pages/Home/home.css';
import './pages/Home/favoritespage.css';
import './pages/Home/login.css';
import './pages/Home/registration.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
