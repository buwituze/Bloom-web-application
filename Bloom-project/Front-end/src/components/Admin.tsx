import React, { useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Sidebar from "./adminnavbar";

const FarmerDashboard: React.FC = () => {
  // ... (previous state and handlers remain the same)

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <>
          <h2 className="text-3xl font-bold mb-6">Welcome to Bloom !</h2>
          <img
            src="Screenshot 2024-07-27 125616.png"
            alt="Dashboard screenshot"
          />
          {/* ... (rest of the dashboard content) */}
        </>
      </main>
    </div>
  );
};

export default FarmerDashboard;
