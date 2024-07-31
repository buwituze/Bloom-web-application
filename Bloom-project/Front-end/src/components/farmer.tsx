import React from "react";
import { Link } from "react-router-dom";
import FarmerNavbar from "./farmernav";
import "../styles/farmer.css";

function Farmer() {
  const circularButtonStyle: React.CSSProperties = {
    backgroundColor: "green",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    color: "white",
    border: "none",
    fontSize: "20px",
  };
  const greyTextStyle: React.CSSProperties = {
    color: "grey",
  };
  return (
    <div>
      <FarmerNavbar />
      <header className="homesections">
        <div className="homelayers">
          <div className="homecontents">
            <h1>
              Hello<span>Farmer</span>
            </h1>
            <h1>
              Welcome To<span>Bloom</span>
            </h1>
            <p>Your go-to resource to advance your farming.</p>
            {/* <Link to="/login">
              <button className="button">Get Started</button>
            </Link> */}
          </div>
        </div>
      </header>
      <section className="aboutsections">
        <div className="abouts">
          <div
            className="homebannerimage"
            style={{ objectFit: "cover", width: "100%", height: "0%" }}
          >
            <img
              src="/farmer-barner.jpeg"
              alt=""
              style={{
                width: "100%",
                height: "55%",
                marginTop: "490px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>

      <section className="productcategories-sections">
        <h3>Product Categories</h3>
        <div className="product-categoriess">
          <div className="product-categoryy">
            <img
              src="fertilizers-removebg-preview.png"
              alt="Product 1"
              className="product-images"
            />
            <p>Fertilizers</p>
            <button className="button">Explore</button>
          </div>
          <div className="product-categoryy">
            <img
              src="packed_seeds-removebg-preview.png"
              alt="Product 2"
              className="product-images"
            />
            <p>Seeds</p>
            <button className="button">Explore</button>
          </div>
          <div className="product-categoryy">
            <img
              src="pesticides-removebg-preview.png"
              alt="Product 1"
              className="product-images"
            />
            <p>Pesticides</p>
            <button className="button">Explore</button>
          </div>

          <div className="product-categoryy">
            <img
              src="tillers-removebg-preview.png"
              alt="Product 1"
              className="product-images"
            />
            <p>Farming Tools</p>
            <button className="button">Explore</button>
          </div>

          <div className="product-categoryy">
            <img
              src="irrigation-removebg-preview.png"
              alt="Product 1"
              className="product-images"
            />
            <p>Irrigation Tools</p>
            <button className="button">Explore</button>
          </div>
          <div className="product-categoryy">
            <img
              src="soiltestkit-removebg-preview.png"
              alt="Product 1"
              className="product-images"
            />
            <p>Test Kit</p>
            <button className="button">Explore</button>
          </div>
          <div className="product-categoryy">
            <img
              src="farming_produce-removebg-preview.png"
              alt="Product 1"
              className="product-images"
            />
            <p>Farm Produce</p>
            <button className="button">Explore</button>
          </div>
        </div>
      </section>
      <section className="services-sections">
        <div className="feature-lists">
          <div className="feature-item22">
            <div className="feature-icon">
              <i className="fas fa-seedling"></i>
            </div>
            <h4 className="heading">Today's Tips</h4>
            <p className="paragraphs">
              Use Integrated Pest Management(IPM) to control pests effectively
              and sustainably.Incorporate local biological agents,crop rotation
              and naturalpradators to keep you farm healty and productive.
            </p>
            <div className="button">
              <button>Explore All</button>
            </div>
          </div>
          <div className="feature-item22">
            <div className="feature-icon">
              <i className="fas fa-seedling"></i>
            </div>
            <h4>
              <button style={circularButtonStyle}>B</button> Benitha Uwituze{" "}
              <span style={greyTextStyle}>Posted in My garden</span>
            </h4>
            <p>
              Struggling with pests? Check out our community forum for effective
              pest control techniques shared by ...
            </p>
          </div>
        </div>
      </section>
      <section className="previews">
        <div className="features">Product Recomendation</div>

        <div className="productpreviews">
          <div>
            <div className="texts">
              <h5> Apple Seedlings</h5>
              <p className="paragraphs">
                Discover our premium apple seeds, selected for their exceptional
                quality and high yield. These seeds are ideal for producing
                crisp, juicy apples in a variety of climates. Perfect for both
                seasoned farmers and new growers aiming for a fruitful harvest.
              </p>
              <p className="prices">5000 RWF</p>
            </div>
            <div className="buttons">
              <button>View All</button> <button>Add to Cart</button>
            </div>
          </div>
          <div className="images">
            <img src="/appleseeds.jpg" alt="" />
          </div>
        </div>
      </section>

      <section className="footer-sections">
        <div className="topparts">
          <h3>Bloom</h3>
        </div>
        <div className="bottomparts">
          <div className="footerimages">
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

          <div className="Supports">
            <h5>Support</h5>
            <ul>
              <li>Contact: 0790100718</li>
              <li>Email: c.gakwaya@alustudent.com</li>
              <li>Location: Bumbogo, Kigali City, Rwanda</li>
            </ul>
          </div>

          <div className="learnmores">
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

export default Farmer;
