import React from "react";
import { Link } from "react-router-dom";
import "../styles/farmerNavBar.css";

function FarmerNavbar() {
  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.querySelector(".nav-container nav");

    let isMenuOpen = false;

    if (menuToggle && mainNav) {
      menuToggle.addEventListener("click", function () {
        if (isMenuOpen) {
          mainNav.classList.remove("active");
          isMenuOpen = false;
        } else {
          mainNav.classList.add("active");
          isMenuOpen = true;
        }
      });
    }
  });

  return (
    <header className="header">
      <Link to="/farmerhome">
        <img src="/bloomlogo3-removebg-preview.png" alt="bloom" />
      </Link>
      <nav>
        <div>
          <ul>
            <li>
              <Link to="/LandingPage">Home</Link>
            </li>

            <div className="dropdown">
              <li>
                <Link to="/allproducts" className="dropbtn">
                  Products
                </Link>
              </li>
              <div className="dropdown-content">
                <p>
                  <Link to="/fertilizers">Fertilizers</Link>
                </p>
                <br />
                <p>
                  <Link to="/seeds">Seeds</Link>
                </p>
                <br />
                <p>
                  <Link to="/pesticides">Pesticides</Link>
                </p>
                <br />
                <p>
                  <Link to="/farmingtools">Farming Tools</Link>
                </p>
                <br />
                <p>
                  <Link to="/irrigationtools">Irrigation Tools</Link>
                </p>
                <br />
                <p>
                  <Link to="/testkits">Test Kits</Link>
                </p>
                <br />
                <p>
                  <Link to="/farmproduce">Farming Produce</Link>
                </p>
              </div>
            </div>

            <li>
              <Link to="/resources">Resources</Link>
            </li>

            <div className="dropdown">
              <li>
                <Link to="#" className="dropbtn">
                  Community
                </Link>
              </li>
              <div className="dropdown-content">
                <p>
                  <Link to="">Events</Link>
                </p>
                <br />
                <p>
                  <Link to="">Communities</Link>
                </p>
              </div>
            </div>

            <li>
              <Link to="/news">News</Link>
            </li>
          </ul>
        </div>
        <div className="icons">
          <div className="Profile">
            <Link to="/cart">
              <i className="bx bxs-cart"></i>
            </Link>
          </div>
          <div className="Profile">
            <Link to="/MarketPrices">
              <i className="bx bx-bell"></i>
            </Link>
          </div>
          <div className="Profile">
            <div className="profiledropdown">
              <Link to="" className="profiledropbtn">
                <i className="bx bx-user-circle"></i>
              </Link>

              <div className="profiledropdown-content">
                <p>
                  <Link to="/fertilizers">Profile</Link>
                </p>
                <br />
                <p>
                  <Link to="/seeds">Settings</Link>
                </p>
                <br />
                <p>
                  <Link to="/pesticides">Logout</Link>
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default FarmerNavbar;
