import React from "react";
import { Link } from "react-router-dom";
import "../styles/farmerfooter.css";

function FarmerFooter() {
  return (
    <section className="footer-section">
      <div className="toppart">
        <h3>Bloom</h3>
      </div>
      <div className="bottompart">
        <div className="footerimage">
          <img src="/bloomlogo3-removebg-preview.png" alt="" />
        </div>

        <div className="pages">
          <h5>Pages</h5>
          <ul>
            <div>
              <li>Home</li>
              <li>About</li>
            </div>
            <div>
              <li>Services</li>
              <li>Contact Us</li>
            </div>
          </ul>
        </div>

        <div className="Support">
          <h5>Support</h5>
          <ul>
            <li>Contact: 0790100718</li>
            <li>Email: c.gakwaya@alustudent.com</li>
            <li>Location: Bumbogo, Kigali City, Rwanda</li>
          </ul>
        </div>

        <div className="learnmore">
          <h5>Learn More</h5>
          <ul>
            <li>
              <a href="">What is Bloom?</a>
            </li>
            <li>
              <a href="">Why adopt Bloom?</a>
            </li>
            <li>
              <a href="">How to use Bloom App?</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default FarmerFooter;
