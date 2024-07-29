import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <header className="header">
      <Link to="/">
        <img src="/bloomlogo3-removebg-preview.png" alt="bloom" />
      </Link>
      <nav>
        <div>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <Link to="/login">
            <button>Signin</button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
