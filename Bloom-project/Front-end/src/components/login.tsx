import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./Navbar";
import "../styles/login.css";

function Login() {
  return (
    <div>
      <NavBar />
      <div className="login-container">
        <div>
          <img className= "login-image" src="FARMER.jpg"></img>
        </div>
        <div className="login">
        <h3>Login</h3>
        <form>
          <div>
            <label htmlFor="username">Username</label> <br />
            <input type="text" id="username" required /> <br /> <br />
          </div>
          <div>
            <label htmlFor="email">Email</label> <br />
            <input type="email" id="email" required /> <br /> <br />
          </div>
          <div>
            <label htmlFor="password">Password</label> <br />
            <input type="password" id="password" required /> <br /> <br />
          </div>
          <div>
            <Link to="/homepage">
              <button type="submit">Sign in</button>
            </Link>
          </div>
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </div>

      </div>

      
  );
}
export default Login;
