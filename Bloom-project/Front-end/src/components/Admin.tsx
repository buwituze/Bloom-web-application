import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// import Community from "./Community";
// import Expert from "./Expert";
// import Market from "./Market";
// import MarketPrices from "./MarketPrices";
// import Weather from "./Weather";
// import DashboardContent from './DashboardContent';

// Define the Sidebar component
const Sidebar: React.FC = () => (
  <aside className="w-64 bg-green-700 text-white p-4 h-screen">
    <h1 className="text-2xl font-bold mb-4">Bloom</h1>
    <nav>
      <ul>
        <li className="mb-2"><Link to="/dashboard-content" className="block p-2 hover:bg-green-600 rounded">Dashboard</Link></li>
        <li className="mb-2"><Link to="/market-prices" className="block p-2 hover:bg-green-600 rounded">Market Prices</Link></li>
        <li className="mb-2"><Link to="/weather-forecast" className="block p-2 hover:bg-green-600 rounded">Weather Forecast</Link></li>
        <li className="mb-2"><Link to="/marketplace" className="block p-2 hover:bg-green-600 rounded">Marketplace</Link></li>
        <li className="mb-2"><Link to="/expert-advice" className="block p-2 hover:bg-green-600 rounded">Expert Advice</Link></li>
        <li className="mb-2"><Link to="/community-forum" className="block p-2 hover:bg-green-600 rounded">Community Forum</Link></li>
      </ul>
    </nav>
  </aside>
);

const FarmerDashboard: React.FC = () => {
  // ... (previous state and handlers remain the same)

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <>
          <h2 className="text-3xl font-bold mb-6">Welcome to Bloom !</h2>
          <img src='Screenshot 2024-07-27 125616.png' alt="Dashboard screenshot" />
          {/* ... (rest of the dashboard content) */}
        </>
      </main>
    </div>
  );
};

export default FarmerDashboard;
