import React from "react";
import { Link } from "react-router-dom";
import "../styles/verticalproductnav.css";

function ProductNav() {
  return (
    <div>
      <nav>
        <div className="navbar">
          <div className="navlogo">
            <img src="./bloomlogo3-removebg-preview.png" alt="" />
          </div>
          <ul className="nav">
            <li>
              <Link to="/bookingpdts">Booking</Link>
            </li>
            <li>
              <Link to="/fertilizers">Fertilizers</Link>
            </li>

            <li>
              <Link to="/seeds">Seeds</Link>
            </li>
            <li>
              <Link to="/pesticides">Pesticides</Link>
            </li>
            <li>
              <Link to="/farmingtools">Farming Tools</Link>
            </li>
            <li>
              <Link to="/irrigationtools">Irrigation Tools</Link>
            </li>

            <li>
              <Link to="/testkits">Test Kits</Link>
            </li>
            <li>
              <Link to="/farmproduce">Farm Produce</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default ProductNav;
