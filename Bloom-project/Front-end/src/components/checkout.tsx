import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import FarmerNavbar from "./farmernav";
import "../styles/checkout.css";
import { CartContext } from "../Context/CartContext";

const CheckOut: React.FC = () => {
  const { getTotalQuantity, getTotalAmount } = useContext(CartContext)!;
  const [showPopup, setShowPopup] = useState(false);

  const handleConfirmPayment = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 5000);
  };

  return (
    <div>
      <FarmerNavbar />
      <div className="checkout-container">
        <div className="totals">
          <h2>Order Summary</h2>
          <p>Total quantity: {getTotalQuantity()} products</p>
          <br />
          <p>Total amount: {getTotalAmount()} FRW</p> <br /> <br />
          <p>
            Location:
            {/* {userlocation}*/}
          </p>
          <div className="buttons">
            <Link to="/cart">
              <button>Back to Cart</button>
            </Link>
          </div>
        </div>
        <div className="payment-methods">
          <h2>Payment Methods</h2>
          <div className="cardpayment">
            <h3>Pay with Card</h3>
            <div>
              <label>Card Number</label>
              <input type="text" required />
            </div>
            <div>
              <label>Expiry Date</label>
              <input type="text" required />
            </div>
            <div>
              <label>CVV</label>
              <input type="text" required />
            </div>
            <button onClick={handleConfirmPayment}>Pay with Card</button>
          </div>

          <div className="directpayment">
            <div className="momopayment">
              <h3>Pay with MTN MoMo</h3>
              <p>Send the sum amount to:</p> <br />
              <p>
                <strong>078XXXXXXXX</strong>
              </p>
              <button onClick={handleConfirmPayment}>Confirm Payment</button>
            </div>
            <div className="cashpayment">
              <h3>Pay Cash on deliver</h3>
              <button onClick={handleConfirmPayment}>Pay Cash</button>
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <h3>Payment Under Confirmation</h3>
          <p>
            Thank you for Buying from Bloom! <br /> <br /> We notified the
            Supplier about your Order. They will get in contact as soon as the
            Money is received.
          </p>
        </div>
      )}
    </div>
  );
};

export default CheckOut;
