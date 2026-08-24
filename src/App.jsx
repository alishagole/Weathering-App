import React, { useEffect, useState } from "react";

function App() {
  const apiKey = import.meta.env.VITE_MY_API_WEATHERAPP_KEY;

  const [weatherData, setWeatherData] = useState([]);
  const [show, setShow] = useState();
  useEffect(() => {
    const fetchingApi = async () => {
      const city = "pokhara";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      try {
        const res = await fetch(url);
        const resJson = await res.json();
        console.log("Weather Data:", resJson);
        setWeatherData(resJson);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchingApi();
  }, [apiKey]);

  return (
    <>
      <h1>Weather App</h1>

      {/* 2. Check if data exists before rendering properties */}
      {weatherData ? (
        <div>
          <h2>City: {weatherData.name}</h2>
          <p>
            Temperature: {weatherData.main?.temp} <sup>o</sup>c
          </p>
          <p>Weather: {weatherData.weather?.[0]?.description}</p>
          <p>wind:{weatherData.wind?.gust}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}

      <p>API Key Loaded: {apiKey ? "Yes" : "No"}</p>
    </>
  );
}

export default App;
