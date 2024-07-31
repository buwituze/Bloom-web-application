import React from "react";
import { Link } from "react-router-dom";
import "../styles/admin.css";

const Sidebar: React.FC = () => (
  <div className="adminnav">
    <aside className="w-64 bg-green-700 text-white p-4 h-screen">
      <Link to="/allproducts">
        <h1 className="text-2xl font-bold mb-4">Bloom</h1>
      </Link>
      <nav>
        <ul>
          <li className="mb-2">
            <Link
              to="/dashboard-content"
              className="block p-2 hover:bg-green-600 rounded"
            >
              Dashboard
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/market-prices"
              className="block p-2 hover:bg-green-600 rounded"
            >
              Market Prices
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/weather-forecast"
              className="block p-2 hover:bg-green-600 rounded"
            >
              Weather Forecast
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/marketplace"
              className="block p-2 hover:bg-green-600 rounded"
            >
              Marketplace
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/Expert" className="block p-2 hover:bg-green-600 rounded">
              Expert Advice
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/community-forum"
              className="block p-2 hover:bg-green-600 rounded"
            >
              Community Forum
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  </div>
);

export default Sidebar;
