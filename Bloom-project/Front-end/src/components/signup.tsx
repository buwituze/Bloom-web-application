import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import NavBar from "./Navbar";
import "../styles/login.css";

const Signup: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [province, setProvince] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!name || !email || !username || !password || !country || !province) {
      setError("All fields are required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: name,
          email,
          username,
          password,
          country,
          province,
        }),
      });

      if (!response.ok) {
        const result = await response.json();
        setError(result.message || "Failed to sign up");
        return;
      }

      const result = await response.json();
      if (response.status === 201) {
        navigate("/allproducts");
      } else {
        setError(result.message || "Sign up failed");
      }
    } catch (error) {
      setError("An error occurred: " + (error as Error).message);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="login">
        <h3>Sign Up</h3>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="formdetails">
            <div className="one">
              <div>
                <label htmlFor="name">Name</label> <br />
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />{" "}
                <br /> <br />
              </div>
              <div>
                <label htmlFor="email">Email</label> <br />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />{" "}
                <br /> <br />
              </div>
            </div>

            <div className="two">
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
                />
                <br /> <br />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="country">Country</label> <br />
            <input
              type="text"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
            <br /> <br />
          </div>
          <div>
            <label htmlFor="province">Province</label> <br />
            <select
              name="province"
              id="province"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              required
            >
              <option value="">Select Province</option>
              <option value="Northern Province">Northern Province</option>
              <option value="Southern Province">Southern Province</option>
              <option value="Kigali City">Kigali City</option>
              <option value="Eastern Province">Eastern Province</option>
              <option value="Western Province">Western Province</option>
            </select>
          </div>{" "}
          <br /> <br />
          <div>
            <button type="submit">Sign up</button>
          </div>
          <p>
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
