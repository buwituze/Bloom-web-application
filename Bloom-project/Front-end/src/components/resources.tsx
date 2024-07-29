import React from "react";
import { Link } from "react-router-dom";
import "../styles/resources.css";
import FarmerNavbar from "../components/farmernav";
import FarmerFooter from "../components/farmerfooter";

function Resources() {
  return (
    <div>
      <FarmerNavbar />

      <section className="resources">
        <div className="intro">
          <img src="/Resourcesimage.jpg" alt="" />
        </div>
        <div className="facts">
          <div className="fact-card">
            <div className="cardheader">
              <img src="/game-icons_cash.png" alt="" />
              <h3>
                <span>$549.4 million</span>
              </h3>
            </div>
            <p>Is the annual export value of Rwanda's agricultural products.</p>
          </div>
          <div className="fact-card">
            <div className="cardheader">
              <img src="/bi_boxes.jpg" alt="" />
              <h3>
                Approximately
                <br /> <span>60%</span>
              </h3>
            </div>
            <p>
              Farmers reported increase in yields after using organic
              fertilizers.
            </p>
          </div>
          <div className="fact-card">
            <div className="cardheader">
              <img src="/icon-park-twotone_pesticide.png" alt="" />
              <h3>
                Around
                <br /> <span>40%</span>
              </h3>
            </div>
            <p>
              Farmers experienced better pest control with Integrated Pest
              Management (IPM).
            </p>
          </div>
        </div>
        <div className="searchresources">
          <input type="text" placeholder="Search Products" />
          <button type="submit">
            <i className="bx bx-search-alt-2"></i>
          </button>
        </div>
        <section id="healthtips">
          <div className="tip-card">
            <div className="tip-text">
              <h2>Integrated Pest Management</h2>
              <p>
                Explore the principles of Integrated Pest Management (IPM)
                tailored for Rwandan crops to effectively control pests while
                minimizing environmental impact. This article explains IPM
                strategies, including the use of local biological control
                agents, crop rotation practices, and natural predators, to
                maintain a healthy and productive farm ecosystem.
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
              <img src="/irrigationtechniques.webp" alt="" />
            </div>
            <div className="tip-text">
              <h2>Efficient Irrigation Techniques</h2>
              <p>
                Learn about efficient irrigation techniques suited for the
                diverse topography and climate of Rwanda. This resource provides
                insights into using drip irrigation, small-scale sprinklers, and
                rainwater harvesting systems, with practical advice on
                implementation and maintenance for smallholder farmers.
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

export default Resources;
