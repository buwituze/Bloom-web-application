import React from 'react';

interface ForecastItem {
  day: string;
  temp: string;
  condition: string;
}

const WeatherForecast: React.FC = () => {
  const forecast: ForecastItem[] = [
    { day: 'Monday', temp: '25°C', condition: 'Sunny' },
    { day: 'Tuesday', temp: '23°C', condition: 'Partly Cloudy' },
    { day: 'Wednesday', temp: '22°C', condition: 'Cloudy' },
    { day: 'Thursday', temp: '24°C', condition: 'Sunny' },
    { day: 'Friday', temp: '26°C', condition: 'Sunny' },
  ];

  return (
    <div>
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
