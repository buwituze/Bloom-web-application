import React from "react";
import { Link } from "react-router-dom";
import "../styles/news.css";
import FarmerNavbar from "./farmernav";
import FarmerFooter from "./farmerfooter";

function News() {
  return (
    <div>
      <FarmerNavbar />

      <section className="news">
        <div className="newsintro">
          <h2>
            Agricultural <br /> Updates
          </h2>
          <img src="/croppednewsbackground.jpg" alt="" />
        </div>

        <section id="healthtips">
          <div className="searchnews">
            <input type="text" placeholder="Search News" />
            <button type="submit">
              <i className="bx bx-search-alt-2"></i>
            </button>
          </div>

          <div className="tip-card">
            <div className="tip-text">
              <h2>Integrated Pest Management</h2>
              <p>
                The Ministry of Agriculture has introduced a Smart Irrigation
                Program to enhance water efficiency and boost crop yields in
                drought-prone areas.
              </p>
              <Link to="https://www.everydayhealth.com">
                <button>Learn More</button>
              </Link>
            </div>
            <div className="tip-image">
              <img src="/ipm.jpeg" alt="IPM" />
            </div>
          </div>
          <div className="tip-card">
            <div className="tip-image">
              <img src="/soil health.jpg" alt="" />
            </div>
            <div className="tip-text">
              <h2>Agricultural Expo 2024 Kicks Off in Kigali</h2>
              <p>
                The annual Agricultural Expo in Kigali showcases innovative
                farming techniques and products, attracting farmers and
                agricultural experts from across the region.
              </p>
              <Link to="https://www.everydayhealth.com">
                <button>Learn More</button>
              </Link>
            </div>
          </div>
        </section>
      </section>
      <FarmerFooter />
    </div>
  );
}

export default News;
