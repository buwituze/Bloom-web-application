import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import './index.css'
import { CartProvider } from "./Context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CartProvider>
      <ToastContainer />
      <App />
    </CartProvider>
  </React.StrictMode>
);
