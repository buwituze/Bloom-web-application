import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import "../styles/allproducts.css";
import FarmerNavbar from "../components/farmernav";
import FarmerFooter from "../components/farmerfooter";
import ProductNav from "../components/verticalproductnav";
import { toast } from "react-toastify";

interface Product {
  id: number;
  name: string;
  suppliername: string;
  price: number; // Ensure this is a number
  image: string;
}

const AllProducts: React.FC = () => {
  const { addToCart } = useContext(CartContext)!;

  // Define your products array with all necessary details
  const products: Product[] = [
    {
      id: 1,
      name: "Roundup Herbicide",
      suppliername: "Roundup",
      price: 10000,
      image: "/roundup-removebg-preview.png",
    },
    {
      id: 2,
      name: "Flower Seeds",
      suppliername: "Roundup",
      price: 5000,
      image: "/flowerseeds-removebg-preview.png",
    },
    {
      id: 3,
      name: "Amidas Fertilizers",
      suppliername: "Amidas",
      price: 30000,
      image: "/amidas_fertilizers-removebg-preview.png",
    },
    // Add more products as needed
  ];

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

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
          <h3>Available products</h3>

          <div className="cardssection">
            {products.map((product) => (
              <div className="singleproduct" key={product.id}>
                <img src={product.image} alt={product.name} />
                <div className="productinfo">
                  <div className="productdetails">
                    <p className="singlename">{product.name}</p>
                    <div className="supplierdetails">
                      <p className="singlesuppliername">
                        {product.suppliername}
                      </p>
                      <p className="singleprice">{product.price} FRW</p>
                    </div>
                  </div>
                  <div className="btn">
                    <button>Learn More</button>
                    <button onClick={() => handleAddToCart(product)}>
                      <i className="bx bxs-cart"></i> Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FarmerFooter />
    </div>
  );
};

export default AllProducts;
