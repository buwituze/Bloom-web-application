import React from "react";
import { Link } from "react-router-dom";
import "../styles/allproducts.css";
import FarmerNavbar from "../components/farmernav";
import FarmerFooter from "../components/farmerfooter";
import ProductNav from "../components/verticalproductnav";

function Fertilizers() {
  return (
    <div>
      <FarmerNavbar />

      <div className="bannerimage">
        <h2>Products</h2>
        <img
          src="/360_F_729702813_9oFXIQ4ypYSJDb2H2lf1cPug4s9OwYdO.jpg"
          alt=""
        />
      </div>
      <div className="productspage">
        <ProductNav />
        <div className="all-products">
          <div className="search">
            <input type="text" placeholder="Search Products" />
            <button type="submit">
              <i className="bx bx-search-alt-2"></i>
            </button>
          </div>
          <h3>Fertilizers</h3>

          <div className="cardssection">
            <div className="singleproduct">
              <img
                src="/amidas_fertilizers-removebg-preview.png"
                alt="Product 1"
              />
              <div className="productdetails">
                <p className="singlename">Roundup Herbicide</p>
                <p className="singleprice">10,000FRW</p>
              </div>
              <div className="btn">
                <button>Learn More</button>

                <button>
                  <i className="bx bxs-cart"></i> Add to cart
                </button>
              </div>
            </div>
            <div className="singleproduct">
              <img
                src="/fertilizers-removebg-preview.png"
                alt="Product 2"
                width={"100px"}
                height={"50px"}
              />
              <div className="productdetails">
                <p className="singlename">Flower Seeds</p>
                <p className="singleprice">5000FRW</p>
              </div>
              <div className="btn">
                <button>Learn More</button>

                <button>
                  <i className="bx bxs-cart"></i> Add to cart
                </button>
              </div>
            </div>
            <div className="singleproduct">
              <img src="/tracel-removebg-preview.png" alt="Product 1" />
              <div className="productdetails">
                <p className="singlename">Roundup Herbicide</p>
                <p className="singleprice">10,000FRW</p>
              </div>
              <div className="btn">
                <button>Learn More</button>

                <button>
                  <i className="bx bxs-cart"></i> Add to cart
                </button>
              </div>
            </div>

            <div className="singleproduct">
              <img src="https://via.placeholder.com/150" alt="Product 1" />
              <div className="productdetails">
                <p className="singlename">Amidas Fertilizers</p>
                <p className="singleprice">30000FRW</p>
              </div>
              <div className="btn">
                <button>Learn More</button>

                <button>
                  <i className="bx bxs-cart"></i> Add to cart
                </button>
              </div>
            </div>
            <div className="singleproduct">
              <img src="https://via.placeholder.com/150" alt="Product 2" />
              <div className="productdetails">
                <p>Flower Seeds</p>
                <p>5000 FRW</p>
              </div>

              <div>
                <button>Learn More</button>
                <button>Add to cart</button>
              </div>
            </div>
            <div className="singleproduct">
              <img src="https://via.placeholder.com/150" alt="Product 3" />
              <div className="productdetails">
                <p>Amidas Fertilizers</p>
                <p>20,0000 FRW</p>
              </div>
              <div>
                <button>Learn More</button>
                <button>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FarmerFooter />
    </div>
  );
}

export default Fertilizers;
