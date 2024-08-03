import React, {useState} from "react";
import axios from "axios";
import ReturnButton from "../return-home-btn";


export default function WeatherHome() {
    const [data, setData] = useState(null);
    const [location, setLocation] = useState('');
  
    const apiKey = '';
  
    const searchLocation = () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
      
      axios.get(url)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
          setData(null); // Optionally handle error state
        });
  
      setLocation(''); // Clear input after search
    };
  
    return (
      <div className="App">
        <br/>
         <ReturnButton />
        <div className="search">
          <input
            className="input"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="Enter Location"
            type="text"
          />
          <button onClick={searchLocation} type="button">Search Location By City</button>
        </div>
  
        <div className="weather-container">
          <div className="top">
            <div className="location">
              <p>{data ? data.name : 'Location'}</p>
            </div>
            <div className="temp">
              <h2 className="Temp" style={{fontSize: 60}}>{data ? `${Math.round((data.main.feels_like - 273.15) * 1.8 + 32)}°F` : 'Temperature'}</h2>
            </div>
            <div className="description">
              <p>{data ? data.weather[0].main : 'Weather'}</p>
            </div>
          </div>
          <div className="bottom">
            <div className="feels">
              <p>Feels Like</p>
              <p className="bold">{data ? `${Math.round((data.main.feels_like - 273.15) * 1.8 + 32)}°F` : '-'}</p>
            </div>
            <div className="humidity">
              <p>Humidity</p>
              <p className="bold">{data ? `${data.main.humidity}%` : '-'}</p>
            </div>
            <div className="wind">
              <p>Wind</p>
              <p className="bold">{data ? `${data.wind.speed} m/s` : '-'}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }