import React from 'react';
import MarketPrices from "./MarketPrices";

const DashboardContent: React.FC = () => (
  <>
    <h2 className="text-3xl font-bold mb-6">Farmer Dashboard</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-xl font-semibold mb-2">Welcome!</h3>
        <p>Welcome to Bloom, your one-stop platform for all agricultural needs.</p>
        <img src='Rectangle 8.png' alt="Welcome" />
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-xl font-semibold mb-2">Latest Activities</h3>
        <ul className="list-disc list-inside">
          <li>Checked market prices</li>
          <li>Viewed weather forecast</li>
          <li>Posted in the community forum</li>
        </ul>
        <img src='Group 62.png' alt="Latest Activities" />
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-xl font-semibold mb-2">Market Prices</h3>
        <MarketPrices />
      </div>
      {/* Add more widgets as needed */}
    </div>
  </>
);

export default DashboardContent;
