import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./Navbar";
import "../styles/login.css";

function Signup() {
  return (
    <div>
      <NavBar />

      <div className="login">
        <h3>Sign Up</h3>
        <form>
          <div className="formdetails">
            <div className="one">
              <div>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" required /> <br /> <br />
              </div>
              <div>
                <label htmlFor="email">Email</label> <br />
                <input type="email" id="email" required /> <br /> <br />
              </div>
            </div>

            <div className="two">
              <div>
                <label htmlFor="username">Username</label> <br />
                <input type="text" id="username" required /> <br /> <br />
              </div>
              <div>
                <label htmlFor="password">Password</label> <br />
                <input type="password" id="password" required /> <br /> <br />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="country">Country</label> <br />
            <input type="text" id="country" required /> <br /> <br />
          </div>
          <div>
            <label htmlFor="province">Province</label> <br />
            <select name="province" id="province" required>
              <option value="">Northern Province</option>
              <option value="province">Southern Province</option>
              <option value="province">Kigali City</option>
              <option value="province">Eastern Province</option>
              <option value="province">Western Province</option>
            </select>
          </div>{" "}
          <br /> <br />
          <div>
            <Link to="/allproducts">
              <button type="submit">Sign up</button>
            </Link>
          </div>
          <p>
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
export default Signup;
