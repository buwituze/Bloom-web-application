import React from "react";
import { Link } from "react-router-dom";

interface ForecastItem {
  day: string;
  temp: string;
  condition: string;
}

const WeatherForecast: React.FC = () => {
  const forecast: ForecastItem[] = [
    { day: "Monday", temp: "25°C", condition: "Sunny" },
    { day: "Tuesday", temp: "23°C", condition: "Partly Cloudy" },
    { day: "Wednesday", temp: "22°C", condition: "Cloudy" },
    { day: "Thursday", temp: "24°C", condition: "Sunny" },
    { day: "Friday", temp: "26°C", condition: "Sunny" },
  ];

  return (
    <div>
      <div className="navbar">
        <aside className="w-64 bg-green-700 text-white p-4 h-screen">
          <h1 className="text-2xl font-bold mb-4">Bloom</h1>
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
                <Link
                  to="/expert-advice"
                  className="block p-2 hover:bg-green-600 rounded"
                >
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

      <h2 className="text-3xl font-bold mb-6">Weather Forecast</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">5-Day Forecast</h3>
        <div className="grid grid-cols-5 gap-4">
          {forecast.map((day, index) => (
            <div key={index} className="text-center p-4 bg-blue-100 rounded-lg">
              <h4 className="font-semibold">{day.day}</h4>
              <p className="text-2xl font-bold">{day.temp}</p>
              <p>{day.condition}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherForecast;
