import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import FarmerNavbar from "../components/farmernav";
import "../styles/cart.css";
import { Link } from "react-router-dom";

const Cart: React.FC = () => {
  const {
    cart,
    updateCartItem,
    removeFromCart,
    getTotalQuantity,
    getTotalAmount,
  } = useContext(CartContext)!;

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) {
      return;
    }
    updateCartItem(productId, newQuantity);
  };

  return (
    <div>
      <FarmerNavbar />
      <div className="cart-page">
        <h2>Your Cart</h2>

        <div>
          <div className="cartcontent">
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <>
                {cart.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div className="cart-item-details">
                      <p>{item.name}</p>
                      <p>{item.price} FRW</p>
                      <div className="cart-item-quantity">
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) =>
                            handleQuantityChange(
                              item.id,
                              parseInt(e.target.value)
                            )
                          }
                          min="1"
                        />
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>{" "}
                      <br />
                      <button onClick={() => removeFromCart(item.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
          <div className="checkoutbtn">
            <p>Total quantity: {getTotalQuantity()} products</p>
            <p>Total amount: {getTotalAmount()} FRW</p>
            <Link to="/checkout">
              <button>Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
