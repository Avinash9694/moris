import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import SideMenu from "./components/Sidemenu.js";
import AboutPage from "./components/AboutPage.js";
import ContactPage from "./components/ContactPage.js";
import SettingPage from "./components/SettingPage.js";
import HomePage from "./components/HomePage";
import "./App.scss";

const App = () => {
  return (
    <div>
      <Router>
        <div className="app">
          <div className="header">
            <Header />
          </div>
          <div className="content">
            <div>
              <SideMenu />
            </div>

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/settings" element={<SettingPage />} />
            </Routes>
          </div>
        </div>
        <div className="footer-div">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>

          <Link to="/about">About</Link>

          <Link to="/settings">Settings</Link>
        </div>
      </Router>
    </div>
  );
};

export default App;
