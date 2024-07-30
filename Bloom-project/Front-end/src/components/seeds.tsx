// import React from "react";
// import { Link } from "react-router-dom";
// import "../styles/allproducts.css";
// import FarmerNavbar from "../components/farmernav";
// import FarmerFooter from "../components/farmerfooter";
// import ProductNav from "../components/verticalproductnav";

// function Seeds() {
//   return (
//     <div>
//       <FarmerNavbar />

//       <div className="bannerimage">
//         <h2>Products</h2>
//         <img
//           src="/360_F_729702813_9oFXIQ4ypYSJDb2H2lf1cPug4s9OwYdO.jpg"
//           alt=""
//         />
//       </div>
//       <div className="productspage">
//         <ProductNav />
//         <div className="all-products">
//           <div className="search">
//             <input type="text" placeholder="Search Products" />
//             <button type="submit">
//               <i className="bx bx-search-alt-2"></i>
//             </button>
//           </div>
//           <h3>Seeds</h3>

//           <div className="cardssection">
//             <div className="singleproduct">
//               <img src="/packed_seeds-removebg-preview.png" alt="Product 1" />
//               <div className="productdetails">
//                 <p className="singlename">Roundup Herbicide</p>
//                 <p className="singleprice">10,000FRW</p>
//               </div>
//               <div className="btn">
//                 <button>Learn More</button>

//                 <button>
//                   <i className="bx bxs-cart"></i> Add to cart
//                 </button>
//               </div>
//             </div>
//             <div className="singleproduct">
//               <img
//                 src="/flowerseeds-removebg-preview.png"
//                 alt="Product 2"
//                 width={"100px"}
//                 height={"50px"}
//               />
//               <div className="productdetails">
//                 <p className="singlename">Flower Seeds</p>
//                 <p className="singleprice">5000FRW</p>
//               </div>
//               <div className="btn">
//                 <button>Learn More</button>

//                 <button>
//                   <i className="bx bxs-cart"></i> Add to cart
//                 </button>
//               </div>
//             </div>
//             <div className="singleproduct">
//               <img src="/appleseeds.jpg" alt="Product 1" />
//               <div className="productdetails">
//                 <p className="singlename">Roundup Herbicide</p>
//                 <p className="singleprice">10,000FRW</p>
//               </div>
//               <div className="btn">
//                 <button>Learn More</button>

//                 <button>
//                   <i className="bx bxs-cart"></i> Add to cart
//                 </button>
//               </div>
//             </div>

//             <div className="singleproduct">
//               <img src="https://via.placeholder.com/150" alt="Product 1" />
//               <div className="productdetails">
//                 <p className="singlename">Amidas Fertilizers</p>
//                 <p className="singleprice">30000FRW</p>
//               </div>
//               <div className="btn">
//                 <button>Learn More</button>

//                 <button>
//                   <i className="bx bxs-cart"></i> Add to cart
//                 </button>
//               </div>
//             </div>
//             <div className="singleproduct">
//               <img src="https://via.placeholder.com/150" alt="Product 2" />
//               <div className="productdetails">
//                 <p>Flower Seeds</p>
//                 <p>5000 FRW</p>
//               </div>

//               <div>
//                 <button>Learn More</button>
//                 <button>Add to cart</button>
//               </div>
//             </div>
//             <div className="singleproduct">
//               <img src="https://via.placeholder.com/150" alt="Product 3" />
//               <div className="productdetails">
//                 <p>Amidas Fertilizers</p>
//                 <p>20,0000 FRW</p>
//               </div>
//               <div>
//                 <button>Learn More</button>
//                 <button>Add to cart</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <FarmerFooter />
//     </div>
//   );
// }

// export default Seeds;

import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../Context/CartContext";
import { toast } from "react-toastify";
import FarmerNavbar from "../components/farmernav";
import FarmerFooter from "../components/farmerfooter";
import ProductNav from "../components/verticalproductnav";
import "../styles/allproducts.css";

interface Product {
  id: number;
  name: string;
  seller: string;
  price: number;
  image: string;
  category: string;
}

const Seeds: React.FC = () => {
  const { addToCart } = useContext(CartContext)!;
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const savedListings = localStorage.getItem("listings");
    if (savedListings) {
      setProducts(
        JSON.parse(savedListings).filter(
          (product: Product) => product.category === "seeds"
        )
      );
    }
  }, []);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            <input
              type="text"
              placeholder="Search Products"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">
              <i className="bx bx-search-alt-2"></i>
            </button>
          </div>
          <h3>Seeds</h3>
          <div className="cardssection">
            {filteredProducts.map((product) => (
              <div className="singleproduct" key={product.id}>
                {product.image && (
                  <img src={product.image} alt={product.name} />
                )}
                <div className="productinfo">
                  <div className="productdetails">
                    <p className="singlename">{product.name}</p>
                    <div className="supplierdetails">
                      <p className="singlesuppliername">{product.seller}</p>
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

export default Seeds;
