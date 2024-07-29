import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../styles/LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />
      <header className="hero-section">
        <div className="hero-layer">
          <div className="hero-content">
            <h1>
              Welcome to <span>Bloom</span>
            </h1>
            <p>
              Your go-to resource for farming in Rwanda. Discover expert
              insights, shop top-quality seeds, and connect with a vibrant
              farming community—all in one place.
            </p>
            <Link to="/login">
              <button className="button">Get Started</button>
            </Link>
          </div>
        </div>
      </header>
      <section className="about-section">
        <h3>About</h3>
        <div className="about">
          <div>
            <p>
              At Bloom, we’re dedicated to revolutionizing farming in Rwanda.
              Our platform offers expert guidance, a marketplace for quality
              agricultural products, and a supportive community for farmers.
              Empower your farming journey with us and thrive in your
              agricultural endeavors.
            </p>
          </div>

          <div className="aboutimage">
            <img src="/about.png" alt="" />
          </div>
        </div>
      </section>

      <section className="productcategories-section">
        <h3>Product Categories</h3>
        <div className="product-categories">
          <div className="product-category">
            <img
              src="/fertilizers-removebg-preview.png"
              alt="Product 1"
              className="product-image"
            />
            <p>Fertilizers</p>
          </div>
          <div className="product-category">
            <img
              src="/packed_seeds-removebg-preview.png"
              alt="Product 2"
              className="product-image"
            />
            <p>Seeds</p>
          </div>
          <div className="product-category">
            <img
              src="/plantbooster-removebg-preview.png"
              alt="Product 1"
              className="product-image"
            />
            <p>Pesticides</p>
          </div>

          <div className="product-category">
            <img
              src="/tillers-removebg-preview.png"
              alt="Product 1"
              className="product-image"
            />
            <p>Farming Tools</p>
          </div>

          <div className="product-category">
            <img
              src="/irrigation-removebg-preview.png"
              alt="Product 1"
              className="product-image"
            />
            <p>Irrigation Tools</p>
          </div>

          <div className="product-category">
            <img
              src="/soiltestkit-removebg-preview.png"
              alt="Product 1"
              className="product-image"
            />
            <p>Test Kits</p>
          </div>

          <div className="product-category">
            <img
              src="/trayofeggs.webp"
              alt="Product 1"
              className="product-image"
            />
            <p>Farm Produce</p>
          </div>
        </div>
      </section>
      <section className="services-section">
        <h3>Services</h3>
        <div className="feature-list">
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-seedling"></i>
            </div>
            <h4>E-commerce</h4>
            <p>
              Easily shop for high-quality seeds, fertilizers, and farming tools
              through our integrated marketplace.
            </p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-seedling"></i>
            </div>
            <h4>Expert Advice</h4>
            <p>
              Gain access to valuable insights and best practices from
              agricultural l experts tailored to your needs.
            </p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-seedling"></i>
            </div>
            <h4>Community Forum</h4>
            <p>
              Join our vibrant community to connect, share knowledge, and seek
              support from fellow farmers.
            </p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-seedling"></i>
            </div>
            <h4>Localized Information</h4>
            <p>
              Receive personalized recommendations and updates based on your
              region’s climate and soil conditions.
            </p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-seedling"></i>
            </div>
            <h4>News Feed</h4>
            <p>
              Follow the latest agricultural news and trends to stay ahead in
              your farming journey.
            </p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-seedling"></i>
            </div>
            <h4>Event Calendar</h4>
            <p>
              Stay informed about local agricultural events, training sessions,
              and opportunities through our calendar.
            </p>
          </div>
        </div>
      </section>
      <section className="preview">
        <h4>Product Preview</h4>

        <div className="productpreview">
          <div className="image">
            <img src="/appleseeds.jpg" alt="" />
          </div>

          <div>
            <div className="text">
              <h5> Apple Seedlings</h5>
              <p>
                Discover our premium apple seeds, selected for their exceptional
                quality and high yield. These seeds are ideal for producing
                crisp, juicy apples in a variety of climates. Perfect for both
                seasoned farmers and new growers aiming for a fruitful harvest.
              </p>
              <p className="price">5000 RWF</p>
            </div>
            <div className="button">
              <button>View All</button> <button>Add to Cart</button>
            </div>
          </div>
        </div>
      </section>

      <section className="contact">
        <h3>Contact Us</h3>

        <form>
          <h4>Get in touch</h4>
          <label htmlFor="">Name</label> <br />
          <input type="text" placeholder="Name" /> <br /> <br />
          <label htmlFor="">Email</label> <br />
          <input type="email" placeholder="Email" /> <br /> <br />
          <label htmlFor="">Subject</label> <br />
          <input type="text" placeholder="Subject" /> <br /> <br />
          <label htmlFor="">Message</label> <br />
          <textarea placeholder="Message"></textarea> <br /> <br />
          <button type="submit">Submit</button>
        </form>
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
    </div>
  );
}

export default LandingPage;
