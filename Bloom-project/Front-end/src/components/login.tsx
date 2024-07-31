import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./Navbar";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!username || !password) {
      setError("All fields are required");
      return;
    }

    try {
      const response = await fetch("https://gakwaya.pythonanywhere.com/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const result = await response.json();
        setError(result.detail || "Failed to authenticate");
        return;
      }

      const result = await response.json();
      if (result.token) {
        // Store the token and user information in local storage
        localStorage.setItem("token", result.token);
        localStorage.setItem("username", result.username);
        // Navigate to the homepage or dashboard
        navigate("/homepage");
      } else {
        setError("Authentication failed");
      }
    } catch (error) {
      setError("An error occurred: " + (error as Error).message);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="login-container">
        <div>
          <img className="login-image" src="FARMER.jpg" alt="Farmer" />
        </div>
        <div className="login">
          <h3>Login</h3>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username</label> <br />
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <br /> <br />
            </div>
            <div>
              <label htmlFor="password">Password</label> <br />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />{" "}
              <br /> <br />
            </div>
            <div>
              <button type="submit">Sign in</button>
            </div>
            <p>
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
