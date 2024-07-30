import React from "react";
import { Link } from "react-router-dom";
import FarmerNavbar from "./farmernav";
import "../styles/farmer.css";
import "../styles/LandingPage.css";

function AllProducts() {
    const circularButtonStyle: React.CSSProperties = {
        backgroundColor: 'green',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        color: 'white',
        border: 'none',
        fontSize: '20px',
      };
      const greyTextStyle: React.CSSProperties = {
        color: 'grey',
      };
  return (
    <div className="landing-page">
      <FarmerNavbar />
      <header className="hero-section">
        <div className="hero-layer">
          <div className="hero-content">
          <h1>
              Hello<span>Farmer</span>
              </h1>
            <h1>
              Welcome To<span>Bloom</span>
            </h1>
            <p>
              Your go-to resource for farming in Rwanda.
            </p>
            <Link to="/login">
              <button className="button">Get Started</button>
            </Link>
          </div>
        </div>
      </header>
      <section className="about-section">
      <div className="about">
  <div className="bannerimage" style={{ objectFit: "cover", width: "100%", height: "0%" }}>
    <img src="/farmer-barner.jpeg" alt="" style={{ width: "100%", height: "75%", marginTop: "690px", objectFit: "cover" }} />
  </div>
</div>

      </section>

      <section className="productcategories-section">
        <h3>Product Categories</h3>
        <div className="product-categories">
          <div className="product-category">
            <img
              src="fertilizers-removebg-preview.png"
              alt="Product 1"
              className="product-image"
            />
                <p>Fertilizers</p>
               <button className="button" >Explore</button>
          </div>
          <div className="product-category">
            <img
              src="packed_seeds-removebg-preview.png"
              alt="Product 2"
              className="product-image"
            />
            <p>Seeds</p>
            <button className="button" >Explore</button>
          </div>
          <div className="product-category">
            <img
              src="pesticides-removebg-preview.png"
              alt="Product 1"
              className="product-image"
            />
            <p>Pesticides</p>
            <button className="button" >Explore</button>
          </div>

          <div className="product-category">
            <img
              src="tillers-removebg-preview.png"
              alt="Product 1"
              className="product-image"
            />
            <p>Farming Tools</p>
            <button className="button" >Explore</button>
          </div>

          <div className="product-category">
            <img
              src="irrigation-removebg-preview.png"
              alt="Product 1"
              className="product-image"
            />
            <p>Irrigation Tools</p>
            <button className="button" >Explore</button>
          </div>
          <div className="product-category">
            <img
              src="soiltestkit-removebg-preview.png"
              alt="Product 1"
              className="product-image"
            />
            <p>Test Kit</p>
            <button className="button" >Explore</button>
          </div>
          <div className="product-category">
            <img
              src="farming_produce-removebg-preview.png"
              alt="Product 1"
              className="product-image"
            />
            <p>Farm Produce</p>
            <button className="button" >Explore</button>
          </div>
        </div>
      </section>
      <section className="services-section">
        <div className="feature-list">

          <div className="feature-item2">
            <div className="feature-icon">
              <i className="fas fa-seedling"></i>
            </div>
            <h4 className="headings">Today's Tips</h4>
            <p className="paragraphs" >Use Integrated Pest Management(IPM) to control pests effectively and sustainably.Incorporate local biological agents,crop rotation and naturalpradators to keep you farm healty and productive.</p>
            <div className="button">
              <button>Explore All</button> 
            </div>
          </div>
          <div className="feature-item2">
            <div className="feature-icon">
              <i className="fas fa-seedling"></i>
            </div>
            <h4>
              <button style={circularButtonStyle}>B</button> Benitha Uwituze <span style={greyTextStyle}>Posted in My garden</span>
            </h4>
            <p>
             Struggling with pests? Check out our community forum for effective pest control techniques shared by ...
            </p>
          </div>
          </div>
          </section>
      <section className="preview">
        <div className="feature" >Product Recomendation</div>

        <div className="productpreview">
          <div>
            <div className="text">
              <h5> Apple Seedlings</h5>
              <p className="paragraphs">
                Discover our premium apple seeds, selected for their exceptional
                quality and high yield. These seeds are ideal for producing
                crisp, juicy apples in a variety of climates. Perfect for both
                seasoned farmers and new growers aiming for a fruitful harvest.
              </p>
              <p className="price">5000 RWF</p>
            </div>
            <div className="buttons">
              <button>View All</button> <button>Add to Cart</button>
            </div>
            
          </div>
          <div className="image">
            <img src="/appleseeds.jpg" alt="" />
          </div>
        </div>
      </section>

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
                <li>Products</li>
              </div>
              <div>
                <li>Resources</li>
                <li>Community</li>
                <li>Events</li>
                <li>News</li>
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
    </div>
  );
}

export default AllProducts;
