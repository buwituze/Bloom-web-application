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
      const response = await fetch("https://gakwaya.pythonanywhere.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const result = await response.json();
        setError(result.message || "Failed to authenticate");
        return;
      }

      const result = await response.json();
      if (result.success) {
        navigate("/homepage");
      } else {
        setError(result.message || "Authentication failed");
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

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import NavBar from "./Navbar";
// import { useNavigate } from "react-router-dom";
// import "../styles/login.css";

// const Login: React.FC = () => {
//   const [username, setUsername] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [error, setError] = useState<string>("");
//   const navigate = useNavigate();

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");

//     if (!username || !password) {
//       setError("All fields are required");
//       return;
//     }

//     const storedUser = localStorage.getItem(username);
//     if (!storedUser) {
//       setError("User does not exist");
//       return;
//     }

//     const user = JSON.parse(storedUser);
//     if (user.password !== password) {
//       setError("Invalid password");
//       return;
//     }

//     navigate("/farmer");
//   };

//   return (
//     <div>
//       <NavBar />
//       <div className="login-container">
//         <div>
//           <img className="login-image" src="FARMER.jpg" alt="Farmer" />
//         </div>
//         <div className="login">
//           <h3>Login</h3>
//           {error && <p className="error">{error}</p>}
//           <form onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="username">Username</label> <br />
//               <input
//                 type="text"
//                 id="username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//               />
//               <br /> <br />
//             </div>
//             <div>
//               <label htmlFor="password">Password</label> <br />
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <br /> <br />
//             </div>
//             <div>
//               <button type="submit">Sign in</button>
//             </div>
//             <p>
//               Don't have an account? <Link to="/signup">Sign up</Link>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
